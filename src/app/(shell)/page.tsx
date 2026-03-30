import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

const NAV_CARDS = [
  { href: "/context", title: "Where We Are", desc: "The three tensions at the heart of scaling the membership platform" },
  { href: "/approach", title: "Our Approach", desc: "A phased evolution model: validate, harden, and scale, with no big-bang rebuild" },
  { href: "/how-we-work", title: "How We Work Together", desc: "Two parallel tracks: embedded capability and strategic advisory, sharing one backlog" },
  { href: "/team", title: "Capability Profile", desc: "The skills and experience profile for the senior developer we'll embed" },
  { href: "/delivery", title: "Delivery Rituals", desc: "Sprint cadence, demos, governance checkpoints, and async-first communication" },
  { href: "/roadmap", title: "Roadmap", desc: "Week-by-week plan from discovery through multi-hub scale" },
];

export default function OverviewPage() {
  return (
    <PageWrapper breadcrumb="Overview">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/[0.08] px-3.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
        <span className="text-[11px] font-bold uppercase tracking-wide text-accent-primary">
          Engagement Plan
        </span>
      </div>

      <h1 className="font-display text-[48px] font-extrabold leading-[1.08] tracking-tight text-text-primary">
        Building the
        <br />
        <span className="text-accent-primary">Membership Engine</span>
      </h1>
      <p className="mt-7 max-w-[640px] text-[17px] leading-[1.8] text-text-secondary">
        TSH has built something genuinely ambitious: a data-driven, AI-enabled
        membership experience with real-time staff dashboards powered by tools
        like GitHub Copilot and Claude. The foundation is strong, the speed is
        real, and the ambition is clear. Now the question is how to evolve it:
        from experimental prototype to production-grade platform, without losing
        the velocity that got you here.
      </p>
      <p className="mt-4 max-w-[640px] text-[17px] leading-[1.8] text-text-secondary">
        This document outlines how we&apos;ll work together, including our approach to the
        technical and strategic challenges, the team we&apos;ll embed, the delivery
        rituals we&apos;ll follow, and the roadmap we&apos;ll execute against.
      </p>

      <div className="mt-12 grid grid-cols-3 gap-4">
        {[
          {
            label: "Capability",
            value: "Senior Full-Stack Developer",
            desc: "Backend-heavy, embedded in the TSH team",
            color: "bg-accent-primary",
          },
          {
            label: "Guidance",
            value: "Strategic Advisory",
            desc: "Architecture, governance & GDPR compliance",
            color: "bg-accent-secondary",
          },
          {
            label: "Outcome",
            value: "Production-Grade Platform",
            desc: "Scalable, compliant, shipped incrementally",
            color: "bg-accent-green",
          },
        ].map((c, i) => (
          <div
            key={i}
            className="rounded-card border border-border-subtle bg-bg-card p-6 shadow-card"
          >
            <div
              className={`mb-3 inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white ${c.color}`}
            >
              {c.label}
            </div>
            <div className="text-[15px] font-bold leading-snug text-text-primary">
              {c.value}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-text-tertiary">
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-4 text-sm font-semibold text-text-primary">
          What&apos;s in this document
        </div>
        <div className="flex flex-col gap-2.5">
          {NAV_CARDS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 rounded-card border border-border-subtle bg-bg-card p-5 shadow-card transition-all hover:border-border-strong hover:shadow-card-hover"
            >
              <div className="flex-1">
                <div className="text-[14px] font-bold text-text-primary transition-colors group-hover:text-accent-primary">
                  {item.title}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-text-tertiary">
                  {item.desc}
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent-primary"
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
