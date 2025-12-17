import type { ReactElement } from 'react'

export type TechCategory = { title: string; description: string; skills: string[]; gradient: string }
export type TechBadge = { label: string; meta: string; color: string; logo: string }
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
export type SocialLink = { label: string; url: string; Icon: (props?: { className?: string }) => ReactElement }
