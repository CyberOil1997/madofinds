"use client";

import { motion } from "motion/react";
import { easeOutSoft } from "@/lib/motion";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--v2-cream)] pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Soft cloud gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="blob-a absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, var(--v2-blush), transparent 70%)" }}
        />
        <div
          className="blob-b absolute -top-20 right-[-10rem] h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle at 60% 40%, var(--v2-peach), transparent 70%)" }}
        />
        <div
          className="blob-c absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle at 50% 50%, var(--v2-sky), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutSoft }}
          className="font-display text-5xl leading-[1.02] tracking-tight text-[color:var(--v2-ink)] sm:text-7xl"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 500' }}
        >
          Amazon finds,{" "}
          <span
            className="italic text-[color:var(--v2-clay)]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 400' }}
          >
            worth&nbsp;buying.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOutSoft }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--v2-ink-soft)] sm:text-lg"
        >
          A quiet, curated shop of the things we&apos;ve tested, kept, and would
          buy again. Browse by kitchen, dorm, or the whole shelf.
        </motion.p>
      </div>
    </section>
  );
}
