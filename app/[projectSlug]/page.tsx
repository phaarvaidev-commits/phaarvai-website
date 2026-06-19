import { notFound, redirect } from "next/navigation";
import { getProjectBySlug, getProjectLaunchUrl, isInternalLaunchUrl } from "@/content/projects";

type Params = { projectSlug: string };

/** Legacy root paths → project launch URL or /projects/[slug] */
export default async function LegacyProjectRedirect({ params }: { params: Promise<Params> }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();

  const launchUrl = getProjectLaunchUrl(project);
  if (launchUrl && isInternalLaunchUrl(launchUrl)) {
    redirect(launchUrl);
  }

  redirect(`/projects/${projectSlug}`);
}
