"use client";

import { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import {
  experienceMoments,
  pillarColors,
  statusConfig,
  getTension,
  getComponent,
} from "@/data";
import type { ExperienceMoment } from "@/data";

function MomentCard({ moment }: { moment: ExperienceMoment }) {
  const [open, setOpen] = useState(false);
  const pCfg = pillarColors[moment.pillar];
  const sCfg = statusConfig[moment.status];

  return (
    <div
      className={`overflow-hidden rounded-2xl border-2 transition-all ${
        open ? "shadow-card-hover" : ""
      } ${pCfg.border}`}
    >
      <div
        className="h-1"
        style={{
          background: pCfg.text.replace("text-", "").includes("amber")
            ? "#F59E0B"
            : pCfg.text.includes("red")
              ? "#E63946"
              : pCfg.text.includes("blue")
                ? "#2563EB"
                : "#22C55E",
        }}
      />

      <div className="cursor-pointer p-6" onClick={() => setOpen(!open)}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${pCfg.bg} ${pCfg.text} ${pCfg.border}`}
            >
              {moment.pillar}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${sCfg.bg} ${sCfg.text}`}
            >
              {sCfg.label}
            </span>
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
            className={`text-text-muted transition-transform ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        <h3 className="mb-2 font-display text-[18px] font-extrabold leading-snug text-text-primary">
          {moment.name}
        </h3>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          {moment.description}
        </p>

        <div className="mt-4 flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-[11px] text-text-tertiary">
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
          <span className="flex items-center gap-1.5 text-[11px] text-text-tertiary">
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

      {open && (
        <div className="border-t border-border-subtle px-6 pb-6">
          <div className="grid grid-cols-2 gap-6 pt-5">
            <div className="space-y-4">
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
                  Target
                </div>
                <div className="text-[13px] font-medium text-text-primary">
                  {moment.metricTarget}
                </div>
              </div>
            </div>

            <div className="space-y-4">
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
        </div>
      )}
    </div>
  );
}

export default function ExperiencesPage() {
  const [filter, setFilter] =
    useState<ExperienceMoment["pillar"] | null>(null);
  const pillars: ExperienceMoment["pillar"][] = ["learn", "stay", "work", "play"];
  const filtered = filter
    ? experienceMoments.filter((m) => m.pillar === filter)
    : experienceMoments;

  const stats = {
    total: experienceMoments.length,
    pilot: experienceMoments.filter((m) => m.status === "pilot").length,
    concept: experienceMoments.filter((m) => m.status === "concept").length,
  };

  return (
    <PageWrapper breadcrumb="Experience Moments">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Experience Layer
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Where strategy meets
          <br />
          the member
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          Every system component, every architectural decision, every governance
          layer exists to enable these moments.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-4 gap-4">
        {[
          {
            value: stats.total,
            label: "Moments",
            sub: "defined",
            color: "text-text-primary",
          },
          {
            value: stats.pilot,
            label: "In Pilot",
            sub: "actively testing",
            color: "text-amber-600",
          },
          {
            value: stats.concept,
            label: "In Concept",
            sub: "designed",
            color: "text-text-tertiary",
          },
          {
            value: "4",
            label: "Pillars",
            sub: "Learn · Stay · Work · Play",
            color: "text-accent-primary",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-border-subtle bg-bg-card p-5"
          >
            <div
              className={`font-display text-[32px] font-extrabold leading-none ${s.color}`}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[12px] font-bold text-text-primary">
              {s.label}
            </div>
            <div className="text-[11px] text-text-tertiary">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-3.5 py-2 text-[11px] font-bold transition-all ${
            filter === null
              ? "bg-tsh-black text-white"
              : "border border-border-subtle bg-bg-card text-text-secondary hover:bg-tsh-cream"
          }`}
        >
          All moments
        </button>
        {pillars.map((p) => {
          const cfg = pillarColors[p];
          const isActive = filter === p;
          return (
            <button
              key={p}
              onClick={() => setFilter(isActive ? null : p)}
              className={`rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all ${
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

      <div className="mb-14 space-y-4">
        {filtered.map((m) => (
          <MomentCard key={m.id} moment={m} />
        ))}
      </div>

      <div className="relative mb-14">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            Every moment is connected
          </div>
          <p className="max-w-[560px] text-[15px] font-medium leading-[1.7] text-text-primary">
            Experience moments aren't standalone features - they're the
            visible output of the Membership Engine. Each traces back through AI
            workflows, data architecture, and governance. Change one component,
            and the ripple is visible across every moment it touches.
          </p>
        </div>
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
