import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://la4casino.vercel.app/', lastModified: new Date('2026-09-15'), changeFrequency: 'weekly', priority: 1 }]
}
