import { Link } from "react-router-dom";

import { PageHero } from "../components/PageHero";
import { getPublicProducts } from "../data/siteContent";

/* ------------------------------------------------------------------ */
/* Design tokens (من الديزاين)                                         */
/* ------------------------------------------------------------------ */
const FONT = "font-[family-name:var(--font-poppins)]";
const BLUE = "#1D4FFF";
const GREEN = "#0F8A00";
const TEAL = "#5B7F7A";
const GRAY_TEXT = "#4B4B4B";
const CARD_BORDER = "#9B9B9B";
const HERO_BTN_BLUE = "#124C9D";
// أبيض ← لافندر فاتح ← أخضر (بيتطبق على كل سطر لوحده)
const HERO_GRADIENT =
  "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 28%, #C3CCF7 40%, #2FB344 62%, #10A52B 100%)";

/* ------------------------------------------------------------------ */
/* Icons (SVG جاهزة جوه الكود، ممكن تستبدليها بملفات Figma)             */
/* ------------------------------------------------------------------ */
function ChartIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-[72px] w-[72px] shrink-0" aria-hidden="true">
      <g fill="#4AAEE3">
        <rect x="2" y="38" width="12" height="24" rx="2" />
        <rect x="18" y="28" width="12" height="34" rx="2" />
        <rect x="34" y="34" width="12" height="28" rx="2" />
        <rect x="50" y="22" width="12" height="40" rx="2" />
      </g>
      <polyline points="8,28 22,14 36,24 56,8" fill="none" stroke="#4AAEE3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {[[8, 28], [22, 14], [36, 24], [56, 8]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="#4AAEE3" />
      ))}
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-[72px] w-[72px] shrink-0" aria-hidden="true" fill="none" stroke="#4CAF00" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h26l14 14v38a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
      <path d="M40 4v14h14" />
      <path d="M20 30h24M20 40h24M20 50h12" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-[72px] w-[72px] shrink-0" aria-hidden="true" fill="none" stroke={TEAL} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18V5h13M47 5h13v13M4 46v13h13M47 59h13V46" strokeWidth="5" strokeLinecap="butt" />
      <path d="M8 32c8-11 16-16 24-16s16 5 24 16c-8 11-16 16-24 16S16 43 8 32z" />
      <circle cx="32" cy="32" r="8" />
      <circle cx="32" cy="32" r="3" fill={TEAL} />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true" fill="none" stroke="#A3A3A3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-4.2-7.6" />
      <path d="M8 12.5l3 3 9-10" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}
function Tick() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5" aria-label="Included" fill="none" stroke="#111" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4.5 4.5L19 7" />
    </svg>
  );
}

/* أيقونات قسم Why choose */
const whyIconProps = {
  viewBox: "0 0 64 64",
  className: "h-16 w-16",
  fill: "none",
  stroke: BLUE,
  strokeWidth: 3.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ChipIcon() {
  return (
    <svg {...whyIconProps}>
      <rect x="18" y="18" width="28" height="28" rx="4" />
      <rect x="25" y="25" width="14" height="14" rx="2" fill={BLUE} />
      <path d="M24 8v10M32 8v10M40 8v10M24 46v10M32 46v10M40 46v10M8 24h10M8 32h10M8 40h10M46 24h10M46 32h10M46 40h10" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg {...whyIconProps}>
      <path d="M10 58V22l14-8v44M24 58V8h30v50M6 58h52" />
      <path d="M32 18h4M42 18h4M32 28h4M42 28h4M32 38h4M42 38h4M18 32h2M18 42h2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...whyIconProps} fill={BLUE}>
      <path d="M32 4l22 8v18c0 15-9 25-22 30C19 55 10 45 10 30V12z" />
      <path d="M21 32l8 8 15-17" stroke="#fff" strokeWidth="6" fill="none" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg {...whyIconProps}>
      <path d="M18 40a11 11 0 0 1-1-21.9A15 15 0 0 1 45 15a13 13 0 0 1 3 25" />
      <path d="M32 40v8M32 48H18v6M32 48h14v6" />
      <circle cx="32" cy="38" r="3" fill={BLUE} />
      <circle cx="18" cy="56" r="3" fill={BLUE} />
      <circle cx="46" cy="56" r="3" fill={BLUE} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Product meta (يتعرف على المنتج من الـ slug أو الاسم)                */
/* ------------------------------------------------------------------ */
function getProductMeta(slug: string, name: string) {
  const key = `${slug} ${name}`.toLowerCase();
  if (key.includes("disclosure")) return { Icon: DocIcon, accent: GREEN };
  if (key.includes("eagle")) return { Icon: EyeIcon, accent: TEAL };
  return { Icon: ChartIcon, accent: BLUE };
}

/* ------------------------------------------------------------------ */
/* Static content                                                      */
/* ------------------------------------------------------------------ */
const comparisonRows: { feature: string; values: [boolean, boolean, boolean] }[] = [
  { feature: "Ai- Powered Analytics", values: [true, false, true] },
  { feature: "Financial Reporting", values: [true, true, false] },
  { feature: "Workflow Automation", values: [false, true, false] },
  { feature: "Compliance Management", values: [false, true, false] },
  { feature: "Real Time Monitoring", values: [false, false, true] },
  { feature: "Alerts& Notification", values: [false, false, true] },
];

const bestFor = [
  "CFO, Finance Teams , Financial Analysts",
  "Reporting Teams, Compliance",
  "Executives, COOs, Strategy& Performance Teams",
];

const whyCards = [
  { Icon: ChipIcon, title: "AI-Powered", text: "Advanced AI Models That Generate Intelligent Insights And Recommendations." },
  { Icon: BuildingIcon, title: "Enterprise Ready", text: "Scalable Architecture Built For Organizations Of Every Size." },
  { Icon: ShieldIcon, title: "Secure By Design", text: "Enterprise-Grade Security And Governance Across Every Solution." },
  { Icon: CloudIcon, title: "Seamless Integration", text: "Advanced AI Models That Generate Intelligent Insights And Recommendations." },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function ProductsPage() {  const approvedProducts = getPublicProducts();

  return (
    <div className={`page-stack business-vision-page ${FONT}`}>
      <PageHero
        // eyebrow="Products and IP Portfolio"
        imageSrc="/images/business-vision-figma/products-hero.jpeg"
        title={
          <span
            className="box-decoration-clone bg-clip-text uppercase text-transparent"
            style={{
              backgroundImage: HERO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Enterprise Products Built for Smarter Decisions
          </span>
        }
        description="Discover Business Vision's intelligent product portfolio, designed to help organizations streamline operations, unlock business insights, automate complex workflows, and accelerate digital transformation through AI-powered technologies."
        actions={
          <>
            <Link
              to="/contact"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_BTN_BLUE }}
            >
              Explore Products
            </Link>
            <Link
              to="/case-studies"
              className="rounded-lg border border-white/70 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Book A Demo
            </Link>
          </>
        }
      />

      {/* ============ Section 1: Product cards ============ */}
      <section className="bg-white py-16">
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-medium uppercase" style={{ color: BLUE }}>
              our product portofolio
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase text-black sm:text-[40px] sm:leading-tight">
              Powering Modern Enterprises
            </h2>
            <p
              className="mx-auto mt-4 max-w-[1130px] text-xl font-normal leading-snug sm:text-[28px]"
              style={{ color: GRAY_TEXT }}
            >
              Our products are designed to solve real business challenges by combining artificial intelligence,
              business intelligence, automation, and advanced analytics into scalable enterprise-ready solutions.
            </p>
          </div>

          <div className="mx-auto mt-12 grid grid-cols-1 max-w-[1300px] gap-6 lg:grid-cols-3">
            {approvedProducts.map((product) => {
              const { Icon, accent } = getProductMeta(product.slug, product.name);
              return (
                <article
                  key={product.slug}
                  className="flex flex-col rounded-[28px] border-[3px] bg-white px-6 pb-8 pt-8 shadow-sm"
                  style={{ borderColor: CARD_BORDER }}
                >
                  <div className="flex items-center gap-5">
                    <Icon />
                    <div className="min-w-0">
                      <h3 className="break-words text-2xl font-semibold leading-tight text-black sm:text-[32px]">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-normal" style={{ color: accent }}>
                        {product.categoryLabel}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-[15px] font-normal leading-snug" style={{ color: GRAY_TEXT }}>
                    {product.summary}
                    <br />
                    {product.businessOutcome}
                  </p>

                  <h4 className="mt-6 text-[22px] font-semibold" style={{ color: GRAY_TEXT }}>
                    Core capabilities
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {product.capabilities.slice(0, 4).map((capability) => (
                      <li key={capability} className="flex items-center gap-3 text-[15px] text-black">
                        <CheckCircle />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {product.idealFor.map((audience) => (
                      <span
                        key={audience}
                        className="rounded-full border px-4 py-2 text-base font-normal"
                        style={{ borderColor: "#444", color: GRAY_TEXT }}
                      >
                        {audience}
                      </span>
                    ))}
                  </div>

                  {/* Detail pages are not linked yet; this stays inert until their content is ready */}
                  <div className="mt-auto flex justify-end pt-10 pr-6">
                    <button
                      type="button"
                      className="inline-flex cursor-pointer items-center gap-2 text-lg font-medium hover:underline"
                      style={{ color: accent }}
                    >
                      Open Product Detail
                      <ArrowRight />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Section 2: Comparison table ============ */}
      {/* <section className="py-16" style={{ backgroundColor: "#F8FCF1" }}>
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-medium uppercase" style={{ color: BLUE }}>
              our product portofolio
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase text-black sm:text-[40px] sm:leading-tight">
              Powering Modern Enterprises
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-[1240px] rounded-3xl border border-slate-200 bg-white p-4 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-0 overflow-hidden rounded-xl border border-slate-200 text-center">
                <thead>
                  <tr style={{ backgroundColor: "#F1F1F1" }}>
                    <th className="px-4 py-4 text-left text-lg font-medium text-black">Features</th>
                    <th className="px-4 py-4 text-lg font-medium text-black">FinSight</th>
                    <th className="px-4 py-4 text-lg font-medium text-black">FinDisclosure</th>
                    <th className="px-4 py-4 text-lg font-medium text-black">Eagle Eye</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="border-t border-slate-200 px-4 py-4 text-left text-base font-medium text-black">
                        {row.feature}
                      </td>
                      {row.values.map((has, i) => (
                        <td key={i} className="border-t border-slate-200 px-4 py-4">
                          {has ? <Tick /> : <span className="text-slate-400">–</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="border-t border-slate-200 px-4 py-4 text-left text-base font-medium text-black">
                      Best For
                    </td>
                    {bestFor.map((text) => (
                      <td key={text} className="border-t border-slate-200 px-4 py-4 text-sm" style={{ color: GRAY_TEXT }}>
                        {text}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* ============ Section 3: Why choose ============ */}
      <section className="bg-[#f7faf2] py-16">
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-medium uppercase" style={{ color: BLUE }}>
              why choose our products
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase text-black sm:text-[40px] sm:leading-tight">
              Designed for Enterprise Success
            </h2>
          </div>

          <div className="mx-auto mt-10 grid grid-cols-1 max-w-[1300px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map(({ Icon, title, text }) => (
              <article
                key={title}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
              >
                <Icon />
                <h3 className="mt-4 text-lg font-bold uppercase" style={{ color: BLUE }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed" style={{ color: GRAY_TEXT }}>
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <CtaBanner
        title="Select the right product entry point for your transformation agenda."
        description="Align product fit, governance requirements, and delivery pathways before implementation commitment."
        primary={{ href: "/contact", label: "Book a Discovery Session" }}
        secondary={{ href: "/solutions", label: "Talk to an Expert" }}
      /> */}
    </div>
  );
}