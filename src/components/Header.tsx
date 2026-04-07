"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { type Locale, locales, localeNames } from "@/i18n";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getLocalePath(targetLocale: string) {
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale === "ar" ? "" : targetLocale;
    } else {
      segments.splice(1, 0, targetLocale === "ar" ? "" : targetLocale);
    }
    const path = segments.filter(Boolean).join("/");
    return `/${path}` || "/";
  }

  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "card-shadow" : "border-b border-gray-100"
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-urgent rounded-lg p-1">
            <div className="w-10 h-10 bg-dark rounded-[10px] flex items-center justify-center text-white font-bold text-xl leading-none">
              OK
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-extrabold text-dark leading-tight tracking-tight">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] font-semibold text-urgent tracking-wide uppercase">
                {t("available247")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href={`${prefix}/`} className="px-4 py-2 rounded-full text-[15px] text-[#222222] font-semibold hover:bg-gray-100 transition-all">
              {t("home")}
            </Link>
            <Link href={`${prefix}/services`} className="px-4 py-2 rounded-full text-[15px] text-[#6a6a6a] font-medium hover:bg-gray-100 hover:text-[#222222] transition-all">
              {t("services")}
            </Link>
            <Link href={`${prefix}/contact`} className="px-4 py-2 rounded-full text-[15px] text-[#6a6a6a] font-medium hover:bg-gray-100 hover:text-[#222222] transition-all">
              {t("contact")}
            </Link>
            <Link href={`${prefix}/blog`} className="px-4 py-2 rounded-full text-[15px] text-[#6a6a6a] font-medium hover:bg-gray-100 hover:text-[#222222] transition-all">
              {t("blog")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Phone CTA */}
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="hidden sm:flex items-center gap-2 bg-[#ff385c] hover:bg-[#e00b35] text-white text-[15px] font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <PhoneIcon />
              <span>{t("callNow")}</span>
            </a>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-full border border-gray-200 hover:shadow-md bg-white text-[15px] font-medium text-[#222222] transition-all focus:outline-none"
              >
                <GlobeIcon />
                <span className="hidden lg:inline-block font-semibold">{localeNames[locale]}</span>
                <ChevronIcon open={langOpen} />
              </button>
              {langOpen && (
                <div className="absolute top-[calc(100%+12px)] end-0 bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.15)] min-w-[160px] z-50 py-3 overflow-hidden border border-gray-100">
                  {locales.map((l) => (
                    <a
                      key={l}
                      href={getLocalePath(l)}
                      className={`block px-5 py-3 text-[15px] transition-colors ${
                        l === locale ? "font-bold text-[#222222] bg-gray-50" : "text-[#6a6a6a] hover:bg-gray-50 hover:text-[#222222]"
                      }`}
                      onClick={(e) => {
                        // Force the Next-intl cookie so the middleware doesn't redirect back
                        document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000`;
                        setLangOpen(false);
                      }}
                    >
                      {localeNames[l]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Menu (Airbnb Style Pill) */}
            <button
              className="md:hidden flex items-center gap-2 p-2.5 pl-3.5 border border-gray-200 rounded-full hover:shadow-md bg-white transition-all focus:outline-none active:scale-95"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5 text-[#222222]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center overflow-hidden">
                <svg className="w-5 h-5 text-white mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col py-4">
              <Link href={`${prefix}/`} className="py-3 px-6 text-[#222222] font-semibold hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {t("home")}
              </Link>
              <Link href={`${prefix}/services`} className="py-3 px-6 text-[#6a6a6a] hover:text-[#222222] hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {t("services")}
              </Link>
              <Link href={`${prefix}/contact`} className="py-3 px-6 text-[#6a6a6a] hover:text-[#222222] hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {t("contact")}
              </Link>
              <Link href={`${prefix}/blog`} className="py-3 px-6 text-[#6a6a6a] hover:text-[#222222] hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                {t("blog")}
              </Link>
              <div className="h-[1px] bg-gray-100 my-2 mx-4"></div>
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="mx-6 mt-2 bg-[#ff385c] hover:bg-[#e00b35] text-white py-3 rounded-full text-center font-bold shadow-md transition-all">
                {t("callNow")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
