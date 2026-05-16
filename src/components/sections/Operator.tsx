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
  { label: 'Entrepreneurship', detail: 'Founded and operated multiple ventures — understands what builders need from a buyer.' },
  { label: 'Energy Roots', detail: 'Grew up in energy infrastructure. This is not a thesis — it is lived context.' },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
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
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <FadeIn>
          <p className="section-label mb-6">The Operator</p>
        </FadeIn>

        {/* Name + title */}
        <FadeIn delay={0.1}>
          <h2 className="text-4xl font-bold text-navy mb-2">Dare Ayansola</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-xs font-bold uppercase tracking-label text-teal mb-8">
            Founder & Managing Principal, Aris Capital
          </p>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.2}>
          <blockquote className="border-l-2 border-teal pl-6 mb-10">
            <p className="text-xl italic text-navy leading-relaxed">
              "Energy infrastructure is not a sector I discovered. It is one I grew up inside."
            </p>
          </blockquote>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.25}>
          <p className="section-body mb-5">
            Dare Ayansola is a sales leader, project manager, and entrepreneur with a background
            spanning Fortune 500 technology companies, federal contracting, and energy services.
            He has spent his career at the intersection of infrastructure, operations, and
            growth — and founded Aris Capital to acquire and operate the businesses he
            understands best.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="section-body mb-10">
            As a member of Alpha Phi Alpha Fraternity Inc. and a 2026 NMC bETA Fellow, Dare
            brings a networks-and-relationships approach to M&A — prioritizing seller trust,
            workforce continuity, and long-term operational stewardship over financial engineering.
          </p>
        </FadeIn>

        {/* Credential tags */}
        <FadeIn delay={0.35}>
          <div className="flex flex-wrap gap-2 mb-14">
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

        {/* 4-column credential pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-border pt-12">
          {pillars.map((p, i) => (
            <FadeIn key={p.label} delay={0.1 + i * 0.08}>
              <div>
                <p className="text-xs font-bold uppercase tracking-label text-teal mb-2">{p.label}</p>
                <p className="text-xs text-steel leading-relaxed">{p.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
