"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { type Locale } from "@/i18n";
import { SITE_CONFIG, SERVICES, QUARTIERS_CASABLANCA } from "@/lib/constants";

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("common");
  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <footer className="bg-dark text-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🚑</span>
              <span className="text-xl font-bold">{SITE_CONFIG.nameAr}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {locale === "fr"
                ? "Service d'ambulance professionnel disponible 24h/24 et 7j/7 dans tout le Maroc."
                : locale === "en"
                ? "Professional ambulance service available 24/7 across Morocco."
                : locale === "ma"
                ? "خدمة إسعاف احترافية متوفرة 24 ساعة فـ 24 فكل أنحاء المغرب."
                : "خدمة إسعاف احترافية متاحة على مدار الساعة في جميع أنحاء المغرب."}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${prefix}/`} className="text-gray-300 hover:text-urgent transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/services`} className="text-gray-300 hover:text-urgent transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contact`} className="text-gray-300 hover:text-urgent transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/blog`} className="text-gray-300 hover:text-urgent transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Maillage interne */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("ourServices")}</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`${prefix}/services/${service.slug}`}
                    className="text-gray-300 hover:text-urgent transition-colors"
                  >
                    {locale === "fr" ? service.nameFr : locale === "en" ? service.nameEn : locale === "ma" ? service.nameMa : service.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones d'intervention - Maillage interne */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("villes")}</h3>
            <ul className="space-y-2 text-sm">
              {QUARTIERS_CASABLANCA.map((quartier) => (
                <li key={quartier.slug}>
                  <Link
                    href={`${prefix}/villes/${quartier.slug}`}
                    className="text-gray-300 hover:text-urgent transition-colors"
                  >
                    {locale === "fr" ? quartier.nameFr : locale === "en" ? quartier.nameEn : locale === "ma" ? quartier.nameMa : quartier.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-gray-300 hover:text-urgent" dir="ltr">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-medical flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 hover:text-urgent">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-urgent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.nameAr}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
