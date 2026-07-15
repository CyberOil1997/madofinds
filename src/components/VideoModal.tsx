"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";
import type { Product } from "@/data/products";

export function VideoModal({
  videoId,
  title,
  products,
  open,
  onClose,
}: {
  videoId: string | null;
  title?: string;
  products?: Product[];
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const hasProducts = products && products.length > 0;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <AnimatePresence>
      {open && videoId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Product demo video"}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
          >
            <X className="h-5 w-5" aria-hidden />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: easeOutSoft }}
            onClick={(e) => e.stopPropagation()}
            className={
              hasProducts
                ? "relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl lg:flex-row"
                : "relative w-full max-w-md overflow-hidden rounded-2xl bg-black shadow-2xl"
            }
          >
            {/* Video pane */}
            <div
              className={
                hasProducts
                  ? "relative shrink-0 bg-black lg:w-[380px]"
                  : "relative w-full"
              }
            >
              <div className="relative aspect-[9/16] w-full lg:h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                  title={title ?? "Product demo"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              {title && !hasProducts && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-medium text-white">
                  {title}
                </div>
              )}
            </div>

            {/* Products pane */}
            {hasProducts && (
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-white dark:bg-zinc-950">
                <div className="border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700 dark:text-red-400">
                      Shop this video
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {products!.length} products featured
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    As an Amazon Associate we earn from qualifying purchases.
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {products!.map((p) => (
                      <li key={p.id} className="flex gap-3 p-4">
                        <a
                          href={p.productUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="relative aspect-square h-20 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                        >
                          <img
                            src={
                              p.imageUrl.startsWith("http")
                                ? p.imageUrl
                                : `${basePath}${p.imageUrl}`
                            }
                            alt={p.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <a
                            href={p.productUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="line-clamp-2 text-sm font-medium leading-snug text-zinc-900 hover:text-amber-700 dark:text-zinc-100 dark:hover:text-amber-400"
                          >
                            {p.title}
                          </a>
                          <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                            {p.priceRange}
                          </div>
                          <a
                            href={p.productUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-amber-500"
                          >
                            Buy on Amazon
                            <ExternalLink className="h-3 w-3" aria-hidden />
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
