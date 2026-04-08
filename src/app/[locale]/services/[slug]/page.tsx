import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { MedicalBusinessJsonLd, BreadcrumbJsonLd, EmergencyServiceJsonLd } from "@/components/JsonLd";
import { locales } from "@/i18n";

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};

  const serviceName =
    locale === "fr" ? service.nameFr :
    locale === "en" ? service.nameEn :
    locale === "ma" ? service.nameMa :
    service.nameAr;

  const titleMap: Record<string, string> = {
    fr: `${service.nameFr} à Casablanca | Ambulance 24/7 – Intervention Rapide`,
    en: `${service.nameEn} in Casablanca | 24/7 Ambulance – Fast Response`,
    ma: `${service.nameMa} فـ كازا | إسعاف 24/7 – تدخل سريع`,
    ar: `${service.nameAr} في الدار البيضاء | إسعاف 24/7 – تدخل سريع`,
  };

  const descMap: Record<string, string> = {
    fr: `Service de ${service.nameFr.toLowerCase()} disponible 24h/24 à Casablanca et environs. Équipe médicale qualifiée, intervention rapide en 15 minutes. Appelez maintenant !`,
    en: `${service.nameEn} service available 24/7 in Casablanca and surroundings. Qualified medical team, fast 15-minute response. Call now!`,
    ma: `خدمة ${service.nameMa} متوفرة 24/7 فكازا والضواحي. فريق طبي مؤهل، تدخل سريع فـ 15 دقيقة. اتصل دابا!`,
    ar: `خدمة ${service.nameAr} متاحة على مدار الساعة في الدار البيضاء والمناطق المجاورة. فريق طبي مؤهل، تدخل سريع في 15 دقيقة. اتصل الآن!`,
  };

  const title = titleMap[locale] || titleMap.ar;
  const description = descMap[locale] || descMap.ar;

  return {
    title,
    description,
    keywords: `${serviceName}, ambulance casablanca, ${service.nameFr.toLowerCase()}, ${service.nameAr}, إسعاف الدار البيضاء`,
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/services/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${slug}`,
      languages: {
        ar: `${SITE_CONFIG.url}/services/${slug}`,
        "ar-MA": `${SITE_CONFIG.url}/ma/services/${slug}`,
        fr: `${SITE_CONFIG.url}/fr/services/${slug}`,
        en: `${SITE_CONFIG.url}/en/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "servicePages" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const serviceName =
    locale === "fr" ? service.nameFr :
    locale === "en" ? service.nameEn :
    locale === "ma" ? service.nameMa :
    service.nameAr;

  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <>
      <MedicalBusinessJsonLd locale={locale} />
      <EmergencyServiceJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: "/" },
          { name: locale === "fr" ? "Services" : locale === "en" ? "Services" : "الخدمات", item: "/services" },
          { name: serviceName, item: `/services/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-medical/20 text-medical px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {tc("available247")}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {t(`${slug}.title`)}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t(`${slug}.subtitle`)}
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn-urgent text-lg py-4 px-8 inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {tc("callNow")}
          </a>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
                {t(`${slug}.detailTitle`)}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {t(`${slug}.detailText`)}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {(t.raw(`${slug}.features`) as string[]).map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-light rounded-lg">
                    <svg className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-dark font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Casablanca landmarks mention */}
              <div className="bg-urgent/5 border border-urgent/20 rounded-xl p-6">
                <h3 className="font-bold text-dark mb-2">
                  {t(`${slug}.coverageTitle`)}
                </h3>
                <p className="text-gray-600">
                  {t(`${slug}.coverageText`)}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                {t(`${slug}.ctaTitle`)}
              </h3>
              <p className="text-gray-300 mb-6">{t(`${slug}.ctaText`)}</p>
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

            {/* Other Services Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark mb-4">
                {locale === "fr" ? "Nos autres services" : locale === "en" ? "Our other services" : "خدماتنا الأخرى"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={`${prefix}/services/${s.slug}`}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors"
                  >
                    <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-dark font-medium">
                      {locale === "fr" ? s.nameFr : locale === "en" ? s.nameEn : locale === "ma" ? s.nameMa : s.nameAr}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
