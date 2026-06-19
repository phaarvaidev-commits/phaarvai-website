"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  activeHeroImageId,
  heroImageOptions,
  HERO_IMAGE_STORAGE_KEY,
  type HeroImageId,
} from "@/content/heroImages";
import { clearHeroImagePreview, setHeroImagePreview } from "@/hooks/useActiveHeroImage";
import { Button } from "@/components/ui/button";

export default function HeroPreviewPage() {
  const router = useRouter();
  const [previewId, setPreviewId] = useState<HeroImageId | null>(null);
  const [storedId, setStoredId] = useState<string | null>(null);

  useEffect(() => {
    setStoredId(localStorage.getItem(HERO_IMAGE_STORAGE_KEY));
  }, []);

  const effectiveId = previewId ?? storedId ?? activeHeroImageId;

  function applyToHomepage(id: HeroImageId) {
    setHeroImagePreview(id);
    setStoredId(id);
    setPreviewId(id);
    router.push(`/?hero=${id}`);
  }

  function resetPreview() {
    clearHeroImagePreview();
    setStoredId(null);
    setPreviewId(null);
    router.push("/");
  }

  return (
    <article className="pt-28 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <p className="label-mono mb-3">Hero image</p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Choose a homepage prototype
        </h1>
        <p className="text-muted-foreground mb-2 max-w-2xl">
          Pick a hero image for the homepage. Use <strong>Apply to homepage</strong> to preview
          instantly in this browser, or set a permanent default via config / env.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Committed default:{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{activeHeroImageId}</code>
          {storedId && (
            <>
              {" "}
              · Browser preview:{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{storedId}</code>
            </>
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heroImageOptions.map((option) => {
            const isActive = option.id === effectiveId;
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
                      Selected
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-1">{option.label}</h2>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-2">{option.src}</p>
                  </div>
                  <Button
                    type="button"
                    className="w-full"
                    variant={isActive ? "default" : "outline"}
                    onClick={() => applyToHomepage(option.id)}
                  >
                    Apply to homepage
                  </Button>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 space-y-3">
          <h2 className="text-sm font-bold text-foreground">Use a new prototype file</h2>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>
              Save your image as{" "}
              <code className="text-xs bg-muted px-1 rounded">public/images/hero-prototype.png</code>
            </li>
            <li>
              Select <strong>Design prototype</strong> above, or set{" "}
              <code className="text-xs bg-muted px-1 rounded">NEXT_PUBLIC_HERO_IMAGE=/images/your-file.png</code>
            </li>
            <li>
              For a permanent site default, set{" "}
              <code className="text-xs bg-muted px-1 rounded">activeHeroImageId</code> in{" "}
              <code className="text-xs bg-muted px-1 rounded">src/content/heroImages.ts</code>
            </li>
          </ol>
          {storedId && (
            <Button type="button" variant="ghost" onClick={resetPreview}>
              Clear browser preview (use committed default)
            </Button>
          )}
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/" className="text-primary font-semibold hover:underline">
            ← View homepage
          </Link>
          <Link href={`/?hero=${effectiveId}`} className="text-muted-foreground hover:underline text-sm">
            Share preview link
          </Link>
        </div>
      </div>
    </article>
  );
}
