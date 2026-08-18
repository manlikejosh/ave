import { servicesSection, hero } from '../data/siteContent.js'

/**
 * "What does the ooo team handle?" — the list of services, rendered from the
 * Service model instances in siteContent.js. Add or remove a `new Service(...)`
 * there and this grid updates automatically.
 */
export default function Services() {
  return (
    <section id="services" className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-4xl sm:text-5xl mb-16 max-w-2xl">
          {servicesSection.heading}
        </h2>

        <ul className="grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden">
          {servicesSection.services.map((service, index) => (
            <li key={service.title} className="bg-navy p-8 flex flex-col gap-3">
              <span className="font-sans text-sm tracking-widest text-cream/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="text-cream/70 font-light leading-relaxed">{service.description}</p>
            </li>
          ))}

          {/* Trailing call-to-action tile — fills the final grid cell. */}
          <li className="bg-navy p-8 flex flex-col justify-center gap-3">
            <p className="font-serif text-2xl leading-snug">Behind your business.</p>
            <a
              href={hero.ctaHref}
              className="text-cream/70 hover:text-cream transition-colors underline underline-offset-4 w-fit"
            >
              Let’s Talk Business →
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
