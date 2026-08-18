import { media } from '../data/siteContent.js'

/**
 * A full-width band featuring the campaign collage from the Figma content page.
 * The image is self-contained (it carries its own headline), so we just frame
 * it nicely on a dark band.
 */
export default function Campaign() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="text-cream">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-cream/50">
            the work
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">
            There’s a kind of business we like.
          </h2>
          <p className="mt-6 text-cream/70 font-light max-w-md">
            The ones that know they can be doing more — and are ready to do it with
            a team that treats their brand like its own.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={media.campaign}
            alt="ooo campaign — the ones that know they can be doing more"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
