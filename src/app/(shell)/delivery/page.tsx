import { PageWrapper } from "@/components/PageWrapper";

const RITUALS = [
  {
    title: "Weekly Demos",
    desc: "Every Friday: live walkthrough of what shipped, what we learned, what's next. Working software, not slide decks.",
    icon: "WD",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    title: "2-Week Sprints",
    desc: "Clear goals, jointly prioritized with TSH. Tight enough for urgency, long enough to ship meaningful work.",
    icon: "2W",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    title: "Architecture Decision Records",
    desc: "Lightweight docs for key technical decisions and rationale. Institutional knowledge without waterfall overhead.",
    icon: "ADR",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    title: "Privacy Checkpoints",
    desc: "Every feature touching member data gets a lightweight GDPR impact assessment before shipping. Built in, not bolted on.",
    icon: "PC",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    title: "Living Documentation",
    desc: "API specs, runbooks, onboarding guides that grow with the codebase. Always current, never a separate phase.",
    icon: "DOC",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    title: "Async-First",
    desc: "Daily updates via Slack threads, not meetings. Sync time is reserved for decisions and demos, with no status theater.",
    icon: "AF",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export default function DeliveryPage() {
  return (
    <PageWrapper breadcrumb="Delivery Rituals">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Engagement
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Short loops, structured outcomes
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        We&apos;ll match TSH&apos;s pace with sprint-based delivery and weekly demos,
        while layering in lightweight governance that compounds, not a
        bureaucratic slowdown.
      </p>

      <div className="mt-11 grid grid-cols-2 gap-4">
        {RITUALS.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 rounded-card border bg-bg-card p-6 shadow-card ${item.border}`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${item.bg}`}
            >
              {item.icon}
            </div>
            <div>
              <div className="mb-1.5 font-display text-[14px] font-bold text-text-primary">
                {item.title}
              </div>
              <div className="text-xs leading-relaxed text-text-tertiary">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
