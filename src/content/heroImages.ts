export const heroImageOptions = [
  {
    id: "user-selected",
    label: "Selected — Waves of Intelligence",
    description: "Calm AI data waves and neural connections in mild dark + light tones.",
    src: "/images/hero-home.png",
  },
  {
    id: "option-1",
    label: "Option 1 — Twilight Teal",
    description: "Soft dark-to-light teal gradient with neural network glow.",
    src: "/images/hero-options/option-1-twilight.png",
  },
  {
    id: "option-2",
    label: "Option 2 — Slate Mist",
    description: "Muted slate blue fading into light mist white.",
    src: "/images/hero-options/option-2-slate-mist.png",
  },
  {
    id: "option-3",
    label: "Option 3 — Dusk Pearl",
    description: "Mild navy-teal edges with pearl white center glow.",
    src: "/images/hero-options/option-3-dusk-pearl.png",
  },
  {
    id: "option-4",
    label: "Option 4 — Charcoal Ivory",
    description: "Charcoal and ivory blend with subtle teal accents.",
    src: "/images/hero-options/option-4-charcoal-ivory.png",
  },
] as const;

/** Active hero image id: user-selected | option-1 | option-2 | option-3 | option-4 */
export const activeHeroImageId = "user-selected";

export function getActiveHeroImage() {
  return (
    heroImageOptions.find((o) => o.id === activeHeroImageId) ?? heroImageOptions[2]
  );
}
