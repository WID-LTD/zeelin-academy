import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

if (typeof window !== 'undefined') {
  const pm = pdfMake as unknown as { vfs: Record<string, string> }
  const fonts = pdfFonts as unknown as { pdfMake?: { vfs: Record<string, string> }; vfs?: Record<string, string> }
  if (fonts.pdfMake) {
    pm.vfs = fonts.pdfMake.vfs
  } else if (fonts.vfs) {
    pm.vfs = fonts.vfs
  }
}

export const COLORS = {
  navy: '#0c1e36',
  navyDark: '#081428',
  gold: '#D4A02A',
  goldLight: 'rgba(212,160,42,0.1)',
  goldBorder: 'rgba(212,160,42,0.3)',
  text: '#1a1a2e',
  textSecondary: '#4a4a5e',
  white: '#ffffff',
  lightBg: '#f8f6f0',
  border: '#e8e4dc',
}

export const FONT_SIZES = {
  title: 28,
  subtitle: 14,
  heading2: 18,
  heading3: 14,
  body: 11,
  small: 9,
  caption: 8,
}

export default pdfMake
