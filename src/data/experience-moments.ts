import { ExperienceMoment, MomentStatus } from "./schema";

type PillarStyle = {
  bg: string;
  text: string;
  border: string;
};

type StatusStyle = {
  label: string;
  bg: string;
  text: string;
};

export const experienceMoments: ExperienceMoment[] = [
  {
    id: "arrival_recognition",
    name: "Member Arrival Recognition",
    description:
      "Hosts receive real-time context when a member checks in - preferences, visit history, and personalized welcome prompts powered by the AI engine.",
    status: "pilot",
    location: "Amsterdam City",
    pillar: "stay",
    aiWorkflow: "Member context retrieval + recommendation engine",
    componentsInvolved: [
      "data_architecture",
      "ai_workflows",
      "api_integration",
    ],
    tensionsNavigated: [
      "personalization_vs_privacy",
      "empowerment_vs_governance",
    ],
    metric: "Member satisfaction score",
    metricTarget: "+15% NPS within 3 months of rollout",
  },
  {
    id: "cowork_matching",
    name: "Co-Working Community Matching",
    description:
      "AI-suggested introductions between co-workers based on shared interests, industries, and project compatibility. Opt-in, privacy-first.",
    status: "concept",
    location: "All hubs",
    pillar: "work",
    aiWorkflow: "Semantic profile matching + consent-gated recommendations",
    componentsInvolved: [
      "ai_workflows",
      "privacy_compliance",
      "data_architecture",
    ],
    tensionsNavigated: ["personalization_vs_privacy"],
    metric: "Community engagement rate",
    metricTarget: "20% of co-workers opt-in within 6 months",
  },
  {
    id: "event_personalization",
    name: "Personalized Event Discovery",
    description:
      "Members receive curated event recommendations based on their interests, past attendance, and current hub location - surfaced in-app and via host suggestions.",
    status: "pilot",
    location: "Barcelona, Madrid",
    pillar: "play",
    aiWorkflow: "Interest graph + event catalog matching",
    componentsInvolved: [
      "ai_workflows",
      "data_architecture",
      "api_integration",
    ],
    tensionsNavigated: [
      "personalization_vs_privacy",
      "speed_vs_structure",
    ],
    metric: "Event attendance rate",
    metricTarget: "+25% attendance for recommended events",
  },
  {
    id: "smart_room_prep",
    name: "Smart Room Preparation",
    description:
      "Returning members get rooms prepared based on past preferences - temperature, pillow type, minibar stocking - without manual host intervention.",
    status: "concept",
    location: "Amsterdam, Vienna",
    pillar: "stay",
    aiWorkflow: "Preference learning model + IoT integration layer",
    componentsInvolved: [
      "data_architecture",
      "ai_workflows",
      "api_integration",
      "privacy_compliance",
    ],
    tensionsNavigated: [
      "personalization_vs_privacy",
      "empowerment_vs_governance",
    ],
    metric: "Return guest satisfaction",
    metricTarget: "+20% repeat booking rate",
  },
  {
    id: "learning_pathways",
    name: "Adaptive Learning Pathways",
    description:
      "Student members receive personalized study and skill-building recommendations based on their program, interests, and community engagement patterns.",
    status: "concept",
    location: "All hubs",
    pillar: "learn",
    aiWorkflow: "Learning profile analysis + content recommendation",
    componentsInvolved: ["ai_workflows", "data_architecture"],
    tensionsNavigated: ["personalization_vs_privacy"],
    metric: "Learning engagement score",
    metricTarget: "40% of student members active on pathways",
  },
  {
    id: "host_dashboard",
    name: "Real-Time Host Intelligence",
    description:
      "Hosts access a live dashboard showing who is in-hub, their context, and AI-generated action suggestions - enabling proactive, personalized service.",
    status: "pilot",
    location: "Amsterdam City",
    pillar: "stay",
    aiWorkflow: "Real-time member context + action recommendation engine",
    componentsInvolved: [
      "data_architecture",
      "ai_workflows",
      "api_integration",
      "privacy_compliance",
      "platform_engineering",
    ],
    tensionsNavigated: [
      "personalization_vs_privacy",
      "empowerment_vs_governance",
      "speed_vs_structure",
    ],
    metric: "Host action-to-insight ratio",
    metricTarget: "80% of AI suggestions acted on within shift",
  },
];

export const pillarColors: Record<
  ExperienceMoment["pillar"],
  PillarStyle
> = {
  learn: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  stay: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
  work: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  play: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
};

export const statusConfig: Record<MomentStatus, StatusStyle> = {
  concept: { label: "Concept", bg: "bg-gray-100", text: "text-gray-600" },
  pilot: { label: "Pilot", bg: "bg-amber-100", text: "text-amber-700" },
  live: { label: "Live", bg: "bg-green-100", text: "text-green-700" },
  scaling: { label: "Scaling", bg: "bg-blue-100", text: "text-blue-700" },
};
