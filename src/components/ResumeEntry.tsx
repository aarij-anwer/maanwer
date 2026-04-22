interface ResumeEntryProps {
  title: string
  subtitle: string
  meta: string
  items?: string[]
}

export function ResumeEntry({
  title,
  subtitle,
  meta,
  items,
}: ResumeEntryProps) {
  return (
    <article className="rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{meta}</p>
      </div>
      {items && (
        <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400 dark:bg-zinc-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
