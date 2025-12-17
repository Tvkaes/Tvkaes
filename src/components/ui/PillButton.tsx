import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type CommonProps = {
  children: ReactNode
  variant?: 'solid' | 'outline'
  tone?: 'primary' | 'base'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type PillButtonProps = ButtonProps | AnchorProps

const variantClasses = {
  solid: {
    primary:
      'border-none bg-base-100 text-base-content shadow-[0_12px_32px_rgba(3,3,3,0.25)] hover:shadow-[0_20px_45px_rgba(0,212,255,0.35),0_20px_45px_rgba(124,58,237,0.25)]',
    base: 'border border-base-300/60 bg-white text-base-content hover:text-primary',
  },
  outline: {
    primary: 'border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20',
    base: 'border border-base-300/40 bg-transparent text-base-content hover:text-primary',
  },
}

const sizeClasses = {
  sm: 'btn-sm text-[10px] tracking-[0.4em] px-4 py-2',
  md: 'btn-md text-xs tracking-[0.4em] px-6 py-3',
  lg: 'btn-lg text-[11px] tracking-[0.4em] px-8 py-4',
}

export function PillButton({
  children,
  variant = 'solid',
  tone = 'primary',
  size = 'md',
  className = '',
  ...props
}: PillButtonProps) {
  const classes = clsx(
    'btn rounded-full uppercase transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    sizeClasses[size],
    variantClasses[variant][tone],
    className,
  )

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} {...rest} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button {...(props as ButtonProps)} className={classes}>
      {children}
    </button>
  )
}
