"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { IdeaCard } from "@/components/shared/IdeaCard";
import { IdeaCardSkeleton } from "@/components/shared/IdeaCardSkeleton";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Idea } from "@/types";

function unwrapIdeas(payload: unknown): Idea[] {
  if (Array.isArray(payload)) return payload as Idea[];
  if (payload && typeof payload === "object" && "data" in payload) {
    const data = (payload as { data: unknown }).data;
    if (Array.isArray(data)) return data as Idea[];
  }
  return [];
}

export function FeaturedIdeasSection() {
  const { data: ideas, isLoading } = useQuery({
    queryKey: ["featured-ideas"],
    queryFn: async () => {
      const response = await api.get("/ideas?limit=8");
      return unwrapIdeas(response);
    },
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        title="Ideas growing in the garden"
        subtitle="Approved climate proposals from the Green Pulse community — filter by category, search, and support what should scale."
        badge="Featured"
      />

      <div className="min-h-[280px]">
        {isLoading ? (
          <IdeaCardSkeleton count={8} />
        ) : ideas && ideas.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-emerald-800/20 bg-white/40 px-6 py-16 text-center dark:bg-emerald-950/30">
            <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300">
              No approved ideas yet. Seed the API or publish your first proposal.
            </p>
            <Link href="/register" className="mt-4 inline-block text-sm font-semibold text-emerald-700">
              Create an account →
            </Link>
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild className="h-12 rounded-full bg-emerald-700 px-8 text-white hover:bg-emerald-800">
          <Link href="/ideas">
            Explore every idea
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
