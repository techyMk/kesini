"use client";

import { reasons } from "../data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

type IconName = React.ComponentProps<typeof Icon>["name"];

export default function WhyChoose() {
  return (
    <section id="why" className="surface-beige relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Difference" position="right" />
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Why Kesini</span>
            <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E] max-w-3xl">
              Six small reasons, <em>one returning chair.</em>
            </h2>
            <div className="mt-6">
              <MoustacheOrnament size="md" />
            </div>
            <p className="mt-6 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-2xl">
              The things you don&apos;t notice on the first visit — and the
              things you can&apos;t forget on the second.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="lux-card-soft p-7 md:p-8 h-full">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F5EFE6] border border-[#D4A017]/25 text-[#A07F0F]">
                  <Icon name={reason.icon as IconName} size={22} strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-[#1E1E1E]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                  {reason.blurb}
                </p>
                <span className="mt-6 block h-px w-10 bg-[#D4A017]/55 transition-all duration-500 group-hover:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
