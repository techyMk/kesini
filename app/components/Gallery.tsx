"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gallery } from "../data/site";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

const CARD_W = 230; // px
const CARD_GAP = 12; // px (mr-3)
const SCROLL_STEP = CARD_W + CARD_GAP;
const SCROLL_SPEED = 32; // px/sec — slower & more luxurious
const PAUSE_MS = 4500; // after manual interaction, hold for ~4.5s

export default function Gallery() {
  const marqueeItems = [...gallery, ...gallery];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);

  // Auto-scroll loop (JS-driven so arrows + native horizontal scroll
  // can coexist with the auto-marquee).
  useEffect(() => {
    let raf = 0;
    let last = 0;

    const tick = (now: number) => {
      if (!last) last = now;
      const dt = (now - last) / 1000;
      last = now;

      const el = scrollerRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (now > pauseUntilRef.current) {
          el.scrollLeft += SCROLL_SPEED * dt;
        }
        // Seamless wrap (also runs during pause so manual scrolls past the end still loop)
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += half;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const advance = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    pauseUntilRef.current = performance.now() + PAUSE_MS;
    el.scrollBy({ left: dir * SCROLL_STEP, behavior: "smooth" });
  };

  const handleUserInteraction = () => {
    pauseUntilRef.current = performance.now() + PAUSE_MS;
  };

  return (
    <section id="gallery" className="surface-canvas relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Atelier" position="left" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="eyebrow">The Gallery</span>
              <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E] max-w-3xl">
                Inside the studio, <em>after closing time.</em>
              </h2>
              <div className="mt-6">
                <MoustacheOrnament size="md" />
              </div>
              <p className="mt-6 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-2xl">
                A look at the seat, the tools, and the kind of finish you walk
                out wearing.
              </p>
            </div>
          </Reveal>
        </div>

        {/* MOBILE — JS-driven marquee with arrows */}
        <div className="md:hidden mt-10">
          <div
            ref={scrollerRef}
            onTouchStart={handleUserInteraction}
            onWheel={handleUserInteraction}
            className="marquee-mask overflow-x-auto no-scrollbar"
            data-lenis-prevent
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex w-max px-5">
              {marqueeItems.map((item, i) => (
                <div
                  key={`marq-${i}`}
                  className="gallery-item brass-corners group w-[230px] aspect-[4/5] mr-3 flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="230px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[0.5rem] font-semibold tracking-[0.36em] uppercase text-[#E6C068]">
                      Kesini Studio
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => advance(-1)}
              aria-label="Previous"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-white border border-[#D4A017]/40 text-[#1E1E1E] shadow-sm active:scale-95 transition-transform"
            >
              <Icon name="arrow" size={14} className="rotate-180" />
            </button>
            <span className="text-[0.55rem] font-semibold tracking-[0.36em] uppercase text-[#A07F0F]">
              Swipe &middot; or tap arrows
            </span>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label="Next"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-white border border-[#D4A017]/40 text-[#1E1E1E] shadow-sm active:scale-95 transition-transform"
            >
              <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>

        {/* TABLET / DESKTOP — bento grid */}
        <div className="hidden md:block mx-auto max-w-7xl px-5 md:px-10">
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 auto-rows-[230px] gap-5">
            {gallery.map((item, i) => {
              const span =
                item.span === "tall"
                  ? "md:row-span-2"
                  : item.span === "wide"
                  ? "md:col-span-2"
                  : "";
              return (
                <Reveal
                  key={`${i}-${item.src}`}
                  delay={i * 0.04}
                  className={`gallery-item brass-corners group ${span}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-[0.55rem] font-semibold tracking-[0.36em] uppercase text-[#E6C068]">
                      Kesini Studio
                    </span>
                    <p className="mt-1 font-display text-sm text-white/95 leading-snug">
                      {item.alt}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
