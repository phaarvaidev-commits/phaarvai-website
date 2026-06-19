"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { InfrastructureMeshVisual, OperationalDashboardVisual } from "@/components/infrastructure";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export function SystemsStackVisual() {
  const { systemsStack } = siteContent;

  return (
    <section className="section-y section-alt border-y border-border" aria-label="Systems architecture">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div {...fadeIn} className="text-center mb-12 max-w-2xl mx-auto">
          <p className="label-mono mb-3">Infrastructure</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{systemsStack.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-3">
            {systemsStack.layers.map((layer, idx) => (
              <motion.div
                key={layer.label}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.06 }}
                className="relative flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 card-hover"
              >
                <span className="text-xs font-mono font-bold text-primary w-6 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground">{layer.label}</p>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </div>
                <div
                  className="hidden sm:block w-12 h-1 rounded-full bg-gradient-to-r from-primary/60 to-primary/10 shrink-0 animate-pulse-glow"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.12 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <InfrastructureMeshVisual className="min-h-[240px]" />
            <OperationalDashboardVisual className="min-h-[240px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
