"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/providers/AuthProvider";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

import { Idea } from "@/types";

type IdeaCardProps = {
  idea: Idea;
};

export const IdeaCard = ({ idea }: IdeaCardProps) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const isAuthor = user?.id === idea.authorId;
  const categoryName = idea.category?.name ?? "Uncategorized";

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return api.delete(`/ideas/${idea.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-ideas"] });
      queryClient.invalidateQueries({ queryKey: ["ideas"] });
      queryClient.invalidateQueries({ queryKey: ["featured-ideas"] });
      toast.success("Idea deleted");
    },
    onError: (err: unknown) => toast.error(String(err)),
  });

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-lime-400/10 dark:bg-emerald-950/40">
      <div className="absolute right-3 top-3 z-10 flex gap-1.5">
        {idea.isPaid && (
          <div className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Paid
          </div>
        )}
        {isAuthor && (
          <div
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white",
              idea.status === "APPROVED"
                ? "bg-emerald-600"
                : idea.status === "REJECTED"
                  ? "bg-rose-500"
                  : "bg-zinc-500",
            )}
          >
            {idea.status}
          </div>
        )}
      </div>

      <div className="aspect-[16/10] overflow-hidden bg-emerald-950/10">
        {idea.images?.[0] ? (
          <img
            src={idea.images[0]}
            alt={idea.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400">
            <span className="text-[10px] font-bold uppercase tracking-widest">No image</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-lime-300">
          {categoryName}
        </p>

        <h3 className="mt-1.5 line-clamp-2 text-base font-semibold leading-snug text-zinc-900 group-hover:text-emerald-800 dark:text-zinc-50">
          {idea.title}
        </h3>

        <p className="mt-2 mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {idea.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-emerald-900/10 pt-3 dark:border-white/10">
          <div className="flex items-center gap-3 text-zinc-500">
            <div className="flex items-center gap-1 text-xs font-semibold">
              <ArrowUp className="h-3.5 w-3.5 text-orange-500" />
              <span>{idea._count?.votes ?? idea.votesCount ?? 0}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>{idea._count?.comments ?? 0}</span>
            </div>
          </div>

          <Link href={`/ideas/${idea.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-full px-3 text-xs font-semibold"
            >
              Read
            </Button>
          </Link>
        </div>

        {isAuthor && (
          <div className="mt-3 flex items-center gap-1.5 border-t border-emerald-900/5 pt-3">
            <Link href={`/member-dashboard/ideas/${idea.id}/edit`} className="flex-1">
              <Button variant="outline" size="sm" className="h-8 w-full text-xs">
                Edit
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 flex-1 text-xs text-rose-500 hover:bg-rose-50 hover:text-rose-600"
              disabled={deleteMutation.isPending}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (confirm("Delete this idea?")) deleteMutation.mutate();
              }}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};
