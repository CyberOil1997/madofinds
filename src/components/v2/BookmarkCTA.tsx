"use client";

import { motion } from "motion/react";
import { Heart, Play } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";

export function BookmarkCTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--v2-cream-2)] py-24 sm:py-32">
      {/* Soft blob background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="blob-a absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--v2-blush), transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeOutSoft }}
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-boutique-lg"
        >
          <Heart
            className="h-6 w-6 fill-[color:var(--v2-terracotta)] text-[color:var(--v2-terracotta)]"
            aria-hidden
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOutSoft, delay: 0.1 }}
          className="font-display mt-8 text-4xl leading-[1.05] tracking-tight text-[color:var(--v2-plum)] sm:text-5xl"
          style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 500' }}
        >
          come back{" "}
          <em
            className="text-[color:var(--v2-terracotta)]"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 100, "wght" 400' }}
          >
            soon.
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutSoft, delay: 0.2 }}
          className="mx-auto mt-5 max-w-md text-[color:var(--v2-plum-soft)]"
        >
          Bookmark us. A new little rundown lands every week — nine finds,
          one short video, always something that&apos;ll make you go{" "}
          <em>oh, that&apos;s clever.</em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutSoft, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.youtube.com/@Mado-Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--v2-plum)] px-5 py-3 text-sm font-medium text-[color:var(--v2-cream)] shadow-boutique transition-all hover:-translate-y-0.5 hover:bg-[color:var(--v2-terracotta)]"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden />
            <span>Subscribe on YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@madofinds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--v2-plum)]/20 bg-white/70 px-5 py-3 text-sm font-medium text-[color:var(--v2-plum)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            <span>Follow on TikTok</span>
          </a>
        </motion.div>

        <p className="mt-10 text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--v2-wood)]">
          As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </section>
  );
}
