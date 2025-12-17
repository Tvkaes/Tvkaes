import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GridSection } from '@/components/ui/GridSection'
import { Badge } from '@/components/ui/Badge'

const skills = [
  'Clean code',
  'CI/CD',
  'Optimización de rendimiento',
  'Patrones MVC/Observer',
  'UI/UX accesible',
  'Scrum / Kanban',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-32 space-y-10">
      <SectionHeader
        label="Sobre mí"
        labelColor="primary"
        title="Arquitecturas sólidas con foco en rendimiento"
        description="Soy una persona de aprendizaje rápido, con una mirada amplia y apasionada por el diseño web y todo lo que pueda aprender a su alrededor. Me considero colaborativo y flexible, disfruto trabajar en equipo o de forma individual, y busco crecer profesionalmente aportando en proyectos innovadores y retadores. Cuando me desconecto, juego voleibol y comparto tiempo con mi familia."
      />

      <GridSection>
        <Card rounded="lg" className="p-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">Skills clave</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} size="sm" emphasis="base">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
        <Card rounded="lg" className="p-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">Manifiesto</p>
          <ul className="mt-4 space-y-3 text-sm text-base-content/80">
            <li>1. Cada refactor debe venir acompañado de métricas reales (LCP, TTFB, errores por despliegue).</li>
            <li>2. Los patrones de diseño reducen deuda si se documentan desde la arquitectura.</li>
            <li>3. La accesibilidad y el testing continuo son parte del Definition of Done.</li>
          </ul>
        </Card>
      </GridSection>
    </section>
  )
}
