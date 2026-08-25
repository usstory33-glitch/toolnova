import { MetadataRoute } from "next";
import { tools } from "./data/tools";

const baseUrl = "https://toolnova-roan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
{
  url: `${baseUrl}/about`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
},
{
  url: `${baseUrl}/terms`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.6,
},
    ...toolPages,
  ];
}