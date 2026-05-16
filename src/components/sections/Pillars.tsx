import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    heading: 'Operator-Led',
    body: "Founder-operated. We don't flip — we run, grow, and build for the long term.",
  },
  {
    heading: 'Sector-Specific',
    body: "Energy infrastructure services only. We're not generalists — this is the only thing we do.",
  },
  {
    heading: 'Seller-Respectful',
    body: "Transparent process. Fair terms. We preserve what you've built.",
  },
]

function Pillar({ heading, body, index }: { heading: string; body: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="border-t-2 border-teal pt-6"
    >
      <h3 className="text-base font-bold uppercase tracking-label text-white mb-3">
        {heading}
      </h3>
      <p className="text-steel-light text-sm leading-relaxed">{body}</p>
    </motion.div>
  )
}

export function Pillars() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((p, i) => (
            <Pillar key={p.heading} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
