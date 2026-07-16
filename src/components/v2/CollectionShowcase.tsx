"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IDEA_LISTS, PRODUCTS, IdeaList } from "@/data/products";
import { CozyProductCard } from "./CozyProductCard";
import { easeOutSoft } from "@/lib/motion";

export function CollectionShowcase() {
  // Default to Small Kitchen — biggest category, most instantly shoppable
  const defaultList =
    IDEA_LISTS.find((l) => l.slug === "small-kitchen") ?? IDEA_LISTS[0];
  const [active, setActive] = useState<IdeaList>(defaultList);
  const products = PRODUCTS.filter((p) => p.listSlugs.includes(active.slug));

  return (
    <section className="relative bg-[color:var(--v2-cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
            Shop the shelf
          </span>
          <h2
            className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-[color:var(--v2-ink)] sm:text-5xl"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 500' }}
          >
            Browse by category.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[color:var(--v2-ink-soft)]">
            Sorted by room, budget, and use case — so you can jump straight
            to what you&apos;re looking for.
          </p>
        </div>

        {/* Pill nav */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {IDEA_LISTS.map((list) => {
            const on = list.slug === active.slug;
            const count = PRODUCTS.filter((p) => p.listSlugs.includes(list.slug)).length;
            return (
              <button
                key={list.slug}
                onClick={() => setActive(list)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  on
                    ? "border-[color:var(--v2-ink)] bg-[color:var(--v2-ink)] text-[color:var(--v2-cream)] shadow-boutique"
                    : "border-[color:var(--v2-fog)] bg-[color:var(--v2-paper)] text-[color:var(--v2-ink-soft)] hover:border-[color:var(--v2-ink)]/40 hover:text-[color:var(--v2-ink)]"
                }`}
              >
                <span>{list.short}</span>
                <span
                  className={`text-[10px] font-normal ${
                    on ? "text-[color:var(--v2-cream)]/60" : "text-[color:var(--v2-ink-mute)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Description */}
        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: easeOutSoft }}
              className="mx-auto max-w-md text-sm text-[color:var(--v2-ink-soft)]"
            >
              {active.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Product grid — bigger cards, generous spacing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: easeOutSoft }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
          >
            {products.slice(0, 16).map((p) => (
              <div key={p.id} className="mx-auto w-full max-w-[280px]">
                <CozyProductCard product={p} width={280} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {products.length > 16 && (
          <p className="mt-8 text-center text-sm italic text-[color:var(--v2-ink-mute)]">
            {products.length - 16} more in this collection — pop them into the runway above.
          </p>
        )}
      </div>
    </section>
  );
}
