import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { deliveryLoop } from "@/data";

const TYPE_CONFIG = {
  feedback: {
    label: "Feedback",
    color: "#2563EB",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  decision: {
    label: "Decision",
    color: "#F59E0B",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  output: {
    label: "Output",
    color: "#22C55E",
    bg: "bg-green-50",
    border: "border-green-200",
  },
};

export default function DeliveryPage() {
  return (
    <PageWrapper breadcrumb="Delivery Rituals">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Engagement
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Short loops,
          <br />
          structured outcomes
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          We&apos;ll match TSH&apos;s pace with sprint-based delivery and weekly
          demos, while layering in lightweight governance that compounds.
        </p>
      </div>

      <div className="mb-10 overflow-hidden rounded-2xl border border-border-subtle">
        <div className="grid grid-cols-3 divide-x divide-border-subtle">
          <div className="p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-accent-secondary">
                Feedback Inputs
              </div>
            </div>
            {deliveryLoop.feedbackInputs.map((item, i) => (
              <div
                key={i}
                className="relative mb-2 pl-3 text-[12px] leading-relaxed text-text-secondary"
              >
                <span className="absolute left-0 text-accent-secondary/40">
                  ·
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="bg-amber-50/30 p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                </svg>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                Decision Points
              </div>
            </div>
            {deliveryLoop.decisionPoints.map((item, i) => (
              <div
                key={i}
                className="relative mb-2 pl-3 text-[12px] leading-relaxed text-text-secondary"
              >
                <span className="absolute left-0 text-amber-500/40">·</span>
                {item}
              </div>
            ))}
          </div>

          <div className="p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-green-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-green-600">
                Outputs
              </div>
            </div>
            {deliveryLoop.outputs.map((item, i) => (
              <div
                key={i}
                className="relative mb-2 pl-3 text-[12px] leading-relaxed text-text-secondary"
              >
                <span className="absolute left-0 text-green-500/40">·</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-border-subtle bg-tsh-cream/50 px-6 py-4">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-muted"
          >
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.3" />
          </svg>
          <span className="text-[12px] font-bold text-text-secondary">
            2-week sprint cycle · continuous feedback loop
          </span>
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          The rituals
        </div>
        <div className="grid grid-cols-2 gap-4">
          {deliveryLoop.rituals.map((ritual) => {
            const cfg = TYPE_CONFIG[ritual.type];
            return (
              <div
                key={ritual.id}
                className={`overflow-hidden rounded-xl border ${cfg.border}`}
              >
                <div className="flex items-start gap-4 p-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${cfg.bg}`}
                  >
                    {ritual.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <div className="font-display text-[14px] font-bold text-text-primary">
                        {ritual.title}
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          background: `${cfg.color}12`,
                          color: cfg.color,
                        }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    <div className="text-[12px] leading-relaxed text-text-tertiary">
                      {ritual.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/experiences"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Experience Moments: Where strategy meets the member
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-primary"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </PageWrapper>
  );
}
