"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

const PHASES = [
  {
    label: "Now", tag: "Current State", color: "#f59e0b",
    details: ["Rapid prototyping with AI-assisted development", "Feature-first, architecture-second", "Manual or semi-automated data flows", "Limited observability & monitoring"],
    arch: "Monolithic / ad-hoc", compliance: "Informal", velocity: "Very High", risk: "Growing",
  },
  {
    label: "Validate", tag: "Weeks 1–6", color: "#6366f1",
    details: ["Audit existing architecture & data flows", "Define API contracts & data schemas", "Establish GDPR baseline & gap analysis", "Identify what to keep, refactor, or replace"],
    arch: "API-first refactoring", compliance: "Gap analysis done", velocity: "High", risk: "Managed",
  },
  {
    label: "Harden", tag: "Weeks 7–14", color: "#a78bfa",
    details: ["Production-grade infrastructure & CI/CD", "Consent management & data lineage", "Role-based access for staff dashboards", "Testing, monitoring & incident response"],
    arch: "Event-driven services", compliance: "Privacy-by-design", velocity: "Moderate → High", risk: "Low",
  },
  {
    label: "Scale", tag: "Weeks 15+", color: "#34d399",
    details: ["Multi-hub rollout patterns & templates", "AI model governance & feedback loops", "Self-service analytics for hosts", "Automated compliance monitoring"],
    arch: "Distributed / multi-tenant", compliance: "Automated", velocity: "Sustained High", risk: "Controlled",
  },
];

const METRIC_LABELS = ["Architecture", "Compliance", "Velocity", "Risk"];
const METRIC_KEYS = ["arch", "compliance", "velocity", "risk"] as const;
const METRIC_ICONS = ["◇", "◈", "↗", "⊕"];

export default function ApproachPage() {
  const [active, setActive] = useState(0);
  const p = PHASES[active];

  return (
    <PageWrapper breadcrumb="Our Approach">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Analysis
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Evolution, not revolution
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        We won&apos;t stop and rebuild. We&apos;ll harden what works, replace what
        doesn&apos;t, and layer in governance incrementally — all while continuing to ship.
      </p>

      <div className="flex gap-0.5 mt-11 bg-white/[0.04] rounded-[10px] p-[3px]">
        {PHASES.map((ph, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 py-2.5 rounded-lg text-center transition-all ${active === i ? "bg-white/[0.06]" : "hover:bg-white/[0.02]"}`}
          >
            <div className="text-xs font-bold transition-colors" style={{ color: active === i ? ph.color : "rgba(255,255,255,0.3)" }}>
              {ph.label}
            </div>
            <div className="text-[10px] text-text-muted mt-0.5">{ph.tag}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="p-7 rounded-[14px] bg-bg-card border border-border-subtle">
          <div className="text-xs font-bold text-text-secondary mb-4">
            {active === 0 ? "Current Reality" : "Key Activities"}
          </div>
          {p.details.map((d, i) => (
            <div key={i} className="flex gap-2 items-start mb-2.5">
              <span className="mt-0.5 text-xs" style={{ color: p.color }}>
                {active === 0 ? "→" : "✓"}
              </span>
              <span className="text-[13px] text-text-secondary leading-relaxed">{d}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {METRIC_LABELS.map((label, i) => (
            <div key={label} className="px-[18px] py-3.5 rounded-[10px] bg-bg-card border border-border-subtle flex items-center gap-3">
              <div className="text-text-muted text-sm">{METRIC_ICONS[i]}</div>
              <div>
                <div className="text-[10px] text-text-muted uppercase tracking-wider">{label}</div>
                <div className="text-[13px] text-text-primary font-semibold mt-0.5">{p[METRIC_KEYS[i]]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
