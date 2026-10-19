import { Link } from "react-router-dom";
import type { ReactNode, CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

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
              Through Technology &amp; AI
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
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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
              <img src="/images/business-vision-figma/hand-holding-blue-puzzle-piece.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
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
          <div className="mx-auto mt-6 grid grid-cols-1 max-w-[1200px] md:grid-cols-3">
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
      <VisionMission />

      {/* ============ Management ============ */}
      {/* <section className="py-16" style={{ backgroundColor: DARK_BG }}>
        <div className="container-x grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr]">
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

/* ------------------------------------------------------------------ */
/* Animated Vision & Mission section                                   */
/* ------------------------------------------------------------------ */
const TargetIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="46" cy="54" r="36" />
    <circle cx="46" cy="54" r="23" />
    <circle cx="46" cy="54" r="8" fill="currentColor" stroke="none" />
    <g className="vm__arrow">
      <path d="M48 52 L82 18" />
      <path d="M72 28 L80 14 L92 22 Z" fill="currentColor" />
      <path d="M84 12 L90 6 M92 22 L98 16" />
    </g>
  </svg>
);

const ExplorerIcon = () => (
  <svg viewBox="0 0 100 110" aria-hidden="true">
    <path d="M32 18c0-8 8-12 18-12s18 4 18 12c0 2-2 4-4 4H36c-2 0-4-2-4-4z" fill="#4a4a4a" />
    <circle cx="50" cy="32" r="15" fill="#f2f2f2" />
    <g className="vm__binoc">
      <circle cx="43" cy="32" r="6.5" fill="#29a9e0" stroke="#3a3a3a" strokeWidth="2.5" />
      <circle cx="57" cy="32" r="6.5" fill="#29a9e0" stroke="#3a3a3a" strokeWidth="2.5" />
    </g>
    <path d="M24 70 L40 54 L50 72 L60 54 L76 70 L70 108 H30 Z" fill="#555" />
    <path d="M42 54 L50 74 L58 54 Z" fill="#f5f5f5" />
    <path d="M26 74 L20 52 L38 38" fill="none" stroke="#555" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M74 74 L80 52 L62 38" fill="none" stroke="#555" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const visionMissionItems = [
  {
    key: "mission",
    title: "Mission",
    icon: <TargetIcon />,
    text: "Our mission is to help organizations transform complex challenges into measurable opportunities by delivering innovative AI solutions, enterprise applications, business intelligence, and advanced analytics. Through deep industry expertise, collaborative partnerships, and a commitment to excellence, we enable our clients to improve efficiency, optimize performance, and achieve long-term success in an ever-evolving digital world.",
  },
  {
    key: "vision",
    title: "Vision",
    icon: <ExplorerIcon />,
    text: "To become a trusted global technology partner, empowering organizations to unlock the full potential of data, artificial intelligence, and digital innovation. We envision a future where every business makes confident, data-driven decisions, accelerates sustainable growth, and creates lasting value through intelligent technology.",
  },
];

function useVisionMissionInView() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible] as const;
}

function VisionMission() {
  const [ref, visible] = useVisionMissionInView();
  return (
    <section id="mission-vision" ref={ref} className={`vm ${visible ? "vm--in" : ""}`} aria-labelledby="vm-title">
      <style>{visionMissionCss}</style>
      <div className="container-x">
        <header className="vm__head">
          <h2 id="vm-title" className="vm__eyebrow">OUR VISION &amp; MISSION</h2>
          <p className="vm__lead">GUIDED BY PURPOSE AND DRIVEN BY INNOVATION, OUR VISION AND MISSION DEFINE WHO WE ARE, WHAT WE BELIEVE IN, AND THE IMPACT WE STRIVE TO CREATE FOR EVERY ORGANIZATION WE SERVE.</p>
        </header>
        <div className="vm__grid">
          {visionMissionItems.map((item, i) => (
            <div key={item.key} className={`vm__item vm__item--${item.key}`} style={{ "--i": i } as CSSProperties}>
              <div className="vm__icon">{item.icon}</div>
              <article className="vm__card">
                <h3 className="vm__card-title">{item.title}</h3>
                <p className="vm__text">{item.text}</p>
                <span className="vm__dot vm__dot--blue" aria-hidden="true" />
                <span className="vm__dot vm__dot--gray" aria-hidden="true" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const visionMissionCss = `
.vm { --vm-blue: #1657ff; overflow: hidden; background: white; padding: 48px 0 85px; font-family: var(--font-poppins), Poppins, system-ui, sans-serif; }
.vm__head { max-width: 1280px; }
.vm__eyebrow { color: var(--vm-blue); font-weight: 600; font-size: clamp(17px, 1.8vw, 22px); margin: 0 0 8px; }
.vm__lead { margin: 0; color: #444; font-size: clamp(13px, 1.3vw, 16px); line-height: 1.7; }
.vm__eyebrow,.vm__lead { opacity: 0; transform: translateY(18px); transition: opacity .65s ease, transform .65s ease; }
.vm--in .vm__eyebrow { opacity: 1; transform: none; }
.vm--in .vm__lead { opacity: 1; transform: none; transition-delay: .12s; }
.vm__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 55px; max-width: 720px; margin: 12px auto 0; align-items: start; }
.vm__item { display: flex; flex-direction: column; align-items: center; min-width: 0; }
.vm__item--vision { margin-top: 36px; }
.vm__icon { width: 64px; height: 64px; margin-bottom: 20px; color: #3a3a3a; opacity: 0; transform: scale(.5); transition: opacity .5s ease, transform .6s cubic-bezier(.3,1.6,.5,1); transition-delay: calc(var(--i) * .25s + .2s); }
.vm__icon svg { display: block; width: 100%; height: 100%; overflow: visible; }
.vm--in .vm__icon { opacity: 1; transform: none; animation: vm-float 4.5s calc(var(--i) * .6s + 1.4s) ease-in-out infinite; }
@keyframes vm-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -7px; } }
.vm__arrow { transform: translate(24px,-24px); opacity: 0; }
.vm--in .vm__arrow { animation: vm-hit .6s .8s cubic-bezier(.2,1.4,.4,1) forwards; }
@keyframes vm-hit { to { transform: none; opacity: 1; } }
.vm__binoc { transform-box: fill-box; transform-origin: center; }
.vm--in .vm__binoc { animation: vm-look 3.6s 1.2s ease-in-out infinite; }
@keyframes vm-look { 0%,100% { transform: none; } 50% { transform: translateX(2px) scale(1.08); } }
.vm__card { position: relative; width: 100%; min-height: 262px; padding: 30px 21px 25px; border: 3px solid var(--vm-blue); border-radius: 34px; background: #fff; text-align: center; opacity: 0; transition: opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease; transition-delay: calc(var(--i) * .2s + .25s); }
.vm__item--mission .vm__card { transform: translateX(-50px); }
.vm__item--vision .vm__card { transform: translateX(50px); }
.vm--in .vm__card { opacity: 1; transform: none; }
.vm--in .vm__card:hover { transform: translateY(-8px); box-shadow: 0 18px 32px rgba(29,91,255,.16); transition-delay: 0s; }
.vm__card-title { position: absolute; top: 0; left: 50%; translate: -50% -50%; margin: 0; padding: 0 18px; background: white; color: var(--vm-blue); font-size: clamp(22px, 2.6vw, 28px); font-weight: 600; line-height: 1; white-space: nowrap; }
.vm__text { margin: 0; color: #333; font-size: clamp(12px, 1.05vw, 14px); line-height: 1.55; }
.vm__dot { position: absolute; width: 25px; height: 25px; border-radius: 50%; pointer-events: none; opacity: 0; transform: scale(0); transition: opacity .5s ease, transform .6s cubic-bezier(.3,1.6,.5,1); transition-delay: 1s; }
.vm__dot--blue { top: -10px; right: -4px; background: rgba(160,220,255,.55); }
.vm__dot--gray { bottom: -10px; left: -8px; background: rgba(120,120,120,.6); }
.vm--in .vm__dot { opacity: 1; transform: none; animation: vm-pulse 3.2s 1.8s ease-in-out infinite; }
.vm--in .vm__dot--gray { animation-delay: 2.6s; }
@keyframes vm-pulse { 0%,100% { scale: 1; } 50% { scale: 1.18; } }
@media (max-width: 700px) { .vm { padding: 48px 0 75px; } .vm__grid { grid-template-columns: 1fr; gap: 45px; margin-top: 34px; max-width: 340px; } .vm__item--vision { margin-top: 0; } .vm__card { min-height: 0; padding: 40px 22px 35px; } .vm__text { font-size: 14px; } .vm__item--mission .vm__card,.vm__item--vision .vm__card { transform: translateY(40px); } .vm--in .vm__card { transform: none; } }
@media (prefers-reduced-motion: reduce) { .vm *, .vm *::before { animation: none !important; transition: none !important; } .vm__eyebrow,.vm__lead,.vm__icon,.vm__card,.vm__dot,.vm__arrow { opacity: 1 !important; transform: none !important; } }
`;
