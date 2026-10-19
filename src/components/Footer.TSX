import { Link } from "react-router-dom";

// Logo file lives in public/brand; Vite serves it from /brand.
const LOGO_PATH = "/brand/business-vision-logo-full-color.svg";

const explore = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Check these destinations exist before publishing the site.
const company = [
  { label: "Who we are?", to: "/about#who-we-are" },
  { label: "Leadership & Team", to: "/leadership" },
  { label: "Business Vision & ALKAN", to: "/alkan" },
  // { label: "Case Studies", to: "/case-studies" },
  // { label: "Security & Governance", to: "/security" },
  { label: "Book a Discovery Session", to: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/", type: "facebook" },
  { label: "Instagram", href: "https://instagram.com/", type: "instagram" },
  { label: "YouTube", href: "https://youtube.com/", type: "youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/", type: "linkedin" },
] as const;

function SocialIcon({ type }: { type: (typeof socials)[number]["type"] }) {
  const shared = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.55, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  switch (type) {
    case "facebook": return <svg {...shared}><path d="M14 8h2.5V4.5H14C11.8 4.5 10.5 6 10.5 8.2V10H8v3.5h2.5V21H14v-7.5h2.4l.6-3.5H14V8.6c0-.4.2-.6.6-.6z" /></svg>;
    case "instagram": return <svg {...shared}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>;
    case "youtube": return <svg {...shared}><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/></svg>;
    case "linkedin": return <svg {...shared}><circle cx="5.5" cy="5" r="1.4"/><path d="M4.5 9v11M9.5 20V9M9.5 13.5c0-2.5 1.6-4.5 4-4.5s4 1.6 4 4.5V20"/></svg>;
  }
}

// Named export: keeps your existing App.tsx import working.
export function Footer() {
  return (
    <footer className="bv-footer-v3" aria-label="Site footer">
      <style>{footerStyles}</style>
      <div className="bv-footer-v3__inner">
        <div className="bv-footer-v3__brand">
          <Link to="/" aria-label="Business Vision home" className="bv-footer-v3__logo">
            <img src={LOGO_PATH} alt="Business Vision for Data Solutions" />
          </Link>
          <p className="bv-footer-v3__tagline">
            Business Vision - The Next North Star.<br />
            Business Transformation Powered by Data, AI and Enterprise Intelligence.
          </p>
          <p className="bv-footer-v3__description">
            Enterprise planning, trusted data, decision intelligence, governed AI, and long-term optimization for organizations that need measurable transformation outcomes.<br />
            Middle East focus. Global execution standards.
          </p>
          <ul className="bv-footer-v3__socials" aria-label="Social media">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <SocialIcon type={social.type} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav className="bv-footer-v3__column" aria-label="Explore">
          <h2>Explore</h2>
          <ul>{explore.map((item) => <li key={item.label}><Link to={item.to}>{item.label}</Link></li>)}</ul>
        </nav>
        <nav className="bv-footer-v3__column" aria-label="Company">
          <h2>Company</h2>
          <ul>{company.map((item) => <li key={item.label}><Link to={item.to}>{item.label}</Link></li>)}</ul>
        </nav>
        <div className="bv-footer-v3__column bv-footer-v3__contact">
          <h2>Contact Us</h2>
          <a href="tel:+201009110912" className="bv-footer-v3__contact-link">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>+20 1009110912</span>
          </a>
          <a href="mailto:salsabil.mohsen@businessvision.ai" className="bv-footer-v3__contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="m3 6 9 7 9-7"/></svg>
            <span>salsabil.mohsen@businessvision.ai</span>
          </a>
        </div>
      </div>
      <div className="bv-footer-v3__bottom"><p>Business Vision. Delivering business outcomes, not just technology.</p></div>
    </footer>
  );
}

const footerStyles = `
/* Unique class names and explicit sizes prevent inherited Home page styles from enlarging the footer. */
.bv-footer-v3, .bv-footer-v3 * { box-sizing: border-box; }
.bv-footer-v3 { width: 100%; margin: 0; background: #fff; color: #101010; font-family: var(--font-poppins), Poppins, system-ui, sans-serif; font-size: 14px; font-weight: 400; line-height: 1.45; }
.bv-footer-v3__inner { width: min(100% - 48px, 1330px); margin: 0 auto; padding: 32px 0 36px; display: grid; grid-template-columns: minmax(340px, 2.4fr) minmax(110px, .65fr) minmax(190px, 1.18fr) minmax(275px, 1.6fr); gap: 24px; align-items: start; }
.bv-footer-v3__brand, .bv-footer-v3__column { min-width: 0; }
.bv-footer-v3__logo { display: inline-block; line-height: 0; margin: 0 0 12px; }
.bv-footer-v3__logo img { display: block; width: 140px; max-width: 100%; height: auto; object-fit: contain; }
.bv-footer-v3__tagline { margin: 0 0 9px !important; max-width: 485px; font-size: 16px !important; font-weight: 400 !important; line-height: 1.38 !important; color: #111 !important; text-transform: none !important; }
.bv-footer-v3__description { margin: 0 0 11px !important; max-width: 470px; font-size: 14px !important; font-weight: 400 !important; line-height: 1.4 !important; color: #777 !important; text-transform: none !important; }
.bv-footer-v3__column h2 { margin: 0 0 14px !important; padding: 0 !important; color: #4aa9d5 !important; font-size: 16px !important; line-height: 1.35 !important; font-weight: 600 !important; text-transform: none !important; letter-spacing: 0 !important; }
.bv-footer-v3__column ul, .bv-footer-v3__socials { list-style: none; margin: 0 !important; padding: 0 !important; }
.bv-footer-v3__column li { padding: 0 !important; margin: 0 0 9px !important; }
.bv-footer-v3__column li a { display: inline-block; color: #111 !important; font-size: 14px !important; font-weight: 400 !important; line-height: 1.42 !important; text-decoration: none !important; background-image: linear-gradient(#1989c3, #1989c3); background-repeat: no-repeat; background-position: left bottom; background-size: 0 2px; padding-bottom: 2px; transition: color .2s ease, background-size .35s ease; }
.bv-footer-v3__column li a:hover, .bv-footer-v3__column li a:focus-visible { color: #1989c3 !important; text-decoration: none !important; background-size: 100% 2px; }
.bv-footer-v3__socials { display: flex; align-items: center; gap: 16px; margin-top: 6px !important; }
.bv-footer-v3__socials li { list-style: none; margin: 0; padding: 0; }
.bv-footer-v3__socials a { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; color: #111; transition: transform .2s; }
.bv-footer-v3__socials svg { display: block; width: 22px; height: 22px; }
.bv-footer-v3__socials a:hover { transform: translateY(-2px); color: #1989c3; }
.bv-footer-v3__contact-link { display: flex !important; align-items: flex-start; gap: 9px; margin: 0 0 12px; color: #111 !important; text-decoration: none !important; font-size: 12px !important; line-height: 1.35 !important; font-weight: 400 !important; white-space: nowrap; background-image: linear-gradient(#1989c3, #1989c3); background-repeat: no-repeat; background-position: left bottom; background-size: 0 2px; padding-bottom: 2px; transition: color .2s ease, background-size .35s ease; }
.bv-footer-v3__contact-link svg { width: 18px; height: 18px; flex: none; color: #4aa9d5; margin-top: 1px; }
.bv-footer-v3__contact-link span { min-width: 0; white-space: nowrap; overflow-wrap: normal; }
.bv-footer-v3__contact-link:hover, .bv-footer-v3__contact-link:focus-visible { color: #1989c3 !important; background-size: 100% 2px; }
.bv-footer-v3__bottom { border-top: 1px solid #dedede; }
.bv-footer-v3__bottom p { width: min(100% - 48px, 1330px); margin: 0 auto !important; padding: 12px 0 15px !important; font-size: 10px !important; font-weight: 400 !important; color: #222 !important; line-height: 1.4 !important; }
@media (max-width: 1220px) { .bv-footer-v3__inner { grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: 26px; } .bv-footer-v3__contact { grid-column: auto; } }
@media (max-width: 680px) { .bv-footer-v3__inner { grid-template-columns: 1fr; gap: 25px; padding: 28px 0 32px; } .bv-footer-v3__brand, .bv-footer-v3__contact { grid-column: auto; } .bv-footer-v3__tagline { font-size: 15px !important; } .bv-footer-v3__contact-link { white-space: normal; } .bv-footer-v3__contact-link span { white-space: normal; overflow-wrap: anywhere; } }
@media (prefers-reduced-motion: reduce) { .bv-footer-v3 a, .bv-footer-v3 svg { transition: none !important; } }
`;
