"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { VideoModal } from "@/components/VideoModal";

export function CozyProductCard({
  product,
  width = 280,
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
        className="group relative flex shrink-0 flex-col overflow-hidden rounded-3xl border border-[color:var(--v2-fog)]/60 bg-[color:var(--v2-paper)] p-4 shadow-boutique transition-all duration-500 hover:-translate-y-1 hover:shadow-boutique-lg"
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
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[color:var(--v2-ink)] shadow-sm backdrop-blur-sm">
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
            className="absolute left-6 top-6 z-10 grid h-9 w-9 place-items-center rounded-full bg-[color:var(--v2-ink)] text-[color:var(--v2-cream)] shadow-md ring-2 ring-white/80 transition-transform hover:scale-110"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
          </button>
        )}

        <div className="mt-4 flex flex-1 flex-col gap-2 px-1 pb-1">
          <h3 className="font-display line-clamp-2 min-h-[2.7em] text-[15px] leading-[1.3] tracking-tight text-[color:var(--v2-ink)]">
            {product.title}
          </h3>
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-2 inline-flex items-center justify-between gap-1.5 rounded-full bg-[color:var(--v2-ink)] px-4 py-2.5 text-[12px] font-medium text-[color:var(--v2-cream)] transition-colors hover:bg-[color:var(--v2-clay)]"
          >
            <span>Shop on Amazon</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
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
