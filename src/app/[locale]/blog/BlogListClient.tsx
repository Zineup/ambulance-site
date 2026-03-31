"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function BlogListClient() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const prefix = locale === "ma" ? "" : `/${locale}`;

  const posts = [
    { key: "post1", emoji: "🚑", color: "urgent" },
    { key: "post2", emoji: "🏥", color: "medical" },
    { key: "post3", emoji: "💰", color: "urgent" },
  ] as const;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-[#1a1a3e] text-white py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Blog posts */}
      <div className="container-page py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(({ key, emoji }) => (
            <article
              key={key}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Image placeholder */}
              <div className="bg-light aspect-[16/9] flex items-center justify-center">
                <span className="text-6xl">{emoji}</span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-dark mb-3 line-clamp-2">
                  {t(`${key}.title`)}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(`${key}.excerpt`)}
                </p>
                <Link
                  href={`${prefix}/blog/${t(`${key}.slug`)}`}
                  className="text-urgent font-bold text-sm hover:underline inline-flex items-center gap-1"
                >
                  {t("readMore")}
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
