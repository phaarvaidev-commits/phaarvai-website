import type { ThemeId } from "./types";
import {
  Cpu,
  Building2,
  CloudRain,
  Database,
  Shield,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface Theme {
  id: ThemeId;
  title: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  problemAreas: string[];
  href: string;
}

export const themes: Theme[] = [
  {
    id: "technology",
    title: "Technology",
    shortDescription: "Applied AI, automation, and deployment-grade digital systems.",
    description:
      "Applied AI, automation, robotics, data systems, and emerging technology for complex operational environments.",
    icon: Cpu,
    problemAreas: [
      "Scalable AI deployment",
      "Digital infrastructure modernization",
      "Automation and orchestration",
      "Emerging technology integration",
      "Platform reliability at scale",
      "Operational software delivery",
    ],
    href: "/themes#technology",
  },
  {
    id: "government",
    title: "Government & Public Systems",
    shortDescription: "AI systems for public services, civic operations, and institutional workflows.",
    description:
      "AI-powered platforms for citizen services, public-sector digitization, urban governance, and government operations.",
    icon: Building2,
    problemAreas: [
      "Service delivery modernization",
      "Cross-agency integration",
      "Citizen access systems",
      "Operational workflow digitization",
      "Institutional dashboards",
      "Legacy system interoperability",
    ],
    href: "/themes#government",
  },
  {
    id: "environment-resilience",
    title: "Environment & Resilience",
    shortDescription: "Operational intelligence for climate, environment, and resilience systems.",
    description:
      "Intelligence platforms for environmental monitoring, climate resilience, adaptation planning, and energy operations.",
    icon: CloudRain,
    problemAreas: [
      "Climate risk visibility",
      "Environmental monitoring at scale",
      "Resilience planning systems",
      "Resource allocation intelligence",
      "Energy and infrastructure signals",
      "Adaptation program operations",
    ],
    href: "/themes#environment-resilience",
  },
  {
    id: "data-ai-systems",
    title: "Data & AI Systems",
    shortDescription: "AI-ready data architecture, analytics, and operational intelligence.",
    description:
      "Data platforms, streaming architectures, knowledge layers, and analytics built for AI-driven institutional decisions.",
    icon: Database,
    problemAreas: [
      "AI-ready data foundations",
      "Real-time ingestion pipelines",
      "Operational analytics",
      "Knowledge graph systems",
      "Decision intelligence layers",
      "Data platform unification",
    ],
    href: "/themes#data-ai-systems",
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Trust",
    shortDescription: "Secure AI, privacy-aware architecture, and institutional trust systems.",
    description:
      "Trusted AI deployment, security architecture, privacy-aware systems, and governance for sensitive environments.",
    icon: Shield,
    problemAreas: [
      "AI security architecture",
      "Privacy and data governance",
      "Trusted deployment patterns",
      "Identity and access systems",
      "Compliance-ready operations",
      "Institutional trust frameworks",
    ],
    href: "/themes#cybersecurity-trust",
  },
  {
    id: "research-emerging",
    title: "Research & Emerging Technology",
    shortDescription: "Applied R&D and advanced systems for institutional deployment.",
    description:
      "Applied research, advanced systems integration, and emerging AI capabilities for real-world institutional programs.",
    icon: FlaskConical,
    problemAreas: [
      "Research-to-deployment pathways",
      "Advanced systems validation",
      "Experimental AI integration",
      "Future capability roadmaps",
      "Multimodal AI systems",
      "Emerging infrastructure tech",
    ],
    href: "/themes#research-emerging",
  },
];

export function getThemeById(id: ThemeId) {
  return themes.find((t) => t.id === id);
}
