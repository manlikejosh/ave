import { consultation, hero } from '../data/siteContent.js'

/**
 * The warm "let's sit down" invitation — mocha card echoing the brand deck.
 */
export default function Consultation() {
  return (
    <section id="consultation" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-mocha text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
          <p className="font-serif text-3xl sm:text-4xl max-w-2xl mx-auto leading-snug">
            {consultation.intro}
          </p>

          <p className="font-serif italic text-3xl mt-8 text-cream/80">{consultation.invite}</p>

          <p className="mt-8 max-w-xl mx-auto font-light text-cream/80">{consultation.body}</p>

          <a
            href={hero.ctaHref}
            className="inline-block mt-10 rounded-full bg-cream px-8 py-3 text-mocha font-medium hover:bg-white transition-colors"
          >
            {consultation.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
