import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { siteConfig } from '@/data/site'

export function ContactCTA() {
  return (
    <Container className="mt-24 pb-24 sm:mt-32">
      <section className="rounded-[2rem] border border-zinc-200/80 bg-zinc-950 px-6 py-10 text-zinc-50 shadow-xl shadow-zinc-950/15 sm:px-10 dark:border-zinc-800 dark:bg-zinc-50 dark:text-zinc-950">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-300 dark:text-zinc-600">
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight sm:text-4xl">
          Open to thoughtful product engineering and fast-moving build work.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-zinc-300 dark:text-zinc-700">
          {siteConfig.availability}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${siteConfig.email}`} variant="secondary">
            Email me
          </Button>
          <Button href={siteConfig.github}>GitHub</Button>
          <Button href={siteConfig.linkedin} variant="secondary">
            LinkedIn
          </Button>
        </div>
      </section>
    </Container>
  )
}
