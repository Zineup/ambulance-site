"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQSection() {
  const t = useTranslations("faq");

  const items = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
  ];

  return (
    <section className="section-padding bg-white border-b border-gray-100" id="faq">
      <div className="container-page">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-center text-[#222222] tracking-[-0.02em] mb-16">
          {t("title")}
        </h2>

        <div className="max-w-[800px] mx-auto space-y-5">
          {items.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bg-white rounded-[16px] border transition-all duration-300 overflow-hidden ${open ? "border-gray-200 card-shadow-hover" : "border-gray-100 hover:border-gray-200 hover:card-shadow"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-start outline-none focus-visible:ring-2 focus-visible:ring-urgent rounded-[16px]"
      >
        <span className="font-bold text-[#222222] text-[18px] tracking-tight pe-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? "bg-[#f2f2f2]" : "bg-white"}`}>
          <svg
            className={`w-5 h-5 text-dark flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 pt-0 text-[#6a6a6a] text-[16px] leading-[1.6]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
