import type { Metadata } from "next";
import { HeaderV2 } from "@/components/v2/HeaderV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { ShelfSearch } from "@/components/v2/ShelfSearch";
import { NowOnVideo } from "@/components/v2/NowOnVideo";
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

        <ShelfSearch runway={runway} />

        <NowOnVideo />
        <CollectionShowcase />
        <BookmarkCTA />
      </main>
    </div>
  );
}
