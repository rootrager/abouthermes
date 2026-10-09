"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import SlideDispatcher from "@/components/SlideDispatcher";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
}

const SLIDES: SlideData[] = [
  { id: 0, title: "Act 1", subtitle: "Slide 0" },
  { id: 1, title: "Act 1", subtitle: "Slide 1" },
  { id: 2, title: "Act 1", subtitle: "Slide 2" },
  { id: 3, title: "Act 1", subtitle: "Slide 3" },
  { id: 4, title: "Act 2", subtitle: "Slide 4" },
  { id: 5, title: "Act 2", subtitle: "Slide 5" },
  { id: 6, title: "Act 2", subtitle: "Slide 6" },
  { id: 7, title: "Act 2", subtitle: "Slide 7" },
  { id: 8, title: "Act 3", subtitle: "Slide 8" },
  { id: 9, title: "Act 3", subtitle: "Slide 9" },
  { id: 10, title: "Act 3", subtitle: "Slide 10" },
  { id: 11, title: "Act 3", subtitle: "Slide 11" },
  { id: 12, title: "Act 4", subtitle: "Slide 12" },
  { id: 13, title: "Act 4", subtitle: "Slide 13" },
  { id: 14, title: "Act 4", subtitle: "Slide 14" },
  { id: 15, title: "Act 4", subtitle: "Slide 15" },
  { id: 16, title: "Act 5", subtitle: "Slide 16" },
  { id: 17, title: "Act 5", subtitle: "Slide 17" },
  { id: 18, title: "Act 5", subtitle: "Slide 18" },
  { id: 19, title: "Act 5", subtitle: "Slide 19" },
];

const TOTAL_SLIDES = SLIDES.length;

// Spring animation transition variants for slide-to-slide navigation
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.18 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 32, mass: 0.8 },
      opacity: { duration: 0.18 },
    },
  }),
};

export default function PresentationViewer() {
  // Current slide state (0 to 5) synced with host via Upstash Redis
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // Navigation direction (+1 for forward, -1 for backward)
  const [direction, setDirection] = useState<number>(1);

  // Poll Upstash Redis via /api/sync every 800ms with concurrency lock & abort signal
  useEffect(() => {
    let isMounted = true;
    let isPolling = false;
    const controller = new AbortController();

    const pollSync = async () => {
      // Prevent overlapping concurrent requests if network slows down
      if (isPolling || !isMounted) return;
      isPolling = true;

      try {
        const res = await fetch("/api/sync", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!res.ok) return;

        const data = await res.json();
        const serverSlide =
          typeof data.currentSlide === "number" ? data.currentSlide : 0;
        const clampedSlide = Math.min(
          Math.max(0, serverSlide),
          TOTAL_SLIDES - 1
        );

        if (isMounted) {
          setCurrentSlide((prev) => {
            if (prev !== clampedSlide) {
              setDirection(clampedSlide > prev ? 1 : -1);
              return clampedSlide;
            }
            return prev;
          });
        }
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return; // Expected during unmount/cleanup
        }
        console.error("Viewer sync polling error:", err);
      } finally {
        isPolling = false;
      }
    };

    // Immediate initial sync
    pollSync();

    // Regular 800ms polling interval
    const intervalId = setInterval(pollSync, 800);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
      controller.abort();
    };
  }, []);

  return (
    <div className="w-full h-full h-screen h-[100dvh] flex items-center justify-center bg-[#ECE9DA] p-0 sm:py-6 overflow-hidden select-none">
      {/* Mobile-Sized Neo-Brutalist Frame Container */}
      <main className="flex flex-col h-full w-full max-w-md mx-auto border-x-4 border-black bg-[#F5F3E7] relative justify-between overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Top Header / Progress Track */}
        <header className="w-full border-b-4 border-black bg-[#F5F3E7] p-3 z-20 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E62429] border-2 border-black" />
              <span className="font-mono text-xs font-black tracking-widest text-black uppercase">
                HERMES // PRESENTATION
              </span>
            </div>

            <span className="text-[11px] font-mono font-bold bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              SLIDE {currentSlide + 1}/{TOTAL_SLIDES}
            </span>
          </div>

          {/* Segmented Neo-Brutalist Progress Indicators (Single 20-slide bar) */}
          <div className="flex gap-0.5 w-full" aria-hidden="true">
            {SLIDES.map((_, index) => {
              const isActive = index === currentSlide;
              const isPast = index < currentSlide;
              return (
                <div
                  key={index}
                  className={`flex-1 h-2 border border-black transition-colors duration-150 ${
                    isActive
                      ? "bg-[#E62429]"
                      : isPast
                      ? "bg-black"
                      : "bg-white"
                  }`}
                />
              );
            })}
          </div>
        </header>

        {/* Central Viewport for Animated Slide Display */}
        <div className="relative flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full will-change-transform [transform:translateZ(0)]"
            >
              <SlideDispatcher index={currentSlide} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Neo-Brutalist Host Sync Status Badge with iOS Safari safe area */}
        <div className="w-full p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center bg-black text-white font-mono font-bold text-xs uppercase tracking-[0.2em] shadow-[0px_-4px_0px_#E62429] z-30">
          ● SYNCED WITH HOST
        </div>
      </main>
    </div>
  );
}
