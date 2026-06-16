import type { Metadata } from "next";
import ThemesPage from "@/views/themes";

export const metadata: Metadata = {
  title: "Operational Domains — Phaarvai",
  description:
    "Applied AI across infrastructure, institutions, and operational systems.",
};

export default function Page() {
  return <ThemesPage />;
}
