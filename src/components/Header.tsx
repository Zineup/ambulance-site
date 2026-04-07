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
          <nav className="hidden md:flex items-center gap-8">
            <Link href={`${prefix}/`} className="text-[15px] text-[#222222] hover:text-[#6a6a6a] font-medium transition-colors">
              {t("home")}
            </Link>
            <Link href={`${prefix}/services`} className="text-[15px] text-[#222222] hover:text-[#6a6a6a] font-medium transition-colors">
              {t("services")}
            </Link>
            <Link href={`${prefix}/contact`} className="text-[15px] text-[#222222] hover:text-[#6a6a6a] font-medium transition-colors">
              {t("contact")}
            </Link>
            <Link href={`${prefix}/blog`} className="text-[15px] text-[#222222] hover:text-[#6a6a6a] font-medium transition-colors">
              {t("blog")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Phone CTA */}
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="hidden sm:flex items-center gap-2 bg-[#f2f2f2] hover:bg-white text-[#222222] text-[15px] font-semibold px-5 py-2.5 rounded-[24px] border border-transparent hover:border-gray-200 transition-all hover:card-shadow-hover"
            >
              <PhoneIcon />
              <span>{t("callNow")}</span>
            </a>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-full hover:bg-[#f2f2f2] text-[15px] font-medium text-[#222222] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-dark"
              >
                <GlobeIcon />
                <span className="hidden sm:inline-block">{localeNames[locale]}</span>
                <ChevronIcon open={langOpen} />
              </button>
              {langOpen && (
                <div className="absolute top-[calc(100%+8px)] end-0 bg-white border border-gray-100 rounded-[16px] shadow-[rgba(0,0,0,0.12)_0px_6px_16px] min-w-[140px] z-50 py-2 overflow-hidden">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={getLocalePath(l)}
                      className={`block px-4 py-2.5 text-[15px] transition-colors ${
                        l === locale ? "font-semibold text-[#222222] bg-[#f8f8f8]" : "text-[#6a6a6a] hover:bg-[#f2f2f2]"
                      }`}
                      onClick={() => setLangOpen(false)}
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2.5 rounded-full hover:bg-[#f2f2f2] text-[#222222] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1 pt-4">
              <Link href={`${prefix}/`} className="py-3 px-4 text-[16px] text-[#222222] font-medium hover:bg-[#f2f2f2] rounded-[8px]" onClick={() => setMenuOpen(false)}>
                {t("home")}
              </Link>
              <Link href={`${prefix}/services`} className="py-3 px-4 text-[16px] text-[#222222] font-medium hover:bg-[#f2f2f2] rounded-[8px]" onClick={() => setMenuOpen(false)}>
                {t("services")}
              </Link>
              <Link href={`${prefix}/contact`} className="py-3 px-4 text-[16px] text-[#222222] font-medium hover:bg-[#f2f2f2] rounded-[8px]" onClick={() => setMenuOpen(false)}>
                {t("contact")}
              </Link>
              <Link href={`${prefix}/blog`} className="py-3 px-4 text-[16px] text-[#222222] font-medium hover:bg-[#f2f2f2] rounded-[8px]" onClick={() => setMenuOpen(false)}>
                {t("blog")}
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="mt-4 mx-4 btn-urgent text-center">
                <span className="flex items-center justify-center gap-2">
                  <PhoneIcon />
                  {t("callNow")}
                </span>
              </a>
            </div>
          </nav>
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
