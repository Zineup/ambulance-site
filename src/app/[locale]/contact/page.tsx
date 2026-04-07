import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { MedicalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === "fr"
      ? "Contactez-nous | Ambulance Maroc – Appelez maintenant"
      : locale === "en"
      ? "Contact Us | Ambulance Morocco – Call Now"
      : "اتصل بنا | إسعاف المغرب – عيطلنا دابا";

  const description =
    locale === "fr"
      ? "Contactez notre service d'ambulance 24/7. Téléphone, WhatsApp, formulaire de contact. Casablanca, Rabat, Marrakech."
      : locale === "en"
      ? "Contact our 24/7 ambulance service. Phone, WhatsApp, contact form. Casablanca, Rabat, Marrakech."
      : "اتصل بخدمة الإسعاف ديالنا 24/7. تلفون، واتساب، فورمولير. كازا، الرباط، مراكش.";

  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_CONFIG.url}/contact` },
    alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <MedicalBusinessJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: "/" },
          { name: locale === "fr" ? "Contact" : locale === "en" ? "Contact" : "اتصل بنا", item: "/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
