"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { VideoModal } from "@/components/VideoModal";

export function CozyProductCard({
  product,
  width = 220,
}: {
  product: Product;
  width?: number;
}) {
  const [videoOpen, setVideoOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const related = product.videoId
    ? PRODUCTS.filter((p) => p.videoId === product.videoId)
    : undefined;

  return (
    <>
      <article
        className="group relative flex shrink-0 flex-col overflow-hidden rounded-3xl border border-white/70 bg-[color:var(--v2-cream)] p-3 shadow-boutique transition-all duration-500 hover:-translate-y-1 hover:rotate-[0.4deg] hover:shadow-boutique-lg"
        style={{ width: `${width}px` }}
      >
        <a
          href={product.productUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative block aspect-square overflow-hidden rounded-2xl bg-white"
          aria-label={`Buy ${product.title} on Amazon`}
        >
          <img
            src={
              product.imageUrl.startsWith("http")
                ? product.imageUrl
                : `${basePath}${product.imageUrl}`
            }
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-medium text-[color:var(--v2-plum)] shadow-sm backdrop-blur-sm">
            {product.priceRange}
          </span>
        </a>

        {product.videoId && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setVideoOpen(true);
            }}
            aria-label={`Watch ${product.title} demo`}
            className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--v2-plum)] text-[color:var(--v2-cream)] shadow-md ring-2 ring-white/70 transition-transform hover:scale-110"
          >
            <Play className="h-3 w-3 fill-current" aria-hidden />
          </button>
        )}

        <div className="mt-3 flex flex-1 flex-col gap-1.5 px-1">
          <h3 className="line-clamp-2 min-h-[2.6em] font-display text-[13.5px] leading-[1.25] tracking-tight text-[color:var(--v2-plum)]">
            {product.title}
          </h3>
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-2 inline-flex items-center justify-between gap-1.5 rounded-full bg-[color:var(--v2-plum)] px-3.5 py-2 text-[11px] font-medium text-[color:var(--v2-cream)] transition-colors hover:bg-[color:var(--v2-terracotta)]"
          >
            <span>Shop on Amazon</span>
            <ArrowUpRight className="h-3 w-3 shrink-0" aria-hidden />
          </a>
        </div>
      </article>

      <VideoModal
        videoId={product.videoId}
        title={product.title}
        products={related}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
