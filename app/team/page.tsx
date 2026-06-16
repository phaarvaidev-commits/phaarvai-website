import type { Metadata } from "next";
import TeamPage from "@/views/team";

export const metadata: Metadata = {
  title: "Team — Applied AI & Infrastructure",
  description:
    "Engineers and operators with enterprise-scale infrastructure, AI security, digital twin, and institutional deployment experience.",
  openGraph: {
    url: "https://phaarvai.com/team",
    title: "Team — Phaarvai",
    description:
      "Engineers and operators with enterprise-scale infrastructure, AI security, digital twin, and institutional deployment experience.",
  },
};

export default function Page() {
  return <TeamPage />;
}
