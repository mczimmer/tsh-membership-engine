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
