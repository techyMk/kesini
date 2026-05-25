"use client";

import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "../data/site";
import Reveal from "./ui/Reveal";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

export default function About() {
  return (
    <section id="about" className="surface-canvas relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Heritage" position="left" />
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image composition column */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="img-tall relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
                  alt="The Kesini studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="hidden md:block absolute -bottom-12 -right-6 lg:-right-12 w-[55%] aspect-[4/5] rounded-3xl overflow-hidden border-4 border-[#FAF7F2] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85"
                  alt="Precision detail"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <span className="hidden lg:block absolute -top-5 -left-5 h-20 w-20 border-l-2 border-t-2 border-[#D4A017]" />
          </div>

          {/* Content column */}
          <div className="lg:col-span-6 lg:pl-6">
            <Reveal>
              <span className="eyebrow">About Kesini</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E]">
                Twelve years of craft, <em>on a quiet street.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-6">
                <MoustacheOrnament size="sm" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base md:text-[1.05rem] text-[#3A3A3A] leading-relaxed">
                Kesini was founded in 2013 on a simple belief — a haircut
                should feel like an hour for yourself, not a transaction. We
                brought together master barbers from across Tamil Nadu, sourced
                products we&apos;d use on our own families, and designed a room
                that smells, sounds and lights the way a luxury hotel should.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-base text-[#6B6B6B] leading-relaxed">
                Twelve years on, we&apos;ve quietly become the chair Salem
                returns to before every interview, every wedding, every
                photograph that matters.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 pl-5 border-l-2 border-[#D4A017]">
                <p className="font-display italic text-xl md:text-2xl text-[#A07F0F] leading-snug">
                  &ldquo;We don&apos;t cut hair faster. We cut it better.&rdquo;
                </p>
                <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.36em] uppercase text-[#6B6B6B]">
                  M. Kesini &middot; Founder
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-10 border-t border-[#1E1E1E]/12">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.06}>
                  <Stat value={stat.value} label={stat.label} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const numericMatch = value.match(/^(\d+)(\D*)$/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : "";
  const [display, setDisplay] = useState(target ? "0" : value);

  useEffect(() => {
    if (!inView || target == null) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(target * eased);
      setDisplay(
        v.toString().padStart(target >= 10 ? 2 : 1, target < 10 ? "0" : "")
      );
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div ref={ref}>
      <div className="num text-4xl md:text-5xl text-[#1E1E1E]">
        {target == null ? value : `${display}${suffix}`}
      </div>
      <div className="mt-2 text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-[#A07F0F]">
        {label}
      </div>
    </div>
  );
}
