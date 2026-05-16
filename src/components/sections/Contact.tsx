import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FORMSPREE_ID = 'YOUR_FORM_ID'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

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

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-navy py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="section-label mb-4">Contact</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            Start a conversation.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-steel-light text-base leading-relaxed mb-10">
            If you're a business owner, M&A advisor, SBA lender, or accelerator program
            interested in connecting, reach out below. We respond to every inquiry.
          </p>
        </FadeIn>

        {status === 'success' ? (
          <FadeIn>
            <div className="border border-teal rounded p-8 text-left">
              <p className="text-teal font-bold mb-2">Message received.</p>
              <p className="text-steel-light text-sm leading-relaxed">
                Thank you for reaching out. We'll be in touch shortly.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.25}>
            <form onSubmit={handleSubmit} className="text-left space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-label text-steel-light mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="w-full bg-navy-light border border-navy-light text-white placeholder-steel text-sm px-4 py-3 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150"
                    placeholder="First"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-label text-steel-light mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="w-full bg-navy-light border border-navy-light text-white placeholder-steel text-sm px-4 py-3 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150"
                    placeholder="Last"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-label text-steel-light mb-2">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  className="w-full bg-navy-light border border-navy-light text-white placeholder-steel text-sm px-4 py-3 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-label text-steel-light mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-navy-light border border-navy-light text-white placeholder-steel text-sm px-4 py-3 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-label text-steel-light mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-navy-light border border-navy-light text-white placeholder-steel text-sm px-4 py-3 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150 resize-none"
                  placeholder="Tell us about your business or inquiry..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Email us directly at{' '}
                  <a href="mailto:dare@ariscapitalllc.com" className="underline hover:text-teal">
                    dare@ariscapitalllc.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-teal text-navy-deep font-bold text-sm uppercase tracking-label rounded hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98] disabled:opacity-60 transition-colors duration-150"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </FadeIn>
        )}

        {/* Direct email */}
        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-steel-light">
            Or email directly:{' '}
            <a
              href="mailto:dare@ariscapitalllc.com"
              className="text-teal hover:underline focus-visible:outline-none"
            >
              dare@ariscapitalllc.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
