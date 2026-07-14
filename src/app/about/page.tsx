import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Target, FlaskConical, Play, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Mado Finds",
  description:
    "Mado Finds curates the best small-space living products on Amazon. Every recommendation is hand-picked, tested, and renter-friendly.",
};

const cards = [
  {
    icon: Target,
    title: "What we cover",
    body:
      "Storage, organization, multi-purpose furniture, and renter-friendly upgrades — sourced from Amazon and grouped into idea lists you can shop in one click.",
  },
  {
    icon: FlaskConical,
    title: "How we pick",
    body:
      "Every product on the site is one we would buy for ourselves. We prioritize genuine reviews, honest price ranges, and things that solve a real small-space problem.",
  },
  {
    icon: Play,
    title: "YouTube & TikTok",
    body:
      "We show these products in action on YouTube Shorts and TikTok. See something you love in a video? The full list lives on the homepage.",
  },
  {
    icon: Users,
    title: "Who we are",
    body:
      "Mado Finds is a project by Mado Digital, a two-person indie studio building small, useful things on the internet.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-amber-50/70 via-white to-white dark:border-zinc-800/70 dark:from-amber-950/20 dark:via-zinc-950 dark:to-zinc-950">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(251,191,36,0.15),transparent_70%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/60 px-3 py-1.5 text-xs font-medium text-amber-800 shadow-sm backdrop-blur-sm dark:border-amber-800/60 dark:bg-zinc-950/40 dark:text-amber-300">
              About Mado Finds
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
              Curated finds for people who live small.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-300">
              Mado Finds is a hand-curated shop of the small-space living
              products we actually use — the kind of stuff that makes a studio
              feel like a one-bedroom, turns dead corners into storage, and
              never damages a security deposit.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm shadow-zinc-900/[0.02] transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/5 dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:shadow-black/40"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 dark:from-amber-950/40 dark:to-orange-950/40 dark:text-amber-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Affiliate disclosure
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Mado Finds participates in the Amazon Services LLC Associates
              Program, an affiliate advertising program designed to provide a
              means for sites to earn advertising fees by advertising and
              linking to Amazon.com. When you click a link on this site and
              purchase a product, we may earn a small commission at no extra
              cost to you. That commission is what keeps this site running —
              and it never influences what we choose to feature. If we would
              not buy it ourselves, it does not go on the site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
