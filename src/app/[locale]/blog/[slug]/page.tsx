import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import BlogPostClient from "./BlogPostClient";

const blogContent: Record<string, Record<string, { title: string; content: string[] }>> = {
  ma: {
    "kifach-tatlob-isaf-f-maghrib": {
      title: "كيفاش تطلب الإسعاف فالمغرب؟",
      content: [
        "فحالة الطوارئ الطبية، خاصك تكون عارف كيفاش تطلب الإسعاف بسرعة. هاد الدليل غادي يعاونك تفهم الخطوات اللي خاصك تتبع.",
        "الأرقام المهمة اللي خاصك تحفظ هي: رقم الإسعاف الخاص ديالنا اللي متوفر 24/7، ورقم 150 ديال SAMU، ورقم 15 ديال الحماية المدنية.",
        "ملي كتعيط، خاصك تقول بالضبط فين نتا (العنوان الكامل)، شنو وقع، وشحال من واحد محتاج المساعدة. هاد المعلومات كتساعد الفريق الطبي يوصل بسرعة.",
        "سيارات الإسعاف ديالنا مجهزة بأحدث المعدات الطبية ومعدات الإنعاش. الفريق ديالنا مؤهل ومحترف، وكيوصل فأقل من 15 دقيقة فالمدينة.",
        "متنساش أنك تقدر تتواصل معانا حتى عبر واتساب. صيفط لنا الموقع ديالك وغادي نوصلو عندك فأسرع وقت.",
        "خدمة الإسعاف ديالنا كتغطي كازا، الرباط، مراكش، فاس، طنجة وكل المدن الكبرى فالمغرب.",
      ],
    },
    "nakl-marda-bayn-lmodon": {
      title: "نقل المرضى بين المدن فالمغرب: كل ما خاصك تعرف",
      content: [
        "نقل المرضى بين المدن المغربية خاصو يكون آمن ومريح. خدمة النقل ديالنا مصممة باش توفر أحسن رعاية خلال التنقل.",
        "كنوفرو نقل بين كل المدن المغربية الكبرى بسيارات إسعاف مجهزة بالكامل. المسافة ما كتفرقش، كنوصلو المريض بأمان.",
        "الفريق ديالنا مدرب على التعامل مع المرضى بعناية خلال السفر الطويل. كنهتمو بالراحة ديال المريض من البداية للنهاية.",
        "الأسعار ديالنا معقولة ومناسبة. كنتعاملو مع أغلب شركات التأمين الصحي. اتصل بنا باش ناعطيوك تقدير مجاني.",
        "خدمة النقل بين المدن متوفرة 24/7 فكل أنحاء المغرب.",
      ],
    },
    "ambulance-privee-maroc-khadamat": {
      title: "Ambulance privée فالمغرب: الخدمات والأسعار",
      content: [
        "خدمة الإسعاف الخاص فالمغرب كتوفر حل سريع ومحترف لنقل المرضى والطوارئ الطبية. هنا غادي نشرحو ليكم كل شي على هاد الخدمة.",
        "الخدمات اللي كنقدمو: نقل المرضى بين المستشفيات، إسعاف مستعجل 24/7، مرافقة طبية للمرضى، نقل بين المدن، نقل للمواعيد الطبية.",
        "الأسعار كتختلف حسب: المسافة (داخل المدينة أو بين المدن)، نوع الخدمة (عادي أو مستعجل)، المعدات الطبية المطلوبة.",
        "سيارات الإسعاف ديالنا مرخصة من وزارة الصحة ومجهزة بأحدث المعدات. الفريق الطبي ديالنا مؤهل ومحترف.",
        "للحصول على تقدير مجاني، اتصل بنا أو صيفط لنا رسالة واتساب. كنجاوبو 24 ساعة فـ 24.",
      ],
    },
  },
};

// Add FR and EN content
blogContent.fr = {
  "comment-appeler-ambulance-maroc": {
    title: "Comment appeler une ambulance au Maroc ?",
    content: [
      "En cas d'urgence médicale, il est crucial de savoir comment appeler une ambulance rapidement. Ce guide vous explique les étapes à suivre au Maroc.",
      "Les numéros importants à retenir : notre service d'ambulance privée disponible 24/7, le 150 (SAMU), et le 15 (Protection Civile).",
      "Lorsque vous appelez, indiquez clairement votre adresse complète, la nature de l'urgence, et le nombre de personnes nécessitant une assistance.",
      "Nos ambulances sont équipées du matériel médical et de réanimation le plus récent. Notre équipe arrive en moins de 15 minutes en ville.",
      "Vous pouvez également nous contacter via WhatsApp. Envoyez-nous votre localisation et nous arriverons dans les plus brefs délais.",
      "Notre service d'ambulance couvre Casablanca, Rabat, Marrakech, Fès, Tanger et toutes les grandes villes du Maroc.",
    ],
  },
  "transport-malades-interurbain-maroc": {
    title: "Transport de malades entre villes au Maroc : tout ce qu'il faut savoir",
    content: [
      "Le transport de patients entre les villes marocaines nécessite un service fiable et sécurisé. Notre service est conçu pour offrir confort et sécurité sur toutes les distances.",
      "Nous proposons un transport interurbain avec des ambulances entièrement équipées. Nos véhicules sont adaptés aux longs trajets et au confort des patients.",
      "Notre équipe est formée pour prendre soin des patients pendant les trajets longue distance. Nous assurons le confort du patient du départ à l'arrivée.",
      "Nos tarifs sont raisonnables et transparents. Nous travaillons avec la plupart des compagnies d'assurance. Appelez pour un devis gratuit.",
      "Le transport interurbain est disponible 24/7 dans tout le Maroc.",
    ],
  },
  "ambulance-privee-maroc-services-tarifs": {
    title: "Ambulance privée au Maroc : services et tarifs",
    content: [
      "L'ambulance privée au Maroc offre une solution rapide et professionnelle pour le transport de patients et les urgences médicales.",
      "Nos services incluent : transport inter-hospitalier, urgences médicales 24/7, accompagnement médical, transport interurbain, transport pour rendez-vous médicaux.",
      "Les tarifs varient selon : la distance (intra-urbain ou interurbain), le type de service (standard ou urgence), l'équipement médical nécessaire.",
      "Nos ambulances sont agréées par le Ministère de la Santé et équipées du matériel le plus récent. Notre équipe médicale est qualifiée et professionnelle.",
      "Pour obtenir un devis gratuit, appelez-nous ou envoyez un message WhatsApp. Nous répondons 24h/24.",
    ],
  },
};

blogContent.en = {
  "how-to-call-ambulance-morocco": {
    title: "How to Call an Ambulance in Morocco?",
    content: [
      "In a medical emergency, knowing how to call an ambulance quickly is crucial. This guide explains the steps to follow in Morocco.",
      "Important numbers to remember: our private ambulance service available 24/7, 150 (SAMU), and 15 (Civil Protection).",
      "When you call, clearly state your full address, the nature of the emergency, and the number of people needing assistance.",
      "Our ambulances are equipped with the latest medical and resuscitation equipment. Our team arrives in less than 15 minutes in the city.",
      "You can also contact us via WhatsApp. Send us your location and we will arrive as quickly as possible.",
      "Our ambulance service covers Casablanca, Rabat, Marrakech, Fes, Tangier, and all major cities in Morocco.",
    ],
  },
  "intercity-patient-transport-morocco": {
    title: "Intercity Patient Transport in Morocco: Everything You Need to Know",
    content: [
      "Transporting patients between Moroccan cities requires a reliable and safe service. Our service is designed to provide comfort and safety over all distances.",
      "We offer intercity transport with fully equipped ambulances. Our vehicles are adapted for long journeys and patient comfort.",
      "Our team is trained to care for patients during long-distance trips. We ensure patient comfort from departure to arrival.",
      "Our rates are reasonable and transparent. We work with most insurance companies. Call for a free estimate.",
      "Intercity transport is available 24/7 across all of Morocco.",
    ],
  },
  "private-ambulance-morocco-services-prices": {
    title: "Private Ambulance in Morocco: Services and Prices",
    content: [
      "Private ambulance service in Morocco provides a fast and professional solution for patient transport and medical emergencies.",
      "Our services include: inter-hospital transport, 24/7 medical emergencies, medical escort, intercity transport, medical appointment transport.",
      "Prices vary based on: distance (within city or between cities), type of service (standard or emergency), required medical equipment.",
      "Our ambulances are licensed by the Ministry of Health and equipped with the latest equipment. Our medical team is qualified and professional.",
      "For a free estimate, call us or send a WhatsApp message. We respond 24 hours a day.",
    ],
  },
};

blogContent.ar = blogContent.ma;

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const post = blogContent[locale]?.[slug];
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_CONFIG.nameAr}`,
    description: post.content[0],
    openGraph: {
      title: post.title,
      description: post.content[0],
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      type: "article",
    },
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  unstable_setRequestLocale(locale);
  const post = blogContent[locale]?.[slug];

  return (
    <div className="flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", item: "/" },
          { name: locale === "fr" ? "Blog" : locale === "en" ? "Blog" : "المدونة", item: "/blog" },
          { name: post?.title || slug, item: `/blog/${slug}` },
        ]}
      />
      <BlogPostClient slug={slug} locale={locale} post={post} />
    </div>
  );
}
