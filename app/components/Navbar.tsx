"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "../data/site";
import Icon from "./ui/Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FAF7F2]/92"
          : "backdrop-blur-md bg-[#FAF7F2]/70"
      }`}
    >
      {/* Soft brass hairline at the bottom */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/45 to-transparent transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between h-20 md:h-24">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label={site.name}
        >
          <span className="relative inline-flex h-16 w-32 md:h-20 md:w-40 transition-transform duration-500 group-hover:scale-[1.03]">
            <Image
              src="/brand/kesini-logo.png"
              alt={site.name}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.72rem] font-medium tracking-[0.28em] uppercase text-[#1E1E1E]/70 hover:text-[#1E1E1E] transition-colors duration-300 group"
            >
              {item.label}
              {/* Brass underline grows from left */}
              <span className="absolute -bottom-2 left-0 right-0 mx-auto h-px w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />
              {/* Tiny diamond beneath */}
              <span className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-1 h-1 rotate-45 bg-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="btn-primary magnetic hidden md:inline-flex !py-3 !px-6 !text-[0.66rem] !tracking-[0.28em]"
          >
            Book Now
            <Icon name="arrow" size={13} />
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1E1E1E]/15 text-[#1E1E1E] bg-white/60 backdrop-blur"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#1E1E1E]/50 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 0.7, 0.2, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm flex flex-col shadow-[-30px_0_60px_-20px_rgba(30,30,30,0.45)]"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FAF7F2",
                borderLeft: "1px solid rgba(212, 160, 23, 0.25)",
                isolation: "isolate",
              }}
            >
              {/* Subtle warm wash at the top for depth */}
              <span
                aria-hidden
                className="absolute top-0 inset-x-0 h-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230, 192, 104, 0.25), transparent 70%)",
                }}
              />

              <div className="relative flex items-center justify-between h-20 px-6 border-b border-[#D4A017]/15">
                <span className="relative inline-flex h-14 w-28">
                  <Image
                    src="/brand/kesini-logo.png"
                    alt={site.name}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[#1E1E1E]/15 text-[#1E1E1E] hover:bg-white transition-colors"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>

              <nav className="relative flex flex-col gap-1 px-6 py-10 flex-1">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.12 + i * 0.05, duration: 0.5 },
                    }}
                    className="group flex items-baseline gap-4 py-2 border-b border-[#1E1E1E]/8 last:border-0"
                  >
                    <span className="text-[0.55rem] num text-[#A07F0F] w-6 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl text-[#1E1E1E] group-hover:text-[#A07F0F] transition-colors flex-1">
                      {item.label}
                    </span>
                    <span className="text-[#A07F0F]/0 group-hover:text-[#A07F0F]/100 transition-colors">
                      <Icon name="arrow" size={16} />
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="relative mt-auto p-6 border-t border-[#D4A017]/15 flex flex-col gap-4 bg-[#F5EFE6]">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Book Appointment
                  <Icon name="arrow" size={13} />
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="data-text text-center text-sm text-[#1E1E1E]/75 hover:text-[#A07F0F] transition-colors"
                >
                  {site.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
