import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tags = [
  'Alpha Phi Alpha',
  'NMC bETA Fellow 2026',
  'Fortune 500 PM',
  'Federal Contracting',
  'Sales Leadership',
]

const pillars = [
  { label: 'Sales Leadership', detail: '10+ years enterprise sales and revenue leadership across technology and services verticals.' },
  { label: 'Project Management', detail: 'Fortune 500-trained PM methodology applied to deal execution, transitions, and operations.' },
  { label: 'Entrepreneurship', detail: 'Founder and CEO of Cresco Consult LLC — understands what builders need from a buyer.' },
  { label: 'Energy Roots', detail: 'Grew up around Egbin Power Station, Nigeria. This is not a thesis — it is lived context.' },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Operator() {
  return (
    <section id="operator" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column: photo + content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">

          {/* Photo column */}
          <FadeIn className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm border-l-2 border-teal">
                <img
                  src="/headshot.jpg"
                  alt="Dare Ayansola"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              {/* Teal accent block */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 border border-teal/30 -z-10 rounded-sm" />
            </div>
          </FadeIn>

          {/* Content column */}
          <div className="lg:col-span-3">
            <FadeIn>
              <p className="section-label mb-5">Meet the Operator</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold text-navy mb-1">Dare Ayansola</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-xs font-bold uppercase tracking-label text-teal mb-8">
                Founder & Managing Principal, Aris Capital LLC
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-teal pl-5 mb-8">
                <p className="text-lg italic text-navy leading-relaxed">
                  "Energy infrastructure is not a sector I discovered. It is one I grew up inside."
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="section-body mb-4">
                Dare Ayansola is the founder and managing principal of Aris Capital LLC. He grew up
                around one of the largest thermal power stations in Nigeria — his father spent his
                career there as an instrumentation and control engineer. Energy infrastructure is not
                a sector he discovered. It is one he grew up inside.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="section-body mb-8">
                His background spans senior project management at a Fortune 500 company, sales and
                finance leadership, and entrepreneurship as founder and CEO of Cresco Consult LLC,
                a federal contracting firm. He is a 2026 fellow of the New Majority Capital bETA
                acquisition accelerator.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-semibold border border-border text-steel rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 4-column credential pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border pt-10">
          {pillars.map((p, i) => (
            <FadeIn key={p.label} delay={0.1 + i * 0.08}>
              <p className="text-xs font-bold uppercase tracking-label text-teal mb-2">{p.label}</p>
              <p className="text-xs text-steel leading-relaxed">{p.detail}</p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
