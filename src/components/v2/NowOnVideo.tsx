"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // slide direction: 1 = forward/newer→older, -1 = back
  const [inView, setInView] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Only autoplay the active episode while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (episodes.length === 0) return null;

  const goTo = (idx: number) => {
    const next = Math.min(episodes.length - 1, Math.max(0, idx));
    if (next === active) return;
    setDir(next > active ? 1 : -1);
    setSoundOn(false);
    setActive(next);
  };

  const ep = episodes[active];
  const muted = !soundOn;
  const isLong = ep.kind === "long";
  const embedSrc =
    `https://www.youtube.com/embed/${ep.ytVideoId}` +
    `?autoplay=1&mute=${muted ? 1 : 0}` +
    // long-form videos shouldn't loop (they're minutes long); Shorts do
    (isLong ? "" : `&loop=1&playlist=${ep.ytVideoId}`) +
    `&controls=1&rel=0&modestbranding=1&playsinline=1`;

  const atStart = active === 0;
  const atEnd = active === episodes.length - 1;

  return (
    <section
      ref={sectionRef}
      id="now-on-video"
      className="bg-[color:var(--v2-cream-2)] py-20 sm:py-28"
    >
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
              Every drop, shoppable.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs text-[color:var(--v2-ink-mute)] sm:block">
            The newest short is up first — flip through past episodes with the
            arrows. Every product links straight to Amazon.
          </p>
        </div>
      </div>

      {/* Carousel — one episode at a time, fixed strip, horizontal toggle */}
      <div className="relative mx-auto mt-10 max-w-6xl px-6">
        {/* Side arrows (desktop) */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={atStart}
          aria-label="Newer episode"
          className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 lg:grid h-11 w-11 place-items-center rounded-full border border-[color:var(--v2-fog)]/70 bg-[color:var(--v2-paper)]/90 text-[color:var(--v2-ink)] shadow-boutique backdrop-blur transition enabled:hover:-translate-y-1/2 enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={atEnd}
          aria-label="Older episode"
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:grid h-11 w-11 place-items-center rounded-full border border-[color:var(--v2-fog)]/70 bg-[color:var(--v2-paper)]/90 text-[color:var(--v2-ink)] shadow-boutique backdrop-blur transition enabled:hover:-translate-y-1/2 enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>

        <div className="overflow-hidden lg:mx-14">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={ep.slug}
              custom={dir}
              initial={{ opacity: 0, x: dir * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -48 }}
              transition={{ duration: 0.32, ease: easeOutSoft }}
              className={`grid gap-8 lg:items-center ${isLong ? "lg:grid-cols-[minmax(0,560px)_1fr]" : "lg:grid-cols-[minmax(0,320px)_1fr]"}`}
            >
              {/* Video pane */}
              <div className={`mx-auto w-full ${isLong ? "max-w-[520px] lg:max-w-none" : "max-w-[300px] lg:max-w-[320px]"}`}>
                <div className={`relative ${isLong ? "aspect-video" : "aspect-[9/16]"} overflow-hidden rounded-[1.75rem] border border-white/70 bg-black shadow-boutique-lg`}>
                  {inView ? (
                    <iframe
                      key={ep.ytVideoId + String(muted)}
                      src={embedSrc}
                      title={displayTitle(ep.title)}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <img
                      src={`https://i.ytimg.com/vi/${ep.ytVideoId}/hqdefault.jpg`}
                      alt={displayTitle(ep.title)}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                {inView && muted && (
                  <button
                    type="button"
                    onClick={() => setSoundOn(true)}
                    className="mx-auto mt-3 block text-[11px] font-medium text-[color:var(--v2-ink-mute)] underline decoration-dotted underline-offset-2 hover:text-[color:var(--v2-ink)]"
                  >
                    Tap for sound
                  </button>
                )}
              </div>

              {/* Details + shoppable products */}
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${active === 0 ? "bg-red-500" : "bg-[color:var(--v2-clay)]"}`}
                    aria-hidden
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--v2-clay)]">
                    {active === 0 ? "Latest episode" : `Episode ${episodes.length - active}`}
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
                  href={
                    isLong
                      ? `https://www.youtube.com/watch?v=${ep.ytVideoId}`
                      : `https://www.youtube.com/shorts/${ep.ytVideoId}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--v2-clay)] hover:underline"
                >
                  Watch on YouTube
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: mobile arrows + dots + counter */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={atStart}
            aria-label="Newer episode"
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--v2-fog)]/70 bg-[color:var(--v2-paper)] text-[color:var(--v2-ink)] shadow-sm transition enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 lg:hidden"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Episodes">
            {episodes.map((e, i) => (
              <button
                key={e.slug}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Episode ${episodes.length - i}: ${displayTitle(e.title)}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active
                    ? "w-7 bg-[color:var(--v2-clay)]"
                    : "w-2.5 bg-[color:var(--v2-ink)]/20 hover:bg-[color:var(--v2-ink)]/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={atEnd}
            aria-label="Older episode"
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--v2-fog)]/70 bg-[color:var(--v2-paper)] text-[color:var(--v2-ink)] shadow-sm transition enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 lg:hidden"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <span className="ml-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--v2-ink-mute)]">
            {active + 1} / {episodes.length}
          </span>
        </div>
      </div>
    </section>
  );
}
