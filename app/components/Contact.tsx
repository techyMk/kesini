"use client";

import { site } from "../data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

export default function Contact() {
  return (
    <section id="contact" className="surface-canvas relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Salem" position="left" />
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Find Us</span>
            <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E] max-w-3xl">
              The studio sits on <em>Advaith Ashram Road.</em>
            </h2>
            <div className="mt-6">
              <MoustacheOrnament size="md" />
            </div>
            <p className="mt-6 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-2xl">
              Drop in for a consultation. Tea&apos;s on us.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7">
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-3xl border border-[#1E1E1E]/10 aspect-[5/4] lg:aspect-auto lg:h-full group shadow-[0_30px_60px_-30px_rgba(30,30,30,0.25)]"
            >
              <iframe
                src={site.mapsEmbed}
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(0.25) contrast(1.03) saturate(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kesini Salon location"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[0.6rem] font-semibold tracking-[0.36em] uppercase text-[#E6C068]">
                    Open in Maps
                  </div>
                  <div className="font-display text-xl mt-1">
                    {site.address.line1}, {site.city}
                  </div>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1E1E1E] group-hover:bg-[#D4A017] group-hover:text-white transition-colors shadow-lg">
                  <Icon name="arrow" size={18} />
                </span>
              </div>
            </a>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <Reveal delay={0.05}>
              <div className="lux-card-soft p-7">
                <div className="flex items-center gap-3 text-[#A07F0F]">
                  <Icon name="map" size={20} />
                  <span className="text-[0.6rem] font-semibold tracking-[0.36em] uppercase">
                    Address
                  </span>
                </div>
                <div className="mt-4 font-display text-xl text-[#1E1E1E] leading-snug">
                  Kesini Luxury Men&apos;s Salon
                </div>
                <p className="mt-2 text-[#6B6B6B] leading-relaxed text-sm">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                  <br />
                  {site.address.state}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lux-card-soft p-7">
                <div className="flex items-center gap-3 text-[#A07F0F]">
                  <Icon name="clock" size={20} />
                  <span className="text-[0.6rem] font-semibold tracking-[0.36em] uppercase">
                    Hours
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-[#6B6B6B]">{h.day}</span>
                      <span className="data-text text-[#1E1E1E]">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="lux-card p-5 flex flex-col gap-2"
                >
                  <Icon name="phone" size={18} className="text-[#A07F0F]" />
                  <span className="text-[0.58rem] font-semibold tracking-[0.36em] uppercase text-[#6B6B6B]">
                    Call
                  </span>
                  <span className="data-text text-[0.95rem] text-[#1E1E1E]">
                    {site.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="lux-card p-5 flex flex-col gap-2"
                >
                  <Icon name="mail" size={18} className="text-[#A07F0F]" />
                  <span className="text-[0.58rem] font-semibold tracking-[0.36em] uppercase text-[#6B6B6B]">
                    Email
                  </span>
                  <span className="data-text text-sm text-[#1E1E1E] break-all">
                    {site.email}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white hover:bg-[#1faa54] transition-colors text-sm font-semibold tracking-wide shadow-md"
                >
                  <Icon name="whatsapp" size={18} /> WhatsApp
                </a>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-white border border-[#1E1E1E]/15 text-[#1E1E1E] hover:text-[#A07F0F] hover:border-[#D4A017] transition-colors shadow-sm"
                >
                  <Icon name="instagram" size={18} />
                </a>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-white border border-[#1E1E1E]/15 text-[#1E1E1E] hover:text-[#A07F0F] hover:border-[#D4A017] transition-colors shadow-sm"
                >
                  <Icon name="facebook" size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
