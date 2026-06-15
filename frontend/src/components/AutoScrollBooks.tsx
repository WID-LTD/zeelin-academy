'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const books = ['/book1.jpg', '/book2.jpg', '/book3.jpg', '/book4.jpg']

export default function AutoScrollBooks() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % books.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {books.map((src, i) => (
        <div
          key={src}
          className="absolute transition-all duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
            width: '70%',
            height: '80%'
          }}
        >
          <Image src={src} alt={`Book ${i + 1}`} fill className="object-contain" />
        </div>
      ))}
      <div className="absolute bottom-4 flex gap-2 z-10">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: i === current ? 'var(--brand-gold)' : 'var(--text-muted)',
              width: i === current ? 8 : 6,
              height: i === current ? 8 : 6
            }}
          />
        ))}
      </div>
    </div>
  )
}