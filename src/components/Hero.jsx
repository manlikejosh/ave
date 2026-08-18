import { hero, brand, media } from '../data/siteContent.js'

/**
 * Full-height opening section. Deep navy backdrop with an editorial photograph
 * from the content deck sitting behind a dark overlay, keeping the serif
 * headline legible.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-navy text-cream overflow-hidden"
    >
      {/* Background photograph (from the Figma content page) */}
      <img
        src={media.workspace}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      {/* Navy gradient overlay for text contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,26,43,0.96) 0%, rgba(15,26,43,0.82) 45%, rgba(15,26,43,0.55) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-cream/60">{hero.eyebrow}</p>

        <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-3xl">
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
