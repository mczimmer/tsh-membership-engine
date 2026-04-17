"use client";

import { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { technicalEvolutionPhases } from "@/data";

export default function TechnicalEvolutionPage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const togglePhase = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <PageWrapper breadcrumb="Technical Evolution">
      <div className="mb-10">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Membership Engine
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

      <div className="mb-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card">
        <div className="grid grid-cols-4">
          {technicalEvolutionPhases.map((phase, index) => {
            const isExpanded = expanded.has(phase.id);

            return (
              <div
                key={phase.id}
                className={`min-w-0 ${index < technicalEvolutionPhases.length - 1 ? "border-r border-border-subtle" : ""}`}
              >
                <div
                  className="h-1"
                  style={{ background: phase.color }}
                />

                <button
                  type="button"
                  onClick={() => togglePhase(phase.id)}
                  className="w-full cursor-pointer px-5 py-5 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: phase.color }}
                      >
                        {phase.label}
                      </div>
                      <div className="mt-1 text-[14px] font-bold leading-snug text-text-primary">
                        {phase.subtitle}
                      </div>
                    </div>
                    <div
                      className="mt-0.5 shrink-0 text-[16px] font-medium text-text-muted transition-transform"
                      style={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      ›
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-text-muted">
                      Risk reduced
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.7] text-text-secondary">
                      {phase.riskReduced}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-border-subtle pt-4">
                    <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-text-muted">
                      Value unlocked
                    </div>
                    <div className="mt-1 text-[12px] leading-[1.7] text-text-secondary">
                      {phase.valueUnlocked}
                    </div>
                  </div>
                </button>

                {isExpanded ? (
                  <div className={`border-t border-border-subtle px-5 py-5 ${phase.bg}`}>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-text-muted">
                        What is introduced
                      </div>
                      <div className="mt-3 space-y-2.5">
                        {phase.introduced.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <span
                              className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: phase.color }}
                            />
                            <span className="text-[12px] leading-[1.7] text-text-primary">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-white/60 pt-4">
                      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-text-muted">
                        What remains unchanged
                      </div>
                      <div className="mt-3 space-y-2.5">
                        {phase.unchanged.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <span
                              className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: phase.color }}
                            />
                            <span className="text-[12px] leading-[1.7] text-text-secondary">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-10 text-[14px] leading-[1.7] text-text-secondary">
        Each phase builds on the last. Nothing is thrown away, and the
        surrounding systems stay stable throughout.
      </div>

      <div className="border-t border-border-subtle pt-6">
        <Link
          href="/roadmap"
          className="group flex items-center justify-between rounded-xl border border-border-subtle bg-tsh-cream px-5 py-4 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[17px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
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
