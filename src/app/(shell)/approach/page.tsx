"use client";

import { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { maturityPhases } from "@/data";
import type { MaturityPhaseId } from "@/data/schema";

const DIMENSION_LABELS = [
  { key: "architecture" as const, label: "Architecture", icon: "◇" },
  { key: "compliance" as const, label: "Compliance", icon: "◈" },
  { key: "velocity" as const, label: "Velocity", icon: "↗" },
  { key: "risk" as const, label: "Risk", icon: "⊕" },
];

const PHASE_COPY: Record<
  MaturityPhaseId,
  {
    activities: string[];
    dimensions: {
      architecture: string;
      compliance: string;
      velocity: string;
      risk: string;
    };
    friction: string;
  }
> = {
  now: {
    activities: [
      "Fast feature delivery with limited system control",
      "Features added before system design is clear",
      "Data flows that are not yet reliable or observable",
      "Limited visibility into how the system behaves in production",
    ],
    dimensions: {
      architecture: "Monolithic with emerging patterns",
      compliance: "Informal and inconsistent",
      velocity: "High, but uneven",
      risk: "Increasing with scale",
    },
    friction:
      "At this stage, the system will still be inconsistent. That is expected.",
  },
  validate: {
    activities: maturityPhases.find((phase) => phase.id === "validate")!
      .activities,
    dimensions: maturityPhases.find((phase) => phase.id === "validate")!
      .dimensions,
    friction:
      "At this stage, the system will still be inconsistent. That is expected.",
  },
  harden: {
    activities: maturityPhases.find((phase) => phase.id === "harden")!
      .activities,
    dimensions: maturityPhases.find((phase) => phase.id === "harden")!
      .dimensions,
    friction:
      "This is where delivery often slows. That is the cost of making the system stable.",
  },
  scale: {
    activities: maturityPhases.find((phase) => phase.id === "scale")!
      .activities,
    dimensions: maturityPhases.find((phase) => phase.id === "scale")!
      .dimensions,
    friction:
      "This only works if the core is separated from hub specific logic. If not, it remains custom.",
  },
};

export default function ApproachPage() {
  const [active, setActive] = useState(0);
  const p = maturityPhases[active];
  const phaseCopy = PHASE_COPY[p.id];

  return (
    <PageWrapper breadcrumb="Our Approach">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Analysis
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Evolution,
          <br />
          not revolution
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          This is not a clean rebuild. It is a controlled transition.
        </p>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          The current system keeps running. We improve it in place.
        </p>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          What works is kept. What does not is replaced. Governance is added
          where it is missing. All while continuing to ship.
        </p>
      </div>

      <p className="mb-6 text-[14px] leading-[1.7] text-text-tertiary">
        Each phase removes a specific risk. If the risk is still present, the
        phase is not complete.
      </p>

      <div className="mb-10">
        <div className="relative flex items-start">
          <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-border-subtle" />
          <div
            className="absolute left-0 top-[22px] h-[2px] transition-all duration-500"
            style={{
              width: `${((active + 1) / maturityPhases.length) * 100}%`,
              background: p.color,
            }}
          />

          {maturityPhases.map((phase, i) => {
            const isCurrent = i === active;
            const isPast = i < active;
            return (
              <button
                key={phase.id}
                onClick={() => setActive(i)}
                className={`group relative z-10 flex-1 text-center transition-opacity ${
                  isCurrent ? "opacity-100" : isPast ? "opacity-100" : "opacity-55"
                }`}
              >
                <div className="mb-3 flex justify-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-[3px] transition-all duration-300 ${
                      isCurrent
                        ? "scale-110 bg-white shadow-lg"
                        : isPast
                          ? "bg-white"
                          : "bg-tsh-cream"
                    }`}
                    style={{
                      borderColor:
                        isCurrent || isPast ? phase.color : "#E8E2DB",
                    }}
                  >
                    {isPast ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={phase.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span
                        className="font-display text-[12px] font-bold"
                        style={{ color: isCurrent ? phase.color : "#B8B2AB" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`text-[13px] font-bold transition-colors ${
                    isCurrent ? "" : "text-text-muted"
                  }`}
                  style={{ color: isCurrent ? phase.color : undefined }}
                >
                  {phase.label}
                </div>
                <div className="mt-0.5 text-[11px] text-text-muted">
                  {phase.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="mb-10 overflow-hidden rounded-2xl border-2 transition-colors duration-300"
        style={{ borderColor: `${p.color}25` }}
      >
        <div className="h-1.5" style={{ background: p.color }} />

        <div className="grid grid-cols-[1fr_300px] divide-x divide-border-subtle">
          <div className="p-8">
            <div className="mb-5 text-[11px] font-bold uppercase tracking-wider text-text-muted">
              {active === 0 ? "Current Reality" : "Key Activities"}
            </div>
            <div className="space-y-4">
              {phaseCopy.activities.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${p.color}10` }}
                  >
                    <span
                      className="text-[11px] font-bold"
                      style={{ color: p.color }}
                    >
                      {active === 0 ? "→" : "✓"}
                    </span>
                  </div>
                  <span className="text-[14px] leading-relaxed text-text-secondary">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tsh-cream/30 p-6">
            <div className="mb-5 text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Dimensions
            </div>
            <div className="space-y-4">
              {DIMENSION_LABELS.map((dim) => (
                <div key={dim.key}>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    {dim.label}
                  </div>
                  <div
                    className="font-display text-[15px] font-bold"
                    style={{ color: p.color }}
                  >
                    {phaseCopy.dimensions[dim.key]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle bg-white/40 px-8 py-4 text-[13px] leading-[1.7] text-text-secondary">
          {phaseCopy.friction}
        </div>
      </div>

      <div className="mb-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card px-6 py-5">
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          What we are not doing
        </div>
        <div className="space-y-3">
          {[
            "We are not rebuilding the platform from scratch",
            "We are not pausing delivery to fix architecture",
            "We are not introducing governance as a separate phase",
            "We are not assuming the system becomes clean overnight",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted/55" />
              <span className="text-[14px] leading-[1.7] text-text-secondary">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14 overflow-hidden rounded-2xl border border-border-subtle bg-tsh-cream/55 px-6 py-5">
        <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          Where this fails
        </div>
        <div className="space-y-3">
          {[
            "If validation is skipped, the wrong system is hardened",
            "If hardening is rushed, issues move into production",
            "If scaling starts too early, complexity increases faster than control",
            "If productization is forced, flexibility is lost",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary/65" />
              <span className="text-[14px] leading-[1.7] text-text-secondary">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-amber-600">
            Where TSH is today
          </div>
          <div className="mb-3 font-display text-[22px] font-extrabold text-text-primary">
            Experimental
          </div>
          <div className="text-[13px] leading-relaxed text-text-secondary">
            Fast, AI assisted, and feature driven.
          </div>
          <div className="mt-3 text-[13px] leading-relaxed text-text-secondary">
            The system works, but control is limited, and technical debt is
            increasing.
          </div>
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-green-600">
            Where we're going
          </div>
          <div className="mb-3 font-display text-[22px] font-extrabold text-text-primary">
            Production-grade
          </div>
          <div className="text-[13px] leading-relaxed text-text-secondary">
            A system that can be trusted, observed, and operated across hubs.
          </div>
          <div className="mt-3 text-[13px] leading-relaxed text-text-secondary">
            Changes are predictable. Data is controlled. Risk is understood.
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/how-we-work"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              How We Work: Two tracks, one backlog
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
