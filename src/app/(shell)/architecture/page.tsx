import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import {
  architectureLayers,
  architecturePositioning,
  changePairs,
  ecosystemPlatforms,
  membershipEngineCore,
  membershipEngineCoreIntro,
} from "@/data";

const HERO_BODY =
  "The Membership Engine is the orchestration and intelligence layer that sits across TSH's existing systems. It does not replace them. It connects them and makes them behave like a single system.";

const WHAT_THIS_IS = [
  "A composable orchestration layer across Muse, Salesforce, Databricks, Hightouch, and Optimizely",
  "Embeds AI into operational workflows where decisions are made",
  "Designed to scale across hubs and evolve into a reusable product",
];

const WHAT_THIS_IS_NOT = [
  "Not a replacement for any existing system",
  "Not AI sitting outside operational workflows",
  "Not a big-bang rebuild requiring months before value appears",
  "Not a guarantee that AI outputs are correct",
];

const PRODUCTIZATION_COPY = [
  "This only becomes a reusable product if the core is separated from hub specific logic.",
  "This is not a v1 requirement, but the architecture must not block it.",
];

const EXTENDED_CHANGE_PAIRS = [
  ...changePairs,
  {
    from: "Implicit system behavior",
    to: "Explicit, observable system behavior",
  },
];

const LAYER_STYLES = {
  experience: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    line: "bg-blue-300",
  },
  intelligence: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    line: "bg-green-300",
  },
  orchestration: {
    bg: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-700",
    line: "bg-pink-300",
  },
  record: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    line: "bg-amber-300",
  },
} as const;

const SHORT_LABELS: Record<string, string> = {
  ORCHESTRATION: "ORCH.",
  INTELLIGENCE: "INTEL.",
  EXPERIENCE: "EXP.",
  RECORD: "RECORD",
};

export default function ArchitecturePage() {
  const ecosystemCards = ecosystemPlatforms.filter(
    (platform) => platform.id !== "ai_delivery",
  );
  const membershipEngineLayers = ["experience", "intelligence", "orchestration"]
    .map((id) => architectureLayers.find((layer) => layer.id === id))
    .filter((layer) => layer !== undefined);
  const recordLayer = architectureLayers.find((layer) => layer.id === "record");

  return (
    <PageWrapper breadcrumb="Architecture">
      <div className="mb-10">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          {architecturePositioning.eyebrow}
        </div>
        <h1 className="max-w-[640px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          {architecturePositioning.title}
        </h1>
        <p className="mt-6 max-w-[720px] text-[20px] leading-[1.7] text-text-primary">
          {HERO_BODY}
        </p>
      </div>

      <div className="mb-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card">
        <div className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(46,124,246,0.08),rgba(245,240,235,0.9),rgba(245,160,177,0.08))] px-6 py-5">
          <div className="max-w-[760px] text-[14px] leading-[1.7] text-text-secondary">
            TSH's existing systems of record sit at the base. The Membership
            Engine adds orchestration, intelligence, and a unified experience
            layer on top.
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="mx-auto max-w-[920px]">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
              What the Membership Engine adds
            </div>
            {membershipEngineLayers.map((layer, index) => (
              <div key={layer.id} className="relative">
                {index > 0 ? (
                  <div className="flex justify-center py-2">
                    <div
                      className="h-5 w-1 rounded-full"
                      style={{ background: `${layer.color}55` }}
                    />
                  </div>
                ) : null}
                <div
                  className={`rounded-2xl border px-6 py-5 ${layer.bg} ${layer.border}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex items-center gap-3">
                      <div
                        className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: layer.color }}
                      >
                        {layer.label}
                      </div>
                      <div className="truncate text-[14px] font-bold text-text-primary">
                        {layer.subtitle}
                      </div>
                    </div>
                    <div
                      className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        background: `${layer.color}16`,
                        color: layer.color,
                      }}
                    >
                      L{index + 1}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.blocks.map((block) => (
                      <div
                        key={block}
                        className="rounded-full border border-white/80 bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-text-primary"
                      >
                        {block}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="py-3">
              <div className="border-t border-dashed border-border-subtle" />
            </div>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              What TSH operates today
            </div>
            {recordLayer ? (
              <div
                className={`rounded-2xl border border-dashed px-6 py-5 ${recordLayer.bg.replace("bg-amber-50", "bg-amber-50/60")} ${recordLayer.border}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex items-center gap-3">
                    <div
                      className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: recordLayer.color }}
                    >
                      {recordLayer.label}
                    </div>
                    <div className="truncate text-[14px] font-bold text-text-primary">
                      {recordLayer.subtitle}
                    </div>
                  </div>
                  <div
                    className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                    style={{
                      background: `${recordLayer.color}16`,
                      color: recordLayer.color,
                    }}
                  >
                    L4
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {recordLayer.blocks.map((block) => (
                    <div
                      key={block}
                      className="rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-text-primary"
                    >
                      {block}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <p className="mb-4 max-w-[760px] text-[14px] leading-[1.7] text-text-tertiary">
        This is a layered system, not a clean one. Some flows will remain
        imperfect. The goal is control, not perfection.
      </p>

      <p className="mb-10 max-w-[760px] text-[14px] leading-[1.7] text-text-tertiary">
        The architecture is not the system. How it is used determines whether
        it works.
      </p>

      <div className="mb-10 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-blue-200 bg-accent-primary px-6 py-5 text-white shadow-card">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white/70">
            What this is
          </div>
          <div className="space-y-3">
            {WHAT_THIS_IS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-white/80" />
                <span className="text-[14px] leading-relaxed text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border-subtle bg-bg-card px-6 py-5 shadow-card">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-text-muted">
            What this is not
          </div>
          <div className="space-y-3">
            {WHAT_THIS_IS_NOT.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-text-muted/50" />
                <span className="text-[14px] leading-relaxed text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-border-subtle bg-bg-card p-6 shadow-card">
        <div className="grid grid-cols-5 gap-3">
          {ecosystemCards.map((platform) => (
            <div
              key={platform.id}
              className={`overflow-hidden rounded-xl border p-4 ${platform.bg} ${platform.border}`}
            >
              <div className="mb-1 font-display text-[15px] font-extrabold text-text-primary">
                {platform.name}
              </div>
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">
                {platform.role}
              </div>
              <div className="flex flex-wrap gap-1">
                {platform.mapsTo.map((layerId) => {
                  const layer = architectureLayers.find((item) => item.id === layerId);
                  const style = LAYER_STYLES[layerId];
                  if (!layer) return null;
                  return (
                    <span
                      key={layerId}
                      className={`inline-flex max-w-full items-center truncate rounded border px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] ${style.bg} ${style.border} ${style.text}`}
                    >
                      {SHORT_LABELS[layer.label] || layer.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[14px] leading-[1.7] text-text-secondary">
          The value is in how these systems connect through the Membership
          Engine, not in replacing the tools TSH already owns.
        </p>
        <p className="mt-3 text-[14px] leading-[1.7] text-text-tertiary">
          These systems will not behave consistently until they are
          orchestrated.
        </p>
      </div>

      <div className="mb-10">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          What changes from today
        </div>
        <div className="grid grid-cols-3 gap-3">
          {EXTENDED_CHANGE_PAIRS.map((pair) => (
            <div
              key={`${pair.from}-${pair.to}`}
              className="grid grid-cols-[1fr_20px_1fr] items-center rounded-xl border border-border-subtle bg-bg-card px-4 py-3 shadow-card"
            >
              <div className="text-right text-[12px] font-medium text-text-tertiary">
                {pair.from}
              </div>
              <div className="text-center text-text-muted">→</div>
              <div className="text-[12px] font-bold text-text-primary">
                {pair.to}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 rounded-2xl border border-border-subtle bg-bg-card p-6 shadow-card">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Productisation potential
        </div>
        <div className="space-y-4 text-[15px] leading-[1.75] text-text-secondary">
          {PRODUCTIZATION_COPY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="relative mt-5">
          <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
          <div className="pl-6">
            <p className="max-w-[760px] text-[15px] font-medium leading-[1.75] text-text-primary">
              The same composable, multi-tenant patterns that let the
              Membership Engine scale across TSH hubs are the same patterns
              needed for productisation: core services, configurable workflows,
              composable integrations, and multi-tenant separation.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
            Where this breaks
          </div>
          <div className="space-y-3">
            {[
              "If system boundaries are unclear, integrations become brittle",
              "If context is inconsistent, AI outputs degrade",
              "If orchestration is bypassed, systems drift apart",
              "If governance is added later, delivery slows significantly",
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
      </div>

      <details className="mb-10 overflow-hidden rounded-xl border border-border-subtle bg-bg-card shadow-card">
        <summary className="cursor-pointer list-none px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                Optional detail
              </div>
              <div className="mt-1 font-display text-[17px] font-extrabold text-text-primary">
                Membership Engine core capabilities
              </div>
            </div>
            <div className="rounded-full border border-border-subtle bg-tsh-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-text-secondary">
              Expand
            </div>
          </div>
        </summary>
        <div className="border-t border-border-subtle px-6 py-4">
          <p className="mb-4 max-w-[620px] text-[14px] leading-[1.7] text-text-secondary">
            {membershipEngineCoreIntro}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {membershipEngineCore.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border-subtle bg-tsh-cream/55 p-3.5"
              >
                <div className="mb-1.5 font-display text-[14px] font-bold text-text-primary">
                  {item.title}
                </div>
                <div className="text-[12px] leading-relaxed text-text-secondary">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </details>

      <div className="border-t border-border-subtle pt-6">
        <Link
          href="/technical-evolution"
          className="group flex items-center justify-between rounded-xl border border-border-subtle bg-tsh-cream px-5 py-4 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[17px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
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
