import { cn } from "@/lib/utils";
import type { ProjectStage, ProjectStatus } from "@/content/types";

const stageStyles: Record<ProjectStage, string> = {
  Development: "bg-sky-50 text-sky-800 border-sky-200",
  Pilot: "bg-teal-50 text-teal-800 border-teal-200",
  Production: "bg-indigo-50 text-indigo-800 border-indigo-200",
  Deployed: "bg-violet-50 text-violet-800 border-violet-200",
  Live: "bg-emerald-50 text-emerald-800 border-emerald-200",
};

const statusStyles: Record<ProjectStatus, string> = {
  "In development": "bg-slate-50 text-slate-700 border-slate-200",
  "Pilot deployment": "bg-teal-50 text-teal-800 border-teal-200",
  "Live system": "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Partner-ready": "bg-blue-50 text-blue-800 border-blue-200",
  Operational: "bg-violet-50 text-violet-800 border-violet-200",
};

interface StageLabelBadgeProps {
  label: string;
  className?: string;
}

export function StageLabelBadge({ label, className }: StageLabelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide bg-muted text-foreground/80 border-border",
        className
      )}
    >
      {label}
    </span>
  );
}

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}

export function StatusBadge({ stage, className }: { stage: ProjectStage; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide",
        stageStyles[stage],
        className
      )}
    >
      {stage}
    </span>
  );
}

interface ThemeBadgeProps {
  label: string;
  className?: string;
}

export function ThemeBadge({ label, className }: ThemeBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border",
        className
      )}
    >
      {label}
    </span>
  );
}
