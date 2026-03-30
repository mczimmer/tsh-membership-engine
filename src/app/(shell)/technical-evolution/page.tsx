import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { technicalEvolutionPhases } from "@/data";

export default function TechnicalEvolutionPage() {
  return (
    <PageWrapper breadcrumb="Technical Evolution">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          SYSTEM
        </div>
        <h1 className="max-w-[640px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          From pilot
          <br />
          to product
        </h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-[1.8] text-text-secondary">
          The architecture should mature in steps. Each phase introduces what is
          needed next, keeps the surrounding estate stable, and reduces a
          specific category of delivery or governance risk.
        </p>
      </div>

      <div className="mb-14 space-y-5">
        {technicalEvolutionPhases.map((phase) => (
          <div
            key={phase.id}
            className={`overflow-hidden rounded-2xl border ${phase.border}`}
          >
            <div className={`border-b p-6 ${phase.bg} ${phase.border}`}>
              <div
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: phase.color }}
              >
                {phase.label}
              </div>
              <div className="mt-1 font-display text-[22px] font-extrabold text-text-primary">
                {phase.subtitle}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-bg-card p-6">
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  What is introduced
                </div>
                <div className="space-y-2">
                  {phase.introduced.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-[3px] h-2 w-2 shrink-0 rounded-full"
                        style={{ background: phase.color }}
                      />
                      <span className="text-[13px] leading-relaxed text-text-primary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  What remains unchanged
                </div>
                <div className="space-y-2">
                  {phase.unchanged.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-border-strong" />
                      <span className="text-[13px] leading-relaxed text-text-secondary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border-subtle bg-tsh-cream/55 p-4">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Risk reduced
                </div>
                <div className="text-[13px] leading-relaxed text-text-primary">
                  {phase.riskReduced}
                </div>
              </div>
              <div className="rounded-xl border border-border-subtle bg-tsh-cream/55 p-4">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Value unlocked
                </div>
                <div className="text-[13px] leading-relaxed text-text-primary">
                  {phase.valueUnlocked}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/roadmap"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Roadmap: The plan, week by week
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
