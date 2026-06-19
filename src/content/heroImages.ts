export const HERO_IMAGE_STORAGE_KEY = "phaarvai-hero-image-id";

export const heroImageOptions = [
  {
    id: "user-selected",
    label: "Waves of Intelligence",
    description: "Calm AI data waves and neural connections in mild dark + light tones.",
    src: "/images/hero-home.png",
  },
  {
    id: "infrastructure",
    label: "AI Infrastructure",
    description: "Operational technology and intelligent infrastructure visual.",
    src: "/images/hero-ai-infrastructure.png",
  },
  {
    id: "prototype",
    label: "Design prototype",
    description:
      "Latest prototype image — replace the file at public/images/hero-prototype.png or set NEXT_PUBLIC_HERO_IMAGE.",
    src: "/images/hero-prototype.png",
  },
] as const;

export type HeroImageId = (typeof heroImageOptions)[number]["id"];

export interface HeroImageOption {
  id: HeroImageId | string;
  label: string;
  description: string;
  src: string;
}

/** Default hero — change this id when a new prototype is approved. */
export const activeHeroImageId: HeroImageId = "user-selected";

export function getHeroImageById(id: string): HeroImageOption | undefined {
  return heroImageOptions.find((option) => option.id === id);
}

/** Resolve hero from env, optional override id (preview / localStorage / ?hero=). */
export function resolveHeroImage(overrideId?: string | null): HeroImageOption {
  const customSrc = process.env.NEXT_PUBLIC_HERO_IMAGE?.trim();
  if (customSrc) {
    return {
      id: "user-selected",
      label: "Custom (env)",
      description: "Configured via NEXT_PUBLIC_HERO_IMAGE",
      src: customSrc,
    };
  }

  const envId = process.env.NEXT_PUBLIC_HERO_IMAGE_ID?.trim();
  const id = overrideId ?? envId ?? activeHeroImageId;
  return getHeroImageById(id) ?? heroImageOptions[0];
}

export function getActiveHeroImage(): HeroImageOption {
  return resolveHeroImage();
}
