"use client";

import { motion } from "motion/react";
import { ACCENT_STYLES, IdeaList, productsByList } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { easeOutSoft } from "@/lib/motion";

export function IdeaListSection({ list }: { list: IdeaList }) {
  const products = productsByList(list.slug);
  const accent = ACCENT_STYLES[list.accent];

  return (
    <section id={list.slug} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: easeOutSoft }}
        className="mb-6 flex items-start gap-3.5 sm:mb-8"
      >
        <span
          className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot} shadow-sm ring-4 ${accent.ring}`}
          aria-hidden
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${accent.text}`}
            >
              {list.short}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-500">
              {products.length} finds
            </span>
          </div>
          <h2 className="mt-1.5 text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            {list.title}
          </h2>
          <p className="text-pretty mt-1.5 max-w-2xl text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
            {list.description}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} accent={list.accent} index={i} />
        ))}
      </div>
    </section>
  );
}
