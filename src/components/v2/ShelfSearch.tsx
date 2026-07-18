"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/products";
import { ProductRunway } from "./ProductRunway";
import { CozyProductCard } from "./CozyProductCard";

/**
 * "The shelf" section with live product search.
 * Empty query → the browsing marquee. Any query → a filtered result grid,
 * matched across title, blurb and category slugs (all terms must match).
 */
export function ShelfSearch({
  runway,
  duration = 90,
  cardWidth = 280,
}: {
  runway: Product[];
  duration?: number;
  cardWidth?: number;
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    const terms = query.split(/\s+/).filter(Boolean);
    return PRODUCTS.filter((p) => {
      const hay = `${p.title} ${p.blurb} ${p.listSlugs.join(" ")}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [query]);

  const searching = query.length > 0;

  return (
    <section className="bg-[color:var(--v2-cream)] pb-16">
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
              The shelf
            </span>
            <h2
              className="font-display mt-2 text-3xl leading-tight tracking-tight text-[color:var(--v2-ink)] sm:text-4xl"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
            >
              Everything, at a glance.
            </h2>
          </div>
          {!searching && (
            <p className="hidden max-w-xs text-right text-xs text-[color:var(--v2-ink-mute)] sm:block">
              Hover to pause. Tap any card to buy on Amazon.
            </p>
          )}
        </div>

        {/* Search field */}
        <div className="mt-6">
          <div className="relative max-w-xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--v2-ink-mute)]"
              aria-hidden
            />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search all ${PRODUCTS.length} finds — try “kitchen”, “desk”, “cleaning”…`}
              aria-label="Search products"
              className="w-full rounded-full border border-[color:var(--v2-fog)]/70 bg-[color:var(--v2-paper)] py-3 pl-11 pr-11 text-[14px] text-[color:var(--v2-ink)] shadow-sm outline-none transition placeholder:text-[color:var(--v2-ink-mute)] focus:border-[color:var(--v2-clay)]/60 focus:ring-2 focus:ring-[color:var(--v2-clay)]/20 [&::-webkit-search-cancel-button]:hidden"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQ("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-[color:var(--v2-ink-mute)] transition hover:bg-[color:var(--v2-ink)]/8 hover:text-[color:var(--v2-ink)]"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </div>

          {searching && (
            <p
              className="mt-3 text-xs text-[color:var(--v2-ink-mute)]"
              role="status"
              aria-live="polite"
            >
              {results.length === 0
                ? `No finds match “${q.trim()}”.`
                : `${results.length} ${results.length === 1 ? "find" : "finds"} matching “${q.trim()}”.`}
            </p>
          )}
        </div>
      </div>

      {searching ? (
        <div className="mx-auto max-w-6xl px-6">
          {results.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5 sm:justify-start">
              {results.map((p) => (
                <CozyProductCard key={p.id} product={p} width={cardWidth} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[color:var(--v2-fog)] bg-[color:var(--v2-paper)]/60 px-6 py-12 text-center">
              <p className="text-sm text-[color:var(--v2-ink-soft)]">
                Nothing on the shelf matches that yet.
              </p>
              <button
                type="button"
                onClick={() => setQ("")}
                className="mt-3 text-[13px] font-semibold text-[color:var(--v2-clay)] hover:underline"
              >
                Clear search and browse everything
              </button>
            </div>
          )}
        </div>
      ) : (
        <ProductRunway products={runway} duration={duration} cardWidth={cardWidth} />
      )}
    </section>
  );
}
