interface SectionHeaderProps {
  label: string
  labelColor?: 'primary' | 'secondary' | 'accent' | 'base'
  title: string
  description?: string
  align?: 'left' | 'center'
}

const labelColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  base: 'text-base-content/70',
}

export function SectionHeader({ label, labelColor = 'primary', title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'

  return (
    <header className={`space-y-3 ${alignment}`} data-animate>
      <p className={`text-[11px] uppercase tracking-[0.5em] ${labelColorMap[labelColor]}`}>{label}</p>
      <h2 className="font-display text-4xl">{title}</h2>
      {description ? <p className="text-base-content/80">{description}</p> : null}
    </header>
  )
}
