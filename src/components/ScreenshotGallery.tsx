import Image from 'next/image'

import type { ProjectScreenshot } from '@/data/projects'

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {screenshots.map((shot) => (
        <figure
          key={shot.caption}
          className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-linear-to-br from-zinc-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
            {shot.src ? (
              <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
            ) : (
              <div className="flex h-full items-end p-6">
                <div className="max-w-sm rounded-2xl border border-white/50 bg-white/80 p-5 shadow-lg shadow-zinc-950/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Screenshot placeholder
                  </p>
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
                    {shot.placeholder}
                  </p>
                </div>
              </div>
            )}
          </div>
          <figcaption className="border-t border-zinc-200/80 px-5 py-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
