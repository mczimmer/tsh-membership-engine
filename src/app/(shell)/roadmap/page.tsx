"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { roadmapPhases, getTension, getComponent } from "@/data";
import type { RoadmapItem } from "@/data";

function TensionTag({ id }: { id: string }) {
  const t = getTension(id);
  if (!t) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
      style={{ background: `${t.color}12`, color: t.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
      {t.title}
    </span>
  );
}

function ComponentTag({ id }: { id: string }) {
  const c = getComponent(id);
  if (!c) return null;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${c.bg} ${c.border} border`}>
      <span className="text-[10px]">{c.emoji}</span>
      {c.name}
    </span>
  );
}

function MaturityShift({ from, to }: { from: string; to: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tsh-cream text-[10px] font-semibold text-text-secondary border border-border-subtle">
      <span className="capitalize">{from}</span>
      <span className="text-text-muted">→</span>
      <span className="capitalize text-text-primary">{to}</span>
    </span>
  );
}

function RoadmapCard({ item, color }: { item: RoadmapItem; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails =
    item.tensionsAddressed.length > 0 ||
    item.componentsImpacted.length > 0 ||
    item.maturityShift;

  return (
    <div className="rounded-card bg-bg-card shadow-card border border-border-subtle overflow-hidden">
      <div
        className={`p-5 flex gap-5 items-start ${hasDetails ? "cursor-pointer" : ""}`}
        onClick={() => hasDetails && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-1.5 text-[11px] shrink-0 min-w-[56px] font-bold" style={{ color }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          W{item.week}
        </div>
        <div className="flex-1">
          <div className="text-[14px] font-bold text-text-primary font-display">{item.title}</div>
          <div className="text-xs text-text-tertiary leading-relaxed mt-1.5">{item.description}</div>
        </div>
        {hasDetails && (
          <div className="shrink-0 mt-1 text-text-muted">
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        )}
      </div>

      {expanded && (
        <div className="px-5 pb-5 pt-0 border-t border-border-subtle mt-0">
          <div className="pt-4 space-y-3">
            {item.tensionsAddressed.length > 0 && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
                  Tensions Addressed
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tensionsAddressed.map((tid) => (
                    <TensionTag key={tid} id={tid} />
                  ))}
                </div>
              </div>
            )}

            {item.componentsImpacted.length > 0 && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
                  System Components
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.componentsImpacted.map((cid) => (
                    <ComponentTag key={cid} id={cid} />
                  ))}
                </div>
              </div>
            )}

            {item.maturityShift && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">
                  Maturity Shift
                </div>
                <MaturityShift from={item.maturityShift.from} to={item.maturityShift.to} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <PageWrapper breadcrumb="Roadmap">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary mb-3">
        Plan
      </div>
      <h1 className="text-[40px] font-extrabold leading-[1.1] text-text-primary tracking-tight font-display">
        The plan, week by week
      </h1>
      <p className="text-base text-text-secondary leading-[1.8] mt-5 max-w-[620px]">
        Value from week one, compounding over time. Each milestone is connected
        to the tensions it resolves, the system components it touches, and the
        maturity shift it enables. Click any item to explore.
      </p>

      <div className="mt-11">
        {roadmapPhases.map((phase) => (
          <div key={phase.phaseId} className="mb-10">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${phase.bg} border ${phase.border} mb-4`}>
              <span className={`w-2 h-2 rounded-full ${phase.dot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${phase.text}`}>
                {phase.label}
              </span>
            </div>
            <div className="ml-4 pl-6 flex flex-col gap-3" style={{ borderLeft: `2px solid ${phase.color}30` }}>
              {phase.items.map((item) => (
                <RoadmapCard key={item.id} item={item} color={phase.color} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-8 rounded-card bg-bg-card shadow-elevated border border-accent-primary/15">
        <div className="flex items-start gap-5">
          <div className="w-11 h-11 rounded-2xl bg-accent-primary/10 flex items-center justify-center shrink-0 text-accent-primary text-lg">
            ◎
          </div>
          <div>
            <div className="text-[17px] font-extrabold text-text-primary font-display mb-2">
              What success looks like
            </div>
            <div className="text-[14px] text-text-secondary leading-[1.75]">
              A membership platform that&apos;s as fast to iterate on as today — but
              production-grade, GDPR-compliant, and ready to scale across every
              Social Hub. An architecture the team understands and owns. A
              governance model that protects members without slowing down the
              people serving them.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border-subtle text-[11px] text-text-muted font-medium">
        VALTECH × THE SOCIAL HUB — Q2 2026
      </div>
    </PageWrapper>
  );
}
