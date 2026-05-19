import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    heading: 'Mutual',
    body: 'No one-sided deals. We structure terms that are financially fair and respect what you have built.',
  },
  {
    heading: 'People-Focused',
    body: 'Your team made this business what it is. We intend to keep it that way.',
  },
  {
    heading: 'Long-Term',
    body: 'We are not buying to flip. We are buying to build on what you started.',
  },
]

function Value({ heading, body, index }: { heading: string; body: string; index: number }) {
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          ref={ref}
          className="section-label mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Sell to Us
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {values.map((v, i) => (
            <Value key={v.heading} {...v} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
