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
