import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyHeader } from '@/components/CaseStudyHeader'
import { ContactCTA } from '@/components/ContactCTA'
import { Container } from '@/components/Container'
import { OutcomeList } from '@/components/OutcomeList'
import { ProjectMeta } from '@/components/ProjectMeta'
import { ScreenshotGallery } from '@/components/ScreenshotGallery'
import { getProjectBySlug, projects } from '@/data/projects'
import { absoluteUrl } from '@/lib/metadata'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: 'article',
    },
  }
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  async function renderProject() {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
      notFound()
    }

    return (
      <>
        <Container className="mt-16 sm:mt-24">
          <CaseStudyHeader project={project} />
          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem]">
            <div className="space-y-16">
              <section>
                <h2 className="font-serif text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                  Challenge
                </h2>
                <div className="mt-5 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                  {project.challenge.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="font-serif text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                  What I delivered
                </h2>
                <ul className="mt-5 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                  {project.work.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="font-serif text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                  Screenshots
                </h2>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
                  Protected products are represented with placeholders until
                  final screenshots are added to the portfolio.
                </p>
                <div className="mt-6">
                  <ScreenshotGallery screenshots={project.screenshots} />
                </div>
              </section>
              <section>
                <h2 className="font-serif text-2xl tracking-tight text-zinc-900 dark:text-zinc-50">
                  Outcomes
                </h2>
                <div className="mt-6">
                  <OutcomeList items={project.outcomes} />
                </div>
              </section>
            </div>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProjectMeta project={project} />
            </div>
          </div>
        </Container>
        <ContactCTA />
      </>
    )
  }

  return renderProject()
}
