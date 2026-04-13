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
    fr: "Ambulance Événementielle Casablanca | Couverture Médicale Événements – Casa Ambulance",
    en: "Event Ambulance Casablanca | Medical Event Coverage – Casa Ambulance",
    ma: "إسعاف المناسبات فكازا | تغطية طبية للأحداث – كازا أمبولونس",
    ar: "إسعاف المناسبات الدار البيضاء | تغطية طبية للفعاليات – كازا أمبولونس",
  };

  const descMap: Record<string, string> = {
    fr: "Service d'ambulance événementielle à Casablanca. Couverture médicale pour événements sportifs, festivals, mariages et rassemblements. Équipe médicale sur place. Casa Ambulance.",
    en: "Event ambulance service in Casablanca. Medical coverage for sports events, festivals, weddings, and gatherings. On-site medical team. Casa Ambulance.",
    ma: "خدمة إسعاف المناسبات فكازا. تغطية طبية للأحداث الرياضية، المهرجانات، الأعراس، والتجمعات. فريق طبي فعين المكان. كازا أمبولونس.",
    ar: "خدمة إسعاف المناسبات في الدار البيضاء. تغطية طبية للفعاليات الرياضية والمهرجانات والأعراس والتجمعات. فريق طبي في الموقع. كازا أمبولونس.",
  };

  const title = titleMap[locale] || titleMap.fr;
  const description = descMap[locale] || descMap.fr;

  return {
    title,
    description,
    keywords: "ambulance événementielle casablanca, couverture médicale événement maroc, ambulance festival casablanca, secours événementiel",
    openGraph: { title, description, url: `${SITE_CONFIG.url}/ambulance-evenementielle`, type: "website", locale: "fr_MA" },
    alternates: {
      canonical: `${SITE_CONFIG.url}/ambulance-evenementielle`,
      languages: {
        ar: `${SITE_CONFIG.url}/ambulance-evenementielle`,
        "ar-MA": `${SITE_CONFIG.url}/ma/ambulance-evenementielle`,
        fr: `${SITE_CONFIG.url}/fr/ambulance-evenementielle`,
        en: `${SITE_CONFIG.url}/en/ambulance-evenementielle`,
      },
    },
  };
}

export default async function AmbulanceEvenementiellePage({
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
          { name: locale === "fr" ? "Ambulance Événementielle" : locale === "en" ? "Event Ambulance" : "إسعاف المناسبات", item: `${SITE_CONFIG.url}/ambulance-evenementielle` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-medical/20 text-medical px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {locale === "fr" ? "Couverture événementielle" : locale === "en" ? "Event Coverage" : "تغطية المناسبات"}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {locale === "fr"
              ? "Ambulance Événementielle à Casablanca"
              : locale === "en"
              ? "Event Ambulance in Casablanca"
              : "إسعاف المناسبات في الدار البيضاء"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {locale === "fr"
              ? "Assurez la sécurité de vos événements avec notre service d'ambulance événementielle. Équipe médicale sur place, ambulances équipées, intervention immédiate."
              : locale === "en"
              ? "Ensure the safety of your events with our event ambulance service. On-site medical team, equipped ambulances, immediate response."
              : "اضمن سلامة فعالياتكم مع خدمة إسعاف المناسبات. فريق طبي في الموقع، سيارات إسعاف مجهزة، تدخل فوري."}
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
                ? "Couverture médicale pour vos événements"
                : locale === "en"
                ? "Medical Coverage for Your Events"
                : "تغطية طبية لفعالياتكم"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Organiser un événement implique une responsabilité envers la sécurité des participants. Casa Ambulance propose un service d'ambulance événementielle complet pour assurer une couverture médicale professionnelle lors de vos manifestations à Casablanca et dans tout le Maroc. Notre équipe se déplace avec une ambulance entièrement équipée et du personnel médical qualifié, prêt à intervenir en cas de besoin."
                : locale === "en"
                ? "Organizing an event involves a responsibility for participant safety. Casa Ambulance offers a complete event ambulance service to ensure professional medical coverage at your events in Casablanca and across Morocco. Our team arrives with a fully equipped ambulance and qualified medical staff, ready to respond when needed."
                : "تنظيم فعالية يتضمن مسؤولية تجاه سلامة المشاركين. كازا أمبولونس تقدم خدمة إسعاف المناسبات الشاملة لضمان تغطية طبية احترافية خلال فعالياتكم في الدار البيضاء وفي جميع أنحاء المغرب. فريقنا يتنقل مع سيارة إسعاف مجهزة بالكامل وطاقم طبي مؤهل، جاهز للتدخل عند الحاجة."}
            </p>

            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Types d'événements couverts" : locale === "en" ? "Types of Events Covered" : "أنواع الفعاليات المغطاة"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {(locale === "fr"
                ? [
                    "Événements sportifs (marathons, matchs, tournois)",
                    "Festivals et concerts",
                    "Mariages et cérémonies",
                    "Conférences et salons professionnels",
                    "Tournages de films et productions TV",
                    "Rassemblements et manifestations publiques",
                    "Événements d'entreprise et team buildings",
                    "Compétitions automobiles et motocycles",
                  ]
                : locale === "en"
                ? [
                    "Sports events (marathons, matches, tournaments)",
                    "Festivals and concerts",
                    "Weddings and ceremonies",
                    "Conferences and professional exhibitions",
                    "Film shoots and TV productions",
                    "Public gatherings and demonstrations",
                    "Corporate events and team buildings",
                    "Automobile and motorcycle competitions",
                  ]
                : [
                    "الفعاليات الرياضية (ماراثونات، مباريات، بطولات)",
                    "المهرجانات والحفلات الموسيقية",
                    "الأعراس والحفلات",
                    "المؤتمرات والمعارض المهنية",
                    "تصوير الأفلام والإنتاج التلفزيوني",
                    "التجمعات والمظاهرات العامة",
                    "فعاليات الشركات وبناء الفريق",
                    "مسابقات السيارات والدراجات النارية",
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
              {locale === "fr" ? "Notre offre événementielle" : locale === "en" ? "Our Event Offering" : "عرضنا للمناسبات"}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Notre service événementiel comprend le positionnement d'une ou plusieurs ambulances sur le lieu de l'événement, la mise en place d'un poste de secours, la présence d'une équipe médicale complète (médecin, infirmier, secouriste), et la coordination avec les services d'urgence locaux. Nous réalisons une évaluation préalable des risques pour adapter notre dispositif à la taille et à la nature de votre événement. Nos tarifs sont sur devis, adaptés à la durée et aux besoins spécifiques de chaque manifestation."
                : locale === "en"
                ? "Our event service includes positioning one or more ambulances at the venue, setting up a first aid station, providing a complete medical team (doctor, nurse, first responder), and coordinating with local emergency services. We conduct a prior risk assessment to adapt our setup to the size and nature of your event. Our rates are quoted based on duration and specific needs of each event."
                : "تشمل خدمتنا للمناسبات تمركز سيارة إسعاف أو أكثر في موقع الفعالية، وإعداد نقطة إسعاف أولي، وتوفير فريق طبي كامل (طبيب، ممرض، مسعف)، والتنسيق مع خدمات الطوارئ المحلية. نقوم بتقييم مسبق للمخاطر لتكييف ترتيباتنا مع حجم وطبيعة فعاليتكم. أسعارنا حسب الطلب، ومكيفة مع مدة واحتياجات كل مناسبة."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {locale === "fr"
                ? "Vous organisez un événement ?"
                : locale === "en"
                ? "Organizing an Event?"
                : "تنظم فعالية؟"}
            </h3>
            <p className="text-gray-300 mb-6">
              {locale === "fr"
                ? "Contactez-nous pour un devis personnalisé. Nous adaptons notre dispositif à la taille de votre événement."
                : locale === "en"
                ? "Contact us for a personalized quote. We adapt our setup to the size of your event."
                : "اتصل بنا للحصول على عرض أسعار مخصص. نكيف ترتيباتنا مع حجم فعاليتكم."}
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
