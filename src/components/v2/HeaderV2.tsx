"use client";

import Link from "next/link";

export function HeaderV2() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-[color:var(--v2-cream)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={{ pathname: "/" }}
          className="font-display text-lg tracking-tight text-[color:var(--v2-ink)]"
          style={{ fontVariationSettings: '"opsz" 24, "SOFT" 100, "wght" 500' }}
        >
          mado
          <em
            className="text-[color:var(--v2-clay)]"
            style={{ fontVariationSettings: '"opsz" 24, "SOFT" 100, "wght" 400' }}
          >
            finds
          </em>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--v2-ink-soft)]">
          <Link
            href={{ pathname: "/about" }}
            className="hover:text-[color:var(--v2-ink)]"
          >
            About
          </Link>
          <a
            href="https://www.youtube.com/@Mado-Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:text-[color:var(--v2-ink)] sm:inline"
          >
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@madofinds"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:text-[color:var(--v2-ink)] sm:inline"
          >
            TikTok
          </a>
        </nav>
      </div>
    </header>
  );
}
