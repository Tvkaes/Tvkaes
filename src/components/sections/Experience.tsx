import type { Experience as ExperienceType } from '@/types'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridSection } from '@/components/ui/GridSection'

interface ExperienceProps {
  items: ExperienceType[]
  icons: string[]
}

export function Experience({ items, icons }: ExperienceProps) {
  return (
    <section className="scroll-mt-32 space-y-10">
      <SectionHeader
        label="Experiencia"
        labelColor="accent"
        title="Trayectoria reciente"
        description="Lanzamientos end-to-end, optimización de flujos internos y mejoras tangibles en performance para N1 Capital y Mino Logistics."
      />
      <GridSection cols={2} className="experience-grid">
        {items.map((exp, index) => (
          <Card key={exp.timeframe} rounded="sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl" aria-hidden="true">
                {icons[index % icons.length]}
              </span>
              <span className="rounded-full bg-base-200/80 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-base-content/60">
                {exp.timeframe}
              </span>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-semibold text-base-content">{exp.role}</h3>
              <p className="text-sm text-base-content/60">{exp.place}</p>
            </div>
            <p className="mt-4 text-base-content/80">{exp.impact}</p>
            <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-base-content/60">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                Impacto
              </span>
              <span className="h-px flex-1 bg-base-300/50" aria-hidden="true" />
            </div>
          </Card>
        ))}
      </GridSection>
    </section>
  )
}
