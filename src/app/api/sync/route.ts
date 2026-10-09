import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json(
      { error: "Upstash environment variables not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${url}/get/currentSlide`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Upstash error: ${res.statusText}`);
    }

    let data: { result?: unknown; error?: unknown } | null = null;
    try {
      data = await res.json();
    } catch {
      throw new Error("Invalid or non-JSON response received from Upstash");
    }

    if (!data || typeof data !== "object") {
      throw new Error("Malformed payload received from Upstash");
    }

    if (data.error) {
      throw new Error(`Upstash returned error: ${String(data.error)}`);
    }

    const rawVal = data.result;
    const currentSlide =
      rawVal === null || rawVal === undefined ? 0 : Number(rawVal);

    return NextResponse.json(
      { currentSlide: Number.isNaN(currentSlide) ? 0 : currentSlide },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("GET /api/sync error:", error);
    // CRITICAL LIVE SAFETY: Return 502 on Upstash failure or rate-limit instead of { currentSlide: 0 } with 200 OK.
    // Returning 200 with 0 causes all audience phones to jump to Slide 0 during transient network/Redis issues.
    return NextResponse.json(
      { error: "Upstash sync unavailable" },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}

export async function POST(request: Request) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json(
      { error: "Upstash environment variables not configured" },
      { status: 500 }
    );
  }

  try {
    let body: { currentSlide?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body" },
        { status: 400 }
      );
    }

    const slideNumber = Number(body?.currentSlide);
    const currentSlide = Number.isNaN(slideNumber) ? 0 : Math.max(0, slideNumber);

    const res = await fetch(`${url}/set/currentSlide/${currentSlide}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Upstash error: ${res.statusText}`);
    }

    let upstashData: { result?: unknown; error?: unknown } | null = null;
    try {
      upstashData = await res.json();
    } catch {
      // In case Upstash returns non-JSON text
    }

    if (upstashData?.error) {
      throw new Error(`Upstash set error: ${String(upstashData.error)}`);
    }

    return NextResponse.json({ success: true, currentSlide });
  } catch (error) {
    console.error("POST /api/sync error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update current slide" },
      { status: 502 }
    );
  }
}
