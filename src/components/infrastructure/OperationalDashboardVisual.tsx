"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Ingestion", value: "50K", unit: "TPS", progress: 82 },
  { label: "Active agents", value: "128", unit: "nodes", progress: 64 },
  { label: "Governed records", value: "100M", unit: "+", progress: 91 },
  { label: "Uptime", value: "99.9", unit: "%", progress: 99 },
];

const bars = [42, 68, 55, 74, 61, 88, 72, 80];

export function OperationalDashboardVisual({ className }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-border bg-card overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent" />
      <div className="relative p-5 md:p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-1">
              Operations console
            </p>
            <p className="text-sm font-semibold text-foreground">System health overview</p>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            LIVE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="glass-panel rounded-xl p-3 border border-border"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="text-[10px] text-muted-foreground mb-1">{metric.label}</p>
              <p className="stat-number text-lg font-bold text-foreground">
                {metric.value}
                <span className="text-xs font-normal text-muted-foreground ml-0.5">{metric.unit}</span>
              </p>
              <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary/70"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-background/80 p-3">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
            Throughput (24h)
          </p>
          <div className="flex items-end gap-1 h-16">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary/80"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
