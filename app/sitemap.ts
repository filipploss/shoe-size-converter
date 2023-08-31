import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://convertxpert.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/shoe-size`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/shoe-size/converter`,
      lastModified: new Date(),
    },
  ];
}
