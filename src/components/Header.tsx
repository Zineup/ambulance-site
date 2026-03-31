"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { type Locale, locales, localeNames } from "@/i18n";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  function getLocalePath(targetLocale: string) {
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale === "ma" ? "" : targetLocale;
    } else {
      segments.splice(1, 0, targetLocale === "ma" ? "" : targetLocale);
    }
    const path = segments.filter(Boolean).join("/");
    return `/${path}` || "/";
  }

  const prefix = locale === "ma" ? "" : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-2">
            <span className="text-3xl">🚑</span>
            <span className="text-lg md:text-xl font-bold text-dark">
              {SITE_CONFIG.nameAr}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`${prefix}/`} className="text-dark hover:text-urgent font-medium transition-colors">
              {t("home")}
            </Link>
            <Link href={`${prefix}/services`} className="text-dark hover:text-urgent font-medium transition-colors">
              {t("services")}
            </Link>
            <Link href={`${prefix}/contact`} className="text-dark hover:text-urgent font-medium transition-colors">
              {t("contact")}
            </Link>
            <Link href={`${prefix}/blog`} className="text-dark hover:text-urgent font-medium transition-colors">
              {t("blog")}
            </Link>
          </nav>

          {/* Phone + Language + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Phone CTA */}
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="hidden sm:flex btn-urgent text-sm py-2 px-4 items-center gap-2"
            >
              <PhoneIcon />
              <span>{t("callNow")}</span>
            </a>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 hover:border-urgent text-sm font-medium transition-colors"
              >
                <GlobeIcon />
                <span>{localeNames[locale]}</span>
                <ChevronIcon open={langOpen} />
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1 end-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[140px] z-50">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={getLocalePath(l)}
                      className={`block px-4 py-2 text-sm hover:bg-light transition-colors ${
                        l === locale ? "text-urgent font-bold" : "text-dark"
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
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              <Link href={`${prefix}/`} className="py-2 px-4 text-dark hover:text-urgent font-medium" onClick={() => setMenuOpen(false)}>
                {t("home")}
              </Link>
              <Link href={`${prefix}/services`} className="py-2 px-4 text-dark hover:text-urgent font-medium" onClick={() => setMenuOpen(false)}>
                {t("services")}
              </Link>
              <Link href={`${prefix}/contact`} className="py-2 px-4 text-dark hover:text-urgent font-medium" onClick={() => setMenuOpen(false)}>
                {t("contact")}
              </Link>
              <Link href={`${prefix}/blog`} className="py-2 px-4 text-dark hover:text-urgent font-medium" onClick={() => setMenuOpen(false)}>
                {t("blog")}
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-center mx-4 mt-2">
                {t("callNow")}
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
