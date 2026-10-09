"use client";

import React, { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root viewer error caught by Next.js boundary:", error);
  }, [error]);

  return (
    <div className="w-full h-screen h-[100dvh] flex items-center justify-center bg-[#ECE9DA] p-4 select-none">
      <div className="flex flex-col h-full max-h-[500px] w-full max-w-md mx-auto border-4 border-black bg-[#F5F3E7] p-6 justify-between items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="inline-block bg-[#E62429] text-white font-mono text-[10px] font-black px-2 py-0.5 border-2 border-black tracking-widest uppercase">
          PRESENTATION VIEWER // RECOVERY
        </div>

        <div className="my-auto flex flex-col items-center gap-3">
          <h1 className="text-3xl font-black uppercase text-black tracking-tight">
            NETWORK ERROR
          </h1>
          <p className="text-xs font-bold text-zinc-700 max-w-xs">
            ارتباط زنده با میزبان موقتاً قطع شد یا رندر اسلاید با خطای پیش‌بینی‌نشده مواجه گردید.
          </p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-3.5 bg-[#E62429] text-white font-black text-sm uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_#000] hover:bg-[#cf1e23] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
          >
            ↺ تلاش مجدد برای اتصال
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-zinc-100 cursor-pointer"
          >
            بارگذاری مجدد صفحه
          </button>
        </div>
      </div>
    </div>
  );
}
