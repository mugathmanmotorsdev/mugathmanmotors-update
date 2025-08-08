const siteUrl = 
process.env.NODE_ENV === 'production'
    ? 'https://www.mugathmanmotors.com'
    : 'http://localhost:3000';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl, // ✅ Change to your real domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: true,
};
