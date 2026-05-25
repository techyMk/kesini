"use client";

import Image from "next/image";
import { services } from "../data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

export default function Services() {
  return (
    <section id="services" className="surface-canvas relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Services" position="right" />

      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Our Services</span>
            <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E] max-w-3xl">
              Crafted services for the <em>modern gentleman.</em>
            </h2>
            <div className="mt-6">
              <MoustacheOrnament size="md" />
            </div>
            <p className="mt-6 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-2xl">
              Short, considered, and held by master craftsmen. Choose one — or
              let our stylists choreograph an afternoon.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <article className="editorial-card group h-full p-7 md:p-8 flex flex-col">
      {/* Image revealed on hover */}
      <div className="reveal-image">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="editorial-body flex flex-col h-full">
        <div className="flex items-start justify-between gap-3">
          {/* Icon tile keeps its brass-on-cream colors on hover so it stays
              readable against the dark image overlay. */}
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#D4A017]/45 text-[#A07F0F] shadow-md transition-shadow duration-500 group-hover:shadow-[0_10px_24px_-6px_rgba(212,160,23,0.45)]">
            <Icon name={service.icon} size={20} strokeWidth={1.3} />
          </span>
          <span className="text-[0.58rem] font-semibold tracking-[0.36em] text-[#A07F0F]/65 on-hover-light-accent mt-3 uppercase">
            Service {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-8 font-display text-[1.85rem] md:text-3xl text-[#1E1E1E] on-hover-light leading-snug">
          {service.title}
        </h3>

        {service.featured && (
          <span className="mt-3 inline-flex items-center gap-2 self-start">
            <span className="featured-pill on-hover-light">Signature</span>
          </span>
        )}

        <p className="mt-4 text-sm md:text-[0.92rem] text-[#6B6B6B] on-hover-light-mute leading-relaxed flex-1">
          {service.blurb}
        </p>

        <div className="mt-7 pt-5 border-t border-[#1E1E1E]/10 on-hover-light-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.32em] uppercase text-[#9B9B9B] on-hover-light-mute">
            <Icon name="clock" size={12} />
            {service.duration}
          </div>
          <div className="text-right">
            <div className="text-[0.55rem] font-semibold tracking-[0.32em] uppercase text-[#9B9B9B] on-hover-light-mute">
              From
            </div>
            <div className="num text-2xl text-[#A07F0F] on-hover-light-accent leading-none mt-0.5">
              {service.priceFrom}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
