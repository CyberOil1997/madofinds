"use client";

import Link from "next/link";

export function HeaderV2() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-[color:var(--v2-cream)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={{ pathname: "/v2" }}
          className="font-display text-lg tracking-tight text-[color:var(--v2-plum)]"
          style={{ fontVariationSettings: '"opsz" 24, "SOFT" 100, "wght" 500' }}
        >
          mado
          <em
            className="text-[color:var(--v2-terracotta)]"
            style={{ fontVariationSettings: '"opsz" 24, "SOFT" 100, "wght" 400' }}
          >
            finds
          </em>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--v2-plum-soft)]">
          <a
            href="https://www.youtube.com/@Mado-Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:text-[color:var(--v2-plum)] sm:inline"
          >
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@madofinds"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:text-[color:var(--v2-plum)] sm:inline"
          >
            TikTok
          </a>
          <Link
            href={{ pathname: "/" }}
            className="rounded-full border border-[color:var(--v2-plum)]/15 px-3 py-1.5 text-xs text-[color:var(--v2-plum-soft)] transition-colors hover:border-[color:var(--v2-plum)]/40 hover:text-[color:var(--v2-plum)]"
          >
            v1 design
          </Link>
        </nav>
      </div>
    </header>
  );
}
