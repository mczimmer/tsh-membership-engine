import { RoadmapPhase } from "./schema";

export const roadmapPhases: RoadmapPhase[] = [
  {
    phaseId: "validate",
    label: "Validate",
    color: "#F5A0B1",
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200",
    dot: "bg-pink-400",
    items: [
      {
        id: "discovery_audit",
        week: "1-2",
        title: "Discovery & Audit",
        description:
          "Deep-dive into current architecture, data flows, and compliance posture. Establish shared understanding.",
        componentsImpacted: [
          "data_architecture",
          "api_integration",
          "privacy_compliance",
        ],
        tensionsAddressed: [
          "speed_vs_structure",
          "personalization_vs_privacy",
        ],
        maturityShift: null,
      },
      {
        id: "foundation",
        week: "3-4",
        title: "Foundation",
        description:
          "API contracts defined, GDPR gap analysis delivered, dev environment & CI/CD hardened.",
        componentsImpacted: [
          "api_integration",
          "platform_engineering",
          "privacy_compliance",
        ],
        tensionsAddressed: [
          "speed_vs_structure",
          "personalization_vs_privacy",
        ],
        maturityShift: null,
      },
      {
        id: "first_wins",
        week: "5-6",
        title: "First Production Wins",
        description:
          "First refactored features live with monitoring. Quick wins that prove the approach.",
        componentsImpacted: [
          "data_architecture",
          "platform_engineering",
          "ai_workflows",
        ],
        tensionsAddressed: ["speed_vs_structure"],
        maturityShift: { from: "now", to: "validate" },
      },
    ],
  },
  {
    phaseId: "harden",
    label: "Harden",
    color: "#2563EB",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    dot: "bg-blue-500",
    items: [
      {
        id: "core_platform",
        week: "7-10",
        title: "Core Platform Build",
        description:
          "Event-driven architecture, consent management, dashboard rebuilt for scale. Staff access controls live.",
        componentsImpacted: [
          "data_architecture",
          "ai_workflows",
          "privacy_compliance",
          "api_integration",
        ],
        tensionsAddressed: [
          "speed_vs_structure",
          "personalization_vs_privacy",
          "empowerment_vs_governance",
        ],
        maturityShift: { from: "validate", to: "harden" },
      },
      {
        id: "production_readiness",
        week: "11-14",
        title: "Production Readiness",
        description:
          "Load testing, security hardening, incident response playbooks. Robust enough for multi-hub ambitions.",
        componentsImpacted: [
          "platform_engineering",
          "privacy_compliance",
          "ways_of_working",
        ],
        tensionsAddressed: [
          "speed_vs_structure",
          "empowerment_vs_governance",
        ],
        maturityShift: null,
      },
    ],
  },
  {
    phaseId: "scale",
    label: "Scale",
    color: "#22C55E",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    dot: "bg-green-500",
    items: [
      {
        id: "multi_hub",
        week: "15-18",
        title: "Multi-Hub Patterns",
        description:
          "Rollout framework for additional locations. AI model governance & feedback loops operational.",
        componentsImpacted: [
          "data_architecture",
          "ai_workflows",
          "platform_engineering",
        ],
        tensionsAddressed: [
          "empowerment_vs_governance",
          "personalization_vs_privacy",
        ],
        maturityShift: { from: "harden", to: "scale" },
      },
      {
        id: "sustained_velocity",
        week: "19+",
        title: "Sustained Velocity",
        description:
          "Self-service analytics, automated compliance. Knowledge transfer for TSH team independence.",
        componentsImpacted: [
          "ways_of_working",
          "privacy_compliance",
          "ai_workflows",
        ],
        tensionsAddressed: [
          "speed_vs_structure",
          "empowerment_vs_governance",
        ],
        maturityShift: null,
      },
    ],
  },
];
