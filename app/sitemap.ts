import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://convertxpert.com";
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shoe-size`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shoe-size/converter`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es/talla-de-zapato`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es/talla-de-zapato/conversor`,
      lastModified: new Date(),
    },
  ];
}
