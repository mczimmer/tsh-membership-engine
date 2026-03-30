import { PageWrapper } from "@/components/PageWrapper";

const CAPABILITIES = [
  { title: "Data Architecture", emoji: "🗄", skills: ["Event-driven systems & streaming", "Real-time data pipelines", "Data modeling & warehousing", "ETL / change data capture"] },
  { title: "API & Integration", emoji: "🔌", skills: ["RESTful & GraphQL design", "Third-party integrations", "Auth / OAuth / SSO", "Webhook & event architectures"] },
  { title: "AI Workflows", emoji: "⚡", skills: ["LLM integration patterns", "Prompt engineering at scale", "Model serving & monitoring", "RAG & agent architectures"] },
  { title: "Platform Engineering", emoji: "🏗", skills: ["CI/CD pipeline design", "Infrastructure as code", "Observability & alerting", "Container orchestration"] },
  { title: "Privacy & Compliance", emoji: "🛡", skills: ["GDPR-aware development", "Consent management", "Data minimization patterns", "Audit logging & lineage"] },
  { title: "Ways of Working", emoji: "🤝", skills: ["Rapid prototyping mindset", "Comfortable in ambiguity", "Strong async communication", "Pairing & knowledge transfer"] },
];

export default function TeamPage() {
  return (
    <PageWrapper breadcrumb="Capability Profile">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Built for this environment
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        TSH&apos;s setup demands someone who ships fast in ambiguity, thinks in
        systems, and is comfortable pairing across disciplines. Here&apos;s the
        profile we&apos;ll match.
      </p>

      <div className="grid grid-cols-2 gap-3.5 mt-11">
        {CAPABILITIES.map((card, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-base">{card.emoji}</span>
              <div className="text-sm font-bold text-text-primary">{card.title}</div>
            </div>
            {card.skills.map((s, j) => (
              <div key={j} className="text-xs text-text-tertiary leading-relaxed mb-1 pl-3 relative">
                <span className="absolute left-0 text-accent-indigo/40">·</span>
                {s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
