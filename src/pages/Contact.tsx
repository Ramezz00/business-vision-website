import { Link } from "react-router-dom";

import { PageHero } from "../components/PageHero";

const FONT = "font-[family-name:var(--font-poppins)]";
const OPEN_SANS = "font-[family-name:'Open_Sans',system-ui,sans-serif]";

const contactJourneys = [
  {
    title: "Start a Transformation Conversation",
    copy: "Align leadership priorities, operating constraints, and the first business decision that needs clarity.",
  },
  {
    title: "Explore product or solution fit",
    copy: "Discuss FinSight, FinDisclosure / DisclosureIQ, Eagle Eye, or the strategic capability path before committing scope.",
  },
  {
    title: "Partner with Business Vision",
    copy: "Open a platform, advisory, or delivery collaboration conversation with clear customer-value boundaries.",
  },
  {
    title: "Careers and talent",
    copy: "Share a specialist, leadership, or delivery profile for future Business Vision team conversations.",
  },
  {
    title: "Other enquiry",
    copy: "Reach the right Business Vision contact for trust, communications, supplier, or administrative matters.",
  },
];

// Icon files live in public/images/business-vision-figma/approach-icons/
const approachItems = [
  {
    icon: "approach-team.png",
    title: "Cross-Functional Expertise",
    copy: "Bringing together strategy, data, AI, and enterprise delivery to drive integrated business transformation.",
  },
  {
    icon: "approach-roadmap.png",
    title: "Outcome-Centered Roadmaps",
    copy: "Designing strategic roadmaps aligned with business objectives, measurable KPIs, and long-term value.",
  },
  {
    icon: "approach-execution.png",
    title: "Responsible Execution",
    copy: "Ensuring governed delivery with strong adoption, accountability, and sustainable business impact.",
  },
];

// FAQ content from the Figma component. Edit the text here to change what shows on the page.
const faqs = [
  {
    question: "What services does Business Vision provide?",
    answer:
      "Business Vision delivers enterprise solutions across AI, data management, business intelligence, custom software development, digital transformation, and strategic consulting. Our services are designed to help organizations improve efficiency, make informed decisions, and accelerate business growth.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We work with organizations across multiple industries, including banking, healthcare, manufacturing, retail, government, education, finance, and energy. Every solution is tailored to meet industry-specific challenges and business objectives.",
  },
  {
    question: "Do you develop custom software solutions?",
    answer:
      "Yes. We design and develop secure, scalable, and fully customized software solutions that align with your business processes, operational requirements, and long-term growth strategy.",
  },
  {
    question: "How do you implement AI in business operations?",
    answer:
      "Our AI solutions focus on solving real business challenges through intelligent automation, predictive analytics, machine learning, and decision support. We ensure every AI initiative aligns with your strategic goals and governance requirements.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "We follow enterprise best practices for data governance, security, and compliance. Our solutions are designed to protect sensitive information while ensuring data quality, integrity, and regulatory alignment.",
  },
];

function JourneyIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8.5 10h7M8.5 14h4" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className={`page-stack business-vision-page ${FONT}`}>
      <PageHero
        imageSrc="/images/business-vision-figma/contact-hero.png"
        title={
          <>
            Start the right Business Vision{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              conversation
            </span>
            .
          </>
        }
        description="Whether you're exploring digital transformation, AI integration, enterprise applications, or data-driven solutions, our team is ready to understand your goals and help you move forward with confidence."
        actions={
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1d4e9e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563c4]"
          >
            Explore Solutions First
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
          </Link>
        }
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="text-lg font-medium text-[#1d5bff] md:text-xl">Public Journey</p>
            <h2 className={`mt-2 text-2xl font-bold uppercase text-black sm:text-3xl md:text-[2rem] ${OPEN_SANS}`}>
              How would you like to engage?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Choose a path that matches your objective.
              <br className="hidden sm:block" /> We&rsquo;ll help you take the next confident step.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            {contactJourneys.map((track, index) => (
              <article
                key={track.title}
                className={`relative rounded-lg border border-slate-200 bg-white px-5 pb-8 pt-5 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <span className="absolute -top-px left-6 h-0.5 w-20 bg-[#1d5bff]" aria-hidden="true" />

                <div className="flex items-center gap-4">
                  <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-[#1d5bff] bg-[#1d5bff]/5 text-[#1d5bff]">
                    <JourneyIcon />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-[#1d5bff]">{track.title}</h3>
                </div>

                <span className="mt-3 block h-px w-14 bg-[#1d5bff]" aria-hidden="true" />

                <p className={`mt-3 text-sm leading-relaxed text-slate-600 ${OPEN_SANS}`}>{track.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faf2] py-16 md:py-20">
        <div className="container-x">
          <div className="text-center">
            {/* Label kept as in Figma for now; confirm with the team whether it should say "Our Solutions". */}
            <p className="text-lg font-medium uppercase text-[#1d5bff] md:text-xl">Our Solutions</p>
            <h2 className="mt-2 text-3xl font-bold text-black sm:text-4xl">
              Our Approach.{" "}
              <span className="bg-gradient-to-r from-[#0b5d0b] to-[#22a83a] bg-clip-text text-transparent">
                Your Advantage.
              </span>
            </h2>
            <p className="mt-3 text-base text-slate-700 md:text-lg">Delivering business outcomes, not just technology</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {approachItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-300 bg-white p-4 pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4d8dff] to-[#1d4fe0] shadow-[0_4px_10px_rgba(29,91,255,0.35)]">
                    <img
                      src={`/images/business-vision-figma/approach-icons/${item.icon}`}
                      alt=""
                      width={42}
                      height={42}
                      className="h-[42px] w-[42px]"
                    />
                  </span>
                  <h3 className="text-base font-medium leading-snug text-[#1d5bff] sm:text-lg">{item.title}</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-800">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-lg font-semibold uppercase text-[#1d5bff] md:text-xl">Frequently Asked Questions</h2>
            <p className={`mt-3 max-w-md text-base leading-relaxed text-slate-600 ${OPEN_SANS}`}>
              Find answers to the most common questions about our enterprise solutions, implementation approach, and
              how Business Vision helps organizations achieve sustainable growth through AI, data, and intelligent
              technology.
            </p>
          </div>

          {/* Accordion: sharing the same "name" means only one answer is open at a time. */}
          <div className={OPEN_SANS}>
            {faqs.map((faq) => (
              <details key={faq.question} name="contact-faq" className="group border-b border-slate-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-slate-900 transition hover:text-[#1d5bff] sm:text-[15px] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 text-slate-600 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-4 pr-6 text-xs leading-relaxed text-slate-600 sm:text-[13px]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
