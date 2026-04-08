"use client";

import { useTranslations } from "next-intl";

export default function ReviewsSection() {
  const t = useTranslations("reviews");

  const reviews = [
    { key: "review1" },
    { key: "review2" },
    { key: "review3" },
    { key: "review4" },
    { key: "review5" },
    { key: "review6" },
  ] as const;

  return (
    <section className="section-padding bg-[#f8f8f8]">
      <div className="container-page">
        <h2 className="text-[32px] md:text-[40px] font-extrabold text-center text-[#222222] tracking-[-0.02em] mb-16">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map(({ key }) => (
            <div
              key={key}
              className="bg-white rounded-[20px] p-8 border border-gray-100 card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              {/* Author */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-[18px]">
                    {(t(`${key}.name`) as string).charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block font-bold text-[#222222] text-[16px]">{t(`${key}.name`)}</span>
                  <span className="block text-[#6a6a6a] text-[13px] mt-0.5">Sur Google Reviews</span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#222222]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#222222] leading-[1.6] text-[15px]">
                &ldquo;{t(`${key}.text`)}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
