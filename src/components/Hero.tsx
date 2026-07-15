import Link from "next/link";
import { PRODUCTS, IDEA_LISTS } from "@/data/products";

export function Hero() {
  const totalProducts = PRODUCTS.length;
  const totalLists = IDEA_LISTS.length;

  return (
    <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-10">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-3xl font-bold text-white shadow-lg shadow-amber-500/20 ring-1 ring-amber-500/20 sm:h-20 sm:w-20 sm:text-4xl">
            M
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Mado Finds
            </h1>
            <p className="mt-0.5 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
              Amazon finds for tiny apartments · Small-space living, curated weekly
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-zinc-500 dark:text-zinc-500">
              <span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {totalProducts}
                </span>{" "}
                curated finds
              </span>
              <span aria-hidden>·</span>
              <span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {totalLists}
                </span>{" "}
                idea lists
              </span>
              <span aria-hidden>·</span>
              <span>Updated weekly</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {IDEA_LISTS.map((list) => (
            <Link
              key={list.slug}
              href={`#${list.slug}`}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
            >
              {list.short}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
