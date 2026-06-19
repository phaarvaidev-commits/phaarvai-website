"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "ingest", label: "Ingest", x: 12, y: 50 },
  { id: "stream", label: "Stream", x: 28, y: 22 },
  { id: "ai", label: "AI Core", x: 50, y: 50 },
  { id: "trust", label: "Trust", x: 72, y: 22 },
  { id: "ops", label: "Ops", x: 88, y: 50 },
];

const edges: [string, string][] = [
  ["ingest", "stream"],
  ["stream", "ai"],
  ["ingest", "ai"],
  ["ai", "trust"],
  ["ai", "ops"],
  ["trust", "ops"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function InfrastructureMeshVisual({ className }: { className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-border bg-card overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

      <svg viewBox="0 0 100 64" className="relative w-full h-full min-h-[220px] md:min-h-[260px]">
        {edges.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="infra-flow-line"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={4.2}
              className="fill-primary"
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: [0.55, 1, 0.55], scale: [0.95, 1.08, 0.95] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.2 }}
            />
            <circle cx={node.x} cy={node.y} r={7} className="fill-primary/10 stroke-primary/30" strokeWidth={0.4} />
            <text
              x={node.x}
              y={node.y + (node.y > 40 ? 14 : -10)}
              textAnchor="middle"
              className="fill-muted-foreground text-[3.5px] font-mono uppercase tracking-wider"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        <span>Live mesh</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          Operational
        </span>
      </div>
    </div>
  );
}
