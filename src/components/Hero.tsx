import Link from "next/link";
import { IDEA_LISTS } from "@/data/products";

export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:px-8 sm:py-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-xl font-bold text-white shadow-md shadow-amber-500/20 ring-1 ring-amber-500/20 sm:h-14 sm:w-14 sm:text-2xl">
            M
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
              Mado Finds
            </h1>
            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              Handpicked Amazon finds. Scroll, shop, repeat.
            </p>
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
