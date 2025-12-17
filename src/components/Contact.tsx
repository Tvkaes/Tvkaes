import type { SocialLink } from '../types'

interface ContactProps {
  socialLinks: SocialLink[]
}

export function Contact({ socialLinks }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-32 space-y-10">
      <div className="grid gap-8 rounded-[40px] border border-base-300/40 bg-base-100/80 p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5" data-animate>
          <p className="text-[11px] uppercase tracking-[0.5em] text-primary">Contacto</p>
          <h2 className="font-display text-4xl">Construyamos un producto extraordinario</h2>
          <p className="text-base-content/80">
            Disponible para posiciones full-time o auditorías de rendimiento/accesibilidad.
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
        <div className="space-y-5 rounded-[30px] border border-primary/30 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 p-6" data-animate>
          <p className="text-[11px] uppercase tracking-[0.5em] text-base-content/70">Escríbeme directo</p>
          <p className="text-base-content/80">
            Prefiero el contacto cercano: mándame un correo con los detalles de tu proyecto. Respondo en menos de 24h hábiles.
          </p>
          <a
            href="mailto:jjgonzalezj0@gmail.com"
            className="btn btn-primary btn-block rounded-2xl shadow-glow-sm transition hover:shadow-glow-md"
          >
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  )
}
