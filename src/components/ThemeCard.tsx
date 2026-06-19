"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Theme } from "@/content/themes";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
  theme: Theme;
  className?: string;
  delay?: number;
  compact?: boolean;
}

export function ThemeCard({ theme, className, delay = 0, compact = false }: ThemeCardProps) {
  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn("h-full", className)}
    >
      <Link
        href={theme.href}
        className={cn(
          "group flex flex-col h-full bg-card border border-border rounded-2xl card-hover",
          compact ? "p-4" : "p-6"
        )}
      >
        <motion.div
          className={cn(
            "w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200",
            compact ? "mb-3" : "mb-5"
          )}
          whileHover={{ scale: 1.04 }}
        >
          <Icon size={compact ? 18 : 20} strokeWidth={1.75} />
        </motion.div>
        <h3 className="type-card-title text-base md:text-lg group-hover:text-primary transition-colors leading-snug">
          {theme.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed flex-grow",
            compact ? "text-sm md:text-base mt-2 line-clamp-4" : "text-base mt-2"
          )}
        >
          {theme.shortDescription}
        </p>
        {!compact && (
          <span className="inline-flex items-center gap-1.5 text-base font-semibold text-primary mt-5 group-hover:gap-2.5 transition-all">
            Explore theme <ArrowRight size={15} />
          </span>
        )}
      </Link>
    </motion.div>
  );
}
