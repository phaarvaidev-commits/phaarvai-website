"use client";

import { Suspense } from "react";
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
    <section className="relative min-h-[88vh] flex items-center pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 right-[-10%] w-[55vw] max-w-[720px] h-[55vw] max-h-[720px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-[-15%] w-[40vw] max-w-[480px] h-[40vw] max-h-[480px] rounded-full bg-primary/6 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-24 items-center lg:items-center">
          <motion.div
            className="max-w-2xl lg:max-w-none lg:pr-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
          >
            {badges && badges.length > 0 && (
              <motion.div
                className="mb-8 md:mb-10"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                {badges.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-sm font-mono tracking-[0.12em] uppercase text-primary bg-primary/8 border border-primary/15 px-4 py-2.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="hero-headline text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold leading-[1.02] tracking-[-0.025em] mb-8 md:mb-10 text-foreground"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {headline}
            </motion.h1>

            <motion.p
              className="text-xl md:text-[1.35rem] text-muted-foreground leading-[1.65] mb-12 md:mb-14 max-w-[38rem]"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <Button
                    size="lg"
                    className="h-[3.25rem] px-9 font-semibold hover-elevate gap-2 group text-base shadow-sm"
                  >
                    {ctaPrimary.label}
                    <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-[3.25rem] px-9 font-semibold hover-elevate text-base bg-background/80"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
              {ctaTertiary && (
                <Link href={ctaTertiary.href}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-[3.25rem] px-9 font-semibold text-muted-foreground hover:text-foreground text-base"
                  >
                    {ctaTertiary.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense
              fallback={
                <div className="aspect-[5/4] lg:aspect-[4/3] rounded-3xl bg-muted border border-border animate-pulse min-h-[280px] lg:min-h-[360px]" />
              }
            >
              <HeroVisualLight />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
