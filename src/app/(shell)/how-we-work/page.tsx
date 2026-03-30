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
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Engagement
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Two tracks, one backlog
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        Capability and strategy run in parallel. The developer implements
        what the advisory track recommends. The advisory track evolves based on
        what the developer discovers in the codebase.
      </p>

      <div className="mt-11 grid grid-cols-2 gap-5">
        <div className="rounded-card border border-red-200 bg-bg-card p-7 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-primary/10 text-xs font-bold text-accent-primary">
              DEV
            </div>
            <div>
              <div className="font-display text-[15px] font-bold text-text-primary">
                Capability Track
              </div>
              <div className="text-[11px] font-medium text-text-tertiary">
                Embedded Senior Developer
              </div>
            </div>
          </div>
          {TRACK_1.map((item, i) => (
            <div key={i} className="mb-3 flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-primary/10">
                <span className="text-[10px] text-accent-primary">+</span>
              </div>
              <span className="text-[13px] text-text-secondary leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-card border border-blue-200 bg-bg-card p-7 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-secondary/10 text-xs font-bold text-accent-secondary">
              ADV
            </div>
            <div>
              <div className="font-display text-[15px] font-bold text-text-primary">
                Advisory Track
              </div>
              <div className="text-[11px] font-medium text-text-tertiary">
                Strategic Guidance
              </div>
            </div>
          </div>
          {TRACK_2.map((item, i) => (
            <div key={i} className="mb-3 flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/10">
                <span className="text-[10px] text-accent-secondary">+</span>
              </div>
              <span className="text-[13px] text-text-secondary leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-5 rounded-card border border-border-subtle bg-bg-card p-6 shadow-card">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-tsh-cream text-lg text-accent-primary">
          SYNC
        </div>
        <div>
          <div className="text-[14px] font-bold text-text-primary">
            Continuous Feedback Loop
          </div>
          <div className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
            Weekly syncs ensure recommendations are grounded in implementation
            reality. Both tracks share a single backlog, jointly prioritized
            with TSH.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
