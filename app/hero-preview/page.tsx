import type { Metadata } from "next";
import HeroPreviewPage from "@/views/hero-preview";

export const metadata: Metadata = {
  title: "Hero Image Preview",
  description: "Choose a homepage hero image for Phaarvai.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HeroPreviewPage />;
}
