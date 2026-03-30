import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { systemComponents } from "@/data";

export default function TeamPage() {
  return (
    <PageWrapper breadcrumb="Capability Profile">
      <div className="mb-14">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
          Engagement
        </div>
        <h1 className="max-w-[600px] font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
          Built for this
          <br />
          environment
        </h1>
        <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-text-secondary">
          TSH&apos;s setup demands someone who ships fast in ambiguity, thinks in
          systems, and is comfortable pairing across disciplines.
        </p>
      </div>

      <div className="relative mb-10">
        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-accent-secondary" />
        <div className="py-2 pl-8">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-secondary">
            A different lens
          </div>
          <p className="max-w-[560px] text-[16px] font-medium leading-[1.7] text-text-primary">
            These aren&apos;t just skills we bring - they&apos;re the components
            of the Membership Engine. Each maps to a system role that powers
            the experience moments we&apos;re building.
          </p>
        </div>
      </div>

      <div className="mb-14 space-y-4">
        {systemComponents.map((comp) => (
          <div
            key={comp.id}
            className={`overflow-hidden rounded-2xl border ${comp.border}`}
          >
            <div className="grid grid-cols-[280px_1fr] divide-x divide-border-subtle">
              <div className={`p-6 ${comp.bg}`}>
                <div className="mb-3 text-2xl">{comp.emoji}</div>
                <div className="font-display text-[17px] font-extrabold text-text-primary">
                  {comp.name}
                </div>
                <div className="mt-2 inline-flex rounded-full border border-border-subtle bg-white/70 px-2.5 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                    {comp.roleLabel}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-2 p-6">
                {comp.capabilities.map((cap, j) => (
                  <div
                    key={j}
                    className="rounded-xl border border-border-subtle bg-tsh-cream/60 px-3.5 py-2 text-[12px] font-medium text-text-secondary"
                  >
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border-subtle pt-8">
        <Link
          href="/delivery"
          className="group flex items-center justify-between rounded-2xl border border-border-subtle bg-tsh-cream p-6 transition-all hover:border-border-strong"
        >
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Next
            </div>
            <div className="font-display text-[18px] font-extrabold text-text-primary transition-colors group-hover:text-accent-primary">
              Delivery Rituals: Short loops, structured outcomes
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
