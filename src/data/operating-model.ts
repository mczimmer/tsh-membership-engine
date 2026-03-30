import { OperatingModel } from "./schema";

export const operatingModel: OperatingModel = {
  tracks: [
    {
      id: "capability",
      name: "Capability Track",
      owner: "Embedded Senior Developer",
      focus: [
        "data_architecture",
        "api_integration",
        "ai_workflows",
        "platform_engineering",
      ],
      deliverables: [
        "Backend architecture & API layer",
        "AI workflow implementation",
        "Real-time data pipelines",
        "Dashboard development for hosts",
        "CI/CD, testing & observability",
        "Pairing with TSH engineers",
      ],
      color: "#E63946",
      border: "border-red-200",
    },
    {
      id: "advisory",
      name: "Advisory Track",
      owner: "Strategic Guidance",
      focus: [
        "privacy_compliance",
        "ways_of_working",
        "data_architecture",
        "ai_workflows",
      ],
      deliverables: [
        "Target architecture & roadmap",
        "GDPR compliance framework",
        "AI governance strategy",
        "Multi-hub scalability patterns",
        "Team & ways-of-working design",
        "Tool & vendor evaluation",
      ],
      color: "#2563EB",
      border: "border-blue-200",
    },
  ],
  sync: {
    cadence: "weekly",
    artifact: "shared_backlog",
    description:
      "Weekly syncs ensure recommendations are grounded in implementation reality. Both tracks share a single backlog, jointly prioritized with TSH.",
  },
};
