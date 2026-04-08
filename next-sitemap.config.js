/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ambulance-maroc.ma",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  alternateRefs: [
    { href: "https://ambulance-maroc.ma/ma", hreflang: "ar-MA" },
    { href: "https://ambulance-maroc.ma/fr", hreflang: "fr" },
    { href: "https://ambulance-maroc.ma/en", hreflang: "en" },
  ],
};
