import type { MetadataRoute } from "next";
import { projects, completedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { seoPages } from "@/data/seoPages";
import { ankaraDistricts } from "@/data/districts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nevoinsaat.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/projeler`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/tamamlanan-projeler`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/hizmetler`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projeler/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const completedPages = completedProjects.map((p) => ({
    url: `${baseUrl}/tamamlanan-projeler/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const seoLandingPages = seoPages.map((s) => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const districtPages = ankaraDistricts.map((d) => ({
    url: `${baseUrl}/hizmet-bolgeleri/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...completedPages,
    ...servicePages,
    ...blogPages,
    ...seoLandingPages,
    ...districtPages,
  ];
}
