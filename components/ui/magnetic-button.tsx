"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  as: Component = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  as?: "button" | "a";
}) {
  const { ref, onMove, onLeave } = useMagnetic(0.25);

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] transition-shadow duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "text-white shadow-[0_0_0_1px_rgba(124,92,255,0.4),0_8px_30px_-8px_rgba(124,92,255,0.7)] hover:shadow-[0_0_0_1px_rgba(124,92,255,0.6),0_12px_40px_-6px_rgba(124,92,255,0.9)] bg-gradient-to-br from-violet via-blue to-cyan"
      : "text-ink bg-white/[0.04] hover:bg-white/[0.08] ring-1 ring-white/10";

  return (
    // @ts-expect-error - polymorphic element
    <Component
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cn(base, styles, className)}
    >
      {children}
    </Component>
  );
}
