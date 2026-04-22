import type { MetadataRoute } from 'next'

import { projects } from '@/data/projects'
import { absoluteUrl } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/about', '/projects', '/resume']

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
