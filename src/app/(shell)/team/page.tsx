import { PageWrapper } from "@/components/PageWrapper";
import { systemComponents } from "@/data";

const COMPONENT_LABELS: Record<string, string> = {
  data_architecture: "DA",
  api_integration: "API",
  ai_workflows: "AI",
  platform_engineering: "PE",
  privacy_compliance: "PC",
  ways_of_working: "WW",
};

export default function TeamPage() {
  return (
    <PageWrapper breadcrumb="Capability Profile">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Engagement
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Built for this environment
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        TSH&apos;s setup demands someone who ships fast in ambiguity, thinks in
        systems, and works comfortably across disciplines. Here&apos;s the
        profile we&apos;ll match.
      </p>

      <div className="mt-11 grid grid-cols-2 gap-4">
        {systemComponents.map((card) => (
          <div
            key={card.id}
            className={`rounded-card border bg-bg-card p-6 shadow-card ${card.border}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-bold ${card.bg}`}
              >
                {COMPONENT_LABELS[card.id] ?? card.roleLabel.slice(0, 2).toUpperCase()}
              </div>
              <div className="font-display text-[14px] font-bold text-text-primary">
                {card.name}
              </div>
            </div>
            {card.capabilities.map((s, j) => (
              <div
                key={j}
                className="relative mb-1.5 pl-3 text-[12px] leading-relaxed text-text-secondary"
              >
                <span className="absolute left-0 text-text-muted">·</span>
                {s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
