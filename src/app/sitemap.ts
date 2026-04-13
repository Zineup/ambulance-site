import { MetadataRoute } from "next";
import { SERVICES, QUARTIERS_CASABLANCA, CITIES } from "@/lib/constants";

const SITE_URL = "https://casaambulance.ma";
const locales = ["ar", "ma", "fr", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage for each locale
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });
  for (const locale of locales.filter((l) => l !== "ar")) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    });
  }

  // Services index
  for (const locale of locales) {
    const prefix = locale === "ar" ? "" : `/${locale}`;
    entries.push({
      url: `${SITE_URL}${prefix}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Individual service pages
  for (const service of SERVICES) {
    for (const locale of locales) {
      const prefix = locale === "ar" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${prefix}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Quartier pages (Casablanca zones)
  for (const quartier of QUARTIERS_CASABLANCA) {
    for (const locale of locales) {
      const prefix = locale === "ar" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${prefix}/villes/${quartier.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // City pages
  for (const city of CITIES) {
    for (const locale of locales) {
      const prefix = locale === "ar" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${prefix}/ambulance-${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Contact page
  for (const locale of locales) {
    const prefix = locale === "ar" ? "" : `/${locale}`;
    entries.push({
      url: `${SITE_URL}${prefix}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Blog
  for (const locale of locales) {
    const prefix = locale === "ar" ? "" : `/${locale}`;
    entries.push({
      url: `${SITE_URL}${prefix}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // SEO long-tail pages
  const seoPages = [
    "ambulance-privee-casablanca",
    "transport-medicalise-casablanca",
    "ambulance-evenementielle",
    "rapatriement-sanitaire-maroc",
    "zones-desservies",
  ];
  for (const page of seoPages) {
    for (const locale of locales) {
      const prefix = locale === "ar" ? "" : `/${locale}`;
      entries.push({
        url: `${SITE_URL}${prefix}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
