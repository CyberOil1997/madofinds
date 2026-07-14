"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AccentKey, ACCENT_STYLES, Product, amazonUrl } from "@/data/products";
import { easeOutSoft } from "@/lib/motion";

export function ProductCard({
  product,
  accent,
  index = 0,
}: {
  product: Product;
  accent: AccentKey;
  index?: number;
}) {
  const style = ACCENT_STYLES[accent];

  return (
    <motion.a
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.06,
        ease: easeOutSoft,
      }}
      whileHover={{ y: -4 }}
      href={amazonUrl(product.amazonSearchTerm)}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:shadow-black/40"
    >
      <div
        className={`relative aspect-square overflow-hidden bg-gradient-to-br ${style.from} ${style.to}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_60%)]"
          aria-hidden
        />
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-sm sm:text-7xl"
          whileHover={{ scale: 1.08, rotate: -3 }}
          transition={{ duration: 0.35, ease: easeOutSoft }}
        >
          {product.emoji}
        </motion.span>
        <div className="absolute top-2.5 right-2.5 rounded-full border border-white/50 bg-white/85 px-2.5 py-1 text-[10px] font-semibold text-zinc-900 shadow-sm backdrop-blur-md">
          {product.priceRange}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="text-sm font-semibold leading-snug text-zinc-900 line-clamp-2 dark:text-zinc-50">
          {product.title}
        </h3>
        <p className="text-xs leading-relaxed text-zinc-600 line-clamp-2 dark:text-zinc-400">
          {product.blurb}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2 text-[11px] font-medium">
          <span className="text-zinc-500 dark:text-zinc-500">
            View on Amazon
          </span>
          <ArrowUpRight
            className={`h-3.5 w-3.5 ${style.text} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
            aria-hidden
          />
        </div>
      </div>
    </motion.a>
  );
}
