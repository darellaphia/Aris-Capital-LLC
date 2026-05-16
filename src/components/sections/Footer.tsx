export function Footer() {
  return (
    <footer className="bg-[#081526] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel">
        <div className="text-center sm:text-left">
          <span className="font-semibold text-steel-light">Aris Capital LLC</span>
          {' · '}Texas-registered
          {' · '}
          <a href="mailto:dare@ariscapitalllc.com" className="hover:text-teal transition-colors duration-150">
            dare@ariscapitalllc.com
          </a>
        </div>
        <div className="text-center sm:text-right">
          © 2025 Aris Capital LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
