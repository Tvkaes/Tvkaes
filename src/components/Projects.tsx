import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'

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
      <header className="space-y-3" data-animate>
        <p className="text-[11px] uppercase tracking-[0.5em] text-primary">Portafolio selecto</p>
        <h2 className="font-display text-4xl">Experiencias recientes</h2>
        <p className="text-base-content/80">Cards tipo bento con profundidad, gradientes adaptables y microinteracciones.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            icon={getIcon(project, index)}
          />
        ))}
      </div>
    </section>
  )
}
