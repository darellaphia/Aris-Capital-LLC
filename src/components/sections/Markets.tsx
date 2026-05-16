import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const markets = [
  {
    num: '01',
    state: 'Texas',
    drivers: 'Data Centers · Oilfield Electrification · Population Growth',
    cities: 'Houston (primary), DFW, Austin/SA, West TX',
    primary: true,
  },
  {
    num: '02',
    state: 'Georgia',
    drivers: 'Data Centers · Logistics · Manufacturing',
    cities: 'Atlanta, Douglas County, Lithia Springs, Savannah',
    primary: false,
  },
  {
    num: '03',
    state: 'Arizona',
    drivers: 'Data Centers · Semiconductor Fabs · Cooling Load',
    cities: 'Phoenix, Mesa, Chandler, Goodyear',
    primary: false,
  },
  {
    num: '04',
    state: 'Virginia',
    drivers: 'Data Centers',
    cities: 'Ashburn, Loudoun County, Prince William County',
    primary: false,
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

export function Markets() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <FadeIn>
            <p className="section-label mb-4">Target Markets</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading">Where demand is growing.</h2>
          </FadeIn>
        </div>

        {/* Market rows */}
        <div className="divide-y divide-border">
          {markets.map((m, i) => (
            <FadeIn key={m.num} delay={0.05 + i * 0.08}>
              <div className="py-8 grid grid-cols-12 gap-4 items-start">
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold tracking-label text-teal">{m.num}</span>
                </div>
                {/* State + primary badge */}
                <div className="col-span-10 sm:col-span-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xl font-bold text-navy">{m.state}</span>
                    {m.primary && (
                      <span className="text-[10px] font-bold uppercase tracking-label text-teal border border-teal px-2 py-0.5 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                </div>
                {/* Drivers */}
                <div className="col-span-12 sm:col-span-4 pl-6 sm:pl-0">
                  <p className="text-sm text-steel">{m.drivers}</p>
                </div>
                {/* Cities */}
                <div className="col-span-12 sm:col-span-4 pl-6 sm:pl-0">
                  <p className="text-sm text-steel-light">{m.cities}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.3}>
          <p className="mt-10 text-xs italic text-steel-light">
            Texas is our primary market. Georgia, Arizona, and Virginia are secondary markets
            selected based on overlapping data center growth, industrial expansion, and
            SBA-eligible deal flow.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
