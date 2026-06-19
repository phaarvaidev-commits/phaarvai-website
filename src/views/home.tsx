"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteContent, positioningLines } from "@/content/site";
import { themes } from "@/content/themes";
import { getFeaturedProjects } from "@/content/projects";
import { HeroSection } from "@/components/HeroSection";
import { ThemeCard } from "@/components/ThemeCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemsStackVisual } from "@/components/SystemsStackVisual";
import { SystemFlowVisual } from "@/components/infrastructure";
import { CTASection } from "@/components/CTASection";
import { PageSEO } from "@/components/PageSEO";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.35 },
};

export default function Home() {
  const {
    hero,
    whatWeDo,
    domainsSection,
    featuredProjects,
    institutionalSection,
    partnerCta,
  } = siteContent;
  const featured = getFeaturedProjects();

  return (
    <>
      <PageSEO
        title={positioningLines.main}
        description={hero.subheadline}
        path="/"
      />

      <HeroSection
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
        ctaTertiary={hero.ctaTertiary}
        badges={hero.badges}
      />

      <section className="section-y-compact section-highlight" aria-label="What we do">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h2 className="type-section-title mb-4 md:mb-5">{whatWeDo.title}</h2>
            <p className="type-section-lead">{whatWeDo.statement}</p>
          </motion.div>
        </div>
      </section>

      <SystemsStackVisual />

      <section className="pb-12 md:pb-14 bg-background" aria-label="AI system flow">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn}>
            <SystemFlowVisual />
          </motion.div>
        </div>
      </section>

      <section className="section-y bg-background" aria-label="Operational domains">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
            <div>
              <h2 className="type-section-title">{domainsSection.title}</h2>
              {domainsSection.subtitle && (
                <p className="type-body mt-2 max-w-xl">{domainsSection.subtitle}</p>
              )}
            </div>
            <Link
              href="/themes"
              className="inline-flex items-center text-primary font-semibold text-base hover:underline gap-1 shrink-0"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {themes.map((theme, idx) => (
              <ThemeCard key={theme.id} theme={theme} delay={idx * 0.03} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y section-alt border-y border-border" aria-label="Deployed systems">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-4 mb-5 md:mb-6">
            <div>
              <span className="label-mono mb-2 block">{featuredProjects.label}</span>
              <h2 className="type-section-title">{featuredProjects.title}</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-primary font-semibold text-base hover:underline gap-1 shrink-0"
            >
              All systems <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="type-body mb-8 md:mb-10 max-w-xl">{featuredProjects.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-label="Institutional environments">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="max-w-3xl mb-8 md:mb-10">
            <h2 className="type-section-title mb-4 md:mb-5">{institutionalSection.title}</h2>
            <p className="type-section-lead">{institutionalSection.statement}</p>
          </motion.div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {institutionalSection.points.map((point, idx) => (
              <motion.li
                key={point}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                className="flex items-start gap-3 type-body text-foreground/90 bg-card border border-border rounded-xl p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={partnerCta.title}
        description={partnerCta.description}
        buttonLabel={partnerCta.primary.label}
        buttonHref={partnerCta.primary.href}
        secondaryLabel={partnerCta.secondary.label}
        secondaryHref={partnerCta.secondary.href}
      />
    </>
  );
}
