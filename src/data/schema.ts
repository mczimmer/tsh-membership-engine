// The Membership Engine - System Schema

// Tensions
export type TensionId =
  | "speed_vs_structure"
  | "personalization_vs_privacy"
  | "empowerment_vs_governance";

export interface Tension {
  id: TensionId;
  title: string;
  left: { label: string; description: string };
  right: { label: string; description: string };
  riskIfUnbalanced: string;
  resolutionStrategy: string;
  color: string;
  bg: string;
  border: string;
  badge: string;
}

// Maturity Model
export type MaturityPhaseId = "now" | "validate" | "harden" | "scale";

export interface MaturityDimension {
  architecture: string;
  compliance: string;
  velocity: string;
  risk: string;
}

export interface MaturityPhase {
  id: MaturityPhaseId;
  label: string;
  tag: string;
  color: string;
  bg: string;
  text: string;
  activities: string[];
  dimensions: MaturityDimension;
}

// System Components
export type ComponentId =
  | "data_architecture"
  | "api_integration"
  | "ai_workflows"
  | "platform_engineering"
  | "privacy_compliance"
  | "ways_of_working";

export type ComponentRole =
  | "context_layer"
  | "integration_layer"
  | "decision_engine"
  | "infrastructure"
  | "governance_layer"
  | "operating_model";

export interface SystemComponent {
  id: ComponentId;
  name: string;
  role: ComponentRole;
  roleLabel: string;
  capabilities: string[];
  emoji: string;
  bg: string;
  border: string;
}

// Operating Model
export type TrackId = "capability" | "advisory";

export interface Track {
  id: TrackId;
  name: string;
  owner: string;
  focus: ComponentId[];
  deliverables: string[];
  color: string;
  border: string;
}

export interface OperatingModel {
  tracks: Track[];
  sync: {
    cadence: string;
    artifact: string;
    description: string;
  };
}

// Delivery Loop
export interface DeliveryRitual {
  id: string;
  title: string;
  description: string;
  icon: string;
  bg: string;
  border: string;
  type: "feedback" | "decision" | "output";
}

export interface DeliveryLoop {
  cycle: string;
  feedbackInputs: string[];
  decisionPoints: string[];
  outputs: string[];
  rituals: DeliveryRitual[];
}

// Roadmap
export interface RoadmapItem {
  id: string;
  week: string;
  title: string;
  description: string;
  componentsImpacted: ComponentId[];
  tensionsAddressed: TensionId[];
  maturityShift: { from: MaturityPhaseId; to: MaturityPhaseId } | null;
}

export interface RoadmapPhase {
  phaseId: MaturityPhaseId;
  label: string;
  color: string;
  bg: string;
  text: string;
  border: string;
  dot: string;
  items: RoadmapItem[];
}

// Experience Moments
export type MomentStatus = "concept" | "pilot" | "live" | "scaling";

export interface ExperienceMoment {
  id: string;
  name: string;
  description: string;
  status: MomentStatus;
  location: string;
  pillar: "learn" | "stay" | "work" | "play";
  aiWorkflow: string;
  componentsInvolved: ComponentId[];
  tensionsNavigated: TensionId[];
  metric: string;
  metricTarget: string;
}

// Architecture
export interface ArchitectureLayer {
  id: "experience" | "intelligence" | "orchestration" | "record";
  label: string;
  subtitle: string;
  color: string;
  bg: string;
  border: string;
  blocks: string[];
}

export interface ArchitecturePlatform {
  id: string;
  name: string;
  role: string;
  description: string;
  bg: string;
  border: string;
}

export interface ArchitectureCapability {
  title: string;
  description: string;
}

export interface ProductizationCard {
  title: string;
  description: string;
}

export interface ChangePair {
  from: string;
  to: string;
}

export interface TechnicalEvolutionPhase {
  id: string;
  label: string;
  subtitle: string;
  color: string;
  bg: string;
  border: string;
  introduced: string[];
  unchanged: string[];
  riskReduced: string;
  valueUnlocked: string;
}
