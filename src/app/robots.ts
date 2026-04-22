import type { MetadataRoute } from 'next'

import { getSiteUrl } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl().toString()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
