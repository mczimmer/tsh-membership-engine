import { DeliveryLoop } from "./schema";

export const deliveryLoop: DeliveryLoop = {
  cycle: "2_weeks",
  feedbackInputs: [
    "Staff dashboard usage patterns",
    "Member behavior & engagement data",
    "AI model output quality scores",
    "System performance metrics",
  ],
  decisionPoints: [
    "Architecture Decision Records (ADRs)",
    "Privacy impact assessments",
    "Sprint retrospectives",
  ],
  outputs: [
    "Feature updates & refinements",
    "Model adjustments & retraining triggers",
    "Governance documentation updates",
    "Knowledge transfer artifacts",
  ],
  rituals: [
    {
      id: "weekly_demos",
      title: "Weekly Demos",
      description:
        "Every Friday: live walkthrough of what shipped, what we learned, what's next. Working software, not slide decks.",
      icon: "🎬",
      bg: "bg-pink-50",
      border: "border-pink-200",
      type: "output",
    },
    {
      id: "sprints",
      title: "2-Week Sprints",
      description:
        "Clear goals, jointly prioritized with TSH. Tight enough for urgency, long enough to ship meaningful work.",
      icon: "🏃",
      bg: "bg-blue-50",
      border: "border-blue-200",
      type: "feedback",
    },
    {
      id: "adrs",
      title: "Architecture Decision Records",
      description:
        "Lightweight docs for key technical decisions and rationale. Institutional knowledge without waterfall overhead.",
      icon: "📋",
      bg: "bg-amber-50",
      border: "border-amber-200",
      type: "decision",
    },
    {
      id: "privacy_checks",
      title: "Privacy Checkpoints",
      description:
        "Every feature touching member data gets a lightweight GDPR impact assessment before shipping. Built in, not bolted on.",
      icon: "🔒",
      bg: "bg-green-50",
      border: "border-green-200",
      type: "decision",
    },
    {
      id: "living_docs",
      title: "Living Documentation",
      description:
        "API specs, runbooks, onboarding guides that grow with the codebase. Always current, never a separate phase.",
      icon: "📝",
      bg: "bg-purple-50",
      border: "border-purple-200",
      type: "output",
    },
    {
      id: "async_first",
      title: "Async-First",
      description:
        "Daily updates via Slack/threads, not meetings. Sync time reserved for decisions and demos — no status theatre.",
      icon: "💬",
      bg: "bg-orange-50",
      border: "border-orange-200",
      type: "feedback",
    },
  ],
};
