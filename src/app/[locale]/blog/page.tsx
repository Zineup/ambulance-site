import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import BlogListClient from "./BlogListClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title =
    locale === "fr"
      ? "Blog | Articles sur l'ambulance et la santé au Maroc"
      : locale === "en"
      ? "Blog | Articles about Ambulance and Health in Morocco"
      : "المدونة | مقالات على الإسعاف والصحة فالمغرب";

  const description =
    locale === "fr"
      ? "Articles et guides sur les services d'ambulance au Maroc, transport de malades, urgences médicales, et santé."
      : locale === "en"
      ? "Articles and guides about ambulance services in Morocco, patient transport, medical emergencies, and health."
      : "مقالات ودلائل على خدمات الإسعاف فالمغرب، نقل المرضى، الطوارئ الطبية، والصحة.";

  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_CONFIG.url}/blog` },
    alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  };
}

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: "/" },
          { name: locale === "fr" ? "Blog" : "المدونة", item: "/blog" },
        ]}
      />
      <BlogListClient />
    </>
  );
}
