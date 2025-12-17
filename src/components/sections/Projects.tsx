import type { Project } from '../../types'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from '../ui/SectionHeader'
import { GridSection } from '../ui/GridSection'

interface ProjectsProps {
  items: Project[]
  icons: string[]
  pokeballLogo: string
}

export function Projects({ items, icons, pokeballLogo }: ProjectsProps) {
  const getIcon = (project: Project, index: number) => {
    if (project.title.toLowerCase().includes('pokedex')) {
      return <img src={pokeballLogo} alt="" className="h-7 w-7 object-contain drop-shadow-[0_4px_12px_rgba(255,0,0,0.35)]" />
    }
    return icons[index % icons.length]
  }

  return (
    <section id="projects" className="scroll-mt-32 space-y-10">
      <SectionHeader
        label="Portafolio selecto"
        title="Experiencias recientes"
        description="Cards tipo bento con profundidad, gradientes adaptables y microinteracciones."
      />
      <GridSection cols={3}>
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            icon={getIcon(project, index)}
          />
        ))}
      </GridSection>
    </section>
  )
}
