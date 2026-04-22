import { Section } from '@/components/Section'

export function ResumeSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return <Section title={title}>{children}</Section>
}
