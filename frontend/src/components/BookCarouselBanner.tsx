'use client'

import SafeImage from './SafeImage'

const books = [
  { src: '/book1.png', title: 'Business Analytics', oldPrice: '€89.99', salePrice: '€49.99' },
  { src: '/book2.png', title: 'Business Analysis Fourth Edition', oldPrice: '€69.99', salePrice: '€39.99' },
  { src: '/book3.png', title: 'Business Analysis Lifetime Access', oldPrice: '€109.99', salePrice: '€59.99' },
  { src: '/book4.png', title: 'Business Analysis Yearly Access', oldPrice: '€49.99', salePrice: '€29.99' },
  { src: '/book5.png', title: 'Foundation to Business Analysis', oldPrice: '€129.99', salePrice: '€79.99' },
]

export default function BookCarouselBanner() {
  return (
    <section className="py-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <style>{`
        @keyframes scroll-books {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track {
          animation: scroll-books 60s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="overflow-x-hidden select-none cursor-grab">
        <div className="flex gap-6 scroll-track" style={{ width: 'fit-content' }}>
          {[...books, ...books].map((book, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center group/book">
              <div
                className="relative w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 pointer-events-none group-hover/book:scale-[1.02]"
                style={{ boxShadow: 'rgba(0,0,0,0.12) 0px 8px 30px', backgroundColor: 'var(--bg-card)' }}
              >
                <SafeImage
                  src={book.src}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute top-3 right-3 text-white font-bold px-2 py-1 rounded-lg shadow-xl z-10 flex flex-col items-center border"
                  style={{ backgroundColor: 'rgba(220,38,38,0.9)', borderColor: 'rgba(220,38,38,0.5)' }}
                >
                  <span className="line-through text-[0.65rem] leading-none opacity-80 mb-0.5">{book.oldPrice}</span>
                  <span className="text-sm leading-none">{book.salePrice}</span>
                </div>
              </div>
              <div className="mt-4 w-[8.75rem] sm:w-[10rem] md:w-[11.875rem] text-center px-1">
                <p className="text-sm md:text-base font-semibold leading-snug" style={{ color: 'var(--text-core)' }}>
                  {book.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
