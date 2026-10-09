"use client";

import React, { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin route error caught by Next.js boundary:", error);
  }, [error]);

  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-4 sm:p-6 select-none font-sans">
      <div className="border-4 border-white bg-[#141414] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#FFFFFF] max-w-lg w-full text-center flex flex-col items-center gap-4">
        <div className="inline-block bg-[#E62429] text-white font-mono text-[11px] font-black px-2.5 py-1 border-2 border-white tracking-widest uppercase">
          SYS_CRITICAL // ERROR BOUNDARY
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
          NETWORK ERROR
        </h1>

        <p className="text-xs sm:text-sm font-mono text-zinc-400 leading-relaxed max-w-sm">
          A critical exception occurred while communicating with Upstash or rendering the Host Controller.
        </p>

        <div className="w-full bg-black border-2 border-zinc-700 p-3 text-left font-mono text-[11px] text-red-400 break-words">
          &gt; ERROR: {error.message || "Failed to maintain connection state"}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 py-3 px-4 bg-[#E62429] text-white font-black text-sm uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#FFF] hover:bg-[#cf1e23] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
          >
            ↺ RECOVER CONTROLLER
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="flex-1 py-3 px-4 bg-white text-black font-black text-sm uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#FFF] hover:bg-zinc-200 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
          >
            RELOAD WINDOW
          </button>
        </div>
      </div>
    </div>
  );
}
