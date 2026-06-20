'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const books = [
  { src: '/book1.png', title: 'Business Analytics', author: 'Camm, Cochran, Fry, Ohlmann' },
  { src: '/book2.png', title: 'Business Analysis for Practitioners', author: 'PMI' },
  { src: '/book3.png', title: 'Business Analysis: Fourth Edition', author: 'Debra Paul and James Cadle' }
]

export default function AutoScrollBooksGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId: number
    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      } else {
        el.scrollLeft += 0.5
      }
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={scrollRef} className="flex gap-6 overflow-x-hidden">
      {[...books, ...books].map((book, i) => (
        <div key={i} className="group cursor-pointer flex-shrink-0 w-[12.5rem]">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <Image
              src={book.src}
              alt={book.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-sm font-medium" style={{ color: 'var(--text-core)' }}>{book.title}</p>
          <p className="text-xs mt-1 text-muted">{book.author}</p>
        </div>
      ))}
    </div>
  )
}