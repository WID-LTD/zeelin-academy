'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SafeImage({ src, alt, className, fill, width, height, style }: { src: string; alt: string; className?: string; fill?: boolean; width?: number; height?: number; style?: React.CSSProperties }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={className} style={{ backgroundColor: 'var(--bg-secondary)', ...style }}>
        <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  )
}
