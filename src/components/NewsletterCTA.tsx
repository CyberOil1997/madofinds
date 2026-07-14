"use client";

import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { easeOutSoft } from "@/lib/motion";

export function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200/70 dark:border-zinc-800/70">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-100/50 via-white to-orange-100/40 dark:from-amber-950/20 dark:via-zinc-950 dark:to-orange-950/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(251,191,36,0.25),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOutSoft }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur-sm dark:border-amber-800/50 dark:bg-zinc-900/60 dark:text-amber-300">
            New finds every week
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            See these in action on YouTube.
          </h2>
          <p className="text-pretty max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-300">
            Short, honest 60-second reviews. No filler, no fake enthusiasm.
            The full product list always lives right here.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/15 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-900/25 dark:bg-white dark:text-zinc-900"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
            Follow on YouTube
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
