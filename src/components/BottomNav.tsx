"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BottomNavProps {
  onNext: () => void;
  onPrev: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  nextLabel?: string;
  prevLabel?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  onNext,
  onPrev,
  canPrev = true,
  canNext = true,
  nextLabel = "CONTINUE",
  prevLabel = "BACK",
}) => {
  return (
    <nav
      aria-label="Slide Navigation"
      className="absolute bottom-0 left-0 right-0 w-full p-4 bg-[#F5F3E7] border-t-4 border-black z-30"
    >
      <div className="flex items-center gap-3 w-full">
        {/* BACK Button */}
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          whileTap={canPrev ? { x: 2, y: 2 } : undefined}
          transition={{ duration: 0.05 }}
          className={`flex-1 h-14 flex items-center justify-center font-black text-sm sm:text-base uppercase tracking-wider
            bg-white text-black border-4 border-black transition-colors select-none
            ${
              canPrev
                ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 cursor-pointer active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "opacity-40 cursor-not-allowed shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
        >
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {prevLabel}
          </span>
        </motion.button>

        {/* CONTINUE Button */}
        <motion.button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          whileTap={canNext ? { x: 2, y: 2 } : undefined}
          transition={{ duration: 0.05 }}
          className={`flex-1 h-14 flex items-center justify-center font-black text-sm sm:text-base uppercase tracking-wider
            bg-[#E62429] text-white border-4 border-black transition-colors select-none
            ${
              canNext
                ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#cf1e23] cursor-pointer active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "opacity-40 cursor-not-allowed shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
        >
          <span className="flex items-center gap-1.5">
            {nextLabel}
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        </motion.button>
      </div>
    </nav>
  );
};

export default BottomNav;
