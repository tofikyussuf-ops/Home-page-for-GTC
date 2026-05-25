import { motion } from "framer-motion";
import { useEffect } from "react";
import digitalImage from "../public/digital.avif";
import leavingImage from "../public/Leaving.avif";
import movingInImage from "../public/moving In.avif";
import landlordImage from "../public/nonR.avif";
import { ScrollReveal } from "./ScrollReveal";
// ─── ICONS (inline SVG, no external deps beyond lucide) ─────────────────────
const IconGlobe = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconArrow = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconCheck = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconShield = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconStar = ({ size = 16, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "#F59E0B" : "none"}
    stroke="#F59E0B"
    strokeWidth="1.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
/* const IconLogOut = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconLogIn = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);
const IconWifi = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);
const IconHome = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconMapPin = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPlane = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-2 0-4 2-4 2l-3.5 3.5L4 7.2c-.8-.3-1.6.5-1.3 1.3l2.7 6.6c.2.5.6.9 1.1 1.1l3.1 1.2 2 3c.4.7 1.4.7 1.8 0l1.3-2.4" />
  </svg>
); */

// ─── STYLES ─────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body, #root {
    background: #060D1A;
    color: #F1F5F9;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .serif { font-family: 'Instrument Serif', Georgia, serif; }

  /* NAV */
  .nav-wrap {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 20px 32px;
    display: flex; justify-content: center;
    pointer-events: none;
  }
  .nav {
    pointer-events: all;
    width: 100%; max-width: 1160px;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(6,13,26,0.72);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 100px;
    padding: 12px 20px 12px 16px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }
  .nav-logo { display: flex; align-items: center; gap: 10px; }
  .nav-logo-icon {
    width: 34px; height: 34px;
    background: linear-gradient(135deg, #1D4ED8, #38BDF8);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-brand { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: #F1F5F9; }
  .nav-links { display: flex; align-items: center; gap: 32px; }
  .nav-link { font-size: 13.5px; font-weight: 500; color: #94A3B8; text-decoration: none; transition: color 0.2s; cursor: pointer; }
  .nav-link:hover { color: #F1F5F9; }
  .nav-cta {
    background: #1D4ED8; color: #fff;
    border: none; border-radius: 100px;
    padding: 9px 22px; font-size: 13.5px; font-weight: 600;
    cursor: pointer; transition: background 0.2s;
  }
  .nav-cta:hover { background: #2563EB; }

  /* HERO */
  .hero-section {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    max-width: 1160px; margin: 0 auto;
    padding: 140px 32px 80px;
    position: relative;
  }
  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(56,189,248,0.08);
    border: 1px solid rgba(56,189,248,0.2);
    border-radius: 100px;
    padding: 6px 16px 6px 10px;
    margin-bottom: 28px;
    width: fit-content;
  }
  .hero-eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #38BDF8;
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  .hero-eyebrow-text { font-size: 12px; font-weight: 600; color: #38BDF8; letter-spacing: 0.1em; text-transform: uppercase; }

  .hero-h1 {
    font-size: clamp(48px, 6vw, 76px);
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.03em;
    color: #F8FAFC;
    margin-bottom: 24px;
  }
  .hero-h1 em { font-style: italic; color: #38BDF8; font-family: 'Instrument Serif', serif; }
  .hero-sub {
    font-size: clamp(17px, 2vw, 20px);
    font-weight: 400;
    color: #94A3B8;
    line-height: 1.65;
    max-width: 560px;
    margin-bottom: 44px;
  }

  .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
  .btn-primary {
    display: flex; align-items: center; gap: 8px;
    background: #1D4ED8; color: #fff;
    border: none; border-radius: 12px;
    padding: 15px 28px; font-size: 15px; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-primary:hover { background: #2563EB; transform: translateY(-1px); box-shadow: 0 8px 32px rgba(29,78,216,0.4); }
  .btn-primary svg { transition: transform 0.2s; }
  .btn-primary:hover svg { transform: translateX(3px); }
  .btn-ghost {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    color: #CBD5E1; border-radius: 12px;
    padding: 15px 28px; font-size: 15px; font-weight: 500;
    cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-ghost:hover { border-color: rgba(56,189,248,0.4); color: #38BDF8; background: rgba(56,189,248,0.04); }

  /* TRUST ROW */
  .trust-row {
    display: flex; align-items: center; gap: 32px;
    padding-top: 40px;
    border-top: 1px solid rgba(255,255,255,0.06);
    flex-wrap: wrap;
  }
  .trust-item { display: flex; align-items: center; gap: 10px; }
  .trust-icon { color: #38BDF8; display: flex; }
  .trust-label { font-size: 13.5px; font-weight: 500; color: #94A3B8; }
  .trust-stars { display: flex; gap: 2px; }

  /* SOCIAL PROOF STRIP */
  .proof-strip {
    background: rgba(255,255,255,0.02);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 20px 32px;
    overflow: hidden;
  }
  .proof-strip-inner {
    max-width: 1160px; margin: 0 auto;
    display: flex; align-items: center; gap: 48px;
    font-size: 12px; font-weight: 600; color: #475569;
    letter-spacing: 0.08em; text-transform: uppercase;
    white-space: nowrap;
  }
  .proof-strip-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.06); flex-shrink: 0; }
  .proof-stat { color: #64748B; }
  .proof-stat span { color: #94A3B8; font-size: 14px; font-weight: 700; letter-spacing: 0; margin-right: 6px; }

  /* SERVICES SECTION */
  .services-section {
    padding: 100px 32px 120px;
    max-width: 1160px; margin: 0 auto;
  }
  .section-kicker {
    font-size: 16px; font-weight: 700; letter-spacing: 0.14em;
    color: #38BDF8; text-transform: uppercase;
    margin-bottom: 14px;
  }
  .section-h2 {
    font-size: clamp(34px, 4vw, 50px);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: #F8FAFC;
    margin-bottom: 16px;
  }
  .section-h2 em { font-style: italic; font-family: 'Instrument Serif', serif; color: #CBD5E1; }
  .section-sub {
    font-size: 18px; color: #64748B;
    line-height: 1.7; max-width: 520px;
    margin-bottom: 60px;
  }

  /* CARDS GRID */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .service-card {
    background: rgba(255,255,255,0.018);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 24px;
    padding: 36px;
    display: flex; flex-direction: column;
    transition: all 0.3s ease;
    cursor: default;
    position: relative; overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(56,189,248,0), transparent);
    transition: background 0.4s;
  }
  .service-card:hover {
    border-color: rgba(56,189,248,0.15);
    background: rgba(255,255,255,0.03);
    transform: translateY(-2px);
  }
  .service-card:hover::before {
    background: linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent);
  }
  .card-icon-wrap {
    width: 48px; height: 48px;
    border-radius: 14px;
    background: rgba(56,189,248,0.08);
    border: 1px solid rgba(56,189,248,0.14);
    display: flex; align-items: center; justify-content: center;
    color: #38BDF8; margin-bottom: 24px;
    transition: transform 0.3s;
  }
  .service-card:hover .card-icon-wrap { transform: scale(1.06); }
  .card-title { font-size: 20px; font-weight: 600; color: #F1F5F9; margin-bottom: 6px; letter-spacing: -0.01em; }
  .card-subtitle { font-size: 13.5px; font-weight: 500; color: #64748B; margin-bottom: 16px; line-height: 1.5; }
  .card-para { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 24px; }
  .card-bullets { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); }
  .card-bullet { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #94A3B8; line-height: 1.5; }
  .bullet-icon { color: #38BDF8; flex-shrink: 0; margin-top: 1px; }
  .card-closing { font-size: 12.5px; color: #475569; font-style: italic; line-height: 1.6; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 24px; }
  .card-cta {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 12px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    color: #94A3B8; font-size: 13.5px; font-weight: 600;
    cursor: pointer; transition: all 0.25s;
    margin-top: auto;
    font-family: 'DM Sans', sans-serif;
  }
  .card-cta:hover { background: #1D4ED8; border-color: #1D4ED8; color: #fff; }
  .card-cta:hover svg { transform: translateX(4px); }
  .card-cta svg { transition: transform 0.2s; }

  /* AMBIENT GLOW */
  .glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px); }

  /* SECTION DIVIDER */
  .divider { width: 100%; height: 1px; background: rgba(255,255,255,0.05); }

  /* STEP SECTION */
  .steps-section {
    padding: 80px 32px 100px;
    max-width: 1160px; margin: 0 auto;
  }
  .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 56px; }
  .step-item {
    padding: 36px 32px;
    background: rgba(255,255,255,0.015);
    border: 1px solid rgba(255,255,255,0.05);
    position: relative;
  }
  .step-item:first-child { border-radius: 20px 0 0 20px; }
  .step-item:last-child { border-radius: 0 20px 20px 0; }
  .step-num {
    font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
    color: #1D4ED8; text-transform: uppercase;
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 8px;
  }
  .step-num::after { content: ''; flex: 1; height: 1px; background: rgba(29,78,216,0.25); }
  .step-title { font-size: 18px; font-weight: 600; color: #E2E8F0; margin-bottom: 10px; letter-spacing: -0.01em; }
  .step-desc { font-size: 14px; color: #475569; line-height: 1.7; }

  /* BOTTOM CTA BAND */
  .cta-band {
    margin: 0 32px 80px;
    max-width: 1096px;
    margin-left: auto; margin-right: auto;
    background: linear-gradient(135deg, rgba(29,78,216,0.12), rgba(56,189,248,0.06));
    border: 1px solid rgba(56,189,248,0.15);
    border-radius: 28px;
    padding: 60px 56px;
    display: flex; align-items: center; justify-content: space-between; gap: 40px;
    flex-wrap: wrap;
  }
  .cta-band-left { flex: 1; min-width: 280px; }
  .cta-band-title { font-size: clamp(26px, 3vw, 36px); font-weight: 400; color: #F8FAFC; letter-spacing: -0.025em; margin-bottom: 10px; }
  .cta-band-title em { font-style: italic; font-family: 'Instrument Serif', serif; }
  .cta-band-sub { font-size: 15px; color: #64748B; }
  .cta-band-note { font-size: 12px; color: #475569; margin-top: 12px; }

  @media (max-width: 768px) {
    .cards-grid { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr; gap: 0; }
    .step-item:first-child { border-radius: 20px 20px 0 0; }
    .step-item:last-child { border-radius: 0 0 20px 20px; }
    .nav-links { display: none; }
    .proof-strip-inner { gap: 28px; }
  }
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function GlobalTaxHero() {

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const services = [
  {
    title: "Leaving the UK",
    subtitle: "Exit the UK tax system cleanly — before HMRC catches up.",
    bgImage: leavingImage,
    paragraph:
      "Residency missteps cost thousands. Our advisors run a full SRT analysis, structure your departure timeline, and ensure every HMRC obligation is closed before you board.",
    bullets: [
      "UK Statutory Residence Test planning",
      "Managing UK income after departure",
      "HMRC compliance & sign-off",
    ],
    closing:
      "Leave knowing your UK tax chapter is finished — not following you.",
    cta: "Plan My Exit",
  },
  {
    title: "Moving to the UK",
    subtitle: "Arrive with a strategy, not a tax bill you didn't see coming.",
    bgImage: movingInImage,
    paragraph:
      "From day-count rules to remittance basis elections, UK residency is a minefield for newcomers. We map your obligations from day one so you start right.",
    bullets: [
      "Statutory Residence Test onboarding",
      "Foreign income & remittance planning",
      "Self-assessment registration",
    ],
    closing:
      "Step into the UK with a clear, tax-efficient strategy already in place.",
    cta: "Start My UK Move",
  },
  {
    title: "Digital Nomads",
    subtitle: "Multiple countries. One clean UK tax position.",
    bgImage: digitalImage,
    paragraph:
      "Flexible work creates complex residency questions. We cut through the confusion with practical advice that keeps you compliant without anchoring you to a desk.",
    bullets: [
      "SRT & tie-breaker rule analysis",
      "Claiming UK tax refunds",
      "Multi-jurisdiction compliance",
    ],
    closing:
      "Stay compliant without compromising your freedom to work from anywhere.",
    cta: "Secure Nomad Strategy",
  },
  {
    title: "Non-Resident Landlords",
    subtitle: "UK property income. Zero UK residency headaches.",
    bgImage: landlordImage,
    paragraph:
      "HMRC's Non-Resident Landlord Scheme has teeth. We manage your registration, filings, and allowable expense claims so your investment stays profitable and compliant.",
    bullets: [
      "NRL Scheme registration & returns",
      "Maximising allowable expenses",
      "Annual tax return preparation",
    ],
    closing:
      "Keep your property income optimised — while you stay anywhere in the world.",
    cta: "Manage Property Tax",
  },
];
  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <div className="nav-wrap">
        <nav className="nav">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <IconGlobe size={17} />
            </div>
            <span className="nav-brand">Global Tax Consulting</span>
          </div>
          <div className="nav-links">
            {["Services", "Expertise", "About", "Resources"].map((l) => (
              <span key={l} className="nav-link">
                {l}
              </span>
            ))}
            <button className="nav-cta">Get Started</button>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="bg-[#07111F] text-[#F8FAFC]"
      >
        {/* Subtle Analog Grain Overlay - Elevates premium layout texture */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

        {/* bg glows */}
        <div
          className="glow"
          style={{
            width: 600,
            height: 500,
            top: -100,
            left: -120,
            background: "rgba(29,78,216,0.09)",
          }}
        />
        <div
          className="glow"
          style={{
            width: 500,
            height: 400,
            top: 100,
            right: -80,
            background: "rgba(56,189,248,0.06)",
          }}
        />

        {/* Added standard layout framing limits to accommodate the split layout structure */}
        <section className="hero-section max-w-7xl mx-auto px-8 pt-44 pb-24 relative">
          {/* Layout Grid Wrapper: Desktop handles text copy on left (span 7) and visual asset on right (span 5) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN: Exactly your untouched hero text copy blocks */}
            <div className="lg:col-span-7">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot" />
                <span className="hero-eyebrow-text">
                  Trusted by Expats in 50+ Countries
                </span>
              </div>

              <h1 className="hero-h1">
                UK Tax Advice
                <br />
                Built for <em>Expats</em>
              </h1>

              <p className="hero-sub">
                Navigate UK residency rules, stay fully HMRC compliant, and
                structure your affairs for wherever life takes you next.
              </p>

              <div className="hero-actions">
                <button className="btn-primary">
                  Get a Fixed-Fee Quote
                  <IconArrow size={17} />
                </button>
                <button className="btn-ghost">Speak to a Specialist</button>
              </div>
            </div>

            {/* RIGHT COLUMN: The Seamless Blended Image Canvas */}
            <div className="lg:col-span-5 relative w-full h-[380px] border border-white/5 bg-white/[0.01] rounded-sm overflow-hidden flex flex-col justify-between select-none group">
              {/* THE IMAGE: High-end, desaturated global financial/mobility visual */}
              {/* Uses a CSS mask so the edges melt completely into the dark background */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-50"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80')`, // Moody London at night (The core expat hub)
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Deep blue color wash overlay to force the image to match your exact hex theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent pointer-events-none" />

              {/* Fine blueprint coordinate grid overlaid ON TOP of the image to keep it technical */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              {/* Content Overlays (Structured metadata floating gracefully over the image) */}
              <div className="relative z-10 flex justify-between items-start w-full p-6">
                <div className="font-mono text-[9px] text-[#38BDF8] uppercase tracking-widest leading-normal">
                  Jurisdiction Core
                  <br />
                  <span className="text-slate-400 font-sans text-[11px] lowercase italic font-serif tracking-normal">
                    UK / Cross-Border Corridor
                  </span>
                </div>
                {/* Clean inline SVG globe tracking indicator */}
                <div className="text-slate-400 opacity-60">
                  <IconGlobe size={15} />
                </div>
              </div>

              {/* Floating Status Card over the image to highlight the app's functions */}
              <div className="relative z-10 mx-6 bg-[#07111F]/80 backdrop-blur-md border border-white/5 p-4 rounded-sm max-w-xs transition-transform duration-500 group-hover:translate-y-[-4px]">
                <p className="font-mono text-[8px] text-[#38BDF8] uppercase tracking-wider mb-1">
                  Active Status Tracking
                </p>
                <h4 className="text-xs font-sora font-medium text-white mb-1">
                  Statutory Residence Framework
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Monitoring global day thresholds and double-tax treaty
                  isolation protocols automatically.
                </p>
              </div>

              {/* Live Data Matrix Footer */}
              <div className="relative z-10 border-t border-white/5 pt-4 grid grid-cols-2 gap-4 bg-[#07111F]/60 backdrop-blur-sm p-6">
                <div>
                  <p className="font-mono text-[8px] text-slate-500 uppercase tracking-wider">
                    Asset Shielding
                  </p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5 uppercase tracking-wide">
                    Remittance Basis
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[8px] text-slate-500 uppercase tracking-wider">
                    Compliance Guarantee
                  </p>
                  <p className="text-[11px] text-emerald-400 font-medium mt-0.5 uppercase tracking-wide">
                    100% HMRC Protected
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals rows: Kept pristine, spans cleanly underneath the grid framework */}
          <div className="trust-row border-t border-white/5 mt-16 pt-8">
            <div className="trust-item">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={15} filled />
                ))}
              </div>
              <span className="trust-label">Rated 5★ on Google</span>
            </div>
            <div
              style={{
                width: 1,
                height: 28,
                background: "rgba(255,255,255,0.07)",
              }}
            />
            <div className="trust-item">
              <div className="trust-icon">
                <IconShield size={17} />
              </div>
              <span className="trust-label">HMRC Compliant</span>
            </div>
            <div
              style={{
                width: 1,
                height: 28,
                background: "rgba(255,255,255,0.07)",
              }}
            />
            <div className="trust-item">
              <span className="trust-label" style={{ color: "#475569" }}>
                Expats served in
              </span>
              <span
                className="trust-label"
                style={{ color: "#94A3B8", fontWeight: 700 }}
              >
                50+ countries
              </span>
            </div>
            <div
              style={{
                width: 1,
                height: 28,
                background: "rgba(255,255,255,0.07)",
              }}
            />
            <div className="trust-item">
              <span className="trust-label" style={{ color: "#475569" }}>
                Fixed fees —
              </span>
              <span
                className="trust-label"
                style={{ color: "#38BDF8", fontWeight: 600 }}
              >
                no surprises
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ==================================================== */}
      {/* PREMIUM INFINITE RUNNING MARQUEE (Moves Left)       */}
      {/* ==================================================== */}
      <div className="w-full border-y border-white/5 bg-white/[0.01] py-6 overflow-hidden relative group">
        {/* Elegant subtle side fades so it disappears gracefully into the layout borders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07111F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07111F] to-transparent z-10 pointer-events-none"></div>

        {/* Flex container holding two copies of the same data for seamless wrapping */}
        <div className="flex whitespace-nowrap overflow-hidden">
          {/* TRACK 1 */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 35, // Adjust this number to change speed (higher = slower, premium)
              repeat: Infinity,
            }}
            className="flex items-center gap-16 pr-16 shrink-0"
          >
            <MarqueeContent />
          </motion.div>

          {/* TRACK 2 (Identical twin to hide the seam) */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            className="flex items-center gap-16 pr-16 shrink-0"
          >
            <MarqueeContent />
          </motion.div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="glow"
          style={{
            width: 700,
            height: 400,
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(29,78,216,0.05)",
          }}
        />
        <ScrollReveal>
          <section className="services-section">
            {/* Wrap these in a container that forces horizontal centering */}
            <div className="flex flex-col items-center text-center w-full mb-16">
              <p className="section-kicker">How We Help</p>
              <h2 className="section-h2">
                Specialist advice for
                <br />
                <em>every expat scenario</em>
              </h2>
              <p className="section-sub mx-auto max-w-2xl">
                Whether you're leaving, arriving, roaming, or renting — we've
                handled it before and we'll handle it for you.
              </p>
            </div>
            <div className="cards-grid">
              {services.map((s, i) => (
                <div
                  className="service-card group"
                  key={i}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#000", // Black base for better image pop
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end", // Pushes content to the bottom initially
                    padding: "24px",
                    minHeight: "450px", // Slightly taller to fit larger fonts
                  }}
                >
                  {/* ─── BACKGROUND IMAGE LAYER ─── */}
                  <div
                    className="absolute inset-0 opacity-50 group-hover:opacity-70 scale-105 group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none"
                    style={{
                      backgroundImage: `url('${s.bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  />

                  {/* ─── HEAVIER GRADIENT FOR TEXT READABILITY ─── */}
                  {/* We use a solid black 'from' to ensure the text at the bottom is always visible */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30 transition-all duration-500 pointer-events-none"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 2,
                    }}
                  />

                  {/* ─── CONTENT WRAPPER ─── */}
                  <div style={{ position: "relative", zIndex: 10 }}>
                    {/* TITLE & SUBTITLE: Increased size and bottom alignment */}
                    <div className="mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                      <h3
                        className="card-title"
                        style={{
                          color: "#FFFFFF",
                          fontSize: "1.75rem", // Increased font size
                          fontWeight: "600",
                          marginBottom: "8px",
                          textShadow: "0 2px 4px rgba(0,0,0,0.5)", // Added shadow for extra visibility
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="card-subtitle"
                        style={{
                          color: "#E2E8F0", // Brighter than previous gray for visibility
                          fontSize: "1.05rem", // Increased font size
                          lineHeight: "1.4",
                        }}
                      >
                        {s.subtitle}
                      </p>
                    </div>

                    {/* ─── HOVER REVEAL BLOCK ─── */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      <p
                        className="card-para"
                        style={{
                          color: "#F8FAFC",
                          fontSize: "0.95rem",
                          marginTop: "15px",
                        }}
                      >
                        {s.paragraph}
                      </p>

                      <div
                        className="card-bullets"
                        style={{ margin: "20px 0" }}
                      >
                        {s.bullets.map((b, j) => (
                          <div
                            className="card-bullet"
                            key={j}
                            style={{
                              color: "#F1F5F9",
                              marginBottom: "8px",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <span style={{ color: "#38BDF8" }}>
                              <IconCheck size={16} />
                            </span>
                            {b}
                          </div>
                        ))}
                      </div>

                      <p
                        className="card-closing"
                        style={{
                          color: "#CBD5E1",
                          fontSize: "0.9rem", // Increased font size from 0.9rem to 1.05rem
                          fontWeight: "500", // Set to Medium so the text lines are crisper
                          fontStyle: "italic",
                          marginBottom: "24px",
                          lineHeight: "1.5", // Added extra breathing room for the larger font
                          textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                        }}
                      >
                        {s.closing}
                      </p>

                      <button className="card-cta" style={{ width: "100%" }}>
                        {s.cta}
                        <IconArrow size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* HOW IT WORKS */}
      <div className="divider" style={{ maxWidth: 1160, margin: "0 auto" }} />
      <ScrollReveal>
        <section className="steps-section py-24 bg-[#07111F]">
          <div className="max-w-7xl mx-auto px-4">
            {/* ─── CENTERED PROCESS HEADER ─── */}
            <div className="flex flex-col items-center text-center w-full mb-16 max-w-3xl mx-auto">
              <p
                className="section-kicker text-[14px] font-bold tracking-[0.2em] uppercase mb-4 text-[#38BDF8]"
                style={{ display: "block", textAlign: "center" }}
              >
                Our process
              </p>
              <h2
                className="section-h2 text-4xl md:text-5xl font-sora font-light text-white leading-tight mb-6"
                style={{ textAlign: "center" }}
              >
                Sort Your UK Tax In
                <br />
                <span className="text-white/60 italic font-serif">
                  3 Easy Steps
                </span>
              </h2>
              <p
                className="section-sub mx-auto max-w-2xl text-slate-400 text-lg leading-relaxed"
                style={{ textAlign: "center" }}
              >
                Our simple, fully online process makes managing your UK tax
                straightforward giving you clarity, confidence and expert
                support at every step.
              </p>
            </div>

            {/* ─── STEPS GRID ─── */}
            <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  n: "Step 01",
                  title: "Get a Fixed Fee Quote",
                  desc: "Tell us about your incomes, assets or filing needs and receive a fixed fee quote. No hidden costs or unexpected add-ons later.",
                },
                {
                  n: "Step 02",
                  title: "Secure Onboarding",
                  desc: "Upload your details safely through the online portal from anywhere in the world. The process is quick, simple and fully remote.",
                },
                {
                  n: "Step 03",
                  title: "Expert Delivery",
                  desc: "Your work is prepared carefully and delivered within the agreed timeframe. You’ll receive updates along the way so the process feels simple and stress free.",
                },
              ].map((s, i) => (
                <div
                  className="step-item p-6 border border-white/5 bg-[#000000]/30 rounded-sm hover:border-[#38BDF8]/30 transition-all duration-300"
                  key={i}
                >
                  {/* Step Number Styling */}
                  <div className="step-num font-mono text-[10px] text-[#38BDF8] uppercase tracking-widest mb-3">
                    {s.n}
                  </div>

                  {/* Step Title Styling */}
                  <h3
                    className="step-title text-xl font-semibold text-white mb-3"
                    style={{ fontWeight: "600" }}
                  >
                    {s.title}
                  </h3>

                  {/* Step Description Styling */}
                  <p
                    className="step-desc text-slate-400 text-sm leading-relaxed"
                    style={{ color: "#94A3B8" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BOTTOM CTA */}
      <div style={{ padding: "32px 32px 100px" }}>
        <div className="cta-band">
          <div className="cta-band-left">
            <h2 className="cta-band-title">
              Ready to get your UK tax
              <br />
              <em>position right?</em>
            </h2>
            <p className="cta-band-sub">
              Fixed-fee quote. No commitment. Expert advice from day one.
            </p>
            <p className="cta-band-note">
              30-minute call · HMRC-specialist advisors · 50+ countries covered
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <button
              className="btn-primary"
              style={{ fontSize: 15, padding: "16px 32px" }}
            >
              Book a Free Consultation
              <IconArrow size={17} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const MarqueeContent = () => (
  <>
    <div className="flex items-center gap-4">
      <span className="font-sora text-xl font-light text-white tracking-tight">
        £50M+
      </span>
      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
        Tax savings for clients
      </span>
    </div>
    <div className="w-1.5 h-1.5 bg-[#38BDF8]/40 rotate-45 shrink-0" />{" "}
    {/* Clean geometric diamond divider */}
    <div className="flex items-center gap-4">
      <span className="font-sora text-xl font-light text-white tracking-tight">
        12 Yrs
      </span>
      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
        UK international tax expertise
      </span>
    </div>
    <div className="w-1.5 h-1.5 bg-[#38BDF8]/40 rotate-45 shrink-0" />
    <div className="flex items-center gap-4">
      <span className="font-sora text-xl font-light text-white tracking-tight">
        2,400+
      </span>
      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
        Expats advised
      </span>
    </div>
    <div className="w-1.5 h-1.5 bg-[#38BDF8]/40 rotate-45 shrink-0" />
    <div className="flex items-center gap-4">
      <span className="font-sora text-xl font-light text-white tracking-tight">
        50+
      </span>
      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
        Countries covered
      </span>
    </div>
    <div className="w-1.5 h-1.5 bg-[#38BDF8]/40 rotate-45 shrink-0" />
    <div className="flex items-center gap-4">
      <span className="font-sora text-xl font-light text-white tracking-tight">
        100%
      </span>
      <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
        HMRC compliant track record
      </span>
    </div>
    <div className="w-1.5 h-1.5 bg-[#38BDF8]/40 rotate-45 shrink-0" />
  </>
);