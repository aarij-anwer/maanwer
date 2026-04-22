import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { JsonLd } from '@/components/JsonLd'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { resumeSnapshot } from '@/data/resume'
import { siteConfig, workingPrinciples } from '@/data/site'
import { absoluteUrl } from '@/lib/metadata'

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.name,
          jobTitle: siteConfig.role,
          description: siteConfig.description,
          email: siteConfig.email,
          sameAs: [siteConfig.github, siteConfig.linkedin],
          url: absoluteUrl('/'),
        }}
      />
      <Hero />
      <Container className="mt-24 sm:mt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Selected work
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-zinc-900 dark:text-zinc-50">
              Case studies built around product delivery, architecture, and reliability.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              The portfolio focuses on production systems, business-critical
              flows, and the engineering decisions that shaped how these
              products shipped.
            </p>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </section>
          <aside className="rounded-[2rem] border border-zinc-200/80 bg-white/75 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/75">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Resume snapshot
            </p>
            <h2 className="mt-4 font-serif text-2xl text-zinc-900 dark:text-zinc-50">
              Senior IC depth with product sense and operating discipline.
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              {resumeSnapshot.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/resume" variant="secondary" className="mt-8 w-full">
              View full resume
            </Button>
          </aside>
        </div>
      </Container>
      <Container className="mt-24 sm:mt-28">
        <section>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            Working style
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight text-zinc-900 dark:text-zinc-50">
            Product-minded execution with a bias toward maintainable systems.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
      <ContactCTA />
    </>
  )
}
