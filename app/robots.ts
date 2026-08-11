import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL || "https://mugathmanmotors.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}