import { Link, useParams } from "react-router-dom";

import { NotFound } from "../components/NotFound";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { getPublicProductBySlug } from "../data/siteContent";

export default function ProductDetailPage() {
  const { slug = "" } = useParams();
  const product = getPublicProductBySlug(slug);
  if (!product) return <NotFound />;

  return (
    <div className="page-stack page-stack-lg">
      <PageHero
        eyebrow="Product"
        title={product.name}
        description={product.summary}
        actions={
          <>
            <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm font-semibold">
              Request product scope
            </Link>
            <Link to="/products" className="btn-secondary px-5 py-2.5 text-sm font-semibold">
              Back to products
            </Link>
          </>
        }
      />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <p className="kicker">Business Problem</p>
          <h2 className="section-title mt-2 text-2xl text-slate-950">What this product helps clarify</h2>
          <p className="mt-3 text-sm text-slate-700">{product.businessProblem}</p>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Business outcome</h2>
          <p className="mt-3 text-sm text-slate-700">{product.businessOutcome}</p>
          <p className="mt-4 text-sm font-semibold text-slate-900">Best-fit audience</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {product.idealFor.map((item) => (
              <li key={item} className="data-marker">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Product scope</h2>
          <p className="mt-3 text-sm text-slate-700">{product.proofBoundary}</p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Core capabilities</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {product.capabilities.map((item) => (
              <li key={item} className="data-marker">{item}</li>
            ))}
          </ul>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Integration context</h2>
          <p className="mt-3 text-sm text-slate-700">{product.integrationContext}</p>
          <p className="mt-5 text-sm font-semibold text-slate-900">Governance and confidence</p>
          <p className="mt-2 text-sm text-slate-700">{product.governanceNote}</p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Operating fit</h2>
          <p className="mt-3 text-sm text-slate-700">
            Business Vision scopes each product around decision ownership, data readiness, governance requirements, and measurable executive outcomes before implementation commitment.
          </p>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Discovery sequence</h2>
          <p className="mt-3 text-sm text-slate-700">
            A product conversation starts with the business decision to improve, the evidence available today, and the governance level required for safe rollout.
          </p>
        </article>
      </section>

      <CtaBanner
        title="Need stakeholder-ready product scoping?"
        description="Start with a fit session to align business owner, technical owner, and procurement requirements."
        primary={{ href: "/contact", label: "Book a Consultation" }}
        secondary={{ href: "/case-studies", label: "Explore Case Studies" }}
      />
    </div>
  );
}
