export const siteConfig = {
  name: 'Muhammad Anwer',
  firstName: 'Muhammad',
  role: 'Senior Full-Stack Software Engineer',
  location: 'Toronto, ON / Remote',
  email: 'maanwer0@gmail.com',
  github: 'https://github.com/aarij-anwer',
  linkedin: 'https://www.linkedin.com/in/m-a-anwer',
  description:
    'Muhammad Anwer is a senior full-stack software engineer who builds product-focused systems across Next.js, TypeScript, NestJS, and modern cloud platforms.',
  intro:
    'I build product-focused software systems that move quickly from prototype to production without giving up reliability, clarity, or engineering judgment.',
  longBio: [
    'I work across product, platform, and operations. My background spans full-stack feature delivery, system design, incident response, analytics instrumentation, and the kind of cross-functional engineering work that keeps teams shipping under real constraints.',
    'Before moving fully into software, I spent nearly a decade building and operating e-commerce businesses. That experience still shapes how I think about product quality, prioritization, and the relationship between software decisions and business outcomes.',
  ],
  availability:
    'Available for senior individual contributor and technical leadership work across product engineering, platform architecture, and fast-moving MVP delivery.',
} as const

export const navigationLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
] as const

export const socialLinks = [
  {
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    shortLabel: 'Email',
    kind: 'email' as const,
  },
  {
    href: siteConfig.github,
    label: 'aarij-anwer',
    shortLabel: 'GitHub',
    kind: 'github' as const,
  },
  {
    href: siteConfig.linkedin,
    label: 'm-a-anwer',
    shortLabel: 'LinkedIn',
    kind: 'linkedin' as const,
  },
] as const

export const homeHighlights = [
  {
    value: '0→1 in 4 weeks',
    label: 'Shipped a production MVP and won a paid pilot at ESGTree.',
  },
  {
    value: '40% lift',
    label: 'Improved subscription conversion through safer guest checkout flows.',
  },
  {
    value: 'Full-stack ownership',
    label: 'Delivery across frontend, APIs, data models, ops, and analytics.',
  },
] as const

export const workingPrinciples = [
  {
    title: 'Ship with judgment',
    description:
      'I bias toward practical delivery, but I still protect the seams that matter: security, observability, and future maintainability.',
  },
  {
    title: 'Design for change',
    description:
      'I prefer typed interfaces, modular services, and reusable UI so products can evolve without constant rewrites.',
  },
  {
    title: 'Stay close to production',
    description:
      'I treat incident response, analytics, and post-release monitoring as part of engineering work, not cleanup after it.',
  },
] as const
