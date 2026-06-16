import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SiteChrome } from "@/components/SiteChrome";
import { positioningLines } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `Phaarvai — ${positioningLines.main}`,
    template: "%s | Phaarvai",
  },
  description: positioningLines.hero,
  openGraph: {
    type: "website",
    siteName: "Phaarvai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
