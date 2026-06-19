"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { isGsaiAppPath } from "@/projects/government-services-ai/utils/routes";
import { isXyAppPath } from "@/projects/x-y/utils/routes";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideMarketingChrome =
    isGsaiAppPath(pathname) ||
    isXyAppPath(pathname) ||
    pathname.startsWith("/projects/resilience-resource-optimizer");

  if (hideMarketingChrome) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
