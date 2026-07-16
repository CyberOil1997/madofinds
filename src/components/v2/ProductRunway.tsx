"use client";

import { Product } from "@/data/products";
import { CozyProductCard } from "./CozyProductCard";

/**
 * Continuous horizontal marquee. Renders the products twice so the CSS
 * `translateX(-50%)` loop is seamless.
 * Pauses on hover / focus-within.
 */
export function ProductRunway({
  products,
  duration = 60,
  reverse = false,
  cardWidth = 280,
}: {
  products: Product[];
  duration?: number;
  reverse?: boolean;
  cardWidth?: number;
}) {
  if (products.length === 0) return null;
  const doubled = [...products, ...products];

  return (
    <div className="relative overflow-hidden">
      {/* Edge fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--v2-cream)] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--v2-cream)] to-transparent sm:w-24"
        aria-hidden
      />

      <div
        className={`marquee-track flex w-max gap-5 py-2 ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((p, i) => (
          <CozyProductCard
            key={`${p.id}-${i}`}
            product={p}
            width={cardWidth}
          />
        ))}
      </div>
    </div>
  );
}
