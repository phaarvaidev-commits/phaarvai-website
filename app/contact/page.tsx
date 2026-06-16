import type { Metadata } from "next";
import ContactPage from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact — Institutional Partnerships",
  description:
    "Partner with Phaarvai on applied AI systems, intelligent infrastructure, and institutional deployments.",
  openGraph: {
    url: "https://phaarvai.com/contact",
    title: "Contact Phaarvai",
  },
};

export default function Page() {
  return <ContactPage />;
}
