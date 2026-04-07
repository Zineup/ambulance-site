"use client";

import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section className="relative bg-white text-dark overflow-hidden py-16 md:py-24 lg:py-32 border-b border-gray-100">
      <div className="container-page relative z-10">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#f2f2f2] text-[#222222] px-5 py-2 rounded-full text-[14px] font-semibold mb-8 border border-gray-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-medical"></span>
            </span>
            {tc("available247")} à Casablanca
          </div>

          {/* H1 - SEO optimized - Negative tracking, extremely bold */}
          <h1 className="text-[40px] leading-[1.1] sm:text-[56px] lg:text-[72px] font-extrabold tracking-[-0.04em] mb-6 text-dark max-w-[850px] mx-auto">
            <span className="block text-urgent mb-2">OK Ambulance</span> 
            SOS & Transport Médical 24/7
          </h1>

          <p className="text-[18px] md:text-[22px] text-[#6a6a6a] mb-10 leading-[1.4] max-w-[650px] font-medium tracking-tight">
            Intervention rapide en 15 min à Casablanca et transport médical sécurisé dans tout le Maroc.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn-urgent text-[18px] py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-[18px] py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto rounded-[8px] transition-all card-shadow hover:card-shadow-hover hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {tc("whatsapp")}
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-12 inline-flex items-center gap-2 text-[#6a6a6a] text-[15px] font-medium bg-[#f8f8f8] px-4 py-2.5 rounded-full border border-gray-100">
            <svg className="w-5 h-5 text-medical" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            +10 000 interventions réussies au Maroc
          </div>
        </div>
      </div>
    </section>
  );
}
