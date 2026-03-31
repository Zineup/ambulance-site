/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ambulance-maroc.ma",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: [
    { href: "https://ambulance-maroc.ma/ar", hreflang: "ar" },
    { href: "https://ambulance-maroc.ma/fr", hreflang: "fr" },
    { href: "https://ambulance-maroc.ma/en", hreflang: "en" },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://ambulance-maroc.ma/sitemap.xml",
    ],
  },
};
