"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { formatBuilding } from "@/content/projects";
import { themes } from "@/content/themes";
import { ProjectStatusBadge, StageLabelBadge, ThemeBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "detailed";
  className?: string;
  delay?: number;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
  delay = 0,
}: ProjectCardProps) {
  const themeLabels = project.themes
    .map((id) => themes.find((t) => t.id === id)?.title)
    .filter(Boolean) as string[];

  const buildingItems = formatBuilding(project.building);
  const href = project.website;
  const hasWebsite = Boolean(href);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col h-full",
        variant === "detailed" && "lg:p-8",
        className
      )}
    >
      {hasWebsite ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block flex flex-col flex-grow"
        >
        <div className="flex flex-wrap gap-2 mb-4">
          {themeLabels.map((label) => (
            <ThemeBadge key={label} label={label} />
          ))}
        </div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors"
          />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <StageLabelBadge label={`Stage: ${project.stageLabel}`} />
          <ProjectStatusBadge status={project.projectStatus} />
        </div>

        {variant !== "compact" && (
          <div className="border-t border-border pt-4 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground/80 mb-2">What we are building</p>
            {buildingItems.length === 1 ? (
              <p>{buildingItems[0]}</p>
            ) : (
              <ul className="space-y-1.5">
                {buildingItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {variant === "detailed" && (
          <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-3">
            <span className="font-semibold text-foreground/80">Potential partners: </span>
            {project.potentialPartners.join(" · ")}
          </p>
        )}
        </a>
      ) : (
        <div className="block flex flex-col flex-grow cursor-not-allowed opacity-85">
          <div className="flex flex-wrap gap-2 mb-4">
            {themeLabels.map((label) => (
              <ThemeBadge key={label} label={label} />
            ))}
          </div>

          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg font-bold text-foreground leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground/40 shrink-0"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            <StageLabelBadge label={`Stage: ${project.stageLabel}`} />
            <ProjectStatusBadge status={project.projectStatus} />
          </div>

          {variant !== "compact" && (
            <div className="border-t border-border pt-4 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground/80 mb-2">What we are building</p>
              {buildingItems.length === 1 ? (
                <p>{buildingItems[0]}</p>
              ) : (
                <ul className="space-y-1.5">
                  {buildingItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {variant === "detailed" && (
            <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-3">
              <span className="font-semibold text-foreground/80">Potential partners: </span>
              {project.potentialPartners.join(" · ")}
            </p>
          )}

          <p className="mt-3 text-xs text-amber-600">Website link not available yet.</p>
        </div>
      )}
    </motion.article>
  );
}
