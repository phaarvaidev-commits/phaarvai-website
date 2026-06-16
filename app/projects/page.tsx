import type { Metadata } from "next";
import ProjectsPage from "@/views/projects";

export const metadata: Metadata = {
  title: "Systems & Deployments — Phaarvai",
  description:
    "Applied AI platforms, operational systems, and intelligent infrastructure across institutional domains.",
};

export default function Page() {
  return <ProjectsPage />;
}
