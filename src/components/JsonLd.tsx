import { SITE_CONFIG } from "@/lib/constants";

export function LocalBusinessJsonLd({
  locale,
  name,
  url,
  image,
}: {
  locale: string;
  name: string;
  url: string;
  image?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    image: image || `${SITE_CONFIG.url}/favicon.svg`,
    "@id": url,
    url: url,
    telephone: SITE_CONFIG.phoneClean,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` }}
    />
  );
}

export function MedicalBusinessJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Casa Ambulance - Ambulance Privée Casablanca",
    legalName: "CASA AMBULANCE SARL",
    image: `${SITE_CONFIG.url}/favicon.svg`,
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneClean,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    medicalSpecialty: [
      "https://schema.org/Emergency",
      "https://schema.org/MedicalTransport",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Transport médical d'urgence",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transport VSL",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transport médicalisé",
      },
      {
        "@type": "MedicalProcedure",
        name: "Rapatriement sanitaire",
      },
      {
        "@type": "MedicalProcedure",
        name: "Transport dialyse",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Casablanca" },
      { "@type": "City", name: "Mohammedia" },
      { "@type": "City", name: "Bouskoura" },
      { "@type": "City", name: "Berrechid" },
      { "@type": "City", name: "Dar Bouazza" },
      { "@type": "City", name: "Nouaceur" },
    ],
  };

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` }}
    />
  );
}

export function OrganizationJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Casa Ambulance",
    legalName: "CASA AMBULANCE SARL",
    alternateName: "كازا أمبولونس",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phoneClean,
      contactType: "emergency",
      contactOption: "TollFree",
      areaServed: "MA",
      availableLanguage: ["French", "Arabic", "English"],
    },
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
  };

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` }}
    />
  );
}

export function EmergencyServiceJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Casa Ambulance - Ambulance Privée Casablanca",
    legalName: "CASA AMBULANCE SARL",
    description:
      "Service d'ambulance privée disponible 24h/24 et 7j/7 à Casablanca et environs. Transport médicalisé, urgences, rapatriement sanitaire.",
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneClean,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    areaServed: [
      { "@type": "City", name: "Casablanca" },
      { "@type": "City", name: "Mohammedia" },
      { "@type": "City", name: "Bouskoura" },
      { "@type": "City", name: "Berrechid" },
      { "@type": "City", name: "Dar Bouazza" },
      { "@type": "City", name: "Nouaceur" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` }}
    />
  );
}
