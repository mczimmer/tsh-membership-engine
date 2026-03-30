import { PageWrapper } from "@/components/PageWrapper";

const PHASES = [
  {
    phase: "Validate",
    color: "#E63946",
    bg: "bg-red-50",
    text: "text-red-600",
    border: "border-red-200",
    dot: "bg-red-500",
    items: [
      {
        week: "1-2",
        title: "Discovery & Audit",
        desc: "Deep-dive into current architecture, data flows, and compliance posture. Establish shared understanding.",
      },
      {
        week: "3-4",
        title: "Foundation",
        desc: "API contracts defined, GDPR gap analysis delivered, dev environment & CI/CD hardened.",
      },
      {
        week: "5-6",
        title: "First Production Wins",
        desc: "First refactored features live with monitoring. Quick wins that prove the approach.",
      },
    ],
  },
  {
    phase: "Harden",
    color: "#2563EB",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    dot: "bg-blue-500",
    items: [
      {
        week: "7-10",
        title: "Core Platform Build",
        desc: "Event-driven architecture, consent management, dashboard rebuilt for scale. Staff access controls live.",
      },
      {
        week: "11-14",
        title: "Production Readiness",
        desc: "Load testing, security hardening, incident response playbooks. Robust enough for multi-hub ambitions.",
      },
    ],
  },
  {
    phase: "Scale",
    color: "#22C55E",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    dot: "bg-green-500",
    items: [
      {
        week: "15-18",
        title: "Multi-Hub Patterns",
        desc: "Rollout framework for additional locations. AI model governance & feedback loops operational.",
      },
      {
        week: "19+",
        title: "Sustained Velocity",
        desc: "Self-service analytics, automated compliance. Knowledge transfer for TSH team independence.",
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <PageWrapper breadcrumb="Roadmap">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Plan
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        The plan, week by week
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        Value from week one, compounding over time. Timelines are indicative and
        will be refined together during discovery.
      </p>

      <div className="mt-11">
        {PHASES.map((phase, pi) => (
          <div key={pi} className="mb-10">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 ${phase.bg} ${phase.border}`}>
              <span className={`h-2 w-2 rounded-full ${phase.dot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${phase.text}`}>
                {phase.phase}
              </span>
            </div>
            <div
              className="ml-4 flex flex-col gap-3 pl-6"
              style={{ borderLeft: `2px solid ${phase.color}30` }}
            >
              {phase.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 rounded-card border border-border-subtle bg-bg-card p-5 shadow-card"
                >
                  <div className={`min-w-[56px] shrink-0 text-[11px] font-bold ${phase.text} flex items-center gap-1.5`}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    W{item.week}
                  </div>
                  <div>
                    <div className="font-display text-[14px] font-bold text-text-primary">
                      {item.title}
                    </div>
                    <div className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-card border border-accent-primary/15 bg-bg-card p-8 shadow-elevated">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-primary/10 text-lg text-accent-primary">
            OK
          </div>
          <div>
            <div className="mb-2 font-display text-[17px] font-extrabold text-text-primary">
              What success looks like
            </div>
            <div className="text-[14px] leading-[1.75] text-text-secondary">
              A membership platform that&apos;s as fast to iterate on as it is today, but
              production-grade, GDPR-compliant, and ready to scale across every
              Social Hub. An architecture the team understands and owns. A
              governance model that protects members without slowing down the
              people serving them.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border-subtle pt-8 text-center text-[11px] font-medium text-text-muted">
        VALTECH x THE SOCIAL HUB - Q2 2026
      </div>
    </PageWrapper>
  );
}
