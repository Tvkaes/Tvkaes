import type { EducationItem } from '../types'

interface EducationProps {
  items: EducationItem[]
}

export function Education({ items }: EducationProps) {
  return (
    <section className="scroll-mt-32 space-y-8">
      <header className="space-y-2" data-animate>
        <p className="text-[11px] uppercase tracking-[0.5em] text-secondary">Educación</p>
        <h2 className="font-display text-3xl">Bases académicas</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-2" data-animate>
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth"
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">{item.year}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-base-content/70">{item.institution}</p>
            <p className="mt-3 text-base-content/80 text-sm">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
