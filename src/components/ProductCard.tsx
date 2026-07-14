"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { AccentKey, ACCENT_STYLES, Product } from "@/data/products";
import { easeOutSoft } from "@/lib/motion";
import { VideoModal } from "./VideoModal";

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
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: (index % 4) * 0.06,
          ease: easeOutSoft,
        }}
        whileHover={{ y: -4 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:shadow-black/40"
      >
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative block"
        >
          <div
            className={`relative aspect-square overflow-hidden bg-gradient-to-br ${style.from} ${style.to}`}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div className="absolute top-2.5 right-2.5 rounded-full border border-white/50 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-zinc-900 shadow-sm backdrop-blur-md">
              {product.priceRange}
            </div>
          </div>
        </a>

        {product.videoId && (
          <button
            onClick={() => setVideoOpen(true)}
            aria-label={`Watch ${product.title} demo`}
            className="absolute left-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-zinc-900/85 text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-zinc-900"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          </button>
        )}

        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex flex-1 flex-col gap-1.5 p-4"
        >
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
        </a>
      </motion.div>

      <VideoModal
        videoId={product.videoId}
        title={product.title}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
