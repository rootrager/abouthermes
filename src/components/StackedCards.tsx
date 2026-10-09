"use client";
import React from "react";

const TWEETS = [
  "/forpagetwo/Screenshot_20261009_192152.png",
  "/forpagetwo/Screenshot_20261009_192239.png",
  "/forpagetwo/Screenshot_20261009_192320.png",
  "/forpagetwo/Screenshot_20261009_192339.png",
  "/forpagetwo/Screenshot_20261009_192412.png",
];

export const StackedCards = () => {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory pb-32 pt-4 px-4 scrollbar-hide flex flex-col items-center" dir="rtl">
      {/* Title */}
      <h2 className="text-3xl font-black text-center mb-8 px-4 py-3 bg-[#E62429] text-white border-4 border-black shadow-[4px_4px_0px_#000] -rotate-2 z-50 leading-tight">
        ارتشِ یکنفره
        <br/>
        <span className="text-sm font-bold bg-black text-white px-2 py-1 mt-2 inline-block">The 1-Person Paradigm</span>
      </h2>

      <p className="text-center font-bold mb-8 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_#000] text-sm">
        اسکرول کنید تا ببینید برنامهنویسهای ایرانی در چند روز گذشته چطور با AI Agentها پروژههای تجاری کامل را دیپلوی کردهاند!
      </p>

      {TWEETS.map((src, idx) => (
          <div
            key={idx}
            className="sticky w-full max-w-sm flex flex-col items-center mb-10 will-change-transform [transform:translateZ(0)]"
            style={{ top: `${(idx + 1) * 1.5 + 4}rem` }}
          >
            <div className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform duration-300 will-change-transform [transform:translateZ(0)]">
               <div className="w-full border-b-4 border-black bg-[#F5F3E7] p-2 flex items-center gap-2">
                 <div className="w-3 h-3 bg-[#E62429] border-2 border-black rounded-full" />
                 <div className="w-3 h-3 bg-yellow-400 border-2 border-black rounded-full" />
                 <div className="w-3 h-3 bg-green-400 border-2 border-black rounded-full" />
                 <div className="font-mono text-xs font-bold ml-auto pr-2">TWEET_{idx+1}.png</div>
               </div>
               <img 
                 src={src} 
                 alt={`Developer Tweet ${idx + 1}`} 
                 className="w-full h-auto object-cover select-none pointer-events-none"
                 loading="lazy"
                 decoding="async"
               />
            </div>
          </div>
      ))}
    </div>
  );
};
