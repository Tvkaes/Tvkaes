import type { Project } from '../types'
import { GitHubIcon, GlobeIcon } from './icons'

interface ProjectCardProps {
  project: Project
  icon: React.ReactNode
}

export function ProjectCard({ project, icon }: ProjectCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-[32px] border border-base-300/40 bg-base-200/40 p-6 shadow-depth transition hover:-translate-y-2 hover:border-primary/50"
      data-animate
    >
      <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-40 blur-3xl`} aria-hidden="true" />
      <div className="relative flex items-center justify-between">
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>
        <span className="rounded-full bg-base-100/70 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-base-content/70">
          {project.year}
        </span>
      </div>
      <h3 className="relative mt-3 font-display text-2xl">{project.title}</h3>
      <p className="relative mt-2 text-sm text-base-content/80">{project.description}</p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="badge badge-outline border-base-300/40 bg-base-100/70 text-[10px] uppercase tracking-[0.4em]">
            {tech}
          </span>
        ))}
      </div>
      <div className="relative mt-6 flex flex-wrap gap-3">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary transition hover:bg-primary/20"
        >
          <GlobeIcon />
          Live
        </a>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm rounded-full border border-base-300/60 bg-base-100/80 text-sm font-semibold text-base-content transition hover:text-primary"
          >
            <GitHubIcon />
            Code
          </a>
        ) : null}
      </div>
    </article>
  )
}
