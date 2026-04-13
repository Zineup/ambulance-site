import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { SITE_CONFIG, QUARTIERS_CASABLANCA, CITIES } from "@/lib/constants";
import { EmergencyServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titleMap: Record<string, string> = {
    fr: "Zones Desservies | Ambulance Casablanca, Mohammedia, Bouskoura – Casa Ambulance",
    en: "Service Areas | Ambulance Casablanca, Mohammedia, Bouskoura – Casa Ambulance",
    ma: "المناطق المخدومة | إسعاف كازا، المحمدية، بوسكورة – كازا أمبولونس",
    ar: "المناطق المخدومة | إسعاف الدار البيضاء، المحمدية، بوسكورة – كازا أمبولونس",
  };

  const descMap: Record<string, string> = {
    fr: "Découvrez toutes les zones desservies par Casa Ambulance : Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur. Service d'ambulance 24h/24 dans le Grand Casablanca.",
    en: "Discover all areas served by Casa Ambulance: Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur. 24/7 ambulance service in Greater Casablanca.",
    ma: "اكتشف جميع المناطق اللي كنغطيوها: كازا، المحمدية، بوسكورة، برشيد، دار بوعزة، النواصر. خدمة إسعاف 24/7 فالدار البيضاء الكبرى.",
    ar: "اكتشف جميع المناطق المخدومة: الدار البيضاء، المحمدية، بوسكورة، برشيد، دار بوعزة، النواصر. خدمة إسعاف على مدار الساعة في الدار البيضاء الكبرى.",
  };

  const title = titleMap[locale] || titleMap.fr;
  const description = descMap[locale] || descMap.fr;

  return {
    title,
    description,
    keywords: "zones desservies ambulance casablanca, ambulance mohammedia, ambulance bouskoura, ambulance berrechid, ambulance dar bouazza, ambulance nouaceur",
    openGraph: { title, description, url: `${SITE_CONFIG.url}/zones-desservies`, type: "website", locale: "fr_MA" },
    alternates: {
      canonical: `${SITE_CONFIG.url}/zones-desservies`,
      languages: {
        ar: `${SITE_CONFIG.url}/zones-desservies`,
        "ar-MA": `${SITE_CONFIG.url}/ma/zones-desservies`,
        fr: `${SITE_CONFIG.url}/fr/zones-desservies`,
        en: `${SITE_CONFIG.url}/en/zones-desservies`,
      },
    },
  };
}

export default async function ZonesDesserviesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const prefix = locale === "ar" ? "" : `/${locale}`;

  const zonesGrandCasa = [
    { name: { fr: "Casablanca Centre", en: "Casablanca Center", ar: "وسط الدار البيضاء" }, time: "10-15 min" },
    { name: { fr: "Mohammedia", en: "Mohammedia", ar: "المحمدية" }, time: "20-30 min" },
    { name: { fr: "Bouskoura", en: "Bouskoura", ar: "بوسكورة" }, time: "15-25 min" },
    { name: { fr: "Berrechid", en: "Berrechid", ar: "برشيد" }, time: "30-40 min" },
    { name: { fr: "Dar Bouazza", en: "Dar Bouazza", ar: "دار بوعزة" }, time: "20-30 min" },
    { name: { fr: "Nouaceur", en: "Nouaceur", ar: "النواصر" }, time: "20-30 min" },
  ];

  return (
    <>
      <EmergencyServiceJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: SITE_CONFIG.url },
          { name: locale === "fr" ? "Zones Desservies" : locale === "en" ? "Service Areas" : "المناطق المخدومة", item: `${SITE_CONFIG.url}/zones-desservies` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-medical/20 text-medical px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {locale === "fr" ? "Grand Casablanca et plus" : locale === "en" ? "Greater Casablanca and beyond" : "الدار البيضاء الكبرى وأكثر"}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {locale === "fr"
              ? "Zones Desservies par Casa Ambulance"
              : locale === "en"
              ? "Areas Served by Casa Ambulance"
              : "المناطق المخدومة من كازا أمبولونس"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {locale === "fr"
              ? "Notre service d'ambulance couvre Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur et tous les quartiers du Grand Casablanca. Disponible 24h/24 et 7j/7."
              : locale === "en"
              ? "Our ambulance service covers Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur, and all Greater Casablanca neighborhoods. Available 24/7."
              : "خدمة الإسعاف تغطي الدار البيضاء، المحمدية، بوسكورة، برشيد، دار بوعزة، النواصر، وجميع أحياء الدار البيضاء الكبرى. متاحة على مدار الساعة."}
          </p>
          <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-lg py-4 px-8 inline-flex items-center gap-3" dir="ltr">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* Grand Casablanca Zones */}
      <section className="section-padding bg-light">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark text-center mb-4">
            {locale === "fr"
              ? "Le Grand Casablanca"
              : locale === "en"
              ? "Greater Casablanca"
              : "الدار البيضاء الكبرى"}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 text-lg">
            {locale === "fr"
              ? "Intervention rapide dans toutes les zones du Grand Casablanca. Nos ambulances sont positionnées stratégiquement pour garantir un temps d'arrivée minimal."
              : locale === "en"
              ? "Fast response in all Greater Casablanca areas. Our ambulances are strategically positioned to guarantee minimal arrival time."
              : "تدخل سريع في جميع مناطق الدار البيضاء الكبرى. سياراتنا متمركزة بشكل استراتيجي لضمان أقصر وقت وصول."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {zonesGrandCasa.map((zone, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-urgent">
                <h3 className="text-lg font-bold text-dark mb-2">
                  {zone.name[locale as keyof typeof zone.name] || zone.name.fr}
                </h3>
                <div className="flex items-center gap-2 text-medical font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {locale === "fr" ? `Temps d'arrivée : ${zone.time}` : locale === "en" ? `Arrival time: ${zone.time}` : `وقت الوصول: ${zone.time}`}
                </div>
              </div>
            ))}
          </div>

          {/* Quartiers de Casablanca */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark text-center mb-8">
            {locale === "fr"
              ? "Quartiers de Casablanca"
              : locale === "en"
              ? "Casablanca Neighborhoods"
              : "أحياء الدار البيضاء"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
            {QUARTIERS_CASABLANCA.map((q) => (
              <Link
                key={q.slug}
                href={`${prefix}/villes/${q.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors shadow-sm hover:shadow-md"
              >
                <span className="text-dark font-medium">
                  {locale === "fr" ? q.nameFr : locale === "en" ? q.nameEn : locale === "ma" ? q.nameMa : q.nameAr}
                </span>
              </Link>
            ))}
          </div>

          {/* Autres villes */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark text-center mb-8">
            {locale === "fr"
              ? "Autres villes du Maroc"
              : locale === "en"
              ? "Other Cities in Morocco"
              : "مدن أخرى في المغرب"}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-lg">
            {locale === "fr"
              ? "En plus du Grand Casablanca, nous assurons le rapatriement sanitaire vers et depuis toutes les grandes villes du Maroc."
              : locale === "en"
              ? "In addition to Greater Casablanca, we provide medical repatriation to and from all major cities in Morocco."
              : "بالإضافة إلى الدار البيضاء الكبرى، نوفر خدمة الترحيل الصحي من وإلى جميع المدن الكبرى في المغرب."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`${prefix}/ambulance-${city.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors shadow-sm hover:shadow-md"
              >
                <span className="text-dark font-bold">
                  {locale === "fr" ? city.nameFr : locale === "en" ? city.nameEn : locale === "ma" ? city.nameMa : city.nameAr}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <div className="bg-light rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
              {locale === "fr"
                ? "Pourquoi notre couverture géographique fait la différence"
                : locale === "en"
                ? "Why Our Geographic Coverage Makes a Difference"
                : "لماذا تغطيتنا الجغرافية تصنع الفرق"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Casa Ambulance a développé un réseau de couverture optimisé dans le Grand Casablanca. Nos ambulances sont réparties stratégiquement pour minimiser le temps d'intervention. Avec des points de stationnement à Casablanca centre, Mohammedia, Bouskoura et les zones périphériques, nous garantissons une arrivée en 15 minutes maximum dans la zone urbaine de Casablanca. Pour les zones périphériques comme Berrechid, Dar Bouazza et Nouaceur, nos temps d'intervention restent parmi les plus rapides de la région. Notre connaissance du terrain et des itinéraires optimaux nous permet d'être toujours au plus près de vous."
                : locale === "en"
                ? "Casa Ambulance has developed an optimized coverage network across Greater Casablanca. Our ambulances are strategically distributed to minimize response time. With parking points in central Casablanca, Mohammedia, Bouskoura, and peripheral areas, we guarantee arrival within 15 minutes maximum in Casablanca's urban zone. For peripheral areas like Berrechid, Dar Bouazza, and Nouaceur, our response times remain among the fastest in the region. Our knowledge of the terrain and optimal routes allows us to always be close to you."
                : "طورت كازا أمبولونس شبكة تغطية محسّنة في الدار البيضاء الكبرى. سيارات الإسعاف موزعة بشكل استراتيجي لتقليل وقت التدخل. مع نقاط تمركز في وسط الدار البيضاء والمحمدية وبوسكورة والمناطق المحيطة، نضمن الوصول في أقصى حد 15 دقيقة في المنطقة الحضرية. للمناطق المحيطة مثل برشيد ودار بوعزة والنواصر، تبقى أوقات تدخلنا من بين الأسرع في المنطقة."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {locale === "fr"
                ? "Besoin d'une ambulance dans votre zone ?"
                : locale === "en"
                ? "Need an Ambulance in Your Area?"
                : "محتاج إسعاف في منطقتكم؟"}
            </h3>
            <p className="text-gray-300 mb-6">
              {locale === "fr"
                ? "Appelez-nous maintenant. Nous intervenons rapidement partout dans le Grand Casablanca."
                : locale === "en"
                ? "Call us now. We respond quickly throughout Greater Casablanca."
                : "اتصل بنا الآن. نتدخل بسرعة في جميع أنحاء الدار البيضاء الكبرى."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-lg py-4 px-8">
                {locale === "fr" ? "Appelez maintenant" : locale === "en" ? "Call Now" : "اتصل الآن"}
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-medical text-lg py-4 px-8">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
