import { motion } from 'framer-motion'
import { MeshGradient, PulsingBorder } from '@paper-design/shaders-react'

const pills = [
  { label: 'Texas · Primary Market' },
  { label: 'North Carolina' },
  { label: 'Georgia' },
  { label: 'Arizona' },
  { label: 'SBA 7(a) Financed' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-end pt-24">
      {/* Shader background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={['#0D1F3C', '#00C2A8', '#081526', '#0a3d35', '#1a2f50']}
        speed={0.3}
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-navy/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-14 lg:pb-20">
        <motion.p
          className="section-label mb-5"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Aris Capital Acquisitions
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6 max-w-2xl"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          You built something real. Let's make sure it lasts.
        </motion.h1>

        <motion.div
          className="w-12 h-0.5 bg-teal mb-6"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        />

        <motion.p
          className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          We acquire essential infrastructure service businesses — companies that
          keep critical systems running for industrial, commercial, and government
          customers. Power, water, cooling, controls — if it's essential,
          recurring, compliance-driven, and the customer cannot afford downtime,
          it fits.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 bg-teal text-navy-deep text-sm font-bold rounded hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-95 transition-transform duration-150 shadow-[0_4px_32px_0_rgba(0,194,168,0.35)]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Geography pills */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-2"
        >
          {pills.map((p) => (
            <span
              key={p.label}
              className="px-3 py-1 text-xs font-semibold border border-white/20 text-white/60 rounded-full tracking-wide"
            >
              {p.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Pulsing border accent — bottom right */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <PulsingBorder
          colors={['#00C2A8', '#0D1F3C', '#00C2A8', '#1a2f50', '#ffffff']}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spots={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          style={{ width: '80px', height: '80px', borderRadius: '50%' }}
        />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}
