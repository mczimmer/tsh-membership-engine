import { PageWrapper } from "@/components/PageWrapper";

const CAPABILITIES = [
  {
    title: "Data Architecture",
    icon: "DA",
    bg: "bg-amber-50",
    border: "border-amber-200",
    skills: [
      "Event-driven systems & streaming",
      "Real-time data pipelines",
      "Data modeling & warehousing",
      "ETL / change data capture",
    ],
  },
  {
    title: "API & Integration",
    icon: "API",
    bg: "bg-blue-50",
    border: "border-blue-200",
    skills: [
      "RESTful & GraphQL design",
      "Third-party integrations",
      "Auth / OAuth / SSO",
      "Webhook & event architectures",
    ],
  },
  {
    title: "AI Workflows",
    icon: "AI",
    bg: "bg-red-50",
    border: "border-red-200",
    skills: [
      "LLM integration patterns",
      "Prompt engineering at scale",
      "Model serving & monitoring",
      "RAG & agent architectures",
    ],
  },
  {
    title: "Platform Engineering",
    icon: "PE",
    bg: "bg-green-50",
    border: "border-green-200",
    skills: [
      "CI/CD pipeline design",
      "Infrastructure as code",
      "Observability & alerting",
      "Container orchestration",
    ],
  },
  {
    title: "Privacy & Compliance",
    icon: "PC",
    bg: "bg-purple-50",
    border: "border-purple-200",
    skills: [
      "GDPR-aware development",
      "Consent management",
      "Data minimization patterns",
      "Audit logging & lineage",
    ],
  },
  {
    title: "Ways of Working",
    icon: "WW",
    bg: "bg-orange-50",
    border: "border-orange-200",
    skills: [
      "Rapid prototyping mindset",
      "Comfortable in ambiguity",
      "Strong async communication",
      "Pairing & knowledge transfer",
    ],
  },
];

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
        {CAPABILITIES.map((card, i) => (
          <div
            key={i}
            className={`rounded-card border bg-bg-card p-6 shadow-card ${card.border}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-bold ${card.bg}`}
              >
                {card.icon}
              </div>
              <div className="font-display text-[14px] font-bold text-text-primary">
                {card.title}
              </div>
            </div>
            {card.skills.map((s, j) => (
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
