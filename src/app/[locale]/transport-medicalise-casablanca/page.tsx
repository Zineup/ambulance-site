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
    fr: "Transport Médicalisé Casablanca | Ambulance Équipée 24h/24 – Casa Ambulance",
    en: "Medical Transport Casablanca | Equipped Ambulance 24/7 – Casa Ambulance",
    ma: "نقل طبي مجهز فكازا | إسعاف 24/7 – كازا أمبولونس",
    ar: "نقل طبي مجهز في الدار البيضاء | إسعاف 24/7 – كازا أمبولونس",
  };

  const descMap: Record<string, string> = {
    fr: "Service de transport médicalisé à Casablanca. Ambulances équipées de matériel de réanimation, monitoring cardiaque et oxygène médical. Équipe médicale qualifiée 24h/24.",
    en: "Medical transport service in Casablanca. Ambulances equipped with resuscitation equipment, cardiac monitoring, and medical oxygen. Qualified medical team 24/7.",
    ma: "خدمة النقل الطبي المجهز فكازا. سيارات إسعاف مجهزة بمعدات الإنعاش، مراقبة القلب، والأكسجين الطبي. فريق طبي مؤهل 24/7.",
    ar: "خدمة النقل الطبي المجهز في الدار البيضاء. سيارات إسعاف مجهزة بمعدات الإنعاش والمراقبة والأكسجين الطبي. فريق طبي مؤهل على مدار الساعة.",
  };

  const title = titleMap[locale] || titleMap.fr;
  const description = descMap[locale] || descMap.fr;

  return {
    title,
    description,
    keywords: "transport médicalisé casablanca, ambulance équipée casablanca, transport sanitaire maroc, ambulance réanimation casablanca",
    openGraph: { title, description, url: `${SITE_CONFIG.url}/transport-medicalise-casablanca`, type: "website", locale: "fr_MA" },
    alternates: {
      canonical: `${SITE_CONFIG.url}/transport-medicalise-casablanca`,
      languages: {
        ar: `${SITE_CONFIG.url}/transport-medicalise-casablanca`,
        "ar-MA": `${SITE_CONFIG.url}/ma/transport-medicalise-casablanca`,
        fr: `${SITE_CONFIG.url}/fr/transport-medicalise-casablanca`,
        en: `${SITE_CONFIG.url}/en/transport-medicalise-casablanca`,
      },
    },
  };
}

export default async function TransportMedicalisePage({
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
          { name: locale === "fr" ? "Transport Médicalisé Casablanca" : locale === "en" ? "Medical Transport Casablanca" : "النقل الطبي الدار البيضاء", item: `${SITE_CONFIG.url}/transport-medicalise-casablanca` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-[#1a1a3e] to-[#2a1a3e] text-white py-16 md:py-24">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-medical/20 text-medical px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-medical rounded-full animate-pulse" />
            {locale === "fr" ? "Transport médicalisé" : locale === "en" ? "Medical Transport" : "نقل طبي مجهز"}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
            {locale === "fr"
              ? "Transport Médicalisé à Casablanca"
              : locale === "en"
              ? "Medical Transport in Casablanca"
              : "النقل الطبي المجهز في الدار البيضاء"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {locale === "fr"
              ? "Ambulances entièrement équipées avec personnel médical qualifié pour un transport sécurisé de vos patients à Casablanca et dans tout le Maroc."
              : locale === "en"
              ? "Fully equipped ambulances with qualified medical staff for safe patient transport in Casablanca and across Morocco."
              : "سيارات إسعاف مجهزة بالكامل مع طاقم طبي مؤهل لنقل آمن للمرضى في الدار البيضاء وفي جميع أنحاء المغرب."}
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
                ? "Le transport médicalisé, c'est quoi ?"
                : locale === "en"
                ? "What is Medical Transport?"
                : "ما هو النقل الطبي المجهز؟"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Le transport médicalisé est un service de transfert de patients nécessitant une surveillance médicale continue pendant le trajet. Contrairement au transport sanitaire simple, le transport médicalisé implique la présence d'un médecin ou d'un infirmier spécialisé à bord, ainsi que du matériel médical avancé : défibrillateur, monitoring cardiaque, oxygène médical, et matériel de réanimation."
                : locale === "en"
                ? "Medical transport is a patient transfer service requiring continuous medical monitoring during the journey. Unlike simple medical transport, it involves the presence of a doctor or specialized nurse on board, along with advanced medical equipment: defibrillator, cardiac monitoring, medical oxygen, and resuscitation equipment."
                : "النقل الطبي المجهز هو خدمة نقل المرضى التي تتطلب مراقبة طبية مستمرة أثناء الرحلة. على عكس النقل الصحي البسيط، يتضمن النقل الطبي وجود طبيب أو ممرض متخصص على متن السيارة، بالإضافة إلى معدات طبية متطورة: جهاز إنعاش القلب، مراقبة القلب، أكسجين طبي، ومعدات الإنعاش."}
            </p>

            <h3 className="text-xl font-bold text-dark mb-4">
              {locale === "fr" ? "Équipements à bord" : locale === "en" ? "On-Board Equipment" : "التجهيزات على متن السيارة"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {(locale === "fr"
                ? [
                    "Défibrillateur semi-automatique",
                    "Monitoring cardiaque continu",
                    "Oxygène médical et aspiration",
                    "Matériel de réanimation complet",
                    "Brancards ergonomiques et confortables",
                    "Médicaments d'urgence",
                  ]
                : locale === "en"
                ? [
                    "Semi-automatic defibrillator",
                    "Continuous cardiac monitoring",
                    "Medical oxygen and suction",
                    "Complete resuscitation equipment",
                    "Ergonomic and comfortable stretchers",
                    "Emergency medications",
                  ]
                : [
                    "جهاز إنعاش شبه أوتوماتيكي",
                    "مراقبة قلبية مستمرة",
                    "أكسجين طبي وشفط",
                    "معدات إنعاش كاملة",
                    "نقالات مريحة وعملية",
                    "أدوية الطوارئ",
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
                ? "Dans quels cas utiliser le transport médicalisé ?"
                : locale === "en"
                ? "When to Use Medical Transport?"
                : "متى تستخدم النقل الطبي المجهز؟"}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {locale === "fr"
                ? "Le transport médicalisé est recommandé pour les transferts inter-hospitaliers de patients instables, les patients en soins intensifs nécessitant un transfert, les cas post-opératoires nécessitant une surveillance, les patients sous assistance respiratoire, et tout transfert nécessitant la présence d'un médecin. Notre service couvre Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur et l'ensemble du territoire marocain."
                : locale === "en"
                ? "Medical transport is recommended for inter-hospital transfers of unstable patients, intensive care patients requiring transfer, post-operative cases needing monitoring, patients on respiratory support, and any transfer requiring a doctor's presence. Our service covers Casablanca, Mohammedia, Bouskoura, Berrechid, Dar Bouazza, Nouaceur, and the entire Moroccan territory."
                : "يُوصى بالنقل الطبي المجهز لعمليات النقل بين المستشفيات للمرضى غير المستقرين، ومرضى العناية المركزة الذين يحتاجون إلى نقل، والحالات بعد العمليات التي تحتاج إلى مراقبة، والمرضى تحت المساعدة التنفسية. تغطي خدمتنا الدار البيضاء، المحمدية، بوسكورة، برشيد، دار بوعزة، النواصر، وجميع أنحاء المغرب."}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center bg-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              {locale === "fr"
                ? "Besoin d'un transport médicalisé ?"
                : locale === "en"
                ? "Need Medical Transport?"
                : "محتاج نقل طبي مجهز؟"}
            </h3>
            <p className="text-gray-300 mb-6">
              {locale === "fr"
                ? "Appelez-nous pour organiser un transport médicalisé sûr et rapide. Disponible 24h/24."
                : locale === "en"
                ? "Call us to arrange safe and fast medical transport. Available 24/7."
                : "اتصل بنا لتنظيم نقل طبي آمن وسريع. متاح على مدار الساعة."}
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
              <Link href={`${prefix}/rapatriement-sanitaire-maroc`} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-urgent transition-colors">
                <svg className="w-4 h-4 text-urgent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <span className="text-dark font-medium">{locale === "fr" ? "Rapatriement Sanitaire" : locale === "en" ? "Medical Repatriation" : "الترحيل الصحي"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
