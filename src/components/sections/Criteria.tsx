import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: '$700K–$1.5M', label: 'EBITDA' },
  { value: '$2M–$5M', label: 'Deal Range' },
  { value: '7+ Years', label: 'Op. History' },
]

const criteria = [
  {
    heading: 'Business Type',
    items: [
      'Generator service & maintenance',
      'Commercial electrical contractors',
      'Light manufacturing',
      'Compliance-driven customer base',
      'Licensed workforce',
    ],
  },
  {
    heading: 'Financials',
    items: [
      '$700K–$1.5M EBITDA',
      '$2M–$5M deal size',
      'Recurring revenue preferred',
      'Clean books',
      'Recession-resistant revenue',
    ],
  },
  {
    heading: 'Structure',
    items: [
      'SBA 7(a) financed',
      '10–20% seller note',
      'Seller willing to transition',
      'Founder-owned preferred',
      'TX · GA · AZ · VA',
    ],
  },
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

export function Criteria() {
  return (
    <section id="criteria" className="bg-offwhite py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <FadeIn>
            <p className="section-label mb-4">What We Look For</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading mb-4">Is your business a fit?</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-body mb-4">
              We acquire generator service and maintenance companies, commercial electrical
              contractors, and light manufacturers supplying the energy infrastructure supply
              chain. The business should have at least 7 years of operating history, $700K to
              $1.5M in EBITDA, and an experienced team already in place.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="section-body">
              The ideal seller is a founder ready to transition — whether due to retirement,
              succession, or simply wanting to step back from the day-to-day. If growth has
              been limited by your bandwidth rather than the market, that's exactly the kind
              of business we look for.
            </p>
          </FadeIn>
        </div>

        {/* Metric tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={0.1 + i * 0.08}>
              <div className="bg-navy text-white p-8 text-center rounded">
                <p className="text-3xl font-bold text-teal mb-1">{m.value}</p>
                <p className="text-xs font-bold uppercase tracking-label text-steel-light">{m.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Criteria grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {criteria.map((c, i) => (
            <FadeIn key={c.heading} delay={0.15 + i * 0.1}>
              <div className="bg-white border-t-2 border-teal p-8 h-full">
                <h3 className="text-sm font-bold uppercase tracking-label text-navy mb-5">
                  {c.heading}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-steel leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
