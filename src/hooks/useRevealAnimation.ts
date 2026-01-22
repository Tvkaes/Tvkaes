import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealAnimation() {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>('[data-animate]')

    const ctx = gsap.context(() => {
      gsap.set(elements, { autoAlpha: 0, y: 40 })

      elements.forEach((element) => {
        const delay = parseFloat(element.dataset.animateDelay ?? '0')
        const duration = parseFloat(element.dataset.animateDuration ?? '0.85')

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])
}
