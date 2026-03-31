import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustSection from "@/components/home/TrustSection";
import FAQSection from "@/components/home/FAQSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import { MedicalBusinessJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: locale === "ma" ? "ar_MA" : locale === "ar" ? "ar_SA" : locale === "fr" ? "fr_MA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: SITE_CONFIG.url,
      languages: {
        "ar-MA": `${SITE_CONFIG.url}`,
        ar: `${SITE_CONFIG.url}/ar`,
        fr: `${SITE_CONFIG.url}/fr`,
        en: `${SITE_CONFIG.url}/en`,
      },
    },
  };
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  const faqItems = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
  ];

  return (
    <>
      <MedicalBusinessJsonLd />
      <FAQJsonLd faqItems={faqItems} />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
      <ReviewsSection />
    </>
  );
}
