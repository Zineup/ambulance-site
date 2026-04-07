import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustSection from "@/components/home/TrustSection";
import FleetSection from "@/components/home/FleetSection";
import FAQSection from "@/components/home/FAQSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import { MedicalBusinessJsonLd, EmergencyServiceJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  let title = "OK Ambulance Casablanca | Urgence & Transport Médical 24/7";
  let description = "Besoin d'une ambulance à Casablanca ? OK Ambulance offre un transport médical rapide, sécurisé, 24h/24 et 7j/7 au Maroc.";
  if (locale === "ma" || locale === "ar") {
    title = "OK إسعاف الدار البيضاء | طوارئ ونقل طبي 24/7";
    description = "هل تبحث عن سيارة إسعاف في الدار البيضاء؟ أوكي إسعاف تقدم نقل طبي سريع وآمن على مدار 24 ساعة.";
  } else if (locale === "en") {
    title = "OK Ambulance Casablanca | 24/7 Emergency & Medical Transport";
    description = "Need an ambulance in Casablanca? OK Ambulance provides rapid, secure medical transport 24/7 across Morocco.";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
    alternates: {
      canonical: SITE_CONFIG.url,
      languages: {
        ar: `${SITE_CONFIG.url}`,
        "ar-MA": `${SITE_CONFIG.url}/ma`,
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
      <MedicalBusinessJsonLd locale={locale} />
      <EmergencyServiceJsonLd locale={locale} />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <TrustSection />
      <FAQSection />
      <ReviewsSection />
    </>
  );
}
