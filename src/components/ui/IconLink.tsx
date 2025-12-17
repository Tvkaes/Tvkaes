import type { ComponentType } from 'react'

interface IconLinkProps {
  href: string
  label: string
  Icon: ComponentType<{ className?: string }>
}

export function IconLink({ href, label, Icon }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn btn-sm gap-2 rounded-full border border-base-300/50 bg-base-100/70 text-[10px] uppercase tracking-[0.4em]"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  )
}
