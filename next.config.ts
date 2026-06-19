import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  allowedDevOrigins: ["*.janeway.replit.dev", "*.replit.dev", "*.repl.co"],

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  async redirects() {
    const projectSlugs = [
      "government-services-ai",
      "resilience-resource-optimizer",
      "ai-for-cities",
      "climate-intelligence-platform",
      "civic-service-navigator",
      "public-impact-knowledge-graph",
      "institutional-readiness-assistant",
      "policy-intelligence-assistant",
    ];

    return [
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/contact", permanent: true },
      { source: "/partner", destination: "/contact", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
      { source: "/projects/x-y", destination: "/x-y", permanent: true },
      { source: "/projects/x-y/:path*", destination: "/x-y/:path*", permanent: true },
      ...projectSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/projects/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
