"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  getActiveHeroImage,
  getHeroImageById,
  resolveHeroImage,
  HERO_IMAGE_STORAGE_KEY,
  type HeroImageOption,
} from "@/content/heroImages";

export function useActiveHeroImage(): HeroImageOption {
  const searchParams = useSearchParams();
  const [image, setImage] = useState<HeroImageOption>(() => getActiveHeroImage());

  useEffect(() => {
    const queryId = searchParams.get("hero");
    const storedId =
      typeof window !== "undefined" ? localStorage.getItem(HERO_IMAGE_STORAGE_KEY) : null;
    const overrideId = queryId ?? storedId;

    if (overrideId && getHeroImageById(overrideId)) {
      setImage(resolveHeroImage(overrideId));
      return;
    }

    setImage(getActiveHeroImage());
  }, [searchParams]);

  return image;
}

export function setHeroImagePreview(id: string): void {
  localStorage.setItem(HERO_IMAGE_STORAGE_KEY, id);
}

export function clearHeroImagePreview(): void {
  localStorage.removeItem(HERO_IMAGE_STORAGE_KEY);
}
