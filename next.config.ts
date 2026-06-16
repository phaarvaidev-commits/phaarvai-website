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
    return [
      { source: "/solutions", destination: "/projects", permanent: true },
      { source: "/sectors", destination: "/themes", permanent: true },
      { source: "/funding-partnerships", destination: "/contact", permanent: true },
      { source: "/partner", destination: "/contact", permanent: true },
      { source: "/insights", destination: "/projects", permanent: false },
    ];
  },
};

export default nextConfig;
