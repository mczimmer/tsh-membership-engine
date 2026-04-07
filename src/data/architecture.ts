import type {
  ArchitectureCapability,
  ArchitectureLayer,
  ArchitecturePlatform,
  ChangePair,
  ProductizationCard,
  TechnicalEvolutionPhase,
} from "./schema";

export const architecturePositioning = {
  eyebrow: "SYSTEM",
  title: "How the Membership Engine is built",
  body:
    "TSH already has many of the right building blocks in place: booking, CRM, data, activation, and experience platforms. The challenge is not replacing them. It is making them work together as a real-time, governed membership system. The Membership Engine is the orchestration and intelligence layer that turns those parts into a connected product.",
  supportLine:
    "This is not a new platform replacing your stack. It is the layer that makes your stack behave like a system.",
};

export const whatThisIs = [
  "A composable membership orchestration layer",
  "Sits across Muse, Salesforce, Databricks, Hightouch, and Optimizely",
  "Unifies member context, signals, and actions",
  "Embeds AI into operational workflows, not just tooling",
  "Designed to scale across hubs without replacing the stack",
  "Can evolve into a reusable product over time",
];

export const whatThisIsNot = [
  "Not a replacement for Salesforce, Databricks, Muse, or Optimizely",
  "Not a monolithic replatforming program",
  "Not AI magic sitting outside operational systems",
  "Not a dashboard-only layer with no decisioning underneath",
  "Not a big-bang rebuild requiring months before value appears",
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "experience",
    label: "EXPERIENCE",
    subtitle: "Where members and staff feel the value",
    color: "#2E7CF6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    blocks: [
      "Staff Dashboards",
      "Optimizely Experiences",
      "CRM Journeys",
      "Hub Operations",
      "Member Touchpoints",
    ],
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    subtitle: "Where context becomes action",
    color: "#F5A0B1",
    bg: "bg-pink-50",
    border: "border-pink-200",
    blocks: [
      "Recommendations",
      "AI Summaries",
      "Workflow Triggers",
      "Personalization Logic",
      "Decisioning Services",
    ],
  },
  {
    id: "orchestration",
    label: "ORCHESTRATION",
    subtitle: "How signals move across systems",
    color: "#FACC15",
    bg: "bg-amber-50",
    border: "border-amber-200",
    blocks: [
      "API Layer",
      "Event Routing",
      "Hightouch Activation",
      "Identity Resolution",
      "Business Rules",
    ],
  },
  {
    id: "record",
    label: "RECORD",
    subtitle: "What TSH already operates",
    color: "#1A8F3F",
    bg: "bg-green-50",
    border: "border-green-200",
    blocks: [
      "Muse",
      "Salesforce",
      "Databricks",
      "Optimizely",
      "Other Operational Data",
    ],
  },
];

export const architectureSupport =
  "The Membership Engine does not replace TSH's systems of record. It adds a thin orchestration and intelligence layer on top of them, allowing member context, operational signals, and AI workflows to work as one system.";

export const membershipEngineCoreIntro =
  "This is the new capability being introduced. It is the thin layer that unifies context, runs AI-enabled workflows, and triggers actions across the ecosystem.";

export const membershipEngineCore: ArchitectureCapability[] = [
  {
    title: "Unified member context",
    description:
      "Brings booking, CRM, behavioral, and activation signals into one usable operating view.",
  },
  {
    title: "Real-time event processing",
    description:
      "Turns meaningful signals into context updates, triggers, and measurable operational responses.",
  },
  {
    title: "AI workflow orchestration",
    description:
      "Introduces AI inside bounded workflows where summaries, recommendations, and actions can be governed.",
  },
  {
    title: "Triggered actions across systems",
    description:
      "Pushes decisions into journeys, experiences, and operations without requiring point-to-point rewiring everywhere.",
  },
  {
    title: "Guardrails and auditability",
    description:
      "Keeps consent, controls, and traceability embedded where decisions matter.",
  },
];

export const ecosystemPlatforms: ArchitecturePlatform[] = [
  {
    id: "muse",
    name: "Muse",
    role: "booking and stay signals",
    description:
      "Source of operational behavior including bookings, arrivals, stays, and location-linked activity.",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    role: "CRM and member lifecycle",
    description:
      "Source of customer identity, segmentation, communication history, and relationship management.",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: "databricks",
    name: "Databricks",
    role: "context and analytics foundation",
    description:
      "Houses modeled data, behavioral analytics, historical patterns, and the broader member intelligence base.",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    id: "hightouch",
    name: "Hightouch",
    role: "activation layer",
    description:
      "Syncs modeled context and decisions into operational systems, enabling action without custom rewiring everywhere.",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    id: "optimizely",
    name: "Optimizely",
    role: "experience layer",
    description:
      "Powers content and digital experience surfaces where membership logic and personalization can be expressed.",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: "ai_delivery",
    name: "AI-enabled delivery",
    role: "delivery acceleration and workflow experimentation",
    description:
      "Speeds how the system is built, and over time becomes part of how the product itself operates.",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

export const ecosystemSupport =
  "The architecture builds on systems TSH already owns or is adopting. The role of this engagement is not to replace those investments, but to connect them into a real-time membership product.";

export const architecturalDirection = {
  title: "Architectural direction",
  body:
    "The platform evolves from fragmented or manual flows toward an API-first, event-aware architecture. Every meaningful member interaction becomes a signal that can update context, trigger workflow logic, and create a measurable response in the experience layer.",
  bullets: [
    "API-first where systems support it",
    "Event-aware, not necessarily event-purist everywhere",
    "Reusable services over point-to-point logic",
    "Context and governance embedded by design",
  ],
};

export const productizationIntro =
  "The way this is structured determines whether it remains an internal platform or becomes a reusable Membership Engine product. Productization does not begin with packaging. It begins with architecture: clean separation of concerns, configurable workflows, reusable services, and hub-specific behavior expressed through configuration instead of custom rebuilds.";

export const productizationCards: ProductizationCard[] = [
  {
    title: "Core services",
    description:
      "Shared logic separated from hub-specific experience needs.",
  },
  {
    title: "Configurable workflows",
    description:
      "Rules, triggers, and interventions that can vary without changing the core.",
  },
  {
    title: "Composable integrations",
    description:
      "Existing systems can be connected differently per client or hub estate.",
  },
  {
    title: "Multi-tenant potential",
    description:
      "Not a v1 requirement, but the architecture should not block it.",
  },
];

export const changePairs: ChangePair[] = [
  { from: "Dashboard insights", to: "Real-time decisions" },
  { from: "Fragmented context", to: "Unified member context" },
  { from: "Feature-first delivery", to: "Architecture-aware evolution" },
  { from: "Tool-based AI usage", to: "Embedded AI workflows" },
  { from: "Manual or brittle flows", to: "Orchestrated services and activation" },
  { from: "Implicit governance", to: "Built-in auditability and controls" },
];

export const technicalEvolutionPhases: TechnicalEvolutionPhase[] = [
  {
    id: "validate",
    label: "Validate",
    subtitle: "Prove the orchestration pattern",
    color: "#F5A0B1",
    bg: "bg-pink-50",
    border: "border-pink-200",
    introduced: [
      "Lightweight integration patterns",
      "First context models",
      "Staff workflow prototypes",
      "Observability baseline",
    ],
    unchanged: [
      "Core systems of record remain in place",
      "Existing operational ownership stays with platform teams",
    ],
    riskReduced: "Avoids committing to a monolithic architecture before value is proven.",
    valueUnlocked: "Real-world learning around member context, workflow fit, and activation paths.",
  },
  {
    id: "harden",
    label: "Harden",
    subtitle: "Turn promising flows into governed services",
    color: "#2E7CF6",
    bg: "bg-blue-50",
    border: "border-blue-200",
    introduced: [
      "API contracts",
      "Audit logging",
      "Consent-aware activation",
      "Stronger identity model",
    ],
    unchanged: [
      "Composable stack approach",
      "Thin-core over existing platforms",
    ],
    riskReduced: "Reduces brittleness, privacy risk, and operational inconsistency.",
    valueUnlocked: "More reliable AI-assisted workflows and higher-confidence activation across systems.",
  },
  {
    id: "scale",
    label: "Scale",
    subtitle: "Make the pattern repeatable across hubs",
    color: "#1A8F3F",
    bg: "bg-green-50",
    border: "border-green-200",
    introduced: [
      "Multi-hub patterns",
      "Standardized workflows",
      "Operational governance",
      "Repeatable delivery patterns",
    ],
    unchanged: [
      "Composable service boundaries",
      "Hub experiences still shaped locally where needed",
    ],
    riskReduced: "Avoids every new hub becoming a custom rebuild.",
    valueUnlocked: "Cross-hub reuse, faster rollouts, and lower marginal delivery cost.",
  },
  {
    id: "productize",
    label: "Productize",
    subtitle: "Separate reusable core from client-specific experience",
    color: "#FACC15",
    bg: "bg-amber-50",
    border: "border-amber-200",
    introduced: [
      "Reusable service boundaries",
      "Configurable logic",
      "Packaging of core capabilities",
      "Separation of client-specific experience from shared product logic",
    ],
    unchanged: [
      "Orchestration-first model",
      "Existing ecosystems still integrated rather than replaced",
    ],
    riskReduced: "Prevents product ambitions from collapsing into bespoke delivery every time.",
    valueUnlocked: "A credible path from internal platform to reusable Membership Engine capability.",
  },
];
