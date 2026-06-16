"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroVisualLight } from "@/components/HeroVisualLight";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  ctaTertiary?: { label: string; href: string };
  badges?: string[];
}

export function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  ctaTertiary,
  badges,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-24 right-0 w-[50vw] max-w-[600px] h-[50vw] rounded-full bg-primary/8 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {badges && badges.length > 0 && (
              <motion.div
                className="mb-6"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                {badges.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono tracking-[0.1em] uppercase text-primary/90 bg-primary/6 border border-primary/12 px-3.5 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.08] mb-6 text-foreground"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {headline}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <Button size="lg" className="h-12 px-8 font-semibold hover-elevate gap-2 group text-base">
                    {ctaPrimary.label}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <Button size="lg" variant="outline" className="h-12 px-8 font-semibold hover-elevate text-base">
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
              {ctaTertiary && (
                <Link href={ctaTertiary.href}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-12 px-8 font-semibold text-muted-foreground hover:text-foreground text-base"
                  >
                    {ctaTertiary.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <HeroVisualLight />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
