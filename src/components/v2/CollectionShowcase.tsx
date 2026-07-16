"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IDEA_LISTS, PRODUCTS, IdeaList } from "@/data/products";
import { CozyProductCard } from "./CozyProductCard";
import { easeOutSoft } from "@/lib/motion";

export function CollectionShowcase() {
  const [active, setActive] = useState<IdeaList>(IDEA_LISTS[0]);
  const products = PRODUCTS.filter((p) => p.listSlugs.includes(active.slug));

  return (
    <section className="relative bg-[color:var(--v2-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-terracotta)]">
            Little collections
          </span>
          <h2
            className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-[color:var(--v2-plum)] sm:text-5xl"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 500' }}
          >
            handpicked, by mood.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[color:var(--v2-plum-soft)]">
            Loose bundles of things that go together in our head. Pick a vibe
            and browse the rest at your own pace.
          </p>
        </div>

        {/* Pill nav */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {IDEA_LISTS.map((list) => {
            const on = list.slug === active.slug;
            return (
              <button
                key={list.slug}
                onClick={() => setActive(list)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  on
                    ? "border-[color:var(--v2-plum)] bg-[color:var(--v2-plum)] text-[color:var(--v2-cream)] shadow-boutique"
                    : "border-[color:var(--v2-plum-soft)]/20 bg-white/70 text-[color:var(--v2-plum-soft)] hover:border-[color:var(--v2-plum)]/40 hover:bg-white"
                }`}
              >
                {list.short}
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
              className="mx-auto max-w-md text-sm italic text-[color:var(--v2-plum-soft)]"
            >
              {active.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: easeOutSoft }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {products.slice(0, 15).map((p) => (
              <CozyProductCard key={p.id} product={p} width={220} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
