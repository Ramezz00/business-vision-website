import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { CSSProperties } from 'react'


// ---------- Data ----------
interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface Client {
  name: string
  logo: string
  width: number
}

interface Capability {
  title: string
  description: string
  icon: string
}

interface Solution {
  title: string
  description: string
  icon: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/solutions',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Who We Are', href: '/about#who-we-are' },
      { label: 'Mission & Vision', href: '/about#mission-vision' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const clients: Client[] = [
  { name: 'Trusted partner 1', logo: '/images/LOGOS TRUSTED/1042569_0.jpeg-removebg-preview.png', width: 10 },
  { name: 'Trusted partner 2', logo: '/images/LOGOS TRUSTED/638368516079219350_0-removebg-preview (1) 1.png', width: 10 },
  { name: 'Trusted partner 3', logo: '/images/LOGOS TRUSTED/bilal coach 1.png', width: 10 },
  { name: 'Trusted partner 4', logo: '/images/LOGOS TRUSTED/images__1_-removebg-preview (3) 1.png', width: 10 },
  { name: 'Trusted partner 5', logo: '/images/LOGOS TRUSTED/images__1_-removebg-preview (3).png', width: 10 },
  { name: 'Trusted partner 6', logo: '/images/LOGOS TRUSTED/images__2_-removebg-preview (2).png', width: 10 },
  { name: 'Trusted partner 7', logo: '/images/LOGOS TRUSTED/images-removebg-preview (8).png', width: 10 },
  { name: 'Trusted partner 8', logo: '/images/LOGOS TRUSTED/novo-logo-white.jpg.corpimgo-removebg-preview 1.png', width: 10 },
  { name: 'Trusted partner 9', logo: '/images/LOGOS TRUSTED/P15QyJhA_400x400-removebg-preview.png', width: 10 },
  { name: 'Trusted partner 10', logo: '/images/LOGOS TRUSTED/unnamed.png', width: 10 }
]

const capabilities: Capability[] = [
  {
    title: 'Ai Solutions',
    description:
      'Leverage Ai & Animation to enhance productivity, optimize processes, and drive innovation.',
    icon: '/icons/ai.png',
  },
  {
    title: 'Custom Software Development',
    description:
      'Scalable, secure, and user centric applications built to solve complex business challenges.',
    icon: '/icons/code.png',
  },
  {
    title: 'Business Intelligence',
    description:
      'Transform data into actionable insights with interactive dashboards and advanced analytics.',
    icon: '/icons/bi.png',
  },
  {
    title: 'Data Management',
    description:
      'Build trusted, secure, and high-quality data foundations for sanstainable business growth.',
    icon: '/icons/data.png',
  },
]

const solutions: Solution[] = [
  {
    title: 'Enterprise Planning & Performance',
    description:
      'Empower strategic planning with connected data, intelligent forecasting, and real-time performance insights. Our solutions help enterprises align objectives, monitor progress, and make confident decisions that drive measurable business outcomes.',
    icon: '/icons/s-planning.png',
    href: '#',
  },
  {
    title: 'Data Foundation & Governance',
    description:
      'Build a secure and governed data foundation that ensures accuracy, consistency, and compliance. Enable trusted insights, stronger decision-making, and scalable digital transformation across the enterprise.',
    icon: '/icons/s-data.png',
    href: '#',
  },
  {
    title: 'Decision Intelligence & Analytics',
    description:
      'Leverage intelligent analytics to turn complex data into clear business insights. Empower leaders with real-time visibility, predictive intelligence, and confident decision-making across the enterprise.',
    icon: '/icons/s-intel.png',
    href: '#',
  },
  {
    title: 'Enterprise AI & Intelligent Automation',
    description:
      'Empower your enterprise with AI-driven automation that enhances productivity, simplifies complex workflows, and enables intelligent decision-making while maintaining governance, security, and scalability.',
    icon: '/icons/s-planning.png',
    href: '#',
  },
  {
    title: 'AI Strategy, Governance & Adoption',
    description:
      'Enable responsible AI adoption through clear strategy, governance, and organizational readiness. We help enterprises maximize AI value while maintaining security, compliance, and business alignment.',
    icon: '/icons/s-data.png',
    href: '#',
  },
  {
    title: 'Operate, Support & Optimize',
    description:
      'Keep your business running at peak performance with continuous support, system optimization, and proactive maintenance that enhance reliability, scalability, and operational efficiency.',
    icon: '/icons/s-intel.png',
    href: '#',
  },
]


interface Reason {
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    title: 'Industry Expertise',
    description: 'Deep Understanding of enterprise business environment.',
  },
  {
    title: 'Ai Driven Innovation',
    description: 'Empowering innovation with enterprise AI.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Solutions built to grow with your business.',
  },
  {
    title: 'End-to-End Partnership',
    description: 'From strategy to implementation and continuous support.',
  },
]

interface Stat {
  value: string
  label: string
  icon: string
}

const stats: Stat[] = [
  { value: '+11', label: 'Years of experience', icon: '/icons/stat-years.png' },
  { value: '+30', label: 'Enterprise Clients', icon: '/icons/stat-clients.png' },
  { value: '+50', label: 'Years Combined Expertise', icon: '/icons/stat-expertise.png' },
]

interface Step {
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    title: 'DISCOVERY',
    description: 'Understand your\nbusiness challenges\nand goals',
    icon: '/icons/step-discovery.png',
  },
  {
    title: 'PLANNING',
    description: 'Creating clear strategies\nfor successful execution.',
    icon: '/icons/step-planning.png',
  },
  {
    title: 'DESIGN',
    description: 'Transforming ideas\ninto user-centered\nexperiences.',
    icon: '/icons/step-design.png',
  },
  {
    title: 'DEVELOPMENT',
    description: 'Developing\nsolutions that\ndeliver results.',
    icon: '/icons/step-development.png',
  },
  {
    title: 'AI INTEGRATION',
    description: 'Seamlessly\nintegrating AI into\nbusiness processes.',
    icon: '/icons/step-ai.png',
  },
  {
    title: 'DEPLOYMENT',
    description: 'Ensuring seamless\nsolution\ndeployment.',
    icon: '/icons/step-deployment.png',
  },
  {
    title: 'CONTINUOUS SUPPORT',
    description: 'Ensuring continuous\nperformance and\nreliability.',
    icon: '/icons/step-support.png',
  },
]

interface Industry {
  name: string
  icon: string
  iconWidth: number
}

const industries: Industry[] = [
  { name: 'Banking', icon: '/icons/ind-banking.png', iconWidth: 4.5 },
  { name: 'HealthCare', icon: '/icons/ind-healthcare.png', iconWidth: 5.02 },
  { name: 'Manufacturing', icon: '/icons/ind-manufacturing.png', iconWidth: 4.85 },
  { name: 'Telecom', icon: '/icons/ind-telecom.png', iconWidth: 4.07 },
  { name: 'Retail', icon: '/icons/ind-retail.png', iconWidth: 4.94 },
  { name: 'Government', icon: '/icons/ind-government.png', iconWidth: 5.02 },
  { name: 'Oil And Gas', icon: '/icons/ind-oilgas.png', iconWidth: 4.94 },
]

interface Product {
  name: string
  description: string
  icon: string
  iconWidth: number
  href: string
}

const products: Product[] = [
  {
    name: 'FINSIGHT',
    description:
      'Finance Intelligence For Anomaly\nVisibility, Variance Understanding,\nBenchmark Context, And Executive-\nReady Decision Support.',
    icon: '/icons/prod-finsight.png',
    iconWidth: 3.81,
    href: '#',
  },
  {
    name: 'FINDISCLOSURE',
    description:
      'Controlled Disclosure And Reporting\nSupport For Cleaner Governance,\nReview Readiness, And Defensible\nFinancial Reporting Cycles.',
    icon: '/icons/prod-findisclosure.png',
    iconWidth: 3.9,
    href: '#',
  },
  {
    name: 'EAGLE EYE',
    description:
      'Finance Intelligence For Anomaly\nVisibility, Variance Understanding,\nBenchmark Context, And Executive-\nReady Decision Support.',
    icon: '/icons/prod-eagleeye.png',
    iconWidth: 3.9,
    href: '#',
  },
]

// interface Testimonial {
//   name: string
//   role: string
//   quote: string
//   avatar: string
// }

// const testimonials: Testimonial[] = [
//   {
//     name: 'Sarah Mitchell',
//     role: 'Chief Financial Officer',
//     quote:
//       '“Business Vision helped us streamline our\noperations with intelligent solutions that\nimproved efficiency and supported better\ndecision-making across our organization.”',
//     avatar: '/avatars/sarah.png',
//   },
//   {
//     name: 'David Anderson',
//     role: 'IT Director',
//     quote:
//       "“The team's expertise and collaborative\napproach made our digital transformation\njourney smooth, structured, and focused on\nmeasurable business outcomes.”",
//     avatar: '/avatars/david.png',
//   },
//   {
//     name: 'Michael Carter',
//     role: 'Operations Manager',
//     quote:
//       '“From planning to deployment, every stage\nwas delivered with professionalism,\ntransparency, and a clear understanding of our\nbusiness objectives.”',
//     avatar: '/avatars/michael.png',
//   },
//   // Demo testimonials: replace with real client feedback
//   {
//     name: 'Layla Hassan',
//     role: 'Head of Analytics',
//     quote:
//       '“Their dashboards gave our leadership\nteam clear visibility into performance\nand helped us act on insights\nmuch faster than before.”',
//     avatar: '/avatars/sarah.png',
//   },
//   {
//     name: 'Omar Khalil',
//     role: 'Chief Technology Officer',
//     quote:
//       '“From architecture to delivery, the team\nbuilt a scalable platform that grew\nwith our business without\ncompromising security.”',
//     avatar: '/avatars/david.png',
//   },
//   {
//     name: 'Nadia Farouk',
//     role: 'Data Governance Lead',
//     quote:
//       '“Their governance framework gave us\ntrusted data across departments and\nmade compliance reporting far\nless time consuming.”',
//     avatar: '/avatars/sarah.png',
//   },
//   {
//     name: 'James Walker',
//     role: 'VP of Operations',
//     quote:
//       '“Automation delivered by Business Vision\nsimplified our workflows and freed our\nteams to focus on strategic work.”',
//     avatar: '/avatars/michael.png',
//   },
//   {
//     name: 'Mona Ibrahim',
//     role: 'Finance Director',
//     quote:
//       '“The forecasting solution improved our\nplanning accuracy and gave us confidence\nin every financial decision we make.”',
//     avatar: '/avatars/sarah.png',
//   },
//   {
//     name: 'Karim Adel',
//     role: 'Project Manager',
//     quote:
//       '“A reliable partner with a clear process\nand continuous support after launch.\nEvery milestone was delivered\non time.”',
//     avatar: '/avatars/david.png',
//   },
// ]

interface FooterLink {
  label: string
  href: string
}

const footerExplore: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
]

const footerCompany: FooterLink[] = [
  { label: 'Who we are?', href: '/about#who-we-are' },
  { label: 'Leadership & Team', href: '/about' },
  { label: 'Business Vision & ALKAN', href: '/about' },
  { label: 'Case Studies', href: '/#testimonials' },
  // { label: 'Security & Governance', href: '/#why' },
  { label: 'Book a Discovery Session', href: '/contact' },
]

const socialLinks = [
  { label: 'Facebook', icon: '/icons/social-facebook.png', width: 1.3, href: '#' },
  { label: 'Instagram', icon: '/icons/social-instagram.png', width: 2.05, href: '#' },
  { label: 'YouTube', icon: '/icons/social-youtube.png', width: 2.6, href: '#' },
  { label: 'LinkedIn', icon: '/icons/social-linkedin.png', width: 2.1, href: '#' },
]

// ---------- Icons ----------
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Chevron({ size = 10 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}


function CheckCircle() {
  return (
    <svg
      className="reason__icon"
      viewBox="0 0 44 44"
      fill="none"
      stroke="#3eabde"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="20" strokeWidth="3" />
      <path d="M12.5 22.5l7 7 12-14" strokeWidth="3.6" />
    </svg>
  )
}

// ---------- Header ----------
export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : !href.includes('#') && pathname.startsWith(href)

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Business Vision home">
          <img src="/brand/business-vision-logo-full-color.svg" alt="Business Vision" />
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.label} className="nav__item">
                <Link
                  to={item.href}
                  className={`nav__link${isActive(item.href) ? ' nav__link--active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {item.children && <Chevron />}
                </Link>
                {item.children && (
                  <ul className="nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--cta">
            Book a Discovery Sesion
          </Link>
        </nav>
      </div>
    </header>
  )
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Empowering Enterprises
          <br />
          with Ai , Data &amp;
          <br />
          <span className="hero__gradient">Intelligent Software</span>
        </h1>
        <p className="hero__text">
          Business Vision helps organizations transform complex business challenges into
          measurable outcomes through <span className="nowrap">Ai-Powered</span> Solutions,
          business intelligence, enterprise applications, and trusted data platforms.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Get Started <ArrowRight />
          </Link>
          <Link to="/solutions" className="btn btn--ghost">
            Explore Solutions <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------- TrustedBy ----------
function TrustedBy() {
  return (
    <section className="trusted" aria-label="Trusted partners">
      <style>{`
        .trusted {
          min-height: 230px !important;
          height: auto !important;
          padding: 30px 0 !important;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .trusted__carousel {
          width: 100%;
          overflow: hidden;
        }
        .trusted__carousel .trusted__list {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          align-items: center;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
          animation: trusted-scroll-right 40s linear infinite;
        }
        .trusted__carousel .trusted__logo {
          box-sizing: border-box;
          flex: 0 0 200px;
          width: 200px;
          height: 160px;
          min-width: 200px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          margin: 0;
        }
        .trusted__carousel .trusted__logo img {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 160px;
          max-height: 128px;
          object-fit: contain;
          object-position: center;
          flex-shrink: 0;
        }
        @keyframes trusted-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trusted__carousel .trusted__list { animation: none; }
        }
      `}</style>
      <div className="trusted__carousel">
        <ul className="trusted__list">
          {[...clients, ...clients].map((client, index) => (
            <li
              key={`${client.name}-${index}`}
              className="trusted__logo"
              aria-hidden={index >= clients.length ? true : undefined}
            >
              <img src={client.logo} alt={index < clients.length ? client.name : ''} loading="eager" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------- About ----------
function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow">ABOUT BUSINESS VISION</p>
          <h2 className="about__title">
            TECHNOLOGY&nbsp; THAT DRIVES
            <br />
            BETTER BUSINESS DECISIONS
          </h2>
          <p>
            Business Vision Delivers intelligent software and Ai solutions that help
            organizations optimize operations, improve decision making, and unlock business
            growth.
          </p>
          <p>
            From enterprise applications to advanced analytics, we combine innovation, industry
            expertise, and scalable technology to create solutions that make business
            future-ready.
          </p>
          <Link to="/about" className="btn btn--outline">
            Learn More About Us
          </Link>
        </div>

        <ul className="about__cards">
          {capabilities.map((item) => (
            <li key={item.title} className="capability">
              <img className="capability__icon" src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------- Solutions ----------
function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <p className="solutions__eyebrow">OUR SOLUTIONS</p>
        <h2 className="solutions__title">ENTERPRISE SOLUTIONS BUILT AROUND BUSINESS OUTCOMES</h2>

        <ul className="solutions__grid">
          {solutions.map((item, i) => (
            <li key={item.title} className={`solution${i % 3 === 0 ? ' solution--dark' : ''}`}>
              <img className="solution__icon" src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.href} className="solution__link">
                READ MORE <ArrowRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------- WhyUs ----------
function WhyUs() {
  return (
    <section id="why" className="why">
      <span className="why__frame why__frame--1" aria-hidden="true" />
      <span className="why__frame why__frame--2" aria-hidden="true" />
      <span className="why__frame why__frame--3" aria-hidden="true" />

      <div className="why__inner">
        <div className="why__copy">
          <p className="why__eyebrow">WHY BUSINESS VISION</p>
          <h2 className="why__title">
            WHY ORGANIZATIONS
            <br />
            CHOOSE BUSINESS VISION
          </h2>
          <p className="why__text">
            Business Vision is a trusted technology partner for organizations seeking
            sustainable growth through innovation. Our experience, customer-focused approach,
            and scalable solutions enable enterprises to overcome complex challenges and
            achieve strategic business objectives.
          </p>
        </div>

        <ul className="why__list">
          {reasons.map((item) => (
            <li key={item.title} className="reason">
              <CheckCircle />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------- Stats ----------
function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats__box">
        <h2 id="stats-title" className="stats__title">
          DELIVERING MEASURABLE BUSINESS VALUE
        </h2>
        <ul className="stats__list">
          {stats.map((item) => (
            <li key={item.label} className="stat">
              <img className="stat__icon" src={item.icon} alt="" />
              <div className="stat__text">
                <p className="stat__value">{item.value}</p>
                <p className="stat__label">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ---------- Process ----------
function Process() {
  return (
    <section id="process" className="process">
      <p className="process__eyebrow">OUR PROCESS</p>
      <h2 className="process__title">FROM STRATEGY TO SUCCESS</h2>

      <ol className="process__steps">
        {steps.map((step) => (
          <li key={step.title} className="step">
            <span className="step__circle">
              <img src={step.icon} alt="" />
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

// ---------- Industries ----------
function Industries() {
  return (
    <section id="industries" className="industries" aria-labelledby="industries-title">
      <h2 id="industries-title" className="section-title">
        INDUSTRIES WE SERVE
      </h2>
      <ul className="industries__list">
        {industries.map((item) => (
          <li key={item.name} className="industry">
            <span className="industry__icon">
              <img
                src={item.icon}
                alt=""
                style={{ '--w': `${item.iconWidth}vw` } as CSSProperties}
              />
            </span>
            <span className="industry__name">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// ---------- Products ----------
function Products() {
  return (
    <section id="products" className="products" aria-labelledby="products-title">
      <h2 id="products-title" className="section-title">
        FEATURED PRODUCTS
      </h2>

      <ul className="products__grid">
        {products.map((item) => (
          <li key={item.name} className="product">
            <span className="product__icon">
              <img
                src={item.icon}
                alt=""
                style={{ '--w': `${item.iconWidth}vw` } as CSSProperties}
              />
            </span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.href} className="product__link" onClick={(e) => e.preventDefault()}>
              Learn More <ArrowRight size={13} />
            </a>
          </li>
        ))}
      </ul>

      <Link to="/products" className="products__all">
        <span>View Portfolio</span>
        <ArrowRight size={20} />
      </Link>
    </section>
  )
}

// ---------- Testimonials ----------
// const PER_PAGE = 3
// const pages = Array.from({ length: Math.ceil(testimonials.length / PER_PAGE) }, (_, i) =>
//   testimonials.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE),
// )

// function Testimonials() {
//   const [page, setPage] = useState(0)
//   const go = (next: number) => setPage((next + pages.length) % pages.length)

//   return (
//     <section id="testimonials" className="testimonials" aria-labelledby="testimonials-title">
//       <h2 id="testimonials-title" className="section-title">
//         WHAT OUR CLIENTS SAY
//       </h2>

//       <div className="slider" aria-live="polite">
//         <div className="slider__track" style={{ transform: `translateX(-${page * 100}%)` }}>
//           {pages.map((group, i) => (
//             <ul
//               key={i}
//               className="testimonials__grid slider__page"
//               aria-hidden={i !== page}
//               inert={i !== page}
//             >
//               {group.map((item) => (
//                 <li key={item.name} className="testimonial">
//                   <img className="testimonial__avatar" src={item.avatar} alt={item.name} />
//                   <h3>{item.name}</h3>
//                   <blockquote>{item.quote}</blockquote>
//                   <div className="testimonial__foot">
//                     <img className="testimonial__mark" src="/icons/quote.png" alt="" />
//                     <p>{item.role}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ))}
//         </div>
//       </div>

//       <div className="pager">
//         <button type="button" className="pager__btn" aria-label="Previous testimonials" onClick={() => go(page - 1)}>
//           <svg viewBox="0 0 10 16" className="pager__arrow" aria-hidden="true">
//             <path d="M8 2L2.5 8L8 14" />
//           </svg>
//         </button>
//         <span className="pager__track" style={{ '--i': page } as CSSProperties}>
//           <span className="pager__bar" />
//         </span>
//         <button type="button" className="pager__btn" aria-label="Next testimonials" onClick={() => go(page + 1)}>
//           <svg viewBox="0 0 10 16" className="pager__arrow" aria-hidden="true">
//             <path d="M2 2L7.5 8L2 14" />
//           </svg>
//         </button>
//       </div>
//     </section>
//   )
// }

// ---------- CallToAction ----------
function CallToAction() {
  return (
    <section id="contact" className="cta">
      <div className="cta__content">
        <h2>READY TO TRANSFORM YOUR BUSINESS?</h2>
        <p>
          Discover How Business Vision Can Help Your{" "}
          <br />
          Organization Leverage Ai, Software, And Data For Long{" "}
          <br />
          Term Success.
        </p>
        <Link to="/contact" className="cta__button">
          START YOUR PROJECT
        </Link>
      </div>
    </section>
  )
}

// ---------- Footer ----------
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo" aria-label="Business Vision home">
          <img src="/brand/business-vision-logo-full-color.svg" alt="Business Vision" />
        </Link>

        <div className="footer__about">
          <p className="footer__tagline">
            Business Vision - The Next North Star.
            <br />
            Business Transformation Powered by
            <br />
            Data, AI and Enterprise Intelligence.
          </p>
          <p className="footer__desc">
            {
              'Enterprise planning, trusted data,\ndecision intelligence, governed AI, and\nlong-term optimization for\norganizations that need measurable\ntransformation outcomes.\nMiddle East focus. Global execution\nstandards.'
            }
          </p>
        </div>

        <nav className="footer__col footer__col--explore" aria-label="Explore">
          <h2>Explore</h2>
          <ul>
            {footerExplore.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__col--company">
          <h2>Company</h2>
          <ul>
            {footerCompany.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer__social">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} aria-label={item.label}>
                  <img
                    src={item.icon}
                    alt=""
                    style={{ '--w': `${item.width}vw` } as CSSProperties}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="footer__rule" />
      <p className="footer__copy">
        Business Vision. Delivering business outcomes, not just technology.
      </p>
    </footer>
  )
}

// ---------- Home page ----------
export default function Home() {
  return (
    <>
      <Hero />
      <div className="panel">
        <TrustedBy />
        <About />
      </div>
      <Solutions />
      <WhyUs />
      <Stats />
      <Process />
      <Industries />
      <Products />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  )
}
