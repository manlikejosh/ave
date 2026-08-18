import { about } from '../data/siteContent.js'

/**
 * "What is ooo?" — the agency's positioning statement.
 */
export default function About() {
  return (
    <section id="about" className="bg-cream text-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-serif text-4xl sm:text-5xl text-navy leading-tight">
            {about.heading}
          </h2>
        </div>

        <div className="md:col-span-7">
          <p className="text-xl sm:text-2xl font-light leading-relaxed text-ink/80">
            {about.body}
          </p>

          <div className="mt-12 border-t border-fog pt-8">
            <p className="font-serif text-3xl text-mocha">{about.fitHeadline}</p>
            <p className="font-serif text-3xl text-navy">{about.fitSubhead}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
