import type { TechCategory, TechBadge } from '../types'

interface TechStackProps {
  categories: TechCategory[]
  marquee: TechBadge[]
}

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { h: 0, s: 0, l: 0 }

  const r = parseInt(result[1], 16) / 255
  const g = parseInt(result[2], 16) / 255
  const b = parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 }
}

function generateGradient(color: string): string {
  const { h, s } = hexToHsl(color)
  return `linear-gradient(135deg, hsla(${h}, ${s}%, 60%, 0.15) 0%, hsla(${h}, ${s}%, 40%, 0.08) 100%)`
}

export function TechStack({ categories, marquee }: TechStackProps) {
  return (
    <section id="tech" className="scroll-mt-32 space-y-10">
      <header className="space-y-3" data-animate>
        <p className="text-[11px] uppercase tracking-[0.5em] text-secondary">Tech skills</p>
        <h2 className="font-display text-4xl">Frameworks, datos y sistemas que domino</h2>
        <p className="text-base-content/80">
          Selecciono la herramienta adecuada para cada etapa: descubrimiento, prototipado, implementacin y medicin.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="relative overflow-hidden rounded-[32px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth transition hover:-translate-y-1 hover:border-primary/50"
            data-animate
          >
            <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-40 blur-3xl`} aria-hidden="true" />
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary/80">Focus</span>
            </div>
            <p className="mt-4 text-sm text-base-content/75">{category.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-outline border-base-300/40 bg-base-200/60 px-3 py-2 text-[10px] uppercase tracking-[0.35em]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="tech-marquee p-12" data-animate>
        <div className="tech-track">
          {[...marquee, ...marquee].map((badge, index) => (
            <span
              key={`${badge.label}-${index}`}
              className="tech-pill flex items-center gap-3 rounded-full border px-5 py-2 text-sm text-base-content/80"
              style={{
                background: generateGradient(badge.color),
                borderColor: `${badge.color}30`,
              }}
            >
              <img
                src={`https://cdn.simpleicons.org/${badge.logo}/${badge.color.replace('#', '')}`}
                alt=""
                className="h-5 w-5"
                loading="lazy"
              />
              {badge.label}
              <span className="text-[11px] uppercase tracking-[0.4em]" style={{ color: badge.color }}>{badge.meta}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
