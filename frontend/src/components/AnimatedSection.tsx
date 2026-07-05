'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'right' | 'left' | 'scale' | 'fadeIn'
  duration?: number
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(2.5rem)'
      case 'down': return 'translateY(-2.5rem)'
      case 'right': return 'translateX(3.75rem)'
      case 'left': return 'translateX(-3.75rem)'
      case 'scale': return 'scale(0.9)'
      case 'fadeIn': return 'none'
      default: return 'translateY(2.5rem)'
    }
  }

  const getFinalTransform = () => {
    return direction === 'fadeIn' ? 'none' : 'translateY(0) translateX(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
