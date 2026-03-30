#!/bin/bash

# TSH Membership Engine — Project Setup Script
# Run: chmod +x setup-tsh-project.sh && ./setup-tsh-project.sh

cd /Users/michael.zimmerman/Documents/TSH

# --- Directory structure ---
mkdir -p src/app/\(shell\)/context
mkdir -p src/app/\(shell\)/approach
mkdir -p src/app/\(shell\)/how-we-work
mkdir -p src/app/\(shell\)/team
mkdir -p src/app/\(shell\)/delivery
mkdir -p src/app/\(shell\)/roadmap
mkdir -p src/components
mkdir -p src/config

# --- .gitignore ---
cat > .gitignore << 'ENDOFFILE'
/node_modules
/.next/
/out/
/build
.DS_Store
*.pem
npm-debug.log*
.env*.local
.vercel
*.tsbuildinfo
next-env.d.ts
ENDOFFILE

# --- package.json ---
cat > package.json << 'ENDOFFILE'
{
  "name": "tsh-membership-engine",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@tailwindcss/typography": "^0.5.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "14.2.0"
  }
}
ENDOFFILE

# --- tsconfig.json ---
cat > tsconfig.json << 'ENDOFFILE'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
ENDOFFILE

# --- next.config.mjs ---
cat > next.config.mjs << 'ENDOFFILE'
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
ENDOFFILE

# --- tailwind.config.ts ---
cat > tailwind.config.ts << 'ENDOFFILE'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0c",
          secondary: "#09090b",
          card: "rgba(255,255,255,0.02)",
        },
        accent: {
          indigo: "#6366f1",
          violet: "#a78bfa",
          purple: "#c084fc",
          amber: "#f59e0b",
          red: "#ef4444",
          green: "#34d399",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255,255,255,0.55)",
          tertiary: "rgba(255,255,255,0.35)",
          muted: "rgba(255,255,255,0.25)",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          accent: "rgba(99,102,241,0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
ENDOFFILE

# --- postcss.config.mjs ---
cat > postcss.config.mjs << 'ENDOFFILE'
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
ENDOFFILE

# --- src/app/globals.css ---
cat > src/app/globals.css << 'ENDOFFILE'
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background: #0a0a0c;
  color: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.15); }
::selection { background: rgba(99,102,241,0.3); color: #fff; }
ENDOFFILE

# --- src/app/layout.tsx ---
cat > src/app/layout.tsx << 'ENDOFFILE'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Membership Engine — Valtech × The Social Hub",
  description: "Engagement plan for evolving TSH's AI-powered membership platform from experiment to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
ENDOFFILE

# --- src/config/navigation.ts ---
cat > src/config/navigation.ts << 'ENDOFFILE'
export interface NavPage {
  id: string;
  label: string;
  href: string;
}

export interface NavSection {
  group: string;
  pages: NavPage[];
}

export const NAVIGATION: NavSection[] = [
  {
    group: "Discovery",
    pages: [
      { id: "overview", label: "Overview", href: "/" },
    ],
  },
  {
    group: "Analysis",
    pages: [
      { id: "context", label: "Where We Are", href: "/context" },
      { id: "approach", label: "Our Approach", href: "/approach" },
    ],
  },
  {
    group: "Engagement",
    pages: [
      { id: "how-we-work", label: "How We Work", href: "/how-we-work" },
      { id: "team", label: "Capability Profile", href: "/team" },
      { id: "delivery", label: "Delivery Rituals", href: "/delivery" },
    ],
  },
  {
    group: "Plan",
    pages: [
      { id: "roadmap", label: "Roadmap", href: "/roadmap" },
    ],
  },
];
ENDOFFILE

# --- src/components/Sidebar.tsx ---
cat > src/components/Sidebar.tsx << 'ENDOFFILE'
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[260px] bg-bg-secondary border-r border-border-subtle flex flex-col z-50">
      <div className="px-6 pt-6 pb-5 border-b border-border-subtle">
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-text-tertiary">
          The Social Hub <span className="text-accent-indigo">×</span>
        </div>
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-accent-indigo">
          Valtech
        </div>
        <div className="text-lg font-extrabold text-text-primary mt-4 leading-tight tracking-tight">
          Membership Engine
        </div>
        <div className="text-[11px] text-text-muted mt-1.5">
          Engagement Plan
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {NAVIGATION.map((section) => (
          <div key={section.group} className="mb-2">
            <div className="px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
              {section.group}
            </div>
            {section.pages.map((page) => {
              const active = isActive(page.href);
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  className={`
                    block w-full text-left px-6 py-2 text-[13px] transition-all duration-150
                    border-l-2
                    ${active
                      ? "border-accent-indigo bg-accent-indigo/[0.08] text-[#a5b4fc] font-semibold"
                      : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.02]"
                    }
                  `}
                >
                  {page.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-border-subtle text-[10px] text-text-muted">
        Prepared Q2 2026
      </div>
    </aside>
  );
}
ENDOFFILE

# --- src/components/PageWrapper.tsx ---
cat > src/components/PageWrapper.tsx << 'ENDOFFILE'
interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumb: string;
}

export function PageWrapper({ children, breadcrumb }: PageWrapperProps) {
  return (
    <div className="px-14 py-12 max-w-[900px]">
      <div className="text-[11px] text-text-muted mb-8 tracking-wide">
        Membership Engine /{" "}
        <span className="text-text-tertiary">{breadcrumb}</span>
      </div>
      {children}
    </div>
  );
}
ENDOFFILE

# --- src/app/(shell)/layout.tsx ---
cat > "src/app/(shell)/layout.tsx" << 'ENDOFFILE'
import { Sidebar } from "@/components/Sidebar";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-bg-primary">
      <Sidebar />
      <main className="ml-[260px] flex-1 min-h-screen">{children}</main>
    </div>
  );
}
ENDOFFILE

# --- src/app/(shell)/page.tsx (Overview) ---
cat > "src/app/(shell)/page.tsx" << 'ENDOFFILE'
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

const NAV_CARDS = [
  { href: "/context", title: "Where We Are", desc: "The three tensions at the heart of scaling the membership platform" },
  { href: "/approach", title: "Our Approach", desc: "A phased evolution model — validate, harden, scale — with no big-bang rebuild" },
  { href: "/how-we-work", title: "How We Work Together", desc: "Two parallel tracks: embedded capability and strategic advisory, sharing one backlog" },
  { href: "/team", title: "Capability Profile", desc: "The skills and experience profile for the senior developer we'll embed" },
  { href: "/delivery", title: "Delivery Rituals", desc: "Sprint cadence, demos, governance checkpoints, and async-first communication" },
  { href: "/roadmap", title: "Roadmap", desc: "Week-by-week plan from discovery through multi-hub scale" },
];

export default function OverviewPage() {
  return (
    <PageWrapper breadcrumb="Overview">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement Plan
      </div>
      <h1 className="text-[44px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Building the
        <br />
        Membership Engine
      </h1>
      <p className="text-[17px] text-text-secondary leading-[1.75] mt-6 max-w-[640px]">
        TSH has built something genuinely ambitious — a data-driven, AI-enabled
        membership experience with real-time staff dashboards powered by tools
        like GitHub Copilot and Claude. The foundation is strong, the speed is
        real, and the ambition is clear. Now the question is how to evolve it:
        from experimental prototype to production-grade platform, without losing
        the velocity that got you here.
      </p>
      <p className="text-[17px] text-text-secondary leading-[1.75] mt-4 max-w-[640px]">
        This document outlines how we&apos;ll work together — our approach to the
        technical and strategic challenges, the team we&apos;ll embed, the delivery
        rituals we&apos;ll follow, and the roadmap we&apos;ll execute against.
      </p>

      <div className="grid grid-cols-3 gap-px mt-12 bg-border-subtle rounded-[14px] overflow-hidden">
        {[
          { label: "Capability", value: "Senior Full-Stack Developer", desc: "Backend-heavy, embedded in the TSH team" },
          { label: "Guidance", value: "Strategic Advisory", desc: "Architecture, governance & GDPR compliance" },
          { label: "Outcome", value: "Production-Grade Platform", desc: "Scalable, compliant, shipped incrementally" },
        ].map((c, i) => (
          <div key={i} className="p-7 bg-bg-primary">
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent-indigo mb-2.5">
              {c.label}
            </div>
            <div className="text-[15px] font-bold text-text-primary leading-tight">
              {c.value}
            </div>
            <div className="text-xs text-text-tertiary mt-1.5 leading-relaxed">
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="text-[13px] font-semibold text-text-secondary mb-4">
          What&apos;s in this document
        </div>
        <div className="flex flex-col gap-2">
          {NAV_CARDS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-indigo/30 transition-colors group"
            >
              <div className="flex-1">
                <div className="text-sm font-semibold text-text-primary">
                  {item.title}
                </div>
                <div className="text-xs text-text-tertiary mt-0.5">
                  {item.desc}
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-accent-indigo transition-colors">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/context/page.tsx ---
cat > "src/app/(shell)/context/page.tsx" << 'ENDOFFILE'
import { PageWrapper } from "@/components/PageWrapper";

const TENSIONS = [
  {
    title: "Speed vs. Structure",
    left: "Rapid AI experimentation with Copilot & Claude",
    right: "Need for maintainable, scalable architecture",
    color: "#f59e0b",
    emoji: "⚡",
  },
  {
    title: "Personalization vs. Privacy",
    left: "Deep member insights driving real-time host actions",
    right: "GDPR compliance on sensitive member data across hubs",
    color: "#ef4444",
    emoji: "🛡",
  },
  {
    title: "Empowerment vs. Governance",
    left: "On-site staff acting autonomously on live data",
    right: "Consistent data quality, access control & auditability",
    color: "#6366f1",
    emoji: "👥",
  },
];

export default function ContextPage() {
  return (
    <PageWrapper breadcrumb="Where We Are">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Analysis
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Three tensions we&apos;re
        <br />
        solving together
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        TSH&apos;s membership platform sits at the intersection of ambitious
        personalization and the operational reality of scaling across multiple
        hubs. The same energy that fuels rapid innovation creates structural
        tension as the platform grows.
      </p>

      <div className="flex flex-col gap-4 mt-11">
        {TENSIONS.map((t, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: `${t.color}15` }}
              >
                {t.emoji}
              </div>
              <span className="text-[15px] font-bold text-text-primary">
                {t.title}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3">
              <div className="text-[13px] text-text-secondary leading-relaxed p-3 bg-white/[0.03] rounded-[10px]">
                {t.left}
              </div>
              <div className="text-center text-base text-white/10">⇄</div>
              <div className="text-[13px] text-text-secondary leading-relaxed p-3 bg-white/[0.03] rounded-[10px]">
                {t.right}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-xl bg-accent-indigo/5 border border-accent-indigo/10 text-sm text-text-secondary leading-[1.65]">
        <strong className="text-[#a5b4fc]">Our read:</strong> These aren&apos;t
        problems to fix — they&apos;re tensions to manage. The goal isn&apos;t to
        eliminate speed in favor of structure. It&apos;s to find the right balance at
        each stage, and shift that balance deliberately as the platform matures.
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/approach/page.tsx ---
cat > "src/app/(shell)/approach/page.tsx" << 'ENDOFFILE'
"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

const PHASES = [
  {
    label: "Now", tag: "Current State", color: "#f59e0b",
    details: ["Rapid prototyping with AI-assisted development", "Feature-first, architecture-second", "Manual or semi-automated data flows", "Limited observability & monitoring"],
    arch: "Monolithic / ad-hoc", compliance: "Informal", velocity: "Very High", risk: "Growing",
  },
  {
    label: "Validate", tag: "Weeks 1–6", color: "#6366f1",
    details: ["Audit existing architecture & data flows", "Define API contracts & data schemas", "Establish GDPR baseline & gap analysis", "Identify what to keep, refactor, or replace"],
    arch: "API-first refactoring", compliance: "Gap analysis done", velocity: "High", risk: "Managed",
  },
  {
    label: "Harden", tag: "Weeks 7–14", color: "#a78bfa",
    details: ["Production-grade infrastructure & CI/CD", "Consent management & data lineage", "Role-based access for staff dashboards", "Testing, monitoring & incident response"],
    arch: "Event-driven services", compliance: "Privacy-by-design", velocity: "Moderate → High", risk: "Low",
  },
  {
    label: "Scale", tag: "Weeks 15+", color: "#34d399",
    details: ["Multi-hub rollout patterns & templates", "AI model governance & feedback loops", "Self-service analytics for hosts", "Automated compliance monitoring"],
    arch: "Distributed / multi-tenant", compliance: "Automated", velocity: "Sustained High", risk: "Controlled",
  },
];

const METRIC_LABELS = ["Architecture", "Compliance", "Velocity", "Risk"];
const METRIC_KEYS = ["arch", "compliance", "velocity", "risk"] as const;
const METRIC_ICONS = ["◇", "◈", "↗", "⊕"];

export default function ApproachPage() {
  const [active, setActive] = useState(0);
  const p = PHASES[active];

  return (
    <PageWrapper breadcrumb="Our Approach">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Analysis
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Evolution, not revolution
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        We won&apos;t stop and rebuild. We&apos;ll harden what works, replace what
        doesn&apos;t, and layer in governance incrementally — all while continuing to ship.
      </p>

      <div className="flex gap-0.5 mt-11 bg-white/[0.04] rounded-[10px] p-[3px]">
        {PHASES.map((ph, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 py-2.5 rounded-lg text-center transition-all ${active === i ? "bg-white/[0.06]" : "hover:bg-white/[0.02]"}`}
          >
            <div className="text-xs font-bold transition-colors" style={{ color: active === i ? ph.color : "rgba(255,255,255,0.3)" }}>
              {ph.label}
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">{ph.tag}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="p-7 rounded-[14px] bg-bg-card border border-border-subtle">
          <div className="text-xs font-bold text-text-secondary mb-4">
            {active === 0 ? "Current Reality" : "Key Activities"}
          </div>
          {p.details.map((d, i) => (
            <div key={i} className="flex gap-2 items-start mb-2.5">
              <span className="mt-0.5 text-xs" style={{ color: p.color }}>
                {active === 0 ? "→" : "✓"}
              </span>
              <span className="text-[13px] text-text-secondary leading-relaxed">{d}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {METRIC_LABELS.map((label, i) => (
            <div key={label} className="px-[18px] py-3.5 rounded-[10px] bg-bg-card border border-border-subtle flex items-center gap-3">
              <div className="text-text-muted text-sm">{METRIC_ICONS[i]}</div>
              <div>
                <div className="text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
                <div className="text-[13px] text-text-primary font-semibold mt-0.5">{p[METRIC_KEYS[i]]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/how-we-work/page.tsx ---
cat > "src/app/(shell)/how-we-work/page.tsx" << 'ENDOFFILE'
import { PageWrapper } from "@/components/PageWrapper";

const TRACK_1 = [
  "Backend architecture & API layer",
  "AI workflow implementation",
  "Real-time data pipelines",
  "Dashboard development for hosts",
  "CI/CD, testing & observability",
  "Pairing with TSH engineers",
];

const TRACK_2 = [
  "Target architecture & roadmap",
  "GDPR compliance framework",
  "AI governance strategy",
  "Multi-hub scalability patterns",
  "Team & ways-of-working design",
  "Tool & vendor evaluation",
];

export default function HowWeWorkPage() {
  return (
    <PageWrapper breadcrumb="How We Work">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Two tracks, one backlog
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        Capability and strategy running in parallel. The developer implements
        what the advisory track recommends. The advisory track evolves based on
        what the developer discovers in the codebase.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-11">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-accent-indigo/[0.06] to-accent-indigo/[0.01] border border-accent-indigo/[0.12]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent-indigo/[0.12] flex items-center justify-center text-accent-indigo text-sm">
              &lt;/&gt;
            </div>
            <div>
              <div className="text-[15px] font-bold text-text-primary">Capability Track</div>
              <div className="text-[11px] text-text-tertiary">Embedded Senior Developer</div>
            </div>
          </div>
          {TRACK_1.map((item, i) => (
            <div key={i} className="flex gap-2 items-start mb-2.5">
              <span className="mt-0.5 text-accent-indigo text-xs">✓</span>
              <span className="text-[13px] text-text-secondary leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-b from-accent-violet/[0.06] to-accent-violet/[0.01] border border-accent-violet/[0.12]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent-violet/[0.12] flex items-center justify-center text-accent-violet text-sm">
              ◎
            </div>
            <div>
              <div className="text-[15px] font-bold text-text-primary">Advisory Track</div>
              <div className="text-[11px] text-text-tertiary">Strategic Guidance</div>
            </div>
          </div>
          {TRACK_2.map((item, i) => (
            <div key={i} className="flex gap-2 items-start mb-2.5">
              <span className="mt-0.5 text-accent-violet text-xs">✓</span>
              <span className="text-[13px] text-text-secondary leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 p-5 rounded-xl bg-bg-card border border-border-subtle flex items-center gap-4">
        <div className="w-9 h-9 rounded-[10px] bg-accent-indigo/[0.08] flex items-center justify-center text-base text-accent-indigo shrink-0">
          ⟷
        </div>
        <div>
          <div className="text-[13px] font-bold text-text-primary">Continuous Feedback Loop</div>
          <div className="text-xs text-text-tertiary leading-relaxed mt-1">
            Weekly syncs ensure recommendations are grounded in implementation reality. Both tracks share a single backlog, jointly prioritized with TSH.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/team/page.tsx ---
cat > "src/app/(shell)/team/page.tsx" << 'ENDOFFILE'
import { PageWrapper } from "@/components/PageWrapper";

const CAPABILITIES = [
  { title: "Data Architecture", emoji: "🗄", skills: ["Event-driven systems & streaming", "Real-time data pipelines", "Data modeling & warehousing", "ETL / change data capture"] },
  { title: "API & Integration", emoji: "🔌", skills: ["RESTful & GraphQL design", "Third-party integrations", "Auth / OAuth / SSO", "Webhook & event architectures"] },
  { title: "AI Workflows", emoji: "⚡", skills: ["LLM integration patterns", "Prompt engineering at scale", "Model serving & monitoring", "RAG & agent architectures"] },
  { title: "Platform Engineering", emoji: "🏗", skills: ["CI/CD pipeline design", "Infrastructure as code", "Observability & alerting", "Container orchestration"] },
  { title: "Privacy & Compliance", emoji: "🛡", skills: ["GDPR-aware development", "Consent management", "Data minimization patterns", "Audit logging & lineage"] },
  { title: "Ways of Working", emoji: "🤝", skills: ["Rapid prototyping mindset", "Comfortable in ambiguity", "Strong async communication", "Pairing & knowledge transfer"] },
];

export default function TeamPage() {
  return (
    <PageWrapper breadcrumb="Capability Profile">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Built for this environment
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        TSH&apos;s setup demands someone who ships fast in ambiguity, thinks in
        systems, and is comfortable pairing across disciplines. Here&apos;s the
        profile we&apos;ll match.
      </p>

      <div className="grid grid-cols-2 gap-3.5 mt-11">
        {CAPABILITIES.map((card, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-base">{card.emoji}</span>
              <div className="text-sm font-bold text-text-primary">{card.title}</div>
            </div>
            {card.skills.map((s, j) => (
              <div key={j} className="text-xs text-text-tertiary leading-relaxed mb-1 pl-3 relative">
                <span className="absolute left-0 text-accent-indigo/40">·</span>
                {s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/delivery/page.tsx ---
cat > "src/app/(shell)/delivery/page.tsx" << 'ENDOFFILE'
import { PageWrapper } from "@/components/PageWrapper";

const RITUALS = [
  { title: "Weekly Demos", desc: "Every Friday: live walkthrough of what shipped, what we learned, what's next. Working software, not slide decks.", icon: "🎬" },
  { title: "2-Week Sprints", desc: "Clear goals, jointly prioritized with TSH. Tight enough for urgency, long enough to ship meaningful work.", icon: "🏃" },
  { title: "Architecture Decision Records", desc: "Lightweight docs for key technical decisions and rationale. Institutional knowledge without waterfall overhead.", icon: "📋" },
  { title: "Privacy Checkpoints", desc: "Every feature touching member data gets a lightweight GDPR impact assessment before shipping. Built in, not bolted on.", icon: "🔒" },
  { title: "Living Documentation", desc: "API specs, runbooks, onboarding guides that grow with the codebase. Always current, never a separate phase.", icon: "📝" },
  { title: "Async-First", desc: "Daily updates via Slack/threads, not meetings. Sync time reserved for decisions and demos — no status theatre.", icon: "💬" },
];

export default function DeliveryPage() {
  return (
    <PageWrapper breadcrumb="Delivery Rituals">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Short loops, structured outcomes
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        We&apos;ll match TSH&apos;s pace with sprint-based delivery and weekly demos,
        while layering in lightweight governance that compounds — not a
        bureaucratic slowdown.
      </p>

      <div className="grid grid-cols-2 gap-3.5 mt-11">
        {RITUALS.map((item, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle flex gap-3.5 items-start">
            <div className="text-[22px] shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <div className="text-sm font-bold text-text-primary mb-1">{item.title}</div>
              <div className="text-xs text-text-tertiary leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

# --- src/app/(shell)/roadmap/page.tsx ---
cat > "src/app/(shell)/roadmap/page.tsx" << 'ENDOFFILE'
import { PageWrapper } from "@/components/PageWrapper";

const PHASES = [
  {
    phase: "Validate", color: "#6366f1",
    items: [
      { week: "1–2", title: "Discovery & Audit", desc: "Deep-dive into current architecture, data flows, and compliance posture. Establish shared understanding." },
      { week: "3–4", title: "Foundation", desc: "API contracts defined, GDPR gap analysis delivered, dev environment & CI/CD hardened." },
      { week: "5–6", title: "First Production Wins", desc: "First refactored features live with monitoring. Quick wins that prove the approach." },
    ],
  },
  {
    phase: "Harden", color: "#a78bfa",
    items: [
      { week: "7–10", title: "Core Platform Build", desc: "Event-driven architecture, consent management, dashboard rebuilt for scale. Staff access controls live." },
      { week: "11–14", title: "Production Readiness", desc: "Load testing, security hardening, incident response playbooks. Robust enough for multi-hub ambitions." },
    ],
  },
  {
    phase: "Scale", color: "#34d399",
    items: [
      { week: "15–18", title: "Multi-Hub Patterns", desc: "Rollout framework for additional locations. AI model governance & feedback loops operational." },
      { week: "19+", title: "Sustained Velocity", desc: "Self-service analytics, automated compliance. Knowledge transfer for TSH team independence." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <PageWrapper breadcrumb="Roadmap">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Plan
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        The plan, week by week
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        Value from week one, compounding over time. Timelines are indicative and
        will be refined together during discovery.
      </p>

      <div className="mt-11">
        {PHASES.map((phase, pi) => (
          <div key={pi} className="mb-9">
            <div
              className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] mb-3.5"
              style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}25`, color: phase.color }}
            >
              {phase.phase}
            </div>
            <div className="ml-2.5 pl-5 flex flex-col gap-2" style={{ borderLeft: `2px solid ${phase.color}25` }}>
              {phase.items.map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-bg-card border border-border-subtle flex gap-4 items-start">
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] shrink-0 min-w-[52px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    W{item.week}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary">{item.title}</div>
                    <div className="text-xs text-text-tertiary leading-relaxed mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-8 rounded-2xl bg-gradient-to-br from-accent-indigo/[0.06] to-accent-violet/[0.03] border border-accent-indigo/10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent-indigo/10 flex items-center justify-center shrink-0 text-accent-indigo">
            ◎
          </div>
          <div>
            <div className="text-base font-extrabold text-text-primary mb-1.5">What success looks like</div>
            <div className="text-sm text-text-secondary leading-[1.7]">
              A membership platform that&apos;s as fast to iterate on as today — but
              production-grade, GDPR-compliant, and ready to scale across every
              Social Hub. An architecture the team understands and owns. A
              governance model that protects members without slowing down the
              people serving them.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border-subtle text-[11px] text-text-muted">
        VALTECH × THE SOCIAL HUB — Q2 2026
      </div>
    </PageWrapper>
  );
}
ENDOFFILE

echo ""
echo "✅ Project created: $PROJECT"
echo ""
echo "Next steps:"
echo "  cd $PROJECT"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "Then push to GitHub and connect to Vercel."
