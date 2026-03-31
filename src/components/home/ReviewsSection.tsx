"use client";

import { useTranslations } from "next-intl";

export default function ReviewsSection() {
  const t = useTranslations("reviews");

  const reviews = [
    { key: "review1" },
    { key: "review2" },
    { key: "review3" },
  ] as const;

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-dark mb-12">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(({ key }) => (
            <div
              key={key}
              className="bg-light rounded-2xl p-6 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;{t(`${key}.text`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-urgent/10 rounded-full flex items-center justify-center">
                  <span className="text-urgent font-bold text-sm">
                    {(t(`${key}.name`) as string).charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-dark">{t(`${key}.name`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
