"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ArrowUpRightIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [activeHref, setActiveHref] = useState(profile.nav[0]?.href ?? "#about");

  useEffect(() => {
    const updateActiveSection = () => {
      const anchorLine = window.innerHeight * 0.35;
      const current = profile.nav.reduce((active, item) => {
        const section = document.getElementById(item.href.slice(1));

        if (!section) {
          return active;
        }

        const { top } = section.getBoundingClientRect();

        return top <= anchorLine ? item.href : active;
      }, profile.nav[0]?.href ?? "#about");

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <section id="hero" aria-label="소개" className="flex h-full flex-col">
      <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="mb-4 inline-flex rounded-md border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Portfolio
        </p>
        <h1 className="max-w-[9ch] text-5xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-xl font-semibold text-foreground">{profile.title}</p>
        <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">{profile.intro}</p>
      </motion.div>

      <div className="mt-10 lg:mt-16">
        <nav aria-label="섹션 내비게이션" className="hidden lg:block">
          <ul className="space-y-3">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeHref === item.href ? "true" : undefined}
                  className={cn(
                    "group inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
                    activeHref === item.href && "text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-px w-8 bg-muted-foreground/50 transition-all group-hover:w-14 group-hover:bg-primary",
                      activeHref === item.href && "w-14 bg-primary",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-12">
        {profile.socials.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-secondary/40 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
        <a
          href="#projects"
          className="ml-0 inline-flex h-11 items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 text-sm font-semibold text-primary transition hover:bg-primary/15 sm:ml-2"
        >
          프로젝트 보기
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
