const express = require('express')
const router = express.Router()

const BASE_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

const pages = [
  { loc: '/', priority: 1.0 },
  { loc: '/about', priority: 0.8 },
  { loc: '/courses', priority: 0.9 },
  { loc: '/courses/foundation-pathway', priority: 0.7 },
  { loc: '/courses/core-pathway', priority: 0.7 },
  { loc: '/courses/practitioner-pathway', priority: 0.7 },
  { loc: '/courses/oral-examination', priority: 0.7 },
  { loc: '/packages', priority: 0.9 },
  { loc: '/contact', priority: 0.6 },
  { loc: '/enroll', priority: 0.8 },
  { loc: '/resources', priority: 0.7 },
  { loc: '/pathway-finder', priority: 0.7 },
  { loc: '/sitemap', priority: 0.3 },
  { loc: '/terms', priority: 0.3 },
  { loc: '/privacy', priority: 0.3 },
  { loc: '/support', priority: 0.3 },
  { loc: '/help', priority: 0.3 },
  { loc: '/community', priority: 0.5 },
  { loc: '/checkout/success', priority: 0.2 },
  { loc: '/checkout/cancel', priority: 0.2 },
]

router.get('/sitemap.xml', (req, res) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  for (const page of pages) {
    xml += '  <url>\n'
    xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += '  </url>\n'
  }
  xml += '</urlset>'
  res.header('Content-Type', 'application/xml')
  res.send(xml)
})

module.exports = router
