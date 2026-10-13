import { Link } from "react-router-dom";
import type { ReactNode } from "react";

import { PageHero } from "../components/PageHero";

/* ------------------------------------------------------------------ */
/* Design tokens                                                       */
/* ------------------------------------------------------------------ */
const FONT = "font-[family-name:var(--font-poppins)]";
const BLUE = "#1D4FFF";
const NUM_BLUE = "#2F5BFF";
const HERO_BTN_BLUE = "#124C9D";
const GRAY_TEXT = "#4B4B4B";
const DARK_BG = "#03102B";
const HERO_GRADIENT =
  "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 28%, #C3CCF7 38%, #1FB34A 52%, #14A82E 100%)";

/* ------------------------------------------------------------------ */
/* Icons                                                               */
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
const STAR = "M0 -6 L1.8 -1.9 L6.2 -1.5 L2.9 1.4 L3.9 5.7 L0 3.4 L-3.9 5.7 L-2.9 1.4 L-6.2 -1.5 L-1.8 -1.9 Z";

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
const VisionIcon = () => (
  <svg {...line} stroke="#fff">
    <circle cx="22" cy="26" r="14" />
    <circle cx="22" cy="26" r="8" />
    <circle cx="22" cy="26" r="2" fill="#fff" />
    <path d="M24 24l16-16M34 8h6v6" />
  </svg>
);
const RocketIcon = () => (
  <svg {...line} stroke="#fff">
    <path d="M30 6c8 0 12 4 12 12-4 8-10 14-16 18l-10-10C20 20 24 12 30 6z" />
    <circle cx="31" cy="17" r="3" />
    <path d="M16 26l-8 2 6 6M22 32l-2 8-6-6M12 38l-4 4" />
  </svg>
);
const TrendIcon = () => (
  <svg viewBox="0 0 48 40" className="h-[3cqw] w-[4cqw] shrink-0" aria-hidden="true" fill="none" stroke="#3ED598" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 34 17 20 25 28 44 8" />
    <polyline points="31 8 44 8 44 21" />
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

const people = [
  { name: "Said Salah", role: "CEO", image: "/images/team/said-salah.jpeg" },
];

type Avatar = { initials?: string; bg: string; fg?: string };
const P = (bg: string): Avatar => ({ bg });
const avatarRows: Avatar[][][] = [
  [
    [P("#C9B8A8"), P("#8C7B70")],
    [P("#D7B9A1"), P("#6F7E8F"), P("#B98F7A"), { initials: "R", bg: "#3EA6E0", fg: "#fff" }],
    [{ initials: "FJ", bg: "#1D4FFF", fg: "#fff" }, { initials: "S", bg: "#3EA6E0", fg: "#fff" }],
  ],
  [
    [P("#C6B7A6"), P("#A9A29A"), P("#5E6B78"), { initials: "JJ", bg: "#1D4FFF", fg: "#fff" }],
    [P("#9FB0BF"), { initials: "QV", bg: "#1D4FFF", fg: "#fff" }],
    [P("#8E9A8A"), P("#7A8696")],
    [P("#4F6F8F"), { initials: "IU", bg: "#3EA6E0", fg: "#fff" }],
  ],
];

const AvatarBubble = ({ initials, bg, fg }: Avatar) => (
  <span
    className="-mr-[0.9cqw] flex h-[3.2cqw] w-[3.2cqw] items-center justify-center overflow-hidden rounded-full border-[0.3cqw] border-white text-[1cqw] font-medium shadow-[0_0.3cqw_0.8cqw_rgba(0,0,0,0.2)] last:mr-0"
    style={{ backgroundColor: bg, color: fg }}
  >
    {initials ?? (
      <svg viewBox="0 0 24 24" className="mt-2 h-full w-full" aria-hidden="true" fill="rgba(255,255,255,0.55)">
        <circle cx="12" cy="8" r="4.5" />
        <path d="M3 24c0-6 4-9 9-9s9 3 9 9z" />
      </svg>
    )}
  </span>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <div className={`page-stack business-vision-page ${FONT}`}>
      <PageHero
        eyebrow=""
        imageSrc="/images/business-vision-figma/about-hero.jpeg"
        title={
          <>
            <span
              className="block w-fit bg-clip-text uppercase text-transparent"
              style={{
                backgroundImage: HERO_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building Intelligent Enterprises
            </span>
            <span className="mt-2 block uppercase" style={{ color: "#4AA8E0" }}>
              Through Technology&amp; AI
            </span>
          </>
        }
        description="At Business Vision, we believe technology should do more than solve problems—it should create opportunities for growth and innovation. By combining artificial intelligence, business intelligence, advanced analytics, and enterprise software solutions, we help organizations transform complex data into actionable insights, optimize performance, and build a future driven by smarter decisions."
        actions={
          <>
            <Link
              to="/solutions"
              className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_BTN_BLUE }}
            >
              Explore Our Solutions
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/70 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact Our Exports
            </Link>
          </>
        }
      />

      {/* ============ Who we are ============ */}
      <section id="who-we-are" className="bg-white py-16">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xl font-medium uppercase" style={{ color: BLUE }}>
              Who we are
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-snug text-black sm:text-[40px]">
              Turning challenges into opportunities with technology
            </h2>
            <p className="mt-4 max-w-[560px] text-lg font-normal leading-snug" style={{ color: GRAY_TEXT }}>
              Business Vision is a trusted technology partner dedicated to helping organizations embrace digital
              transformation with confidence. By combining artificial intelligence, business intelligence, data
              analytics, and enterprise software solutions, we empower businesses to solve complex challenges, improve
              operational efficiency, and achieve sustainable growth.
            </p>
            <Link
              to="/company-profile"
              className="mt-6 inline-block rounded-lg px-8 py-3 text-lg font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_BTN_BLUE }}
            >
              Explore more
            </Link>
          </div>

          {/* Collage: proportions follow the design; sizes use container units so it scales as one piece */}
          <div className="@container relative mx-auto aspect-[392/315] w-full max-w-[640px]">
            <div className="absolute right-0 top-[2.5%] h-[90%] w-[100%] overflow-hidden rounded-[1.2cqw] shadow-lg">
              <img src="/Assets/Hand holding a luminous blue puzzle piece.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            {/* <div className="absolute bottom-[5.5%] left-0 aspect-video w-[54%] overflow-hidden rounded-[1.2cqw] shadow-lg">
              <img src="/images/about/ai-hand.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div> */}
            {/* <div className="absolute left-[10.7%] top-0 flex h-[52%] w-[38%] flex-col justify-center rounded-[1.8cqw] bg-white px-[3.5cqw] pb-[1cqw] shadow-[0_2cqw_6cqw_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between">
                <p className="text-[3.8cqw] font-normal leading-none text-[#0B0B45]">30,000+</p>
                <TrendIcon />
              </div>
              <p className="mt-[2.4cqw] text-[1.45cqw] leading-[1.5] text-[#8A8580]">
                Sales in July 2021 with 5 star ratings and happy clients.
              </p>
              <div className="mt-[4cqw] h-[0.4cqw] w-full" style={{ backgroundColor: BLUE }} />
              <div className="mt-[4cqw] space-y-[2cqw]">
                {avatarRows.map((row, r) => (
                  <div key={r} className="flex items-center gap-x-[2.4cqw]">
                    {row.map((group, g) => (
                      <div key={g} className="flex items-center">
                        {group.map((avatar, a) => (
                          <AvatarBubble key={a} {...avatar} />
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          </div>
                  </div>
      </section>

      {/* ============ Stats ============ */}
      <section className="py-10" style={{ backgroundColor: "#F7FCEF" }}>
        <div className="container-x">
          <p className="text-center text-xl font-semibold uppercase" style={{ color: BLUE }}>
            Delivering Measurable Business Value
          </p>
          <div className="mx-auto mt-6 grid max-w-[1200px] md:grid-cols-3">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-4 py-3 md:border-l md:border-slate-300 md:first:border-l-0"
              >
                <div className="h-16 w-16 shrink-0 text-black">
                  <Icon />
                </div>
                <div>
                  <p className="text-[40px] font-bold leading-none" style={{ color: NUM_BLUE }}>
                    {value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-black">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Vision & Mission ============ */}
      <section id="mission-vision" className="bg-white py-14">
        <div className="container-x">
          <p className="text-xl font-medium uppercase" style={{ color: BLUE }}>
            Our Vision &amp; Mission
          </p>
          <p className="mt-3 text-xl font-normal uppercase leading-snug" style={{ color: GRAY_TEXT }}>
            Guided by purpose and driven by innovation, our vision and mission define who we are, what we believe in,
            and the impact we strive to create for every organization we serve.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border-[3px] border-[#C9CCD3] border-b-[#1D4FFF] border-l-[#1D4FFF] bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#2F5BFF] to-[#1236A8] p-3">
                  <VisionIcon />
                </div>
                <h3 className="text-[22px] font-semibold uppercase" style={{ color: BLUE }}>
                  Our Vision
                </h3>
              </div>
              <p className="mt-4 text-[15px] font-normal leading-relaxed" style={{ color: GRAY_TEXT }}>
                To become a trusted global technology partner, empowering organizations to unlock the full potential of
                data, artificial intelligence, and digital innovation. We envision a future where every business makes
                confident, data-driven decisions, accelerates sustainable growth, and creates lasting value through
                intelligent technology.
              </p>
            </article>

            <article className="rounded-2xl border-[3px] border-[#C9CCD3] border-r-[#1D4FFF] border-t-[#1D4FFF] bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[#2F5BFF] to-[#1236A8] p-3">
                  <RocketIcon />
                </div>
                <h3 className="text-[22px] font-semibold uppercase" style={{ color: BLUE }}>
                  Our Mission
                </h3>
              </div>
              <p className="mt-4 text-[15px] font-normal leading-relaxed" style={{ color: GRAY_TEXT }}>
                Our mission is to help organizations transform complex challenges into measurable opportunities by
                delivering innovative AI solutions, enterprise applications, business intelligence, and advanced
                analytics. Through deep industry expertise, collaborative partnerships, and a commitment to excellence,
                we enable our clients to improve efficiency, optimize performance, and achieve long-term success in an
                ever-evolving digital world.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ Management ============ */}
      {/* <section className="py-16" style={{ backgroundColor: DARK_BG }}>
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-xl font-medium uppercase" style={{ color: NUM_BLUE }}>
              Business Vision Management
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-snug text-white sm:text-[40px]">
              Where expertise meets innovation
            </h2>
            <p className="mt-4 max-w-[560px] text-lg font-normal leading-snug text-slate-200">
              Business Vision brings together a team of experienced professionals specializing in artificial
              intelligence, data analytics, business intelligence, and enterprise software solutions. Combining
              strategic thinking with technical expertise, we partner with organizations to transform complex
              challenges into intelligent, scalable solutions. From strategy and solution design to implementation,
              integration, and continuous innovation, we empower businesses to make data-driven decisions, optimize
              performance, and achieve sustainable growth in an evolving digital landscape.
            </p>
          </div>

          <div className="flex justify-center gap-4 overflow-x-auto pb-2">
            {people.map((person) => (
              <article
                key={person.name}
                className="w-[310px] shrink-0 overflow-hidden rounded-xl border border-slate-600/60"
                style={{ backgroundColor: "#06132F" }}
              >
                <div className="relative h-[390px] w-full">
                  <img src={person.image} alt={person.name} className="absolute inset-0 h-full w-full object-cover object-top" />
                </div>
                <div className="px-4 py-5 text-center">
                  <h3 className="text-[21px] font-medium uppercase text-white">{person.name}</h3>
                  <p className="mt-1 text-[18px] font-normal uppercase" style={{ color: NUM_BLUE }}>
                    {person.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============ Get in touch ============ */}
      <section
  className="relative overflow-hidden py-16"
  style={{ backgroundColor: "#071A3D" }}
>
  <iframe
    title="Business Vision location"
    src="https://maps.google.com/maps?q=29.9588446,31.3146013&z=16&output=embed"
    className="pointer-events-none absolute inset-x-0 top-0 h-[150%] w-full border-0 opacity-60 [filter:grayscale(1)_invert(0.92)_hue-rotate(180deg)_contrast(0.9)]"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    tabIndex={-1}
    aria-hidden="true"
  />

  <div
    className="absolute inset-0 bg-[#071A3D]/40"
    aria-hidden="true"
  />

  <div className="container-x relative">
    <Link
      to="/contact"
      className="mx-auto flex max-w-[480px] items-center justify-between gap-3 rounded-full border-2 bg-[#071A3D]/70 px-4 py-2 transition-colors hover:bg-[#0B2352]/80 sm:px-5"
      style={{ borderColor: BLUE }}
    >
      <span
        className="text-lg font-medium uppercase sm:text-xl"
        style={{ color: BLUE }}
      >
        Get in touch
      </span>

      <span
        className="flex h-9 w-14 shrink-0 items-center justify-center rounded-full border-2 sm:w-16"
        style={{ borderColor: BLUE, color: BLUE }}
      >
        <svg
          viewBox="0 0 48 24"
          className="h-5 w-8"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h38M32 4l10 8-10 8" />
        </svg>
      </span>
    </Link>
  </div>
</section>
    </div>
  );
}