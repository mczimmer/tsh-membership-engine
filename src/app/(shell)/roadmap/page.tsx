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
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold"
      style={{ background: `${t.color}12`, color: t.color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
      {t.title}
    </span>
  );
}

function ComponentTag({ id }: { id: string }) {
  const c = getComponent(id);
  if (!c) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${c.bg} ${c.border}`}
    >
      {c.emoji} {c.name}
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
    <div
      className={`overflow-hidden rounded-xl border transition-all ${
        expanded ? "border-border-strong shadow-card-hover" : "border-border-subtle"
      }`}
    >
      <div
        className={`flex items-start gap-5 p-5 ${hasDetails ? "cursor-pointer" : ""}`}
        onClick={() => hasDetails && setExpanded(!expanded)}
      >
        <div
          className="flex min-w-[56px] shrink-0 items-center gap-1.5 text-[12px] font-bold"
          style={{ color }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          W{item.week}
        </div>
        <div className="flex-1">
          <div className="font-display text-[15px] font-bold text-text-primary">
            {item.title}
          </div>
          <div className="mt-1 text-[13px] leading-relaxed text-text-tertiary">
            {item.description}
          </div>
        </div>
        {hasDetails && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mt-1 shrink-0 text-text-muted transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>
      {expanded && (
        <div className="border-t border-border-subtle px-5 pb-5">
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              {item.tensionsAddressed.length > 0 && (
                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Tensions Addressed
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tensionsAddressed.map((tid) => (
                      <TensionTag key={tid} id={tid} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              {item.componentsImpacted.length > 0 && (
                <div>
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Components
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.componentsImpacted.map((cid) => (
                      <ComponentTag key={cid} id={cid} />
                    ))}
                  </div>
                </div>
              )}
              {item.maturityShift && (
                <div className="mt-3">
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Maturity Shift
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-tsh-cream px-2.5 py-1 text-[11px] font-bold text-text-secondary">
                    <span className="capitalize">{item.maturityShift.from}</span>
                    <span className="text-text-muted">→</span>
                    <span className="capitalize text-text-primary">{item.maturityShift.to}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <PageWrapper breadcrumb="Roadmap">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Plan
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          The plan,
          <br />
          week by week
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          Value from week one, compounding over time. Each milestone connects to
          the tensions it resolves and the components it touches. Click any item
          to explore.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-3 gap-3">
        {roadmapPhases.map((phase) => (
          <div
            key={phase.phaseId}
            className={`rounded-xl border p-4 text-center ${phase.bg} ${phase.border}`}
          >
            <div className={`font-display text-[24px] font-extrabold ${phase.text}`}>
              {phase.items.reduce((acc, item) => {
                const weeks = item.week.split("-").map((w) => w.replace("+", ""));
                return Math.max(acc, parseInt(weeks[weeks.length - 1], 10) || acc);
              }, 0)}
            </div>
            <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-text-muted">
              weeks
            </div>
            <div className={`mt-1 font-display text-[14px] font-bold ${phase.text}`}>
              {phase.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-14 space-y-10">
        {roadmapPhases.map((phase) => (
          <div key={phase.phaseId}>
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 ${phase.bg} ${phase.border}`}
            >
              <span className={`h-2 w-2 rounded-full ${phase.dot}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${phase.text}`}>
                {phase.label}
              </span>
            </div>
            <div
              className="ml-4 space-y-3 pl-6"
              style={{ borderLeft: `2px solid ${phase.color}30` }}
            >
              {phase.items.map((item) => (
                <RoadmapCard key={item.id} item={item} color={phase.color} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-14">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-green" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-green">
            What success looks like
          </div>
          <p className="max-w-[580px] text-[17px] font-medium leading-[1.75] text-text-primary">
            A membership platform that's as fast to iterate on as today, but
            production-grade, GDPR-compliant, and ready to scale across every
            Social Hub. An architecture the team understands and owns.
          </p>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8 text-center text-[11px] font-medium text-text-muted">
        VALTECH × THE SOCIAL HUB - Q2 2026
      </div>
    </PageWrapper>
  );
}
