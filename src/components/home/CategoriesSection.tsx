"use client";

import { categoryHighlights } from "@/data/home";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export function CategoriesSection() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response: { data?: { id: string; name: string; description?: string }[] } =
        await api.get("/categories");
      return response.data ?? [];
    },
  });

  const categories =
    data && data.length > 0
      ? data
      : categoryHighlights.map((c) => ({
          id: c.name,
          name: c.name,
          description: c.hint,
        }));

  return (
    <section className="border-y border-emerald-900/10 bg-white/50 py-16 dark:border-lime-400/10 dark:bg-emerald-950/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-lime-300">
              Fields of work
            </p>
            <h2 className="mt-2 font-display text-3xl italic text-zinc-900 dark:text-white">
              Browse by the systems we need to heal
            </h2>
          </div>
          <Link
            href="/ideas"
            className="hidden text-sm font-semibold text-emerald-800 hover:underline dark:text-lime-300 sm:block"
          >
            See all ideas →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={data && data.length > 0 ? `/ideas?categoryId=${cat.id}` : `/ideas?searchTerm=${encodeURIComponent(cat.name)}`}
              className="group rounded-2xl border border-emerald-900/10 bg-[#fffcf6] p-5 transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-lg dark:border-white/10 dark:bg-emerald-950/60"
            >
              <h3 className="text-lg font-semibold text-emerald-950 group-hover:text-emerald-700 dark:text-lime-100">
                {cat.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                {cat.description || "Open approved ideas in this category."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
