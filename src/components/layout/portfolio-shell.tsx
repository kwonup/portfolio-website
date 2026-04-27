import type { ReactNode } from "react";

import { HeroSection } from "@/components/sections/hero";
import { PointerGradient } from "@/components/layout/pointer-gradient";

type PortfolioShellProps = {
  children: ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[1760px] px-6 py-8 sm:px-10 lg:px-8 lg:py-0 2xl:px-4">
      <PointerGradient />
      <a
        href="#about"
        className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50"
      >
        본문으로 이동
      </a>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(320px,0.36fr)_minmax(0,0.64fr)] lg:gap-20 xl:grid-cols-[minmax(390px,460px)_minmax(760px,1fr)] xl:gap-28 2xl:grid-cols-[minmax(430px,500px)_minmax(900px,1fr)] 2xl:gap-36">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20">
          <HeroSection />
        </aside>
        <main id="content" className="w-full pb-20 lg:py-20">
          {children}
        </main>
      </div>
    </div>
  );
}
