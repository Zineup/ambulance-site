import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  city?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function MedicalBusinessJsonLd({ city }: { city?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.nameAr,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/ambulance-hero.jpg`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: city || SITE_CONFIG.address.city,
      addressCountry: "MA",
      postalCode: SITE_CONFIG.address.zip,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Patient Transport / نقل المرضى",
        description: "Safe patient transport between hospitals, homes, and health centers",
      },
      {
        "@type": "MedicalProcedure",
        name: "Emergency Medical Transport / إسعاف مستعجل",
        description: "24/7 emergency ambulance service with qualified medical team",
      },
      {
        "@type": "MedicalProcedure",
        name: "Hospital Escort / مرافقة للمستشفى",
        description: "Professional medical escort for patients",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MAD",
    paymentAccepted: "Cash, Credit Card, Insurance",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqItems }: { faqItems: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
