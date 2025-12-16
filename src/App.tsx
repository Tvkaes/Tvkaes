import type { FormEvent, ReactElement } from 'react'
import { useEffect, useState } from 'react'
import './App.css'

// ==== Tipos base para mantener el código auto-documentado ====
type TechCategory = { title: string; description: string; skills: string[] }
type TechBadge = { label: string; meta: string; color: string; logo: string }
type Experience = { timeframe: string; role: string; place: string; impact: string }
type EducationItem = { year: string; title: string; institution: string; details: string }
type Project = {
  title: string
  description: string
  stack: string[]
  year: string
  url: string
  gradient: string
  repo?: string
}
type SocialLink = { label: string; url: string; Icon: () => ReactElement }
type FormFields = { name: string; email: string; message: string }

// ==== Iconografía SVG inline para evitar dependencias externas ====
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0A66C2]" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-.25 6.5H7.7v10H4.73Zm6.25 0h2.64v1.36h.04c.37-.7 1.27-1.44 2.62-1.44 2.8 0 3.32 1.84 3.32 4.23V20h-2.97v-4.83c0-1.15-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56V20H11Z"
    />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12a10.5 10.5 0 0 0 7.17 10 .78.78 0 0 0 1.03-.74v-2.59c-2.91.63-3.53-1.4-3.53-1.4-.53-1.32-1.3-1.67-1.3-1.67-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.4.96a2.58 2.58 0 0 1 .77-1.63c-2.33-.26-4.78-1.17-4.78-5.19 0-1.15.41-2.1 1.09-2.84-.11-.27-.47-1.37.1-2.84 0 0 .89-.29 2.9 1.08a9.77 9.77 0 0 1 5.28 0c2.01-1.37 2.9-1.08 2.9-1.08.57 1.47.21 2.57.1 2.84.68.74 1.09 1.69 1.09 2.84 0 4.04-2.46 4.92-4.81 5.18.38.33.72.97.72 1.98v2.93c0 .43.27.83.68.97A10.5 10.5 0 0 0 22.5 12c0-5.79-4.71-10.5-10.5-10.5Z"
    />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5c-.854 0-1.683.122-2.465.35.602.774 1.116 1.8 1.5 3 .182.561.338 1.158.462 1.776h4.704a8.255 8.255 0 0 0-4.201-5.126Zm5.673 6.876A7.993 7.993 0 0 0 18.75 12c0 .874-.14 1.716-.398 2.507h-4.657c.089-.818.135-1.664.135-2.507 0-.861-.047-1.706-.139-2.418h4.082Zm-6.09 0H6.417a8.253 8.253 0 0 0 0 4.248h5.166a24.887 24.887 0 0 0 .158-2.124c0-.725-.047-1.46-.158-2.124Zm.109 5.742h-4.704a8.255 8.255 0 0 0 4.2 5.126 8.263 8.263 0 0 0 2.465-.35c-.602-.774-1.116-1.8-1.5-3a20.69 20.69 0 0 1-.461-1.776Zm1.165 0h4.083a8.006 8.006 0 0 0-.806 2.624A8.022 8.022 0 0 1 12 19.5c.854 0 1.683-.122 2.465-.35-.602-.774-1.116-1.8-1.5-3a20.698 20.698 0 0 1-.462-1.782Z"
    />
  </svg>
)

// ==== Datos de contenido para render dinámico ====
const techCategories: TechCategory[] = [
  {
    title: 'Lenguajes & UI',
    description: 'HTML5, CSS3 y los frameworks modernos que uso para crear interfaces accesibles y responsivas.',
    skills: ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'React', 'Vue'],
  },
  {
    title: 'Frontend móvil',
    description: 'Experiencias nativas e híbridas con React Native, Flutter y Angular para productos multi-dispositivo.',
    skills: ['React Native', 'Flutter', 'Angular', 'Astro', 'Tailwind CSS', 'Design Systems'],
  },
  {
    title: 'Backend & Ops',
    description: 'Servicios Node.js conectados a MongoDB/MySQL, automatizados con CI/CD y controlados con buenas prácticas.',
    skills: ['Node JS', 'MongoDB', 'MySQL', 'Python', 'CI/CD', 'Git'],
  },
]

const experienceIcons = ['🚀', '📦', '🛠️']
const projectIcons = ['⚡', '🌀', '🎨']
const pokeballLogo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'

const techMarquee: TechBadge[] = [
  { label: 'HTML 5', meta: 'Markup', color: '#E34F26', logo: 'html5' },
  { label: 'CSS 3', meta: 'Styles', color: '#1572B6', logo: 'css' },
  { label: 'JavaScript', meta: 'Lenguaje', color: '#F7DF1E', logo: 'javascript' },
  { label: 'TypeScript', meta: 'DX', color: '#3178C6', logo: 'typescript' },
  { label: 'Python', meta: 'Automation', color: '#3776AB', logo: 'python' },
  { label: 'Java', meta: 'Backends', color: '#ED8B00', logo: 'openjdk' },
  { label: 'C#', meta: 'Enterprise', color: '#512BD4', logo: 'dotnet' },
  { label: 'C++', meta: 'Low level', color: '#00599C', logo: 'cplusplus' },
  { label: 'React', meta: 'SPA', color: '#61DAFB', logo: 'react' },
  { label: 'React Native', meta: 'Mobile', color: '#61DAFB', logo: 'react' },
  { label: 'Vue', meta: 'SPAs', color: '#4FC08D', logo: 'vuedotjs' },
  { label: 'Angular', meta: 'Framework', color: '#DD0031', logo: 'angular' },
  { label: 'Flutter', meta: 'Apps', color: '#02569B', logo: 'flutter' },
  { label: 'Astro', meta: 'SSR', color: '#BC52EE', logo: 'astro' },
  { label: 'Tailwind CSS', meta: 'Design System', color: '#06B6D4', logo: 'tailwindcss' },
  { label: 'Node JS', meta: 'APIs', color: '#339933', logo: 'nodedotjs' },
  { label: 'NestJS', meta: 'APIs', color: '#E0234E', logo: 'nestjs' },
  { label: 'MongoDB', meta: 'Database', color: '#47A248', logo: 'mongodb' },
  { label: 'MySQL', meta: 'Relacional', color: '#4479A1', logo: 'mysql' },
  { label: 'Git', meta: 'Versioning', color: '#F05032', logo: 'git' },
  { label: 'CI/CD', meta: 'Ops', color: '#2088FF', logo: 'githubactions' },
]

const experiences: Experience[] = [
  {
    timeframe: '2024 – Presente',
    role: 'Fullstack Developer',
    place: 'N1 Capital',
    impact:
      'Construyo y optimizo plataformas internas end-to-end. Implementé pipelines CI/CD que redujeron errores de despliegue y aceleraron 70% los flujos internos.',
  },
  {
    timeframe: '2022 – 2023',
    role: 'Frontend Engineer',
    place: 'Mino Logistics',
    impact:
      'Diseñé la aplicación logística, integré servicios externos para automatizar procesos y reduje tiempos críticos de 4s a 1.5s mediante refactors y testing continuo.',
  },
]

const education: EducationItem[] = [
  {
    year: '2021',
    title: 'Licenciatura en Ciencias Computacionales',
    institution: 'Universidad Autónoma de Baja California',
    details: 'Formación en algoritmos, patrones de diseño y desarrollo de software empresarial.',
  },
]

const projects: Project[] = [
  {
    title: 'Pokedex Insights',
    description: 'Explorador de Pokémon con filtros avanzados, animaciones suaves y sincronización en tiempo real.',
    stack: ['Vue', 'Pinia', 'PokéAPI', 'GSAP'],
    year: '2023',
    url: 'https://pokedex-tvkaes.vercel.app',
    repo: 'https://github.com/Tvkaes/Pokedex',
    gradient: 'from-red-500/70 via-rose-400/40 to-yellow-400/30',
  },
  {
    title: 'Three.js Environment',
    description: 'Experimento inmersivo con shaders personalizados, interacción via audio y escenas WebGL responsivas.',
    stack: ['Three.js', 'GLSL', 'GSAP', 'Vite'],
    year: '2022',
    url: 'https://tvkaes.github.io/i-have-a-dream/',
    repo: 'https://github.com/Tvkaes/i-have-a-dream',
    gradient: 'from-indigo-500/70 via-sky-400/40 to-emerald-400/30',
  },
  {
    title: 'ClimateFlow (Coming Soon)',
    description: 'Web app del clima impulsada por Astro con datos en tiempo real y visuales dinámicos.',
    stack: ['Astro', 'TypeScript', 'Tailwind', 'Weather API'],
    year: '2025',
    url: '#',
    gradient: 'from-blue-500/60 via-cyan-400/40 to-emerald-300/30',
  },
]

const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tvkaes', Icon: LinkedInIcon },
  { label: 'GitHub', url: 'https://github.com', Icon: GitHubIcon },
]


function App() {
  const [formData, setFormData] = useState<FormFields>({ name: '', email: '', message: '' })
  const [formFeedback, setFormFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Define un único tema DaisyUI fijo para toda la app.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nocturne')
  }, [])

  // IntersectionObserver adicional para disparar animaciones on-scroll sólo una vez.
  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>('[data-animate]')
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-slide')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealNodes.forEach((node) => revealObserver.observe(node))
    return () => revealObserver.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleInputChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormFeedback({ type: 'error', message: 'Por favor completa todos los campos antes de enviar.' })
      return
    }
    setFormFeedback({ type: 'success', message: 'Mensaje enviado (simulado). Responderé en menos de 24h.' })
    setFormData({ name: '', email: '', message: '' })
  }

  const gradientAccent = 'from-brand-primary via-brand-secondary to-brand-accent'

  return (
    <div className="theme-shell min-h-screen text-base-content transition-colors duration-500 ease-in-out">
      {/* BubbleBackground removido - solo se usa bubble-cluster en hero */}
      {/* Capas de fondo (radiales + textura) para generar identidad visual */}
      <div className="background-layers" aria-hidden="true" />
      <svg className="lava-svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="lava-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-0 md:pt-4">
        {/* HERO */}
        <section id="hero" className="grid scroll-mt-32 gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8" data-animate>
            <p className="inline-flex items-center gap-2 rounded-full border border-base-300/40 bg-base-100/60 px-5 py-2 text-[11px] uppercase tracking-[0.5em] text-base-content/70">
              Hi there!
            </p>
            <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
              I’m <span className={`bg-gradient-to-r ${gradientAccent} bg-clip-text text-transparent`}>Jonathan Gonzalez</span>
            </h1>
            <p className="text-4xl font-semibold text-base-content/80">Front-end Developer & Passionate Designer</p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
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

        {/* EDUCATION */}
        <section className="scroll-mt-32 space-y-8">
          <header className="space-y-2" data-animate>
            <p className="text-[11px] uppercase tracking-[0.5em] text-secondary">Educación</p>
            <h2 className="font-display text-3xl">Bases académicas</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2" data-animate>
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth"
              >
                <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.institution}</p>
                <p className="mt-3 text-base-content/80 text-sm">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
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
            <div className="rounded-[36px] border border-base-300/40 bg-base-100/80 p-8" data-animate>
              <p className="text-[11px] uppercase tracking-[0.4em] text-base-content/60">Skills clave</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  'Clean code',
                  'CI/CD',
                  'Optimización de rendimiento',
                  'Patrones MVC/Observer',
                  'UI/UX accesible',
                  'Scrum / Kanban',
                ].map((skill) => (
                  <span key={skill} className="badge badge-outline border-base-300/40 bg-base-200/60 px-4 py-3 text-[10px] uppercase tracking-[0.4em]">
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

        {/* TECH STACK */}
        <section id="tech" className="scroll-mt-32 space-y-10">
          <header className="space-y-3" data-animate>
            <p className="text-[11px] uppercase tracking-[0.5em] text-secondary">Tech skills</p>
            <h2 className="font-display text-4xl">Frameworks, datos y sistemas que domino</h2>
            <p className="text-base-content/80">
              Selecciono la herramienta adecuada para cada etapa: descubrimiento, prototipado, implementacin y medicin.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {techCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-[32px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth transition hover:-translate-y-1 hover:border-primary/50"
                data-animate
              >
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

          <div className="tech-marquee rounded-[40px] border border-base-300/30 bg-base-100/80 p-6" data-animate>
            <div className="tech-track">
              {[...techMarquee, ...techMarquee].map((badge, index) => (
                <span key={`${badge.label}-${index}`} className="tech-pill flex items-center gap-3 rounded-full border border-base-300/30 bg-base-200/70 px-5 py-2 text-sm text-base-content/80">
                  <img
                    src={`https://cdn.simpleicons.org/${badge.logo}/${badge.color.replace('#', '')}`}
                    alt=""
                    className="h-5 w-5"
                    loading="lazy"
                  />
                  {badge.label}
                  <span className="text-[11px] uppercase tracking-[0.4em] text-primary/80">{badge.meta}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="scroll-mt-32 space-y-10">
          <header className="space-y-3" data-animate>
            <p className="text-[11px] uppercase tracking-[0.5em] text-accent">Experiencia</p>
            <h2 className="font-display text-4xl">Trayectoria reciente</h2>
            <p className="text-base-content/80">
              Lanzamientos end-to-end, optimización de flujos internos y mejoras tangibles en performance para N1 Capital y
              Mino Logistics.
            </p>
          </header>
          <div className="experience-grid grid gap-6 md:grid-cols-2" data-animate>
            {experiences.map((exp, index) => (
              <article
                key={exp.timeframe}
                className="group relative overflow-hidden rounded-[28px] border border-base-300/30 bg-base-100/80 p-6 shadow-depth transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
                  <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/30" />
                </div>
                <div className="relative flex items-center justify-between">
                  <span className="text-2xl" aria-hidden="true">
                    {experienceIcons[index % experienceIcons.length]}
                  </span>
                  <span className="rounded-full bg-base-200/80 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-base-content/60">
                    {exp.timeframe}
                  </span>
                </div>
                <div className="relative mt-4 space-y-1">
                  <h3 className="text-xl font-semibold text-base-content">{exp.role}</h3>
                  <p className="text-sm text-base-content/60">{exp.place}</p>
                </div>
                <p className="relative mt-4 text-base-content/80">{exp.impact}</p>
                <div className="relative mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-base-content/60">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary/70" />
                    Impacto
                  </span>
                  <span className="h-px flex-1 bg-base-300/50" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-32 space-y-10">
          <header className="space-y-3" data-animate>
            <p className="text-[11px] uppercase tracking-[0.5em] text-primary">Portafolio selecto</p>
            <h2 className="font-display text-4xl">Experiencias recientes</h2>
            <p className="text-base-content/80">Cards tipo bento con profundidad, gradientes adaptables y microinteracciones.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[32px] border border-base-300/40 bg-base-200/40 p-6 shadow-depth transition hover:-translate-y-2 hover:border-primary/50"
                data-animate
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 blur-3xl`} aria-hidden="true" />
                <div className="relative flex items-center justify-between">
                  <span className="text-2xl" aria-hidden="true">
                    {project.title.toLowerCase().includes('pokedex') ? (
                      <img src={pokeballLogo} alt="" className="h-7 w-7 object-contain drop-shadow-[0_4px_12px_rgba(255,0,0,0.35)]" />
                    ) : (
                      projectIcons[index % projectIcons.length]
                    )}
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
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-32 space-y-10">
          <div className="grid gap-8 rounded-[40px] border border-base-300/40 bg-base-100/80 p-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5" data-animate>
              <p className="text-[11px] uppercase tracking-[0.5em] text-primary">Contacto</p>
              <h2 className="font-display text-4xl">Construyamos un producto extraordinario</h2>
              <p className="text-base-content/80">
                Disponible para posiciones full-time, consultorías o auditorías de rendimiento/accesibilidad.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm gap-2 rounded-full border border-base-300/50 bg-base-100/70 text-[10px] uppercase tracking-[0.4em]"
                  >
                    <link.Icon />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-6 rounded-[30px] border border-base-300/40 bg-base-200/60 p-6" onSubmit={handleSubmit} data-animate>
              <div className="form-control flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-[11px] uppercase tracking-[0.4em] text-base-content/70">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="input input-bordered rounded-2xl border-base-300/50 bg-base-100/80"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(event) => handleInputChange('name', event.target.value)}
                  required
                />
              </div>
              <div className="form-control flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-[11px] uppercase tracking-[0.4em] text-base-content/70">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="input input-bordered rounded-2xl border-base-300/50 bg-base-100/80"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={(event) => handleInputChange('email', event.target.value)}
                  required
                />
              </div>
              <div className="form-control flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-[11px] uppercase tracking-[0.4em] text-base-content/70">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  className="textarea textarea-bordered min-h-[140px] rounded-2xl border-base-300/50 bg-base-100/80"
                  placeholder="Cuéntame sobre tu proyecto"
                  value={formData.message}
                  onChange={(event) => handleInputChange('message', event.target.value)}
                  required
                />
              </div>
              {formFeedback && (
                <p role="status" aria-live="polite" className={`text-sm ${formFeedback.type === 'success' ? 'text-success' : 'text-error'}`}>
                  {formFeedback.message}
                </p>
              )}
              <button type="submit" className="btn btn-primary btn-block rounded-2xl shadow-glow-sm transition hover:shadow-glow-md">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-[11px] uppercase tracking-[0.4em] text-base-content/50">
        <div className="border-top border-base-300/40 pt-6">
          <p>© {new Date().getFullYear()} Jonathan González — Portafolio Experimental</p>
          <p className="mt-2">React · Tailwind · DaisyUI · Animaciones personalizadas · 100% Lighthouse ready</p>
        </div>
      </footer>
    </div>
  )
}

export default App
