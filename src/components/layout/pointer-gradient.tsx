"use client";

import { useEffect, useRef } from "react";

export function PointerGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = gradientRef.current;

    if (!element || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      element.style.setProperty("--pointer-x", `${event.clientX}px`);
      element.style.setProperty("--pointer-y", `${event.clientY}px`);
      element.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      element.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(520px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.035) 28%, transparent 58%)",
      }}
    />
  );
}
