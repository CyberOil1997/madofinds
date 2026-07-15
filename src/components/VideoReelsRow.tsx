"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { VideoModal } from "./VideoModal";

// Deduplicate by videoId — some products share the same demo video.
const reels = (() => {
  const seen = new Set<string>();
  const out: typeof PRODUCTS = [];
  for (const p of PRODUCTS) {
    if (p.videoId && !seen.has(p.videoId)) {
      seen.add(p.videoId);
      out.push(p);
    }
  }
  return out;
})();

export function VideoReelsRow() {
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const activeProducts = activeVideo
    ? PRODUCTS.filter((p) => p.videoId === activeVideo.id)
    : undefined;

  return (
    <>
      <section className="scroll-mt-24">
        <div className="mb-4 flex items-end justify-between gap-4 px-5 sm:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700 dark:text-red-400">
                Reels
              </span>
            </div>
            <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
              See it in action
            </h2>
          </div>
          <span className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {reels.length} shorts
          </span>
        </div>

        <div className="relative">
          <div
            className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth px-5 pb-3 sm:gap-4 sm:px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reels.map((p) => (
              <button
                key={p.videoId}
                onClick={() =>
                  setActiveVideo({ id: p.videoId, title: p.title })
                }
                style={{ scrollSnapAlign: "start" }}
                aria-label={`Watch ${p.title} short`}
                className="group relative flex aspect-[9/16] w-[150px] shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-black text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-[170px] dark:border-zinc-800"
              >
                <img
                  src={`https://i.ytimg.com/vi/${p.videoId}/hqdefault.jpg`}
                  alt={`${p.title} short`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0.4";
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-3">
                  <span className="line-clamp-2 text-[11px] font-medium leading-snug text-white/95 drop-shadow-md">
                    {p.title}
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90 transition-opacity group-hover:opacity-100">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-zinc-900 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-4 w-4 fill-current" aria-hidden />
                  </div>
                </div>
              </button>
            ))}
            <div className="w-1 shrink-0" aria-hidden />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent dark:from-zinc-950"
            aria-hidden
          />
        </div>
      </section>

      <VideoModal
        videoId={activeVideo?.id ?? null}
        title={activeVideo?.title}
        products={activeProducts}
        open={!!activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
