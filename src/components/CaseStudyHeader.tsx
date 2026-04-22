import { Button } from '@/components/Button'
import type { PortfolioProject } from '@/data/projects'

function accessClasses(access: PortfolioProject['access']) {
  return access === 'private'
    ? 'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-400/20'
    : 'bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-400/20'
}

export function CaseStudyHeader({ project }: { project: PortfolioProject }) {
  return (
    <header className="max-w-4xl">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span
          className={`rounded-full px-3 py-1 font-medium ${accessClasses(project.access)}`}
        >
          {project.access === 'private' ? 'Authenticated product' : 'Public project'}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">
          {project.organization}
        </span>
      </div>
      <h1 className="mt-6 font-serif text-4xl tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        {project.tagline}
      </p>
      <p className="mt-6 max-w-3xl text-base text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Button key={link.href} href={link.href} variant="secondary">
            {link.label}
          </Button>
        ))}
      </div>
      {project.links.length === 0 && project.linksNote && (
        <p className="mt-6 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
          {project.linksNote}
        </p>
      )}
    </header>
  )
}
