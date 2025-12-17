import type { Project } from '../../types'
import { GitHubIcon, GlobeIcon } from '../icons'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { PillButton } from '../ui/PillButton'

interface ProjectCardProps {
  project: Project
  icon: React.ReactNode
}

export function ProjectCard({ project, icon }: ProjectCardProps) {
  return (
    <Card rounded="md">
      <div className="flex items-center justify-between">
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>
        <span className="rounded-full bg-base-100/70 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-base-content/70">
          {project.year}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl">{project.title}</h3>
      <p className="mt-2 text-sm text-base-content/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <PillButton href={project.url} target="_blank" rel="noreferrer" variant="outline" tone="primary" size="sm">
          <GlobeIcon />
          Live
        </PillButton>
        {project.repo ? (
          <PillButton
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            variant="solid"
            tone="base"
            size="sm"
          >
            <GitHubIcon />
            Code
          </PillButton>
        ) : null}
      </div>
    </Card>
  )
}
