"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";

interface BlogPost {
  title: string;
  content: string[];
}

export default function BlogPostClient({
  slug,
  locale,
  post,
}: {
  slug: string;
  locale: string;
  post: BlogPost | undefined;
}) {
  const tc = useTranslations("common");
  const prefix = locale === "ma" ? "" : `/${locale}`;

  if (!post) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold text-dark mb-4">404</h1>
        <p className="text-gray-600 mb-8">
          {locale === "fr" ? "Article non trouvé" : locale === "en" ? "Article not found" : "المقال غير موجود"}
        </p>
        <Link href={`${prefix}/blog`} className="btn-urgent">
          {locale === "fr" ? "Retour au blog" : locale === "en" ? "Back to blog" : "رجوع للمدونة"}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-[#1a1a3e] text-white py-16 md:py-20">
        <div className="container-page text-center max-w-3xl mx-auto">
          <Link
            href={`${prefix}/blog`}
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === "fr" ? "Retour au blog" : locale === "en" ? "Back to blog" : "رجوع للمدونة"}
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="container-page py-12 md:py-20 max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-urgent/5 border border-urgent/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">
            {locale === "fr"
              ? "Besoin d'une ambulance ?"
              : locale === "en"
              ? "Need an ambulance?"
              : "محتاج إسعاف؟"}
          </h2>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn-urgent text-lg py-4 px-8 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {tc("callNow")}
          </a>
        </div>
      </article>
    </div>
  );
}
