import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { homeHighlights, siteConfig } from '@/data/site'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.122-.25a.75.75 0 0 0-.494 1.314l5.883 5.179a.75.75 0 0 0 .978 0l5.883-5.18a.75.75 0 1 0-.99-1.127L12 11.426 7.112 6.687a.749.749 0 0 0-.99-.187Z"
      />
    </svg>
  )
}

const socialItems = [
  {
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: MailIcon,
  },
  {
    href: siteConfig.github,
    label: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: siteConfig.linkedin,
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
]

export function Hero() {
  return (
    <Container className="pt-16 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            {siteConfig.role}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
            Building reliable product systems with pragmatic engineering judgment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            {siteConfig.intro}
          </p>
          <p className="mt-4 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
            Based in {siteConfig.location}. I work across full-stack product
            delivery, platform architecture, and the operational edges that keep
            shipping teams stable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View projects</Button>
            <Button href="/resume" variant="secondary">
              Read resume
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            {socialItems.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 transition hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  <Icon className="h-5 w-5 fill-zinc-400 transition group-hover:fill-zinc-700 dark:fill-zinc-500 dark:group-hover:fill-zinc-200" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {homeHighlights.map((highlight) => (
            <div
              key={highlight.value}
              className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {highlight.value}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
