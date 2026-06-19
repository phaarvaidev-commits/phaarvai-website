"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "light" | "accent";
}

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
  variant = "accent",
}: CTASectionProps) {
  const isAccent = variant === "accent";

  return (
    <section
      className={
        isAccent
          ? "py-14 md:py-16 relative overflow-hidden section-cta"
          : "py-14 md:py-16 bg-muted/50 border-y border-border"
      }
    >
      {isAccent && (
        <>
          <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="type-section-title mb-4">{title}</h2>
          <p className="type-body mb-8 max-w-xl mx-auto">{description}</p>
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={buttonHref}>
              <Button size="lg" className="h-12 px-9 text-base font-semibold hover-elevate gap-2 group">
                {buttonLabel}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref}>
                <Button size="lg" variant="outline" className="h-12 px-9 text-base font-semibold">
                  {secondaryLabel}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
