"use client";

import React, { useState, useEffect, useCallback } from "react";

interface SlideInfo {
  id: number;
  title: string;
  subtitle: string;
  speakerNotes: string;
}

const SLIDES: SlideInfo[] = [
  { id: 0, title: "The Hook 1", subtitle: "سقوط", speakerNotes: "[برو جلوی کلاس. به کسی نگاه نکن. ۳ ثانیه سکوت مطلق] تیر ماه امسال، یک گروهِ نفوذی، دژ امنیتی استارتاپ Hugging Face رو شکستن. ۱۷ هزار اَکشن اجرا کردن، ۷۰ هزار پیام..." },
  { id: 1, title: "The Hook 2", subtitle: "عوامل خودکار", speakerNotes: "[یک قدم به جلو - آرام اما محکم] نکته ترسناک ماجرا میدونید چی بود؟ هیچکدوم از این نفوذیها انسان نبودن. یک ارتش با ۷۰۰ تا ایجنت بودن." },
  { id: 2, title: "The Hook 3", subtitle: "شکست سیستم", speakerNotes: "[مکث ۲ ثانیهای] ماه گذشته، OpenAI مجبور شد آموزشش رو متوقف کنه... دکمه خاموشی رو زدن اما سیستم متوقف نشد! ۱۵ دقیقه هشدار، ۲.۵ ساعت طول کشید تا دستی متوقف کنن." },
  { id: 3, title: "The Hook 4", subtitle: "هکر چینی", speakerNotes: "یک هکر چینی به ۱۰۰ تا شرکت حمله کرد. ۶۰۰ هزار کردیتکارت دزدید. میدونید هزینه کل این حمله چقدر بود؟ فقط ۲۵ دلار. خودش کد نمیزد." },
  { id: 4, title: "Typist vs CEO", subtitle: "تایپیست در برابر مدیرعامل", speakerNotes: "نسل ما به یک دروغ عادت کرده. [دستت رو ببر بالا] کیا اینجا فکر میکنن هوش مصنوعی یعنی ChatGPT؟ ما فکر میکنیم AI یک «تایپیستِ باهوشه». دوران تایپیست بودن تموم شد." },
  { id: 5, title: "The Old Way", subtitle: "۶ ماه توسعه", speakerNotes: "[نگاه بین بچهها - لحن مشوقانه] این قدرت فقط برای هک نیست... برای خلق کردنه. قبلاً فرمول چی بود؟ یک فرانت، یک بکاند، یک سرور و ۶ ماه زمان." },
  { id: 6, title: "The Prediction", subtitle: "یک میلیارد دلار", speakerNotes: "[یه قدم بیا جلو] امروز بازی عوض شده. سم آلتمن پیشبینی کرده: «اولین شرکت یک میلیارد دلاری تاریخ با فقط یک کارمند!» کارمند نداره... ایجنت داره." },
  { id: 7, title: "FOMO Tweets", subtitle: "اثبات ۴۸ ساعته", speakerNotes: "برنامهنویسهایی هستن که تو ۴۸ ساعت، کل SaaS رو بالا میارن. (بچهها دارن روی گوشی توییتها رو اسکرول میکنن). به ایجنت میگن اپلیکیشن با Next و Postgres میخوام." },
  { id: 8, title: "Danifon", subtitle: "دانیفون", speakerNotes: "[دست روی سینه - صمیمی] مثال واقعی از خودم بگم. پروژه دانیفون: ربات تلگرام، SQLite، سایت Next روی پورت ५۳۵۴. فکر کردید روتها رو تکتک دستی زدم؟ من معمار بودم! ایجنت روتها رو ساخت." },
  { id: 9, title: "Shamloo AI", subtitle: "شاملو", speakerNotes: "یا ربات شاملو: نیاز به OmniRoute، سیستم RAG و تولید PDF داشتیم. واقعا فکر میکنید خودم داکر روی لینوکس نصب کردم؟ من نقشه دادم، ایجنت اسکریپت کانفیگ رو نوشت." },
  { id: 10, title: "Challenge", subtitle: "چالش فرم لاگین", speakerNotes: "بیاید چالش کنیم! اگه تا الان برای یک فرم لاگین ۳ روز زمان میذاشتیم... نمیتونیم با کسی رقابت کنیم که همون رو تو ۳ دقیقه خروجی میده! مدیرعامل باشید." },

  // --- ACT 3 TO 6 ---
  { id: 11, title: "Chatbot", subtitle: "مغز حبسشده", speakerNotes: "[لحن آموزشی] مگه Agent همون ChatGPT نیست؟ خیر. شما وقتی با چتبات کار میکنید، انگار یک «مغز داخل باکس شیشهای» دارید. هیچ دست و پایی نداره، مجبوری کپی-پیست کنی." },
  { id: 12, title: "Agent+Harness", subtitle: "هارنس", speakerNotes: "اما وقتی به این مغز، دست و پا (سیستم عصبی) میدی... میشه AI Agent. ابزار داره. فایلها رو میخونه و کامند اجرا میکنه. چطور؟ مفهومی داریم به اسم Harness." },
  { id: 13, title: "The Loop", subtitle: "چرخه", speakerNotes: "هارنس به مغز اجازه اجرای The Loop (چرخه تست) میده. موتور روشن میشه: تارگت -> هارنس فایل رو میخونه -> مدل کد میزنه -> هارنس سیو میکنه -> ارورها رو میبینه و ویرایش میکنه." },
  { id: 14, title: "Hermes OS", subtitle: "معرفی هرمس", speakerNotes: "[یک قدم بیا جلو] سیستمی که من برای پروژههام معماری کردم Hermes Agent است. یک فریمورک متنباز با دسترسی مستقیم به ترمینال. چی اونو خاص میکنه؟" },
  { id: 15, title: "Hermes Pillars", subtitle: "سه ویژگی", speakerNotes: "اول: حافظه (عادتهای شما رو حفظ میکنه). دوم: مهارتهای ماژولار (لحظهای از مهندس لینوکس تبدیل میشه به دیزاینر). سوم: اجرای خودکار ترمینال بدون نیاز به شما." },
  { id: 16, title: "Live Demo", subtitle: "دموی عملی", speakerNotes: "[به پرده اشاره کن / اگه دموی واقعی است لپتاپ رو نشون بده] بیاید در عمل ببینیم! یک وبسایت ریکت که باگ داره. پرامپت من: «فرانتاند رو بخون، دکمه لاگین رو فیکس کن، سرور رو استارت کن». میبینید؟ خودش پیدا کرد، پچ فایل فرستاد و سرور بالا اومد!" },
  { id: 17, title: "Arch Stack", subtitle: "۴ لایه", speakerNotes: "[لحن جدی و فنی] چطور بالا بیاریم؟ پایه Node.js است. اما معماری تجاریِ من ۴ لایه است: داکر در زیرساخت، روتر OmniRoute، پرووایدرها و Web UI. (آموزشها داخل سایت هست)." },
  { id: 18, title: "Architect", subtitle: "بیکار میشویم؟", speakerNotes: "آیا ما بیکار میشیم؟ بله اگر مترجم کد بمونیم! اما اگر طرز فکر تغییر کنه، از یک «بَنّا» تبدیل میشیم به «معمار تجاری». پروژههای چند ماهه رو ۱ نفره ران میکنیم." },
  { id: 19, title: "The End & QR", subtitle: "پایان شبکه سازی", speakerNotes: "[لبخند و ارتباط چشمی] روی گوشیهاتون و پرده QR سایت هست. بعدِ کلاس بیاید پیشم، خوشحال میشم ایده به اشتراک بذاریم و تیمِ تجاری بسازیم. از اینکه امروز به دنیای Autonomous Agents گوش دادید، ممنونم!" }
];


const TOTAL_SLIDES = SLIDES.length;

export default function HostRemotePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [lastSyncStatus, setLastSyncStatus] = useState<string>("SYNC READY");

  // Fetch initial slide state on mount
  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const res = await fetch("/api/sync", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const slide =
            typeof data.currentSlide === "number" ? data.currentSlide : 0;
          setCurrentSlide(Math.min(Math.max(0, slide), TOTAL_SLIDES - 1));
          setLastSyncStatus("UPSTASH ONLINE");
        } else {
          setLastSyncStatus("NETWORK ERROR");
        }
      } catch (err) {
        console.error("Initial admin fetch error:", err);
        setLastSyncStatus("NETWORK ERROR");
      }
    };

    fetchCurrent();
  }, []);

  // Push slide updates to Upstash Redis REST API
  const pushSlideUpdate = useCallback(
    async (targetSlide: number) => {
      const clamped = Math.max(0, Math.min(targetSlide, TOTAL_SLIDES - 1));
      setCurrentSlide(clamped);
      setIsUpdating(true);
      setLastSyncStatus("BROADCASTING...");

      try {
        const res = await fetch("/api/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentSlide: clamped }),
        });

        if (res.ok) {
          setLastSyncStatus(`SYNCED // SLIDE ${clamped + 1}`);
        } else {
          setLastSyncStatus("NETWORK ERROR");
        }
      } catch (err) {
        console.error("Broadcast error:", err);
        setLastSyncStatus("NETWORK ERROR");
      } finally {
        setIsUpdating(false);
      }
    },
    []
  );

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      pushSlideUpdate(currentSlide + 1);
    }
  }, [currentSlide, pushSlideUpdate]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      pushSlideUpdate(currentSlide - 1);
    }
  }, [currentSlide, pushSlideUpdate]);

  const handleReset = useCallback(() => {
    pushSlideUpdate(0);
  }, [pushSlideUpdate]);

  // Host Keyboard Controls (ArrowRight, Space, ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "0" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleReset]);

  const formattedSlide = String(currentSlide + 1).padStart(2, "0");
  const formattedTotal = String(TOTAL_SLIDES).padStart(2, "0");

  return (
    <div className="w-full min-h-screen min-h-[100dvh] h-[100dvh] overflow-y-auto bg-[#0A0A0A] text-white flex flex-col justify-between p-4 sm:p-8 select-none font-sans pb-[max(1rem,env(safe-area-inset-bottom))]">
      {/* Top Technical Status Header */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between border-b-4 border-white pb-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#E62429] border-2 border-white animate-pulse" />
          <h1 className="font-mono text-sm sm:text-base font-black tracking-widest uppercase text-white">
            HERMES // HOST REMOTE CONTROLLER
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#1A1A1A] border-2 border-white text-zinc-300">
            {lastSyncStatus}
          </span>
        </div>
      </header>

      {/* Main Center Console: Huge Slide ID & Details */}
      <main className="w-full max-w-4xl mx-auto my-auto py-8 flex flex-col items-center justify-center text-center">
        {/* Massive Neo-Brutalist Slide Identifier */}
        <div className="relative border-4 border-white bg-[#141414] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#FFFFFF] w-full max-w-xl">
          <div className="flex items-center justify-between border-b-2 border-zinc-700 pb-2 mb-4 text-xs font-mono text-zinc-400">
            <span>LIVE VIEWPORT SYNC</span>
            <span>REST API MODE</span>
          </div>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-8xl sm:text-9xl font-black text-white tracking-tighter leading-none">
              {formattedSlide}
            </span>
            <span className="text-3xl sm:text-4xl font-mono font-bold text-[#E62429]">
              /{formattedTotal}
            </span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            {SLIDES[currentSlide]?.title ?? "Unknown"}
          </h2>

          
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-mono">
            {SLIDES[currentSlide]?.subtitle ?? ""}
          </p>

          {/* SPEAKER NOTES PANEL */}
          <div className="mt-6 text-right bg-zinc-900 border-2 border-zinc-700 p-4 text-xs sm:text-sm leading-loose text-zinc-300 w-full" dir="rtl">
             <span className="text-[#E62429] font-black uppercase text-[10px] bg-black px-2 py-1 mb-2 inline-block">Speaker Notes</span>
             <p>{SLIDES[currentSlide]?.speakerNotes ?? "---"}</p>
          </div>


          {/* Quick Jump Slide Badges */}
          <div className="grid grid-cols-6 gap-1.5 mt-6 pt-4 border-t-2 border-zinc-700">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => pushSlideUpdate(idx)}
                  className={`h-9 font-mono text-xs font-black border-2 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#E62429] text-white border-white shadow-[2px_2px_0px_#FFF]"
                      : "bg-[#222222] text-zinc-400 border-zinc-600 hover:bg-[#333333] hover:text-white"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Control Section: Two Massive Buttons + Reset */}
      <footer className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        {/* Two Massive Buttons: PREV and NEXT */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          {/* [ < PREV ] Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentSlide === 0 || isUpdating}
            className={`w-full sm:flex-1 py-6 px-6 font-black text-xl sm:text-2xl uppercase tracking-widest border-4 border-white transition-all
              ${
                currentSlide > 0
                  ? "bg-white text-black shadow-[6px_6px_0px_0px_#FFFFFF] hover:bg-zinc-200 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#FFF] cursor-pointer"
                  : "bg-zinc-800 text-zinc-500 border-zinc-700 opacity-40 cursor-not-allowed shadow-none"
              }`}
          >
            [ &lt; PREV ]
          </button>

          {/* [ NEXT > ] Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentSlide >= TOTAL_SLIDES - 1 || isUpdating}
            className={`w-full sm:flex-1 py-6 px-6 font-black text-xl sm:text-2xl uppercase tracking-widest border-4 border-white transition-all
              ${
                currentSlide < TOTAL_SLIDES - 1
                  ? "bg-[#E62429] text-white shadow-[6px_6px_0px_0px_#FFFFFF] hover:bg-[#cf1e23] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#FFF] cursor-pointer"
                  : "bg-zinc-800 text-zinc-500 border-zinc-700 opacity-40 cursor-not-allowed shadow-none"
              }`}
          >
            [ NEXT &gt; ]
          </button>
        </div>

        {/* Small "Reset to Slide 0" Button */}
        <div className="flex items-center justify-center pt-2">
          <button
            type="button"
            onClick={handleReset}
            disabled={currentSlide === 0 || isUpdating}
            className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] text-zinc-300 border-2 border-zinc-600 shadow-[3px_3px_0px_0px_#333333] hover:bg-[#2A2A2A] hover:text-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ↺ Reset to Slide 0
          </button>
        </div>
      </footer>
    </div>
  );
}
