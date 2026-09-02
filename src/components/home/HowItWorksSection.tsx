import { SectionHeader } from "@/components/shared/SectionHeader";
import { howItWorksData } from "@/data/home";

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="How an idea becomes impact"
          subtitle="A short path from a sketch on paper to a public, fundable climate project."
          badge="The path"
        />

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent md:block" />
          {howItWorksData.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-emerald-900/10 bg-white p-8 dark:border-white/10 dark:bg-emerald-950/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-200 text-emerald-900 dark:bg-lime-400/20 dark:text-lime-200">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700 dark:text-lime-300">
                {item.step}
              </p>
              <h3 className="mt-2 font-display text-2xl italic text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
