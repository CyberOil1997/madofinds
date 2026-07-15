import { ACCENT_STYLES, IdeaList, productsByList } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function IdeaListSection({ list }: { list: IdeaList }) {
  const products = productsByList(list.slug);
  const accent = ACCENT_STYLES[list.accent];

  return (
    <section id={list.slug} className="scroll-mt-24">
      <div className="mb-4 flex items-end justify-between gap-4 px-5 sm:px-8">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${accent.dot}`} aria-hidden />
            <span className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${accent.text}`}>
              {list.short}
            </span>
          </div>
          <h2 className="mt-1.5 truncate text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
            {list.title}
          </h2>
        </div>
        <span className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {products.length} finds
        </span>
      </div>

      <div className="relative">
        <div
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-5 pb-3 sm:gap-5 sm:px-8"
          style={{
            scrollSnapType: "x mandatory",
            scrollPadding: "0 2rem",
          }}
        >
          {products.map((p) => (
            <div key={p.id} style={{ scrollSnapAlign: "start" }}>
              <ProductCard product={p} />
            </div>
          ))}
          <div className="w-1 shrink-0" aria-hidden />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-zinc-950"
          aria-hidden
        />
      </div>
    </section>
  );
}
