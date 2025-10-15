import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://301studio.com"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/products/singflow-wordpress`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/products/singflow-wordpress`,
          es: `${baseUrl}/es/products/singflow-wordpress`,
        },
      },
    },
    {
      url: `${baseUrl}/products/singflow-perfex`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/products/singflow-perfex`,
          es: `${baseUrl}/es/products/singflow-perfex`,
        },
      },
    },
    {
      url: `${baseUrl}/products/301-accessibility`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/products/301-accessibility`,
          es: `${baseUrl}/es/products/301-accessibility`,
        },
      },
    },
  ]
}
