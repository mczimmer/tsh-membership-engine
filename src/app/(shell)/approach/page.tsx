"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

const PHASES = [
  {
    label: "Now",
    tag: "Current State",
    color: "#F59E0B",
    bg: "bg-amber-50",
    text: "text-amber-600",
    details: [
      "Rapid prototyping with AI-assisted development",
      "Feature-first, architecture-second",
      "Manual or semi-automated data flows",
      "Limited observability & monitoring",
    ],
    arch: "Monolithic / ad-hoc",
    compliance: "Informal",
    velocity: "Very High",
    risk: "Growing",
  },
  {
    label: "Validate",
    tag: "Weeks 1-6",
    color: "#E63946",
    bg: "bg-red-50",
    text: "text-red-600",
    details: [
      "Audit existing architecture & data flows",
      "Define API contracts & data schemas",
      "Establish GDPR baseline & gap analysis",
      "Identify what to keep, refactor, or replace",
    ],
    arch: "API-first refactoring",
    compliance: "Gap analysis done",
    velocity: "High",
    risk: "Managed",
  },
  {
    label: "Harden",
    tag: "Weeks 7-14",
    color: "#2563EB",
    bg: "bg-blue-50",
    text: "text-blue-600",
    details: [
      "Production-grade infrastructure & CI/CD",
      "Consent management & data lineage",
      "Role-based access for staff dashboards",
      "Testing, monitoring & incident response",
    ],
    arch: "Event-driven services",
    compliance: "Privacy-by-design",
    velocity: "Moderate to High",
    risk: "Low",
  },
  {
    label: "Scale",
    tag: "Weeks 15+",
    color: "#22C55E",
    bg: "bg-green-50",
    text: "text-green-600",
    details: [
      "Multi-hub rollout patterns & templates",
      "AI model governance & feedback loops",
      "Self-service analytics for hosts",
      "Automated compliance monitoring",
    ],
    arch: "Distributed / multi-tenant",
    compliance: "Automated",
    velocity: "Sustained High",
    risk: "Controlled",
  },
];

const METRIC_LABELS = ["Architecture", "Compliance", "Velocity", "Risk"];
const METRIC_KEYS = ["arch", "compliance", "velocity", "risk"] as const;

export default function ApproachPage() {
  const [active, setActive] = useState(0);
  const p = PHASES[active];

  return (
    <PageWrapper breadcrumb="Our Approach">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Analysis
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Evolution, not revolution
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        We won&apos;t stop and rebuild. We&apos;ll harden what works, replace what
        doesn&apos;t, and layer in governance incrementally while continuing to ship.
      </p>

      <div className="mt-11 flex gap-1 rounded-2xl border border-border-subtle bg-bg-card p-1.5 shadow-card">
        {PHASES.map((ph, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-xl py-3 text-center transition-all ${
              active === i ? `${ph.bg} shadow-sm` : "hover:bg-tsh-cream/50"
            }`}
          >
            <div
              className={`text-xs font-bold transition-colors ${
                active === i ? ph.text : "text-text-muted"
              }`}
            >
              {ph.label}
            </div>
            <div className="mt-0.5 text-[10px] text-text-muted">{ph.tag}</div>
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-card border border-border-subtle bg-bg-card p-7 shadow-card">
          <div className="mb-5 text-xs font-bold text-text-primary">
            {active === 0 ? "Current Reality" : "Key Activities"}
          </div>
          {p.details.map((d, i) => (
            <div key={i} className="mb-3 flex items-start gap-3">
              <div
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ background: `${p.color}15` }}
              >
                <span className="text-[10px]" style={{ color: p.color }}>
                  {active === 0 ? ">" : "+"}
                </span>
              </div>
              <span className="text-[13px] text-text-secondary leading-relaxed">{d}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {METRIC_LABELS.map((label, i) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-card border border-border-subtle bg-bg-card px-5 py-4 shadow-card"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: `${p.color}10` }}
              >
                <span className="text-sm" style={{ color: p.color }}>
                  {["A", "C", "V", "R"][i]}
                </span>
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                  {label}
                </div>
                <div className="mt-0.5 text-[13px] font-bold text-text-primary">
                  {p[METRIC_KEYS[i]]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
