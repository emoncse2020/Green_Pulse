"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  children,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-14 w-full",
        align === "center" ? "mx-auto max-w-3xl text-center" : "text-left",
        className,
      )}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center rounded-full border border-emerald-700/20 bg-lime-100/80 px-3 py-1 dark:border-lime-400/20 dark:bg-lime-400/10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 dark:text-lime-300">
            {badge}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl italic tracking-tight text-zinc-900 dark:text-white md:text-5xl mb-4",
          align === "left" && "text-left",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-zinc-600 dark:text-zinc-400",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
};
