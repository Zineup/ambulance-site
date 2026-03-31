"use client";

import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";

export default function ServicesDetailClient() {
  const t = useTranslations("services");
  const tc = useTranslations("common");

  const services = [
    {
      key: "transport" as const,
      icon: "🚐",
      seoKeywords: "نقل المرضى, transport malade, patient transport",
    },
    {
      key: "emergency" as const,
      icon: "🚨",
      seoKeywords: "إسعاف مستعجل, urgence médicale, emergency ambulance",
    },
    {
      key: "escort" as const,
      icon: "🏥",
      seoKeywords: "مرافقة للمستشفى, accompagnement hospitalier, hospital escort",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-[#1a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t("title")}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Services Detail */}
      <div className="container-page py-12 md:py-20">
        <div className="space-y-16">
          {services.map(({ key, icon, seoKeywords }, index) => (
            <section
              key={key}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              {/* Image placeholder */}
              <div className="w-full md:w-1/2">
                <div className="bg-light rounded-2xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <span className="text-7xl block mb-4">{icon}</span>
                    <p className="text-gray-400 text-sm">
                      {t(`${key}.title`)} - Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4">
                  {t(`${key}.title`)}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t(`${key}.description`)}
                </p>
                <ul className="space-y-3 mb-6">
                  {(t.raw(`${key}.features`) as string[]).map(
                    (feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-medical/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-medical" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="btn-urgent inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {tc("callNow")}
                </a>
                {/* Hidden SEO keywords */}
                <meta name="keywords" content={seoKeywords} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
