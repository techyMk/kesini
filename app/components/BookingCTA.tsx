"use client";

import { useMemo, useState } from "react";
import { services, site } from "../data/site";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import { PickerDate, PickerSelect, PickerTime } from "./ui/Pickers";
import { MoustacheOrnament, SectionWatermark } from "./ui/Ornaments";

export default function BookingCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const whatsappHref = useMemo(() => {
    // Format ISO date (yyyy-mm-dd) → "Mon, 25 May 2026"
    const prettyDate = (() => {
      if (!date) return "";
      const [y, m, d] = date.split("-").map(Number);
      return new Date(y, m - 1, d).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    })();

    // Format 24h time (HH:MM) → "2:30 PM"
    const prettyTime = (() => {
      if (!time) return "";
      const [hh, mm] = time.split(":").map(Number);
      const period = hh >= 12 ? "PM" : "AM";
      const h12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
      return `${h12}:${String(mm).padStart(2, "0")} ${period}`;
    })();

    const lines = [
      `Hello Kesini, I'd like to book an appointment.`,
      ``,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      `Service: ${service}`,
      prettyDate && `Date: ${prettyDate}`,
      prettyTime && `Time: ${prettyTime}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean) as string[];

    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [name, phone, service, date, time, notes]);

  return (
    <section id="book" className="surface-beige relative py-24 md:py-32 overflow-hidden">
      <SectionWatermark text="Reserve" position="right" />
      <div className="gold-halo w-[420px] h-[420px] -top-20 left-1/4 opacity-25 hidden md:block" />
      <div className="gold-halo w-[460px] h-[460px] -bottom-32 right-0 opacity-20 hidden md:block" />

      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — pitch */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">Reserve</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-[#1E1E1E]">
                Step into the <em>Kesini chair.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-6">
                <MoustacheOrnament size="sm" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-md">
                Tell us when you&apos;d like to come in. Your booking opens
                straight in WhatsApp — confirmed in minutes by our front desk,
                no app or signup required.
              </p>
            </Reveal>

            <div className="mt-10">
              <ContactRow
                icon="clock"
                label="Open Daily"
                value="7 AM — 8 PM"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(whatsappHref, "_blank", "noopener");
                }}
                className="lux-card-soft p-7 md:p-10"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[0.62rem] font-semibold tracking-[0.36em] uppercase text-[#A07F0F]">
                      Reservation
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-[#1E1E1E] mt-2">
                      Book Your Appointment
                    </h3>
                  </div>
                  <span className="hidden sm:block text-[0.6rem] font-medium tracking-[0.36em] uppercase text-[#9B9B9B]">
                    No. {String(new Date().getFullYear()).slice(-2)}
                  </span>
                </div>
                <div className="mt-4 gold-rule" />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    value={name}
                    onChange={setName}
                    placeholder="Karthik Suresh"
                  />
                  <Field
                    label="Phone"
                    value={phone}
                    onChange={setPhone}
                    placeholder="+91 ..."
                    type="tel"
                  />
                  <PickerSelect
                    label="Service"
                    value={service}
                    onChange={setService}
                    options={services.map((s) => s.title)}
                  />
                  <PickerDate
                    label="Preferred Date"
                    value={date}
                    onChange={setDate}
                  />
                  <PickerTime
                    label="Preferred Time"
                    value={time}
                    onChange={setTime}
                  />
                  <Field
                    label="Stylist / Notes"
                    value={notes}
                    onChange={setNotes}
                    placeholder="Optional"
                  />
                </div>

                <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
                  <button type="submit" className="btn-gold shimmer w-full sm:w-auto">
                    <Icon name="whatsapp" size={16} />
                    Book on WhatsApp
                  </button>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="btn-outline w-full sm:w-auto"
                  >
                    <Icon name="phone" size={14} />
                    Call Us
                  </a>
                </div>

                <p className="mt-5 text-xs text-[#6B6B6B]/85 leading-relaxed">
                  By submitting you&apos;ll be redirected to WhatsApp with your
                  booking pre-filled. You can edit it before sending.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: "phone" | "whatsapp" | "clock";
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-5">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#D4A017]/25 text-[#A07F0F] shadow-sm transition-all duration-500 group-hover:border-[#D4A017] group-hover:shadow-md">
        <Icon name={icon} size={18} />
      </span>
      <div>
        <div className="text-[0.6rem] font-semibold tracking-[0.34em] uppercase text-[#6B6B6B]">
          {label}
        </div>
        <div className="data-text text-base text-[#1E1E1E] mt-1">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="field"
      />
    </label>
  );
}

