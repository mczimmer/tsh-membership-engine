"use client";

import Link from "next/link";
import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { tensions } from "@/data";
import type { Tension } from "@/data";

function TensionDiagram({
  tension,
  isActive,
  onClick,
}: {
  tension: Tension;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left transition-all duration-300 ${
        isActive ? "scale-[1.01]" : "opacity-70 hover:opacity-90"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
          isActive ? "shadow-card-hover" : ""
        }`}
        style={{
          borderColor: isActive ? tension.color : "rgba(232,226,219,0.6)",
        }}
      >
        <div className="h-1.5 w-full" style={{ background: tension.color }} />

        <div className="p-6">
          <div className="mb-6 flex items-center gap-3">
            <div
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ background: tension.color }}
            />
            <h3 className="font-display text-[18px] font-extrabold text-text-primary">
              {tension.title}
            </h3>
          </div>

          <div className="flex items-stretch gap-0">
            <div className="flex-1 rounded-l-xl bg-tsh-cream/50 p-5">
              <div
                className="mb-2 text-[11px] font-bold uppercase tracking-wider"
                style={{ color: tension.color }}
              >
                {tension.left.label}
              </div>
              <div className="text-[13px] leading-relaxed text-text-secondary">
                {tension.left.description}
              </div>
            </div>

            <div className="relative flex w-16 shrink-0 flex-col items-center justify-center">
              <div
                className="absolute bottom-0 top-0 w-px"
                style={{ background: `${tension.color}25` }}
              />
              <div
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: `${tension.color}15` }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={tension.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </div>
            </div>

            <div className="flex-1 rounded-r-xl bg-tsh-cream/50 p-5">
              <div
                className="mb-2 text-[11px] font-bold uppercase tracking-wider"
                style={{ color: tension.color }}
              >
                {tension.right.label}
              </div>
              <div className="text-[13px] leading-relaxed text-text-secondary">
                {tension.right.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function TensionDetail({ tension }: { tension: Tension }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ borderColor: `${tension.color}30` }}
    >
      <div className="px-8 py-6" style={{ background: `${tension.color}08` }}>
        <div className="mb-1 flex items-center gap-3">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: tension.color }}
          />
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
            Deep Dive
          </div>
        </div>
        <h3
          className="font-display text-[22px] font-extrabold"
          style={{ color: tension.color }}
        >
          {tension.title}
        </h3>
      </div>

      <div className="space-y-6 px-8 py-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-red-100">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E63946"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Risk if unbalanced
            </div>
          </div>
          <div className="pl-7 text-[14px] font-medium leading-relaxed text-text-primary">
            {tension.riskIfUnbalanced}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-green-100">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
              Resolution strategy
            </div>
          </div>
          <div className="pl-7 text-[14px] font-medium leading-relaxed text-text-primary">
            {tension.resolutionStrategy}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContextPage() {
  const [activeTension, setActiveTension] = useState(0);

  return (
    <PageWrapper breadcrumb="Where We Are">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Analysis
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Where we are
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          TSH has an idea for something that could be genuinely game changing:
          an AI powered membership platform built from the inside, shaped by
          the people who run the hubs, not bought from a vendor. And the
          progress so far has been remarkable. Using tools like Copilot and
          Claude, the team has moved faster than anyone expected.
        </p>
      </div>

      <div className="mb-10 relative">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="py-2 pl-8">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            The inflection point
          </div>
          <p className="max-w-[760px] text-[16px] leading-[1.75] text-text-primary">
            But what got TSH here will not get it to the next stage. Vibe
            coding and rapid experimentation built a prototype that proves the
            concept. Now comes the harder work: making it enterprise ready,
            scaling it across hubs, and keeping the door open for
            productisation. That transition is what this engagement is designed
            to support.
          </p>
        </div>
      </div>

      <p className="mb-8 max-w-[700px] text-[15px] leading-[1.75] text-text-secondary">
        We see three tensions at the heart of that transition. These are not
        problems to fix. They are forces to navigate.
      </p>

      <div className="mb-10 space-y-4">
        {tensions.map((t, i) => (
          <TensionDiagram
            key={t.id}
            tension={t}
            isActive={activeTension === i}
            onClick={() => setActiveTension(i)}
          />
        ))}
      </div>

      <div className="mb-14">
        <TensionDetail tension={tensions[activeTension]} />
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="py-2 pl-8">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            Our read
          </div>
          <p className="max-w-[600px] text-[17px] font-medium leading-[1.75] text-text-primary">
            The goal isn't to eliminate speed in favor of structure. It's
            to find the right balance at each stage, and shift that balance
            deliberately as the platform matures.
          </p>
          <p className="mt-4 max-w-[600px] text-[14px] leading-[1.7] text-text-tertiary">
            Each tension maps to specific system components, governance
            decisions, and experience moments throughout this document. Click
            any tension to see the risk it creates and the strategy we'll use
            to resolve it.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-border-subtle pt-8">
        <Link
          href="/approach"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Our Approach: Evolution, not revolution
            </div>
            <div className="mt-1 text-[13px] text-text-tertiary">
              How we resolve these tensions through a phased maturity model
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
