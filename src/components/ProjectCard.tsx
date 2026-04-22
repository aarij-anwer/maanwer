import { Card } from '@/components/Card'
import type { PortfolioProject } from '@/data/projects'

function accessClasses(access: PortfolioProject['access']) {
  return access === 'private'
    ? 'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-400/20'
    : 'bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-400/20'
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Card
      as="li"
      className="h-full rounded-3xl border border-zinc-200/80 bg-white/75 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/75"
    >
      <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm">
        <span
          className={`rounded-full px-3 py-1 font-medium ${accessClasses(project.access)}`}
        >
          {project.access === 'private' ? 'Auth required' : 'Public project'}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {project.organization}
        </span>
      </div>
      <Card.Title href={`/projects/${project.slug}`} as="h2">
        <span className="mt-5 block font-serif text-2xl text-zinc-900 dark:text-zinc-50">
          {project.title}
        </span>
      </Card.Title>
      <p className="relative z-10 mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {project.role} · {project.timeline}
      </p>
      <Card.Description>{project.summary}</Card.Description>
      <ul className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((item) => (
          <li
            key={item}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="relative z-10 mt-5 text-sm text-zinc-500 dark:text-zinc-400">
        {project.links.length > 0 ? (
          <p>{project.links.map((link) => link.label).join(' · ')}</p>
        ) : (
          <p>{project.linksNote}</p>
        )}
      </div>
      <Card.Cta>Read case study</Card.Cta>
    </Card>
  )
}
