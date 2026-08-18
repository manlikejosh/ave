import Logo from './Logo.jsx'
import { brand, navItems } from '../data/siteContent.js'

/**
 * Closing footer with the logo, quick links, and contact details.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Logo tone="light" withWordmark />
          <p className="mt-4 text-cream/60 font-light max-w-xs">{brand.tagline}</p>
        </div>

        <nav>
          <h3 className="text-sm uppercase tracking-widest text-cream/40 mb-4">Explore</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/80 hover:text-cream transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-cream/40 mb-4">Get in touch</h3>
          <ul className="space-y-2 text-cream/80">
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-cream transition-colors">
                {brand.email}
              </a>
            </li>
            <li>{brand.location}</li>
            <li>{brand.domain}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-cream/40">
          <span>© {year} {brand.name} {brand.subtitle}. All rights reserved.</span>
          <span className="text-base tracking-wide text-cream/50">Meet me in {brand.location}</span>
        </div>
      </div>
    </footer>
  )
}
