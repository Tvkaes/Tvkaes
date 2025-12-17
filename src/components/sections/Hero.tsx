import { PillButton } from '@/components/ui/PillButton'

interface HeroProps {
  gradientAccent: string
  onScrollToProjects: () => void
}

export function Hero({ gradientAccent, onScrollToProjects }: HeroProps) {
  return (
    <section id="hero" className="grid scroll-mt-32 gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8" data-animate>
        <p className="inline-flex items-center gap-2 rounded-full border border-base-300/40 bg-base-100 px-5 py-2 text-[11px] uppercase tracking-[0.5em] text-base-content/70">
          Hi there!
        </p>
        <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
          I'm <span className={`bg-linear-to-r ${gradientAccent} bg-clip-text text-transparent`}>Jonathan Gonzalez</span>
        </h1>
        <p className="text-4xl font-semibold text-base-content/80">Front-end Developer & Passionate Designer</p>
        <div className="flex flex-wrap gap-4">
          <PillButton type="button" onClick={onScrollToProjects} size="lg" tone="base">
            Ver proyectos
          </PillButton>
          <PillButton href="mailto:jjgonzalezj0@gmail.com" size="lg" tone="base">
            Escríbeme
          </PillButton>
        </div>
      </div>

      <div className="bubble-cluster" data-animate aria-hidden="true">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
    </section>
  )
}
