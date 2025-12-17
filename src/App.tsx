import { useEffect } from 'react'
import './App.css'

import { LavaBackground } from '@/components/layout/LavaBackground'
import { LavaDefs } from '@/components/layout/LavaDefs'
import { Hero } from '@/components/sections/Hero'
import { Education } from '@/components/sections/Education'
import { About } from '@/components/sections/About'
import { TechStack } from '@/components/sections/TechStack'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

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
} from '@/data'
import { useRevealAnimation } from '@/hooks/useRevealAnimation'

function App() {
  // Define un único tema DaisyUI fijo para toda la app.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'lumina')
  }, [])

  useRevealAnimation()

  const scrollToSection = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const gradientAccent = 'from-brand-primary via-brand-secondary to-brand-accent'

  return (
    <div className="theme-shell min-h-screen text-base-content transition-colors duration-500 ease-in-out">
      <LavaBackground />
      <LavaDefs />

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
