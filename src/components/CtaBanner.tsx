import { Link } from 'react-router-dom'

interface CtaLink {
  href: string
  label: string
}

interface CtaBannerProps {
  title: string
  description: string
  primary: CtaLink
  secondary: CtaLink
}

export function CtaBanner({ title, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="rounded-3xl bg-[#03102B] px-8 py-12 text-center text-white">
      <h2 className="mx-auto max-w-[760px] text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-[680px] text-sm text-slate-300 sm:text-base">{description}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link to={primary.href} className="btn-primary px-6 py-3 text-sm font-medium">
          {primary.label}
        </Link>
        <Link
          to={secondary.href}
          className="rounded-lg border border-white/70 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
        >
          {secondary.label}
        </Link>
      </div>
    </section>
  )
}
