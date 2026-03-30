import { MaturityPhase } from "./schema";

export const maturityPhases: MaturityPhase[] = [
  {
    id: "now",
    label: "Now",
    tag: "Current State",
    color: "#F59E0B",
    bg: "bg-amber-50",
    text: "text-amber-600",
    activities: [
      "Rapid prototyping with AI-assisted development",
      "Feature-first, architecture-second",
      "Manual or semi-automated data flows",
      "Limited observability & monitoring",
    ],
    dimensions: {
      architecture: "Monolithic / ad-hoc",
      compliance: "Informal",
      velocity: "Very High",
      risk: "Growing",
    },
  },
  {
    id: "validate",
    label: "Validate",
    tag: "Weeks 1-6",
    color: "#E63946",
    bg: "bg-red-50",
    text: "text-red-600",
    activities: [
      "Audit existing architecture & data flows",
      "Define API contracts & data schemas",
      "Establish GDPR baseline & gap analysis",
      "Identify what to keep, refactor, or replace",
    ],
    dimensions: {
      architecture: "API-first refactoring",
      compliance: "Gap analysis done",
      velocity: "High",
      risk: "Managed",
    },
  },
  {
    id: "harden",
    label: "Harden",
    tag: "Weeks 7-14",
    color: "#2563EB",
    bg: "bg-blue-50",
    text: "text-blue-600",
    activities: [
      "Production-grade infrastructure & CI/CD",
      "Consent management & data lineage",
      "Role-based access for staff dashboards",
      "Testing, monitoring & incident response",
    ],
    dimensions: {
      architecture: "Event-driven services",
      compliance: "Privacy-by-design",
      velocity: "Moderate to High",
      risk: "Low",
    },
  },
  {
    id: "scale",
    label: "Scale",
    tag: "Weeks 15+",
    color: "#22C55E",
    bg: "bg-green-50",
    text: "text-green-600",
    activities: [
      "Multi-hub rollout patterns & templates",
      "AI model governance & feedback loops",
      "Self-service analytics for hosts",
      "Automated compliance monitoring",
    ],
    dimensions: {
      architecture: "Distributed / multi-tenant",
      compliance: "Automated",
      velocity: "Sustained High",
      risk: "Controlled",
    },
  },
];
