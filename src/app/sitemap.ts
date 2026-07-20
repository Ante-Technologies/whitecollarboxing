import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  NEWS_PAGE_SIZE,
  PAGE_SIZE,
  categoryList,
  getPostsByCategory,
  posts,
} from "@/lib/posts";

function abs(path: string): string {
  return `${site.url}${path}`;
}

function toDate(value: string): Date {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: abs("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/events"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/events/fundraisers"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/testimonials"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/news"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: abs("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: abs(`/${post.slug}`),
    lastModified: toDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = [];
  for (const cat of categoryList) {
    const totalPages = Math.max(1, Math.ceil(cat.count / PAGE_SIZE));
    for (let p = 1; p <= totalPages; p++) {
      categoryRoutes.push({
        url: abs(p === 1 ? cat.path : `${cat.path}/page/${p}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: p === 1 ? 0.6 : 0.4,
      });
    }
  }

  const newsTotalPages = Math.max(
    1,
    Math.ceil(getPostsByCategory("news_page").length / NEWS_PAGE_SIZE),
  );
  const newsPaginationRoutes: MetadataRoute.Sitemap = [];
  for (let p = 2; p <= newsTotalPages; p++) {
    newsPaginationRoutes.push({
      url: abs(`/news/page/${p}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    });
  }

  return [
    ...staticRoutes,
    ...postRoutes,
    ...categoryRoutes,
    ...newsPaginationRoutes,
  ];
}
