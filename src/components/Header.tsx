import Link from "next/link";
import { Play } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/75 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 font-bold text-white shadow-sm shadow-amber-500/20 ring-1 ring-amber-500/20 transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-500/30"
            aria-hidden
          >
            M
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Mado Finds
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/#collections"
            className="hidden rounded-lg px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-50"
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-1.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-50"
          >
            About
          </Link>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-md dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
            <span>Follow</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
