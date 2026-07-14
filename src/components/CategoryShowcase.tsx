import { IDEA_LISTS } from "@/data/products";
import { AnimatedCategoryTile } from "./AnimatedCategoryTile";

export function CategoryShowcase() {
  return (
    <section
      id="collections"
      className="scroll-mt-24 border-b border-zinc-200/70 bg-zinc-50/50 dark:border-zinc-800/70 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 flex flex-col gap-2 sm:mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-400">
            Collections
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
            Four hand-curated lists.
          </h2>
          <p className="text-pretty max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Every product in every list is one we would actually keep in our
            own apartment. No filler, no sponsored padding.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {IDEA_LISTS.map((list, i) => (
            <AnimatedCategoryTile key={list.slug} list={list} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
