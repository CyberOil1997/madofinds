"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { VideoModal } from "@/components/VideoModal";
import { easeOutSoft } from "@/lib/motion";

export function VideoSpotlight() {
  const [open, setOpen] = useState(false);
  const featured = PRODUCTS.filter((p) => p.videoId === "qLQAF9Az-KE");
  const videoId = "qLQAF9Az-KE";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (featured.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[color:var(--v2-cream-2)] py-24 sm:py-32">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:gap-16 lg:grid-cols-[400px_1fr] lg:items-center">
        {/* Video card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOutSoft }}
          onClick={() => setOpen(true)}
          className="group relative mx-auto block aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/70 bg-black shadow-boutique-lg transition-transform hover:-translate-y-1"
          aria-label="Play featured video"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt="Featured episode thumbnail"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[color:var(--v2-ink)] shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 fill-current" aria-hidden />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-left">
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/80">
              Featured episode
            </div>
            <div className="font-display mt-1.5 text-lg text-white">
              9 Amazon Finds You Didn&apos;t Know You Needed
            </div>
          </div>
        </motion.button>

        {/* Text + product list */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOutSoft, delay: 0.1 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
              Now on video
            </span>
            <h2
              className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-[color:var(--v2-ink)] sm:text-5xl"
              style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 500' }}
            >
              Nine kitchen finds{" "}
              <em
                className="text-[color:var(--v2-clay)]"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 400' }}
              >
                you can shop right now.
              </em>
            </h2>
            <p className="mt-4 max-w-lg text-[color:var(--v2-ink-soft)]">
              Everything in this week&apos;s short, linked in one place. Watch
              the rundown or skip straight to whatever caught your eye.
            </p>
          </motion.div>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {featured.slice(0, 9).map((p, idx) => (
              <motion.li
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  ease: easeOutSoft,
                  delay: 0.15 + idx * 0.04,
                }}
              >
                <a
                  href={p.productUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex items-center gap-3 rounded-2xl border border-[color:var(--v2-fog)]/60 bg-[color:var(--v2-paper)]/85 p-3 pr-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[color:var(--v2-paper)] hover:shadow-boutique"
                >
                  <span className="grid h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white">
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
                    <span className="line-clamp-1 text-[13.5px] font-medium text-[color:var(--v2-ink)]">
                      {p.title}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] text-[color:var(--v2-wood)]">
                      {p.priceRange}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-[color:var(--v2-clay)] opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <VideoModal
        videoId={videoId}
        title="9 Amazon Finds You Didn't Know You Needed"
        products={featured}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
