import { Link } from "react-router-dom";

import { PageHero } from "../components/PageHero";

const FONT = "font-[family-name:var(--font-poppins)]";
const OPEN_SANS = "font-[family-name:'Open_Sans',system-ui,sans-serif]";

type StepIconName = "question" | "bulb" | "workflow" | "chart";

const offerArchitecture: { title: string; copy: string; icon: StepIconName }[] = [
  {
    title: "Board Question",
    copy: "Start with the leadership decision, operating constraint, and measurable outcome that need clarity.",
    icon: "question",
  },
  {
    title: "Capability Path",
    copy: "Select the planning, data, AI, analytics, or operating capability needed to answer that question.",
    icon: "bulb",
  },
  {
    title: "Delivery Model",
    copy: "Define owners, dependencies, governance checkpoints, adoption cadence, and support expectations.",
    icon: "workflow",
  },
  {
    title: "Value Rhythm",
    copy: "Measure adoption, improve the operating model, and keep the roadmap aligned to business outcomes.",
    icon: "chart",
  },
];

type SolutionCard = {
  icon: string;
  name: string;
  question: string;
  intro: string;
  detail: string;
  tags: string[];
};

const solutionCards: SolutionCard[] = [
  {
    icon: "enterprise-resource-planning_1.svg",
    name: "Enterprise Planning & Performance",
    question: "How do we make planning, forecasting, and performance reviews faster and more reliable?",
    intro:
      "Connect strategic targets, budgets, forecasts, scenarios, and board visibility into a disciplined performance rhythm.",
    detail:
      "This pillar helps leadership teams replace fragmented planning cycles with governed assumptions, clearer accountability, and decision-ready performance views.",
    tags: ["EPM", "Planning", "Forecasting", "Performance"],
  },
  {
    icon: "enterprise-resource-planning_1-1.svg",
    name: "Data Foundation & Governance",
    question: "Can leaders trust the data behind critical decisions?",
    intro:
      "Modernize data platforms, pipelines, ownership, and quality controls so analytics and AI have a dependable foundation.",
    detail:
      "This pillar addresses the operating reality behind enterprise intelligence: data movement, quality, ownership, platform resilience, and governance routines.",
    tags: ["Data engineering", "Governance", "Quality", "Platform"],
  },
  {
    icon: "enterprise-resource-planning_1-2.svg",
    name: "Decision Intelligence & Analytics",
    question: "What should leaders see earlier, and what action should follow?",
    intro:
      "Turn metrics, exceptions, forecasts, and operating context into decision-ready views and guided management routines.",
    detail:
      "This pillar focuses on executive and operational decisions, not dashboards as decoration. Analytics become a working layer for prioritization, escalation, and action.",
    tags: ["BI & Analytics", "KPI models", "Workflows", "Scenario"],
  },
  {
    icon: "enterprise-resource-planning_1-3.svg",
    name: "Enterprise AI & Intelligent Automation",
    question: "Where can AI reduce work friction without losing human control?",
    intro:
      "Design AI-assisted workflows, agents, and intelligent automation around real operating processes, escalation paths, and adoption requirements.",
    detail:
      "This pillar takes AI from experimentation into governed workflow design, with human ownership, knowledge grounding, and measurable service or process impact.",
    tags: ["AI agents", "Automation", "Knowledge", "Human-in-loop"],
  },
  {
    icon: "enterprise-resource-planning_1-4.svg",
    name: "AI Strategy, Governance & Adoption",
    question: "Which AI initiatives deserve investment, and how do we scale them responsibly?",
    intro:
      "Prioritize AI opportunities, shape governance, and align leadership around a practical roadmap from readiness to adoption.",
    detail:
      "This pillar gives executives a controlled way to move from AI ambition to investment decisions, sequencing, operating model design, and adoption governance.",
    tags: ["AI strategy", "Use-case", "Readiness", "Advisory"],
  },
  {
    icon: "enterprise-resource-planning_1-5.svg",
    name: "Operate, Support & Optimize",
    question: "How do we keep transformation value alive after go-live?",
    intro:
      "Operate, support, monitor, and improve data, AI, and performance environments with clear service accountability.",
    detail:
      "This pillar protects continuity after delivery. It covers support ownership, release management, incident pathways, performance monitoring, and roadmap evolution.",
    tags: ["Managed services", "SLA", "Optimization", "Support"],
  },
];

// Industry list in the same order as the Figma design.
const industries = [
  "Telecommunications",
  "Manufacturing",
  "Oil and Gas",
  "Real Estate",
  "Pharmaceutical",
  "Government",
  "Financial Services",
  "Food and Beverage",
];

// Technology logos. Each logo file has different empty space around it,
// so each one gets its own display height to look the same size on the page.
const techStack = [
  { file: "power-bi.png", name: "Power BI", width: 180, height: 100, className: "h-[88px]" },
  { file: "sql-server.png", name: "Microsoft SQL Server", width: 209, height: 55, className: "h-[50px]" },
  { file: "dotnet.png", name: "Microsoft .NET", width: 177, height: 100, className: "h-[92px]" },
  { file: "react.png", name: "React", width: 178, height: 100, className: "h-[88px]" },
  { file: "ibm-planning-analytics.png", name: "IBM Planning Analytics", width: 140, height: 78, className: "h-[66px]" },
];

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.6 6 4 9.4 10 10-6 .6-9.4 4-10 10-.6-6-4-9.4-10-10 6-.6 9.4-4 10-10z" />
    </svg>
  );
}

function StepIcon({ name }: { name: StepIconName }) {
  const common = {
    width: 52,
    height: 52,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "question") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="15" />
        <path d="M19.5 20a4.5 4.5 0 1 1 6.5 4c-1.4.8-2 1.6-2 3" />
        <circle cx="24" cy="31.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "bulb") {
    return (
      <svg {...common}>
        <path d="M24 10c-5.5 0-10 4.2-10 9.5 0 3.3 1.7 5.6 3.6 7.4 1 1 1.4 2 1.4 3.1h10c0-1.1.4-2.1 1.4-3.1 1.9-1.8 3.6-4.1 3.6-7.4C34 14.2 29.5 10 24 10z" />
        <path d="M20 34h8M21 37.5h6" />
        <path d="M24 27v-9M20.5 21.5 24 18l3.5 3.5" />
        <path d="M24 3v3M10 8l2 2M38 8l-2 2M4 20h3M41 20h3M8 32l2.5-1.5M40 32l-2.5-1.5" />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg {...common}>
        <circle cx="12" cy="10" r="5" />
        <path d="M10.5 9a1.6 1.6 0 1 1 2.4 1.4c-.5.3-.9.7-.9 1.3" />
        <circle cx="12" cy="13.8" r="0.6" fill="currentColor" stroke="none" />
        <path d="M18 10h14a6 6 0 0 1 0 12H20a6 6 0 0 0 0 12h10" />
        <path d="M27.5 31l3 3-3 3" />
        <circle cx="25" cy="16" r="2.5" />
        <path d="M25 10.5v2M25 19.5v2M19.5 16h2M28.5 16h2" />
        <rect x="34" y="29" width="10" height="10" rx="1" />
        <path d="M34 33h10" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="16" cy="12" r="6" />
      <path d="M16 8.5v7M18 10.2c-.6-.8-1.4-1.1-2-1.1-1.2 0-2 .6-2 1.5s.9 1.3 2 1.6 2 .7 2 1.6-.8 1.5-2 1.5c-.8 0-1.6-.3-2-1" />
      <path d="M28 16l6-5 3 2 6-6" />
      <path d="M39 7h4v4" />
      <rect x="6" y="34" width="5" height="8" />
      <rect x="14" y="30" width="5" height="12" />
      <rect x="22" y="26" width="5" height="16" />
      <rect x="30" y="22" width="5" height="20" />
      <rect x="38" y="18" width="5" height="24" />
    </svg>
  );
}

export default function SolutionsPage() {
  return (
    <div className={`page-stack business-vision-page ${FONT}`}>
      <PageHero
        imageSrc="/images/business-vision-figma/solutions-hero.png"
        title={
          <>
            Strategic offerings for enterprise transformation{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
              decisions
            </span>
          </>
        }
        description="Empowering organizations with AI, data intelligence, and scalable software solutions that transform complexity into measurable business outcomes."
        actions={
          <>
            <a
              href="#our-solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1d4e9e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563c4]"
            >
              Explore Solutions
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Discovery Session
            </Link>
          </>
        }
      />

      <section className="bg-white pb-16 pt-12 md:pb-20 md:pt-14">
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-medium text-[#1d5bff] md:text-xl">Operating Architecture</p>
            <h2 className="mt-1 text-2xl font-semibold text-black sm:text-3xl md:text-[2rem]">
              From board question to governed delivery
            </h2>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {offerArchitecture.map((item, index) => (
              <article key={item.title} className="flex flex-col items-center text-center">
                <div className="relative flex h-[155px] w-[155px] items-center justify-center rounded-full border-[1.5px] border-[#1d5bff] bg-[radial-gradient(circle_at_center,rgba(29,91,255,0.10),transparent_62%)] text-[#1d5bff]">
                  <span
                    className="absolute -left-[3px] -top-[2px] flex h-14 w-14 items-center justify-center rounded-full bg-[#1d5bff] text-lg font-bold text-white"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <StepIcon name={item.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1d5bff] md:text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-[16rem] text-base leading-7 text-slate-800">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-solutions" className="scroll-mt-24 bg-[#f7faf2] py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-medium uppercase text-[#1d5bff]">Our Solutions</p>
            <h2 className="mt-1 text-2xl font-bold uppercase text-black sm:text-3xl">
              Technology that solves real business challenges
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              Business Vision delivers enterprise-grade solutions designed to improve operational efficiency.
              Strengthen governance, accelerate decision-making, and unlock the value of organizational data.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <article
                key={card.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[3px_5px_10px_rgba(15,23,42,0.22)]"
              >
                <img
                  src={`/images/business-vision-figma/solution-icons/${card.icon}`}
                  alt=""
                  width={115}
                  height={115}
                  className="-mb-1 -ml-2.5 -mt-1.5 h-[115px] w-[115px]"
                />

                <h3 className="text-lg font-medium leading-snug text-[#1d5bff]">{card.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{card.question}</p>

                <div className="mt-3 space-y-1 text-[13px] leading-relaxed text-slate-800">
                  <p>{card.intro}</p>
                  <p>{card.detail}</p>
                </div>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
                  {card.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-slate-700" aria-hidden="true" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-6">
          <div>
            <p className="text-lg font-medium uppercase text-[#1d5bff] md:text-xl">Industry Relevance</p>
            <h2 className="mt-3 max-w-md text-3xl font-bold uppercase leading-tight text-black md:text-[2.1rem] md:leading-[1.35]">
              Built for complex, regulated enterprises
            </h2>
            <p className={`mt-4 max-w-lg text-lg leading-relaxed text-slate-600 ${OPEN_SANS}`}>
              Designed to support organizations operating in highly regulated and mission-critical environments. Our
              solutions align with governance, compliance, security, and operational excellence to deliver measurable
              business outcomes at scale.
            </p>
          </div>

          <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${OPEN_SANS}`}>
            {industries.map((industry, index) => {
              const isLast = index === industries.length - 1;
              const spanTwo = isLast && industries.length % 3 === 2;
              return (
                <li
                  key={industry}
                  className={`flex min-h-[56px] items-center justify-center gap-2.5 rounded-md border border-slate-100 bg-[#f8f9fc] px-4 py-3 text-center text-base font-medium text-slate-600 sm:text-lg ${
                    spanTwo ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="shrink-0 text-[#1d5bff]">
                    <SparkleIcon />
                  </span>
                  {industry}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7faf2] py-16 md:py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-semibold uppercase text-[#1d5bff] md:text-xl">Technology Stack</p>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
              We use modern, secure, and scalable technologies
              <br className="hidden sm:block" /> to build future-ready solutions.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between lg:gap-x-6">
            {techStack.map((tech) => (
              <li key={tech.file} className="flex items-center justify-center">
                <img
                  src={`/images/business-vision-figma/tech-stack/${tech.file}`}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  className={`${tech.className} w-auto`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#06142e]">
        {/* object-fill stretches the image to the banner's shape so both glowing lines stay visible */}
        <img
          src="/images/business-vision-figma/cta-background.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-fill"
        />

        <div className="container-x flex min-h-[340px] flex-col items-center justify-center px-4 py-20 text-center md:py-24">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-[2rem]">
            Ready to Accelerate Enterprise Performance?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl">
            Partner With Business Vision To Transform Planning, Data, AI, And Operational Execution Into Measurable
            Business Outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-lg bg-[#4aa9e0] px-7 text-sm font-bold uppercase text-white transition hover:bg-[#3b98cf]"
            >
              Book a Discovery Session
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[56px] items-center justify-center rounded-lg border-2 border-[#4aa9e0] bg-[#0b1f3f]/70 px-7 text-sm font-bold uppercase text-[#4aa9e0] transition hover:bg-[#0b1f3f]"
            >
              Discuss Your Business Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
