import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://drthiagoreis.vercel.app/", changeFrequency: "monthly" }];
}
