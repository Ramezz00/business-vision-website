import { Link, useParams } from "react-router-dom";

import { NotFound } from "../components/NotFound";
import { PageHero } from "../components/PageHero";
import { getIndustryPageModels } from "../data/siteContent";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industryModel = getIndustryPageModels().find((item) => item.slug === slug);
  if (!industryModel) return <NotFound />;

  return (
    <div className="page-stack page-stack-lg">
      <PageHero
        eyebrow="Industry"
        title={industryModel.name}
        description={
          industryModel.insightBlock?.headline ??
          "Industry blueprint combining consulting-led strategy, data and AI execution, and governance-first scaling."
        }
        actions={
          <>
            <Link
              to="/contact"
              className="btn-dark px-5 py-2.5 text-sm font-semibold"
            >
              Strategy workshop
            </Link>
            <Link
              to="/ai-concierge"
              className="btn-secondary px-5 py-2.5 text-sm font-semibold"
            >
              Ask Fox
            </Link>
          </>
        }
      />

      <section className="surface-card rounded-3xl p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Industry focus model</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="rounded-xl bg-white px-3 py-2">Business challenge decomposition into measurable decision domains</li>
          <li className="rounded-xl bg-white px-3 py-2">Prioritized AI and data use-case portfolio with feasibility and value scoring</li>
          <li className="rounded-xl bg-white px-3 py-2">Governed execution with clear ownership and operating model controls</li>
        </ul>
        {industryModel.insightBlock ? (
          <>
            <p className="mt-5 text-sm text-slate-700">
              Business Vision frames {industryModel.name.toLowerCase()} work around practical transformation priorities, relevant data and AI capabilities, and adoption controls suited to enterprise environments.
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Typical challenge patterns
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {industryModel.insightBlock.typicalChallenges.slice(0, 3).map((challenge) => (
                    <li key={challenge} className="rounded-xl bg-slate-50 px-3 py-2">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Relevant capabilities
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {industryModel.insightBlock.relevantCapabilities.slice(0, 6).map((capability) => (
                    <li key={capability} className="rounded-xl bg-slate-50 px-3 py-2">
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </>
        ) : null}
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related customer and ecosystem contexts</h2>
        <div className="mt-5 rounded-3xl border border-amber-300 bg-amber-50 p-6">
          <p className="text-sm text-amber-800">
            Business Vision can discuss comparable transformation patterns, sector priorities, and relevant workflows during a scoped conversation.
          </p>
        </div>
      </section>

      {industryModel.insightBlock?.exampleNamedCustomers?.length ? (
        <section className="surface-card rounded-3xl p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Example sector contexts
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {industryModel.insightBlock.exampleNamedCustomers.map((customer) => (
              <span
                key={customer}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700"
              >
                {customer}
              </span>
            ))}
          </div>
          {industryModel.insightBlock.exampleAnonymousUseCases.length ? (
            <p className="mt-4 text-sm text-slate-600">
              Additional workflow examples include:{" "}
              {industryModel.insightBlock.exampleAnonymousUseCases.slice(0, 2).join(" ")}
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
