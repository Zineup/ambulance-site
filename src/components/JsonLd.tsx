import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  city?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export function MedicalBusinessJsonLd({ city }: { city?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "EmergencyService"],
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.nameAr,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/ambulance-fleet.jpg`,
    logo: `${SITE_CONFIG.url}/favicon.svg`,
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
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
      postalCode: SITE_CONFIG.address.zip,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Casablanca",
        "@id": "https://www.wikidata.org/wiki/Q7903",
      },
      {
        "@type": "Country",
        name: "Morocco",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      geoRadius: "50000",
    },
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Transport Sanitaire VSL / النقل الصحي",
        description: "Transport médicalisé sécurisé entre hôpitaux et domiciles",
      },
      {
        "@type": "MedicalProcedure",
        name: "Urgence et Réanimation / إسعاف الطوارئ والإنعاش",
        description: "Service d'urgence médicale 24/7 avec équipe de réanimation",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transport Dialyse / نقل مرضى غسيل الكلى",
        description: "Transport régulier pour les patients en dialyse",
      },
      {
        "@type": "MedicalProcedure",
        name: "Rapatriement Sanitaire / الترحيل الصحي",
        description: "Rapatriement médical national et international",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transport PMR / نقل ذوي الاحتياجات الخاصة",
        description: "Transport adapté aux personnes à mobilité réduite",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MAD",
    paymentAccepted: "Cash, Credit Card, Insurance",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "347",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EmergencyServiceJsonLd({ serviceName, serviceSlug }: { serviceName: string; serviceSlug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: `${serviceName} - ${SITE_CONFIG.name}`,
    description: `${serviceName} disponible 24/7 à Casablanca et dans tout le Maroc`,
    telephone: SITE_CONFIG.phone,
    url: `${SITE_CONFIG.url}/services/${serviceSlug}`,
    areaServed: {
      "@type": "City",
      name: "Casablanca",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    provider: {
      "@type": "MedicalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
    },
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
