import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  size?: 'xs' | 'sm'
  emphasis?: 'base' | 'primary' | 'ghost'
  className?: string
}

const sizeMap = {
  xs: 'px-3 py-2 text-[10px] tracking-[0.35em]',
  sm: 'px-4 py-3 text-[10px] tracking-[0.4em]',
}

const emphasisMap = {
  base: 'border-base-300/40 bg-base-100/70 text-base-content/70',
  primary: 'border-primary/50 bg-primary/5 text-primary',
  ghost: 'border-base-300/30 bg-base-200/60 text-base-content/70',
}

export function Badge({ children, size = 'xs', emphasis = 'base', className = '' }: BadgeProps) {
  return (
    <span className={`badge badge-outline uppercase ${sizeMap[size]} ${emphasisMap[emphasis]} ${className}`}>
      {children}
    </span>
  )
}
