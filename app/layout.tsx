import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-num",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kesini.example"),
  title: {
    default: "Kesini Luxury Men's Salon — Salem | Premium Grooming, Perfected",
    template: "%s | Kesini Luxury Men's Salon",
  },
  description:
    "Salem's premier luxury salon for men. Master stylists, premium grooming, hair spa, beard sculpting and bridal grooming on Advaith Ashram Road. Book your experience.",
  keywords: [
    "luxury men's salon Salem",
    "Kesini Salon",
    "premium grooming Salem",
    "beard styling Salem",
    "bridal groom package Salem",
    "hair spa Salem",
  ],
  openGraph: {
    title: "Kesini Luxury Men's Salon — Salem",
    description:
      "Premium grooming, master stylists, signature shaves and bridal packages in the heart of Salem.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/brand/kesini-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${bodoni.variable}`}
    >
      <body className="bg-[#FAF7F2] text-[#1E1E1E] grain-overlay">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
