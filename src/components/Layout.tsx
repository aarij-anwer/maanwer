import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-950" />
        <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-white via-zinc-100 to-transparent dark:from-zinc-900 dark:via-zinc-950 dark:to-transparent" />
        <div className="absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-300/30 blur-3xl dark:bg-zinc-700/20" />
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
