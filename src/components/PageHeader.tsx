"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ label, title, description, className }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={cn("max-w-3xl mb-10 md:mb-12", className)}
    >
      {label && <span className="label-mono mb-3 block">{label}</span>}
      <h1 className="type-page-title mb-4">{title}</h1>
      {description && <p className="type-page-lead">{description}</p>}
    </motion.header>
  );
}
