import type { MetadataRoute } from "next";

const BASE = "https://apex-racing-academy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/club", "/juniors", "/calendar", "/partners", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
