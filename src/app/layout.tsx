import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { siteConfig } from '@/data/site'
import { getSiteUrl } from '@/lib/metadata'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Muhammad Anwer',
    default: 'Muhammad Anwer | Senior Full-Stack Software Engineer',
  },
  description: siteConfig.description,
  metadataBase: getSiteUrl(),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full bg-zinc-100 text-zinc-950 selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
