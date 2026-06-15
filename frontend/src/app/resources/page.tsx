'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, BookOpen, Copy, Check, ExternalLink, FileText, Layout, FileSpreadsheet, ArrowRight, HelpCircle } from 'lucide-react'

interface Template {
  id: string
  title: string
  format: string
  category: string
  description: string
  icon: React.ReactNode
  outline: string
}

const templates: Template[] = [
  {
    id: 'swot',
    title: 'SWOT Analysis Template',
    format: 'Word / PDF',
    category: 'Strategic Analysis',
    description: 'Analyse internal Strengths and Weaknesses alongside external Opportunities and Threats to assess organizational strategy.',
    icon: <Layout className="w-5 h-5 text-[color:var(--brand-gold)]" />,
    outline: `### SWOT Analysis Matrix Outline
1. **Strengths (Internal, Helpful)**
   - What advantages does your organization have?
   - What do you do better than anyone else?
2. **Weaknesses (Internal, Harmful)**
   - What could you improve?
   - What should you avoid or mitigate?
3. **Opportunities (External, Helpful)**
   - What interesting trends are you aware of?
   - What external changes can you exploit?
4. **Threats (External, Harmful)**
   - What obstacles do you face?
   - What are your competitors doing?`
  },
  {
    id: 'moscow',
    title: 'MoSCoW Prioritization Sheet',
    format: 'Excel / CSV',
    category: 'Requirements Management',
    description: 'Categorise requirements into Must have, Should have, Could have, and Won\'t have to manage scope and project timeline.',
    icon: <FileSpreadsheet className="w-5 h-5 text-[color:var(--brand-gold)]" />,
    outline: `### MoSCoW Framework Guidelines
- **Must Have (M):** Critical to the success of the project. Non-negotiable requirements.
- **Should Have (S):** Important but not vital. Can be temporarily worked around if necessary.
- **Could Have (C):** Desirable but has less impact. Nice-to-have features that fit if time allows.
- **Won't Have (W):** Agreed to not be included in the current release. Scheduled for future phases.`
  },
  {
    id: 'baccm',
    title: 'BACCM™ Framework Guide',
    format: 'PDF Quick Guide',
    category: 'BA Foundations',
    description: 'A pocket-sized reference guide to the Business Analysis Core Concept Model: Change, Need, Solution, Stakeholder, Value, Context.',
    icon: <FileText className="w-5 h-5 text-[color:var(--brand-gold)]" />,
    outline: `### BACCM™ Core Concepts
1. **Change:** The act of transformation in response to a need.
2. **Need:** A problem or opportunity to be addressed.
3. **Solution:** A specific way of satisfying one or more needs in a context.
4. **Stakeholder:** A group or individual with a relationship to the change, need, or solution.
5. **Value:** The worth, importance, or usefulness of something to a stakeholder within a context.
6. **Context:** The circumstances that influence, and are influenced by, the change.`
  },
  {
    id: 'raci',
    title: 'RACI Matrix Template',
    format: 'Excel Template',
    category: 'Stakeholder Collaboration',
    description: 'Assign project roles: Responsible, Accountable, Consulted, and Informed for key processes and deliverables.',
    icon: <FileSpreadsheet className="w-5 h-5 text-[color:var(--brand-gold)]" />,
    outline: `### RACI Matrix Definitions
- **Responsible (R):** The person who performs the work to achieve the task.
- **Accountable (A):** The person with final decision-making power and ownership of the result. (Only one Accountable per task!)
- **Consulted (C):** People whose input is sought before or during the task (two-way communication).
- **Informed (I):** People kept up-to-date on progress or outcomes (one-way communication).`
  }
]

const books = [
  { src: '/book1.jpg', title: 'Business Analytics', author: 'Camm, Cochran, Fry, Ohlmann', desc: 'An excellent guide on data-driven decision making and corporate analytics models.' },
  { src: '/book2.jpg', title: 'Business Analysis for Practitioners', author: 'PMI', desc: 'A practice guide mapping out critical Business Analysis capabilities across projects.' },
  { src: '/book3.jpg', title: 'Business Analysis: Fourth Edition', author: 'Debra Paul and James Cadle', desc: 'The official BCS core textbook. Essential reading for all BCS Diploma candidates.' }
]

export default function ResourcesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[color:var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
            <BookOpen className="w-4 h-4" />
            Zeelin Academy Resource Hub
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[color:var(--text-core)]">
            Business Analysis <span className="gold">Resources</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
            Enhance your study and work processes with our curated selection of textbooks, free templates, and learning frameworks.
          </p>
        </div>

        {/* Textbooks Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--text-core)]">
              Recommended <span className="gold">Textbooks</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] card-hover flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[3/4] w-40 mx-auto rounded-lg overflow-hidden border mb-6 shadow-md" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <Image
                      src={book.src}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-[color:var(--text-core)] text-center mb-1">{book.title}</h3>
                  <p className="text-xs text-muted text-center mb-4">{book.author}</p>
                  <p className="text-sm text-secondary leading-relaxed text-center">{book.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[color:var(--border)] text-center">
                  <a 
                    href="https://www.bcs.org/publications-and-journals/books/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold gold hover:underline"
                  >
                    View Publication Details
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Templates Directory Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 border-t border-[color:var(--border)] pt-16">
          
          {/* Templates list - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[color:var(--text-core)] mb-2">
                Essential BA <span className="gold">Templates</span>
              </h2>
              <p className="text-sm text-secondary">
                Review and copy standard BA templates to accelerate your assignments and project deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {templates.map((temp) => (
                <div 
                  key={temp.id} 
                  className={`p-6 rounded-2xl border bg-[color:var(--bg-card)] transition-all cursor-pointer flex flex-col justify-between ${selectedTemplate?.id === temp.id ? 'border-[color:var(--brand-gold)] shadow-lg' : 'border-[color:var(--border)] hover:border-[color:var(--brand-gold)]/50'}`}
                  onClick={() => setSelectedTemplate(temp)}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[rgba(223,186,107,0.08)]">
                      {temp.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">{temp.category}</span>
                    <h3 className="font-bold text-base text-[color:var(--text-core)] mt-1 mb-2">{temp.title}</h3>
                    <p className="text-xs text-muted leading-relaxed mb-4">{temp.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold pt-4 border-t border-[color:var(--border)]">
                    <span className="text-muted">{temp.format}</span>
                    <button className="gold flex items-center gap-1 hover:underline">
                      View Outline <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Template Detail Viewer - 5 columns */}
          <div className="lg:col-span-5">
            {selectedTemplate ? (
              <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] shadow-xl relative overflow-hidden animate-in fade-in duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(212,175,55,0.02)] rounded-bl-full pointer-events-none"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">{selectedTemplate.category}</span>
                    <h3 className="font-display text-xl font-bold text-[color:var(--text-core)] mt-1">{selectedTemplate.title}</h3>
                  </div>
                  <button 
                    onClick={() => handleCopyText(selectedTemplate.outline, selectedTemplate.id)}
                    className="p-2.5 rounded-lg border border-[color:var(--border)] hover:bg-[color:var(--bg-secondary)] text-secondary transition-all"
                    title="Copy Outline to Clipboard"
                  >
                    {copiedId === selectedTemplate.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="p-4 rounded-xl bg-[color:var(--bg-primary)] border border-[color:var(--border)] mb-6">
                  <pre className="text-xs leading-relaxed text-[color:var(--text-core)] whitespace-pre-wrap font-mono">
                    {selectedTemplate.outline}
                  </pre>
                </div>

                <Link href="/enroll" className="btn-gold w-full py-3 text-sm flex items-center justify-center gap-2">
                  Get Full Premium Templates Package
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="p-12 rounded-2xl border border-dashed border-[color:var(--border)] text-center bg-[rgba(212,175,55,0.01)]">
                <Layout className="w-12 h-12 text-[color:var(--brand-gold)] mx-auto mb-4 opacity-50" />
                <h3 className="font-semibold text-lg text-[color:var(--text-core)] mb-2">Select a Template Outline</h3>
                <p className="text-sm text-secondary">
                  Click on any of the cards on the left to view their structural outline, copy the guidelines, or access downloading links.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Resources FAQ */}
        <div className="border-t border-[color:var(--border)] pt-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12 text-[color:var(--text-core)]">
            Resources <span className="gold">FAQ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Do I get official BCS textbooks when enrolling?",
                a: "Yes! Students in our comprehensive diploma courses receive access to recommended prep resources, practice exams, and official reading outlines."
              },
              {
                q: "Can I use these templates in my daily BA job?",
                a: "Absolutely. Our templates align with industry best practices (BCS & BABOK guide) and are fully customisable for real-world project usage."
              },
              {
                q: "Are the mock exam questions updated regularly?",
                a: "Yes, our exam simulators are designed to match current BCS module requirements. We consistently refresh questions based on recent syllabus revisions."
              },
              {
                q: "Who can I speak to if I need a custom template?",
                a: "Academy members can request custom templates or schedule walkthroughs during our weekly group mentoring sessions with Dr. Franklin Kalu."
              }
            ].map((faq, i) => (
              <div key={i} className="flex gap-4">
                <HelpCircle className="w-5 h-5 flex-shrink-0 gold-text mt-1" />
                <div>
                  <h4 className="font-semibold text-base text-[color:var(--text-core)]">{faq.q}</h4>
                  <p className="text-sm text-secondary mt-1.5 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
