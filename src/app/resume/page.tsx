import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { ResumeEntry } from '@/components/ResumeEntry'
import { ResumeSection } from '@/components/ResumeSection'
import {
  competencyGroups,
  educationEntries,
  experienceEntries,
} from '@/data/resume'
import { siteConfig, socialLinks } from '@/data/site'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Experience, core competencies, and education for Muhammad Anwer.',
}

export default function ResumePage() {
  return (
    <>
      <Container className="mt-16 sm:mt-24">
        <header className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            Resume
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            {siteConfig.role}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                {item.shortLabel}: {item.label}
              </Link>
            ))}
          </div>
        </header>
        <div className="mt-16 space-y-16">
          <ResumeSection title="Core Competencies">
            <div className="grid gap-6 md:grid-cols-2">
              {competencyGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </ResumeSection>
          <ResumeSection title="Professional Experience">
            <div className="space-y-6">
              {experienceEntries.map((entry) => (
                <ResumeEntry
                  key={`${entry.company}-${entry.title}`}
                  title={entry.title}
                  subtitle={`${entry.company} · ${entry.location}`}
                  meta={`${entry.start} — ${entry.end}`}
                  items={entry.bullets}
                />
              ))}
            </div>
          </ResumeSection>
          <ResumeSection title="Education">
            <div className="space-y-6">
              {educationEntries.map((entry) => (
                <ResumeEntry
                  key={entry.institution}
                  title={entry.credential}
                  subtitle={entry.institution}
                  meta={entry.location}
                />
              ))}
            </div>
          </ResumeSection>
        </div>
      </Container>
      <ContactCTA />
    </>
  )
}
