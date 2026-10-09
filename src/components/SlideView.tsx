import React from "react";

export interface SlideViewProps {
  title: string;
  slideNumber: number;
  subtitle?: string;
  totalSlides?: number;
}

export const SlideView: React.FC<SlideViewProps> = ({
  title,
  slideNumber,
  subtitle = "Neo-Brutalist / Manga-Retro Presentation Deck",
  totalSlides = 6,
}) => {
  // Format numbers with leading zeros (e.g. 01, 02)
  const formattedCurrent = String(slideNumber).padStart(2, "0");
  const formattedTotal = String(totalSlides).padStart(2, "0");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 select-none">
      {/* Central Neo-Brutalist Card */}
      <div className="w-full max-w-sm neo-card bg-white p-6 relative flex flex-col gap-5 overflow-hidden">
        {/* Top Decorative Manga Header Bar */}
        <div className="flex items-center justify-between border-b-4 border-black pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3.5 h-3.5 bg-[#E62429] border-2 border-black" />
            <span className="font-mono text-xs font-black tracking-widest uppercase">
              ACT // {formattedCurrent}
            </span>
          </div>

          <div className="bg-black text-white px-2 py-0.5 text-xs font-mono font-bold tracking-wider">
            {formattedCurrent}/{formattedTotal}
          </div>
        </div>

        {/* Screentone / Halftone Accent Strip */}
        <div className="w-full h-4 manga-stripes border-2 border-black bg-[#F5F3E7]" />

        {/* Main Slide Title & Identification */}
        <div className="flex flex-col gap-2 py-2">
          <div className="inline-flex items-center gap-1.5 self-start bg-[#E62429] text-white px-2.5 py-1 text-xs font-black tracking-wider uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            SLIDE {formattedCurrent}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-none break-words">
            {title}
          </h2>

          <p className="text-xs sm:text-sm font-bold text-zinc-700 leading-snug">
            {subtitle}
          </p>
        </div>

        {/* Phase 2 Ready Placeholder Block */}
        <div className="border-2 border-dashed border-black bg-[#F5F3E7] p-4 flex flex-col items-center justify-center gap-1.5 text-center">
          <span className="font-mono text-3xl font-black text-[#E62429]">
            #{formattedCurrent}
          </span>
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-black">
            Ready for Phase 2 Content
          </p>
        </div>

        {/* Bottom Technical / Retro Metadata Bar */}
        <div className="flex items-center justify-between pt-2 border-t-2 border-black text-[10px] font-mono font-bold tracking-widest text-zinc-600">
          <span>HERMES PROTOCOL</span>
          <span>100% BLACK OFFSET</span>
        </div>
      </div>
    </div>
  );
};

export default SlideView;
