import { notFound, redirect } from "next/navigation";
import { getProjectBySlug } from "@/content/projects";

type Params = { projectSlug: string };

/** Legacy root paths like /x-y → /projects/x-y */
export default function LegacyProjectRedirect({ params }: { params: Params }) {
  const project = getProjectBySlug(params.projectSlug);
  if (!project) notFound();
  redirect(`/projects/${params.projectSlug}`);
}
