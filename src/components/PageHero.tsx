import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  actions?: ReactNode
  imageSrc?: string
}

// The image is optional: if the file is missing the navy gradient still shows.
export function PageHero({ eyebrow, title, description, actions, imageSrc }: PageHeroProps) {
  const layers = [
    'linear-gradient(90deg, rgba(2, 11, 36, 0.92) 0%, rgba(2, 11, 36, 0.6) 55%, rgba(2, 11, 36, 0.25) 100%)',
    ...(imageSrc ? [`url(${imageSrc})`] : []),
    'linear-gradient(135deg, #020b24 0%, #0a1b45 60%, #124c9d 100%)',
  ].join(', ')

  return (
    <section
      className="bv-hero relative bg-top bg-no-repeat bg-contain pb-40 pt-52 text-white sm:bg-cover sm:bg-center"
      style={{ backgroundImage: layers }}
    >
      <div className="container-x">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-[900px] text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px]">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-[760px] text-base leading-relaxed text-slate-200 sm:text-lg">{description}</p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  )
}
