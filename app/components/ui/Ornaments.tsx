/* Signature visual language inspired by the moustache logo silhouette.
   Used as section dividers, hero decoration, card corner accents. */

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
};

/* ---------- Moustache curl (mirrored, with center diamond) ----------
   A stylized two-curl ornament referencing the moustache logo's
   terminal swirls. Used as the brand's signature divider. */
export function MoustacheOrnament({
  className = "",
  size = "md",
  color = "#D4A017",
}: Props) {
  const widthClass = {
    sm: "w-36",
    md: "w-56",
    lg: "w-80",
  }[size];

  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${widthClass} h-auto ${className}`}
    >
      {/* Left curl */}
      <path d="M10 12 C 10 5, 22 5, 22 12 C 22 19, 34 19, 34 12" />
      {/* Connecting hairline */}
      <line x1="44" y1="12" x2="106" y2="12" />
      {/* Center diamond */}
      <rect x="116" y="8" width="8" height="8" transform="rotate(45 120 12)" fill={color} stroke="none" />
      {/* Connecting hairline */}
      <line x1="134" y1="12" x2="196" y2="12" />
      {/* Right curl (mirror) */}
      <path d="M230 12 C 230 5, 218 5, 218 12 C 218 19, 206 19, 206 12" />
    </svg>
  );
}

/* ---------- Section divider — moustache flanked by gradient lines ----------
   Place between sections as a quiet brand moment. */
export function SectionDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "#D4A017" : "#D4A574";
  return (
    <div className="flex items-center justify-center py-10 md:py-14">
      <div className="flex items-center gap-6 w-full max-w-2xl px-6">
        <span
          aria-hidden
          className="h-px flex-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}88, transparent)`,
          }}
        />
        <MoustacheOrnament size="sm" color={color} className="flex-shrink-0" />
        <span
          aria-hidden
          className="h-px flex-1"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}88, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

/* ---------- Section watermark — oversized faded section label
   Sits behind a section as a subtle editorial mark. */
export function SectionWatermark({
  text,
  position = "left",
  tone = "light",
}: {
  text: string;
  position?: "left" | "right" | "center";
  tone?: "light" | "dark";
}) {
  const align =
    position === "right" ? "right-[-3vw]" : position === "center" ? "left-1/2 -translate-x-1/2" : "left-[-3vw]";
  const color = tone === "light" ? "rgba(30,30,30,0.04)" : "rgba(255,255,255,0.04)";

  return (
    <span
      aria-hidden
      className={`pointer-events-none select-none absolute top-12 ${align} font-display text-[14vw] md:text-[12vw] leading-none tracking-tight whitespace-nowrap`}
      style={{ color }}
    >
      {text}
    </span>
  );
}

/* ---------- Curl bracket (single, used as decorative end-cap) ---------- */
export function CurlBracket({
  className = "",
  color = "#D4A017",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`w-10 h-auto ${flip ? "scale-x-[-1]" : ""} ${className}`}
    >
      <path d="M2 12 C 2 5, 14 5, 14 12 C 14 19, 26 19, 26 12 L 38 12" />
    </svg>
  );
}
