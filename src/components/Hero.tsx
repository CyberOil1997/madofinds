"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { IDEA_LISTS } from "@/data/products";
import { easeOutSoft } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-amber-50/70 via-white to-white dark:border-zinc-800/70 dark:from-amber-950/20 dark:via-zinc-950 dark:to-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(251,191,36,0.18),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(180deg,white,transparent_70%)]"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-zinc-300 dark:text-zinc-800"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutSoft }}
          className="flex flex-col items-start gap-7 sm:max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease: easeOutSoft }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/60 px-3 py-1.5 text-xs font-medium text-amber-800 shadow-sm backdrop-blur-sm dark:border-amber-800/60 dark:bg-zinc-950/40 dark:text-amber-300"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Small-space living, curated weekly
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutSoft }}
            className="text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-zinc-50"
          >
            Amazon finds for
            <span className="relative ml-2 inline-block">
              <span className="relative z-10 bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent">
                tiny apartments
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full text-amber-300/70 dark:text-amber-500/50"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M 0 5 Q 50 0 100 4 T 200 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutSoft }}
            className="text-pretty max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300"
          >
            Hand-picked storage, organization, and space-saving gear. Every
            product tested, priced under a splurge, and renter-safe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOutSoft }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-zinc-900/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20 dark:bg-white dark:text-zinc-900 dark:shadow-white/10"
            >
              Browse collections
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </Link>
            <div className="flex items-center gap-1.5">
              {IDEA_LISTS.map((list) => (
                <Link
                  key={list.slug}
                  href={`/#${list.slug}`}
                  className="hidden rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white sm:inline-flex dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                >
                  {list.short}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
