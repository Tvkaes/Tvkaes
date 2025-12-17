import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  rounded?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const roundedMap = {
  sm: 'rounded-[28px]',
  md: 'rounded-[32px]',
  lg: 'rounded-[36px]',
}

export function Card({ children, className = '', rounded = 'md', animate = true }: CardProps) {
  return (
    <article
      className={`group relative overflow-hidden ${roundedMap[rounded]} border border-base-300/30 bg-white p-6 shadow-depth transition hover:-translate-y-1 hover:border-primary/40 ${className}`}
      data-animate={animate ? '' : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-linear-to-r from-primary/40 via-secondary/30 to-accent/30" />
      </div>
      <div className="relative">{children}</div>
    </article>
  )
}
