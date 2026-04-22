export function OutcomeList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5 text-sm text-zinc-700 shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
