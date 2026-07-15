"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Product } from "@/data/products";
import { VideoModal } from "./VideoModal";

export function ProductCard({ product }: { product: Product }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className="group relative flex h-full w-[180px] shrink-0 flex-col overflow-hidden sm:w-[210px]">
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative block aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-200 group-hover:border-zinc-300 group-hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0";
            }}
          />
        </a>

        {product.videoId && (
          <button
            onClick={() => setVideoOpen(true)}
            aria-label={`Watch ${product.title} demo`}
            className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full bg-zinc-900/85 text-white shadow-md ring-1 ring-white/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-zinc-900"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          </button>
        )}

        <div className="mt-3 flex flex-1 flex-col gap-1.5">
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="line-clamp-2 min-h-[2.6em] text-[13px] font-medium leading-[1.3] text-zinc-800 transition-colors hover:text-amber-700 dark:text-zinc-200 dark:hover:text-amber-400"
          >
            {product.title}
          </a>
          <div className="flex h-5 items-baseline gap-1.5">
            <span className="whitespace-nowrap text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {product.priceRange}
            </span>
          </div>
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm transition-all hover:bg-amber-500 hover:shadow-md active:scale-[0.98]"
          >
            Buy on Amazon
          </a>
        </div>
      </div>

      <VideoModal
        videoId={product.videoId}
        title={product.title}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
