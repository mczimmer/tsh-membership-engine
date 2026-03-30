import { PageWrapper } from "@/components/PageWrapper";

const TENSIONS = [
  {
    title: "Speed vs. Structure",
    left: "Rapid AI experimentation with Copilot & Claude",
    right: "Need for maintainable, scalable architecture",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-500",
  },
  {
    title: "Personalization vs. Privacy",
    left: "Deep member insights driving real-time host actions",
    right: "GDPR compliance on sensitive member data across hubs",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-500",
  },
  {
    title: "Empowerment vs. Governance",
    left: "On-site staff acting autonomously on live data",
    right: "Consistent data quality, access control & auditability",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-500",
  },
];

export default function ContextPage() {
  return (
    <PageWrapper breadcrumb="Where We Are">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-primary">
        Analysis
      </div>
      <h1 className="font-display text-[40px] font-extrabold leading-[1.1] tracking-tight text-text-primary">
        Three tensions we&apos;re
        <br />
        solving together
      </h1>
      <p className="mt-5 max-w-[620px] text-base leading-[1.8] text-text-secondary">
        TSH&apos;s membership platform sits at the intersection of ambitious
        personalization and the operational reality of scaling across multiple
        hubs. The same energy that fuels rapid innovation creates structural
        tension as the platform grows.
      </p>

      <div className="mt-11 flex flex-col gap-4">
        {TENSIONS.map((t, i) => (
          <div
            key={i}
            className={`rounded-card border bg-bg-card p-6 shadow-card ${t.border}`}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${t.badge}`} />
              <span className="font-display text-[15px] font-bold text-text-primary">
                {t.title}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_40px_1fr] items-center gap-3">
              <div
                className={`rounded-xl p-4 text-[13px] leading-relaxed text-text-secondary ${t.bg}`}
              >
                {t.left}
              </div>
              <div className="text-center text-xs font-semibold uppercase tracking-wide text-text-muted">vs</div>
              <div
                className={`rounded-xl p-4 text-[13px] leading-relaxed text-text-secondary ${t.bg}`}
              >
                {t.right}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-card border border-accent-primary/10 bg-accent-primary/[0.04] p-6 text-sm leading-[1.7] text-text-secondary">
        <strong className="font-bold text-accent-primary">Our read:</strong>{" "}
        These aren&apos;t problems to fix; they&apos;re tensions to manage. The
        goal isn&apos;t to eliminate speed in favor of structure. It&apos;s to
        find the right balance at each stage, and shift that balance
        deliberately as the platform matures.
      </div>
    </PageWrapper>
  );
}
