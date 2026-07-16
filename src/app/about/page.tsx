import type { Metadata } from "next";
import { HeaderV2 } from "@/components/v2/HeaderV2";

export const metadata: Metadata = {
  title: "About — Mado Finds",
  description:
    "Mado Finds curates the best of Amazon into a scrollable shop. Every recommendation is one we would buy for ourselves.",
};

const cards = [
  {
    title: "What we cover",
    body:
      "Small kitchen, home organization, dorm & studio, cleaning hacks, home improvement — grouped so you can jump straight to what you need.",
  },
  {
    title: "How we pick",
    body:
      "Every product is one we would buy for ourselves. We prioritize honest price ranges, genuine reviews, and things people actually love using.",
  },
  {
    title: "YouTube & TikTok",
    body:
      "We show these finds in action on YouTube Shorts and TikTok. Saw something you liked in a video? The full list lives on the homepage.",
  },
  {
    title: "Who we are",
    body:
      "Mado Finds is a project by Mado Digital, a small studio building useful little things on the internet.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[color:var(--v2-cream)] font-sans text-[color:var(--v2-ink)]">
      <HeaderV2 />
      <main>
        <section className="relative overflow-hidden bg-[color:var(--v2-cream)] pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="blob-a absolute -top-32 -left-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle at 30% 30%, var(--v2-blush), transparent 70%)" }}
            />
            <div
              className="blob-b absolute -top-20 right-[-10rem] h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle at 60% 40%, var(--v2-peach), transparent 70%)" }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
              About
            </span>
            <h1
              className="font-display mt-4 text-5xl leading-[1.02] tracking-tight text-[color:var(--v2-ink)] sm:text-6xl"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 500' }}
            >
              A shoppable shelf of{" "}
              <em
                className="text-[color:var(--v2-clay)]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 400' }}
              >
                Amazon finds.
              </em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--v2-ink-soft)] sm:text-lg">
              We spend the time so you don&apos;t have to. Every product on the
              site is one we&apos;d buy for ourselves, priced right, and worth
              clicking through to.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[color:var(--v2-fog)]/60 bg-[color:var(--v2-paper)] p-6 shadow-boutique transition-all hover:-translate-y-0.5 hover:shadow-boutique-lg"
              >
                <h2 className="font-display text-lg text-[color:var(--v2-ink)]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--v2-ink-soft)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[color:var(--v2-fog)]/60 bg-[color:var(--v2-cream-2)] p-6 sm:p-8">
            <h2 className="font-display text-lg text-[color:var(--v2-ink)]">
              Affiliate disclosure
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--v2-ink-soft)]">
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
        </section>
      </main>
    </div>
  );
}
