import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { EmergencyServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titleMap: Record<string, string> = {
    fr: "Rapatriement Sanitaire Maroc | Transport Médical Longue Distance – Casa Ambulance",
    en: "Medical Repatriation Morocco | Long-Distance Medical Transport – Casa Ambulance",
    ma: "الترحيل الصحي المغرب | نقل طبي بعيد المسافة – كازا أمبولونس",
    ar: "الترحيل الصحي المغرب | نقل طبي بعيد المسافة – كازا أمبولونس",
  };

  const descMap: Record<string, string> = {
    fr: "Service de rapatriement sanitaire au Maroc. Transport médical longue distance entre villes marocaines et à l'international. Ambulance médicalisée avec équipe médicale. Casa Ambulance.",
    en: "Medical repatriation service in Morocco. Long-distance medical transport between Moroccan cities and internationally. Medicalized ambulance with medical team. Casa Ambulance.",
    ma: "خدمة الترحيل الصحي فالمغرب. نقل طبي بعيد المسافة بين المدن المغربية ودولياً. سيارة إسعاف مجهزة مع فريق طبي. كازا أمبولونس.",
    ar: "خدمة الترحيل الصحي في المغرب. نقل طبي بعيد المسافة بين المدن المغربية ودولياً. سيارة إسعاف مجهزة مع فريق طبي. كازا أمبولونس.",
  };

  const title = titleMap[locale] || titleMap.fr;
  const description = descMap[locale] || descMap.fr;

  return {
    title,
    description,
    keywords: "rapatriement sanitaire maroc, transport médical longue distance, ambulance interurbain maroc, rapatriement médical casablanca",
    openGraph: { title, description, url: `${SITE_CONFIG.url}/rapatriement-sanitaire-maroc`, type: "website", locale: "fr_MA" },
    alternates: {
      canonical: `${SITE_CONFIG.url}/rapatriement-sanitaire-maroc`,
      languages: {
        ar: `${SITE_CONFIG.url}/rapatriement-sanitaire-maroc`,
        "ar-MA": `${SITE_CONFIG.url}/ma/rapatriement-sanitaire-maroc`,
        fr: `${SITE_CONFIG.url}/fr/rapatriement-sanitaire-maroc`,
        en: `${SITE_CONFIG.url}/en/rapatriement-sanitaire-maroc`,
      },
    },
  };
}

export default async function RapatriementSanitairePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <>
      <EmergencyServiceJsonLd locale={locale} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: SITE_CONFIG.url },
          { name: locale === "fr" ? "Rapatriement Sanitaire Maroc" : locale === "en" ? "Medical Repatriation Morocco" : "الترحيل الصحي المغرب", item: `${SITE_CONFIG.url}/rapatriement-sanitaire-maroc` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-medical/20 text-medical px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {locale === "fr" ? "Transport longue distance" : locale === "en" ? "Long-Distance Transport" : "نقل بعيد المسافة"}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {locale === "fr"
              ? "Rapatriement Sanitaire au Maroc"
              : locale === "en"
              ? "Medical Repatriation in Morocco"
              : "الترحيل الصحي في المغرب"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {locale === "fr"
              ? "Transport médical sécurisé entre villes marocaines et à l'international. Ambulances médicalisées avec équipe médicale accompagnante tout au long du trajet."
              : locale === "en"
              ? "Secure medical transport between Moroccan cities and internationally. Medicalized ambulances with accompanying medical team throughout the journey."
              : "نقل طبي آمن بين المدن المغربية ودولياً. سيارات إسعاف مجهزة مع فريق طبي مرافق طوال الرحلة."}
          </p>
          <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-lg py-4 px-8 inline-flex items-center gap-3" dir="ltr">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-light">
        <div className="container-page max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
              {locale === "fr"
                ? "Le rapatriement sanitaire au Maroc"
                : locale === "en"
                ? "Medical Repatriation in Morocco"
                : "الترحيل الصحي في المغرب"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Le rapatriement sanitaire consiste à transporter un patient d'un établissement de santé vers un autre, souvent sur de longues distances. Que ce soit entre deux villes marocaines ou vers l'étranger, Casa Ambulance assure un transfert médicalisé sûr et confortable. Nos ambulances sont spécialement équipées pour les longs trajets : climatisation performante, suspension optimisée pour le confort du patient, et tout le matériel médical nécessaire."
                : locale === "en"
                ? "Medical repatriation involves transporting a patient from one healthcare facility to another, often over long distances. Whether between two Moroccan cities or abroad, Casa Ambulance ensures a safe and comfortable medicalized transfer. Our ambulances are specially equipped for long journeys: efficient air conditioning, optimized suspension for patient comfort, and all necessary medical equipment."
                : "الترحيل الصحي يتمثل في نقل المريض من مؤسسة صحية إلى أخرى، غالباً على مسافات طويلة. سواء بين مدينتين مغربيتين أو إلى الخارج، كازا أمبولونس تضمن نقلاً طبياً آمناً ومريحاً. سياراتنا مجهزة خصيصاً للرحلات الطويلة: تكييف فعال، تعليق محسّن لراحة المريض، وجميع المعدات الطبية اللازمة."}
            </p>

            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Destinations couvertes" : locale === "en" ? "Covered Destinations" : "الوجهات المغطاة"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {(locale === "fr"
                ? [
                    "Casablanca ↔ Rabat",
                    "Casablanca ↔ Marrakech",
                    "Casablanca ↔ Fès",
                    "Casablanca ↔ Tanger",
                    "Casablanca ↔ Agadir",
                    "Casablanca ↔ Oujda",
                    "Toutes les villes du Maroc",
                    "Rapatriement international sur demande",
                  ]
                : locale === "en"
                ? [
                    "Casablanca ↔ Rabat",
                    "Casablanca ↔ Marrakech",
                    "Casablanca ↔ Fes",
                    "Casablanca ↔ Tangier",
                    "Casablanca ↔ Agadir",
                    "Casablanca ↔ Oujda",
                    "All cities in Morocco",
                    "International repatriation on request",
                  ]
                : [
                    "الدار البيضاء ↔ الرباط",
                    "الدار البيضاء ↔ مراكش",
                    "الدار البيضاء ↔ فاس",
                    "الدار البيضاء ↔ طنجة",
                    "الدار البيضاء ↔ أكادير",
                    "الدار البيضاء ↔ وجدة",
                    "جميع مدن المغرب",
                    "ترحيل دولي حسب الطلب",
                  ]
              ).map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-light rounded-lg">
                  <svg className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Ce que nous prenons en charge" : locale === "en" ? "What We Handle" : "ما نتكفل به"}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Casa Ambulance gère l'ensemble du processus de rapatriement sanitaire : coordination avec l'hôpital de départ et l'hôpital d'accueil, préparation de l'ambulance avec le matériel adapté à l'état du patient, affectation d'une équipe médicale qualifiée (médecin et/ou infirmier selon le cas), gestion administrative et documentaire, et suivi médical continu pendant tout le trajet. Nos tarifs sont transparents et communiqués à l'avance, sans frais cachés."
                : locale === "en"
                ? "Casa Ambulance manages the entire medical repatriation process: coordination with departure and receiving hospitals, ambulance preparation with equipment adapted to the patient's condition, assignment of a qualified medical team (doctor and/or nurse as needed), administrative and documentary management, and continuous medical monitoring throughout the journey. Our rates are transparent and communicated in advance, with no hidden fees."
                : "كازا أمبولونس تدير عملية الترحيل الصحي بالكامل: التنسيق مع مستشفى المغادرة ومستشفى الاستقبال، تجهيز سيارة الإسعاف بالمعدات المناسبة لحالة المريض، تعيين فريق طبي مؤهل (طبيب و/أو ممرض حسب الحاجة)، الإدارة والتوثيق، والمتابعة الطبية المستمرة طوال الرحلة. أسعارنا شفافة ومُبلغة مسبقاً، بدون رسوم مخفية."}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="text-3xl font-extrabold text-urgent mb-1">24/7</div>
              <div className="text-sm text-gray-600">{locale === "fr" ? "Disponible" : locale === "en" ? "Available" : "متاح"}</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="text-3xl font-extrabold text-medical mb-1">100%</div>
              <div className="text-sm text-gray-600">{locale === "fr" ? "Médicalisé" : locale === "en" ? "Medicalized" : "مجهز طبياً"}</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="text-3xl font-extrabold text-urgent mb-1">+500</div>
              <div className="text-sm text-gray-600">{locale === "fr" ? "Rapatriements réussis" : locale === "en" ? "Successful repatriations" : "ترحيل ناجح"}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {locale === "fr"
                ? "Besoin d'un rapatriement sanitaire ?"
                : locale === "en"
                ? "Need Medical Repatriation?"
                : "محتاج ترحيل صحي؟"}
            </h3>
            <p className="text-gray-300 mb-6">
              {locale === "fr"
                ? "Contactez-nous pour organiser un rapatriement sanitaire sûr. Devis gratuit et rapide."
                : locale === "en"
                ? "Contact us to arrange safe medical repatriation. Free and fast quote."
                : "اتصل بنا لتنظيم ترحيل صحي آمن. تقدير مجاني وسريع."}
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

          {/* Internal Links */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Nos autres services" : locale === "en" ? "Our Other Services" : "خدماتنا الأخرى"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href={`${prefix}/ambulance-privee-casablanca`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Ambulance Privée Casablanca" : locale === "en" ? "Private Ambulance Casablanca" : "إسعاف خاص الدار البيضاء"}</span>
              </Link>
              <Link href={`${prefix}/transport-medicalise-casablanca`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Transport Médicalisé" : locale === "en" ? "Medical Transport" : "النقل الطبي"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
