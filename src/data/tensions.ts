import { Tension } from "./schema";

export const tensions: Tension[] = [
  {
    id: "speed_vs_structure",
    title: "Speed vs. Structure",
    left: {
      label: "Rapid Experimentation",
      description:
        "AI-assisted prototyping with Copilot & Claude, shipping features fast",
    },
    right: {
      label: "Scalable Architecture",
      description:
        "Maintainable codebase, API contracts, observability & testing",
    },
    riskIfUnbalanced:
      "Compounding technical debt that eventually blocks feature delivery",
    resolutionStrategy:
      "Incremental governance layering - harden what works without stopping delivery",
    color: "#F59E0B",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-500",
  },
  {
    id: "personalization_vs_privacy",
    title: "Personalization vs. Privacy",
    left: {
      label: "Deep Member Insight",
      description:
        "Real-time data powering host actions and personalized experiences",
    },
    right: {
      label: "GDPR Compliance",
      description:
        "Consent management, data minimization, audit trails across hubs",
    },
    riskIfUnbalanced:
      "Regulatory exposure, member trust erosion, cross-border data violations",
    resolutionStrategy:
      "Privacy-by-design embedded in every feature, not bolted on after",
    color: "#E63946",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-500",
  },
  {
    id: "empowerment_vs_governance",
    title: "Empowerment vs. Governance",
    left: {
      label: "Staff Autonomy",
      description: "On-site hosts acting independently on live member data",
    },
    right: {
      label: "Data Governance",
      description:
        "Consistent quality, role-based access control & auditability",
    },
    riskIfUnbalanced:
      "Inconsistent member experience, data quality degradation, access sprawl",
    resolutionStrategy:
      "Role-based access with self-service analytics - guardrails, not gatekeepers",
    color: "#2563EB",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-500",
  },
];

export function getTension(id: string): Tension | undefined {
  return tensions.find((t) => t.id === id);
}
