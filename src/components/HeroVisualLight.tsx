"use client";

import { getActiveHeroImage } from "@/content/heroImages";

export function HeroVisualLight() {
  const heroImage = getActiveHeroImage();

  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-sm pointer-events-none"
        aria-hidden
      />

      <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)]">
        <div className="relative aspect-[4/3] bg-muted">
          <img
            src={heroImage.src}
            alt={heroImage.description}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
