"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stages = [
  { id: "signals", label: "Signals", detail: "Telemetry & data" },
  { id: "pipeline", label: "Pipeline", detail: "Streaming architecture" },
  { id: "intelligence", label: "Intelligence", detail: "AI orchestration" },
  { id: "platform", label: "Platform", detail: "Operational apps" },
  { id: "deploy", label: "Deploy", detail: "Institutional rollout" },
];

export function SystemFlowVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative rounded-2xl border border-border bg-card overflow-hidden ${
        compact ? "p-4 md:p-5" : "p-6 md:p-8"
      }`}
      aria-label="AI system flow"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <p className="relative label-mono mb-4 md:mb-5">
        System flow
      </p>

      <div className="relative flex flex-col md:flex-row md:items-stretch gap-3 md:gap-2">
        {stages.map((stage, i) => (
          <div key={stage.id} className="flex md:flex-1 items-center gap-2 min-w-0">
            <motion.div
              className={`flex-1 min-w-0 rounded-xl border border-border bg-background/90 card-hover ${
                compact ? "px-4 py-4" : "px-4 py-4 md:px-5 md:py-5"
              }`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-primary/80">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm md:text-base font-bold text-foreground truncate">{stage.label}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-snug truncate">{stage.detail}</p>
              <motion.div
                className="mt-2.5 h-1 rounded-full bg-primary/20 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-primary/70 infra-flow-bar"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </motion.div>
            </motion.div>

            {i < stages.length - 1 && (
              <ArrowRight
                size={compact ? 18 : 20}
                className="hidden md:block text-primary/40 shrink-0"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
