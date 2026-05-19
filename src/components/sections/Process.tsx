import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    label: 'Intro Call',
    body: 'A confidential conversation to see if we\'re a fit. No pressure, no obligation.',
  },
  {
    num: '02',
    label: 'NDA',
    body: 'We sign a non-disclosure agreement before you share anything sensitive.',
  },
  {
    num: '03',
    label: 'Letter of Intent',
    body: 'If we\'re aligned, we send an LOI with proposed terms within a reasonable timeframe.',
  },
  {
    num: '04',
    label: 'Due Diligence',
    body: 'A thorough, respectful review of financials, operations, and legal documents during exclusivity.',
  },
  {
    num: '05',
    label: 'Close & Transition',
    body: 'You receive your funds. We work together on a thoughtful handoff that protects your team, your customers, and your legacy.',
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

export function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <p className="section-label mb-4">Our Process</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading">Simple. Transparent. Seller-first.</h2>
          </FadeIn>
        </div>

        <div className="divide-y divide-border">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={0.05 + i * 0.08}>
              <div className="py-8 grid grid-cols-12 gap-6 items-start">
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold tracking-label text-teal">{s.num}</span>
                </div>
                <div className="col-span-10 sm:col-span-3">
                  <span className="text-base font-bold text-navy">{s.label}</span>
                </div>
                <div className="col-span-12 sm:col-span-8 pl-6 sm:pl-0">
                  <p className="text-sm text-steel leading-relaxed">{s.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
