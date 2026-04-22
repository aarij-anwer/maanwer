import type { PortfolioProject } from '@/data/projects'

function MetaRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-zinc-200/80 pt-5 first:border-t-0 first:pt-0 dark:border-zinc-800">
      <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </dt>
      <dd className="mt-2 text-sm text-zinc-800 dark:text-zinc-200">{children}</dd>
    </div>
  )
}

export function ProjectMeta({ project }: { project: PortfolioProject }) {
  return (
    <aside className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
      <dl className="space-y-5">
        <MetaRow label="Role">{project.role}</MetaRow>
        <MetaRow label="Timeline">{project.timeline}</MetaRow>
        <MetaRow label="Access">
          {project.access === 'private' ? 'Authentication required' : 'Publicly accessible'}
        </MetaRow>
        <MetaRow label="Stack">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </MetaRow>
        <MetaRow label="Highlights">
          <ul className="space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </MetaRow>
      </dl>
    </aside>
  )
}
