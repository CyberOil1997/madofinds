"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";

export function BookmarkCTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--v2-cream-2)] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="blob-a absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--v2-blush), transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOutSoft }}
          className="font-display text-4xl leading-[1.05] tracking-tight text-[color:var(--v2-ink)] sm:text-5xl"
          style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 500' }}
        >
          See it{" "}
          <em
            className="text-[color:var(--v2-clay)]"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 400' }}
          >
            in action.
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutSoft, delay: 0.15 }}
          className="mx-auto mt-5 max-w-md text-[color:var(--v2-ink-soft)]"
        >
          Follow along on YouTube and TikTok to watch these finds in the wild,
          then shop the whole list right here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutSoft, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.youtube.com/@Mado-Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--v2-ink)] px-5 py-3 text-sm font-medium text-[color:var(--v2-cream)] shadow-boutique transition-all hover:-translate-y-0.5 hover:bg-[color:var(--v2-clay)]"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden />
            <span>Subscribe on YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@madofinds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--v2-ink)]/20 bg-[color:var(--v2-paper)] px-5 py-3 text-sm font-medium text-[color:var(--v2-ink)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--v2-ink)]/40"
          >
            <span>Follow on TikTok</span>
          </a>
        </motion.div>

        <p className="mt-12 text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--v2-ink-mute)]">
          As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </section>
  );
}
