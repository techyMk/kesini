"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./ui/Icon";
import { CurlBracket, MoustacheOrnament } from "./ui/Ornaments";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-24 md:pt-28 pb-10 md:pb-14 atmosphere-warm"
    >
      {/* Atmospheric background — radial gold washes layered */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 40% at 78% 22%, rgba(230, 192, 104, 0.28), transparent 65%),
              radial-gradient(ellipse 40% 35% at 18% 88%, rgba(212, 160, 23, 0.12), transparent 65%),
              radial-gradient(ellipse 35% 30% at 90% 75%, rgba(234, 226, 214, 0.5), transparent 70%),
              #FAF7F2
            `,
          }}
        />
      </div>

      {/* Oversized faded brand wordmark behind everything */}
      <span
        aria-hidden
        className="absolute pointer-events-none select-none font-display whitespace-nowrap"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(220px, 26vw, 460px)",
          lineHeight: 1,
          color: "rgba(30, 30, 30, 0.025)",
          letterSpacing: "-0.04em",
          fontWeight: 500,
        }}
      >
        Kesini
      </span>

      {/* Floating decorative dots */}
      <motion.span
        aria-hidden
        className="absolute pointer-events-none rounded-full hidden md:block"
        style={{ top: "18%", left: "8%", width: 4, height: 4, background: "#D4A017" }}
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute pointer-events-none rounded-full hidden md:block"
        style={{ bottom: "20%", right: "8%", width: 3, height: 3, background: "#D4A017" }}
        animate={{ y: [0, 16, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5.4, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — Editorial type */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <CurlBracket color="#D4A017" />
              <span className="text-[0.62rem] md:text-[0.66rem] font-semibold tracking-[0.4em] uppercase text-[#A07F0F]">
                Luxury Men&apos;s Salon &middot; Salem
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
              className="h-display mt-4 md:mt-5 text-[#1E1E1E] text-[2.2rem] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem]"
            >
              Luxury grooming,
              <br />
              <em>perfected.</em>
            </motion.h1>

            {/* Signature moustache ornament under headline */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 0.7, 0.2, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-5 md:mt-6"
            >
              <MoustacheOrnament size="sm" color="#D4A017" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="mt-5 max-w-md text-[0.9rem] md:text-[0.95rem] lg:text-base text-[#3A3A3A] leading-relaxed"
            >
              A modern salon on Advaith Ashram Road — master stylists,
              single-blade shaves, hot towels. Designed for the gentleman who
              notices the details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-7 flex flex-col sm:flex-row items-start gap-3"
            >
              <a href="#book" className="btn-primary magnetic !py-3 !px-6 !text-[0.7rem]">
                Book Appointment
                <Icon name="arrow" size={13} />
              </a>
              <a href="#services" className="btn-outline magnetic !py-3 !px-6 !text-[0.7rem]">
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 grid grid-cols-3 max-w-md gap-4 pt-5 border-t border-[#1E1E1E]/12"
            >
              {[
                { v: "12+", l: "Years" },
                { v: "25K+", l: "Clients" },
                { v: "5.0", l: "Rated" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="num text-[1.7rem] md:text-3xl text-[#1E1E1E]">
                    {s.v}
                  </div>
                  <div className="text-[0.56rem] mt-1 font-semibold tracking-[0.3em] uppercase text-[#A07F0F]">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — layered image composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {/* Brass glow backdrop */}
              <div
                aria-hidden
                className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[#E6C068]/35 via-transparent to-[#D4A017]/15 rounded-[32px] blur-2xl"
              />

              {/* Soft gold ring frame */}
              <span
                aria-hidden
                className="absolute -top-3 -left-3 right-3 bottom-3 md:-top-5 md:-left-5 md:right-5 md:bottom-5 border border-[#D4A017]/30 rounded-[24px] pointer-events-none"
              />

              {/* MAIN tall image */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
                className="img-tall relative aspect-[4/5] lg:aspect-[5/6] w-full max-h-[62vh] lg:max-h-[68vh]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1800&q=85"
                  alt="Master stylist at Kesini Salon"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 56vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/20 via-transparent to-transparent" />

                {/* OPEN TODAY pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.95 }}
                  className="absolute bottom-4 left-4 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2"
                >
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-[#1E1E1E]">
                    Open Today
                  </span>
                </motion.div>
              </motion.div>

              {/* SECOND floating image (beard / tools detail) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30, rotate: -3 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 0.7, 0.2, 1] }}
                className="hidden md:block absolute -bottom-10 -left-10 lg:-left-16 w-[44%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-[#FAF7F2] shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85"
                  alt="Detail of straight razor finish"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="absolute -top-4 -right-3 md:-right-6 px-4 py-3 bg-white rounded-2xl shadow-2xl border border-[#D4A017]/15 hidden sm:block"
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#D4A017]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={11} />
                    ))}
                  </div>
                </div>
                <div className="num mt-1 text-2xl text-[#1E1E1E]">5.0</div>
                <div className="text-[0.55rem] mt-0.5 font-semibold tracking-[0.26em] uppercase text-[#6B6B6B]">
                  Google Rating
                </div>
              </motion.div>

              {/* Floating review card */}
              <motion.div
                initial={{ opacity: 0, x: 28, y: 18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1.05 }}
                className="hidden md:flex absolute -bottom-4 right-2 lg:-right-6 max-w-[280px] items-start gap-3 px-5 py-4 bg-white rounded-2xl shadow-xl border border-[#1E1E1E]/8"
              >
                <span className="text-[#D4A017] mt-0.5">
                  <Icon name="quote" size={22} />
                </span>
                <div>
                  <p className="font-display italic text-[0.92rem] text-[#1E1E1E] leading-snug">
                    &ldquo;A five-star hotel feeling, in a single chair.&rdquo;
                  </p>
                  <p className="mt-1.5 text-[0.55rem] font-semibold tracking-[0.28em] uppercase text-[#6B6B6B]">
                    — Arjun R. &middot; Architect
                  </p>
                </div>
              </motion.div>

              {/* Tiny brand stamp top-left */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-4 left-4 px-2.5 py-1.5 bg-white/95 backdrop-blur-md border border-[#D4A017]/30 rounded-md shadow-sm"
              >
                <span className="text-[0.52rem] font-semibold tracking-[0.32em] uppercase text-[#A07F0F]">
                  Est. 2013
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
