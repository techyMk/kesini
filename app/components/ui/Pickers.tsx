"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

/* ---------- Common types ---------- */
type Base = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

/* ---------- Click-outside helper ---------- */
function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [handler]);
  return ref;
}

/* ---------- Trigger button (looks like our .field) ---------- */
function Trigger({
  display,
  placeholder,
  open,
  onClick,
}: {
  display: string;
  placeholder: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`field w-full text-left flex items-center justify-between gap-3 ${
        open ? "border-[#D4A017] shadow-[0_0_0_3px_rgba(212,160,23,0.18)]" : ""
      }`}
    >
      <span className={display ? "text-[#1E1E1E]" : "text-[#9B9B9B]"}>
        {display || placeholder}
      </span>
      <span
        className={`text-[#9B9B9B] transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      >
        <Icon name="arrow" size={14} className="rotate-90" />
      </span>
    </button>
  );
}

/* ---------- Animated popover wrapper ---------- */
function Popover({
  open,
  children,
  align = "left",
  width,
}: {
  open: boolean;
  children: React.ReactNode;
  align?: "left" | "right";
  width?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 0.7, 0.2, 1] }}
          className={`absolute z-30 top-full mt-2 ${
            align === "right" ? "right-0" : "left-0"
          } ${width ?? "w-full min-w-[260px]"}`}
        >
          <div className="bg-white border border-[#D4A017]/30 rounded-xl shadow-[0_24px_50px_-20px_rgba(30,30,30,0.28)] p-3">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Service select ---------- */
export function PickerSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}: Base & { options: string[] }) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

  return (
    <div ref={ref} className="relative">
      <label className="field-label">{label}</label>
      <Trigger
        display={value}
        placeholder={placeholder}
        open={open}
        onClick={() => setOpen((v) => !v)}
      />
      <Popover open={open}>
        <div className="max-h-64 overflow-y-auto -m-2 p-2" data-lenis-prevent>
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`group w-full flex items-center justify-between gap-3 text-left px-3 py-2.5 rounded-lg text-[0.85rem] transition-colors ${
                  selected
                    ? "bg-[#1E1E1E] text-white"
                    : "text-[#1E1E1E] hover:bg-[#FAF7F2]"
                }`}
              >
                <span>{opt}</span>
                {selected && (
                  <span className="text-[#E6C068]">
                    <Icon name="arrow" size={14} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </Popover>
    </div>
  );
}

/* ---------- Date picker ---------- */
function startOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

function formatISO(d: Date) {
  // YYYY-MM-DD in local tz (avoids UTC off-by-one)
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatPretty(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function PickerDate({
  label,
  value,
  onChange,
  placeholder = "Select date",
}: Base) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  const today = startOfDay(new Date());

  const initial = value ? new Date(value) : today;
  const [view, setView] = useState({
    y: initial.getFullYear(),
    m: initial.getMonth(),
  });

  const firstWeekday = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const monthLabel = new Date(view.y, view.m, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isSelected = (d: number) => {
    if (!value) return false;
    const [y, m, day] = value.split("-").map(Number);
    return y === view.y && m - 1 === view.m && day === d;
  };
  const isToday = (d: number) =>
    today.getFullYear() === view.y &&
    today.getMonth() === view.m &&
    today.getDate() === d;
  const isPast = (d: number) => new Date(view.y, view.m, d) < today;

  return (
    <div ref={ref} className="relative">
      <label className="field-label">{label}</label>
      <Trigger
        display={formatPretty(value)}
        placeholder={placeholder}
        open={open}
        onClick={() => setOpen((v) => !v)}
      />
      <Popover open={open} width="w-[280px]">
        <div className="flex items-center justify-between px-1">
          <button
            type="button"
            onClick={() =>
              setView((v) =>
                v.m === 0 ? { y: v.y - 1, m: 11 } : { ...v, m: v.m - 1 }
              )
            }
            className="h-7 w-7 inline-flex items-center justify-center rounded-full text-[#1E1E1E] hover:bg-[#FAF7F2] transition-colors"
            aria-label="Previous month"
          >
            <Icon name="arrow" size={12} className="rotate-180" />
          </button>
          <span className="font-display text-sm text-[#1E1E1E]">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={() =>
              setView((v) =>
                v.m === 11 ? { y: v.y + 1, m: 0 } : { ...v, m: v.m + 1 }
              )
            }
            className="h-7 w-7 inline-flex items-center justify-center rounded-full text-[#1E1E1E] hover:bg-[#FAF7F2] transition-colors"
            aria-label="Next month"
          >
            <Icon name="arrow" size={12} />
          </button>
        </div>

        <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div
              key={i}
              className="text-[0.55rem] font-semibold tracking-[0.16em] text-[#9B9B9B] uppercase py-1.5"
            >
              {d}
            </div>
          ))}
          {cells.map((d, i) => {
            if (d === null) return <span key={i} />;
            const past = isPast(d);
            const sel = isSelected(d);
            const tod = isToday(d);
            return (
              <button
                key={i}
                type="button"
                disabled={past}
                onClick={() => {
                  onChange(formatISO(new Date(view.y, view.m, d)));
                  setOpen(false);
                }}
                className={`num h-7 w-7 mx-auto rounded-full text-[0.78rem] transition-all ${
                  sel
                    ? "bg-[#1E1E1E] text-white shadow-md"
                    : past
                    ? "text-[#9B9B9B]/35 cursor-not-allowed"
                    : tod
                    ? "text-[#A07F0F] font-medium ring-1 ring-[#D4A017]/40 hover:bg-[#FAF7F2]"
                    : "text-[#1E1E1E] hover:bg-[#FAF7F2]"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div className="mt-2 pt-2 border-t border-[#1E1E1E]/8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="text-[0.66rem] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] hover:text-[#1E1E1E] transition-colors px-2 py-1"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => {
              onChange(formatISO(today));
              setOpen(false);
            }}
            className="text-[0.66rem] font-semibold tracking-[0.22em] uppercase text-[#A07F0F] hover:text-[#1E1E1E] transition-colors px-2 py-1"
          >
            Today
          </button>
        </div>
      </Popover>
    </div>
  );
}

/* ---------- Time picker (30-min slots, 7 AM — 8 PM) ---------- */
function buildSlots() {
  const slots: string[] = [];
  for (let h = 7; h <= 19; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  slots.push("20:00");
  return slots;
}

function fmtTime(t: string) {
  if (!t) return "";
  const [hh, mm] = t.split(":").map(Number);
  const period = hh >= 12 ? "PM" : "AM";
  const h12 = hh === 0 ? 12 : hh > 12 ? hh - 12 : hh;
  return `${h12}:${String(mm).padStart(2, "0")} ${period}`;
}

export function PickerTime({
  label,
  value,
  onChange,
  placeholder = "Select time",
}: Base) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  const slots = buildSlots();

  return (
    <div ref={ref} className="relative">
      <label className="field-label">{label}</label>
      <Trigger
        display={fmtTime(value)}
        placeholder={placeholder}
        open={open}
        onClick={() => setOpen((v) => !v)}
      />
      <Popover open={open} width="w-[280px]">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="font-display text-sm text-[#1E1E1E]">
            Available slots
          </span>
          <span className="text-[0.54rem] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B]">
            7 AM — 8 PM
          </span>
        </div>
        <div
          className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto -mx-1 px-1"
          data-lenis-prevent
        >
          {slots.map((slot) => {
            const sel = slot === value;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  onChange(slot);
                  setOpen(false);
                }}
                className={`num py-2 rounded-md text-[0.78rem] transition-all ${
                  sel
                    ? "bg-[#1E1E1E] text-white shadow-md"
                    : "bg-[#FAF7F2] text-[#1E1E1E] hover:bg-[#EAE2D6]"
                }`}
              >
                {fmtTime(slot)}
              </button>
            );
          })}
        </div>
      </Popover>
    </div>
  );
}
