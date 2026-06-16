import type { Metadata } from "next";
import AboutPage from "@/views/about";

export const metadata: Metadata = {
  title: "About — Applied AI & Intelligent Infrastructure",
  description:
    "Phaarvai builds deployable AI systems and intelligent infrastructure for governments, institutions, and complex operational environments.",
};

export default function Page() {
  return <AboutPage />;
}

