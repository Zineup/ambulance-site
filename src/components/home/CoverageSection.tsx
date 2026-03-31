"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { CITIES } from "@/lib/constants";

export default function CoverageSection({ locale }: { locale: string }) {
  const t = useTranslations("coverage");
  const prefix = locale === "ma" ? "" : `/${locale}`;

  return (
    <section className="section-padding bg-white" id="coverage">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Map placeholder */}
        <div className="bg-light rounded-2xl overflow-hidden mb-10 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-gray-500 text-lg">
              Google Maps Integration
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {locale === "fr" ? "Carte interactive de couverture" :
               locale === "en" ? "Interactive coverage map" :
               "خريطة التغطية التفاعلية"}
            </p>
          </div>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CITIES.map((city) => {
            const cityName =
              locale === "fr" ? city.nameFr :
              locale === "en" ? city.nameEn :
              city.nameAr;

            return (
              <Link
                key={city.slug}
                href={`${prefix}/ambulance-${city.slug}`}
                className="group bg-light rounded-xl p-4 text-center hover:bg-urgent hover:text-white transition-all duration-200 border border-gray-200 hover:border-urgent"
              >
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-dark group-hover:text-white transition-colors">
                  {cityName}
                </h3>
                <p className="text-xs text-gray-500 group-hover:text-white/80 mt-1 transition-colors">
                  Ambulance {city.nameFr}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
