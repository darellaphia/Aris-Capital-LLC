import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const pills = [
  { label: 'Texas · Primary Market' },
  { label: 'Georgia' },
  { label: 'Arizona' },
  { label: 'Virginia' },
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
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-16">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#00C2A8"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center gap-16 lg:gap-24">
          {/* Left: content */}
          <div className="flex-1 py-20 lg:py-28">
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
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy leading-[1.1] tracking-[-0.03em] mb-6 max-w-xl"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              Acquiring the infrastructure that powers what's next.
            </motion.h1>

            <motion.div
              className="w-12 h-0.5 bg-teal mb-6"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            />

            <motion.p
              className="text-steel text-lg leading-relaxed mb-10 max-w-lg"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              We acquire generator service companies and commercial electrical
              contractors in the markets where U.S. electricity demand is
              growing fastest.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 active:scale-95 transition-transform duration-150 shadow-[0_4px_24px_0_rgba(13,31,60,0.18)]"
              >
                Start a Conversation
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
                  className="px-3 py-1 text-xs font-semibold border border-border text-steel rounded-full tracking-wide"
                >
                  {p.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Spline 3D (desktop only) */}
          <div className="hidden lg:flex flex-1 h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 z-10 pointer-events-none" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
