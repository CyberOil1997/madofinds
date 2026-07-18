// Provenance for every product featured in a Mado Finds episode.
// Records where the source demonstration footage came from, so we can:
// - Credit original creators
// - Track which reference channels perform best
// - Refresh a product's demo clip later without re-scouting
// - Rebuild videos deterministically from this manifest

export type SourceVideo = {
  /** Original creator URL where we sourced the demo clip. */
  url: string;
  /** Kind of source content. */
  type: "tiktok" | "youtube-shorts" | "youtube-long" | "amazon-pdp" | "tiktok-shop";
  /** Creator handle / channel name for credit. */
  creator: string;
  /** Which macro segment(s) from the reference video (for compilation-style sources). */
  segmentIds?: number[];
  /** Approximate demo start seconds in the source clip. */
  demoStartSec?: number;
  /** Approximate demo end seconds in the source clip. */
  demoEndSec?: number;
  /** Free-form notes (matching text-overlay label in source, scoring, etc). */
  notes?: string;
};

export type EpisodeInfo = {
  slug: string;
  /** Our own YouTube Short video ID (once uploaded). */
  ytVideoId: string;
  /** Our own TikTok video ID (once cross-posted). */
  tiktokVideoId?: string;
  title: string;
  publishedAt: string; // YYYY-MM-DD
  productAsins: string[]; // in ascending countdown order (matches pill labels 1-9)
};

/**
 * ASIN → source video that we used to demonstrate this product in a Mado Finds episode.
 * When the same product is refeatured, prefer keeping the latest source (or add a
 * `history` array later if we start refeaturing).
 */
export const PRODUCT_SOURCES: Record<string, SourceVideo> = {
  // ===== Episode 1 (v9 kitchen) — scouted per-product from various TikTok creators =====
  "B01J4ADMI8": { url: "https://www.tiktok.com/@freakinreviews/video/7300272932972924206", type: "tiktok", creator: "@freakinreviews", notes: "Food Huggers viral hack demo" },
  "B01MT0UL8N": { url: "https://www.tiktok.com/@curatedbyleah/video/7301813480913505578", type: "tiktok", creator: "@curatedbyleah", notes: "Silicone stove gap covers" },
  "B0BP7DJ972": { url: "https://www.tiktok.com/@wendyg_official/video/7296466870851423520", type: "tiktok", creator: "@wendyg_official", notes: "Magnetic curtain tiebacks — renter fix" },
  "B01JG57JJ4": { url: "https://www.tiktok.com/@nbcselect/video/7251365499991379243", type: "tiktok", creator: "@nbcselect", notes: "Whiskware pancake batter bottle — NBC Select feature" },
  "B0BSKQW2T2": { url: "https://www.tiktok.com/@jodie.thedesigntwins/video/7394863138975321387", type: "tiktok", creator: "@jodie.thedesigntwins", notes: "Under-cabinet paper towel holder" },
  "B089SNZD4N": { url: "https://www.tiktok.com/@dealhuntingduo/video/7611959995181124878", type: "tiktok", creator: "@dealhuntingduo", notes: "Robo Twist electric jar opener" },
  "B0DPCTTT18": { url: "https://www.tiktok.com/@kitchen_diaries_by_zubda/video/7609290603314122006", type: "tiktok", creator: "@kitchen_diaries_by_zubda", notes: "USB rechargeable mini food chopper" },
  "B0FQHTP1J4": { url: "https://www.tiktok.com/@djr9462/video/7570768919632301342", type: "tiktok", creator: "@djr9462", notes: "Silicone boil-over safeguard lid" },
  "B0DRV3874K": { url: "https://www.tiktok.com/@coobiiya/video/7612848910389775646", type: "tiktok", creator: "@coobiiya", notes: "Mason jar vacuum sealer" },

  // ===== Episode 2 (v10L Sam Findz remix) — sourced from Sam Findz compilation =====
  "B0DK4VM1SX": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [22, 23], notes: "Foldable 3-in-1 wireless charger" },
  "B0CQLXQW4T": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [11, 12], notes: "Torso-shaped rotating ironing board" },
  "B08QHVCFH8": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [24, 25], notes: "Vacuum suction cup hooks" },
  "B0C3BC4QG2": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [4, 5], notes: "Clip-on book light" },
  "B0BQQSBTZP": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [13], notes: "Self-stirring mug" },
  "B0FW4PYZ5K": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [1], notes: "Mini handheld bag sealer" },
  "B08112XB28": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [17, 18], notes: "Ceptics universal travel adapter" },
  "B0F6Y386KK": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [21], notes: "Bamboo foldable lap desk (swap-in — Sam Findz seg is 'Portable Desk')" },
  "B0BMYD1TZF": { url: "https://www.youtube.com/shorts/MWkIhrE270M", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [6], notes: "Butter slicer" },

  // ===== Episode 3 (v11 outdoor/kitchen/office) — sourced from Sam Findz mEmqAEdISm0 =====
  "B083NHRGP3": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [4], notes: "Solar Lights — ep3" },
  "B0F2J57BC9": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [12], notes: "Portable neck fan — ep3 (swapped from misidentified knife sharpener)" },
  "B0FC71149B": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [6], notes: "Pedal Exerciser — ep3 (fixed match)" },
  "B0BQ5M9MRN": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [13], notes: "Mini Fridge — ep3" },
  "B0BGZG7W8D": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [10], notes: "Standing Desk — ep3" },
  "B00FGPWJXA": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [8], notes: "Circulator Fan — ep3 (fixed match)" },
  "B0FJRSG8VL": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [20], notes: "Pop-Up Outlet — ep3" },
  "B0DJ88YX8H": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [19], notes: "Floor Lounger — ep3 (fixed match)" },
  "B010TCP3SC": { url: "https://www.youtube.com/shorts/mEmqAEdISm0", type: "youtube-shorts", creator: "Sam Findz", segmentIds: [11], notes: "Waffle Maker — ep3" },

  // ===== Episode 4 (v14 outdoor) — sourced from Sam Findz hkDffqGa6-4 =====
  "B0H7J6NY2T": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "pool-lounger — ep4" },
  "B0F9SVKH2P": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "movie-screen — ep4" },
  "B0GVNBNY8T": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "sand-remover — ep4" },
  "B0F98YYJ6P": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "laptop-shade — ep4" },
  "B0B5QCG93T": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "water-balloons — ep4" },
  "B0D1NZZG6Y": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "drink-belt — ep4" },
  "B0GTRKXN1J": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "bug-zapper — ep4" },
  "B0D7HPRRX2": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "phone-umbrella — ep4" },
  "B0H1WQ4PL9": { url: "https://www.youtube.com/shorts/hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "cooler-table — ep4" },

  // ===== Episode 5 (v15 kitchen) — sourced from Sam Findz scAo2EZc9qQ =====
  "B073FT7QTN": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "onion-holder — ep5" },
  "B0DPWWLVS9": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "produce-savers — ep5" },
  "B0FSK7CV1B": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "divided-pot — ep5" },
  "B0DCC15J2D": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "fridge-lockbox — ep5" },
  "B085Q5F9VH": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "glass-brush — ep5" },
  "B0GTQDGDN4": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "bowl-liners — ep5" },
  "B015EKXE2G": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "silicone-lids — ep5" },
  "B0GTNWVV6H": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "citrus-juicer — ep5" },
  "B0H4VZ38J7": { url: "https://www.youtube.com/shorts/scAo2EZc9qQ", type: "youtube-shorts", creator: "Sam Findz", notes: "vacuum-sealer — ep5" },
};

/**
 * Full manifest of Mado Finds episodes — links our internal identifiers to
 * external YouTube/TikTok video IDs plus the countdown-ordered product ASINs.
 */
export const EPISODES: EpisodeInfo[] = [
  {
    slug: "ep1-v9-kitchen",
    ytVideoId: "qLQAF9Az-KE",
    title: "9 Amazon Finds You Didn't Know You Needed 🤯 #shorts",
    publishedAt: "2026-07-15",
    productAsins: [
      // ep1 was countdown 9→1 (Food Huggers = 9, Mason Jar Vacuum Sealer = 1)
      "B01J4ADMI8",  // #9 Food Huggers
      "B01MT0UL8N",  // #8 Silicone Stove Gap Covers
      "B0BP7DJ972",  // #7 Magnetic Curtain Tiebacks
      "B01JG57JJ4",  // #6 Whiskware Pancake Bottle
      "B0BSKQW2T2",  // #5 Under-Cabinet Paper Towel Holder
      "B089SNZD4N",  // #4 Robo Twist Jar Opener
      "B0DPCTTT18",  // #3 USB Mini Food Chopper
      "B0FQHTP1J4",  // #2 Silicone Boil-Over Guard
      "B0DRV3874K",  // #1 Mason Jar Vacuum Sealer
    ],
  },
  {
    slug: "ep2-v10L-samref",
    ytVideoId: "-eMhSy7Gym0",
    tiktokVideoId: "7663244680305331487",
    title: "9 Amazon Finds That Just Solve Problems 🤯",
    publishedAt: "2026-07-16",
    productAsins: [
      // ep2 was ascending 1→9 (new format from v10L onward)
      "B0DK4VM1SX",  // #1 Foldable Wireless Charging Station
      "B0CQLXQW4T",  // #2 Rotating Ironing Board
      "B08QHVCFH8",  // #3 Vacuum Suction Cup Hooks
      "B0C3BC4QG2",  // #4 Clip-On Book Light
      "B0BQQSBTZP",  // #5 Self-Stirring Coffee Mug
      "B0FW4PYZ5K",  // #6 Mini Bag Sealer
      "B08112XB28",  // #7 Universal Travel Adapter
      "B0F6Y386KK",  // #8 Bamboo Lap Desk
      "B0BMYD1TZF",  // #9 Butter Slicer
    ],
  },
  {
    slug: "ep3-v11-samref",
    ytVideoId: "7NG2hhkPIIM",
    title: "9 Amazon Finds That Feel Like Cheating 🤯",
    publishedAt: "2026-07-17",
    productAsins: [
      "B083NHRGP3",  // Solar Lights
      "B0F2J57BC9",  // Knife Sharpener
      "B0FC71149B",  // Floor Scrubber
      "B0BQ5M9MRN",  // Mini Fridge
      "B0BGZG7W8D",  // Standing Desk
      "B00FGPWJXA",  // Tower Fan
      "B0FJRSG8VL",  // Pop-Up Outlet
      "B0DJ88YX8H",  // Bean Bag
      "B010TCP3SC",  // Waffle Maker
    ],
  },
  {
    slug: "ep4-v14-samref",
    ytVideoId: "KC2CYYc0h84",
    title: "Amazon's outdoor aisle has no business being this good ☀️",
    publishedAt: "2026-07-18",
    productAsins: [
      "B0H7J6NY2T",
      "B0F9SVKH2P",
      "B0GVNBNY8T",
      "B0F98YYJ6P",
      "B0B5QCG93T",
      "B0D1NZZG6Y",
      "B0GTRKXN1J",
      "B0D7HPRRX2",
      "B0H1WQ4PL9",
    ],
  },
  {
    slug: "ep5-v15-samref",
    ytVideoId: "IG0nRmYv5IM",
    title: "Amazon kitchen finds that actually earn their drawer space 🍳",
    publishedAt: "2026-07-19",
    productAsins: [
      "B073FT7QTN",
      "B0DPWWLVS9",
      "B0FSK7CV1B",
      "B0DCC15J2D",
      "B085Q5F9VH",
      "B0GTQDGDN4",
      "B015EKXE2G",
      "B0GTNWVV6H",
      "B0H4VZ38J7",
    ],
  },
];

/** Convenience — get source video info for a given ASIN. */
export function sourceFor(asin: string): SourceVideo | undefined {
  return PRODUCT_SOURCES[asin];
}

/** Convenience — get the episode that first featured a given ASIN. */
export function firstEpisodeFor(asin: string): EpisodeInfo | undefined {
  return EPISODES.find((e) => e.productAsins.includes(asin));
}
