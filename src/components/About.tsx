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
      <header className="space-y-3" data-animate>
        <p className="text-[11px] uppercase tracking-[0.5em] text-primary">Sobre m</p>
        <h2 className="font-display text-4xl">Arquitecturas slidas con foco en rendimiento</h2>
        <p className="max-w-3xl text-base-content/80">
          Soy una persona de aprendizaje rpido, con una mirada amplia y apasionada por el diseo web y todo lo que pueda
          aprender a su alrededor. Me considero colaborativo y flexible, disfruto trabajar en equipo o de forma
          individual, y busco crecer profesionalmente aportando en proyectos innovadores y retadores. Cuando me desconecto,
          juego voleibol y comparto tiempo con mi familia.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[36px] border border-base-300/40 bg-base-200/40 p-8" data-animate>
          <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">Skills clave</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="badge badge-outline border-base-300/40 bg-base-100/60 px-4 py-3 text-[10px] uppercase tracking-[0.4em]">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[36px] border border-base-300/40 bg-base-200/40 p-8" data-animate>
          <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">Manifiesto</p>
          <ul className="mt-4 space-y-3 text-sm text-base-content/80">
            <li>1. Cada refactor debe venir acompaado de mtricas reales (LCP, TTFB, errores por despliegue).</li>
            <li>2. Los patrones de diseo reducen deuda si se documentan desde la arquitectura.</li>
            <li>3. La accesibilidad y el testing continuo son parte del Definition of Done.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
