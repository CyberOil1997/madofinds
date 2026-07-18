// Joins the episode manifest (product-sources) with the product catalog so the
// "Now on video" feed can render each published Short alongside the exact
// products it features, newest first.
import { EPISODES, type EpisodeInfo } from "./product-sources";
import { PRODUCTS, type Product } from "./products";

export type EpisodeWithProducts = EpisodeInfo & { products: Product[] };

/** Today as YYYY-MM-DD. Episodes scheduled for a future date are held back so
 *  the feed never renders an embed for a video that isn't public yet. */
const TODAY = new Date().toISOString().slice(0, 10);

/** Published episodes (real YouTube id AND publish date reached), newest first,
 *  each with its products resolved in the order they appear in the video. */
export const EPISODE_FEED: EpisodeWithProducts[] = EPISODES.filter(
  (e) => e.ytVideoId && e.ytVideoId.length > 0 && e.publishedAt <= TODAY,
)
  .map((e) => ({
    ...e,
    products: e.productAsins
      .map((asin) => PRODUCTS.find((p) => p.asin === asin))
      .filter((p): p is Product => Boolean(p)),
  }))
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

/** A cleaner display title — strips trailing hashtags/emoji noise from the raw
 *  upload title so the feed heading reads nicely. */
export function displayTitle(raw: string): string {
  return raw
    .replace(/#[^\s#]+/g, "")
    .replace(/\s+🤯|🤯/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
