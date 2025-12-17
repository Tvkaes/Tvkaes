import { useEffect } from 'react'
import './App.css'

import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { About } from './components/About'
import { TechStack } from './components/TechStack'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import {
  techCategories,
  techMarquee,
  experiences,
  experienceIcons,
  education,
  projects,
  projectIcons,
  pokeballLogo,
  socialLinks,
} from './data'

function App() {
  // Define un único tema DaisyUI fijo para toda la app.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'lumina')
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
        <Hero gradientAccent={gradientAccent} onScrollToProjects={() => scrollToSection('projects')} />
        <Education items={education} />
        <About />
        <TechStack categories={techCategories} marquee={techMarquee} />
        <Experience items={experiences} icons={experienceIcons} />
        <Projects items={projects} icons={projectIcons} pokeballLogo={pokeballLogo} />
        <Contact socialLinks={socialLinks} />
      </main>

      <Footer />
    </div>
  )
}

export default App
