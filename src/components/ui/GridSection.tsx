import type { ReactNode } from 'react'
import clsx from 'clsx'

interface GridSectionProps {
  children: ReactNode
  cols?: 1 | 2 | 3
  gap?: 'sm' | 'md' | 'lg'
  animate?: boolean
  className?: string
}

const gapMap = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}

const colMap = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

export function GridSection({ children, cols = 2, gap = 'md', animate = true, className = '' }: GridSectionProps) {
  return (
    <div
      className={clsx('grid grid-cols-1', gapMap[gap], colMap[cols], className)}
      data-animate={animate ? '' : undefined}
    >
      {children}
    </div>
  )
}
