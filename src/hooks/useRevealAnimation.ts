import { useEffect } from 'react'

export function useRevealAnimation() {
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
}
