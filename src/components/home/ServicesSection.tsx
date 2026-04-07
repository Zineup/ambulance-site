"use client";

import { useTranslations } from "next-intl";

const serviceIcons = {
  transport: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-2v4a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-6a3 3 0 013-3h2z" />
    </svg>
  ),
  emergency: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  escort: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { key: "transport" as const, color: "urgent" },
    { key: "emergency" as const, color: "urgent" },
    { key: "escort" as const, color: "medical" },
  ];

  return (
    <section className="section-padding bg-[#f8f8f8]" id="services">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-dark tracking-[-0.02em] mb-4">
            {t("title")}
          </h2>
          <p className="text-[18px] text-[#6a6a6a] max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ key, color }) => (
            <div
              key={key}
              className="bg-white rounded-[20px] p-8 border border-gray-100 transition-all duration-300 card-shadow hover:card-shadow-hover group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-[16px] bg-${color}/10 text-${color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {serviceIcons[key]}
              </div>
              <h3 className="text-[22px] font-bold text-[#222222] mb-3 tracking-[-0.01em]">
                {t(`${key}.title`)}
              </h3>
              <p className="text-[#6a6a6a] text-[15px] mb-6 leading-[1.6]">
                {t(`${key}.description`)}
              </p>
              <ul className="space-y-3 pt-6 border-t border-gray-100">
                {(t.raw(`${key}.features`) as string[]).map(
                  (feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#222222] font-medium leading-[1.4]">
                      <svg className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
