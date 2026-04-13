"use client";

import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffffff] via-[#f8f9fa] to-white border-b border-gray-100">
      {/* Decorative Blur */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E63946] opacity-[0.03] blur-[100px] rounded-[100%] pointer-events-none"></div>

      <div className="container-page relative z-10">
        <div className="max-w-[850px] mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white text-[#222222] px-8 py-4 rounded-full text-[18px] font-extrabold mb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border-2 border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-medical"></span>
            </span>
            {tc("available247")}
          </div>

          {/* H1 - SEO optimized - Negative tracking, extremely bold */}
          <h1 className="text-[42px] leading-[1.05] sm:text-[60px] lg:text-[80px] font-extrabold tracking-[calc(-0.04em)] mb-6 text-[#222222] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="block text-[#ff385c] mb-2 drop-shadow-sm">Casa Ambulance</span>
            {t("title").replace("Casa Ambulance", "").trim()}
          </h1>

          <p className="text-[18px] md:text-[22px] text-[#6a6a6a] mb-12 leading-[1.5] max-w-[650px] font-medium tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="bg-[#ff385c] hover:bg-[#e00b35] text-white font-bold text-[18px] py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto rounded-full shadow-[0_8px_20px_rgba(255,56,92,0.3)] hover:shadow-[0_12px_24px_rgba(255,56,92,0.4)] hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-[#ff385c]/30"
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
              className="bg-white border-2 border-gray-200 hover:border-[#25D366] text-[#222222] hover:text-[#25D366] font-bold text-[18px] py-4 px-8 flex items-center justify-center gap-3 w-full sm:w-auto rounded-full transition-all hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {tc("whatsapp")}
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-14 inline-flex items-center gap-2 text-[#6a6a6a] text-[15px] font-medium bg-white px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500 hover:-translate-y-1 transition-transform">
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            +10 000 interventions réussies au Maroc
          </div>
        </div>
      </div>
    </section>
  );
}
