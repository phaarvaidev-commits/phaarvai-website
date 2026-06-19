"use client";

import { useActiveHeroImage } from "@/hooks/useActiveHeroImage";

export function HeroVisualLight() {
  const heroImage = useActiveHeroImage();

  return (
    <div className="relative lg:pl-2">
      <div
        className="absolute -inset-4 md:-inset-5 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-md pointer-events-none"
        aria-hidden
      />

      <div className="relative rounded-3xl overflow-hidden border border-border/90 bg-card shadow-[0_32px_80px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.03]">
        <div className="relative aspect-[5/4] sm:aspect-[4/3] min-h-[280px] md:min-h-[320px] lg:min-h-[400px] bg-muted">
          <img
            key={heroImage.src}
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
