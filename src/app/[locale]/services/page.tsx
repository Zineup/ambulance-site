import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { MedicalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ServicesDetailClient from "./ServicesDetailClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "services" });
  const tm = await getTranslations({ locale, namespace: "meta" });

  const title =
    locale === "fr"
      ? "Services d'ambulance au Maroc | Transport malades, Urgences, Accompagnement"
      : locale === "en"
      ? "Ambulance Services in Morocco | Patient Transport, Emergency, Hospital Escort"
      : "خدمات الإسعاف فالمغرب | نقل المرضى، إسعاف مستعجل، مرافقة";

  const description =
    locale === "fr"
      ? "Découvrez nos services d'ambulance au Maroc : transport de malades, urgences médicales 24/7, accompagnement hospitalier. Équipe médicale qualifiée."
      : locale === "en"
      ? "Discover our ambulance services in Morocco: patient transport, 24/7 medical emergencies, hospital escort. Qualified medical team."
      : "اكتشف خدمات الإسعاف ديالنا فالمغرب: نقل المرضى، إسعاف مستعجل 24/7، مرافقة للمستشفى. فريق طبي مؤهل.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/services`,
      type: "website",
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/services`,
    },
  };
}

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MedicalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", url: "/" },
          { name: locale === "fr" ? "Services" : locale === "en" ? "Services" : "الخدمات", url: "/services" },
        ]}
      />
      <ServicesDetailClient />
    </>
  );
}
