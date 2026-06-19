import type { ProjectStage, ProjectStatus, ThemeId } from "./types";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  themes: ThemeId[];
  stageLabel: string;
  stages: ProjectStage[];
  projectStatus: ProjectStatus;
  building: string | string[];
  potentialPartners: string[];
  featured?: boolean;
  website?: string;
}

export const projectStages: ProjectStage[] = [
  "Development",
  "Pilot",
  "Production",
  "Deployed",
  "Live",
];

export const projects: Project[] = [
  {
    id: "government-services-ai",
    slug: "government-services-ai",
    title: "Government Services AI",
    description:
      "Operational civic platform connecting citizen intake, AI assistance, review queues, and institutional dashboards.",
    themes: ["government", "data-ai-systems"],
    stageLabel: "Pilot Deployment",
    stages: ["Pilot"],
    projectStatus: "Live system",
    building:
      "Full-stack service operations application with request pipelines, status tracking, and institutional review workflows.",
    potentialPartners: ["City digital teams", "Public service departments", "GovTech programs"],
    featured: true,
    website: "/projects/government-services-ai",
  },
  {
    id: "resilience-resource-optimizer",
    slug: "resilience-resource-optimizer",
    title: "Resilience Resource Optimizer",
    description:
      "Climate resilience operations system for prioritizing interventions, resource planning, and institutional reporting.",
    themes: ["environment-resilience", "government"],
    stageLabel: "Pilot Deployment",
    stages: ["Pilot"],
    projectStatus: "Operational",
    building:
      "Risk analysis, resource planning, reporting, and transparency modules for institutional climate governance.",
    potentialPartners: ["Local governments", "Climate agencies", "Infrastructure operators"],
    featured: true,
    website: "/projects/resilience-resource-optimizer",
  },
  {
    id: "x-y-manufacturing-platform",
    slug: "x-y",
    title: "x!y — Manufacturing Operations Platform",
    description:
      "AI-powered manufacturing operations platform for supplier discovery, workflow optimization, and partner onboarding.",
    themes: ["technology", "data-ai-systems"],
    stageLabel: "Production System",
    stages: ["Production"],
    projectStatus: "Live system",
    building:
      "Integrated manufacturing assistant, marketplace discovery, booking workflows, and provider operations.",
    potentialPartners: ["Manufacturers", "Industrial networks", "Innovation hubs"],
    featured: true,
    website: "/projects/x-y",
  },
  {
    id: "ai-for-cities",
    slug: "ai-for-cities",
    title: "AI for Cities",
    description:
      "Civic intelligence platform for citizen service delivery, issue routing, and urban governance operations.",
    themes: ["government"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "In development",
    building:
      "AI assistant and operations dashboard for civic issue intake, routing, and service gap analysis.",
    potentialPartners: ["City governments", "Urban innovation labs", "GovTech programs"],
    featured: true,
    website: "/login",
  },
  {
    id: "climate-intelligence-platform",
    slug: "climate-intelligence-platform",
    title: "Climate Intelligence Platform",
    description:
      "Environmental intelligence system for climate risk visibility, adaptation planning, and operational reporting.",
    themes: ["environment-resilience", "data-ai-systems"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "In development",
    building:
      "Platform aggregating climate risk signals, adaptation indicators, and operational reporting views.",
    potentialPartners: ["Environmental agencies", "Climate programs", "Research institutions"],
    featured: true,
    website: "/projects/resilience-resource-optimizer",
  },
  {
    id: "civic-service-navigator",
    slug: "civic-service-navigator",
    title: "Civic Service Navigator",
    description:
      "Multilingual AI navigation system for public services, departmental routing, and citizen access workflows.",
    themes: ["government", "cybersecurity-trust"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "Partner-ready",
    building:
      "Conversational navigator with structured service pathways, eligibility guidance, and accessibility-first design.",
    potentialPartners: ["Government agencies", "Civic coalitions", "Public institutions"],
    featured: false,
    website: "/login",
  },
  {
    id: "public-impact-knowledge-graph",
    slug: "public-impact-knowledge-graph",
    title: "Public Impact Knowledge Graph",
    description:
      "Ecosystem intelligence platform mapping programs, institutions, and outcomes across public-impact domains.",
    themes: ["data-ai-systems", "research-emerging"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "In development",
    building:
      "Knowledge layer linking entities, program flows, and outcomes into queryable operational intelligence.",
    potentialPartners: ["Research universities", "Think tanks", "Institutional networks"],
    featured: false,
  },
  {
    id: "institutional-readiness-assistant",
    slug: "institutional-readiness-assistant",
    title: "Institutional Readiness Assistant",
    description:
      "AI-guided readiness system for complex programs — eligibility mapping, workflow preparation, and decision support.",
    themes: ["government", "data-ai-systems"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "Partner-ready",
    building:
      "Assistant that maps program requirements, surfaces operational fit, and structures readiness workflows.",
    potentialPartners: ["Public agencies", "Development programs", "Institutional operators"],
    featured: false,
  },
  {
    id: "policy-intelligence-assistant",
    slug: "policy-intelligence-assistant",
    title: "Policy Intelligence Assistant",
    description:
      "Research intelligence system for policy synthesis, regulatory tracking, and evidence-based decision support.",
    themes: ["research-emerging", "data-ai-systems"],
    stageLabel: "Development",
    stages: ["Development"],
    projectStatus: "Partner-ready",
    building:
      "Research assistant aggregating policy documents, surfacing evidence, and supporting institutional briefings.",
    potentialPartners: ["Think tanks", "Research institutions", "Public agencies"],
    featured: false,
  },
];

/** Slugs with a dedicated app route under `app/projects/[slug]/` */
export const nativeProjectSlugs = [
  "government-services-ai",
  "resilience-resource-optimizer",
  "x-y",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectHref(slug: string) {
  return `/projects/${slug}`;
}

/** Resolves the live demo / application URL for a project card launch action. */
export function getProjectLaunchUrl(project: Project): string | null {
  return project.website ?? null;
}

export function hasProjectLaunchUrl(project: Project): boolean {
  return Boolean(project.website);
}

export function isExternalProjectUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

/** Absolute URL for opening demos in a new tab (internal apps resolve against site origin). */
export function resolveProjectLaunchUrl(url: string, origin = "https://phaarvai.com"): string {
  if (isExternalProjectUrl(url)) return url;
  if (url.startsWith("/")) return `${origin.replace(/\/$/, "")}${url}`;
  return url;
}

export function getProjectsByTheme(themeId: ThemeId) {
  return projects.filter((p) => p.themes.includes(themeId));
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function formatBuilding(building: string | string[]) {
  return Array.isArray(building) ? building : [building];
}
