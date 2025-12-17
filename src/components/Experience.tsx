import type { Experience as ExperienceType } from '../types'

interface ExperienceProps {
  items: ExperienceType[]
  icons: string[]
}

export function Experience({ items, icons }: ExperienceProps) {
  return (
    <section className="scroll-mt-32 space-y-10">
      <header className="space-y-3" data-animate>
        <p className="text-[11px] uppercase tracking-[0.5em] text-accent">Experiencia</p>
        <h2 className="font-display text-4xl">Trayectoria reciente</h2>
        <p className="text-base-content/80">
          Lanzamientos end-to-end, optimización de flujos internos y mejoras tangibles en performance para N1 Capital y
          Mino Logistics.
        </p>
      </header>
      <div className="experience-grid grid gap-6 md:grid-cols-2" data-animate>
        {items.map((exp, index) => (
          <article
            key={exp.timeframe}
            className="group relative overflow-hidden rounded-[28px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth transition hover:-translate-y-1 hover:border-primary/40"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
              aria-hidden="true"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-linear-to-r from-primary/40 via-secondary/30 to-accent/30" />
            </div>
            <div className="relative flex items-center justify-between">
              <span className="text-2xl" aria-hidden="true">
                {icons[index % icons.length]}
              </span>
              <span className="rounded-full bg-base-200/80 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-base-content/60">
                {exp.timeframe}
              </span>
            </div>
            <div className="relative mt-4 space-y-1">
              <h3 className="text-xl font-semibold text-base-content">{exp.role}</h3>
              <p className="text-sm text-base-content/60">{exp.place}</p>
            </div>
            <p className="relative mt-4 text-base-content/80">{exp.impact}</p>
            <div className="relative mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-base-content/60">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                Impacto
              </span>
              <span className="h-px flex-1 bg-base-300/50" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
