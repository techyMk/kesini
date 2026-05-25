type IconName =
  | "scissors"
  | "razor"
  | "spa"
  | "face"
  | "color"
  | "ring"
  | "shave"
  | "star"
  | "shield"
  | "bottle"
  | "person"
  | "candle"
  | "spark"
  | "phone"
  | "mail"
  | "map"
  | "clock"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "arrow"
  | "quote"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.12 8.12 20 20" />
      <path d="M20 4 8.12 15.88" />
    </>
  ),
  razor: (
    <>
      <path d="M3 12h11" />
      <path d="M14 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4z" />
      <path d="M3 12V6" />
    </>
  ),
  spa: (
    <>
      <path d="M12 2c2 4 2 7 0 10-2-3-2-6 0-10z" />
      <path d="M4 14c4 0 7 2 8 6-4 0-7-2-8-6z" />
      <path d="M20 14c-4 0-7 2-8 6 4 0 7-2 8-6z" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="10" r="0.6" fill="currentColor" />
      <circle cx="15" cy="10" r="0.6" fill="currentColor" />
    </>
  ),
  color: (
    <>
      <path d="M4 14c0-4 4-8 8-8a6 6 0 0 1 6 6c0 4-4 5-7 5-1 0-2 1-2 2 0 1 1 2 1 2-3 0-6-3-6-7z" />
      <circle cx="9" cy="11" r="0.7" fill="currentColor" />
      <circle cx="13" cy="9" r="0.7" fill="currentColor" />
      <circle cx="15" cy="13" r="0.7" fill="currentColor" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="14" r="6" />
      <path d="M8 8l4-4 4 4" />
    </>
  ),
  shave: (
    <>
      <path d="M4 4l8 8" />
      <path d="M12 12l4 4a2.8 2.8 0 0 1-4 4l-4-4z" />
      <path d="M6 6l2-2" />
    </>
  ),
  star: <path d="M12 3l2.6 5.6L21 9.6l-4.7 4.4L17.5 21 12 17.8 6.5 21l1.2-7L3 9.6l6.4-1z" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  bottle: (
    <>
      <path d="M10 2h4v3l1.5 2c.3.4.5.9.5 1.4V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.4c0-.5.2-1 .5-1.4L10 5z" />
      <path d="M9 14h6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-5 5-7 8-7s7 2 8 7" />
    </>
  ),
  candle: (
    <>
      <path d="M12 3c1.5 1.5 1.5 3 0 4.5-1.5-1.5-1.5-3 0-4.5z" />
      <rect x="9" y="9" width="6" height="11" rx="1" />
      <path d="M9 13h6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="M5.5 5.5l2.8 2.8" />
      <path d="M15.7 15.7l2.8 2.8" />
      <path d="M5.5 18.5l2.8-2.8" />
      <path d="M15.7 8.3l2.8-2.8" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  map: (
    <>
      <path d="M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
    />
  ),
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 22v-8h3l1-4h-4V7.5c0-1.2.4-1.8 1.8-1.8H18V2.2c-.6-.1-1.7-.2-2.7-.2-2.6 0-4.3 1.6-4.3 4.6V10H8v4h3v8z" />
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  quote: (
    <path d="M7 7c-2 0-4 2-4 4v6h6v-6H6c0-1 1-2 2-2zm10 0c-2 0-4 2-4 4v6h6v-6h-3c0-1 1-2 2-2z" />
  ),
  menu: (
    <>
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M3 17h18" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
};

export default function Icon({
  name,
  size = 22,
  className,
  strokeWidth = 1.5,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
