import type { Metadata } from "next";
import { HeaderV2 } from "@/components/v2/HeaderV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { ProductRunway } from "@/components/v2/ProductRunway";
import { VideoSpotlight } from "@/components/v2/VideoSpotlight";
import { CollectionShowcase } from "@/components/v2/CollectionShowcase";
import { BookmarkCTA } from "@/components/v2/BookmarkCTA";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Mado Finds — Amazon finds, worth buying.",
  description:
    "A curated shop of Amazon finds we've tested, kept, and would buy again. Browse by kitchen, dorm, cleaning hacks, or the whole shelf.",
};

function seededOrder<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function Home() {
  const runway = seededOrder(PRODUCTS, 7);

  return (
    <div className="min-h-screen bg-[color:var(--v2-cream)] font-sans text-[color:var(--v2-ink)]">
      <HeaderV2 />
      <main>
        <HeroV2 />

        <section className="bg-[color:var(--v2-cream)] pb-16">
          <div className="mx-auto max-w-6xl px-6 pb-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-clay)]">
                  The shelf
                </span>
                <h2
                  className="font-display mt-2 text-3xl leading-tight tracking-tight text-[color:var(--v2-ink)] sm:text-4xl"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
                >
                  Everything, at a glance.
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-xs text-[color:var(--v2-ink-mute)] sm:block">
                Hover to pause. Tap any card to buy on Amazon.
              </p>
            </div>
          </div>
          <ProductRunway products={runway} duration={90} cardWidth={280} />
        </section>

        <VideoSpotlight />
        <CollectionShowcase />
        <BookmarkCTA />
      </main>
    </div>
  );
}
