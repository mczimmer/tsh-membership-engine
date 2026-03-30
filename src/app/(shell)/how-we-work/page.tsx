import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { operatingModel } from "@/data";

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
          Capability and strategy running in parallel. The developer implements
          what the advisory track recommends. The advisory track evolves based
          on what the developer discovers.
        </p>
      </div>

      <div className="relative mb-10">
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
                    {cap.name}
                  </div>
                  <div className="text-[11px] font-medium text-text-tertiary">
                    {cap.owner}
                  </div>
                </div>
              </div>
              {cap.deliverables.map((item, i) => (
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
              {adv.deliverables.map((item, i) => (
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
            {operatingModel.sync.description}
          </p>
          <div className="mt-4 flex gap-6">
            {[
              { label: "Cadence", value: "Weekly" },
              { label: "Artifact", value: "Shared backlog" },
              { label: "Principle", value: "Jointly prioritized" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[13px] font-bold text-text-primary">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
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
