'use client'

import { useEffect, useState, useRef } from 'react'

const leftAvatars = [
  { src: '/avatar_1.png', word: 'Our' },
  { src: '/avatar_2.png', word: 'Training' },
  { src: '/avatar_3.png', word: 'Programmes' },
]

const rightAvatars = [
  { src: '/avatar_4.png' },
  { src: '/avatar_5.png' },
  { src: '/avatar_6.png' },
]

type Phase = 'idle' | 'left-in' | 'hold-left' | 'left-out' | 'right-in' | 'hold-right' | 'right-out'

export default function CoursesHero() {
  const [phase, setPhase] = useState<Phase>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          setPhase('left-in')
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase === 'idle') return

    const timings: Record<Phase, number> = {
      idle: 0,
      'left-in': 1200,
      'hold-left': 2500,
      'left-out': 800,
      'right-in': 1200,
      'hold-right': 2500,
      'right-out': 800,
    }

    const nextPhase: Record<Phase, Phase> = {
      idle: 'left-in',
      'left-in': 'hold-left',
      'hold-left': 'left-out',
      'left-out': 'right-in',
      'right-in': 'hold-right',
      'hold-right': 'right-out',
      'right-out': 'left-in',
    }

    const timer = setTimeout(() => {
      setPhase(nextPhase[phase])
    }, timings[phase])

    return () => clearTimeout(timer)
  }, [phase])

  return (
    <section ref={sectionRef} className="pt-16 pb-4 relative overflow-hidden min-h-[45vh] flex items-center"
      style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
      <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center gap-4 md:gap-10 lg:gap-16 xl:gap-24">
          {/* Left Avatars */}
          <div className="flex flex-col gap-4 md:gap-6">
            {leftAvatars.map((avatar, i) => (
              <div key={avatar.word}
                className={`flex items-center gap-3 md:gap-5 transition-all duration-700 ease-out ${
                  phase === 'left-in' || phase === 'hold-left'
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-24'
                }`}
                style={{ transitionDelay: `${i * 250}ms` }}
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shadow-lg flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                  style={{ borderColor: 'var(--brand-gold)' }}>
                  <img src={avatar.src} alt={avatar.word} className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-wide leading-none"
                  style={{ color: 'var(--text-core)' }}>
                  {avatar.word}
                </span>
              </div>
            ))}
          </div>

          {/* Right Avatars */}
          <div className="flex flex-col gap-4 md:gap-6">
            {rightAvatars.map((avatar, i) => (
              <div key={i}
                className={`transition-all duration-700 ease-out ${
                  phase === 'right-in' || phase === 'hold-right'
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-24'
                }`}
                style={{ transitionDelay: `${i * 250}ms` }}
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                  style={{ borderColor: 'var(--brand-gold)' }}>
                  <img src={avatar.src} alt={`Avatar ${i + 4}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
