import Link from "next/link";
import { Play, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-zinc-50/70 dark:border-zinc-800/70 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-bold text-white shadow-sm">
                M
              </span>
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Mado Finds
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              A curated feed of Amazon finds worth clicking Buy on. New drops
              every week — scroll, shop, repeat.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#collections"
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-500">
              Follow
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <Play className="h-3 w-3 fill-current" aria-hidden /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@madodigital.net"
                  className="inline-flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white/60 p-5 text-xs leading-relaxed text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
          <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
            Affiliate disclosure ·
          </strong>{" "}
          As an Amazon Associate, Mado Finds earns from qualifying purchases.
          Links on this site are affiliate links, meaning we may earn a
          commission at no extra cost to you when you click through and buy.
          This never influences what we recommend — if we would not buy it
          ourselves, it does not go on the site.
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Mado Digital. All rights reserved.</p>
          <p>Handpicked, tested, and worth the click.</p>
        </div>
      </div>
    </footer>
  );
}
