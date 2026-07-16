"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowDown } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";

export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--v2-cream)] pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Warm floating blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="blob-a absolute -top-24 -left-16 h-72 w-72 rounded-full opacity-70 blur-3xl sm:h-96 sm:w-96"
          style={{ background: "radial-gradient(circle at 30% 30%, var(--v2-peach), transparent 65%)" }}
        />
        <div
          className="blob-b absolute -top-10 right-[-8rem] h-80 w-80 rounded-full opacity-70 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          style={{ background: "radial-gradient(circle at 60% 40%, var(--v2-blush), transparent 70%)" }}
        />
        <div
          className="blob-c absolute bottom-[-6rem] left-1/3 h-64 w-64 rounded-full opacity-60 blur-3xl sm:h-80 sm:w-80"
          style={{ background: "radial-gradient(circle at 50% 50%, var(--v2-salmon), transparent 65%)" }}
        />
      </div>

      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"120\\" height=\\"120\\"><filter id=\\"n\\"><feTurbulence baseFrequency=\\"0.9\\" numOctaves=\\"3\\"/></filter><rect width=\\"120\\" height=\\"120\\" filter=\\"url(%23n)\\"/></svg>")',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutSoft }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--v2-wood)] shadow-boutique backdrop-blur-md"
        >
          <Sparkles className="h-3 w-3" aria-hidden />
          <span>curated · lovingly · weekly</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOutSoft }}
          className="font-display mt-6 text-5xl leading-[1.02] tracking-tight text-[color:var(--v2-plum)] sm:text-7xl"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 500' }}
        >
          welcome to your{" "}
          <span
            className="italic text-[color:var(--v2-terracotta)]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 400' }}
          >
            happy&nbsp;place
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOutSoft }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--v2-plum-soft)] sm:text-lg"
        >
          A quiet little corner of the internet, thoughtfully stocked with
          the Amazon finds we can&apos;t stop thinking about. Stay awhile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOutSoft }}
          className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[color:var(--v2-wood)]"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
          <span>drift through the runway</span>
        </motion.div>
      </div>
    </section>
  );
}
