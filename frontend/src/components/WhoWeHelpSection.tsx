'use client'

import SafeImage from '@/components/SafeImage'

const audiences = [
  'Complete beginners',
  'Career changers',
  'Busy 9\u20135 professionals',
  'Parents with limited study time',
  'People preparing for BCS Business Analysis exams',
  'People who feel overwhelmed by big textbooks',
  'Visual learners',
  'Professionals who want practical BA confidence',
]

const mosaicImages = [
  { src: '/Complete beginners/CB-1.jpg', span: 2 },
  { src: '/Career changers/CC-1.jpg', span: 1 },
  { src: '/Visual learners/VL-1.jpg', span: 1 },
  { src: '/Busy 9\u20135 professionals/B9-5 P1 (1).jpg', span: 1 },
  { src: '/Parents with limited study time/PWLST-1 (1).jpg', span: 1 },
]

export default function WhoWeHelpSection() {
  return (
    <section className="py-16 lg:py-20 px-[5%]" style={{ backgroundColor: '#F3EFE3' }}>
      <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-8" style={{ color: 'var(--navy-dark)' }}>
            Who Zeelin Academy <span style={{ color: 'var(--dark-gold)' }}>helps</span>
          </h2>
          <ul style={{ listStyle: 'none' }}>
            {audiences.map((item) => (
              <li key={item} className="text-base sm:text-lg mb-[18px]" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  color: 'var(--dark-gold)',
                  fontWeight: 'bold',
                  border: '2px solid var(--dark-gold)',
                  width: '26px',
                  height: '26px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-[15px]">
          {mosaicImages.map((img, i) => (
            <div key={i} className={img.span === 2 ? 'col-span-2' : 'col-span-1'}>
              <div className="relative w-full h-[120px] sm:h-[160px] md:h-[200px] rounded-[6px] overflow-hidden">
                <SafeImage src={img.src} alt="" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
