"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FleetSection() {
  const t = useTranslations("fleet");

  return (
    <section className="section-padding bg-white" id="fleet">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Fleet Image */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/ambulance-fleet.jpg"
              alt={t("imageAlt")}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority={false}
            />
            {/* Overlay with info badges */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark/90 to-transparent p-6 md:p-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-medium">
                  {t("badge1")}
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-medium">
                  {t("badge2")}
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-medium">
                  {t("badge3")}
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-urgent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-urgent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-1">{t("feature1Title")}</h3>
              <p className="text-gray-600 text-sm">{t("feature1Text")}</p>
            </div>
            <div className="bg-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-medical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-1">{t("feature2Title")}</h3>
              <p className="text-gray-600 text-sm">{t("feature2Text")}</p>
            </div>
            <div className="bg-light rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-urgent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-urgent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-1">{t("feature3Title")}</h3>
              <p className="text-gray-600 text-sm">{t("feature3Text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
