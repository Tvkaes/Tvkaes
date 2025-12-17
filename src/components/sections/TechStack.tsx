import type { TechCategory, TechBadge } from '../../types'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { GridSection } from '../ui/GridSection'
import { Badge } from '../ui/Badge'

interface TechStackProps {
  categories: TechCategory[]
  marquee: TechBadge[]
}

export function TechStack({ categories, marquee }: TechStackProps) {
  return (
    <section id="tech" className="scroll-mt-32 space-y-10">
      <SectionHeader
        label="Tech skills"
        labelColor="secondary"
        title="Frameworks, datos y sistemas que domino"
        description="Selecciono la herramienta adecuada para cada etapa: descubrimiento, prototipado, implementación y medición."
      />

      <GridSection cols={3}>
        {categories.map((category) => (
          <Card key={category.title} rounded="md">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary/80">Focus</span>
            </div>
            <p className="mt-4 text-sm text-base-content/75">{category.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} emphasis="ghost">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </GridSection>

      <div className="tech-marquee p-12" data-animate>
        <div className="tech-track">
          {[...marquee, ...marquee].map((badge, index) => (
            <span
              key={`${badge.label}-${index}`}
              className="tech-pill flex items-center justify-center rounded-full bg-white p-3 shadow-sm"
            >
              <img
                src={`https://cdn.simpleicons.org/${badge.logo}/${badge.color.replace('#', '')}`}
                alt={badge.label}
                title={badge.label}
                className="h-10 w-10"
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
