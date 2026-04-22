import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { JsonLd } from '@/components/JsonLd'
import { siteConfig, socialLinks } from '@/data/site'
import { absoluteUrl } from '@/lib/metadata'

function SocialLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
      >
        <span>{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Muhammad Anwer, a senior full-stack software engineer focused on shipping reliable product systems.',
}

export default function About() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.name,
          jobTitle: siteConfig.role,
          description: siteConfig.description,
          url: absoluteUrl('/about'),
          sameAs: [siteConfig.github, siteConfig.linkedin],
        }}
      />
      <Container className="mt-16 sm:mt-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              About
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              Engineering with a product operator’s perspective.
            </h1>
            <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
              {siteConfig.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                At LaunchGood and ESGTree, that has meant taking ownership of
                architecture, delivery, production response, and the connective
                tissue between engineering decisions and business outcomes.
              </p>
            </div>
          </div>
          <aside className="space-y-6 self-start rounded-[2rem] border border-zinc-200/80 bg-white/75 p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/75">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Full-stack product delivery</li>
                <li>Type-safe systems and service design</li>
                <li>Incident response and operational hardening</li>
                <li>Fast MVP execution with pragmatic tradeoffs</li>
              </ul>
            </div>
            <div className="border-t border-zinc-200/80 pt-6 dark:border-zinc-800">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((item) => (
                  <SocialLink key={item.href} href={item.href}>
                    {item.shortLabel}: {item.label}
                  </SocialLink>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
      <ContactCTA />
    </>
  )
}
