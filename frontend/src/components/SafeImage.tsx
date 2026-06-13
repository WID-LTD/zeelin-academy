'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageOff } from 'lucide-react'

export default function SafeImage({ src, alt, className, fill, width, height, style }: { src: string; alt: string; className?: string; fill?: boolean; width?: number; height?: number; style?: React.CSSProperties }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={className} style={{ backgroundColor: 'var(--bg-secondary)', ...style }}>
        <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
          <ImageOff className="w-12 h-12" />
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
