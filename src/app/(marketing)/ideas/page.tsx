import { Suspense } from "react";
import { IdeaList } from "@/components/features/ideas/IdeaList";
import { IdeaFilters } from "@/components/features/ideas/IdeaFilters";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getIdeas } from "@/actions/idea.actions";
import { IdeaListSkeleton } from "@/components/features/ideas/IdeaListSkeleton";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function IdeasDataFetcher({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const ideas = await getIdeas({
    ...params,
    status: "APPROVED",
  });

  return <IdeaList initialData={ideas} />;
}

export default function IdeasPage({ searchParams }: PageProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-20">
      <SectionHeader
        title="The idea garden"
        subtitle="Approved climate proposals from the Green Pulse community — filter by category, search, and support what should scale."
        badge="Browse"
      />

      <IdeaFilters />

      <Suspense fallback={<IdeaListSkeleton />}>
        <IdeasDataFetcher searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
