export const positioningLines = {
  main: "AI for Good. Built for Public Impact.",
  hero:
    "Phaarvai develops AI-powered systems and intelligent infrastructure for real-world operational, institutional, and public-impact environments.",
  identity:
    "Phaarvai builds serious AI-powered systems and intelligent infrastructure for real-world environments.",
} as const;

export const siteContent = {
  brand: {
    name: "Phaarvai",
    tagline: positioningLines.main,
    positioning: positioningLines.identity,
  },
  hero: {
    headline: positioningLines.main,
    subheadline: positioningLines.hero,
    ctaPrimary: { label: "Explore Domains", href: "/themes" },
    ctaSecondary: { label: "View Systems", href: "/projects" },
    ctaTertiary: { label: "Partner With Us", href: "/contact" },
    badges: [positioningLines.main],
  },
  whatWeDo: {
    title: "What We Do",
    statement:
      "We develop applied AI systems, operational platforms, and intelligent infrastructure that help organizations solve complex real-world challenges.",
  },
  systemsStack: {
    title: "Operational Intelligence Stack",
    layers: [
      { label: "Data & Signals", description: "Ingestion, telemetry, and AI-ready foundations." },
      { label: "AI Orchestration", description: "Agents, workflows, and decision layers." },
      { label: "Application Platforms", description: "Dashboards, services, and domain apps." },
      { label: "Security & Governance", description: "Trusted AI and compliant deployment." },
      { label: "Deployment", description: "Cloud, edge, and hybrid infrastructure." },
    ],
  },
  domainsSection: {
    title: "Operational Domains",
    subtitle: "Applied AI across infrastructure, institutions, and operational systems.",
  },
  featuredProjects: {
    title: "Deployed Systems",
    intro: "Live applications, pilots, and operational platforms across institutional environments.",
    label: "Systems",
  },
  institutionalSection: {
    title: "Built for Institutional Environments",
    statement:
      "Designed for governments, research ecosystems, infrastructure operators, and mission-driven organizations solving complex operational, infrastructure, and public-impact challenges.",
    points: [
      "Deployment-grade engineering for real environments",
      "AI security and institutional trust by design",
      "Operational intelligence at enterprise scale",
      "Multilingual and accessible system architecture",
    ],
  },
  projectsPage: {
    title: "Systems & Deployments",
    subtitle:
      "Applied AI platforms, operational systems, and intelligent infrastructure across institutional domains.",
  },
  capabilitiesPage: {
    title: "Enterprise-grade AI systems delivery",
    subtitle:
      "Six capability pillars for building, securing, and deploying intelligent systems in institutional and operational environments.",
  },
  aboutPage: {
    title: "Applied AI & Intelligent Infrastructure",
    description:
      "Phaarvai is an applied AI and intelligent infrastructure company building deployment-grade systems for governments, institutions, and complex operational environments.",
    context:
      "We deliver AI-native platforms, data systems, and infrastructure technologies — from architecture through production deployment.",
  },
  partnerPage: {
    title: "Partner with Phaarvai",
    subtitle:
      "Institutional partnerships, deployment collaborations, and applied AI programs for governments, infrastructure operators, and research ecosystems.",
    contactCta: "Discuss your operational environment, deployment scope, or collaboration objectives.",
  },
  partnerCta: {
    title: "Partner on your next system deployment",
    description: "Institutional partnerships, research collaboration, and applied AI for mission-critical environments.",
    primary: { label: "Contact Us", href: "/contact" },
    secondary: { label: "View Systems", href: "/projects" },
  },
  footer: {
    tagline: positioningLines.main,
    statement: positioningLines.identity,
    email: "partnerships@phaarvai.com",
    links: {
      explore: [
        { label: "Domains", href: "/themes" },
        { label: "Systems", href: "/projects" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
      ],
      connect: [{ label: "Contact", href: "/contact" }],
    },
    copyright: `© ${new Date().getFullYear()} Phaarvai. All rights reserved.`,
  },
};

export const partnerAudiences = [
  {
    id: "governments",
    title: "Governments & Public Agencies",
    description: "Service modernization, civic operations, and public-sector AI systems.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Operators",
    description: "Intelligent infrastructure, digital twins, and operational technology deployment.",
  },
  {
    id: "research",
    title: "Research Ecosystems",
    description: "Applied R&D, advanced systems, and responsible AI integration.",
  },
  {
    id: "enterprise",
    title: "Mission-Driven Institutions",
    description: "Secure, scalable AI platforms for complex institutional environments.",
  },
  {
    id: "technology",
    title: "Technology Partners",
    description: "Co-delivery of deployment-grade AI systems and infrastructure.",
  },
];
