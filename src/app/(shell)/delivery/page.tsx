import { PageWrapper } from "@/components/PageWrapper";
import { deliveryLoop } from "@/data";

const RITUAL_LABELS: Record<string, string> = {
  weekly_demos: "WD",
  sprints: "2W",
  adrs: "ADR",
  privacy_checks: "PC",
  living_docs: "DOC",
  async_first: "AF",
};

function getRitualDescription(id: string, description: string) {
  if (id === "async_first") {
    return "Daily updates via Slack threads, not meetings. Sync time is reserved for decisions and demos, with no status theater.";
  }

  return description;
}

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
        {deliveryLoop.rituals.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 rounded-card border bg-bg-card p-6 shadow-card ${item.border}`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${item.bg}`}
            >
              {RITUAL_LABELS[item.id] ?? item.title.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="mb-1.5 font-display text-[14px] font-bold text-text-primary">
                {item.title}
              </div>
              <div className="text-xs leading-relaxed text-text-tertiary">
                {getRitualDescription(item.id, item.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
