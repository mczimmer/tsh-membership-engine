export interface NavPage {
  id: string;
  label: string;
  href: string;
}

export interface NavSection {
  group: string;
  pages: NavPage[];
}

export const NAVIGATION: NavSection[] = [
  {
    group: "Discovery",
    pages: [
      { id: "overview", label: "Overview", href: "/" },
    ],
  },
  {
    group: "Analysis",
    pages: [
      { id: "context", label: "Where We Are", href: "/context" },
      { id: "approach", label: "Our Approach", href: "/approach" },
    ],
  },
  {
    group: "Engagement",
    pages: [
      { id: "how-we-work", label: "How We Work", href: "/how-we-work" },
      { id: "team", label: "Capability Profile", href: "/team" },
      { id: "delivery", label: "Delivery Rituals", href: "/delivery" },
    ],
  },
  {
    group: "Plan",
    pages: [
      { id: "roadmap", label: "Roadmap", href: "/roadmap" },
    ],
  },
];
