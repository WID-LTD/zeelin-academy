const { pool } = require('../db')

const catalog = [
  ['Core / Classic Business Analysis Package','core-classic-business-analysis','12-role Business Analysis job-readiness pathway.'],
  ['Technical Business Analysis Package','technical-business-analysis','Technical systems, integrations, platforms and automation pathway.'],
  ['Product & Agile Package','product-agile','Product, Agile and digital delivery job-readiness pathway.'],
  ['Data & Business Intelligence Package','data-business-intelligence','Analytics, reporting, BI, governance and insight pathway.'],
  ['AI-Era Business Analysis Package','ai-era-business-analysis','AI, automation, workflow and responsible AI analysis pathway.'],
  ['Customer & Journey Package','customer-journey','Customer experience, journey, service and insight pathway.'],
  ['Industry-Specific Analysis Package','industry-specific-analysis','Sector-specific analysis pathway across finance, healthcare, retail, government and more.'],
]

function envPrice(slug){
  const key = 'PACKAGE_PRICE_' + slug.replace(/-/g,'_').toUpperCase()
  const raw = process.env[key]
  if(!raw) return null
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : null
}

module.exports = async (req, res) => {
  try {
    const result = await pool.query('SELECT slug, price, currency, is_active FROM packages WHERE is_active = true')
    const bySlug = new Map(result.rows.map(row => [row.slug, row]))
    const payload = catalog.map(([name,slug,description],index) => {
      const row = bySlug.get(slug)
      const price = row && Number(row.price) > 0 ? Number(row.price) : envPrice(slug)
      return {
        id: index + 1,
        name,
        slug,
        price,
        currency: row?.currency || 'GBP',
        description,
        features: ['Complete training package','One work-experience project','Mentorship and evaluation','Job acquisition access'],
        is_active: true,
      }
    })
    res.json(payload)
  } catch (error) {
    console.error('Packages fetch error:', error)
    res.status(500).json({ error: 'Failed to fetch packages' })
  }
}
