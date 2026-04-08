import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, QUARTIERS_CASABLANCA, SERVICES } from "@/lib/constants";
import { MedicalBusinessJsonLd, BreadcrumbJsonLd, EmergencyServiceJsonLd } from "@/components/JsonLd";

function getQuartier(slug: string) {
  return QUARTIERS_CASABLANCA.find((q) => q.slug === slug);
}

export function generateStaticParams() {
  return QUARTIERS_CASABLANCA.map((q) => ({ quartier: q.slug }));
}

export async function generateMetadata({
  params: { locale, quartier: quartierSlug },
}: {
  params: { locale: string; quartier: string };
}): Promise<Metadata> {
  const quartier = getQuartier(quartierSlug);
  if (!quartier) return {};

  const qName =
    locale === "fr" ? quartier.nameFr :
    locale === "en" ? quartier.nameEn :
    locale === "ma" ? quartier.nameMa :
    quartier.nameAr;

  const titleMap: Record<string, string> = {
    fr: `Ambulance 24/7 à ${quartier.nameFr} – Intervention Rapide Casa | ${SITE_CONFIG.name}`,
    en: `24/7 Ambulance in ${quartier.nameEn} – Fast Response Casablanca | ${SITE_CONFIG.name}`,
    ma: `إسعاف 24/7 فـ ${quartier.nameMa} – تدخل سريع كازا | ${SITE_CONFIG.nameAr}`,
    ar: `إسعاف 24/7 في ${quartier.nameAr} – تدخل سريع الدار البيضاء | ${SITE_CONFIG.nameAr}`,
  };

  const descMap: Record<string, string> = {
    fr: `Ambulance disponible 24h/24 à ${quartier.nameFr}, Casablanca. ${quartier.landmark.fr}. Intervention rapide en 15 min. Transport médicalisé, urgences, dialyse. Appelez maintenant !`,
    en: `Ambulance available 24/7 in ${quartier.nameEn}, Casablanca. ${quartier.landmark.en}. Fast 15-min response. Medical transport, emergencies, dialysis. Call now!`,
    ma: `سيارة إسعاف متوفرة 24/7 فـ ${quartier.nameMa}، كازا. ${quartier.landmark.ma}. تدخل سريع فـ 15 دقيقة. نقل طبي، طوارئ، غسيل الكلى. اتصل دابا!`,
    ar: `سيارة إسعاف متاحة على مدار الساعة في ${quartier.nameAr}، الدار البيضاء. ${quartier.landmark.ar}. تدخل سريع في 15 دقيقة. نقل طبي، طوارئ، غسيل الكلى. اتصل الآن!`,
  };

  const title = titleMap[locale] || titleMap.ar;
  const description = descMap[locale] || descMap.ar;

  return {
    title,
    description,
    keywords: `ambulance ${quartier.nameFr.toLowerCase()}, إسعاف ${quartier.nameAr}, ambulance casablanca ${quartier.nameFr.toLowerCase()}, transport malade ${quartier.nameFr.toLowerCase()}`,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/villes/${quartierSlug}`,
      type: "website",
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/villes/${quartierSlug}`,
      languages: {
        ar: `${SITE_CONFIG.url}/villes/${quartierSlug}`,
        "ar-MA": `${SITE_CONFIG.url}/ma/villes/${quartierSlug}`,
        fr: `${SITE_CONFIG.url}/fr/villes/${quartierSlug}`,
        en: `${SITE_CONFIG.url}/en/villes/${quartierSlug}`,
      },
    },
  };
}

export default async function QuartierPage({
  params: { locale, quartier: quartierSlug },
}: {
  params: { locale: string; quartier: string };
}) {
  unstable_setRequestLocale(locale);
  const quartier = getQuartier(quartierSlug);
  if (!quartier) notFound();

  const t = await getTranslations({ locale, namespace: "quartierPages" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const qName =
    locale === "fr" ? quartier.nameFr :
    locale === "en" ? quartier.nameEn :
    locale === "ma" ? quartier.nameMa :
    quartier.nameAr;

  const landmark = quartier.landmark[locale as keyof typeof quartier.landmark] || quartier.landmark.ar;
  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <>
      <MedicalBusinessJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: "/" },
          { name: locale === "fr" ? "Zones d'intervention" : locale === "en" ? "Intervention Zones" : "مناطق التدخل", item: "/villes" },
          { name: `Ambulance ${qName}`, item: `/villes/${quartierSlug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-urgent/20 text-urgent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-urgent rounded-full animate-pulse" />
            {landmark}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {t("heroTitle", { quartier: qName })}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t("heroSubtitle", { quartier: qName })}
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn-urgent text-lg py-4 px-8 inline-flex items-center gap-3"
            dir="ltr"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* Services in this quartier */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark text-center mb-8">
            {t("servicesTitle", { quartier: qName })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service) => {
              const sName =
                locale === "fr" ? service.nameFr :
                locale === "en" ? service.nameEn :
                locale === "ma" ? service.nameMa :
                service.nameAr;

              return (
                <Link
                  key={service.slug}
                  href={`${prefix}/services/${service.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-urgent"
                >
                  <h3 className="text-lg font-bold text-dark mb-2">{sName}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {t("serviceAvailable", { quartier: qName })}
                  </p>
                  <span className="text-urgent font-medium text-sm flex items-center gap-1">
                    {tc("learnMore")}
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local info */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <div className="bg-light rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
              {t("localTitle", { quartier: qName })}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {t("localText", { quartier: qName, landmark })}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-3xl font-extrabold text-urgent mb-1">15</div>
                <div className="text-sm text-gray-600">
                  {locale === "fr" ? "min d'intervention" : locale === "en" ? "min response" : "دقيقة للتدخل"}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-3xl font-extrabold text-medical mb-1">24/7</div>
                <div className="text-sm text-gray-600">
                  {locale === "fr" ? "Disponible" : locale === "en" ? "Available" : "متاح"}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-3xl font-extrabold text-urgent mb-1">100%</div>
                <div className="text-sm text-gray-600">
                  {locale === "fr" ? "Équipé" : locale === "en" ? "Equipped" : "مجهز"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {t("ctaTitle", { quartier: qName })}
            </h3>
            <p className="text-gray-300 mb-6">
              {t("ctaText", { quartier: qName })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-lg py-4 px-8">
                {tc("callNow")}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-medical text-lg py-4 px-8"
              >
                {tc("whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Quartiers Links */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <h3 className="text-xl font-bold text-dark mb-4 text-center">
            {t("otherQuartiers")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {QUARTIERS_CASABLANCA.filter((q) => q.slug !== quartierSlug).map((q) => (
              <Link
                key={q.slug}
                href={`${prefix}/villes/${q.slug}`}
                className="text-center p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors"
              >
                <span className="text-dark font-medium text-sm">
                  {locale === "fr" ? q.nameFr : locale === "en" ? q.nameEn : locale === "ma" ? q.nameMa : q.nameAr}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
