import type { FormEvent, ReactElement } from 'react'

export type TechCategory = { title: string; description: string; skills: string[] }
export type TechBadge = { label: string; meta: string; logo: string }
export type Experience = { timeframe: string; role: string; place: string; impact: string }
export type EducationItem = { year: string; title: string; institution: string; details: string }
export type Project = {
  title: string
  description: string
  stack: string[]
  year: string
  url: string
  gradient: string
  repo?: string
}
export type SocialLink = { label: string; url: string; Icon: () => ReactElement }
export type FormFields = { name: string; email: string; message: string }
export type FormFeedback = { type: 'success' | 'error'; message: string }

export type ContactSectionProps = {
  socialLinks: SocialLink[]
  formData: FormFields
  formFeedback: FormFeedback | null
  onInputChange: (field: keyof FormFields, value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}
