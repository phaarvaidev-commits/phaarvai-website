import type { Metadata } from "next";
import HomePage from "@/views/home";
import { positioningLines } from "@/content/site";

export const metadata: Metadata = {
  title: `Phaarvai — ${positioningLines.main}`,
  description: positioningLines.hero,
  openGraph: {
    url: "https://phaarvai.com",
    title: `Phaarvai — ${positioningLines.main}`,
    description: positioningLines.hero,
  },
};

export default function Page() {
  return <HomePage />;
}
