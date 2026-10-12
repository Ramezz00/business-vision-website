import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="bg-[#03102B] px-6 pb-32 pt-56 text-center text-white">
      <h1 className="text-4xl font-bold sm:text-5xl">Page coming soon</h1>
      <p className="mx-auto mt-4 max-w-[520px] text-slate-300">
        This page is not available yet. Head back to the homepage to keep exploring.
      </p>
      <Link to="/" className="btn-primary mt-8 px-6 py-3 text-sm font-medium">
        Back to home
      </Link>
    </section>
  )
}
