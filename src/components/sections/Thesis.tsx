import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const drivers = [
  {
    num: '01',
    label: 'Electricity Demand Is Surging',
    body: 'AI and data centers driving historic power demand. Grid modernization replacing aging T&D infrastructure. Electrification of vehicles, buildings, and industry. Domestic manufacturing reshoring adding industrial load.',
  },
  {
    num: '02',
    label: 'Water & Utility Infrastructure Is Failing',
    body: 'Billions in federal infrastructure spending now flowing. Aging pipes, pumps, and treatment systems need service. Regulatory compliance driving mandatory upgrades. Population growth in Sun Belt straining existing systems.',
  },
  {
    num: '03',
    label: 'Sun Belt Growth Is Structural',
    body: 'Texas, North Carolina, Georgia, and Arizona leading U.S. growth. Every new facility and resident needs infrastructure services. Industrial and manufacturing expansion driving service demand. Data center buildout concentrated in these four states.',
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
              Three converging forces are creating durable demand for essential infrastructure services.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-body mb-4">
              U.S. electricity demand is surging. Water and utility infrastructure is aging,
              underfunded, and under mounting regulatory pressure. Sun Belt population and
              industrial growth is accelerating — with Texas, North Carolina, Georgia, and
              Arizona leading the country.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="section-body">
              The businesses positioned to capture this are not utilities — they are the service
              and maintenance operators who keep critical systems running. Essential, recurring,
              compliance-driven, and chronically undervalued in acquisition markets.
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
                Projected U.S. electricity demand growth 2025→2050 (EIA AEO), driven by AI,
                data centers, manufacturing reshoring, and electrification.
              </p>
            </div>
          </FadeIn>

          {/* Driver cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
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
