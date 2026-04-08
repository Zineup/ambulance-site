"use client";

import { useTranslations } from "next-intl";
import AnimatedNumber from "./AnimatedNumber";

export default function TrustSection() {
  const t = useTranslations("trust");

  const badges = [
    {
      key: "badge1",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "urgent",
      delay: "100"
    },
    {
      key: "badge2",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "white",
      delay: "200"
    },
    {
      key: "badge3",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "medical",
      delay: "300"
    },
    {
      key: "badge4",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "urgent",
      delay: "400"
    },
  ];

  return (
    <section className="section-padding bg-[#1D3557] text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E63946] opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container-page relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-white mb-4">
            {t("title")}
          </h2>
          <div className="w-24 h-1.5 bg-[#E63946] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {badges.map(({ key, icon, color, delay }) => {
            const translation = t(key);
            
            return (
              <div
                key={key}
                className={`flex flex-col items-center text-center p-8 rounded-[24px] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-[30px] duration-700 delay-${delay}`}
              >
                <div className={`text-${color === "white" ? "white" : (color === "medical" ? "[#60a5fa]" : "[#E63946]")} mb-6 transform transition-transform hover:scale-110 duration-300`}>
                  {icon}
                </div>
                
                {key === "badge3" ? (
                  <div className="font-bold text-[22px] md:text-[24px] text-white tracking-tight flex flex-col items-center leading-snug">
                    <AnimatedNumber value={10000} prefix="+" suffix=" " duration={2500} />
                    <span className="text-[16px] text-gray-300 font-medium mt-1">Interventions</span>
                  </div>
                ) : (
                  <p className="font-semibold text-[17px] text-gray-100 tracking-wide leading-relaxed">
                    {translation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
