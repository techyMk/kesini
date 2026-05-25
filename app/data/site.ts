export const site = {
  name: "Kesini Luxury Men's Salon",
  shortName: "Kesini",
  tagline: "Luxury Men's Salon",
  city: "Salem",
  phone: "+91 98946 56706",
  phoneRaw: "919894656706",
  email: "kesinisalon@gmail.com",
  whatsapp: "919894656706",
  address: {
    line1: "Advaith Ashram Road",
    line2: "Opp. Mangalavilas Non-Veg Hotel, near Saravana Bakery",
    line3: "New Bus Stand Area, Salem - 636004",
    state: "Tamil Nadu, India",
  },
  hours: [
    { day: "Monday — Saturday", time: "7:00 AM — 8:00 PM" },
    { day: "Sunday", time: "8:00 AM — 8:00 PM" },
  ],
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://www.facebook.com/",
    justdial: "https://www.justdial.com/",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Kesini+Salon+Advaith+Ashram+Road+Salem&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Kesini+Salon+Advaith+Ashram+Road+Salem",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Kesini" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export type Service = {
  title: string;
  blurb: string;
  duration: string;
  priceFrom: string;
  icon: "scissors" | "razor" | "spa" | "face" | "color" | "ring";
  featured?: boolean;
  image: string;
};

export const services: Service[] = [
  {
    title: "Hair Styling",
    blurb:
      "Bespoke consultation, precision shaping and a tailored finish — designed around your face structure and lifestyle.",
    duration: "45 min",
    priceFrom: "₹350",
    icon: "scissors",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Beard Grooming",
    blurb:
      "Clean architectural lines, deep conditioning and signature beard oil. Walk out sharper than you walked in.",
    duration: "30 min",
    priceFrom: "₹250",
    icon: "razor",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Luxury Hair Spa",
    blurb:
      "Scalp ritual with warm oil, deep nourishment and a slow-pressure head massage that resets the entire week.",
    duration: "50 min",
    priceFrom: "₹650",
    icon: "spa",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Facial Treatments",
    blurb:
      "Targeted facials for men — deep cleansing, exfoliation, mask therapy and a luminous matte finish.",
    duration: "60 min",
    priceFrom: "₹750",
    icon: "face",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Hair Coloring",
    blurb:
      "Global colour, grey-coverage and natural tone blending using premium ammonia-free formulas.",
    duration: "75 min",
    priceFrom: "₹900",
    icon: "color",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Groom Packages",
    blurb:
      "Two hours, one chair, every ritual — the wedding-day grooming choreographed by our master stylists.",
    duration: "120 min",
    priceFrom: "₹2,499",
    icon: "ring",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
  },
];

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "25K+", label: "Happy Customers" },
  { value: "08", label: "Expert Stylists" },
  { value: "100%", label: "Hygiene-First" },
];

export type Reason = {
  title: string;
  blurb: string;
  icon: "shield" | "bottle" | "person" | "candle" | "spark" | "star";
};

export const reasons: Reason[] = [
  {
    title: "Hygienic Environment",
    blurb:
      "Single-use blades, sterilised tools, fresh capes — a clinical standard inside a luxury room.",
    icon: "shield",
  },
  {
    title: "Premium Products",
    blurb:
      "Internationally curated grooming brands — no shortcuts in the things that touch your skin and hair.",
    icon: "bottle",
  },
  {
    title: "Expert Stylists",
    blurb:
      "Trained in classic barbering and modern men's styling — every chair is held by a craftsman.",
    icon: "person",
  },
  {
    title: "Personalised Looks",
    blurb:
      "A consultation before the cut. We design the look around your face, your work and your day.",
    icon: "star",
  },
  {
    title: "Comfortable Ambience",
    blurb:
      "Soft lighting, slow service, your music. The cut is the reason. The atmosphere is the gift.",
    icon: "candle",
  },
  {
    title: "Modern Styling Trends",
    blurb:
      "From timeless classics to the cuts you saw last week on screen — our team trains every quarter.",
    icon: "spark",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
    alt: "Master barber finishing a precision fade",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Vintage barber tools laid on dark leather",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
    alt: "Close-up of straight razor shave",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
    alt: "Moody salon interior with brass fittings",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    alt: "Tailored beard sculpting in progress",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85",
    alt: "Classic gentleman's hairstyle, side-parted",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1200&q=85",
    alt: "Salon ambience, low warm lighting",
    span: "wide",
  },
];

export const testimonials = [
  {
    name: "Arjun Ramaswamy",
    title: "Senior Architect",
    initials: "AR",
    quote:
      "Walking into Kesini feels like stepping into a lounge in Singapore, not a salon in Salem. The cut is precise, the service is unhurried, and the room smells like a five-star hotel.",
    rating: 5,
  },
  {
    name: "Vignesh K.",
    title: "Bridegroom, March 2025",
    initials: "VK",
    quote:
      "Booked the groom package and they choreographed the whole afternoon for me — hair, beard, facial, photographs. My wife noticed before the relatives did.",
    rating: 5,
  },
  {
    name: "Karthik S.",
    title: "Regular since 2022",
    initials: "KS",
    quote:
      "Three years in and I still get the same chair, the same stylist, the same conversation about my last haircut. That kind of memory is rare anywhere.",
    rating: 5,
  },
];
