"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";

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
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          {systemsStack.title}
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-3">
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
                className="hidden sm:block w-16 h-1 rounded-full bg-gradient-to-r from-primary/60 to-primary/10 shrink-0 animate-pulse-glow"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
