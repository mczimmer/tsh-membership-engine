"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import {
  experienceMoments,
  pillarColors,
  statusConfig,
  getTension,
  getComponent,
} from "@/data";
import type { ExperienceMoment } from "@/data";

function StatusBadge({ status }: { status: ExperienceMoment["status"] }) {
  const cfg = statusConfig[status];
  if (!cfg) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${cfg.bg} ${cfg.text}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "pilot"
            ? "bg-amber-500"
            : status === "live"
              ? "bg-green-500"
              : status === "scaling"
                ? "bg-blue-500"
                : "bg-gray-400"
        }`}
      />
      {cfg.label}
    </span>
  );
}

function PillarBadge({ pillar }: { pillar: ExperienceMoment["pillar"] }) {
  const cfg = pillarColors[pillar];
  if (!cfg) return null;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${cfg.bg} ${cfg.text} ${cfg.border}`}
    >
      {pillar}
    </span>
  );
}

function MomentCard({ moment }: { moment: ExperienceMoment }) {
  const [expanded, setExpanded] = useState(false);
  const pillarCfg = pillarColors[moment.pillar];

  return (
    <div
      className={`overflow-hidden rounded-card border bg-bg-card shadow-card ${
        pillarCfg?.border || "border-border-subtle"
      }`}
    >
      <div className="cursor-pointer p-6" onClick={() => setExpanded(!expanded)}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <PillarBadge pillar={moment.pillar} />
            <StatusBadge status={moment.status} />
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mt-1 shrink-0 text-text-muted transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <h3 className="font-display text-[16px] font-bold leading-snug text-text-primary">
          {moment.name}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
          {moment.description}
        </p>
        <div className="mt-4 flex items-center gap-4 text-[11px] text-text-tertiary">
          <span className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {moment.location}
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            {moment.metric}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="mt-0 border-t border-border-subtle px-6 pb-6 pt-0">
          <div className="space-y-4 pt-4">
            <div>
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                AI Workflow
              </div>
              <div className="text-[13px] font-medium text-text-primary">
                {moment.aiWorkflow}
              </div>
            </div>

            <div>
              <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Target Outcome
              </div>
              <div className="text-[13px] font-medium text-text-primary">
                {moment.metricTarget}
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                System Components
              </div>
              <div className="flex flex-wrap gap-1.5">
                {moment.componentsInvolved.map((cid) => {
                  const c = getComponent(cid);
                  if (!c) return null;
                  return (
                    <span
                      key={cid}
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${c.bg} ${c.border}`}
                    >
                      {c.emoji} {c.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Tensions Navigated
              </div>
              <div className="flex flex-wrap gap-1.5">
                {moment.tensionsNavigated.map((tid) => {
                  const t = getTension(tid);
                  if (!t) return null;
                  return (
                    <span
                      key={tid}
                      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={{ background: `${t.color}12`, color: t.color }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: t.color }}
                      />
                      {t.title}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  const [activeFilter, setActiveFilter] =
    useState<ExperienceMoment["pillar"] | null>(null);
  const pillars: ExperienceMoment["pillar"][] = ["learn", "stay", "work", "play"];

  const filtered = activeFilter
    ? experienceMoments.filter((m) => m.pillar === activeFilter)
    : experienceMoments;

  const stats = {
    total: experienceMoments.length,
    pilot: experienceMoments.filter((m) => m.status === "pilot").length,
    concept: experienceMoments.filter((m) => m.status === "concept").length,
  };

  return (
    <PageWrapper breadcrumb="Experience Moments">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Experience Layer
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Where strategy meets
        <br />
        the member
      </h1>
      <p className="mt-5 max-w-[640px] text-base leading-[1.8] text-text-secondary">
        Every system component, every architectural decision, every governance
        layer exists to enable these moments - the points where AI-powered
        personalization meets the member experience. Each moment maps back to the
        tensions it navigates and the system components that power it.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-4">
        {[
          {
            label: "Experience Moments",
            value: stats.total,
            sub: "defined in the system",
          },
          {
            label: "In Pilot",
            value: stats.pilot,
            sub: "actively being tested",
          },
          {
            label: "In Concept",
            value: stats.concept,
            sub: "designed, awaiting validation",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-card border border-border-subtle bg-bg-card p-5 shadow-card"
          >
            <div className="font-display text-[28px] font-extrabold text-text-primary">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-bold text-text-primary">
              {s.label}
            </div>
            <div className="mt-0.5 text-[11px] text-text-tertiary">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-2">
        <span className="mr-2 text-[11px] font-bold uppercase tracking-wider text-text-muted">
          Filter
        </span>
        <button
          onClick={() => setActiveFilter(null)}
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition-all ${
            activeFilter === null
              ? "bg-tsh-black text-white"
              : "border border-border-subtle bg-bg-card text-text-secondary hover:bg-tsh-cream"
          }`}
        >
          All
        </button>
        {pillars.map((p) => {
          const cfg = pillarColors[p];
          const isActive = activeFilter === p;
          return (
            <button
              key={p}
              onClick={() => setActiveFilter(isActive ? null : p)}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                isActive
                  ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                  : "border-border-subtle bg-bg-card text-text-secondary hover:bg-tsh-cream"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {filtered.map((moment) => (
          <MomentCard key={moment.id} moment={moment} />
        ))}
      </div>

      <div className="mt-10 rounded-card border border-border-subtle bg-tsh-cream p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-primary/10 text-lg">
            🔗
          </div>
          <div>
            <div className="mb-1.5 font-display text-[14px] font-bold text-text-primary">
              Every moment is connected
            </div>
            <div className="text-[13px] leading-[1.7] text-text-secondary">
              Experience moments aren&apos;t standalone features - they&apos;re the visible
              output of the Membership Engine. Each one traces back through the
              system: from the AI workflow that powers it, through the data
              architecture that feeds it, to the governance layer that protects
              it, and the tensions it must navigate to exist. Change one
              component, and the ripple is visible across every moment it touches.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border-subtle pt-8 text-center text-[11px] font-medium text-text-muted">
        VALTECH × THE SOCIAL HUB — Q2 2026
      </div>
    </PageWrapper>
  );
}
