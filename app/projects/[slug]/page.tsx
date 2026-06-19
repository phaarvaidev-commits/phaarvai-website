import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { ProjectDetailContent } from "@/components/ProjectDetailContent";
import { getProjectBySlug, isExternalProjectUrl } from "@/content/projects";

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project — Phaarvai" };

  return {
    title: `${project.title} — Phaarvai`,
    description: project.description,
  };
}

export default function ProjectRoutePage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const url = project.website;
  const currentPath = `/projects/${params.slug}`;

  if (!url) {
    return <ProjectDetailContent project={project} />;
  }

  if (!isExternalProjectUrl(url) && url !== currentPath) {
    redirect(url);
  }

  if (!isExternalProjectUrl(url)) {
    return <ProjectDetailContent project={project} />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] pt-20">
      <iframe
        src={url}
        title={project.title}
        className="w-full h-[calc(100vh-5rem)] border-0"
        allow="clipboard-read; clipboard-write; fullscreen"
      />
    </div>
  );
}
