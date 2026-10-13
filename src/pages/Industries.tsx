import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { PageHero } from "../components/PageHero";
import { getIndustryPageModels } from "../data/siteContent";

/* ------------------------------------------------------------------ */
/* Design tokens                                                       */
/* ------------------------------------------------------------------ */
const FONT = "font-[family-name:var(--font-poppins)]";
const BLUE = "#1D4FFF";
const NAVY = "#0A1B45";
const HERO_BTN_BLUE = "#124C9D";
const GRAY_TEXT = "#4B4B4B";
const HERO_GRADIENT = "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 42%, #4CC24A 52%, #1FA7A0 100%)";

/* ------------------------------------------------------------------ */
/* Icons (SVG جاهزة، بتاخد لونها من currentColor)                      */
/* ------------------------------------------------------------------ */
const line = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-full w-full",
  "aria-hidden": true,
};
const solid = { viewBox: "0 0 48 48", fill: "currentColor", className: "h-full w-full", "aria-hidden": true };
const STAR = "M0 -6 L1.8 -1.9 L6.2 -1.5 L2.9 1.4 L3.9 5.7 L0 3.4 L-3.9 5.7 L-2.9 1.4 L-6.2 -1.5 L-1.8 -1.9 Z";

/* --- Stats --- */
const PeopleIcon = () => (
  <svg {...line}>
    <circle cx="24" cy="26" r="5" />
    <path d="M15 41c0-5 4-8 9-8s9 3 9 8" />
    <circle cx="10" cy="31" r="3.5" />
    <path d="M3 42c0-4 3-6 7-6" />
    <circle cx="38" cy="31" r="3.5" />
    <path d="M45 42c0-4-3-6-7-6" />
    <path d={STAR} transform="translate(24 8)" />
    <path d={STAR} transform="translate(8 16) scale(0.8)" />
    <path d={STAR} transform="translate(40 16) scale(0.8)" />
  </svg>
);
const BuildingGearIcon = () => (
  <svg {...line}>
    <path d="M17 36V16h14v20" />
    <path d="M21 20h2M25 20h2M21 25h2M25 25h2M21 30h2M25 30h2" />
    <path d="M8 26a16 16 0 0 0 32 0" />
    <path d="M24 4v4M12 9l3 3M36 9l-3 3M5 19h4M39 19h4" />
  </svg>
);
const GrowthHandIcon = () => (
  <svg {...line}>
    <circle cx="26" cy="17" r="9" />
    <path d="M26 4v4M26 26v4M13 17h4M35 17h4" />
    <polyline points="20 21 25 16 28 19 33 12" />
    <path d="M4 34l8-3 10 3h8l8-5a3 3 0 0 1 3 5l-12 8H16L4 40z" />
  </svg>
);

/* --- Industries --- */
const BankIcon = () => (
  <svg {...solid}>
    <path d="M24 5L5 15h38z" />
    <rect x="9" y="19" width="6" height="16" />
    <rect x="21" y="19" width="6" height="16" />
    <rect x="33" y="19" width="6" height="16" />
    <rect x="5" y="38" width="38" height="5" />
  </svg>
);
const HeartIcon = () => (
  <svg {...solid}>
    <path d="M24 42C10 31 5 24 5 16a10 10 0 0 1 19-4 10 10 0 0 1 19 4c0 8-5 15-19 26z" />
    <polyline points="10 24 18 24 21 17 26 31 29 24 38 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const FactoryIcon = () => (
  <svg {...line}>
    <circle cx="16" cy="16" r="6" />
    <path d="M16 5v3M16 24v3M5 16h3M24 16h3M8 8l2 2M24 8l-2 2M8 24l2-2" />
    <path d="M28 10h8l6 8M36 10v8" />
    <rect x="6" y="32" width="36" height="9" rx="2" />
    <path d="M14 32v-6h8v6M28 32v-4h8v4" />
  </svg>
);
const CartIcon = () => (
  <svg {...line}>
    <path d="M4 8h6l5 22h22l4-16H13" />
    <circle cx="18" cy="38" r="3" />
    <circle cx="34" cy="38" r="3" />
  </svg>
);
const GovIcon = () => (
  <svg {...line}>
    <path d="M24 5L6 14h36z" />
    <path d="M11 18v18M19 18v18M29 18v18M37 18v18M6 40h36M4 44h40" />
  </svg>
);
const BoltIcon = () => (
  <svg {...solid}>
    <path d="M27 3L9 27h13l-3 18 20-26H26z" />
  </svg>
);
const AntennaIcon = () => (
  <svg {...line}>
    <circle cx="24" cy="20" r="3.5" fill="currentColor" />
    <path d="M17 13a10 10 0 0 0 0 14M31 13a10 10 0 0 1 0 14M11 8a18 18 0 0 0 0 24M37 8a18 18 0 0 1 0 24" />
    <path d="M24 26l-7 18M24 26l7 18M19 38h10" />
  </svg>
);
const CapIcon = () => (
  <svg {...solid}>
    <path d="M24 8L2 18l22 10 22-10z" />
    <path d="M12 25v9c0 3 6 6 12 6s12-3 12-6v-9l-12 5z" />
    <path d="M42 20v15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);
const BurgerIcon = () => (
  <svg {...line}>
    <path d="M8 22a16 16 0 0 1 32 0z" />
    <path d="M6 28h36M8 33h32" />
    <path d="M10 33v3a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-3" />
  </svg>
);

/* --- Capabilities --- */
const CodeIcon = () => (
  <svg {...line}>
    <rect x="4" y="6" width="40" height="36" rx="8" />
    <path d="M19 17l-6 7 6 7M29 17l6 7-6 7M26 15l-4 18" />
  </svg>
);
const BrainIcon = () => (
  <svg {...line}>
    <path d="M24 9c-6-6-15-2-14 6-5 3-4 10 1 12-1 6 4 11 10 9" />
    <path d="M24 9v30M24 18h10M24 28h8M34 18v-5M32 28v7" />
    <circle cx="36" cy="11" r="2" />
    <circle cx="36" cy="37" r="2" />
    <circle cx="40" cy="18" r="2" />
  </svg>
);
const GrowthIcon = () => (
  <svg {...solid}>
    <rect x="5" y="30" width="7" height="12" />
    <rect x="15" y="24" width="7" height="18" />
    <rect x="25" y="18" width="7" height="24" />
    <rect x="35" y="12" width="7" height="30" />
    <polyline points="6 20 18 12 26 16 40 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DatabaseIcon = () => (
  <svg {...line}>
    <ellipse cx="18" cy="10" rx="12" ry="5" />
    <path d="M6 10v8c0 3 5 5 12 5M6 18v8c0 3 5 5 12 5M30 10v6" />
    <circle cx="34" cy="33" r="6" />
    <path d="M34 22v3M34 41v3M23 33h3M42 33h3M26 25l2 2M42 25l-2 2M26 41l2-2M42 41l-2-2" />
  </svg>
);
const IntegrationIcon = () => (
  <svg {...line}>
    <circle cx="24" cy="14" r="6" />
    <path d="M24 4v3M24 21v3M14 14h3M31 14h3M17 7l2 2M31 7l-2 2" />
    <path d="M24 24v8M24 32H12v8M24 32h12v8M24 32v8" />
    <circle cx="12" cy="42" r="2" />
    <circle cx="24" cy="42" r="2" />
    <circle cx="36" cy="42" r="2" />
  </svg>
);
const MonitorGearIcon = () => (
  <svg {...line}>
    <rect x="4" y="6" width="40" height="28" rx="3" />
    <path d="M18 42h12M24 34v8" />
    <circle cx="24" cy="20" r="5" />
    <path d="M24 10v3M24 27v3M14 20h3M31 20h3M17 13l2 2M31 13l-2 2M17 27l2-2M31 27l-2-2" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
const stats: { value: string; label: string; Icon: () => ReactNode }[] = [
  { value: "+11", label: "Years of experience", Icon: PeopleIcon },
  { value: "+30", label: "Enterprise Clients", Icon: BuildingGearIcon },
  { value: "+50", label: "Years Combined Expertise", Icon: GrowthHandIcon },
];

const industryCards: {
  key: string;
  name: string;
  color: string;
  bg: string;
  Icon: () => ReactNode;
  bullets: string[];
}[] = [
  { key: "banking", name: "Banking", color: "#1D4FFF", bg: "#E6EEFF", Icon: () => <img src="/icons/ind-banking.png" alt="" />, bullets: ["regulatory compliance", "financial reporting", "risk management", "fraud detection"] },
  { key: "health", name: "Healthcare", color: "#12B21A", bg: "#E3F8E5", Icon: () => <img src="/icons/ind-healthcare.png" alt="" />, bullets: ["patient data management", "compliance", "operational efficiency", "performance reporting"] },
  { key: "manufactur", name: "Manufacturing", color: "#F59A1B", bg: "#FFF3E0", Icon: () => <img src="/icons/ind-manufacturing.png" alt="" />, bullets: ["production visibility", "supply chain optimization", "operational efficiency", "quality control"] },
  { key: "retail", name: "Retail", color: "#E5469A", bg: "#FFEDF6", Icon: () => <img src="/icons/ind-retail.png" alt="" />, bullets: ["customer behavior", "sales forcasting", "inventory optimization", "omnichannel insight"] },
  { key: "government", name: "Government", color: "#1D4FFF", bg: "#E6EEFF", Icon: () => <img src="/icons/ind-government.png" alt="" />, bullets: ["digital transformation", "data governance", "performance transparency", "citizen services"] },
  // { key: "energy", name: "Energy & Utilities", color: "#F8C21B", bg: "#FFF6CC", Icon: BoltIcon, bullets: ["asset monitoring", "performance optimization", "regulatory reporting", "energy management"] },
  { key: "telecom", name: "Telecom", color: "#12B21A", bg: "#E3F8E5", Icon: () => <img src="/icons/ind-telecom.png" alt="" />, bullets: ["network performance", "customer experience", "service monitoring", "fault prediction"] },
  // { key: "education", name: "Education", color: "#C8239E", bg: "#FBEFFB", Icon: CapIcon, bullets: ["student performance", "resource management", "digital learning", "institutional reporting"] },
  { key: "food", name: "Oil and Gas", color: "#3C5FD6", bg: "#E6EEFF", Icon: () => <img src="/icons/ind-oilgas.png" alt="" />, bullets: ["smart inventory", "demand forecasting", "supply optimization", "quality assurance"] },
];

const capabilities: { title: string; text: string; Icon: () => ReactNode }[] = [
  { title: "Enterprise Software", text: "Custom Applications Built Around Your Business Processes.", Icon: CodeIcon },
  { title: "Artificial Intelligence", text: "Ai Solutions That Improve Forecasting, Automation And Decision Support.", Icon: BrainIcon },
  { title: "Business Intelligence", text: "Interactive Dashboards And Executive Reporting For Informed Decision.", Icon: GrowthIcon },
  { title: "Data Management", text: "Reliable, Governed, And Scalable Enterprise Data Platforms.", Icon: DatabaseIcon },
  { title: "Integration Services", text: "Connect ERP, CRM, Finance, HR, And Operational Systems Into One Ecosystem.", Icon: IntegrationIcon },
  { title: "Digital Transformation", text: "Technology Strategies That Accelerate Enterprise Growth.", Icon: MonitorGearIcon },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function IndustriesPage() {
  // بنجيب الـ slug الحقيقي من الداتا لو موجود، وإلا بنستخدم الكلمة المفتاحية
  const industries = getIndustryPageModels();
  const slugFor = (key: string) =>
    industries.find((i) => i.name.toLowerCase().includes(key) || i.slug.toLowerCase().includes(key))?.slug ?? key;

  return (
    <div className={`page-stack business-vision-page ${FONT}`}>
      <PageHero
        eyebrow=""
        imageSrc="/images/business-vision-figma/industries-hero.jpeg"
        title={
          <span
            className="box-decoration-clone bg-clip-text uppercase text-transparent"
            style={{
              backgroundImage: HERO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industries We Empower
          </span>
        }
        description="Every industry faces unique operational challenges and evolving market demands. Our intelligent solutions combine trusted data, advanced analytics, enterprise AI, and automation to help organizations improve performance, increase efficiency, and drive continuous innovation."
        actions={
          <>
            <Link
              to="/industries"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_BTN_BLUE }}
            >
              View Industries
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/70 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Schedule a Discovery Call
            </Link>
          </>
        }
      />

      {/* ============ Stats bar (متداخل مع آخر الهيرو) ============ */}
      <section className="container-x relative z-10 -mt-24">
        <div
          className="mx-auto grid max-w-[1300px] rounded-xl border-2 border-white/80 px-6 py-8 shadow-[0_8px_20px_rgba(0,0,0,0.35)] md:grid-cols-3"
          style={{ backgroundColor: NAVY }}
        >
          {stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-5 py-4 md:border-l md:border-white/80 md:first:border-l-0"
            >
              <div className="h-[84px] w-[84px] shrink-0 text-[#5B8DEF]">
                <Icon />
              </div>
              <div className="text-center">
                <p className="text-[44px] font-bold leading-none" style={{ color: "#2F5BFF" }}>
                  {value}
                </p>
                <p className="mt-2 max-w-[200px] text-[22px] font-medium leading-tight text-white">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Industries We Serve ============ */}
      <section className="bg-white py-14">
        <div className="container-x">
          <div className="text-center">
            <p className="text-xl font-medium uppercase" style={{ color: BLUE }}>
              Industries We Serve
            </p>
            <h2 className="mx-auto mt-2 max-w-[1100px] text-3xl font-bold uppercase leading-tight text-black sm:text-[40px]">
              Deep Industry Understanding , Smarter Solutions , Better Outcomes.
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-[1400px] flex-wrap justify-center gap-5">
            {industryCards.map(({ key, name, color, bg, Icon, bullets }) => (
              <article
                key={key}
                className="flex w-full flex-col rounded-xl border border-slate-300 bg-white px-5 pb-6 pt-6 shadow-sm sm:w-[calc(50%-10px)] lg:w-[calc(20%-16px)]"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: bg, color }}
                >
                  <div className="h-10 w-10">
                    <Icon />
                  </div>
                </div>

                <h3 className="mt-5 min-h-[56px] text-center text-xl font-medium uppercase leading-snug" style={{ color: "#333" }}>
                  {name}
                </h3>

                <ul className="mt-4 space-y-3">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[14px] text-black">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-black" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    to={`/industries/${slugFor(key)}`}
                    className="inline-flex items-center gap-3 text-[15px] font-normal uppercase hover:underline"
                    style={{ color: BLUE }}
                  >
                    View Solutions
                    <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Enterprise Capabilities ============ */}
      <section className="py-16" style={{ backgroundColor: "#F7FCEF" }}>
        <div className="container-x">
          <div className="text-center">
            <p className="text-xl font-medium uppercase" style={{ color: BLUE }}>
              Enterprise Capabilities
            </p>
            <h2 className="mx-auto mt-2 max-w-[1100px] text-3xl font-bold uppercase leading-tight text-black sm:text-[40px]">
              End-to-End Capabilities That Power Intelligent Interprise
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1300px] gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {capabilities.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="px-4 text-center lg:border-l lg:border-slate-300 lg:first:border-l-0"
              >
                <div className="mx-auto h-14 w-14" style={{ color: BLUE }}>
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold uppercase leading-snug text-black">{title}</h3>
                <p className="mt-3 text-sm font-normal leading-relaxed" style={{ color: GRAY_TEXT }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}