import { PageWrapper } from "@/components/PageWrapper";

const TENSIONS = [
  {
    title: "Speed vs. Structure",
    left: "Rapid AI experimentation with Copilot & Claude",
    right: "Need for maintainable, scalable architecture",
    color: "#f59e0b",
    emoji: "⚡",
  },
  {
    title: "Personalization vs. Privacy",
    left: "Deep member insights driving real-time host actions",
    right: "GDPR compliance on sensitive member data across hubs",
    color: "#ef4444",
    emoji: "🛡",
  },
  {
    title: "Empowerment vs. Governance",
    left: "On-site staff acting autonomously on live data",
    right: "Consistent data quality, access control & auditability",
    color: "#6366f1",
    emoji: "👥",
  },
];

export default function ContextPage() {
  return (
    <PageWrapper breadcrumb="Where We Are">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-indigo mb-3">
        Analysis
      </div>
      <h1 className="text-[38px] font-extrabold leading-[1.1] text-text-primary tracking-tight">
        Three tensions we&apos;re
        <br />
        solving together
      </h1>
      <p className="text-base text-text-secondary leading-[1.75] mt-5 max-w-[620px]">
        TSH&apos;s membership platform sits at the intersection of ambitious
        personalization and the operational reality of scaling across multiple
        hubs. The same energy that fuels rapid innovation creates structural
        tension as the platform grows.
      </p>

      <div className="flex flex-col gap-4 mt-11">
        {TENSIONS.map((t, i) => (
          <div key={i} className="p-6 rounded-[14px] bg-bg-card border border-border-subtle">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: `${t.color}15` }}
              >
                {t.emoji}
              </div>
              <span className="text-[15px] font-bold text-text-primary">
                {t.title}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3">
              <div className="text-[13px] text-text-secondary leading-relaxed p-3 bg-white/[0.03] rounded-[10px]">
                {t.left}
              </div>
              <div className="text-center text-base text-white/10">⇄</div>
              <div className="text-[13px] text-text-secondary leading-relaxed p-3 bg-white/[0.03] rounded-[10px]">
                {t.right}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 rounded-xl bg-accent-indigo/5 border border-accent-indigo/10 text-sm text-text-secondary leading-[1.65]">
        <strong className="text-[#a5b4fc]">Our read:</strong> These aren&apos;t
        problems to fix — they&apos;re tensions to manage. The goal isn&apos;t to
        eliminate speed in favor of structure. It&apos;s to find the right balance at
        each stage, and shift that balance deliberately as the platform matures.
      </div>
    </PageWrapper>
  );
}
