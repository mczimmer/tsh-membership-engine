import { PageWrapper } from "@/components/PageWrapper";

const RITUALS = [
  { title: "Weekly Demos", desc: "Every Friday: live walkthrough of what shipped, what we learned, what's next. Working software, not slide decks.", icon: "🎬" },
  { title: "2-Week Sprints", desc: "Clear goals, jointly prioritized with TSH. Tight enough for urgency, long enough to ship meaningful work.", icon: "🏃" },
  { title: "Architecture Decision Records", desc: "Lightweight docs for key technical decisions and rationale. Institutional knowledge without waterfall overhead.", icon: "📋" },
  { title: "Privacy Checkpoints", desc: "Every feature touching member data gets a lightweight GDPR impact assessment before shipping. Built in, not bolted on.", icon: "🔒" },
  { title: "Living Documentation", desc: "API specs, runbooks, onboarding guides that grow with the codebase. Always current, never a separate phase.", icon: "📝" },
  { title: "Async-First", desc: "Daily updates via Slack/threads, not meetings. Sync time reserved for decisions and demos — no status theatre.", icon: "💬" },
];

export default function DeliveryPage() {
  return (
    <PageWrapper breadcrumb="Delivery Rituals">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Engagement
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Short loops, structured outcomes
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        We&apos;ll match TSH&apos;s pace with sprint-based delivery and weekly demos,
        while layering in lightweight governance that compounds — not a
        bureaucratic slowdown.
      </p>

      <div className="grid grid-cols-2 gap-3.5 mt-11">
        {RITUALS.map((item, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle flex gap-3.5 items-start">
            <div className="text-[22px] shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <div className="text-sm font-bold text-text-primary mb-1">{item.title}</div>
              <div className="text-xs text-text-tertiary leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
