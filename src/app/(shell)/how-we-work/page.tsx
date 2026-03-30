import { PageWrapper } from "@/components/PageWrapper";
import { operatingModel } from "@/data";

const TRACK_LABELS = {
  capability: "DEV",
  advisory: "ADV",
} as const;

const TRACK_THEMES = {
  capability: {
    badge: "bg-accent-primary/10 text-accent-primary",
    dot: "bg-accent-primary/10 text-accent-primary",
  },
  advisory: {
    badge: "bg-accent-secondary/10 text-accent-secondary",
    dot: "bg-accent-secondary/10 text-accent-secondary",
  },
} as const;

export default function HowWeWorkPage() {
  return (
    <PageWrapper breadcrumb="How We Work">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Engagement
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Two tracks, one backlog
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        Capability and strategy run in parallel. The developer implements
        what the advisory track recommends. The advisory track evolves based on
        what the developer discovers in the codebase.
      </p>

      <div className="mt-11 grid grid-cols-2 gap-5">
        {operatingModel.tracks.map((track) => {
          const theme = TRACK_THEMES[track.id];
          return (
            <div
              key={track.id}
              className={`rounded-card border bg-bg-card p-7 shadow-card ${track.border}`}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${theme.badge}`}
                >
                  {TRACK_LABELS[track.id]}
                </div>
                <div>
                  <div className="font-display text-[15px] font-bold text-text-primary">
                    {track.name}
                  </div>
                  <div className="text-[11px] font-medium text-text-tertiary">
                    {track.owner}
                  </div>
                </div>
              </div>
              {track.deliverables.map((item, i) => (
                <div key={i} className="mb-3 flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.dot}`}
                  >
                    <span className="text-[10px]">+</span>
                  </div>
                  <span className="text-[13px] text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-5 rounded-card border border-border-subtle bg-bg-card p-6 shadow-card">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-tsh-cream text-lg text-accent-primary">
          SYNC
        </div>
        <div>
          <div className="text-[14px] font-bold text-text-primary">
            Continuous Feedback Loop
          </div>
          <div className="mt-1.5 text-xs leading-relaxed text-text-tertiary">
            {operatingModel.sync.description}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
