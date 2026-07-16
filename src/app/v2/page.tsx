import type { Metadata } from "next";
import { HeaderV2 } from "@/components/v2/HeaderV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { ProductRunway } from "@/components/v2/ProductRunway";
import { VideoSpotlight } from "@/components/v2/VideoSpotlight";
import { CollectionShowcase } from "@/components/v2/CollectionShowcase";
import { BookmarkCTA } from "@/components/v2/BookmarkCTA";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Mado Finds — your happy place for Amazon finds",
  description:
    "A quiet little corner of the internet, thoughtfully stocked with the Amazon finds we can't stop thinking about.",
};

// Shuffle deterministically so the runway feels curated, not sequential
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

export default function V2Home() {
  const runway1 = seededOrder(PRODUCTS, 7);
  const runway2 = seededOrder(PRODUCTS, 13);

  return (
    <div className="min-h-screen bg-[color:var(--v2-cream)] font-sans text-[color:var(--v2-plum)]">
      <HeaderV2 />
      <main>
        <HeroV2 />

        {/* Runway 1 — this week's obsessions */}
        <section className="bg-[color:var(--v2-cream)] pb-8">
          <div className="mx-auto max-w-6xl px-6 pb-6">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-terracotta)]">
                  the runway
                </span>
                <h2
                  className="font-display mt-2 text-3xl leading-tight tracking-tight text-[color:var(--v2-plum)] sm:text-4xl"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
                >
                  drifting by, on{" "}
                  <em
                    className="text-[color:var(--v2-terracotta)]"
                    style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 400' }}
                  >
                    repeat
                  </em>
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-xs italic text-[color:var(--v2-plum-soft)] sm:block">
                hover to pause, tap to shop
              </p>
            </div>
          </div>
          <ProductRunway products={runway1} duration={80} cardWidth={210} />
        </section>

        {/* Featured video */}
        <VideoSpotlight />

        {/* Runway 2 — going the other way */}
        <section className="bg-[color:var(--v2-cream)] py-10">
          <div className="mx-auto max-w-6xl px-6 pb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--v2-terracotta)]">
              more little joys
            </span>
            <h2
              className="font-display mt-2 text-3xl leading-tight tracking-tight text-[color:var(--v2-plum)] sm:text-4xl"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 500' }}
            >
              a second lap, going{" "}
              <em
                className="text-[color:var(--v2-terracotta)]"
                style={{ fontVariationSettings: '"opsz" 72, "SOFT" 100, "wght" 400' }}
              >
                the other way
              </em>
            </h2>
          </div>
          <ProductRunway
            products={runway2}
            duration={95}
            reverse
            cardWidth={200}
          />
        </section>

        {/* Curated collections */}
        <CollectionShowcase />

        {/* Bookmark CTA */}
        <BookmarkCTA />
      </main>
    </div>
  );
}
