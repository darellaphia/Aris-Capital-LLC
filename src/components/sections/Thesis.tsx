import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const drivers = [
  {
    num: '01',
    label: 'AI & Data Centers',
    body: 'Hyperscale data center construction is accelerating across the Sun Belt. Each facility requires continuous backup power and high-voltage electrical maintenance — creating sustained, non-discretionary demand for generator service and commercial electrical contractors.',
  },
  {
    num: '02',
    label: 'Grid Modernization',
    body: 'Aging U.S. grid infrastructure requires unprecedented investment in upgrades, substations, and distributed energy resources. Qualified electrical contractors with licensed workforces are the bottleneck — and the beneficiary.',
  },
  {
    num: '03',
    label: 'Domestic Manufacturing',
    body: 'Reshoring of semiconductor fabs, EV battery plants, and defense manufacturing is driving industrial electrical load not seen in decades. These facilities depend on certified service contractors for compliance, maintenance, and uptime.',
  },
  {
    num: '04',
    label: 'Electrification',
    body: 'The transition from fossil fuels to electric systems — across transportation, HVAC, and industrial processes — is expanding the total addressable market for electrical service businesses in every geography we target.',
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

export function Thesis() {
  return (
    <section id="thesis" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <p className="section-label mb-4">The Thesis</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading mb-6">
              U.S. electricity demand is growing faster than it has in decades.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-body mb-4">
              After two decades of flat electricity demand, the United States is entering a period
              of rapid, structural load growth driven by artificial intelligence infrastructure,
              domestic industrial expansion, and the broad electrification of transportation and
              buildings.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="section-body">
              The businesses positioned to capture this growth are not the utilities — they are
              the service and maintenance contractors who keep the infrastructure running.
              Generator service companies, commercial electrical contractors, and compliance-driven
              operators are essential, non-discretionary, and chronically undervalued in M&A markets.
            </p>
          </FadeIn>
        </div>

        {/* Stat + drivers */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* +37% stat block */}
          <FadeIn delay={0.1}>
            <div className="border-t-2 border-teal bg-navy text-white p-8 lg:w-56 flex-shrink-0 flex flex-col justify-between">
              <p className="text-6xl font-bold text-teal leading-none mb-2">+37%</p>
              <p className="text-sm text-steel-light leading-relaxed">
                Projected U.S. electricity demand growth through 2030, driven by AI, manufacturing
                reshoring, and electrification.
              </p>
            </div>
          </FadeIn>

          {/* Driver cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
            {drivers.map((d, i) => (
              <FadeIn key={d.num} delay={0.15 + i * 0.08}>
                <div className="border border-border rounded p-6 h-full flex flex-col gap-3">
                  <p className="text-teal text-xs font-bold tracking-label">{d.num}</p>
                  <p className="text-navy text-sm font-semibold leading-snug">{d.label}</p>
                  <p className="text-steel text-xs leading-relaxed">{d.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
