import { coreFeaturesData } from "@/data/home";

export function CoreFeaturesSection() {
  return (
    <section className="bg-emerald-950 py-24 text-lime-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">
              Platform
            </span>
          </div>
          <h2 className="font-display text-4xl italic text-white md:text-5xl">
            Built for people who ship climate work
          </h2>
          <p className="mt-4 text-lg text-lime-100/70">
            Not a generic startup template — a portal for proposals, votes, reviews, and funding.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreFeaturesData.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300 text-emerald-950">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-lime-100/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
