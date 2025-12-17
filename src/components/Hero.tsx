interface HeroProps {
  gradientAccent: string
  onScrollToProjects: () => void
}

export function Hero({ gradientAccent, onScrollToProjects }: HeroProps) {
  return (
    <section id="hero" className="grid scroll-mt-32 gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8" data-animate>
        <p className="inline-flex items-center gap-2 rounded-full border border-base-300/40 bg-base-100/60 px-5 py-2 text-[11px] uppercase tracking-[0.5em] text-base-content/70">
          Hi there!
        </p>
        <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
          I'm <span className={`bg-linear-to-r ${gradientAccent} bg-clip-text text-transparent`}>Jonathan Gonzalez</span>
        </h1>
        <p className="text-4xl font-semibold text-base-content/80">Front-end Developer & Passionate Designer</p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onScrollToProjects}
            className="btn btn-lg rounded-full border-none bg-base-100 px-8 py-4 text-base-content shadow-[0_12px_32px_rgba(3,3,3,0.25)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,212,255,0.35),0_20px_45px_rgba(124,58,237,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="text-[11px] uppercase tracking-[0.4em]">Ver proyectos</span>
          </button>
          <a
            href="mailto:jjgonzalezj0@gmail.com"
            className="btn btn-outline btn-lg rounded-full border-base-300/60 bg-base-100/80 text-[11px] uppercase tracking-[0.4em]"
          >
            Escríbeme
          </a>
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
