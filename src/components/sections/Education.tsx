import type { EducationItem } from '@/types'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridSection } from '@/components/ui/GridSection'
import { Badge } from '@/components/ui/Badge'

interface EducationProps {
  items: EducationItem[]
}

export function Education({ items }: EducationProps) {
  return (
    <section className="scroll-mt-32 space-y-8">
      <SectionHeader label="Educación" labelColor="secondary" title="Bases académicas" />
      <GridSection cols={2}>
        {items.map((item) => (
          <Card key={item.title} rounded="sm">
            <Badge emphasis="ghost">{item.year}</Badge>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-base-content/70">{item.institution}</p>
            <p className="mt-3 text-base-content/80 text-sm">{item.details}</p>
          </Card>
        ))}
      </GridSection>
    </section>
  )
}
