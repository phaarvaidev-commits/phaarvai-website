"use client";

import Link from "next/link";
import { heroImageOptions, activeHeroImageId } from "@/content/heroImages";

export default function HeroPreviewPage() {
  return (
    <article className="pt-28 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <p className="label-mono mb-3">Hero image selection</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Choose your homepage image
        </h1>
        <p className="text-muted-foreground mb-2 max-w-2xl">
          Four mild dark + light AI hero options. Current active image:{" "}
          <span className="font-semibold text-foreground">{activeHeroImageId}</span>
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          Tell me your choice (Option 1–4) and I will set it as the final homepage hero.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heroImageOptions.map((option) => {
            const isActive = option.id === activeHeroImageId;
            return (
              <section
                key={option.id}
                className={`rounded-2xl border overflow-hidden bg-card ${
                  isActive ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                <div className="relative aspect-[4/3] bg-muted">
                  <img
                    src={option.src}
                    alt={option.label}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {isActive && (
                    <span className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                      Current
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-foreground mb-1">{option.label}</h2>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-3">{option.src}</p>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10">
          <Link href="/" className="text-primary font-semibold hover:underline">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </article>
  );
}
