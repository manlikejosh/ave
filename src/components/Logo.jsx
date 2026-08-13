import { brand } from '../data/siteContent.js'

/**
 * The AVE. wordmark. `tone` picks the colour so the same logo works on both
 * light and dark backgrounds.
 *
 * @param {{ tone?: 'light' | 'dark', withSubtitle?: boolean }} props
 */
export default function Logo({ tone = 'dark', withSubtitle = false }) {
  const color = tone === 'light' ? 'text-cream' : 'text-navy'

  return (
    <a href="#top" className={`inline-flex flex-col leading-none ${color}`} aria-label={`${brand.name} home`}>
      <span className="font-serif text-3xl tracking-tight">{brand.name}</span>
      {withSubtitle && (
        <span className="font-script text-lg -mt-1 opacity-80">{brand.subtitle}</span>
      )}
    </a>
  )
}
