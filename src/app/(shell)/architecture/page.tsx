import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import {
  architectureLayers,
  architecturePositioning,
  architectureSupport,
  changePairs,
  ecosystemPlatforms,
  ecosystemSupport,
  membershipEngineCore,
  membershipEngineCoreIntro,
  productizationCards,
  productizationIntro,
  whatThisIs,
  whatThisIsNot,
} from "@/data";

const FLOW_STEPS = [
  "Signal",
  "Context",
  "Decision",
  "Activation",
  "Experience",
];

export default function ArchitecturePage() {
  return (
    <PageWrapper breadcrumb="Architecture">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          {architecturePositioning.eyebrow}
        </div>
        <h1 className="max-w-[660px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          {architecturePositioning.title}
        </h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-[1.8] text-text-secondary">
          {architecturePositioning.body}
        </p>
      </div>

      <div className="mb-14 grid grid-cols-[1.15fr_0.85fr] gap-5">
        <div className="rounded-2xl border border-blue-200 bg-accent-primary p-7 text-white shadow-elevated">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
            What this is
          </div>
          <div className="space-y-3">
            {whatThisIs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-white/85" />
                <span className="text-[14px] leading-relaxed text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card p-7 shadow-card">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted">
            What this is not
          </div>
          <div className="space-y-3">
            {whatThisIsNot.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-text-muted/45" />
                <span className="text-[14px] leading-relaxed text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-14 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-elevated">
        <div className="border-b border-border-subtle px-8 py-6">
          <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
            Strategic architecture model
          </div>
          <p className="max-w-[620px] text-[15px] leading-[1.75] text-text-secondary">
            Value is created at the top of the system. Stable record stays at
            the bottom. The Membership Engine sits in the middle, where context
            is orchestrated, decisions are made, and action becomes possible.
          </p>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <div
                key={layer.id}
                className={`rounded-2xl border p-5 ${layer.bg} ${layer.border}`}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: layer.color }}
                    >
                      {layer.label}
                    </div>
                    <div className="mt-1 text-[14px] text-text-secondary">
                      {layer.subtitle}
                    </div>
                  </div>
                  <div
                    className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: `${layer.color}16`,
                      color: layer.color,
                    }}
                  >
                    Layer {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {layer.blocks.map((block) => (
                    <div
                      key={block}
                      className="rounded-xl border border-white/70 bg-white/75 px-3.5 py-2 text-[12px] font-medium text-text-primary"
                    >
                      {block}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border-subtle bg-tsh-cream/55 px-6 py-5">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              System flow
            </div>
            <div className="grid grid-cols-[repeat(5,1fr)] items-center gap-2">
              {FLOW_STEPS.map((step, index) => (
                <div key={step} className="contents">
                  <div className="rounded-xl border border-border-subtle bg-bg-card px-3 py-3 text-center">
                    <div className="font-display text-[14px] font-bold text-text-primary">
                      {step}
                    </div>
                  </div>
                  {index < FLOW_STEPS.length - 1 ? (
                    <div className="text-center text-text-muted">→</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle bg-tsh-cream/45 px-8 py-5">
          <p className="max-w-[760px] text-[14px] leading-[1.75] text-text-secondary">
            {architectureSupport}
          </p>
        </div>
      </div>

      <div className="mb-14 grid grid-cols-[0.9fr_1.1fr] gap-5">
        <div className="rounded-2xl border border-border-subtle bg-tsh-cream/55 p-7">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            The Membership Engine Core
          </div>
          <p className="max-w-[420px] text-[16px] font-medium leading-[1.75] text-text-primary">
            {membershipEngineCoreIntro}
          </p>
          <div className="mt-6 rounded-xl border border-border-subtle bg-bg-card px-4 py-4">
            <div className="text-[12px] leading-[1.7] text-text-secondary">
              New value comes from a thin layer that unifies context, runs
              decision logic, and activates actions across the estate without
              replacing the surrounding platforms.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {membershipEngineCore.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border-subtle bg-bg-card p-5 shadow-card"
            >
              <div className="mb-2 font-display text-[16px] font-bold text-text-primary">
                {item.title}
              </div>
              <div className="text-[13px] leading-relaxed text-text-secondary">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          How it fits the current ecosystem
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ecosystemPlatforms.map((platform) => (
            <div
              key={platform.id}
              className={`rounded-2xl border p-5 ${platform.bg} ${platform.border}`}
            >
              <div className="mb-2 flex items-center justify-between gap-4">
                <div className="font-display text-[18px] font-extrabold text-text-primary">
                  {platform.name}
                </div>
                <div className="rounded-full bg-white/65 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                  {platform.role}
                </div>
              </div>
              <div className="text-[13px] leading-relaxed text-text-secondary">
                {platform.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-border-subtle bg-bg-card p-5 shadow-card">
          <p className="max-w-[760px] text-[14px] leading-[1.75] text-text-secondary">
            {ecosystemSupport}
          </p>
        </div>
      </div>

      <div className="mb-14 grid grid-cols-[1fr_0.9fr] gap-5">
        <div>
          <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
            What changes from today
          </div>
          <div className="space-y-3">
            {changePairs.map((pair) => (
              <div
                key={`${pair.from}-${pair.to}`}
                className="grid grid-cols-[1fr_32px_1fr] items-center rounded-xl border border-border-subtle bg-bg-card px-5 py-4 shadow-card"
              >
                <div className="text-right text-[13px] font-medium text-text-tertiary">
                  {pair.from}
                </div>
                <div className="text-center text-text-muted">→</div>
                <div className="text-[13px] font-bold text-text-primary">
                  {pair.to}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card p-7 shadow-card">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-secondary">
            Built to become reusable
          </div>
          <p className="mb-5 text-[15px] leading-[1.75] text-text-secondary">
            {productizationIntro}
          </p>
          <div className="space-y-3">
            {productizationCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border-subtle bg-tsh-cream/55 p-4"
              >
                <div className="mb-1 font-display text-[15px] font-bold text-text-primary">
                  {card.title}
                </div>
                <div className="text-[12px] leading-relaxed text-text-secondary">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/technical-evolution"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Technical Evolution: From pilot to product
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
