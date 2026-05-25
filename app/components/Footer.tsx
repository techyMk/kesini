import Image from "next/image";
import { nav, site } from "../data/site";
import Icon from "./ui/Icon";
import { MoustacheOrnament } from "./ui/Ornaments";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-ivory relative pt-20 pb-10 border-t border-[#D4A017]/20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="relative inline-flex h-24 w-48 md:h-28 md:w-56">
                <Image
                  src="/brand/kesini-logo.png"
                  alt={site.name}
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-contain"
                />
              </span>
            </div>
            <p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed max-w-md">
              A modern men&apos;s salon in Salem — where master craftsmanship,
              premium products and quiet rituals meet in a single, unhurried
              chair.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-[#1E1E1E]/12 text-[#1E1E1E] hover:text-[#A07F0F] hover:border-[#D4A017] transition-colors shadow-sm"
              >
                <Icon name="whatsapp" size={16} />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-[#1E1E1E]/12 text-[#1E1E1E] hover:text-[#A07F0F] hover:border-[#D4A017] transition-colors shadow-sm"
              >
                <Icon name="instagram" size={16} />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white border border-[#1E1E1E]/12 text-[#1E1E1E] hover:text-[#A07F0F] hover:border-[#D4A017] transition-colors shadow-sm"
              >
                <Icon name="facebook" size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[0.6rem] font-semibold tracking-[0.36em] uppercase text-[#A07F0F]">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#3A3A3A] hover:text-[#A07F0F] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[0.6rem] font-semibold tracking-[0.36em] uppercase text-[#A07F0F]">
              Visit
            </div>
            <p className="mt-5 text-sm text-[#3A3A3A] leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <a
              href={`tel:${site.phoneRaw}`}
              className="block mt-4 text-sm text-[#1E1E1E] hover:text-[#A07F0F] transition-colors"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-[#3A3A3A] hover:text-[#A07F0F] transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <MoustacheOrnament size="sm" />
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B6B6B]">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs italic text-[#6B6B6B]">
            Crafted with care for the gentlemen of Salem.
          </p>
        </div>
      </div>
    </footer>
  );
}
