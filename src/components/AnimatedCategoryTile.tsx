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

const CYCLE_MS = 3200;

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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]"
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.88, y: 12, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8, rotate: 2 }}
              transition={{ duration: 0.6, ease: easeOutSoft }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-white/40 blur-2xl`}
                  aria-hidden
                />
                <span className="relative text-8xl drop-shadow-sm sm:text-9xl">
                  {current.emoji}
                </span>
              </div>
              <div className="mx-4 rounded-2xl border border-white/60 bg-white/70 px-3 py-1.5 text-center text-[11px] font-semibold text-zinc-800 shadow-sm backdrop-blur-md">
                {current.title}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {products.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-4 bg-zinc-800/70"
                    : "w-1 bg-zinc-800/25"
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
