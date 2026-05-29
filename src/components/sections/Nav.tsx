import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { label: 'The Thesis', href: '#thesis' },
  { label: 'Our Process', href: '#process' },
  { label: 'What We Look For', href: '#criteria' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        scrolled && 'shadow-[0_2px_24px_0_rgba(13,31,60,0.08)]',
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo — transparent PNG, no whitespace issues */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Aris Capital"
            style={{ height: '56px', width: 'auto' }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel hover:text-navy transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 active:scale-95 transition-transform duration-150"
          >
            Get In Touch
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={cn('block w-5 h-0.5 bg-navy transition-transform duration-200', open && 'translate-y-2 rotate-45')} />
          <span className={cn('block w-5 h-0.5 bg-navy transition-opacity duration-200', open && 'opacity-0')} />
          <span className={cn('block w-5 h-0.5 bg-navy transition-transform duration-200', open && '-translate-y-2 -rotate-45')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute inset-x-0 top-24 bg-white border-t border-border shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-navy hover:text-teal transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-navy text-white text-sm font-semibold rounded text-center hover:bg-navy-light active:scale-95 transition-transform duration-150"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
