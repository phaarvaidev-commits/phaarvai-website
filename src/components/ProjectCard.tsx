"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import {
  formatBuilding,
  getProjectLaunchUrl,
  hasProjectLaunchUrl,
  isExternalProjectUrl,
  isInternalLaunchUrl,
} from "@/content/projects";
import { themes } from "@/content/themes";
import type { ThemeId } from "@/content/types";
import { ProjectStatusBadge, StageLabelBadge, ThemeBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "detailed";
  className?: string;
  delay?: number;
}

function ProjectCardVisual({ themeIds }: { themeIds: ThemeId[] }) {
  const accent = themeIds.includes("government")
    ? "from-sky-500/15"
    : themeIds.includes("environment-resilience")
      ? "from-emerald-500/15"
      : themeIds.includes("cybersecurity-trust")
        ? "from-violet-500/15"
        : "from-primary/15";

  return (
    <div
      className={cn(
        "relative h-24 rounded-xl mb-4 overflow-hidden border border-border bg-gradient-to-br to-background",
        accent
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-dot-grid opacity-25" />
      <svg viewBox="0 0 120 48" className="absolute inset-0 w-full h-full opacity-50">
        <line x1="8" y1="24" x2="112" y2="24" className="infra-flow-line" />
        <line x1="30" y1="10" x2="60" y2="38" className="infra-flow-line" style={{ animationDelay: "0.2s" }} />
        <line x1="60" y1="38" x2="90" y2="10" className="infra-flow-line" style={{ animationDelay: "0.4s" }} />
        <circle cx="30" cy="24" r="3" className="fill-primary/80" />
        <circle cx="60" cy="24" r="4" className="fill-primary" />
        <circle cx="90" cy="24" r="3" className="fill-primary/80" />
      </svg>
    </div>
  );
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
  const launchUrl = getProjectLaunchUrl(project);
  const isLaunchable = hasProjectLaunchUrl(project);
  const isInternal = launchUrl ? isInternalLaunchUrl(launchUrl) : false;
  const isExternal = launchUrl ? isExternalProjectUrl(launchUrl) : false;

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col h-full",
        variant === "detailed" && "lg:p-8",
        isLaunchable && "cursor-pointer",
        className
      )}
    >
      {variant !== "compact" && <ProjectCardVisual themeIds={project.themes} />}

      <div className="flex flex-wrap gap-2 mb-4">
        {themeLabels.map((label) => (
          <ThemeBadge key={label} label={label} />
        ))}
      </div>

      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="type-card-title group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        {isLaunchable ? (
          <ArrowUpRight
            size={18}
            className={cn(
              "text-primary shrink-0 transition-transform",
              isInternal && "group-hover:translate-x-0.5",
              isExternal && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            )}
          />
        ) : (
          <ArrowUpRight
            size={18}
            className="text-muted-foreground/40 shrink-0 transition-colors"
          />
        )}
      </div>

      <p className="type-card-body mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        <StageLabelBadge label={`Stage: ${project.stageLabel}`} />
        <ProjectStatusBadge status={project.projectStatus} />
      </div>

      {variant !== "compact" && (
        <div className="border-t border-border pt-4 text-sm text-muted-foreground">
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
        <p className="text-sm text-muted-foreground border-t border-border pt-4 mt-3">
          <span className="font-semibold text-foreground/80">Potential partners: </span>
          {project.potentialPartners.join(" · ")}
        </p>
      )}

      {isLaunchable && (
        <p className="text-sm font-semibold text-primary mt-4 pt-3 border-t border-border group-hover:underline">
          Launch system
        </p>
      )}
    </motion.article>
  );

  if (!launchUrl) {
    return card;
  }

  if (isInternal) {
    return (
      <Link href={launchUrl} className="block" aria-label={`Open ${project.title}`}>
        {card}
      </Link>
    );
  }

  return (
    <a
      href={launchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`Launch ${project.title} (opens in new tab)`}
    >
      {card}
    </a>
  );
}
