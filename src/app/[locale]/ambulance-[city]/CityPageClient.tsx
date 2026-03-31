"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SITE_CONFIG, CITIES } from "@/lib/constants";

export default function CityPageClient({
  citySlug,
  locale,
}: {
  citySlug: string;
  locale: string;
}) {
  const t = useTranslations("city");
  const ts = useTranslations("services");
  const tc = useTranslations("common");

  const city = CITIES.find((c) => c.slug === citySlug);
  if (!city) return null;

  const cityName =
    locale === "fr" ? city.nameFr :
    locale === "en" ? city.nameEn :
    city.nameAr;

  const prefix = locale === "ma" ? "" : `/${locale}`;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-urgent to-urgent-dark text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {tc("available247")}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t("heroTitle", { city: cityName })}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("heroSubtitle", { city: cityName })}
          </p>

          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="inline-block text-3xl md:text-5xl font-extrabold hover:text-medical transition-colors mb-6"
            dir="ltr"
          >
            {SITE_CONFIG.phone}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white text-urgent font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {tc("callNow")}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-medical text-lg py-4 px-8 inline-flex items-center justify-center gap-2"
            >
              {tc("whatsapp")}
            </a>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold text-center text-dark mb-10">
            {t("servicesTitle", { city: cityName })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["transport", "emergency", "escort"] as const).map((key) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-md border-t-4 border-urgent">
                <h3 className="text-xl font-bold text-dark mb-3">{ts(`${key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{ts(`${key}.description`)}</p>
                <ul className="space-y-2">
                  {(ts.raw(`${key}.features`) as string[]).map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-medical flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Coverage */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold text-center text-dark mb-10">
            {t("coverageTitle", { city: cityName })}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {city.neighborhoods.map((n) => (
              <div key={n} className="bg-light rounded-xl p-4 text-center border border-gray-200">
                <span className="text-sm font-medium text-dark">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-urgent text-white py-12">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            {t("ctaTitle", { city: cityName })}
          </h2>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="bg-white text-urgent font-bold py-4 px-10 rounded-lg text-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {tc("callNow")}
          </a>
        </div>
      </section>

      {/* Other Cities */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <div className="flex flex-wrap gap-3 justify-center">
            {CITIES.filter((c) => c.slug !== citySlug).map((c) => {
              const name = locale === "fr" ? c.nameFr : locale === "en" ? c.nameEn : c.nameAr;
              return (
                <Link
                  key={c.slug}
                  href={`${prefix}/ambulance-${c.slug}`}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-dark hover:border-urgent hover:text-urgent transition-colors"
                >
                  Ambulance {name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
