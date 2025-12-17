export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-[11px] uppercase tracking-[0.4em] text-base-content/50">
      <div className="border-top border-base-300/40 pt-6">
        <p>© {new Date().getFullYear()} Jonathan González — Portafolio Experimental</p>
        <p className="mt-2">React · Tailwind · DaisyUI · Animaciones personalizadas · 100% Lighthouse ready</p>
      </div>
    </footer>
  )
}
