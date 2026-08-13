import { useState } from 'react'
import Logo from './Logo.jsx'
import { navItems, hero } from '../data/siteContent.js'

/**
 * Fixed top navigation. Collapses to a menu button on small screens.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur border-b border-fog/60">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Logo tone="dark" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-navy/80">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-navy transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={hero.ctaHref}
              className="rounded-full bg-navy px-5 py-2 text-cream hover:bg-navy/90 transition-colors"
            >
              Let’s Talk Business
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-px bg-navy mb-1.5" />
          <span className="block w-6 h-px bg-navy mb-1.5" />
          <span className="block w-6 h-px bg-navy" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-cream border-t border-fog/60 px-6 py-4 space-y-3 text-navy">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-1" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
