import { SystemComponent } from "./schema";

export const systemComponents: SystemComponent[] = [
  {
    id: "data_architecture",
    name: "Data Architecture",
    role: "context_layer",
    roleLabel: "Context Layer",
    capabilities: [
      "Event-driven systems & streaming",
      "Real-time data pipelines",
      "Data modeling & warehousing",
      "ETL / change data capture",
    ],
    emoji: "🗄",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    id: "api_integration",
    name: "API & Integration",
    role: "integration_layer",
    roleLabel: "Integration Layer",
    capabilities: [
      "RESTful & GraphQL design",
      "Third-party integrations",
      "Auth / OAuth / SSO",
      "Webhook & event architectures",
    ],
    emoji: "🔌",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: "ai_workflows",
    name: "AI Workflows",
    role: "decision_engine",
    roleLabel: "Decision Engine",
    capabilities: [
      "LLM integration patterns",
      "Prompt engineering at scale",
      "Model serving & monitoring",
      "RAG & agent architectures",
    ],
    emoji: "⚡",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    id: "platform_engineering",
    name: "Platform Engineering",
    role: "infrastructure",
    roleLabel: "Infrastructure",
    capabilities: [
      "CI/CD pipeline design",
      "Infrastructure as code",
      "Observability & alerting",
      "Container orchestration",
    ],
    emoji: "🏗",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    id: "privacy_compliance",
    name: "Privacy & Compliance",
    role: "governance_layer",
    roleLabel: "Governance Layer",
    capabilities: [
      "GDPR-aware development",
      "Consent management",
      "Data minimization patterns",
      "Audit logging & lineage",
    ],
    emoji: "🛡",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    id: "ways_of_working",
    name: "Ways of Working",
    role: "operating_model",
    roleLabel: "Operating Model",
    capabilities: [
      "Rapid prototyping mindset",
      "Comfortable in ambiguity",
      "Strong async communication",
      "Pairing & knowledge transfer",
    ],
    emoji: "🤝",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export function getComponent(id: string) {
  return systemComponents.find((c) => c.id === id);
}
