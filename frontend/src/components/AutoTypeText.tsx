'use client'

import { useEffect, useState } from 'react'

export default function AutoTypeText({ words, className }: { words: string[], className?: string }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index] || ''
    if (subIndex === current.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 2000)
      return
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? 40 : 100)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words])

  return (
    <span className={`typing-cursor ${className || ''}`}>
      {words[index]?.substring(0, subIndex) || ''}
    </span>
  )
}