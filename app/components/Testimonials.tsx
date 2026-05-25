"use client";

import { testimonials } from "../data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

export default function Testimonials() {
  return (
    <section className="surface-ivory relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Voices" position="right" />
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Voices</span>
            <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E] max-w-3xl">
              What our chairs <em>quietly hear.</em>
            </h2>
            <div className="mt-6">
              <MoustacheOrnament size="md" />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="lux-card-soft h-full p-7 md:p-8 flex flex-col">
                <span className="text-[#D4A017]/35">
                  <Icon name="quote" size={42} />
                </span>
                <div className="mt-2 flex gap-1 text-[#D4A017]">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Icon key={idx} name="star" size={14} />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg md:text-xl text-[#1E1E1E] leading-snug flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-[#1E1E1E]/10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#E6C068] via-[#D4A017] to-[#A07F0F] flex items-center justify-center font-display text-base text-white shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-base text-[#1E1E1E]">
                      {t.name}
                    </div>
                    <div className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-[#6B6B6B] mt-1">
                      {t.title}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
