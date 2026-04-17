import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { systemComponents } from "@/data";

const RESPONSIBILITY_COPY: Record<string, string> = {
  data_architecture:
    "Owns how member context is structured, stored, and made usable across the system.",
  api_integration:
    "Defines how systems connect and how data flows between them.",
  ai_workflows:
    "Controls how AI is applied, validated, and monitored in production.",
  platform_engineering:
    "Ensures the system is deployable, observable, and stable in production.",
  privacy_compliance:
    "Enforces how member data is used, controlled, and audited.",
  ways_of_working:
    "Defines how the team operates to keep speed and system integrity aligned.",
};

export default function TeamPage() {
  return (
    <PageWrapper breadcrumb="Capability Profile">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Engagement
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Built for this
          <br />
          environment
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          TSH is building a system that spans data, APIs, AI, platform
          engineering, and governance.
        </p>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          It requires someone who can ship in ambiguity, but also a structure
          that ensures the system is designed and operated correctly as it
          scales.
        </p>
        <p className="mt-4 max-w-[580px] text-[15px] leading-[1.75] text-text-tertiary">
          This is not a role description. It is a system view of what needs to
          exist.
        </p>
      </div>

      <div className="relative mb-10">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-secondary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-secondary">
            A different lens
          </div>
          <p className="max-w-[560px] text-[16px] font-medium leading-[1.7] text-text-primary">
            These are not individual skills. They are system components.
          </p>
          <p className="mt-4 max-w-[560px] text-[16px] font-medium leading-[1.7] text-text-primary">
            Each one represents a part of the Membership Engine that must be
            designed, built, and operated correctly.
          </p>
        </div>
      </div>

      <div className="mb-14 space-y-4">
        {systemComponents.map((comp) => (
          <div
            key={comp.id}
            className={`overflow-hidden rounded-2xl border ${comp.border}`}
          >
            <div className="grid grid-cols-[280px_1fr] divide-x divide-border-subtle">
              <div className={`p-6 ${comp.bg}`}>
                <div className="mb-3 text-2xl">{comp.emoji}</div>
                <div className="font-display text-[17px] font-extrabold text-text-primary">
                  {comp.name}
                </div>
                <p className="mt-3 text-[13px] leading-[1.7] text-text-secondary">
                  {RESPONSIBILITY_COPY[comp.id]}
                </p>
                <div className="mt-2 inline-flex rounded-full border border-border-subtle bg-white/70 px-2.5 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                    {comp.roleLabel}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-2 p-6">
                {comp.capabilities.map((cap, j) => (
                  <div
                    key={j}
                    className="rounded-xl border border-border-subtle bg-tsh-cream/60 px-3.5 py-2 text-[12px] font-medium text-text-secondary"
                  >
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-10">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-secondary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-secondary">
            Why this matters
          </div>
          <p className="max-w-[620px] text-[16px] font-medium leading-[1.75] text-text-primary">
            This is not a headcount argument. It is a scope argument.
          </p>
          <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-[1.75] text-text-primary">
            One embedded developer can drive delivery. The system itself spans
            data architecture, AI workflows, platform engineering, integration,
            privacy, and ways of working.
          </p>
          <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-[1.75] text-text-primary">
            No single person holds all of this deeply while also shipping at
            speed.
          </p>
          <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-[1.75] text-text-primary">
            The advisory track exists to ensure the system is designed and
            operated correctly as it scales.
          </p>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-secondary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-secondary">
            Where this breaks
          </div>
          <div className="space-y-3">
            {[
              "If architecture decisions are made only in code, the system drifts",
              "If data and AI are not aligned, outputs become unreliable",
              "If platform and governance are added later, delivery slows",
              "If ways of working are not defined, speed and control diverge",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/65" />
                <span className="text-[14px] leading-[1.7] text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/delivery"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Delivery Rituals: Short loops, structured outcomes
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-primary"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </PageWrapper>
  );
}
