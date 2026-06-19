"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { siteContent } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.38 },
};

export default function About() {
  const { aboutPage, partnerCta } = siteContent;

  return (
    <>
      <PageSEO
        title="About — Applied AI & Intelligent Infrastructure"
        description={aboutPage.description}
        path="/about"
      />

      <article className="page-top bg-background">
        <motion.div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="About"
            title={aboutPage.title}
            description={`${aboutPage.description} ${aboutPage.context}`}
          />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16" aria-label="Mission and Vision">
            <motion.div {...fadeIn} className="bg-card border border-border rounded-2xl p-8">
              <span className="label-mono mb-3 block">Mission</span>
              <p className="text-xl font-semibold text-foreground leading-relaxed">
                {aboutContent.mission}
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.06 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <span className="label-mono mb-3 block">Vision</span>
              <p className="text-xl font-semibold text-foreground leading-relaxed">
                {aboutContent.vision}
              </p>
            </motion.div>
          </section>

          <section className="mb-16" aria-label="Delivery scale">
            <motion.h2 {...fadeIn} className="type-subsection-title mb-6 md:mb-8">
              Scale & Delivery
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aboutContent.deliveryMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="glass-panel rounded-xl p-5 border border-border text-center"
                >
                  <p className="stat-number text-2xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-label="What we build">
            <motion.h2 {...fadeIn} className="type-subsection-title mb-6">
              What we build
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aboutContent.positioning.map((item, idx) => (
                <motion.li
                  key={item}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                  className="flex items-start gap-3 type-body bg-card border border-border rounded-lg px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </section>

          <section aria-label="Values">
            <motion.h2 {...fadeIn} className="type-subsection-title mb-6 md:mb-8">
              Values
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutContent.values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <h3 className="text-base font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="type-card-body">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
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
