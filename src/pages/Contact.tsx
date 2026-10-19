import React, { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
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

/**
 * "Get in touch" section with light animations.
 *
 * Usage:
 *   import GetInTouch from "./GetInTouch";
 *   <GetInTouch />
 *
 * No dependencies. Icons are inline SVG.
 */

const iconProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const PinIcon = () => (
  <svg {...iconProps} fill="currentColor" stroke="none">
    <path d="M12 2C8.1 2 5 5 5 8.8c0 5 7 13.2 7 13.2s7-8.2 7-13.2C19 5 15.9 2 12 2zm0 9.6a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
  </svg>
);

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6.5V12l3.5 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m2.5 6.5 9.5 7 9.5-7" />
  </svg>
);

const CARDS = [
  {
    title: "Business vision",
    icon: <PinIcon />,
    list: ["Cairo , Egypt", "Riyadh , Saudi Arabia", "Dubai , UAE"],
  },
  {
    title: "Working hours",
    icon: <ClockIcon />,
    list: ["Sunday - Friday", "9:00 AM - 5:00 PM"],
  },
  {
    title: "Phone",
    icon: <PhoneIcon />,
    text: "+20 1009110912",
    href: "tel:+201009110912",
  },
  {
    title: "Email",
    icon: <MailIcon />,
    text: "salsabil.mohsen@businessvision.ai",
    href: "mailto:salsabil.mohsen@businessvision.ai",
    small: true,
  },
];

// Adds `visible` once the element scrolls into view
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function GetInTouch() {
  const [ref, visible] = useInView();

  return (
    <section
      ref={ref}
      className={`git ${visible ? "git--in" : ""}`}
      aria-labelledby="git-title"
    >
      <style>{css}</style>

      {/* Hand-drawn arrow, draws itself once */}
      <svg
        className="git__arrow"
        viewBox="0 0 320 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="git__arrow-line"
          pathLength="1"
          d="M6 14C70 4 140 18 178 54C196 72 160 78 150 58C142 42 186 40 232 64L300 98M300 98L262 96M300 98L286 66"
        />
      </svg>

      <header className="git__head">
        <p className="git__eyebrow">GET IN TOUCH</p>
        <h2 id="git-title" className="git__title">
          WE’RE HERE TO HELP
        </h2>
        <p className="git__lead">
          our specialists are available to discuss your business challenges and
          identify the right technology strategy for your organization.
        </p>
      </header>

      <div className="git__grid">
        {CARDS.map((card, i) => (
          <article
            key={card.title}
            className="git__card"
            style={{ "--i": i } as React.CSSProperties}
          >
            <h3 className="git__card-title">
              <span className="git__icon">{card.icon}</span>
              {card.title}
            </h3>

            {card.list && (
              <ul className="git__list">
                {card.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {card.text && (
              <a
                className={`git__link ${card.small ? "git__link--small" : ""}`}
                href={card.href}
              >
                {card.text}
              </a>
            )}
          </article>
        ))}
      </div>

      {/* Decorative quote mark */}
      <svg
        className="git__quote"
        viewBox="0 0 96 70"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 70V40C0 18 12 4 34 0l4 9C26 12 21 20 21 29h17v41H0zm54 0V40C54 18 66 4 88 0l4 9c-12 3-17 11-17 20h17v41H54z" />
      </svg>
    </section>
  );
}

const css = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap");

.git {
  --blue: #1a5cff;
  --ink: #0a0a0a;
  --muted: #555;
  position: relative;
  z-index: 2;
  margin-top: -72px; /* overlap the bottom of the hero */
  overflow: hidden;
  background: #f8fdf5;
  border-radius: 64px 64px 0 0;
  padding: 44px 5% 48px;
  font-family: "Poppins", system-ui, sans-serif;
  text-align: center;
}

/* ---------- Header ---------- */
.git__head { max-width: 860px; margin: 0 auto; }

.git__eyebrow {
  margin: 0 0 8px;
  color: var(--blue);
  font-size: clamp(14px, 1.45vw, 18px);
  font-weight: 600;
}

.git__title {
  margin: 0 0 12px;
  color: var(--ink);
  font-size: clamp(25px, 3vw, 38px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.git__lead {
  margin: 0 auto;
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(13px, 1.35vw, 16px);
  line-height: 1.6;
}

.git__eyebrow,
.git__title,
.git__lead {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .7s ease, transform .7s ease;
}
.git--in .git__eyebrow { opacity: 1; transform: none; }
.git--in .git__title   { opacity: 1; transform: none; transition-delay: .12s; }
.git--in .git__lead    { opacity: 1; transform: none; transition-delay: .24s; }

/* ---------- Arrow ---------- */
.git__arrow {
  position: absolute;
  top: 30px;
  left: 6%;
  width: clamp(85px, 11vw, 135px);
  pointer-events: none;
}
.git__arrow-line {
  stroke: #dcdcdc;
  stroke-width: 9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.git--in .git__arrow-line {
  animation: git-draw 1.6s .3s ease forwards;
}
@keyframes git-draw { to { stroke-dashoffset: 0; } }

/* ---------- Cards ---------- */
.git__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  max-width: 1280px;
  margin: 22px auto 0;
  text-align: left;
}

.git__card {
  position: relative;
  min-height: 120px;
  padding: 18px 18px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .18);
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity .7s ease,
    transform .7s cubic-bezier(.2, .8, .2, 1),
    box-shadow .3s ease;
  transition-delay: calc(var(--i) * .12s + .3s);
}
.git--in .git__card { opacity: 1; transform: none; }

/* hover: remove the entrance delay so it reacts immediately */
.git--in .git__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 28px rgba(26, 92, 255, .18);
  transition-delay: 0s;
}

.git__card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px;
  color: var(--blue);
  font-size: clamp(14px, 1.35vw, 17px);
  font-weight: 500;
}
.git__icon {
  display: inline-flex;
  flex-shrink: 0;
  transition: transform .4s ease;
}
.git__icon svg { width: 24px; height: 24px; }
.git__card:hover .git__icon { transform: scale(1.15) rotate(-6deg); }

.git__list {
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--ink);
  font-size: clamp(12px, 1.15vw, 14px);
}
.git__list li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 6px;
}
.git__list li::before {
  content: "";
  position: absolute;
  left: 2px;
  top: .55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--blue);
}

.git__link {
  display: inline-block;
  color: var(--ink);
  font-size: clamp(12px, 1.15vw, 14px);
  text-decoration: none;
  word-break: break-word;
  background: linear-gradient(var(--blue), var(--blue)) 0 100% / 0 2px no-repeat;
  transition: background-size .35s ease, color .2s ease;
}
.git__link--small { font-size: clamp(11px, 1vw, 13px); }
.git__link:hover,
.git__link:focus-visible {
  color: var(--blue);
  background-size: 100% 2px;
  outline: none;
}

/* ---------- Quote mark ---------- */
.git__quote {
  position: absolute;
  right: 3.5%;
  bottom: 18px;
  width: clamp(48px, 6vw, 72px);
  color: var(--blue);
  opacity: 0;
  transform: scale(.6);
  transition: opacity .6s 1s ease, transform .6s 1s cubic-bezier(.3, 1.6, .5, 1);
  pointer-events: none;
}
.git--in .git__quote {
  opacity: 1;
  transform: none;
  animation: git-float 4s 1.8s ease-in-out infinite;
}
@keyframes git-float {
  0%, 100% { translate: 0 0; }
  50%      { translate: 0 -8px; }
}

/* ---------- Responsive ---------- */
@media (max-width: 760px) {
  .git__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .git { margin-top: -38px; border-radius: 38px 38px 0 0; padding: 48px 20px 60px; }
  .git__grid { grid-template-columns: 1fr; margin-top: 26px; }
  .git__card { min-height: 0; padding: 22px 20px; }
  .git__arrow { top: 14px; left: 3%; width: 68px; opacity: .5; }
  .git__quote { width: 46px; bottom: 10px; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .git *, .git *::before {
    animation: none !important;
    transition: none !important;
  }
  .git__eyebrow, .git__title, .git__lead, .git__card, .git__quote {
    opacity: 1 !important;
    transform: none !important;
  }
  .git__arrow-line { stroke-dashoffset: 0; }
}
`;


/* Our Approach — animated section */
const WaveIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path className="ap__draw" pathLength={1} d="M4 20C12 20 12 44 20 44S28 20 36 20S44 44 52 44" />
    <path className="ap__draw" pathLength={1} d="M4 44C12 44 12 20 20 20S28 44 36 44S44 20 52 20" />
    <path className="ap__draw" pathLength={1} d="M54 14l6 6-6 6M54 38l6 6-6 6" />
  </svg>
);

const RoadmapIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect className="ap__bar ap__bar--1" x="4" y="22" width="24" height="9" rx="1.5" />
    <rect className="ap__bar ap__bar--2" x="30" y="44" width="28" height="9" rx="1.5" />
    <circle cx="20" cy="38" r="3" />
    <circle cx="8" cy="58" r="3" />
    <path d="M28 26h8M20 31v4M23 38h7v6M11 58h12" strokeDasharray="4 4" />
    <g className="ap__target">
      <circle cx="46" cy="14" r="10" />
      <circle cx="46" cy="14" r="5" />
      <circle cx="46" cy="14" r="1.5" fill="currentColor" />
      <path d="M53 7l6-5" />
    </g>
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <g className="ap__gear">
      <circle cx="32" cy="32" r="14.5" strokeWidth="7" strokeDasharray="5.6 5.6" />
      <circle cx="32" cy="32" r="12" fill="currentColor" stroke="none" />
      <circle cx="32" cy="32" r="5" fill="#fff" stroke="none" />
    </g>
    <g className="ap__ring">
      <path d="M8 38A25 25 0 0 0 48 52" />
      <path d="M56 26A25 25 0 0 0 16 12" />
      <path d="M44 56l5-5-7-2M20 8l-5 5 7 2" />
    </g>
  </svg>
);

type ApproachItem = { title: string; text: string; icon: ReactNode };
const approachCards: ApproachItem[] = [
  { title: "Cross-Functional Expertise", text: "Bringing together strategy, data, AI, and enterprise delivery to drive integrated business transformation.", icon: <WaveIcon /> },
  { title: "Outcome-Centered Roadmaps", text: "Designing strategic roadmaps aligned with business objectives, measurable KPIs, and long-term value.", icon: <RoadmapIcon /> },
  { title: "Responsible Execution", text: "Ensuring governed delivery with strong adoption, accountability, and sustainable business impact.", icon: <GearIcon /> },
];

function ApproachSection() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} className={`ap ${visible ? "ap--in" : ""}`} aria-labelledby="ap-title">
      <style>{approachCss}</style>
      <svg className="ap__squiggle ap__squiggle--tl" viewBox="0 0 600 560" fill="none" aria-hidden="true">
        <path className="ap__squiggle-line" pathLength={1} d="M70 30C130 20 150 70 128 130C106 190 80 250 100 290C30 340 50 440 140 460C230 480 300 400 360 360C410 326 470 316 540 336" />
      </svg>
      <svg className="ap__squiggle ap__squiggle--br" viewBox="0 0 320 560" fill="none" aria-hidden="true">
        <path className="ap__squiggle-line" pathLength={1} d="M30 40C90 10 140 70 150 150C160 230 190 280 260 300C330 320 360 400 310 470" />
      </svg>
      <header className="ap__head">
        <p className="ap__eyebrow">OUR SOLUTIONS</p>
        <h2 id="ap-title" className="ap__title">Our Approach. Your Advantage.</h2>
        <p className="ap__lead">Delivering business outcomes, not just technology</p>
      </header>
      <div className="ap__grid">
        {approachCards.map((item, i) => (
          <article key={item.title} className="ap__card" style={{ "--i": i } as CSSProperties}>
            <div className="ap__icon">{item.icon}</div>
            <h3 className="ap__card-title">{item.title}</h3>
            <p className="ap__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const approachCss = `
.ap {
  --blue: #1d5bff;
  --ink: #3f3f3f;
  position: relative;
  overflow: hidden;
  background: #f8fdf5;
  padding: 110px 5% 120px;
  font-family: var(--font-poppins), "Poppins", system-ui, sans-serif;
  text-align: center;
}
.ap__squiggle { position: absolute; pointer-events: none; }
.ap__squiggle--tl { top: -40px; left: -1%; width: clamp(180px, 25vw, 360px); }
.ap__squiggle--br { bottom: -60px; right: -2%; width: clamp(110px, 14vw, 200px); }
.ap__squiggle-line {
  stroke: #f1f1f1; stroke-width: 34; stroke-linecap: round; stroke-linejoin: round;
  stroke-dasharray: 1; stroke-dashoffset: 1;
}
.ap--in .ap__squiggle-line { animation: ap-draw 2.2s .2s ease forwards; }
@keyframes ap-draw { to { stroke-dashoffset: 0; } }
.ap__head { position: relative; max-width: 900px; margin: 0 auto; }
.ap__eyebrow { margin: 0 0 12px; color: var(--blue); font-size: clamp(20px, 2.4vw, 30px); font-weight: 600; }
.ap__title { margin: 0 0 20px; color: #000; font-size: clamp(30px, 5vw, 64px); font-weight: 700; line-height: 1.1; }
.ap__lead { margin: 0; color: var(--ink); font-size: clamp(16px, 1.9vw, 24px); }
.ap__eyebrow, .ap__title, .ap__lead {
  opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease;
}
.ap--in .ap__eyebrow { opacity: 1; transform: none; }
.ap--in .ap__title { opacity: 1; transform: none; transition-delay: .12s; }
.ap--in .ap__lead { opacity: 1; transform: none; transition-delay: .24s; }
.ap__grid { position: relative; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; max-width: 1200px; margin: 56px auto 0; }
.ap__card {
  padding: 40px 32px 44px; background: #fff; border-radius: 18px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .14); opacity: 0; transform: translateY(40px);
  transition: opacity .7s ease, transform .7s cubic-bezier(.2, .8, .2, 1), box-shadow .3s ease;
  transition-delay: calc(var(--i) * .15s + .35s);
}
.ap--in .ap__card { opacity: 1; transform: none; }
.ap--in .ap__card:hover { transform: translateY(-8px); box-shadow: 0 16px 28px rgba(29, 91, 255, .18); transition-delay: 0s; }
.ap__icon {
  width: 72px; height: 72px; margin: 0 auto 16px; color: var(--blue); opacity: 0; transform: scale(.5);
  transition: opacity .5s ease, transform .6s cubic-bezier(.3, 1.6, .5, 1);
  transition-delay: calc(var(--i) * .15s + .6s);
}
.ap__icon svg { width: 100%; height: 100%; overflow: visible; }
.ap--in .ap__icon { opacity: 1; transform: none; }
.ap__card:hover .ap__icon { transform: scale(1.1); transition-delay: 0s; }
.ap__card-title { margin: 0 0 12px; color: var(--blue); font-size: clamp(18px, 1.8vw, 24px); font-weight: 500; }
.ap__text { margin: 0; color: var(--ink); font-size: clamp(15px, 1.4vw, 18px); line-height: 1.6; }
.ap__draw { stroke-dasharray: 1; stroke-dashoffset: 1; }
.ap--in .ap__draw { animation: ap-draw 1.2s .9s ease forwards; }
.ap__bar { transform-box: fill-box; transform-origin: left center; transform: scaleX(0); }
.ap--in .ap__bar--1 { animation: ap-grow .6s 1s ease forwards; }
.ap--in .ap__bar--2 { animation: ap-grow .6s 1.25s ease forwards; }
@keyframes ap-grow { to { transform: scaleX(1); } }
.ap__target { transform-box: fill-box; transform-origin: center; }
.ap--in .ap__target { animation: ap-pulse 3s 1.8s ease-in-out infinite; }
@keyframes ap-pulse { 0%, 100% { scale: 1; } 50% { scale: 1.15; } }
.ap__gear, .ap__ring { transform-box: view-box; transform-origin: 32px 32px; }
.ap--in .ap__gear { animation: ap-spin 12s linear infinite; }
.ap--in .ap__ring { animation: ap-spin 9s linear infinite reverse; }
@keyframes ap-spin { to { transform: rotate(360deg); } }
@media (max-width: 900px) { .ap__grid { grid-template-columns: 1fr; max-width: 520px; } }
@media (max-width: 640px) { .ap { padding: 80px 20px 90px; } }
@media (prefers-reduced-motion: reduce) {
  .ap *, .ap *::before { animation: none !important; transition: none !important; }
  .ap__eyebrow, .ap__title, .ap__lead, .ap__card, .ap__icon { opacity: 1 !important; transform: none !important; }
  .ap__draw, .ap__squiggle-line { stroke-dashoffset: 0; }
  .ap__bar { transform: none; }
}
`;

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

      <GetInTouch />

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
                    <span className="text-2xl font-semibold leading-none" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
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

      <ApproachSection />

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
