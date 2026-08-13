import { hero, brand } from '../data/siteContent.js'

/**
 * Full-height opening section. Deep navy backdrop with the editorial serif
 * headline, echoing the AVE. brand deck.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-navy text-cream overflow-hidden"
    >
      {/* Subtle radial glow for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 30%, rgba(84,58,44,0.55) 0%, rgba(15,26,43,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <p className="font-script text-2xl text-cream/70">{hero.eyebrow}</p>

        <h1 className="mt-4 font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.95]">
          {hero.headline}
        </h1>

        <p className="mt-8 max-w-xl text-lg text-cream/75 font-light">{hero.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={hero.ctaHref}
            className="rounded-full bg-cream px-8 py-3 text-navy font-medium hover:bg-white transition-colors"
          >
            {hero.ctaLabel}
          </a>
          <span className="text-sm text-cream/50 tracking-wide">
            {brand.subtitle} — {brand.location}
          </span>
        </div>
      </div>
    </section>
  )
}
