export interface CompetencyGroup {
  title: string
  items: string[]
}

export interface ResumeExperience {
  company: string
  title: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface EducationEntry {
  institution: string
  credential: string
  location: string
}

export const competencyGroups: CompetencyGroup[] = [
  {
    title: 'Engineering Leadership',
    items: [
      'System design and RFCs',
      'Design reviews and product/engineering collaboration',
      'Analytics instrumentation with Heap',
      'Roadmap input, code reviews, and mentoring distributed teams',
    ],
  },
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'Next.js and React',
      'Redux',
      'NestJS',
      'Prisma',
      'Tailwind CSS',
      'Jest and React Testing Library',
      'Scikit-learn',
    ],
  },
  {
    title: 'Architecture & Systems',
    items: [
      'Microservices',
      'Event-driven systems',
      'RabbitMQ',
      'REST and OpenAPI',
      'Type-safe clients',
      'Cross-service integration',
    ],
  },
  {
    title: 'Reliability & Operations',
    items: [
      'Incident management',
      'Production triage and mitigation',
      'Root cause analysis',
      'Runbooks and post-incident hardening',
      'On-call rotations',
      'Datadog monitors and logs',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'Docker',
      'Git and GitHub Actions',
      'CI/CD',
      'Monitoring and alerting',
    ],
  },
  {
    title: 'ML & AI',
    items: [
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'Langbase',
      'Cursor',
      'Cleric',
      'Mendral',
    ],
  },
]

export const experienceEntries: ResumeExperience[] = [
  {
    company: 'ESGTree',
    title: 'Senior Software Engineer (Contract)',
    location: 'Remote',
    start: 'Aug 2025',
    end: 'Present',
    bullets: [
      'Led development of a full-stack MVP from prototype to production in under four weeks, guiding a team of two engineers and making deliberate scope tradeoffs to win a competitive vendor demo with Desjardins.',
      'Owned backend services, APIs, and data models while contributing across the stack, reviewing PRs, unblocking engineers, and partnering closely with stakeholders as product requirements evolved.',
      'After initial validation, led a backend refactor to NestJS to introduce modular boundaries, improve reliability, and move the system from prototype speed to production-grade maintainability.',
    ],
  },
  {
    company: 'LaunchGood',
    title: 'Full Stack Software Engineer',
    location: 'Remote',
    start: 'Jul 2022',
    end: 'Present',
    bullets: [
      'Ship full-stack features for a fundraising marketplace using Next.js, Redux, Tailwind CSS, NestJS, Prisma/PostgreSQL, and RabbitMQ.',
      'Delivered guest checkout for subscriptions end to end in one week, identified security issues in the initial proposal, and helped drive a conversion lift of roughly 40% after launch.',
      'Implemented multi-step subscription onboarding flows, reusable UI patterns, public partner profiles, and recurring fundraising management experiences with test coverage across critical paths.',
      'Led production incident response with Datadog and AWS, authored runbooks, improved failure handling, and standardized mitigation patterns after retrospectives.',
      'Built internal Retool dashboards and Heap instrumentation to support operations, on-call diagnosis, funnel measurement, and product decision-making.',
    ],
  },
  {
    company: 'Self-employed',
    title: 'Owner, E-Commerce Ventures',
    location: 'Remote',
    start: 'Jan 2010',
    end: 'Dec 2019',
    bullets: [
      'Bootstrapped and scaled two online ventures: an e-learning platform and an Amazon FBA storefront.',
      'Handled product, marketing, operations, inventory, supplier relationships, and P&L while growing a global customer base.',
      'Exited both ventures successfully and continue to receive royalty income.',
    ],
  },
]

export const educationEntries: EducationEntry[] = [
  {
    institution: 'University of Waterloo',
    credential: 'Honours Bachelor of Computer Science',
    location: 'Waterloo, ON',
  },
  {
    institution: 'Fanshawe College',
    credential: 'Graduate Certificate in AI & Machine Learning',
    location: 'London, ON',
  },
  {
    institution: 'Lighthouse Labs',
    credential: 'Full-Stack Web Development Diploma',
    location: 'Online',
  },
]

export const resumeSnapshot = [
  'Senior full-stack engineering across product delivery, systems design, and production operations.',
  'Hands-on with Next.js, TypeScript, NestJS, Prisma, PostgreSQL, Tailwind CSS, AWS, and event-driven architectures.',
  'Comfortable operating from early MVP architecture through rollout, instrumentation, incident response, and post-launch refinement.',
]
