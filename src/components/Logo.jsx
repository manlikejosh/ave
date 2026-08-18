import { brand } from '../data/siteContent.js'

/**
 * The "ooo" brand mark: two rings and a capsule, matching the Figma logo.
 * Drawn as inline SVG so it stays sharp at any size and inherits the current
 * text colour (via `stroke="currentColor"`).
 */
function OooMark({ className = '' }) {
  return (
    <svg viewBox="0 0 96 32" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="14" cy="16" r="11" strokeWidth="5" />
      <circle cx="42" cy="16" r="11" strokeWidth="5" />
      <rect x="55" y="5" width="38" height="22" rx="11" strokeWidth="5" />
    </svg>
  )
}

/**
 * Full logo lockup. `tone` picks the colour so the same logo works on both
 * light and dark backgrounds. Set `withWordmark` to show "marketing collective"
 * next to the mark.
 *
 * @param {{ tone?: 'light' | 'dark', withWordmark?: boolean }} props
 */
export default function Logo({ tone = 'dark', withWordmark = false }) {
  const color = tone === 'light' ? 'text-cream' : 'text-navy'

  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${color}`} aria-label={`${brand.name} ${brand.subtitle} home`}>
      <OooMark className="h-4 w-auto" />
      {withWordmark && (
        <span className="font-sans font-semibold text-lg tracking-tight">{brand.subtitle}</span>
      )}
    </a>
  )
}
