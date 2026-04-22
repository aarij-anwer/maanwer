export type ProjectAccess = 'public' | 'private'

export interface ProjectLink {
  label: string
  href: string
  type: 'live' | 'repo' | 'company'
}

export interface ProjectScreenshot {
  src?: string
  alt: string
  caption: string
  placeholder: string
}

export interface PortfolioProject {
  slug: string
  title: string
  organization: string
  role: string
  timeline: string
  access: ProjectAccess
  featured: boolean
  tagline: string
  summary: string
  stack: string[]
  highlights: string[]
  challenge: string[]
  work: string[]
  outcomes: string[]
  links: ProjectLink[]
  linksNote?: string
  screenshots: ProjectScreenshot[]
}

export const projects: PortfolioProject[] = [
  {
    slug: 'launchgood',
    title: 'LaunchGood',
    organization: 'LaunchGood',
    role: 'Full Stack Software Engineer',
    timeline: '2022–Present',
    access: 'private',
    featured: true,
    tagline: 'Subscription and fundraising product work inside a high-traffic donor marketplace.',
    summary:
      'End-to-end product engineering across recurring giving, partner experiences, onboarding funnels, analytics, and production stability for a fundraising platform serving organizers and donors.',
    stack: [
      'Next.js',
      'React',
      'Redux',
      'Tailwind CSS',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'RabbitMQ',
      'Datadog',
      'AWS',
    ],
    highlights: [
      'Delivered guest checkout in one week',
      'Improved new-subscriber conversion by roughly 40%',
      'Over 50% of new subscribers adopted guest checkout after launch',
    ],
    challenge: [
      'The product surface spans public flows, authenticated dashboards, payments, recurring subscriptions, and cross-team operational tooling. That meant shipping customer-facing features while protecting reliability, security, and observability.',
      'Several initiatives also needed to move quickly under business pressure, which required careful tradeoffs around rollout scope, architecture, and risk reduction.',
    ],
    work: [
      'Built and shipped guest checkout for subscriptions across Next.js, Redux, Tailwind CSS, and NestJS, including safer implementation decisions after identifying security issues in the initial approach.',
      'Implemented multi-step onboarding funnels and reusable frontend patterns for subscription programs, while refactoring legacy flows and reviewing contributions across the stack.',
      'Built public-facing partner and influencer profiles with companion admin tooling, backed by NestJS APIs, schema work, and automated coverage for critical behavior.',
      'Led production incident response with Datadog and AWS, authored runbooks, improved failure handling, and helped coordinate safer releases through design reviews and CI-gated workflows.',
    ],
    outcomes: [
      'Higher subscription conversion with a smoother path from guest checkout to account completion.',
      'Reusable UI and service patterns across recurring fundraising and partner-facing product areas.',
      'Stronger production response through better dashboards, runbooks, and instrumentation.',
    ],
    links: [],
    linksNote:
      'This work lives behind authenticated product flows, so the public portfolio focuses on the case study and screenshots rather than direct live access.',
    screenshots: [
      {
        alt: 'LaunchGood subscription onboarding placeholder',
        caption: 'Subscription onboarding flow',
        placeholder: 'Multi-step subscription enrollment, account completion, and payment confirmation.',
      },
      {
        alt: 'LaunchGood recurring fundraising management placeholder',
        caption: 'Recurring fundraising management',
        placeholder: 'Dashboard-style views for recurring giving configuration, status, and performance monitoring.',
      },
      {
        alt: 'LaunchGood internal operations dashboard placeholder',
        caption: 'Operations and incident tooling',
        placeholder: 'Internal Retool dashboards for donor lookup, scheduled giving KPIs, and billing issue triage.',
      },
    ],
  },
  {
    slug: 'esg-financed-emissions',
    title: 'ESG Financed Emissions',
    organization: 'ESGTree',
    role: 'Senior Software Engineer (Contract)',
    timeline: '2025–Present',
    access: 'private',
    featured: true,
    tagline: 'A financed-emissions platform delivered from prototype to production under a compressed timeline.',
    summary:
      'A full-stack MVP for financed emissions workflows that moved from early concept to production in under four weeks, then evolved into a more maintainable platform architecture after winning a pilot.',
    stack: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'REST APIs',
      'Data modeling',
      'Product architecture',
    ],
    highlights: [
      '0→1 MVP shipped in under four weeks',
      'Led a team of two engineers',
      'Won a paid pilot after a competitive vendor demo',
    ],
    challenge: [
      'The initial goal was to prove value quickly enough to win a commercial pilot, which meant the delivery plan had to optimize for learning velocity, not theoretical perfection.',
      'Once the product direction was validated, the next challenge became stabilizing the codebase and service boundaries so the system could support real onboarding and longer-term iteration.',
    ],
    work: [
      'Owned architecture and delivery across the stack, coordinating a small team while making pragmatic tradeoffs around scope, sequencing, and implementation detail.',
      'Designed backend services, APIs, and data models while contributing directly to product development and keeping stakeholders tightly looped into iteration decisions.',
      'Led a post-validation refactor to NestJS to introduce clearer module boundaries, improve reliability, and make the platform easier to extend safely.',
    ],
    outcomes: [
      'Secured a paid pilot after the product won a competitive vendor demo with Desjardins.',
      'Created a path from prototype delivery to production hardening without stalling product momentum.',
      'Established a cleaner service architecture for the next phase of delivery.',
    ],
    links: [],
    linksNote:
      'This product is not publicly accessible, so the portfolio presents the architecture and delivery story rather than a live link.',
    screenshots: [
      {
        alt: 'ESG financed emissions overview placeholder',
        caption: 'Portfolio and emissions overview',
        placeholder: 'Portfolio-level views for financed emissions analysis, comparison, and stakeholder reporting.',
      },
      {
        alt: 'ESG financed emissions workflow placeholder',
        caption: 'Data and workflow tooling',
        placeholder: 'Workflow surfaces for ingesting data, validating assumptions, and tracking emissions outputs.',
      },
    ],
  },
  {
    slug: 'get-better-together',
    title: 'Get Better Together',
    organization: 'Independent Project',
    role: 'Product Engineer',
    timeline: 'Public project',
    access: 'public',
    featured: false,
    tagline: 'A public-facing product slot in the portfolio, ready for a live URL and richer final case-study copy.',
    summary:
      'This entry is wired as a public case study and can be updated with the final production link, screenshots, and deeper narrative without changing the component system.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SSR'],
    highlights: [
      'Structured as a public-facing portfolio entry',
      'Live link can be added directly in the project data file',
    ],
    challenge: [
      'The current implementation focuses on reusable presentation and clean information architecture so the final public project details can drop in cleanly.',
    ],
    work: [
      'Set up a reusable case-study structure with support for external links, screenshot galleries, narrative sections, and responsive layouts.',
      'Kept the content model flexible so this project can evolve from lightweight summary to deeper write-up without any route or component churn.',
    ],
    outcomes: [
      'Ready for final public URL, screenshots, and final descriptive copy.',
      'Integrated into the same SSR-first portfolio system as the other projects.',
    ],
    links: [],
    linksNote:
      'Add the final public URL in src/data/projects.ts to expose the live project CTA.',
    screenshots: [
      {
        alt: 'Get Better Together placeholder',
        caption: 'Public project placeholder',
        placeholder: 'Final screenshots and public link can be dropped into this case study when available.',
      },
    ],
  },
  {
    slug: 'stock-calculator',
    title: 'Stock Calculator',
    organization: 'Independent Project',
    role: 'Product Engineer',
    timeline: 'Public project',
    access: 'public',
    featured: true,
    tagline: 'A public calculator experience for quick scenario planning and lightweight financial exploration.',
    summary:
      'A public-facing utility product designed to make simple stock and return scenarios easier to explore without spreadsheet overhead.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Interactive UI'],
    highlights: [
      'Clear utility-focused UX',
      'Public-facing project with room for a final live link and screenshots',
    ],
    challenge: [
      'Utility products have to feel immediate. The interaction model should stay simple enough for quick exploration while still supporting responsive layouts and clear output states.',
    ],
    work: [
      'Shaped the portfolio entry around fast comprehension, lightweight interaction, and a reusable structure for presenting calculation tools.',
      'Prepared the content model for live-link support, screenshot assets, and deeper implementation notes once final materials are ready.',
    ],
    outcomes: [
      'A clean portfolio slot for a public product with a straightforward value proposition.',
      'Consistent case-study treatment alongside larger commercial work.',
    ],
    links: [],
    linksNote:
      'Add the final public URL in src/data/projects.ts to expose the live project CTA.',
    screenshots: [
      {
        alt: 'Stock calculator placeholder',
        caption: 'Calculator interface placeholder',
        placeholder: 'A compact calculation interface with inputs, assumptions, and readable output states.',
      },
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
