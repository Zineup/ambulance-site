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
    fr: "Ambulance Privée Casablanca | Service 24h/24 – Casa Ambulance",
    en: "Private Ambulance Casablanca | 24/7 Service – Casa Ambulance",
    ma: "إسعاف خاص فكازا | خدمة 24/7 – كازا أمبولونس",
    ar: "سيارة إسعاف خاصة الدار البيضاء | خدمة 24/7 – كازا أمبولونس",
  };

  const descMap: Record<string, string> = {
    fr: "Casa Ambulance, votre service d'ambulance privée à Casablanca. Transport médicalisé, urgences, rapatriement sanitaire. Intervention rapide 24h/24 7j/7. Appelez maintenant !",
    en: "Casa Ambulance, your private ambulance service in Casablanca. Medical transport, emergencies, medical repatriation. Fast 24/7 response. Call now!",
    ma: "كازا أمبولونس، خدمة الإسعاف الخاص ديالكم فكازا. نقل طبي، طوارئ، ترحيل صحي. تدخل سريع 24/7. عيطلنا دابا!",
    ar: "كازا أمبولونس، خدمة الإسعاف الخاص في الدار البيضاء. نقل طبي، طوارئ، ترحيل صحي. تدخل سريع على مدار الساعة. اتصل الآن!",
  };

  const title = titleMap[locale] || titleMap.fr;
  const description = descMap[locale] || descMap.fr;

  return {
    title,
    description,
    keywords: "ambulance privée casablanca, ambulance privée maroc, Casa Ambulance, service ambulance privé casablanca, ambulance nuit casablanca",
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/ambulance-privee-casablanca`,
      type: "website",
      locale: "fr_MA",
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/ambulance-privee-casablanca`,
      languages: {
        ar: `${SITE_CONFIG.url}/ambulance-privee-casablanca`,
        "ar-MA": `${SITE_CONFIG.url}/ma/ambulance-privee-casablanca`,
        fr: `${SITE_CONFIG.url}/fr/ambulance-privee-casablanca`,
        en: `${SITE_CONFIG.url}/en/ambulance-privee-casablanca`,
      },
    },
  };
}

export default async function AmbulancePriveeCasablancaPage({
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
          { name: locale === "fr" ? "Ambulance Privée Casablanca" : locale === "en" ? "Private Ambulance Casablanca" : "إسعاف خاص الدار البيضاء", item: `${SITE_CONFIG.url}/ambulance-privee-casablanca` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-urgent/20 text-urgent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-urgent rounded-full animate-pulse" />
            {locale === "fr" ? "Service privé 24h/24" : locale === "en" ? "24/7 Private Service" : "خدمة خاصة 24/24"}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {locale === "fr"
              ? "Ambulance Privée à Casablanca"
              : locale === "en"
              ? "Private Ambulance in Casablanca"
              : "سيارة إسعاف خاصة في الدار البيضاء"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {locale === "fr"
              ? "Casa Ambulance met à votre disposition un service d'ambulance privée professionnel à Casablanca et ses environs, disponible 24h/24 et 7j/7."
              : locale === "en"
              ? "Casa Ambulance provides professional private ambulance service in Casablanca and surrounding areas, available 24/7."
              : "كازا أمبولونس توفر لكم خدمة إسعاف خاص احترافية في الدار البيضاء والمناطق المجاورة، متاحة على مدار الساعة."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn-urgent text-lg py-4 px-8 inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phone}
            </a>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-medical text-lg py-4 px-8">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-light">
        <div className="container-page max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-6">
              {locale === "fr"
                ? "Pourquoi choisir une ambulance privée à Casablanca ?"
                : locale === "en"
                ? "Why Choose a Private Ambulance in Casablanca?"
                : "لماذا تختار إسعاف خاص في الدار البيضاء؟"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Lorsqu'il s'agit de la santé de vos proches, le choix d'une ambulance privée fait toute la différence. Casa Ambulance vous garantit un service rapide, professionnel et personnalisé. Nos ambulances privées sont équipées du matériel médical le plus récent et notre équipe est composée de professionnels qualifiés, formés pour gérer toutes les situations d'urgence."
                : locale === "en"
                ? "When it comes to your loved ones' health, choosing a private ambulance makes all the difference. Casa Ambulance guarantees fast, professional, and personalized service. Our private ambulances are equipped with the latest medical equipment and our team consists of qualified professionals trained to handle all emergency situations."
                : "عندما يتعلق الأمر بصحة أحبائكم، فإن اختيار إسعاف خاص يصنع كل الفرق. كازا أمبولونس تضمن لكم خدمة سريعة واحترافية وشخصية. سياراتنا الخاصة مجهزة بأحدث المعدات الطبية وفريقنا يتكون من متخصصين مؤهلين ومدربين على التعامل مع جميع حالات الطوارئ."}
            </p>

            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Nos avantages" : locale === "en" ? "Our Advantages" : "مميزاتنا"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {(locale === "fr"
                ? [
                    "Intervention en moins de 15 minutes à Casablanca",
                    "Ambulances équipées de matériel de réanimation",
                    "Équipe médicale qualifiée (médecin + infirmier)",
                    "Disponible 24h/24, 7j/7, jours fériés inclus",
                    "Transport inter-hospitalier sécurisé",
                    "Tarifs transparents et compétitifs",
                    "Couverture de Casablanca et environs (Mohammedia, Bouskoura, Berrechid)",
                    "Coordination directe avec les hôpitaux et cliniques",
                  ]
                : locale === "en"
                ? [
                    "Response within 15 minutes in Casablanca",
                    "Ambulances equipped with resuscitation equipment",
                    "Qualified medical team (doctor + nurse)",
                    "Available 24/7 including holidays",
                    "Secure inter-hospital transport",
                    "Transparent and competitive pricing",
                    "Coverage of Casablanca and surroundings (Mohammedia, Bouskoura, Berrechid)",
                    "Direct coordination with hospitals and clinics",
                  ]
                : [
                    "تدخل في أقل من 15 دقيقة في الدار البيضاء",
                    "سيارات مجهزة بمعدات الإنعاش",
                    "فريق طبي مؤهل (طبيب + ممرض)",
                    "متاح 24/7 بما في ذلك العطل",
                    "نقل آمن بين المستشفيات",
                    "أسعار شفافة وتنافسية",
                    "تغطية الدار البيضاء والضواحي (المحمدية، بوسكورة، برشيد)",
                    "تنسيق مباشر مع المستشفيات والعيادات",
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
              {locale === "fr"
                ? "Services d'ambulance privée disponibles"
                : locale === "en"
                ? "Available Private Ambulance Services"
                : "خدمات الإسعاف الخاص المتوفرة"}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Notre flotte d'ambulances privées à Casablanca couvre l'ensemble de vos besoins médicaux : transport sanitaire VSL pour les rendez-vous médicaux, ambulance d'urgence avec réanimation pour les cas critiques, transport pour les séances de dialyse, rapatriement sanitaire national et international, et transport adapté pour les personnes à mobilité réduite. Chaque véhicule est entretenu quotidiennement et respecte les normes sanitaires les plus strictes."
                : locale === "en"
                ? "Our fleet of private ambulances in Casablanca covers all your medical needs: VSL medical transport for appointments, emergency ambulance with resuscitation for critical cases, dialysis transport, national and international medical repatriation, and adapted transport for people with reduced mobility. Each vehicle is maintained daily and meets the strictest health standards."
                : "أسطولنا من سيارات الإسعاف الخاص في الدار البيضاء يغطي جميع احتياجاتكم الطبية: نقل صحي VSL للمواعيد الطبية، إسعاف طوارئ مع إنعاش للحالات الحرجة، نقل لجلسات غسيل الكلى، ترحيل صحي وطني ودولي، ونقل مكيف لذوي الاحتياجات الخاصة. كل سيارة يتم صيانتها يومياً وتلتزم بأعلى المعايير الصحية."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {locale === "fr"
                ? "Besoin d'une ambulance privée à Casablanca ?"
                : locale === "en"
                ? "Need a Private Ambulance in Casablanca?"
                : "محتاج إسعاف خاص في الدار البيضاء؟"}
            </h3>
            <p className="text-gray-300 mb-6">
              {locale === "fr"
                ? "Appelez-nous maintenant. Notre équipe est prête à intervenir en moins de 15 minutes, 24h/24."
                : locale === "en"
                ? "Call us now. Our team is ready to respond within 15 minutes, 24/7."
                : "اتصل بنا الآن. فريقنا جاهز للتدخل في أقل من 15 دقيقة، على مدار الساعة."}
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
              {locale === "fr" ? "Découvrez nos services" : locale === "en" ? "Discover Our Services" : "اكتشف خدماتنا"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href={`${prefix}/transport-medicalise-casablanca`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Transport Médicalisé" : locale === "en" ? "Medical Transport" : "النقل الطبي"}</span>
              </Link>
              <Link href={`${prefix}/rapatriement-sanitaire-maroc`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Rapatriement Sanitaire" : locale === "en" ? "Medical Repatriation" : "الترحيل الصحي"}</span>
              </Link>
              <Link href={`${prefix}/ambulance-evenementielle`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Ambulance Événementielle" : locale === "en" ? "Event Ambulance" : "إسعاف المناسبات"}</span>
              </Link>
              <Link href={`${prefix}/zones-desservies`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Zones Desservies" : locale === "en" ? "Service Areas" : "المناطق المخدومة"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
