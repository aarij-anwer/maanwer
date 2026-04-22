import { type Metadata } from 'next'

import { JsonLd } from '@/components/JsonLd'
import { ProjectCard } from '@/components/ProjectCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/data/projects'
import { absoluteUrl } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected software engineering case studies across product delivery, architecture, and full-stack execution.',
}

export default function Projects() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projects',
          url: absoluteUrl('/projects'),
          hasPart: projects.map((project) => ({
            '@type': 'CreativeWork',
            name: project.title,
            url: absoluteUrl(`/projects/${project.slug}`),
          })),
        }}
      />
      <SimpleLayout
        title="Projects spanning fast MVP delivery, production systems, and product-facing engineering."
        intro="This portfolio is structured around a small set of case studies rather than a broad gallery. Some products are publicly accessible and others are represented through screenshots and implementation notes because the underlying workflows require authentication."
      >
        <ul role="list" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
