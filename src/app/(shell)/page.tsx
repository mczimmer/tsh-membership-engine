import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

const NAV_CARDS = [
  {
    href: "/context",
    title: "Current State & Risks",
    desc: "The tensions and system realities that need to be managed first",
  },
  {
    href: "/approach",
    title: "System Evolution",
    desc: "How the platform matures from prototype to a trusted system",
  },
  {
    href: "/how-we-work",
    title: "Operating Model",
    desc: "How delivery, advisory, and shared decision making work together",
  },
  {
    href: "/team",
    title: "System Components",
    desc: "The capabilities required across data, AI, APIs, platform, and governance",
  },
  {
    href: "/delivery",
    title: "Control Points",
    desc: "The rituals that keep speed, quality, and governance aligned",
  },
  {
    href: "/experiences",
    title: "Active Use Cases",
    desc: "Where the system meets real member and hub experiences",
  },
  {
    href: "/roadmap",
    title: "Execution Plan",
    desc: "How the work progresses from validation through scale",
  },
];

export default function OverviewPage() {
  return (
    <PageWrapper breadcrumb="Overview">
      <div className="mb-16">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/[0.08] px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
          <span className="text-[11px] font-bold uppercase tracking-wide text-accent-primary">
            Working Model · Q2 2026
          </span>
        </div>

        <h1 className="max-w-[700px] font-display text-[52px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Building the
          <br />
          <span className="text-accent-primary">Membership Engine</span>
        </h1>

        <p className="mt-8 max-w-[600px] text-[18px] leading-[1.8] text-text-secondary">
          TSH has built a fast, working prototype of an AI driven membership
          experience. It proves the concept. It is not yet a system that can
          scale across hubs or handle production data reliably.
        </p>
        <p className="mt-4 max-w-[600px] text-[18px] leading-[1.8] text-text-secondary">
          This engagement is about turning what exists into a system that can
          be trusted, operated, and extended without slowing down the teams
          building it.
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
                  "Ship features quickly with AI assisted delivery",
                  "Move fast before every flow is fully stable",
                  "Learn from real use in the hubs",
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
                  "Know how the system behaves",
                  "Handle member data responsibly",
                  "Scale governance across hubs",
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
              This is the operating model for managing both at the same time.
            </div>
          </div>
        </div>
      </div>

      <p className="mb-16 max-w-[680px] text-[15px] leading-[1.75] text-text-secondary">
        This is not a static document. It is the working model for the
        engagement, and it will evolve with the system.
      </p>

      <div className="mb-16 grid grid-cols-3 gap-5">
        {[
          {
            stat: "1",
            unit: "embedded dev",
            label: "Core capability",
            desc: "A senior full stack developer embedded in the TSH team, with specialist capability brought in as needed across architecture, data, AI, and platform.",
            color: "text-accent-primary",
            bg: "bg-pink-50",
            border: "border-pink-200",
          },
          {
            stat: "2",
            unit: "tracks",
            label: "Operating model",
            desc: "One embedded developer driving delivery. Advisory support shaping architecture, governance, and scaling decisions alongside it.",
            color: "text-accent-secondary",
            bg: "bg-blue-50",
            border: "border-blue-200",
          },
          {
            stat: "4",
            unit: "phases",
            label: "System maturity",
            desc: "Validate, harden, scale, productize. Each phase reduces risk and increases trust in the system.",
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

      <p className="mb-10 text-[13px] leading-[1.7] text-text-tertiary">
        This is not a one person system. It is a system with one embedded
        owner.
      </p>

      <div className="relative mb-16 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card px-6 py-5">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="pl-6">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            Current status
          </div>
          <div className="space-y-2 text-[15px] leading-[1.75] text-text-primary">
            <p>
              <span className="font-bold text-text-secondary">Phase:</span>{" "}
              Validate
            </p>
            <p>
              <span className="font-bold text-text-secondary">Focus:</span>{" "}
              understanding current flows, system risks, and what needs to
              become stable first
            </p>
            <p>
              <span className="font-bold text-text-secondary">
                Next shift:
              </span>{" "}
              establishing cleaner data, API, and governance foundations
              without slowing delivery
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          Working modules
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
                <div className="text-[13px] font-bold leading-[1.4] text-text-primary transition-colors group-hover:text-accent-primary">
                  {item.title}
                </div>
                <div className="mt-1 text-[11px] leading-[1.5] text-text-tertiary">
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
