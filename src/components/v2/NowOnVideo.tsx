"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink, ChevronDown } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";
import { EPISODE_FEED, displayTitle } from "@/data/episodes";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function prettyDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (!y || !m || !d) return iso;
  return `${months[m - 1]} ${d}, ${y}`;
}

export function NowOnVideo() {
  const episodes = EPISODE_FEED;
  // Index of the episode whose video is currently live/playing (-1 = none in view).
  const [active, setActive] = useState(-1);
  // Episodes the viewer explicitly tapped to play (overrides muted-autoplay facade).
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratios = useRef<Record<number, number>>({});

  useEffect(() => {
    if (episodes.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.idx);
          ratios.current[idx] = e.isIntersecting ? e.intersectionRatio : 0;
        }
        let best = -1;
        let bestRatio = 0.5; // must be at least half-visible to take over playback
        for (const [idx, r] of Object.entries(ratios.current)) {
          if (r > bestRatio) {
            bestRatio = r;
            best = Number(idx);
          }
        }
        setActive(best);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    panelRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [episodes.length]);

  if (episodes.length === 0) return null;

  return (
    <section id="now-on-video" className="bg-[color:var(--v2-cream-2)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
              Now on video
            </span>
            <h2
              className="font-display mt-2 text-3xl leading-tight tracking-tight text-[color:var(--v2-ink)] sm:text-4xl"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
            >
              Every drop, shoppable as you scroll.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs text-[color:var(--v2-ink-mute)] sm:block">
            The latest short plays first. Keep scrolling for past episodes — every
            product links straight to Amazon.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-16 px-6">
        {episodes.map((ep, idx) => {
          const isActive = active === idx;
          const isTapped = tapped.has(idx);
          const live = isActive || isTapped;
          const muted = isActive && !isTapped;
          const embedSrc =
            `https://www.youtube.com/embed/${ep.ytVideoId}` +
            `?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${ep.ytVideoId}` +
            `&controls=1&rel=0&modestbranding=1&playsinline=1`;

          return (
            <motion.div
              key={ep.slug}
              ref={(el) => {
                panelRefs.current[idx] = el;
              }}
              data-idx={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOutSoft }}
              className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center"
            >
              {/* Video pane */}
              <div className="mx-auto w-full max-w-[320px] lg:max-w-[340px]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/70 bg-black shadow-boutique-lg">
                  {live ? (
                    <iframe
                      src={embedSrc}
                      title={displayTitle(ep.title)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setTapped((prev) => new Set(prev).add(idx))
                      }
                      className="group absolute inset-0 h-full w-full"
                      aria-label={`Play ${displayTitle(ep.title)}`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${ep.ytVideoId}/hqdefault.jpg`}
                        alt={displayTitle(ep.title)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[color:var(--v2-ink)] shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-current" aria-hidden />
                        </span>
                      </div>
                    </button>
                  )}
                </div>
                {/* Sound hint when autoplaying muted */}
                {muted && (
                  <button
                    type="button"
                    onClick={() => setTapped((prev) => new Set(prev).add(idx))}
                    className="mx-auto mt-3 block text-[11px] font-medium text-[color:var(--v2-ink-mute)] underline decoration-dotted underline-offset-2 hover:text-[color:var(--v2-ink)]"
                  >
                    Tap for sound
                  </button>
                )}
              </div>

              {/* Details + shoppable product list */}
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${idx === 0 ? "bg-red-500" : "bg-[color:var(--v2-clay)]"}`}
                    aria-hidden
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--v2-clay)]">
                    {idx === 0 ? "Latest episode" : `Episode ${episodes.length - idx}`}
                    <span className="ml-2 font-normal text-[color:var(--v2-ink-mute)]">
                      {prettyDate(ep.publishedAt)}
                    </span>
                  </span>
                </div>
                <h3
                  className="font-display mt-2 text-2xl leading-tight tracking-tight text-[color:var(--v2-ink)] sm:text-3xl"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
                >
                  {displayTitle(ep.title)}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--v2-ink-soft)]">
                  {ep.products.length} finds from this short — shop the exact ones
                  below. As an Amazon Associate we earn from qualifying purchases.
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {ep.products.map((p, i) => (
                    <li key={p.id}>
                      <a
                        href={p.productUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="group flex items-center gap-3 rounded-2xl border border-[color:var(--v2-fog)]/60 bg-[color:var(--v2-paper)]/85 p-2.5 pr-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[color:var(--v2-paper)] hover:shadow-boutique"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
                          <img
                            src={
                              p.imageUrl.startsWith("http")
                                ? p.imageUrl
                                : `${basePath}${p.imageUrl}`
                            }
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5">
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[color:var(--v2-ink)]/8 text-[9px] font-bold text-[color:var(--v2-ink-soft)]">
                              {i + 1}
                            </span>
                            <span className="line-clamp-1 text-[13px] font-medium text-[color:var(--v2-ink)]">
                              {p.title}
                            </span>
                          </span>
                          <span className="mt-0.5 block pl-[22px] text-[11.5px] text-[color:var(--v2-wood)]">
                            {p.priceRange}
                          </span>
                        </span>
                        <ExternalLink
                          className="h-4 w-4 shrink-0 text-[color:var(--v2-clay)] opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden
                        />
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://www.youtube.com/shorts/${ep.ytVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--v2-clay)] hover:underline"
                >
                  Watch on YouTube
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {episodes.length > 1 && (
        <div className="mx-auto mt-10 flex max-w-6xl items-center justify-center px-6">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--v2-ink-mute)]">
            <ChevronDown className="h-4 w-4" aria-hidden />
            Scroll for past episodes
          </span>
        </div>
      )}
    </section>
  );
}
