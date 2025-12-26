import type { TechCategory, TechBadge, Experience, EducationItem, Project, SocialLink } from '@/types'
import { LinkedInIcon, GitHubIcon } from '@/components/icons'

export const techCategories: TechCategory[] = [
  {
    title: 'Lenguajes & UI',
    description: 'HTML5, CSS3 y los frameworks modernos que uso para crear interfaces accesibles y responsivas.',
    skills: ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'React', 'Vue'],
    gradient: 'from-cyan-500/70 via-blue-400/40 to-purple-400/30',
  },
  {
    title: 'Frontend móvil',
    description: 'Experiencias nativas e híbridas con React Native, Flutter y Angular para productos multidispositivo.',
    skills: ['React Native', 'Flutter', 'Angular', 'Astro', 'Tailwind CSS', 'Design Systems'],
    gradient: 'from-pink-500/70 via-rose-400/40 to-orange-400/30',
  },
  {
    title: 'Backend & Ops',
    description: 'Servicios Node.js conectados a MongoDB y MySQL, automatizados con CI/CD y gestionados con buenas prácticas.',
    skills: ['Node JS', 'MongoDB', 'MySQL', 'Python', 'CI/CD', 'Git'],
    gradient: 'from-green-500/70 via-emerald-400/40 to-teal-400/30',
  },
]

export const experienceIcons = ['🚀', '📦', '🛠️']
export const projectIcons = ['⚡', '🌀', '🎨']
export const pokeballLogo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'

export const techMarquee: TechBadge[] = [
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
  { label: 'Next.js', meta: 'Framework', color: '#000000', logo: 'nextdotjs' },
]

export const experiences: Experience[] = [
  {
    timeframe: '2024 – Presente',
    role: 'Fullstack Developer',
    place: 'N1 Capital',
    impact:
      'Construyo y optimizo plataformas internas de principio a fin. Implementé pipelines CI/CD que redujeron errores de despliegue y aceleraron un 70 % los flujos internos.',
  },
  {
    timeframe: '2022 – 2023',
    role: 'Frontend Engineer',
    place: 'Mino Logistics',
    impact:
      'Diseñé la aplicación logística, integré servicios externos para automatizar procesos y reduje tiempos críticos de 4 s a 1,5 s mediante refactorizaciones y testing continuo.',
  },
]

export const education: EducationItem[] = [
  {
    year: '2021',
    title: 'Licenciatura en Informatica',
    institution: 'Universidad Autónoma de Baja California',
    details: 'Formación en algoritmos, patrones de diseño y desarrollo de software empresarial.',
  },
]

export const projects: Project[] = [
  {
    title: 'Pokedex Insights',
    description: 'Explorador de Pokémon con filtros avanzados, animaciones suaves y sincronización en tiempo real.',
    stack: ['Vue', 'Pinia', 'PokéAPI', 'GSAP'],
    year: '2023',
    url: 'https://pokedex-ruby-kappa.vercel.app',
    repo: 'https://github.com/Tvkaes/Pokedex',
    gradient: 'from-red-500/70 via-rose-400/40 to-yellow-400/30',
  },
  {
    title: 'Three.js Environment',
    description: 'Experimento inmersivo con shaders personalizados, interacción vía audio y escenas WebGL responsivas.',
    stack: ['Three.js', 'GLSL', 'GSAP', 'WebGL'],
    year: '2025',
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

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tvkaes', Icon: LinkedInIcon },
  { label: 'GitHub', url: 'https://github.com/Tvkaes', Icon: GitHubIcon },
]
