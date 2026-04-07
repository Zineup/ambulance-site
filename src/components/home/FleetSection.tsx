"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FleetSection() {
  const t = useTranslations("fleet");

  return (
    <section className="section-padding bg-white border-b border-gray-100" id="fleet">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-dark tracking-[-0.02em] mb-4">
            {t("title")}
          </h2>
          <p className="text-[18px] text-[#6a6a6a] max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Fleet Image Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[32px] overflow-hidden card-shadow">
            <Image
              src="/images/ambulance-fleet.jpg"
              alt={t("imageAlt")}
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
              priority={false}
            />
            {/* Overlay with info badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/80 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-white text-[14px] font-semibold">
                  {t("badge1")}
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-white text-[14px] font-semibold">
                  {t("badge2")}
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-white text-[14px] font-semibold">
                  {t("badge3")}
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
            <div className="bg-[#f8f8f8] rounded-[20px] p-8 card-shadow-hover transition-shadow text-center">
              <div className="w-14 h-14 bg-urgent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-urgent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#222222] mb-2">{t("feature1Title")}</h3>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed">{t("feature1Text")}</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-[20px] p-8 card-shadow-hover transition-shadow text-center">
              <div className="w-14 h-14 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-medical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#222222] mb-2">{t("feature2Title")}</h3>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed">{t("feature2Text")}</p>
            </div>
            <div className="bg-[#f8f8f8] rounded-[20px] p-8 card-shadow-hover transition-shadow text-center">
              <div className="w-14 h-14 bg-urgent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-urgent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#222222] mb-2">{t("feature3Title")}</h3>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed">{t("feature3Text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
