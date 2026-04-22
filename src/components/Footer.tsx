import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { navigationLinks, siteConfig, socialLinks } from '@/data/site'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-zinc-950 dark:hover:text-zinc-50"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 flex-none sm:mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-200/80 pt-10 pb-16 dark:border-zinc-800">
          <ContainerInner>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-serif text-2xl text-zinc-900 dark:text-zinc-50">
                  {siteConfig.name}
                </p>
                <p className="mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
                  Product-focused full-stack engineering across frontend,
                  backend, architecture, and operations.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {navigationLinks.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socialLinks.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.shortLabel}
                    </NavLink>
                  ))}
                </div>
                <p className="mt-4">
                  &copy; {new Date().getFullYear()} {siteConfig.name}.
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
