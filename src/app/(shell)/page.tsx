import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

const NAV_CARDS = [
  {
    href: "/context",
    title: "Where We Are",
    desc: "Three tensions at the heart of scaling the membership platform",
  },
  {
    href: "/approach",
    title: "Our Approach",
    desc: "Validate, harden, scale - no big-bang rebuild",
  },
  {
    href: "/how-we-work",
    title: "How We Work",
    desc: "Two parallel tracks sharing one backlog",
  },
  {
    href: "/team",
    title: "Capability Profile",
    desc: "The developer profile we'll embed",
  },
  {
    href: "/delivery",
    title: "Delivery Rituals",
    desc: "Sprint cadence, demos, governance",
  },
  {
    href: "/experiences",
    title: "Experience Moments",
    desc: "Where strategy meets the member",
  },
  {
    href: "/roadmap",
    title: "Roadmap",
    desc: "Week-by-week from discovery to scale",
  },
];

export default function OverviewPage() {
  return (
    <PageWrapper breadcrumb="Overview">
      <div className="mb-16">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/[0.08] px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
          <span className="text-[11px] font-bold uppercase tracking-wide text-accent-primary">
            Engagement Plan · Q2 2026
          </span>
        </div>

        <h1 className="max-w-[700px] font-display text-[52px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Building the
          <br />
          <span className="text-accent-primary">Membership Engine</span>
        </h1>

        <p className="mt-8 max-w-[600px] text-[18px] leading-[1.8] text-text-secondary">
          TSH has the strategic clarity to recognise that a differentiated
          membership experience cannot be bought off the shelf. By building its
          own AI-powered personalisation platform, TSH has the opportunity to
          create something unique to its brand, its hubs, and its community.
          Done right, that becomes a competitive advantage that could extend
          beyond TSH into a productised model for the wider hospitality
          industry. The foundation is strong, the ambition is clear, and now
          the question is how to evolve from experimental prototype to
          production-grade platform without losing the velocity that got you
          here.
        </p>
      </div>

      <div className="relative mb-16">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/[0.04] via-transparent to-accent-secondary/[0.04]" />
        <div className="relative rounded-2xl border border-border-subtle px-10 py-12">
          <div className="mb-10 text-center">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
              The core tension
            </div>
            <div className="font-display text-[28px] font-extrabold text-text-primary">
              Speed <span className="mx-3 font-normal text-text-muted">&</span>{" "}
              Structure
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-1 text-right">
              <div className="mb-1 text-[15px] font-bold text-accent-primary">
                A direction
              </div>
              <div className="font-display text-[32px] font-extrabold leading-tight text-text-primary">
                Speed
              </div>
              <div className="mt-4 space-y-2">
                {[
                  "Ship features fast with AI tools",
                  "Empower hosts with real-time data",
                  "Iterate on member experiences daily",
                ].map((t, i) => (
                  <div key={i} className="text-[13px] text-text-tertiary">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="h-8 w-px bg-border-subtle" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-primary/30">
                <span className="font-display text-lg font-bold text-accent-primary">
                  &
                </span>
              </div>
              <div className="h-8 w-px bg-border-subtle" />
            </div>

            <div className="flex-1">
              <div className="mb-1 text-[15px] font-bold text-accent-secondary">
                High confidence
              </div>
              <div className="font-display text-[32px] font-extrabold leading-tight text-text-primary">
                Structure
              </div>
              <div className="mt-4 space-y-2">
                {[
                  "Production-grade, scalable platform",
                  "GDPR-compliant member data handling",
                  "Governance that scales across hubs",
                ].map((t, i) => (
                  <div key={i} className="text-[13px] text-text-tertiary">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border-subtle pt-6 text-center">
            <div className="mx-auto max-w-[500px] text-[14px] leading-relaxed text-text-secondary">
              This document is the operating model for navigating both,
              simultaneously, not sequentially.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 grid grid-cols-3 gap-5">
        {[
          {
            stat: "1",
            unit: "dev",
            label: "Capability",
            desc: "Senior full-stack developer embedded in the TSH team, with the flexibility to bring in specialist capability as the platform evolves",
            color: "text-accent-primary",
            bg: "bg-pink-50",
            border: "border-pink-200",
          },
          {
            stat: "2",
            unit: "tracks",
            label: "Guidance",
            desc: "Capability and advisory running in parallel, sharing one backlog",
            color: "text-accent-secondary",
            bg: "bg-blue-50",
            border: "border-blue-200",
          },
          {
            stat: "4",
            unit: "phases",
            label: "Outcome",
            desc: "Validate -> Harden -> Scale -> a production-grade membership platform",
            color: "text-accent-green",
            bg: "bg-green-50",
            border: "border-green-200",
          },
        ].map((c, i) => (
          <div key={i} className={`rounded-card border p-6 ${c.bg} ${c.border}`}>
            <div className="mb-3 flex items-baseline gap-1.5">
              <span
                className={`font-display text-[40px] font-extrabold leading-none ${c.color}`}
              >
                {c.stat}
              </span>
              <span className="text-[14px] font-bold text-text-tertiary">
                {c.unit}
              </span>
            </div>
            <div className="mb-2 text-[13px] font-bold uppercase tracking-wider text-text-primary">
              {c.label}
            </div>
            <div className="text-[12px] leading-relaxed text-text-secondary">
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          In this document
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {NAV_CARDS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-card px-5 py-4 transition-all hover:border-border-strong hover:shadow-card"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-tsh-cream font-display text-[11px] font-bold text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-bold text-text-primary transition-colors group-hover:text-accent-primary">
                  {item.title}
                </div>
                <div className="truncate text-[11px] text-text-tertiary">
                  {item.desc}
                </div>
              </div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent-primary"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
