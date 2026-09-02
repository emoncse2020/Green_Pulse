"use client";

import { useState } from "react";
import { ArrowRight, Search, Sparkles, Wind } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const popular = ["Solar", "Compost", "Water reuse", "Mobility"];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <section className="relative overflow-hidden grain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(101,163,13,0.18),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(21,128,61,0.16),transparent_45%)]" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-lime-400/25 blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/70 px-3 py-1.5 text-sm font-semibold text-emerald-800 shadow-sm backdrop-blur dark:border-lime-400/20 dark:bg-emerald-950/60 dark:text-lime-200">
            <Sparkles className="h-4 w-4" />
            Community climate lab — 2026
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            Ideas with a living pulse for a{" "}
            <span className="font-display italic font-medium text-emerald-700 dark:text-lime-300">
              greener planet
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Green Pulse is where makers, cities, and neighbors publish sustainability
            ideas, vote on what should scale, and fund the work that actually ships.
          </p>

          <form
            className="mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/ideas?searchTerm=${encodeURIComponent(searchQuery)}`);
            }}
          >
            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center rounded-2xl border border-emerald-900/10 bg-white/90 px-3 shadow-lg shadow-emerald-900/5 backdrop-blur dark:border-lime-400/15 dark:bg-emerald-950/70">
                <Search className="h-5 w-5 shrink-0 text-emerald-700 dark:text-lime-300" />
                <Input
                  placeholder="Search solar, water, waste…"
                  className="h-12 border-0 bg-transparent text-base shadow-none focus-visible:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Link href={`/ideas?searchTerm=${encodeURIComponent(searchQuery)}`}>
                <Button className="h-12 w-full rounded-2xl bg-emerald-700 px-7 text-white hover:bg-emerald-800 dark:bg-lime-400 dark:text-emerald-950 dark:hover:bg-lime-300">
                  Search ideas
                </Button>
              </Link>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <span className="font-medium">Try:</span>
            {popular.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSearchQuery(tag)}
                className="rounded-full border border-emerald-900/10 bg-white/60 px-3 py-1 font-medium text-emerald-900 hover:border-emerald-600 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-lime-100"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/register">
              <Button className="h-11 rounded-full bg-emerald-700 px-6 text-white hover:bg-emerald-800">
                Start an idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/ideas">
              <Button variant="outline" className="h-11 rounded-full border-emerald-800/20 bg-white/50 px-6">
                Browse the garden
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-600/20 via-lime-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-emerald-950 text-lime-50 shadow-2xl dark:border-lime-400/20">
            <img
              src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop"
              alt="Forest canopy"
              className="h-64 w-full object-cover opacity-80 sm:h-72"
            />
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-lime-300">
                <Wind className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Live from the field
                </span>
              </div>
              <p className="font-display text-2xl italic leading-snug">
                Fifteen new field ideas — shared batteries, cool roofs, walk trains,
                cisterns, mangrove nurseries — written for Green Pulse, not a leftover brief.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                {[
                  ["Energy", "3"],
                  ["Waste", "3"],
                  ["Water", "3"],
                ].map(([label, count]) => (
                  <div key={label} className="rounded-2xl bg-white/5 px-2 py-3">
                    <div className="text-xl font-semibold">{count}</div>
                    <div className="text-[11px] uppercase tracking-wider text-lime-200/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
