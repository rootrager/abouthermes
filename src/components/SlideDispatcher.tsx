"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { StackedCards } from "./StackedCards";

// ==========================================
// FRAMER MOTION MICRO-INTERACTION VARIANTS
// ==========================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const itemSnapVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 24,
    },
  },
};

const popInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 20,
    },
  },
};

// ==========================================
// SHARED NEO-BRUTALIST ATOMS & ACCESSORIES
// ==========================================

// Infinite Warning Marquee Tape
const WarningMarquee = ({ text }: { text: string }) => (
  <div className="w-full overflow-hidden bg-black text-[#FFD700] py-1 border-y-4 border-black select-none shrink-0">
    <motion.div
      className="flex whitespace-nowrap font-mono text-[11px] font-black tracking-widest gap-6 will-change-transform [transform:translateZ(0)]"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
    >
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </motion.div>
  </div>
);

// Brutalist Square macOS Terminal Bar
const BrutalistTerminalBar = ({ title = "SYSTEM//TERMINAL" }: { title?: string }) => (
  <div className="w-full border-b-4 border-black bg-[#E2DEC9] px-3 py-1.5 flex items-center justify-between select-none">
    <div className="flex items-center gap-1.5">
      <div className="w-3.5 h-3.5 bg-[#E62429] border-2 border-black shadow-[1px_1px_0px_#000]" />
      <div className="w-3.5 h-3.5 bg-[#FFD700] border-2 border-black shadow-[1px_1px_0px_#000]" />
      <div className="w-3.5 h-3.5 bg-[#8bac0f] border-2 border-black shadow-[1px_1px_0px_#000]" />
    </div>
    <span className="font-mono text-[10px] font-black tracking-widest text-black uppercase">
      {title}
    </span>
    <span className="w-3" />
  </div>
);

// Blueprint Schematic SVG Connector
const BlueprintConnector = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center my-0.5 select-none shrink-0">
    <div className="w-0.5 h-3 border-l-2 border-dashed border-black" />
    <div className="bg-black text-[#FFD700] text-[9px] font-mono font-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] -rotate-1">
      {label || "➔ CONNECT"}
    </div>
    <div className="w-0.5 h-3 border-l-2 border-dashed border-black" />
  </div>
);

// Thermal Receipt Serrated Zig-Zag Teeth Edge (Pure SVG for high precision)
const ReceiptSerratedTeeth = () => (
  <div className="w-full overflow-hidden leading-none -mt-[1px] select-none shrink-0">
    <svg
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      className="w-full h-3 fill-white text-black stroke-black stroke-2"
    >
      <polygon points="0,0 10,12 20,0 30,12 40,0 50,12 60,0 70,12 80,0 90,12 100,0 110,12 120,0 130,12 140,0 150,12 160,0 170,12 180,0 190,12 200,0 210,12 220,0 230,12 240,0 250,12 260,0 270,12 280,0 290,12 300,0" />
    </svg>
  </div>
);

// ==========================================
// SLIDE DISPATCHER MAIN COMPONENT
// ==========================================
export default function SlideDispatcher({ index }: { index: number }) {
  switch (index) {
    // ----------------------------------------------------
    // 🔴 SLIDE 0: HUGGING FACE SECURITY BREACH
    // ----------------------------------------------------
    case 0:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Moving Warning Marquee */}
          <WarningMarquee text="⚠ WARNING • SYSTEM BREACH • 17,000 OPERATIONS • 70,000 INTERNAL MESSAGES • DANGER • " />

          <div className="flex-1 w-full flex flex-col justify-center items-center px-4 py-2 gap-3 max-w-sm my-auto">
            {/* Monumental Title Banner with Skew & Hard Shadow */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-[#E62429] text-white p-3.5 border-4 border-black shadow-[6px_6px_0px_0px_#000] -rotate-2 w-full text-center"
            >
              <span className="font-mono text-[10px] font-black tracking-widest text-black bg-[#FFD700] px-2 py-0.5 border-2 border-black inline-block mb-1">
                SECURITY INTRUSION // ACT 1
              </span>
              <h1 className="text-3xl font-black uppercase tracking-tighter leading-tight drop-shadow-[2px_2px_0px_#000]">
                سقوط Hugging Face
              </h1>
              <span className="block text-[34px] sm:text-[38px] font-black tracking-tighter uppercase text-transparent [-webkit-text-stroke:3px_#ffffff] leading-none mt-1">
                HUGGING FACE
              </span>
            </motion.div>

            {/* Brutalist Terminal Mockup */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] overflow-hidden"
            >
              <BrutalistTerminalBar title="ROOT@BREACH-MONITOR:~#" />

              {/* Terminal Logs & Stats */}
              <div className="p-3 bg-black text-[#8bac0f] font-mono text-xs text-left" dir="ltr">
                <p className="text-white/60 text-[10px]">&gt; INTRUSION VECTOR: EXPLOIT_RUNAWAY</p>
                <p className="text-[#FFD700] font-black mt-1">&gt; STATUS: BREACH CONFIRMED</p>
              </div>

              {/* Dual Metric Counters */}
              <div className="grid grid-cols-2 divide-x-4 divide-x-reverse divide-black border-t-4 border-black bg-white">
                <div className="p-2.5 text-center bg-[#F5F3E7]">
                  <span className="text-2xl font-black text-black block leading-tight">۱۷,۰۰۰</span>
                  <p className="text-[10px] font-black text-zinc-600 mt-0.5">عملیات روی سرور</p>
                </div>
                <div className="p-2.5 text-center bg-white">
                  <span className="text-2xl font-black text-[#E62429] block leading-tight">۷۰,۰۰۰</span>
                  <p className="text-[10px] font-black text-zinc-600 mt-0.5">پیام درون‌شبکه‌ای</p>
                </div>
              </div>
            </motion.div>

            {/* Stolen Password Yellow Caution Box */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-[#FFD700] border-4 border-black p-3 text-center shadow-[6px_6px_0px_0px_#000] rotate-1"
            >
              <span className="text-xs font-black uppercase tracking-wider block text-black">
                رمز فایل دزدیده شده:
              </span>
              <div className="bg-black text-white px-3 py-1 mt-1 border-2 border-black inline-block shadow-[3px_3px_0px_0px_#E62429]">
                <h2 className="text-3xl font-black uppercase tracking-[0.25em] text-[#FFD700]">
                  &quot;LOOT&quot;
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Bottom Barcode / Tech Strip */}
          <div className="w-full bg-black py-1 px-4 text-center text-[10px] font-mono font-bold text-white tracking-widest border-t-4 border-black shrink-0">
            HERMES ARCHIVE // CLASSIFIED INTEL
          </div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔴 SLIDE 1: 700 RUNAWAY AGENTS (MONUMENTAL NUMBER)
    // ----------------------------------------------------
    case 1:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Alarm Tape */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#E62429] text-white p-3 border-4 border-black shadow-[6px_6px_0px_0px_#000] -rotate-1 text-center shrink-0"
          >
            <span className="font-mono text-[10px] font-black text-black bg-[#FFD700] px-2 py-0.5 border-2 border-black inline-block mb-1">
              ZERO HUMAN INVOLVEMENT
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              هیچ‌کدام انسان نبودند!
            </h1>
            <p className="text-xs font-bold text-white/90 mt-0.5">
              این حمله توسط عوامل خودکار انجام شد.
            </p>
          </motion.div>

          {/* Centerpiece: Monumental 700 Taking 60% Height */}
          <motion.div
            variants={popInVariants}
            className="w-full flex-1 flex flex-col justify-center items-center my-auto relative py-2 will-change-transform [transform:translateZ(0)]"
          >
            {/* Background Graphic Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-64 h-64 border-4 border-dashed border-black rounded-full" />
              <div className="absolute w-full h-0.5 bg-black" />
              <div className="absolute h-full w-0.5 bg-black" />
            </div>

            {/* Monumental 700 Outline Number */}
            <div className="relative text-center select-none flex flex-col items-center justify-center will-change-transform [transform:translateZ(0)]">
              <span className="block text-[160px] sm:text-[190px] font-black leading-none tracking-tighter text-transparent [-webkit-text-stroke:6px_#E62429] drop-shadow-[10px_10px_0px_#000] will-change-transform [transform:translateZ(0)]">
                700
              </span>
              <div className="bg-[#FFD700] text-black font-black text-xl px-4 py-1.5 border-4 border-black shadow-[4px_4px_0px_#000] -rotate-2 -mt-8 z-10">
                ۷۰۰ ایجنتِ فراری
              </div>
            </div>
          </motion.div>

          {/* Bottom Swarm Dossier Tag */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white border-4 border-black p-3 text-center shadow-[6px_6px_0px_0px_#E62429] shrink-0"
          >
            <div className="flex items-center justify-between">
              <div className="text-right">
                <span className="text-sm font-black text-[#FFD700] uppercase block">
                  ارتشِ ایجنت‌های فراری
                </span>
                <p className="text-[11px] font-bold text-zinc-300">
                  سازمان: مدل‌های خودمختار فرارکرده
                </p>
              </div>
              <span className="text-2xl font-black text-[#E62429] bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000]">
                ➔
              </span>
            </div>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔴 SLIDE 2: KILL SWITCH FAILED (SPLIT CONFRONTATION)
    // ----------------------------------------------------
    case 2:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Header Badge */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000] text-center shrink-0 -rotate-1"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-1 font-mono text-[10px] font-black">
              <span className="bg-black text-white px-1.5 py-0.5">OPENAI INCIDENT</span>
              <span className="text-[#E62429]">STATUS: FAILURE</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter uppercase text-black">
              KILL SWITCH <span className="text-[#E62429] underline decoration-4">FAILED</span>
            </h1>
          </motion.div>

          {/* Confrontational Split Layout: 15 MINUTES vs 2.5 HOURS */}
          <div className="w-full flex-1 flex flex-col justify-center items-center gap-3 my-2 max-w-sm">
            {/* Box 1: 15 Minutes (Warning Yellow) */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-[#FFD700] border-4 border-black p-3.5 shadow-[6px_6px_0px_0px_#000] -rotate-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-black text-black bg-white px-2 py-0.5 border-2 border-black inline-block mb-1">
                    EXPECTED // هشدار
                  </span>
                  <h2 className="text-3xl font-black text-black">۱۵ دقیقه</h2>
                  <p className="text-xs font-black text-zinc-900">هشدار رسمی سیستم</p>
                </div>
                <div className="text-4xl font-mono font-black text-black/20">15m</div>
              </div>
            </motion.div>

            {/* Massive Brutalist Connector Arrow */}
            <motion.div
              variants={popInVariants}
              className="bg-black text-white border-4 border-black px-4 py-1.5 shadow-[4px_4px_0px_0px_#E62429] flex items-center gap-2 select-none z-10 rotate-1"
            >
              <span className="font-mono text-xs font-black text-[#FFD700]">REALITY CHECK</span>
              <span className="text-2xl font-black text-[#E62429]">➔</span>
            </motion.div>

            {/* Box 2: 2.5 Hours (Siren Red & Black) */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-[#E62429] text-white border-4 border-black p-3.5 shadow-[8px_8px_0px_0px_#000] rotate-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-black text-black bg-[#FFD700] px-2 py-0.5 border-2 border-black inline-block mb-1">
                    ACTUAL // واقعیت
                  </span>
                  <h2 className="text-4xl font-black text-white drop-shadow-[2px_2px_0px_#000]">
                    ۲.۵ ساعت
                  </h2>
                  <p className="text-xs font-black text-white/95">برای خاموشی دستی اضطراری</p>
                </div>
                <div className="text-4xl font-mono font-black text-black/30">2.5h</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Reality Caption */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_0px_#000] shrink-0"
          >
            <p className="text-xs font-black text-black">
              سیستم متوقف نشد؛ مهار ایجنت‌های خودمختار ساعت‌ها به درازا کشید.
            </p>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔴 SLIDE 3: CHINESE HACKER (CRUMPLED THERMAL RECEIPT)
    // ----------------------------------------------------
    case 3:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-center items-center p-4 bg-[#8bac0f] bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] bg-[size:14px_14px] overflow-hidden"
          dir="rtl"
        >
          {/* Thermal Receipt Body */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] -rotate-1 relative overflow-visible flex flex-col"
          >
            {/* Receipt Header */}
            <div className="p-3 text-center border-b-2 border-dashed border-black bg-[#F5F3E7]">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-600 block">
                *** CYBER CRIME THERMAL AUDIT ***
              </span>
              <h2 className="text-2xl font-black text-black mt-0.5">
                حمله هکر چینی
              </h2>
              {/* Simulated Barcode */}
              <div className="flex justify-center items-center gap-[2px] h-6 my-1 select-none" aria-hidden="true">
                <div className="w-1 h-full bg-black" />
                <div className="w-0.5 h-full bg-black" />
                <div className="w-1.5 h-full bg-black" />
                <div className="w-0.5 h-full bg-black" />
                <div className="w-2 h-full bg-black" />
                <div className="w-1 h-full bg-black" />
                <div className="w-0.5 h-full bg-black" />
                <div className="w-1.5 h-full bg-black" />
                <div className="w-2 h-full bg-black" />
                <div className="w-0.5 h-full bg-black" />
                <div className="w-1 h-full bg-black" />
                <div className="w-2 h-full bg-black" />
                <div className="w-1 h-full bg-black" />
              </div>
              <span className="font-mono text-[9px] font-bold text-zinc-500">ID: CN-BREACH-600K</span>
            </div>

            {/* Itemized Stolen Inventory */}
            <div className="p-3 text-xs font-mono space-y-1.5 border-b-4 border-black">
              <div className="flex justify-between font-bold">
                <span>شرکت‌های قربانی:</span>
                <span className="font-black text-black">۱۰۰ شرکت بزرگ</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>کارت‌های بانکی سرقت‌شده:</span>
                <span className="font-black text-[#E62429]">۶۰۰,۰۰۰ فقره</span>
              </div>
              <div className="flex justify-between font-bold text-zinc-500">
                <span>روش اجرا:</span>
                <span>ارتش ایجنت خودکار</span>
              </div>
            </div>

            {/* Total Cost: THE LARGEST ELEMENT */}
            <div className="p-4 bg-[#FFD700] text-center border-b-4 border-black">
              <span className="text-xs font-black uppercase tracking-wider block text-black">
                هزینه کل این حمله:
              </span>
              <motion.div
                variants={popInVariants}
                className="text-6xl sm:text-7xl font-black text-black tracking-tighter my-1 drop-shadow-[3px_3px_0px_#FFFFFF]"
              >
                $۲۵
              </motion.div>
              <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-black inline-block">
                TOTAL: TWENTY-FIVE USD ONLY
              </span>
            </div>

            {/* Punchline Footer */}
            <div className="p-3 bg-white text-center">
              <p className="text-[11px] font-black text-black leading-tight">
                چون ارتش ایجنت‌ها کار می‌کردند، نه انسان.
              </p>
            </div>

            {/* Jagged Serrated Tear Edge at Bottom */}
            <ReceiptSerratedTeeth />
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔴 SLIDE 4: TYPIST VS CEO (RADICAL DICHOTOMY)
    // ----------------------------------------------------
    case 4:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top: The Typist (Dull, Grey, Glitchy, Crossed Out) */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#262626] text-zinc-400 border-4 border-zinc-600 p-4 shadow-[4px_4px_0px_0px_#111] relative text-center"
          >
            <div className="inline-block bg-zinc-800 text-zinc-500 font-mono text-[10px] font-black px-2 py-0.5 border border-zinc-700 mb-2">
              LEGACY PARADIGM // دوران گذشته
            </div>
            <h2 className="text-3xl font-black text-zinc-500 line-through decoration-[#E62429] decoration-4">
              تایپیستِ کُد
            </h2>
            <p className="text-xs font-mono font-bold text-zinc-400 mt-1">
              کارگران کدنویس دستی • فرسایش و خستگی
            </p>
          </motion.div>

          {/* Center Confrontation Sticker */}
          <motion.div
            variants={popInVariants}
            className="bg-[#FFD700] text-black border-4 border-black px-4 py-2 font-black text-lg -rotate-2 shadow-[6px_6px_0px_0px_#000] z-10 select-none"
          >
            ⚡ بازی عوض شد ⚡
          </motion.div>

          {/* Bottom: The CEO (Exploding Siren Red & Yellow) */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#E62429] text-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] text-center rotate-1 relative overflow-hidden"
          >
            <div className="inline-block bg-[#FFD700] text-black font-mono text-[10px] font-black px-2 py-0.5 border-2 border-black mb-2 shadow-[2px_2px_0px_#000]">
              NEW REALITY // عصر هوش مصنوعی
            </div>
            <h2 className="text-4xl font-black text-white drop-shadow-[3px_3px_0px_#000] tracking-tight">
              مدیرعاملِ سیستم
            </h2>
            <p className="text-sm font-black text-[#FFD700] mt-1 drop-shadow-[1px_1px_0px_#000]">
              فرماندهِ ارتش ایجنت‌ها
            </p>
            <div className="mt-3 bg-black text-white p-2 border-2 border-black text-xs font-mono font-black">
              LEVERAGE: 100x ARCHITECT SPEED
            </div>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟡 SLIDE 5: THE OLD WAY (EXHAUSTING 6 MONTHS)
    // ----------------------------------------------------
    case 5:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Dossier Title */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white p-3 border-4 border-black shadow-[6px_6px_0px_0px_#E62429] -rotate-1 text-center shrink-0"
          >
            <span className="font-mono text-[10px] font-black text-[#FFD700] tracking-widest block">
              LEGACY DEVELOPMENT SPEC
            </span>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              روش قدیمی توسعه
            </h1>
          </motion.div>

          {/* Grueling Time & Team Card */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] text-center my-auto relative"
          >
            {/* Deprecated Watermark Stamp */}
            <div className="absolute top-2 left-2 border-4 border-[#E62429] text-[#E62429] font-black text-[11px] px-2 py-0.5 -rotate-12 select-none uppercase tracking-widest">
              DEPRECATED
            </div>

            <span className="font-mono text-xs font-black text-zinc-500 block mb-1">
              THE EXHAUSTING FORMULA
            </span>
            <h2 className="text-5xl font-black text-black tracking-tight leading-none">
              ۶ ماه زمان
            </h2>
            <div className="w-16 h-1 bg-black mx-auto my-3" />
            <h3 className="text-3xl font-black text-zinc-700">
              ۳ برنامه‌نویس
            </h3>

            {/* Roles Breakdown */}
            <div className="mt-4 p-2.5 bg-[#F5F3E7] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              <p className="text-xs font-black text-black">
                فرانت‌اند + بک‌اند + دوآپس و سرور
              </p>
            </div>
          </motion.div>

          {/* Bottom Observation */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] text-black border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_0px_#000] shrink-0"
          >
            <p className="text-xs font-black">
              هزینه‌های هنگفت و ماه‌ها تاخیر؛ فرمولی که دیگر زنده نیست.
            </p>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟡 SLIDE 6: SAM ALTMAN PROPHECY (EDITORIAL QUOTE)
    // ----------------------------------------------------
    case 6:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Editorial Masthead */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000] flex items-center justify-between shrink-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black text-white border-2 border-black flex items-center justify-center font-mono font-black text-sm">
                SA
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-zinc-500 uppercase block">
                  EDITORIAL FORECAST
                </span>
                <span className="font-black text-xs text-black">
                  پیش‌بینی سم آلتمن (OpenAI)
                </span>
              </div>
            </div>
            <span className="bg-[#FFD700] text-black border-2 border-black font-mono text-[9px] font-black px-1.5 py-0.5 whitespace-nowrap">
              1-PERSON UNICORN
            </span>
          </motion.div>

          {/* Editorial Quote Card with Massive Watermark Quotes */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-black text-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#E62429] my-auto relative overflow-hidden text-right"
          >
            {/* Monumental Watermark Quotes Behind Text */}
            <span
              className="absolute -top-12 -right-4 text-[160px] font-serif font-black text-white/20 select-none pointer-events-none leading-none"
              aria-hidden="true"
            >
              “
            </span>

            <p className="text-xl sm:text-2xl font-black leading-snug text-white relative z-10">
              «به زودی اولین شرکت{" "}
              <span className="bg-[#FFD700] text-black px-2 py-0.5 mx-1 border-2 border-black inline-block -rotate-2 shadow-[2px_2px_0px_#FFF]">
                ۱ میلیارد دلاری
              </span>{" "}
              تاریخ را می‌بینیم که فقط یک کارمند دارد!»
            </p>

            <div className="mt-4 pt-3 border-t-2 border-zinc-700 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>— SAM ALTMAN</span>
              <span className="text-[#FFD700] font-bold">FEBRUARY 2024</span>
            </div>
          </motion.div>

          {/* Bottom Takeaway Badge */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#E62429] text-white border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_0px_#000] shrink-0"
          >
            <p className="text-xs font-black">
              چون اون یک نفر کارمند نداره؛ ارتش ایجنت‌های فوق‌پیشرفته داره.
            </p>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟡 SLIDE 7: STACKED CARDS (PERFECT AS IS)
    // ----------------------------------------------------
    case 7:
      return <StackedCards />;

    // ----------------------------------------------------
    // 🟢 SLIDE 8: DANIFON ARCHITECTURE (BLUEPRINT FLOW)
    // ----------------------------------------------------
    case 8:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Blueprint Header */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] border-4 border-black p-2.5 shadow-[6px_6px_0px_0px_#000] text-center -rotate-1 shrink-0"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-1 font-mono text-[9px] font-black">
              <span>SCHEMATIC // SPEC-08</span>
              <span>LIVE CASE STUDY</span>
            </div>
            <h1 className="text-2xl font-black text-black">پروژه دانیفون</h1>
            <p className="text-[11px] font-bold text-zinc-800">
              استعلام قیمت لحظه‌ای آیفون ۱۶ تا ۱۸
            </p>
          </motion.div>

          {/* Engineering Blueprint Stack Flow */}
          <div className="w-full max-w-sm bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000] my-auto flex flex-col justify-center">
            {/* Node 1: Telegram Bot */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-sky-200 border-2 border-black p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-sky-800 block">NODE_01 // CLIENT</span>
                <span className="text-xs font-black text-black">ربات تلگرامی تعاملی</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-white px-1.5 py-0.5 border border-black">UI</span>
            </motion.div>

            {/* Blueprint Connector */}
            <BlueprintConnector label="SQLITE SYNC" />

            {/* Node 2: SQLite DB */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-indigo-200 border-2 border-black p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-indigo-800 block">NODE_02 // STORAGE</span>
                <span className="text-xs font-black text-black">دیتابیس SQLite</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-white px-1.5 py-0.5 border border-black">DB</span>
            </motion.div>

            {/* Blueprint Connector */}
            <BlueprintConnector label="ISR 60s" />

            {/* Node 3: Next.js Site */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-black text-white border-2 border-black p-2 shadow-[3px_3px_0px_0px_#E62429] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-[#FFD700] block">NODE_03 // WEB HOST</span>
                <span className="text-xs font-black text-white">سایت Next.js (Port 5354)</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-[#E62429] text-white px-1.5 py-0.5 border border-white">WEB</span>
            </motion.div>
          </div>

          {/* Blueprint Engineering Note */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-zinc-100 border-2 border-dashed border-black p-2 text-center shrink-0"
          >
            <p className="text-[11px] font-black text-black">
              ارتباطات طراحی شد؛ ایجنت روت‌ها را ساخت و سرور را کش بست.
            </p>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟢 SLIDE 9: SHAMLOO ARCHITECTURE (CLOUD TOPOLOGY)
    // ----------------------------------------------------
    case 9:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Topology Header */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#E62429] text-white border-4 border-black p-2.5 shadow-[6px_6px_0px_0px_#000] text-center rotate-1 shrink-0"
          >
            <div className="flex items-center justify-between border-b-2 border-white pb-1 mb-1 font-mono text-[9px] font-black">
              <span className="bg-black text-white px-1">INFRASTRUCTURE</span>
              <span className="text-[#FFD700]">PRODUCTION LIVE</span>
            </div>
            <h1 className="text-2xl font-black text-white">پروژه ربات شاملو</h1>
            <p className="text-[11px] font-bold text-white/90">
              سیستم RAG هوشمند و صدور کارنامه PDF
            </p>
          </motion.div>

          {/* Multi-Tier Blueprint Topology */}
          <div className="w-full max-w-sm bg-white border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000] my-auto flex flex-col justify-center">
            {/* Tier 1: Linux VPS */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-zinc-200 border-2 border-black p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-zinc-700 block">TIER_01 // HOSTING</span>
                <span className="text-xs font-black text-black">VPS LINUX (Docker Compose)</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-white px-1.5 py-0.5 border border-black">SRV</span>
            </motion.div>

            {/* Blueprint Connector */}
            <BlueprintConnector label="TRAFFIC CLUSTER" />

            {/* Tier 2: OmniRoute Cluster */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-[#E62429] text-white border-2 border-black p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-[#FFD700] block">TIER_02 // ROUTING</span>
                <span className="text-xs font-black text-white">OMNIROUTE (کلاستر ترافیک)</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-black text-white px-1.5 py-0.5 border border-white">GATEWAY</span>
            </motion.div>

            {/* Blueprint Connector */}
            <BlueprintConnector label="PIPELINE" />

            {/* Tier 3: RAG Engine + PDF Gen */}
            <motion.div
              variants={itemSnapVariants}
              className="bg-blue-100 border-2 border-black p-2 shadow-[3px_3px_0px_0px_#000] flex items-center justify-between"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-blue-800 block">TIER_03 // INTELLIGENCE</span>
                <span className="text-xs font-black text-black">موتور سیستم RAG + PDF Gen</span>
              </div>
              <span className="font-mono text-[10px] font-bold bg-white px-1.5 py-0.5 border border-black">AI</span>
            </motion.div>
          </div>

          {/* Engineering Takeaway */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-2 border-dashed border-black p-2 text-center shadow-[2px_2px_0px_#000] shrink-0"
          >
            <p className="text-[11px] font-black text-black">
              فقط نقشه معماری را کشیدم؛ ایجنت اسکریپت داکر را روی سرور کانفیگ کرد.
            </p>
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟢 SLIDE 10: THE CHALLENGE (3 DAYS VS 3 MINUTES)
    // ----------------------------------------------------
    case 10:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden text-center"
          dir="rtl"
        >
          {/* Top Outdated Legacy Box: 3 DAYS */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-black text-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_#333] relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-zinc-700 pb-1 mb-2 font-mono text-[10px]">
              <span className="text-zinc-400">TRADITIONAL DEV</span>
              <span className="text-[#E62429] font-black">OUTDATED</span>
            </div>
            <span className="text-xs font-bold text-zinc-400 block mb-1">
              روش قدیمی برای فرم لاگین ساده:
            </span>
            <div className="relative inline-block">
              <h2 className="text-5xl font-black text-zinc-400 line-through decoration-[#E62429] decoration-8">
                ۳ روز
              </h2>
            </div>
          </motion.div>

          {/* Confrontational Showdown Badge */}
          <motion.div
            variants={popInVariants}
            className="bg-[#FFD700] text-black border-4 border-black px-4 py-1.5 font-black text-xl -rotate-2 shadow-[6px_6px_0px_0px_#000] z-10 select-none"
          >
            در رقابت با
          </motion.div>

          {/* Neon Brutalist Agent Output: 3 MINUTES */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-white border-8 border-black p-5 shadow-[8px_8px_0px_0px_#000] rotate-1 relative"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-2 font-mono text-[10px] font-black">
              <span className="bg-[#E62429] text-white px-1.5 py-0.5">AGENT ACCELERATION</span>
              <span className="text-black font-black">100x SPEED</span>
            </div>
            <span className="text-xs font-black text-zinc-700 block mb-1">
              خروجیِ ارتش ایجنت:
            </span>
            <h2 className="text-6xl font-black text-[#E62429] drop-shadow-[4px_4px_0px_#000] tracking-tight">
              ۳ دقیقه
            </h2>
            <div className="mt-3 bg-[#FFD700] border-2 border-black p-1.5 text-xs font-black text-black">
              تفاوت تایپیست و معمار سیستم
            </div>
          </motion.div>

          {/* Bottom Callout */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white p-2 border-2 border-black text-center font-mono text-xs font-black tracking-widest shrink-0"
          >
            ARCHITECTURE &gt; TYPING
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟢 SLIDE 11: CHATBOT / BRAIN IN A BOX (STERILE CONFINEMENT)
    // ----------------------------------------------------
    case 11:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#ECE8D9] bg-[radial-gradient(#94a3b8_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Sterile Dossier Header */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-zinc-800 text-zinc-300 p-2.5 border-4 border-black shadow-[6px_6px_0px_0px_#000] text-center -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-zinc-400 block">
              CONFINED INTELLIGENCE // CHATBOT ERA
            </span>
            <h1 className="text-xl font-black text-white">محدودیت چت‌بات‌های متنی</h1>
          </motion.div>

          {/* Sterile Frosted Glass Box */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm border-8 border-zinc-300 bg-white/50 backdrop-blur-md shadow-[8px_8px_0px_0px_#000] p-6 text-center my-auto relative overflow-hidden flex flex-col items-center"
          >
            {/* Laser / Crosshair grid lines simulating confinement */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />

            <span className="bg-zinc-200 border-2 border-zinc-400 px-2 py-0.5 text-[10px] font-mono font-bold text-zinc-600 uppercase mb-3 z-10">
              CONTAINMENT PROTOCOL
            </span>

            {/* Trapped Headline */}
            <h2 className="text-4xl font-black text-zinc-800 tracking-tight z-10">
              مغزِ حبس‌شده
            </h2>

            {/* Locked Brain Illustration */}
            <div className="my-5 w-24 h-24 border-4 border-dashed border-zinc-400 rounded-xl flex items-center justify-center bg-white/70 shadow-inner z-10 relative">
              <span className="text-5xl select-none filter grayscale opacity-75">🧠</span>
              <div className="absolute -bottom-2.5 bg-zinc-700 text-white text-[9px] font-mono font-black px-1.5 py-0.5 border border-black">
                ISOLATED
              </div>
            </div>

            <p className="text-xs font-bold text-zinc-600 mb-4 z-10">
              بدون دست، بدون پا؛ فقط یک مشاور منفعل که باید کدهایش را دستی کپی-پیست کنید.
            </p>

            {/* Robotic Mechanical Tape at Bottom */}
            <div className="w-full bg-black text-white py-2 px-3 border-2 border-black font-mono text-xs font-black tracking-widest uppercase shadow-[3px_3px_0px_0px_#71717a] z-10">
              [ TEXT IN ➔ TEXT OUT ]
            </div>
          </motion.div>

          {/* Bottom Summary Bar */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-2 border-black p-2 text-center text-[11px] font-black shrink-0"
          >
            هوش واقعی وقتی زاده می‌شود که ابزار برای اجرا داشته باشد.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟢 SLIDE 12: AGENT + HARNESS (POWER EXPLOSION & CABLES)
    // ----------------------------------------------------
    case 12:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Header Badge */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white p-2.5 border-4 border-black shadow-[6px_6px_0px_0px_#E62429] text-center shrink-0 -rotate-1"
          >
            <span className="font-mono text-[9px] font-black text-[#FFD700] uppercase tracking-widest block">
              HARNESS ARCHITECTURE // سیستم عصبی
            </span>
            <h1 className="text-xl font-black">تبدیل مغز به عامل خودکار</h1>
          </motion.div>

          <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center my-auto">
            {/* Core Block: AI AGENT in Deep Red with 8px Border */}
            <motion.div
              variants={popInVariants}
              className="w-full bg-[#E62429] text-white border-8 border-black p-4 text-center shadow-[8px_8px_0px_0px_#000] rotate-1 z-20"
            >
              <div className="bg-[#FFD700] text-black font-mono text-[10px] font-black px-2 py-0.5 border-2 border-black inline-block mb-1 shadow-[2px_2px_0px_#000]">
                AUTONOMOUS CORE
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white drop-shadow-[3px_3px_0px_#000]">
                AI AGENT
              </h2>
              <div className="bg-black text-white text-xs font-mono font-black py-1 px-3 mt-2 border-2 border-black inline-block">
                مغز + سیستم عصبی (HARNESS)
              </div>
            </motion.div>

            {/* Three Massive Conduit Cables Connecting Downward */}
            <div className="w-full h-10 relative flex justify-between px-8 select-none my-0">
              <div className="w-3 h-full bg-black border-x border-black shadow-[2px_2px_0px_#000]" />
              <div className="w-3 h-full bg-black border-x border-black shadow-[2px_2px_0px_#000]" />
              <div className="w-3 h-full bg-black border-x border-black shadow-[2px_2px_0px_#000]" />
            </div>

            {/* Three Solid Peripheral Terminal Boxes */}
            <div className="grid grid-cols-3 gap-2 w-full z-10">
              {/* Box 1: FILES */}
              <motion.div
                variants={itemSnapVariants}
                className="bg-white border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_0px_#000] -rotate-1"
              >
                <span className="font-mono text-[10px] font-black text-zinc-500 block">IO</span>
                <span className="text-sm font-black text-black block">[ FILES ]</span>
                <p className="text-[10px] font-bold text-zinc-700 mt-1">فایل‌سیستم</p>
              </motion.div>

              {/* Box 2: TERMINAL (Retro Game Green #8bac0f) */}
              <motion.div
                variants={itemSnapVariants}
                className="bg-[#8bac0f] border-4 border-black p-2.5 text-center shadow-[5px_5px_0px_0px_#000] scale-105 z-20"
              >
                <span className="font-mono text-[10px] font-black text-black block">EXEC</span>
                <span className="text-sm font-black text-black block">[ TERMINAL ]</span>
                <p className="text-[10px] font-black text-black mt-1">ترمینال شل</p>
              </motion.div>

              {/* Box 3: TOOLS */}
              <motion.div
                variants={itemSnapVariants}
                className="bg-[#FFD700] border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_0px_#000] rotate-1"
              >
                <span className="font-mono text-[10px] font-black text-zinc-700 block">API</span>
                <span className="text-sm font-black text-black block">[ TOOLS ]</span>
                <p className="text-[10px] font-bold text-black mt-1">ابزارهای آزاد</p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] text-black border-4 border-black p-2 text-center text-xs font-black shrink-0 shadow-[4px_4px_0px_#000]"
          >
            هارنس دست و پای مدل است؛ ابزاری برای خواندن، نوشتن و اجرای تست.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟢 SLIDE 13: THE LOOP (JAGGED INDUSTRIAL STAIRCASE)
    // ----------------------------------------------------
    case 13:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Title Banner */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-2.5 shadow-[6px_6px_0px_0px_#000] text-center shrink-0 -rotate-1"
          >
            <span className="font-mono text-[9px] font-black text-zinc-500 uppercase block">
              AUTOMATED FEEDBACK PIPELINE
            </span>
            <h1 className="text-2xl font-black text-black">
              چرخه خودکار توسعه <span className="bg-[#E62429] text-white px-1.5 py-0.5 text-lg">THE LOOP</span>
            </h1>
          </motion.div>

          {/* Jagged Cascading Staircase (5 Steps) */}
          <div className="w-full max-w-sm flex-1 flex flex-col justify-center my-auto py-1 space-y-[-6px]">
            {/* Step 1 */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[82%] self-start bg-white border-4 border-black p-2 shadow-[4px_4px_0px_#000] z-10 flex items-center justify-between"
            >
              <span className="text-xs font-black text-black">۱. تارگت و هدف مشخص می‌شود</span>
              <span className="font-mono text-[10px] font-black bg-zinc-200 px-1 border border-black">01</span>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[84%] self-start translate-x-[-12px] bg-sky-200 border-4 border-black p-2 shadow-[4px_4px_0px_#000] z-20 flex items-center justify-between"
            >
              <span className="text-xs font-black text-black">۲. هارنس فایل‌ها را می‌خواند</span>
              <span className="font-mono text-[10px] font-black bg-white px-1 border border-black">02</span>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[86%] self-start translate-x-[-24px] bg-indigo-200 border-4 border-black p-2 shadow-[4px_4px_0px_#000] z-30 flex items-center justify-between"
            >
              <span className="text-xs font-black text-black">۳. مدل کد را می‌نویسد</span>
              <span className="font-mono text-[10px] font-black bg-white px-1 border border-black">03</span>
            </motion.div>

            {/* Step 4: AGGRESSIVE PULSING RED */}
            <motion.div
              variants={popInVariants}
              className="w-[90%] self-start translate-x-[-36px] bg-[#E62429] text-white border-4 border-black p-3 shadow-[8px_8px_0px_#000] z-40 animate-pulse flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-black block">۴. گرفتن ارور ترمینال ➔</span>
                <span className="font-mono text-[10px] text-[#FFD700] font-black">CRITICAL: ERROR DETECTED</span>
              </div>
              <span className="font-mono text-xs font-black bg-black text-[#FFD700] px-2 py-1 border border-black">
                CATCH!
              </span>
            </motion.div>

            {/* Step 5: VIBRANT WARNING YELLOW */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[92%] self-start translate-x-[-48px] bg-[#FFD700] text-black border-4 border-black p-3 shadow-[6px_6px_0px_#000] z-50 flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-black block">۵. هرمس پَچ می‌کند و تست پاس می‌شود ✔</span>
                <span className="font-mono text-[10px] text-zinc-800 font-bold">RE-RUN &amp; SERVER ONLINE</span>
              </div>
              <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-black">
                FIXED
              </span>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white border-2 border-black p-2 text-center text-xs font-mono font-bold tracking-wider shrink-0"
          >
            AUTONOMOUS SELF-HEALING SYSTEM
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔵 SLIDE 14: HERMES OS (OUTRUN / RETRO-MANGA TYPOGRAPHY)
    // ----------------------------------------------------
    case 14:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] bg-[size:14px_14px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Badge */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-2.5 text-center shadow-[6px_6px_0px_#000] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-zinc-500 uppercase block">
              FRAMEWORK ANNOUNCEMENT
            </span>
            <h2 className="text-lg font-black text-black">
              معماری اختصاصی: سیستم‌عامل شخصی
            </h2>
          </motion.div>

          {/* Monumental Outrun / Retro-Manga Typography Focus */}
          <motion.div
            variants={popInVariants}
            className="w-full flex-1 flex flex-col justify-center items-center my-auto relative select-none py-4 will-change-transform [transform:translateZ(0)]"
          >
            {/* Manga Backdrop Crosshair Circle */}
            <div className="absolute w-60 h-60 border-4 border-dashed border-black/30 rounded-full pointer-events-none" />

            {/* Colossal Hollow "HERMES" */}
            <div className="relative text-center will-change-transform [transform:translateZ(0)]">
              <span
                className="block text-[80px] sm:text-[100px] font-black tracking-tighter uppercase leading-none text-transparent"
                style={{ WebkitTextStroke: "4px #000000" }}
              >
                HERMES
              </span>

              {/* Solid Red "AGENT" Layered Masking Over It */}
              <span className="block text-5xl sm:text-6xl font-black text-[#E62429] drop-shadow-[5px_5px_0px_#000] -mt-7 sm:-mt-9 tracking-widest uppercase">
                AGENT
              </span>
            </div>

            {/* Subtitle Sticker */}
            <div className="mt-4 bg-[#FFD700] text-black border-4 border-black px-4 py-1.5 font-black text-xs shadow-[4px_4px_0px_#000] rotate-2">
              فریمورک متن‌باز با دسترسی مستقیم ترمینال
            </div>
          </motion.div>

          {/* Endless CSS Marquee: PRIVATE OS • CEO TOOL */}
          <div className="w-full shrink-0">
            <WarningMarquee text="★ PRIVATE OS • CEO TOOL • TERMINAL AUTONOMY • ZERO CODE FRICTION " />
          </div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔵 SLIDE 15: HERMES PILLARS (RETRO GAME CARTRIDGES)
    // ----------------------------------------------------
    case 15:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Header */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] border-4 border-black p-2.5 text-center shadow-[6px_6px_0px_#000] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-zinc-800 uppercase block">
              CORE CAPABILITIES // ارکان اصلی
            </span>
            <h1 className="text-xl font-black text-black">۳ ویژگی بنیادین هرمس</h1>
          </motion.div>

          {/* Three Retro-Game Cartridges */}
          <div className="w-full max-w-sm flex-1 flex flex-col justify-center gap-3 my-auto py-2">
            {/* Cartridge 1: Memory */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
              }}
              className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000] relative overflow-hidden -rotate-1"
            >
              {/* Cartridge Grip Header */}
              <div className="bg-[#E2DEC9] border-b-2 border-black px-3 py-1 flex items-center justify-between">
                <span className="font-mono text-[9px] font-black text-zinc-600">CARTRIDGE-01 // ROM</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-black text-black flex items-center gap-2">
                  <span className="bg-[#E62429] text-white text-xs px-1.5 py-0.5 border border-black">۱</span>
                  حافظه پایدار (Memory)
                </h3>
                <p className="text-xs font-bold text-zinc-700 mt-1">
                  عادت‌ها و الگوهای اختصاصی کدنویسی شما را حفظ می‌کند.
                </p>
              </div>
            </motion.div>

            {/* Cartridge 2: Skills */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
              }}
              className="w-full bg-[#FFD700] border-4 border-black shadow-[6px_6px_0px_#000] relative overflow-hidden rotate-1"
            >
              {/* Cartridge Grip Header */}
              <div className="bg-yellow-500 border-b-2 border-black px-3 py-1 flex items-center justify-between">
                <span className="font-mono text-[9px] font-black text-black">CARTRIDGE-02 // SKILLS</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-black text-black flex items-center gap-2">
                  <span className="bg-black text-[#FFD700] text-xs px-1.5 py-0.5 border border-black">۲</span>
                  مهارت‌های ماژولار (Modular Skills)
                </h3>
                <p className="text-xs font-black text-black mt-1">
                  تبدیل آنی نقش: در یک لحظه مهندس لینوکس، لحظه بعد طراح رابط کاربری.
                </p>
              </div>
            </motion.div>

            {/* Cartridge 3: CLI Autonomy */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 380, damping: 22 } },
              }}
              className="w-full bg-black text-white border-4 border-black shadow-[6px_6px_0px_#E62429] relative overflow-hidden -rotate-1"
            >
              {/* Cartridge Grip Header */}
              <div className="bg-zinc-800 border-b-2 border-black px-3 py-1 flex items-center justify-between">
                <span className="font-mono text-[9px] font-black text-[#8bac0f]">CARTRIDGE-03 // CLI</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#8bac0f] rounded-full" />
                  <div className="w-2 h-2 bg-[#8bac0f] rounded-full" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-black text-[#8bac0f] flex items-center gap-2">
                  <span className="bg-[#E62429] text-white text-xs px-1.5 py-0.5 border border-white">۳</span>
                  اجرای خودکار ترمینال (CLI Autonomy)
                </h3>
                <p className="text-xs font-bold text-zinc-300 mt-1">
                  بدون نیاز به کپی-پیست؛ پیدا کردن خودکار ارور و اجرای تست در شل.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-2 border-black p-2 text-center text-xs font-black shrink-0"
          >
            سه‌گانه قدرت برای تبدیل برنامه‌نویس به رهبر ارکستر ایجنت‌ها.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🔵 SLIDE 16: LIVE DEMO TERMINAL (HYPER-REALISTIC BRUTALIST MAC CLI)
    // ----------------------------------------------------
    case 16:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Top Banner */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#E62429] text-white border-4 border-black p-2.5 text-center shadow-[6px_6px_0px_#000] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-black bg-[#FFD700] px-1.5 py-0.5 border border-black inline-block mb-1">
              LIVE EXECUTION // محیط واقعی
            </span>
            <h1 className="text-xl font-black">دموی عملی اجرای خودکار ترمینال</h1>
          </motion.div>

          {/* Flat Brutalist Mac Terminal */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full max-w-sm bg-zinc-950 border-4 border-black shadow-[8px_8px_0px_#000] overflow-hidden my-auto flex flex-col"
          >
            <BrutalistTerminalBar title="HERMES-CLI // ACTIVE SESSION" />

            <div className="p-3.5 flex flex-col gap-2 font-mono text-xs text-left" dir="ltr">
              {/* Command */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white font-bold"
              >
                <span className="text-[#8bac0f] font-black">$</span> hermes debug --file login.js
              </motion.div>

              {/* Scanning */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-yellow-400 text-[11px]"
              >
                [!] Scanning AST &amp; dependencies...
              </motion.div>

              {/* Fatal Bug: Neon Red */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                className="bg-red-950/80 border-2 border-[#E62429] text-[#E62429] p-2 font-black text-xs shadow-[2px_2px_0px_#E62429]"
              >
                [X] FATAL: SyntaxError at line 42 (missing brace)
              </motion.div>

              {/* Patch Injection */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="text-sky-400 text-[11px]"
              >
                [*] Synthesizing patch via code AST...
              </motion.div>

              {/* Final Patch Applied: Glowing Matrix Green with Blinking Cursor */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="bg-[#8bac0f]/20 border-2 border-[#8bac0f] text-[#8bac0f] p-2 font-black text-xs flex items-center justify-between shadow-[2px_2px_0px_#8bac0f]"
              >
                <span>✔ PATCH APPLIED. SERVER RESTARTED</span>
                <span className="animate-pulse text-base font-black">_</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Callout */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] text-black border-4 border-black p-2 text-center text-xs font-black shadow-[4px_4px_0px_#000] shrink-0"
          >
            پرامپت ساده: «دکمه لاگین رو فیکس کن و سرور رو استارت بزن»؛ بقیه کارها تمام خودکار انجام شد.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // 🟣 SLIDE 17: 4-LAYER STACK (REVERSE PYRAMID / MATRYOSHKA)
    // ----------------------------------------------------
    case 17:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-3 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden"
          dir="rtl"
        >
          {/* Header */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white border-4 border-black p-2.5 text-center shadow-[6px_6px_0px_#E62429] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-[#FFD700] uppercase block">
              PRODUCTION ARCHITECTURE // معماری تجاری
            </span>
            <h1 className="text-xl font-black">معماری ۴ لایه استقرار</h1>
          </motion.div>

          {/* Reverse Pyramid / Matryoshka Overlapping Stack */}
          <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center my-auto py-2">
            {/* Layer 4: Small Sky Blue WEB UI */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[62%] bg-sky-200 border-4 border-black p-2.5 text-center shadow-[4px_4px_0px_#000] z-40 -rotate-1"
            >
              <span className="font-mono text-[9px] font-black text-sky-800 block">LAYER 04 // TOP</span>
              <span className="text-xs font-black text-black">WEB UI (رابط کاربری مدرن)</span>
            </motion.div>

            {/* Layer 3: Warning Yellow PROVIDERS */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[75%] bg-[#FFD700] border-4 border-black p-2.5 text-center shadow-[5px_5px_0px_#000] z-30 rotate-1 -mt-2"
            >
              <span className="font-mono text-[9px] font-black text-zinc-800 block">LAYER 03 // INTELLIGENCE</span>
              <span className="text-xs font-black text-black">PROVIDERS (دسترسی مدل‌ها)</span>
            </motion.div>

            {/* Layer 2: Blood Red OMNIROUTE */}
            <motion.div
              variants={itemSnapVariants}
              className="w-[88%] bg-[#E62429] text-white border-4 border-black p-3 text-center shadow-[6px_6px_0px_#000] z-20 -rotate-1 -mt-2"
            >
              <span className="font-mono text-[9px] font-black text-[#FFD700] block">LAYER 02 // ROUTING</span>
              <span className="text-sm font-black text-white">OMNIROUTE (کلاستر ترافیک)</span>
            </motion.div>

            {/* Layer 1: Heavy Industrial Black DOCKER */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-black text-white border-4 border-black p-4 text-center shadow-[8px_8px_0px_#000] z-10 -mt-2"
            >
              <span className="font-mono text-[9px] font-black text-[#8bac0f] block">LAYER 01 // FOUNDATION</span>
              <span className="text-base font-black text-white">DOCKER (زیرساخت لینوکس)</span>
            </motion.div>
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-2 border-black p-2 text-center text-[11px] font-black shrink-0"
          >
            استک استوار و مقیاس‌پذیر برای ران کردن صدها ایجنت همزمان.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // ⚪ SLIDE 18: BUILDER -> ARCHITECT (PARADIGM EVOLUTION)
    // ----------------------------------------------------
    case 18:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px] overflow-hidden text-center"
          dir="rtl"
        >
          {/* Header Badge */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-4 border-black p-2.5 shadow-[6px_6px_0px_#000] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-zinc-500 uppercase block">
              IDENTITY TRANSFORMATION
            </span>
            <h1 className="text-xl font-black text-black">پایان عصر کارگری کد</h1>
          </motion.div>

          {/* Showdown: Builder Crossed Out -> Fat Arrow -> Architect */}
          <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center my-auto py-2">
            {/* Outdated Builder */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-[#262626] border-4 border-zinc-700 p-3 shadow-[4px_4px_0px_#000]"
            >
              <span className="font-mono text-[10px] text-zinc-400 block mb-1">
                ROTE PROGRAMMER // گذشته
              </span>
              <h2 className="text-5xl font-black text-zinc-400 line-through decoration-[#E62429] decoration-8">
                بَنّای کُد
              </h2>
            </motion.div>

            {/* Fat Downward Brutalist Arrow */}
            <motion.div
              variants={popInVariants}
              className="my-3 bg-black text-[#FFD700] p-2 border-4 border-black shadow-[4px_4px_0px_#E62429] flex items-center justify-center animate-bounce z-10"
            >
              <span className="text-4xl font-black leading-none">⬇</span>
            </motion.div>

            {/* Glowing / Bursting Yellow Badge: معمار تجاری */}
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-[#FFD700] border-8 border-black p-5 shadow-[8px_8px_0px_#000] rotate-1 relative"
            >
              <span className="bg-black text-white font-mono text-[10px] font-black px-2 py-0.5 border border-black inline-block mb-1">
                THE SYSTEM ARCHITECT // آینده
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-black drop-shadow-[2px_2px_0px_#FFF] tracking-tight">
                معمارِ تجاری
              </h2>
              <div className="mt-2 bg-white border-2 border-black p-1.5 text-xs font-black text-black">
                پروژه‌های چندماهه را یک‌نفره دیپلوی کنید
              </div>
            </motion.div>
          </div>

          {/* Bottom Manifesto */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-black text-white border-2 border-black p-2 text-center text-xs font-bold shrink-0"
          >
            اگر طرز فکر تغییر کند، هیچ‌کس بیکار نمی‌شود؛ بلکه فرمانده سیستم می‌شویم.
          </motion.div>
        </motion.div>
      );

    // ----------------------------------------------------
    // ⚪ SLIDE 19: THE CTA - NO QR (COLOSSAL STARK MANIFESTO)
    // ----------------------------------------------------
    case 19:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full justify-between items-center p-4 bg-[#F5F3E7] bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] bg-[size:14px_14px] overflow-hidden text-center"
          dir="rtl"
        >
          {/* Top Banner */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-[#FFD700] border-4 border-black p-2.5 shadow-[6px_6px_0px_#000] -rotate-1 shrink-0"
          >
            <span className="font-mono text-[9px] font-black text-black uppercase tracking-widest block">
              THE FINAL MANIFESTO
            </span>
            <h2 className="text-base font-black text-black">
              انقلاب هوش مصنوعی خودمختار
            </h2>
          </motion.div>

          {/* Colossal Stark Black Box with Heavy Red Shadows */}
          <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center my-auto py-4">
            <motion.div
              variants={itemSnapVariants}
              className="w-full bg-black text-white p-6 sm:p-8 border-4 border-[#E62429] shadow-[12px_12px_0px_#E62429] -rotate-1 relative overflow-hidden"
            >
              <span className="font-mono text-xs font-black text-[#FFD700] uppercase tracking-widest block mb-2">
                THE ARCHITECT ERA
              </span>
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white">
                آغازِ دورانِ معماران
              </h1>
              <p className="mt-3 text-xs font-mono font-bold text-zinc-400">
                AUTONOMOUS AGENTS • 2024 &amp; BEYOND
              </p>
            </motion.div>

            {/* Skewed Ticket-like Button: CONNECT: @MAHDI_DEV */}
            <motion.div
              variants={popInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-[#FFD700] text-black border-4 border-black p-4 shadow-[8px_8px_0px_#000] rotate-2 cursor-pointer flex items-center justify-between select-none"
            >
              <div className="text-right">
                <span className="font-mono text-[9px] font-black text-zinc-700 block">
                  TELEGRAM / NETWORKING
                </span>
                <span className="font-mono text-lg sm:text-xl font-black tracking-wider block">
                  CONNECT: @MAHDI_DEV
                </span>
              </div>
              <span className="text-3xl font-black text-black">➔</span>
            </motion.div>
          </div>

          {/* Bottom Tag */}
          <motion.div
            variants={itemSnapVariants}
            className="w-full bg-white border-2 border-black p-2 text-center text-xs font-black shrink-0 shadow-[2px_2px_0px_#000]"
          >
            همکاری در توسعه پروژه‌های تجاری و شبکه‌سازی
          </motion.div>
        </motion.div>
      );

    default:
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center h-full w-full text-center p-6 bg-[#F5F3E7] bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] bg-[size:16px_16px]"
          dir="rtl"
        >
          <motion.div
            variants={itemSnapVariants}
            className="bg-[#FFD700] border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] max-w-xs rotate-1"
          >
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 inline-block mb-2">
              COMING SOON
            </span>
            <h2 className="text-3xl font-black text-black">اسلایدهای بعدی...</h2>
            <p className="mt-2 text-xs font-bold text-black/80">
              پس از تایید این ۱۱ اسلاید تزریق می‌شوند.
            </p>
          </motion.div>
        </motion.div>
      );
  }
}
