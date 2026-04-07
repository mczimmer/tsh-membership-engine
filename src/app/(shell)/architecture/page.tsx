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

export default function ArchitecturePage() {
  return (
    <PageWrapper breadcrumb="Architecture">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          {architecturePositioning.eyebrow}
        </div>
        <h1 className="max-w-[640px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          {architecturePositioning.title}
        </h1>
        <p className="mt-6 max-w-[720px] text-[20px] leading-[1.7] text-text-primary">
          {architecturePositioning.body}
        </p>
        <p className="mt-4 max-w-[640px] text-[13px] font-medium uppercase tracking-[0.14em] text-text-muted">
          {architecturePositioning.supportLine}
        </p>
      </div>

      <div className="mb-14 overflow-hidden rounded-[30px] border border-border-subtle bg-bg-card shadow-elevated">
        <div className="border-b border-border-subtle bg-[linear-gradient(135deg,rgba(46,124,246,0.08),rgba(245,240,235,0.9),rgba(245,160,177,0.08))] px-8 py-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">
            Primary visual
          </div>
          <div className="mt-2 max-w-[760px] text-[15px] leading-[1.75] text-text-secondary">
            The architecture works as a stack: record systems at the base,
            orchestration and intelligence added in the middle, and
            differentiated experience expressed at the top.
          </div>
        </div>

        <div className="px-8 py-8">
          <div className="mx-auto max-w-[920px]">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id} className="relative">
                {index > 0 ? (
                  <div className="flex justify-center py-3">
                    <div
                      className="h-8 w-1 rounded-full"
                      style={{ background: `${layer.color}55` }}
                    />
                  </div>
                ) : null}
                <div
                  className={`rounded-[28px] border px-8 py-7 shadow-card ${layer.bg} ${layer.border}`}
                >
                  <div className="mb-6 flex items-end justify-between gap-5">
                    <div>
                      <div
                        className="text-[12px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: layer.color }}
                      >
                        {layer.label}
                      </div>
                      <div className="mt-2 font-display text-[34px] font-extrabold leading-none text-text-primary">
                        {layer.subtitle}
                      </div>
                    </div>
                    <div
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{
                        background: `${layer.color}16`,
                        color: layer.color,
                      }}
                    >
                      Layer {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {layer.blocks.map((block) => (
                      <div
                        key={block}
                        className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4 text-center text-[13px] font-semibold text-text-primary"
                      >
                        {block}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border-subtle bg-tsh-cream/55 px-8 py-5">
          <p className="max-w-[760px] text-[14px] leading-[1.75] text-text-secondary">
            {architectureSupport}
          </p>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-5">
        <div className="rounded-2xl border border-blue-200 bg-accent-primary px-7 py-7 text-white shadow-elevated">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white/70">
            What this is
          </div>
          <div className="space-y-3">
            {whatThisIs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-white/80" />
                <span className="text-[14px] leading-relaxed text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card px-7 py-7 shadow-card">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-text-muted">
            What this is not
          </div>
          <div className="space-y-3">
            {whatThisIsNot.map((item) => (
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

      <div className="mb-12 overflow-hidden rounded-[28px] border border-border-subtle bg-bg-card shadow-card">
        <div className="border-b border-border-subtle px-8 py-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
            Secondary visual
          </div>
          <div className="mt-2 max-w-[760px] text-[15px] leading-[1.7] text-text-secondary">
            These are the systems already in the ecosystem, and the layers of
            the Membership Engine they feed.
          </div>
        </div>

        <div className="overflow-x-auto px-8 py-7">
          <div className="min-w-[1100px]">
            <div className="grid grid-cols-6 gap-4">
              {ecosystemPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`rounded-2xl border p-5 ${platform.bg} ${platform.border}`}
                >
                  <div className="mb-1 font-display text-[18px] font-extrabold text-text-primary">
                    {platform.name}
                  </div>
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-text-muted">
                    {platform.role}
                  </div>
                  <div className="mb-4 text-[13px] leading-relaxed text-text-secondary">
                    {platform.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {platform.mapsTo.map((layerId) => {
                      const layer = architectureLayers.find((item) => item.id === layerId);
                      const style = LAYER_STYLES[layerId];
                      if (!layer) return null;
                      return (
                        <span
                          key={layerId}
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${style.bg} ${style.border} ${style.text}`}
                        >
                          {layer.label}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-4 space-y-1.5">
                    {platform.mapsTo.map((layerId) => {
                      const style = LAYER_STYLES[layerId];
                      return (
                        <div key={`${platform.id}-${layerId}`} className="flex items-center gap-2">
                          <div className={`h-[3px] w-8 rounded-full ${style.line}`} />
                          <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted">
                            Feeds {layerId}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">
              {architectureLayers.map((layer) => (
                <div
                  key={layer.id}
                  className={`rounded-2xl border px-4 py-3 ${layer.bg} ${layer.border}`}
                >
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-text-primary">
                    {layer.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle bg-tsh-cream/55 px-8 py-5">
          <p className="max-w-[760px] text-[14px] leading-[1.75] text-text-secondary">
            {ecosystemSupport}
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
          What changes from today
        </div>
        <div className="grid grid-cols-2 gap-3">
          {changePairs.map((pair) => (
            <div
              key={`${pair.from}-${pair.to}`}
              className="grid grid-cols-[1fr_56px_1fr] items-center rounded-[24px] border border-border-subtle bg-bg-card px-5 py-5 shadow-card"
            >
              <div className="text-right text-[13px] font-medium text-text-tertiary">
                {pair.from}
              </div>
              <div className="flex justify-center">
                <div className="rounded-full bg-tsh-cream px-3 py-1 text-[11px] font-bold text-accent-primary">
                  TO
                </div>
              </div>
              <div className="text-[13px] font-bold text-text-primary">
                {pair.to}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 rounded-[28px] border border-border-subtle bg-bg-card p-8 shadow-card">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Productisation potential
        </div>
        <p className="max-w-[780px] text-[16px] leading-[1.8] text-text-secondary">
          {productizationIntro}
        </p>

        <div className="relative mt-8">
          <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-primary" />
          <div className="pl-8">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-primary">
              Key insight
            </div>
            <p className="max-w-[720px] text-[16px] font-medium leading-[1.75] text-text-primary">
              The same composable, multi-tenant patterns that let the Membership
              Engine scale across TSH hubs are the same patterns needed for
              productisation.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {productizationCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border-subtle bg-tsh-cream/55 p-5"
            >
              <div className="mb-2 font-display text-[16px] font-bold text-text-primary">
                {card.title}
              </div>
              <div className="text-[13px] leading-relaxed text-text-secondary">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <details className="mb-14 overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card">
        <summary className="cursor-pointer list-none px-7 py-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                Optional detail
              </div>
              <div className="mt-1 font-display text-[20px] font-extrabold text-text-primary">
                Membership Engine core capabilities
              </div>
            </div>
            <div className="rounded-full border border-border-subtle bg-tsh-cream px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-text-secondary">
              Expand
            </div>
          </div>
        </summary>
        <div className="border-t border-border-subtle px-7 py-6">
          <p className="mb-6 max-w-[620px] text-[15px] leading-[1.75] text-text-secondary">
            {membershipEngineCoreIntro}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {membershipEngineCore.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border-subtle bg-tsh-cream/55 p-4"
              >
                <div className="mb-2 font-display text-[15px] font-bold text-text-primary">
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
