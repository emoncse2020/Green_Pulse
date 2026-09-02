"use client";

import CountUp from "react-countup";
import { impactStatsData } from "@/data/home";

export function ImpactStatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:-mt-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {impactStatsData.map((stat, i) => (
          <div
            key={i}
            className="rounded-2xl border border-emerald-900/10 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-lime-400/10 dark:bg-emerald-950/50"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-lime-100">
              <stat.icon className="h-5 w-5" />
            </div>
            <h4 className="font-display text-3xl italic text-emerald-950 dark:text-lime-100 md:text-4xl">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                enableScrollSpy
                scrollSpyOnce
                scrollSpyDelay={100}
                duration={2.2}
              />
            </h4>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
