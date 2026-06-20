'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

function calcPercentOff(oldPrice: string, newPrice: string): string {
  const old = parseFloat(oldPrice.replace('€', ''))
  const curr = parseFloat(newPrice.replace('€', ''))
  const off = Math.round(((old - curr) / old) * 100)
  return `-${off}%`
}

// Original books list with pricing data
const originalBooks = [
  { src: '/book1.png', price: '€49.99', oldPrice: '€89.99', title: 'Business Analytics' },
  { src: '/book2.png', price: '€39.99', oldPrice: '€69.99', title: 'Business Analysis Fourth Edition' },
  { src: '/book3.png', price: '€59.99', oldPrice: '€109.99', title: 'Business Analysis Lifetime Access' },
  { src: '/book4.png', price: '€29.99', oldPrice: '€49.99', title: 'Business Analysis Yearly Access' },
  { src: '/book5.png', price: '€79.99', oldPrice: '€129.99', title: 'Foundation to Business Analysis' }
].map(b => ({ ...b, percentOff: calcPercentOff(b.oldPrice, b.price) }))
// Tripled for infinite smooth scroll buffer
const books = [...originalBooks, ...originalBooks, ...originalBooks]

export default function BannerSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    let animationId: number
    const el = scrollRef.current
    if (!el) return

    // Start in the middle third so users can immediately drag left infinitely
    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3
    }

    const scroll = () => {
      // Only auto-scroll if we're not interacting with the grid
      if (!isPausedRef.current && !isDragging) {
        // If we've scrolled past 2/3 of the container, snap back to 1/3 (seamless loop forward)
        if (el.scrollLeft >= (el.scrollWidth * 2) / 3) {
          el.scrollLeft -= el.scrollWidth / 3
        } 
        // If we've scrolled back to 0, snap forward to 1/3 (seamless loop backward)
        else if (el.scrollLeft <= 0) {
          el.scrollLeft += el.scrollWidth / 3
        } else {
          el.scrollLeft += 0.5 // smoother, slower scroll speed
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging])

  // Mouse event handlers for drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    isPausedRef.current = true
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    isPausedRef.current = false
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    isPausedRef.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  // Navigation Arrow Handlers
  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden w-full py-16 bg-transparent">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 w-full">
          
          {/* Top: Interactive Scrollable Book Grid */}
          <div 
            className="flex-1 w-full relative group overflow-hidden"
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            {/* Left Nav Arrow */}
            <button 
              onClick={() => scrollBy(-300)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 m-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-lg text-[var(--text-core)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[var(--brand-gold)]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className={`flex gap-6 overflow-x-hidden py-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ scrollBehavior: isDragging ? 'auto' : 'auto' }}
            >
              {books.map((book, i) => (
                <div key={`${book.src}-${i}`} className="flex-shrink-0 flex flex-col items-center group/book">
                  <div
                    className="relative w-[140px] sm:w-[160px] md:w-[190px] aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 pointer-events-none group-hover/book:scale-[1.02]"
                    style={{
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      backgroundColor: 'var(--bg-card)'
                    }}
                  >
                    <Image
                      src={book.src}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 190px"
                      className="object-cover"
                      draggable={false}
                    />
                    {/* Discount Pricing Badge */}
                    <div className="absolute top-3 right-3 bg-red-600 text-white font-bold px-2 py-1 rounded-lg shadow-xl z-10 flex flex-col items-center border border-red-500 backdrop-blur-sm bg-opacity-90">
                      <span className="line-through text-[0.65rem] leading-none opacity-80 mb-0.5">{book.oldPrice}</span>
                      <span className="text-sm leading-none">{book.price}</span>
                    </div>
                  </div>
                  {/* Book Title */}
                  <div className="mt-4 w-[140px] sm:w-[160px] md:w-[190px] text-center px-1">
                    <p className="text-sm md:text-base font-semibold text-[color:var(--text-core)] leading-snug">{book.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Nav Arrow */}
            <button 
              onClick={() => scrollBy(300)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 m-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-lg text-[var(--text-core)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[var(--brand-gold)]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fading Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 pointer-events-none bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-12 pointer-events-none bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />
          </div>

          {/* Get the Strategy Guide */}
          <AnimatedSection delay={200}>
            <div className="w-full text-center pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="max-w-3xl mx-auto">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--text-core)' }}>
                  Get the{' '}
                  <span style={{ color: 'var(--brand-gold)' }}>Business Analysis Strategy Guide</span>
                </h3>
                <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  A free, step-by-step roadmap designed for busy professionals preparing for BCS certification.
                  Know exactly what to study, when, and how — so you pass with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-gold px-10 py-4 text-base font-bold inline-block text-center hover:scale-105 transition-transform">
                    Download Free Guide
                  </Link>
                  <Link href="/courses" className="btn-outline-gold px-10 py-4 text-base font-bold inline-block text-center hover:scale-105 transition-transform">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
