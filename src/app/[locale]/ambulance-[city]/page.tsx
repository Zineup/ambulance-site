import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SITE_CONFIG, CITIES } from "@/lib/constants";
import { MedicalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import CityPageClient from "./CityPageClient";

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params: { locale, city: citySlug },
}: {
  params: { locale: string; city: string };
}): Promise<Metadata> {
  const city = getCity(citySlug);
  if (!city) return {};

  const cityName =
    locale === "fr" ? city.nameFr :
    locale === "en" ? city.nameEn :
    city.nameAr;

  const title =
    locale === "fr"
      ? `Ambulance ${city.nameFr} | Service d'ambulance 24/7 – Transport malades ${city.nameFr}`
      : locale === "en"
      ? `Ambulance ${city.nameEn} | 24/7 Ambulance Service – Patient Transport ${city.nameEn}`
      : `🚑 إسعاف ${city.nameAr} | سيارة إسعاف 24/7 – نقل المرضى ${city.nameAr}`;

  const description =
    locale === "fr"
      ? `Service d'ambulance à ${city.nameFr} disponible 24h/24. Transport de malades, urgences médicales, accompagnement hospitalier. Appelez maintenant !`
      : locale === "en"
      ? `Ambulance service in ${city.nameEn} available 24/7. Patient transport, medical emergencies, hospital escort. Call now!`
      : `خدمة الإسعاف فـ ${city.nameAr} متوفرة 24/7. نقل المرضى، إسعاف مستعجل، مرافقة للمستشفى. اتصل دابا!`;

  return {
    title,
    description,
    keywords: `ambulance ${city.nameFr.toLowerCase()}, إسعاف ${city.nameAr}, transport malade ${city.nameFr.toLowerCase()}, ambulance privée ${city.nameFr.toLowerCase()}`,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/ambulance-${city.slug}`,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/ambulance-${city.slug}`,
    },
  };
}

export default async function CityPage({
  params: { locale, city: citySlug },
}: {
  params: { locale: string; city: string };
}) {
  unstable_setRequestLocale(locale);
  const city = getCity(citySlug);
  if (!city) notFound();

  const cityName =
    locale === "fr" ? city.nameFr :
    locale === "en" ? city.nameEn :
    city.nameAr;

  return (
    <>
      <MedicalBusinessJsonLd city={cityName} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", url: "/" },
          { name: `Ambulance ${cityName}`, url: `/ambulance-${city.slug}` },
        ]}
      />
      <CityPageClient citySlug={citySlug} locale={locale} />
    </>
  );
}
