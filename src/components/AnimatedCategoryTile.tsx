"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ACCENT_STYLES,
  IdeaList,
  productsByList,
} from "@/data/products";
import { easeOutSoft } from "@/lib/motion";

const CYCLE_MS = 3400;

export function AnimatedCategoryTile({
  list,
  index,
}: {
  list: IdeaList;
  index: number;
}) {
  const products = productsByList(list.slug);
  const accent = ACCENT_STYLES[list.accent];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || products.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % products.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, products.length]);

  const current = products[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: easeOutSoft }}
    >
      <Link
        href={`#${list.slug}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-black/40"
      >
        <div
          className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${accent.from} ${accent.to}`}
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]"
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: easeOutSoft }}
              className="absolute inset-0"
            >
              <img
                src={current.imageUrl}
                alt={current.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 pb-3 pt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-caption"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.45, ease: easeOutSoft }}
                className="flex items-end justify-between gap-3"
              >
                <span className="line-clamp-2 text-[11px] font-semibold text-white/95 drop-shadow-sm">
                  {current.title}
                </span>
                <span className="shrink-0 rounded-full border border-white/40 bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                  {current.priceRange}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
            {products.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-5 bg-white/95"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${accent.dot} shadow-sm`}
              aria-hidden
            />
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider ${accent.text}`}
            >
              {list.short}
            </span>
            <span className="ml-auto rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {products.length}
            </span>
          </div>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
            {list.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 line-clamp-2 dark:text-zinc-400">
            {list.description}
          </p>
          <div className="mt-2 flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            <span>Explore list</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
