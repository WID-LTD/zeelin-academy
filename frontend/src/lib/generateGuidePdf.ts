import pdfMake from '@/lib/pdfMakeSetup'
import { COLORS, FONT_SIZES } from '@/lib/pdfMakeSetup'
import bookGuides from '@/lib/bookGuides'

interface GuideContent {
  title: string
  subtitle: string
  sections: { heading: string; content: string[] }[]
}

function parseOutlineToSections(outline: string): { heading: string; content: string[] }[] {
  const lines = outline.split('\n').filter((l) => l.trim())
  const sections: { heading: string; content: string[] }[] = []
  let current: { heading: string; content: string[] } | null = null

  for (const line of lines) {
    const hMatch = line.match(/^#{1,3}\s+(.+)/)
    if (hMatch) {
      if (current) sections.push(current)
      current = { heading: hMatch[1].replace(/\*\*/g, ''), content: [] }
      continue
    }
    if (current) {
      const cleaned = line.replace(/^\d+\.\s*/, '').replace(/^\-\s*/, '').replace(/\*\*/g, '').trim()
      if (cleaned) current.content.push(cleaned)
    }
  }
  if (current) sections.push(current)
  return sections
}

function buildHeader() {
  return [
    { text: 'ZEELIN ACADEMY', style: 'headerBrand' },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1.5, lineColor: COLORS.gold }] },
    { text: '', margin: [0, 8, 0, 0] },
  ]
}

function buildFooter(currentPage: number, pageCount: number) {
  return [
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.5, lineColor: COLORS.goldBorder }] },
    {
      columns: [
        { text: `\u00A9 ${new Date().getFullYear()} Zeelin Academy. All rights reserved.`, style: 'footerText' },
        { text: `Page ${currentPage} of ${pageCount}`, style: 'footerText', alignment: 'right' as const },
      ],
      margin: [0, 4, 0, 0],
    },
  ]
}

export function generateGuidePdf(title: string, subtitle: string, outline: string) {
  const sections = parseOutlineToSections(outline)

  const content: Record<string, unknown>[] = [
    ...buildHeader(),
    { text: '', margin: [0, 20, 0, 0] },
    { text: title, style: 'docTitle' },
    { text: subtitle, style: 'docSubtitle' },
    { text: '', margin: [0, 6, 0, 0] },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 120, y2: 0, lineWidth: 3, lineColor: COLORS.gold }] },
    { text: '', margin: [0, 16, 0, 0] },
  ]

  for (const section of sections) {
    content.push({ text: section.heading, style: 'sectionHeading' })
    content.push({
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 80, y2: 0, lineWidth: 1, lineColor: COLORS.gold }],
      margin: [0, 2, 0, 8],
    })
    for (const item of section.content) {
      const isNumbered = /^\d+\./.test(item)
      content.push({
        text: item,
        style: 'bodyText',
        margin: isNumbered ? [8, 2, 0, 4] : [16, 2, 0, 4],
        ...(item.startsWith('**') ? { bold: true } : {}),
      })
    }
    content.push({ text: '', margin: [0, 8, 0, 0] })
  }

  const docDef = {
    pageSize: 'A4' as const,
    pageMargins: [40, 50, 40, 60] as [number, number, number, number],
    header: () => ({ stack: buildHeader(), margin: [40, 20, 40, 0] }),
    footer: (currentPage: number, pageCount: number) => ({
      stack: buildFooter(currentPage, pageCount),
      margin: [40, 0, 40, 20],
    }),
    content,
    styles: {
      headerBrand: {
        fontSize: FONT_SIZES.small,
        color: COLORS.gold,
        bold: true,
        letterSpacing: 3,
        alignment: 'center' as const,
      },
      docTitle: {
        fontSize: FONT_SIZES.title,
        bold: true,
        color: COLORS.navy,
        margin: [0, 0, 0, 4],
      },
      docSubtitle: {
        fontSize: FONT_SIZES.subtitle,
        color: COLORS.textSecondary,
        margin: [0, 0, 0, 0],
      },
      sectionHeading: {
        fontSize: FONT_SIZES.heading2,
        bold: true,
        color: COLORS.navy,
        margin: [0, 0, 0, 2],
      },
      bodyText: {
        fontSize: FONT_SIZES.body,
        color: COLORS.text,
        lineHeight: 1.5,
      },
      footerText: {
        fontSize: FONT_SIZES.caption,
        color: COLORS.textSecondary,
      },
    },
    defaultStyle: {
      font: 'Roboto',
    },
  }

  const safeName = title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '_').substring(0, 50)
  /* eslint-disable */
  const d1: any = docDef; pdfMake.createPdf(d1).download(`${safeName}_Zeelin_Academy.pdf`)
}

export function generateBookGuidePdf(bookKey: string) {
  const guide = bookGuides[bookKey]
  if (!guide) return

  const content: Record<string, unknown>[] = [
    ...buildHeader(),
    { text: '', margin: [0, 20, 0, 0] },
    { text: guide.title, style: 'docTitle' },
    { text: guide.subtitle, style: 'docSubtitle' },
    { text: '', margin: [0, 6, 0, 0] },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 120, y2: 0, lineWidth: 3, lineColor: COLORS.gold }] },
    { text: '', margin: [0, 16, 0, 0] },
    { text: 'Table of Contents', style: 'tocHeading' },
    { text: '', margin: [0, 4, 0, 0] },
  ]

  guide.chapters.forEach((ch, idx) => {
    content.push({
      text: `${idx + 1}. ${ch.title}`,
      style: 'tocItem',
      margin: [8, 2, 0, 2],
    })
  })

  content.push({ text: '', pageBreak: 'after' })

  guide.chapters.forEach((ch, idx) => {
    content.push({ text: `Chapter ${idx + 1}`, style: 'chapterLabel' })
    content.push({ text: ch.title, style: 'sectionHeading' })
    content.push({
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 80, y2: 0, lineWidth: 1, lineColor: COLORS.gold }],
      margin: [0, 2, 0, 10],
    })

    content.push({ text: 'Key Concepts', style: 'subHeading' })
    for (const concept of ch.concepts) {
      content.push({
        text: `\u2022  ${concept}`,
        style: 'bodyText',
        margin: [16, 3, 0, 3],
      })
    }

    if (ch.examTips && ch.examTips.length > 0) {
      content.push({ text: '', margin: [0, 6, 0, 0] })
      content.push({ text: 'Exam Tips', style: 'subHeading' })
      for (const tip of ch.examTips) {
        content.push({
          text: `\u2605  ${tip}`,
          style: 'tipText',
          margin: [16, 3, 0, 3],
        })
      }
    }

    content.push({ text: '', margin: [0, 12, 0, 0] })
  })

  const docDef = {
    pageSize: 'A4' as const,
    pageMargins: [40, 50, 40, 60] as [number, number, number, number],
    header: () => ({ stack: buildHeader(), margin: [40, 20, 40, 0] }),
    footer: (currentPage: number, pageCount: number) => ({
      stack: buildFooter(currentPage, pageCount),
      margin: [40, 0, 40, 20],
    }),
    content,
    styles: {
      headerBrand: {
        fontSize: FONT_SIZES.small,
        color: COLORS.gold,
        bold: true,
        letterSpacing: 3,
        alignment: 'center' as const,
      },
      docTitle: {
        fontSize: FONT_SIZES.title,
        bold: true,
        color: COLORS.navy,
        margin: [0, 0, 0, 4],
      },
      docSubtitle: {
        fontSize: FONT_SIZES.subtitle,
        color: COLORS.textSecondary,
        margin: [0, 0, 0, 0],
      },
      tocHeading: {
        fontSize: FONT_SIZES.heading3,
        bold: true,
        color: COLORS.navy,
        margin: [0, 0, 0, 6],
      },
      tocItem: {
        fontSize: FONT_SIZES.body,
        color: COLORS.text,
        margin: [8, 2, 0, 2],
      },
      chapterLabel: {
        fontSize: FONT_SIZES.small,
        color: COLORS.gold,
        bold: true,
        margin: [0, 0, 0, 2],
      },
      sectionHeading: {
        fontSize: FONT_SIZES.heading2,
        bold: true,
        color: COLORS.navy,
        margin: [0, 0, 0, 2],
      },
      subHeading: {
        fontSize: FONT_SIZES.heading3,
        bold: true,
        color: COLORS.navyDark,
        margin: [0, 0, 0, 4],
      },
      bodyText: {
        fontSize: FONT_SIZES.body,
        color: COLORS.text,
        lineHeight: 1.5,
      },
      tipText: {
        fontSize: FONT_SIZES.body,
        color: COLORS.gold,
        bold: true,
        lineHeight: 1.5,
      },
      footerText: {
        fontSize: FONT_SIZES.caption,
        color: COLORS.textSecondary,
      },
    },
    defaultStyle: {
      font: 'Roboto',
    },
  }

  const safeName = guide.title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '_').substring(0, 50)
  /* eslint-disable */
  const d2: any = docDef; pdfMake.createPdf(d2).download(`${safeName}_Study_Guide_Zeelin_Academy.pdf`)
}
