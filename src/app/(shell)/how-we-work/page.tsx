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
