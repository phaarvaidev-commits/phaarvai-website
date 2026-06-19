"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { capabilityAreas } from "@/content/capabilities";
import { siteContent } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";
import {
  InfrastructureMeshVisual,
  OperationalDashboardVisual,
} from "@/components/infrastructure";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function Capabilities() {
  const { capabilitiesPage, partnerCta } = siteContent;

  return (
    <>
      <PageSEO
        title="Capabilities — Applied AI & Infrastructure"
        description={capabilitiesPage.subtitle}
        path="/capabilities"
      />

      <article className="page-top bg-background">
        <motion.div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Capabilities"
            title={capabilitiesPage.title}
            description={capabilitiesPage.subtitle}
          />

          <motion.div
            {...fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16"
          >
            <InfrastructureMeshVisual className="min-h-[260px]" />
            <OperationalDashboardVisual className="min-h-[260px]" />
          </motion.div>

          <div className="space-y-12">
            {capabilityAreas.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.section
                  key={cap.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-border pb-12 last:border-0"
                >
                  <div className="lg:col-span-4">
                    <span className="label-mono mb-2 block">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                      <h2 className="type-card-title">{cap.title}</h2>
                    </div>
                    <p className="type-card-body">
                      {cap.description}
                    </p>
                  </div>
                  <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 bg-card border border-border rounded-xl p-4"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-base text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}
          </div>
        </motion.div>

        <CTASection
          title={partnerCta.title}
          description={partnerCta.description}
          buttonLabel={partnerCta.primary.label}
          buttonHref={partnerCta.primary.href}
        />
      </article>
    </>
  );
}
