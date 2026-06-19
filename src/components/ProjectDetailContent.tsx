import Link from "next/link";
import type { Project } from "@/content/projects";
import { formatBuilding } from "@/content/projects";
import { themes } from "@/content/themes";
import type { ThemeId } from "@/content/types";
import { PageHeader } from "@/components/PageHeader";
import { StageLabelBadge, ProjectStatusBadge, ThemeBadge } from "@/components/StatusBadge";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const themeLabels = project.themes
    .map((id: ThemeId) => themes.find((t) => t.id === id)?.title)
    .filter(Boolean) as string[];

  const buildingItems = formatBuilding(project.building);

  return (
    <article className="pt-28 pb-12 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <PageHeader label="System" title={project.title} description={project.description} />

        <section className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {themeLabels.map((label) => (
              <ThemeBadge key={label} label={label} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <StageLabelBadge label={`Stage: ${project.stageLabel}`} />
            <ProjectStatusBadge status={project.projectStatus} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">What we are building</h2>
          {buildingItems.length === 1 ? (
            <p className="text-base text-muted-foreground leading-relaxed">{buildingItems[0]}</p>
          ) : (
            <ul className="space-y-3">
              {buildingItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Potential partners</h2>
          <div className="flex flex-wrap gap-2">
            {project.potentialPartners.map((partner) => (
              <span
                key={partner}
                className="inline-flex items-center text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>

        <div className="text-xs text-muted-foreground">
          <Link href="/contact" className="text-primary underline underline-offset-4">
            Contact Phaarvai about this system
          </Link>
        </div>
      </div>
    </article>
  );
}
