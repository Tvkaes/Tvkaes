import type { SocialLink } from '../../types'
import { SectionHeader } from '../ui/SectionHeader'
import { IconLink } from '../ui/IconLink'
import { PillButton } from '../ui/PillButton'

interface ContactProps {
  socialLinks: SocialLink[]
}

export function Contact({ socialLinks }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-32 space-y-10">
      <SectionHeader
        label="Contacto"
        labelColor="primary"
        title="Construyamos un producto extraordinario"
        description="Disponible para posiciones full-time o mejoras de rendimiento/accesibilidad."
      />
      <div className="grid gap-8 rounded-[40px] border border-base-300/40 bg-white p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-sm text-base-content/70">
            Charlas, experimentos front-end y avances del portafolio los comparto en mis redes profesionales. Si quieres
            seguir mi trabajo o agendar una llamada rápida, escríbeme por aquí:
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <IconLink key={link.label} href={link.url} label={link.label} Icon={link.Icon} />
            ))}
          </div>
        </div>
        <div className="space-y-5 rounded-[30px] border border-primary/30 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 p-6">
          <p className="text-[11px] uppercase tracking-[0.5em] text-base-content/70">Escríbeme directo</p>
          <p className="text-base-content/80">
            Prefiero el contacto cercano: mándame un correo con los detalles de tu proyecto. Respondo en menos de 24h hábiles.
          </p>
          <PillButton href="mailto:jjgonzalezj0@gmail.com" className="btn-block rounded-2xl" tone="base">
            Enviar correo
          </PillButton>
        </div>
      </div>
    </section>
  )
}
