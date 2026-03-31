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
    "nakl-marda-ghasil-kola": {
      title: "نقل مرضى غسيل الكلى: كل ما خاصك تعرف",
      content: [
        "مرضى غسيل الكلى (الدياليز) محتاجين نقل منتظم للمستشفى أو المركز الصحي. خدمة النقل ديالنا مصممة باش توفر الراحة والأمان لهاد المرضى.",
        "كنوفرو نقل منتظم 3 مرات فالأسبوع أو حسب البرنامج ديال المريض. السيارات ديالنا مجهزة باش تناسب احتياجات مرضى غسيل الكلى.",
        "الفريق ديالنا مدرب على التعامل مع مرضى غسيل الكلى بعناية. كنهتمو بالراحة ديال المريض من المنزل للمركز الصحي والعكس.",
        "الأسعار ديالنا معقولة ومناسبة للنقل المنتظم. كنتعاملو مع أغلب شركات التأمين الصحي. اتصل بنا باش ناعطيوك تقدير مجاني.",
        "خدمة نقل مرضى غسيل الكلى متوفرة فكازا، الرباط، مراكش وكل المدن الكبرى.",
      ],
    },
    "ambulance-privee-maroc-khadamat": {
      title: "Ambulance privée فالمغرب: الخدمات والأسعار",
      content: [
        "خدمة الإسعاف الخاص فالمغرب كتوفر حل سريع ومحترف لنقل المرضى والطوارئ الطبية. هنا غادي نشرحو ليكم كل شي على هاد الخدمة.",
        "الخدمات اللي كنقدمو: نقل المرضى بين المستشفيات، إسعاف مستعجل 24/7، مرافقة طبية للمرضى، نقل لغسيل الكلى، نقل للمواعيد الطبية.",
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
  "transport-dialyse-maroc": {
    title: "Transport dialyse Maroc : tout ce qu'il faut savoir",
    content: [
      "Les patients en dialyse nécessitent un transport régulier vers l'hôpital ou le centre de santé. Notre service est conçu pour offrir confort et sécurité.",
      "Nous proposons un transport régulier 3 fois par semaine ou selon le programme du patient. Nos véhicules sont adaptés aux besoins des patients dialysés.",
      "Notre équipe est formée pour prendre soin des patients en dialyse avec attention. Nous assurons le confort du patient du domicile au centre et retour.",
      "Nos tarifs sont raisonnables et adaptés au transport régulier. Nous travaillons avec la plupart des compagnies d'assurance. Appelez pour un devis gratuit.",
      "Le transport dialyse est disponible à Casablanca, Rabat, Marrakech et toutes les grandes villes.",
    ],
  },
  "ambulance-privee-maroc-services-tarifs": {
    title: "Ambulance privée au Maroc : services et tarifs",
    content: [
      "L'ambulance privée au Maroc offre une solution rapide et professionnelle pour le transport de patients et les urgences médicales.",
      "Nos services incluent : transport inter-hospitalier, urgences médicales 24/7, accompagnement médical, transport pour dialyse, transport pour rendez-vous médicaux.",
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
  "dialysis-transport-morocco": {
    title: "Dialysis Transport Morocco: Everything You Need to Know",
    content: [
      "Dialysis patients require regular transport to the hospital or health center. Our service is designed to provide comfort and safety.",
      "We offer regular transport 3 times per week or according to the patient's schedule. Our vehicles are adapted to dialysis patient needs.",
      "Our team is trained to care for dialysis patients with attention. We ensure patient comfort from home to the center and back.",
      "Our rates are reasonable and adapted for regular transport. We work with most insurance companies. Call for a free estimate.",
      "Dialysis transport is available in Casablanca, Rabat, Marrakech, and all major cities.",
    ],
  },
  "private-ambulance-morocco-services-prices": {
    title: "Private Ambulance in Morocco: Services and Prices",
    content: [
      "Private ambulance service in Morocco provides a fast and professional solution for patient transport and medical emergencies.",
      "Our services include: inter-hospital transport, 24/7 medical emergencies, medical escort, dialysis transport, medical appointment transport.",
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
    <>
      <BreadcrumbJsonLd
        items={[
          { name: locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "الرئيسية", url: "/" },
          { name: locale === "fr" ? "Blog" : "المدونة", url: "/blog" },
          { name: post?.title || slug, url: `/blog/${slug}` },
        ]}
      />
      <BlogPostClient slug={slug} locale={locale} post={post} />
    </>
  );
}
