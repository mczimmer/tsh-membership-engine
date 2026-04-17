import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { operatingModel } from "@/data";

const DELIVERY_TRACK_ITEMS = [
  "Owns backend architecture and API layer",
  "Implements AI workflows in the product",
  "Builds and maintains real time data flows",
  "Delivers and evolves staff facing tools",
  "Ensures CI CD, testing, and observability",
  "Works directly with TSH engineers in the codebase",
];

const ADVISORY_TRACK_ITEMS = [
  "Defines target architecture and system boundaries",
  "Establishes GDPR and data governance model",
  "Sets AI usage guardrails and trust boundaries",
  "Designs multi hub scalability patterns",
  "Shapes team structure and ways of working",
  "Evaluates tools and integration approaches",
];

export default function HowWeWorkPage() {
  const cap = operatingModel.tracks[0];
  const adv = operatingModel.tracks[1];

  return (
    <PageWrapper breadcrumb="How We Work">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Engagement
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Two tracks,
          <br />
          one backlog
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          One system. Two roles.
        </p>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          The embedded developer builds and operates the system. The advisory
          track ensures the system is designed correctly and can scale.
        </p>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          Both work from the same backlog and continuously shape each other.
        </p>
      </div>

      <div className="relative mb-10">
        <div className="mb-4 text-center text-[12px] leading-[1.6] text-text-tertiary">
          Continuous feedback between delivery and design
        </div>
        <div className="grid grid-cols-[1fr_60px_1fr] gap-0">
          <div className="overflow-hidden rounded-2xl border-2 border-pink-200">
            <div className="h-1.5 bg-accent-primary" />
            <div className="p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10 font-display text-[11px] font-bold text-accent-primary">
                  DEV
                </div>
                <div>
                  <div className="font-display text-[16px] font-extrabold text-text-primary">
                    Delivery Track
                  </div>
                  <div className="text-[11px] font-medium text-text-tertiary">
                    {cap.owner}
                  </div>
                </div>
              </div>
              {DELIVERY_TRACK_ITEMS.map((item, i) => (
                <div key={i} className="mb-3 flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary/10">
                    <span className="text-[9px] font-bold text-accent-primary">
                      ✓
                    </span>
                  </div>
                  <span className="text-[13px] leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 py-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rotate-0 text-accent-primary"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-px flex-1 bg-border-subtle" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border-subtle bg-tsh-cream">
              <span className="text-[10px] font-bold text-text-muted">SYNC</span>
            </div>
            <div className="w-px flex-1 bg-border-subtle" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rotate-180 text-accent-secondary"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-blue-200">
            <div className="h-1.5 bg-accent-secondary" />
            <div className="p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-secondary/10 font-display text-[11px] font-bold text-accent-secondary">
                  ADV
                </div>
                <div>
                  <div className="font-display text-[16px] font-extrabold text-text-primary">
                    {adv.name}
                  </div>
                  <div className="text-[11px] font-medium text-text-tertiary">
                    {adv.owner}
                  </div>
                </div>
              </div>
              {ADVISORY_TRACK_ITEMS.map((item, i) => (
                <div key={i} className="mb-3 flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/10">
                    <span className="text-[9px] font-bold text-accent-secondary">
                      ✓
                    </span>
                  </div>
                  <span className="text-[13px] leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-14">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            Continuous Feedback Loop
          </div>
          <p className="max-w-[560px] text-[16px] font-medium leading-[1.7] text-text-primary">
            Weekly syncs are where decisions are made based on what is actually
            working in the system.
          </p>
          <p className="mt-4 max-w-[560px] text-[16px] font-medium leading-[1.7] text-text-primary">
            Both tracks operate from a shared backlog and adjust continuously.
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            {[
              { label: "Cadence", value: "Weekly" },
              { label: "Artifact", value: "Shared backlog" },
              {
                label: "Principle",
                value: "Decisions based on real system behavior",
              },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  {s.label}
                </div>
                <div className="mt-0.5 max-w-[200px] text-[13px] font-bold leading-[1.5] text-text-primary">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-text-primary">
            There is no handoff between tracks. If something cannot be
            implemented, it is not considered a valid recommendation.
          </p>
          <p className="mt-4 max-w-[620px] text-[16px] leading-[1.7] text-text-primary">
            This model only works if both roles stay tightly coupled. If they
            drift, delivery slows and decisions lose context.
          </p>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/team"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Capability Profile: Built for this environment
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
