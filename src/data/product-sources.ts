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

  // ===== Episode 6 (v16 growth path) =====
  "B01B5SOUF6": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "corn-stripper — ep6" },
  "B0DGTR965B": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "heated-scoop — ep6" },
  "B07ZHK68K8": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "can-lids — ep6" },
  "B0FK2NP67T": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "soup-molds — ep6" },
  "B0G2BN7HV1": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "pill-organizer — ep6" },
  "B0GYF876KD": { url: "https://www.youtube.com/shorts/09kr_U9y1SM", type: "youtube-shorts", creator: "Sam Findz", notes: "math-stamp — ep6" },

  // ===== Episode 7 (v17 growth path) =====
  "B0H6P7Y3MD": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "bag-sealer — ep7" },
  "B096DJ3224": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "drain-strainer — ep7" },
  "B09332G51G": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "nail-clipper — ep7" },
  "B0DYV8VLFD": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "can-opener — ep7" },
  "B07L79MNDC": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "crepe-maker — ep7" },
  "B0F6YK4WR2": { url: "https://www.youtube.com/shorts/PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "book-lamp — ep7" },

  // ===== Episode 8 (v18 growth path) =====
  "B0DDPTXD7T": { url: "https://www.youtube.com/watch?v=UW1-FUoOfY4", type: "youtube-shorts", creator: "Sam Findz", notes: "candy-dispenser — ep8" },
  "B0BLRYMP5R": { url: "https://www.youtube.com/watch?v=UW1-FUoOfY4", type: "youtube-shorts", creator: "Sam Findz", notes: "lemon-screws — ep8" },
  "B0GJ5DD38G": { url: "https://www.youtube.com/watch?v=UW1-FUoOfY4", type: "youtube-shorts", creator: "Sam Findz", notes: "travel-bottles — ep8" },
  "B0G39BSXHS": { url: "https://www.youtube.com/watch?v=UW1-FUoOfY4", type: "youtube-shorts", creator: "Sam Findz", notes: "salad-bowl — ep8" },
  "B0812CSL1P": { url: "https://www.youtube.com/watch?v=UW1-FUoOfY4", type: "youtube-shorts", creator: "Sam Findz", notes: "stone-bath-mat — ep8" },

  // ===== Episode 9 (v19 growth path) =====
  "B0DS4DXNR6": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-ed-clip-strainer — ep9" },
  "B0G4C14DXZ": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "drain-cover — ep9" },
  "B07SHL6P8V": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "tube-squeezer — ep9" },
  "B0BXDKGBH8": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "grape-cutter — ep9" },
  "B07BR9YDGF": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "travel-hangers — ep9" },
  "B0C8MK5B31": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "fridge-turntable — ep9" },

  // ===== Episode 10 (v20 fast-cut path) =====
  "B0GSQW4RSH": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-foot-pull — ep10" },
  "B0G5B2YGVJ": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-whisk-straw — ep10" },
  "B0GGXBQL3S": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-tortilla-sealer — ep10" },
  "B00020O3YC": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-butter-cutter — ep10" },
  "B0F5QMR6HV": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-magnetic-frames — ep10" },
  "B08ZL65YCD": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-sink-topper — ep10" },
  "B0B3WSZ3QP": { url: "https://www.youtube.com/watch?v=rmmse23sJZE", type: "youtube-shorts", creator: "Sam Findz", notes: "sf-e10-lazy-susan — ep10" },

  // ===== Episode 11 (v21 big-list) =====
  "B0CM3ML9TZ": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "rolling-pin — ep11" },
  "B0CRRWZHK1": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "sheep-tp — ep11" },
  "B00VYC263M": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "soda — ep11" },
  "B0FNML674Z": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "candy-frame — ep11" },
  "B0GD6BKL2W": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "museum-gel — ep11" },
  "B0DKGZMQPR": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "fan-cleaner — ep11" },
  "B0G9LLVMX3": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "flip-flops — ep11" },
  "B0BHPKKF57": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "measuring-tape — ep11" },
  "B0CZL9R25L": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "hat-organizer — ep11" },
  "B0GTRB7RDG": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "butter-knife — ep11" },
  "B0DYDP68ST": { url: "https://www.youtube.com/watch?v=pwkbYjKchLY", type: "youtube-shorts", creator: "Sam Findz", notes: "lint-roller — ep11" },

  // ===== Episode 12 (v22 fast-cut) =====
  "B0CJRM936N": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "lint-remover — ep12" },
  "B0FHHXSGJJ": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "dish-soap — ep12" },
  "B00PR82UC6": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "bag-sealer — ep12" },
  "B0CN92X7JP": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "drawer-org — ep12" },
  "B0G73357VM": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "door-stopper — ep12" },
  "B09GW2H7W6": { url: "https://www.youtube.com/watch?v=5gWBWcQEV68", type: "youtube-shorts", creator: "Sam Findz", notes: "flex-vase — ep12" },

  // ===== Episode 13 (v23 fast-cut) =====
  "B0D2HV4GZ2": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "electric-screwdriver — ep13" },
  "B0BXKHKDCX": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "sphere-ice-mold — ep13" },
  "B0CGRTY4ZK": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "magnetic-spoons — ep13" },
  "B0GL951NDV": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "shoe-organizers — ep13" },
  "B0855DXKL8": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "brush-cleaner — ep13" },
  "B0DCFYK4ZL": { url: "https://www.youtube.com/watch?v=xti_38azqpk", type: "youtube-shorts", creator: "Sam Findz", notes: "bottle-lamp — ep13" },

  // ===== Episode 14 (v24 fast-cut) =====
  "B0H4W2GJTX": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "detergent-pump — ep14" },
  "B07NVTGTT8": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "detangler-brush — ep14" },
  "B0DCKCK326": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "veggie-chopper — ep14" },
  "B0D2GWFWLF": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "tumbler-brush — ep14" },
  "B0821VS3ZM": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "magnetic-soap — ep14" },
  "B0DLWM657D": { url: "https://www.youtube.com/watch?v=KBUjzeY6eNQ", type: "youtube-shorts", creator: "Sam Findz", notes: "door-chime — ep14" },

  // ===== Episode 15 (v25 fast-cut) =====
  "B088CR8NMD": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "ice-tray — ep15" },
  "B077NMWWM7": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "cereal-keeper — ep15" },
  "B00068O22S": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "knob-covers — ep15" },
  "B0H6HZ3XH3": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "garlic-dicer — ep15" },
  "B0B1THXR4D": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "watering-spikes — ep15" },
  "B0D7D61TVY": { url: "https://www.youtube.com/watch?v=qj0EO3sqzoQ", type: "youtube-shorts", creator: "Sam Findz", notes: "hot-dog-roller — ep15" },

  // ===== Episode 16 (v26 fast-cut) =====
  "B0FLBTW9L4": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "magsafe-charger — ep16" },
  "B0D3X1JDK4": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "egg-cooker — ep16" },
  "B07JNF1YNK": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "oven-lock — ep16" },
  "B0DP6DCG3J": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "grain-dispenser — ep16" },
  "B0CCTNDWRQ": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "wrap-dispenser — ep16" },
  "B0BWW8G955": { url: "https://www.youtube.com/watch?v=xXNyr5Q3eMU", type: "youtube-shorts", creator: "Sam Findz", notes: "jewelry-box — ep16" },

  // ===== Episode 17 (v27 fast-cut) =====
  "B0F3GL5MCP": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "soap-dispenser — ep17" },
  "B0DQXSYDMM": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "utensil-holder — ep17" },
  "B0DKJM4HFC": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "herb-saver — ep17" },
  "B0CC6DJQMW": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "sheet-holders — ep17" },
  "B01BOX86HU": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "battery-adapters — ep17" },
  "B0CH8DQKMN": { url: "https://www.youtube.com/watch?v=Sq0BI70-B4I", type: "youtube-shorts", creator: "Sam Findz", notes: "butter-slicer — ep17" },

  // ===== Episode 18 (v28 viral) =====
  "B0GYXQ1MMK": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "range-hood — ep18" },
  "B08C355HFF": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "auto-stirrer — ep18" },
  "B0DQFPS54P": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "ice-cream-maker — ep18" },
  "B0FVRXFZ9F": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "fruit-washer — ep18" },
  "B08C3PGW29": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "sandwich-maker — ep18" },
  "B08TWN43G4": { url: "https://www.youtube.com/watch?v=Y5xoV5iKWfY", type: "youtube-shorts", creator: "Sam Findz", notes: "onion-holder — ep18" },

  // ===== Episode 19 (v29 fast-cut) =====
  "B0BQZBMXD4": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "airplane-adapter — ep19" },
  "B0797FJQT8": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "sole-cleaner — ep19" },
  "B0D37JDBN4": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "rotary-grater — ep19" },
  "B0DXL7W25J": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "cookie-clip — ep19" },
  "B0C5X5JDW7": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "clear-notes — ep19" },
  "B0DKNPMD37": { url: "https://www.youtube.com/watch?v=pwCkvQREPPo", type: "youtube-shorts", creator: "Sam Findz", notes: "caster-wheels — ep19" },

  // ===== Episode 20 (v30 fast-cut) =====
  "B08MFBDGGF": { url: "https://www.youtube.com/watch?v=_rzOkifYqPk", type: "youtube-shorts", creator: "Sam Findz", notes: "remote-outlet — ep20" },
  "B0FGXK98K9": { url: "https://www.youtube.com/watch?v=_rzOkifYqPk", type: "youtube-shorts", creator: "Sam Findz", notes: "fold-hamper — ep20" },
  "B0BRKH78N7": { url: "https://www.youtube.com/watch?v=_rzOkifYqPk", type: "youtube-shorts", creator: "Sam Findz", notes: "latte-pen — ep20" },
  "B00MH74S16": { url: "https://www.youtube.com/watch?v=_rzOkifYqPk", type: "youtube-shorts", creator: "Sam Findz", notes: "bed-risers — ep20" },

  // ===== Episode 21 (v31 fast-cut) =====
  "B07796MWGN": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "whisk-wiper — ep21" },
  "B0CBK1RKF9": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "slushy-cup — ep21" },
  "B0D8973DV8": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "arc-lighter — ep21" },
  "B088J2TN8W": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "soap-loofah — ep21" },
  "B0D3WG2SHF": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "compressed-towels — ep21" },
  "B0BGL29DS5": { url: "https://www.youtube.com/watch?v=XjACM361LLA", type: "youtube-shorts", creator: "Sam Findz", notes: "cabinet-locks — ep21" },

  // ===== Episode 22 (v32 fast-cut) =====
  "B0CKYJFS48": { url: "https://www.youtube.com/watch?v=N3MVOqzIOec", type: "youtube-shorts", creator: "Sam Findz", notes: "squeegee-broom — ep22" },
  "B0F4DG339S": { url: "https://www.youtube.com/watch?v=N3MVOqzIOec", type: "youtube-shorts", creator: "Sam Findz", notes: "key-finder — ep22" },
  "B0885WX1YM": { url: "https://www.youtube.com/watch?v=N3MVOqzIOec", type: "youtube-shorts", creator: "Sam Findz", notes: "cutting-boards — ep22" },
  "B0GMW6KJ5G": { url: "https://www.youtube.com/watch?v=N3MVOqzIOec", type: "youtube-shorts", creator: "Sam Findz", notes: "number-candles — ep22" },
  "B08M5V3X1L": { url: "https://www.youtube.com/watch?v=N3MVOqzIOec", type: "youtube-shorts", creator: "Sam Findz", notes: "remote-holder — ep22" },

  // ===== Episode 23 (v33 fast-cut) =====
  "B07K1K2DLW": { url: "https://www.youtube.com/watch?v=XR0d0NEQx4I", type: "youtube-shorts", creator: "Sam Findz", notes: "spice-organizer — ep23" },
  "B0CJF94M8J": { url: "https://www.youtube.com/watch?v=XR0d0NEQx4I", type: "youtube-shorts", creator: "Sam Findz", notes: "oil-sprayer — ep23" },
  "B0CC4VJFLC": { url: "https://www.youtube.com/watch?v=XR0d0NEQx4I", type: "youtube-shorts", creator: "Sam Findz", notes: "can-organizer — ep23" },
  "B0B4TCN8H9": { url: "https://www.youtube.com/watch?v=XR0d0NEQx4I", type: "youtube-shorts", creator: "Sam Findz", notes: "measuring-spoon — ep23" },
  "B0D4526D6M": { url: "https://www.youtube.com/watch?v=XR0d0NEQx4I", type: "youtube-shorts", creator: "Sam Findz", notes: "spatula-tongs — ep23" },

  // ===== Episode 24 (v34 single-hero) =====
  "B0H79GWT92": { url: "https://www.youtube.com/watch?v=KK9F7k6c1OI", type: "youtube-shorts", creator: "Sam Findz", notes: "drain-cleaner — ep24" },

  // ===== Episode 25 (v35 single-hero) =====
  "B0HCHWVQV1": { url: "https://www.youtube.com/watch?v=PJ4OsCfSP2c", type: "youtube-shorts", creator: "Sam Findz", notes: "can-opener — ep25" },

  // ===== Episode 26 (v36 niche fast-cut) =====
  "B0GXF2MHM6": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "water-balloons — ep26" },
  "B0GS8W3BTL": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "phone-umbrella — ep26" },
  "B0FFT624QW": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "sand-remover — ep26" },
  "B0BKQ7MY3L": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "portable-fan — ep26" },
  "B09NM53VGY": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "drink-belt — ep26" },
  "B0CHVQG62J": { url: "https://www.youtube.com/watch?v=hkDffqGa6-4", type: "youtube-shorts", creator: "Sam Findz", notes: "waterproof-cards — ep26" },

  // ===== Episode 27 (v37 niche fast-cut) =====
  "B08BNRQV8J": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "wheel-desk — ep27" },
  "B06VVPWSXM": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "cargo-blocks — ep27" },
  "B0DFC6KTDH": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "retract-charger — ep27" },
  "B0C7SVNF9H": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "cup-expander — ep27" },
  "B08SQ44CGZ": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "panoramic-mirror — ep27" },
  "B0DLKBSJ6F": { url: "https://www.youtube.com/watch?v=qekpkMMjHSI", type: "youtube-shorts", creator: "Sam Findz", notes: "hanging-trash — ep27" },

  // ===== Standalone add (no video yet) =====
  "B0GV1NPJF2": { url: "https://www.amazon.com/dp/B0GV1NPJF2", type: "amazon-pdp", creator: "Mado Finds", notes: "shark-breatheclear-air-purifier — standalone add" },

  // ===== Episode 28 (v38 single-hero) =====
  "B0G13DGFKM": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "ice-cream-sandwich — ep28" },

  // ===== Episode 29 (v39 countdown) =====
  "B0C1NJDTTX": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "spin-scrubber — ep29" },
  "B0CGRGRXPY": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "chicken-shredder — ep29" },
  "B0FT7NWBBK": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "garment-steamer — ep29" },
  "B0DB23P5RY": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "shoe-rack — ep29" },
  "B0GZ29X548": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "rechargeable-aa — ep29" },
  "B0DZ6KKX5K": { url: "https://www.youtube.com/watch?v=BG7IjizhjCs", type: "youtube-shorts", creator: "Sam Findz", notes: "folding-fan — ep29" },

  // ===== Episode 30 (v40 countdown) =====
  "B0DF6TL1KR": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "stanley-divider — ep30" },
  "B0CWRGBT96": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "defrost-tray — ep30" },
  "B0FB92WTCZ": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "magnetic-clips — ep30" },
  "B094NTCSDJ": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "yolk-separator — ep30" },
  "B0CLZP48BK": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "wrap-dispenser — ep30" },
  "B0BN1L81BQ": { url: "https://www.youtube.com/watch?v=pnHqarCjQeI", type: "youtube-shorts", creator: "Sam Findz", notes: "hair-organizer — ep30" },
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
  {
    slug: "ep6-v16-samref",
    ytVideoId: "jdtD-k3EJ3Q",
    title: "6 things I genuinely didn't know existed 🤯",
    publishedAt: "2026-07-20",
    productAsins: [
      "B01B5SOUF6",
      "B0DGTR965B",
      "B07ZHK68K8",
      "B0FK2NP67T",
      "B0G2BN7HV1",
      "B0GYF876KD",
    ],
  },
  {
    slug: "ep7-v17-samref",
    ytVideoId: "aJ8G5ks-ElQ",
    title: "6 things I'd never seen before 🤯",
    publishedAt: "2026-07-21",
    productAsins: [
      "B0H6P7Y3MD",
      "B096DJ3224",
      "B09332G51G",
      "B0DYV8VLFD",
      "B07L79MNDC",
      "B0F6YK4WR2",
    ],
  },
  {
    slug: "ep8-v18-samref",
    ytVideoId: "iWIuUItS26I",
    title: "5 things I'd buy again immediately 🤯",
    publishedAt: "2026-07-22",
    productAsins: [
      "B0DDPTXD7T",
      "B0BLRYMP5R",
      "B0GJ5DD38G",
      "B0G39BSXHS",
      "B0812CSL1P",
    ],
  },
  {
    slug: "ep9-v19-samref",
    ytVideoId: "1EjkioNgBTs",
    title: "6 things under $15 that I actually use 🤯",
    publishedAt: "2026-07-23",
    productAsins: [
      "B0DS4DXNR6",
      "B0G4C14DXZ",
      "B07SHL6P8V",
      "B0BXDKGBH8",
      "B07BR9YDGF",
      "B0C8MK5B31",
    ],
  },
  {
    slug: "ep10-v20-samref",
    ytVideoId: "3ci8ofJeuaQ",
    title: "7 Amazon things I use every single week 🤯",
    publishedAt: "2026-07-24",
    productAsins: [
      "B0GSQW4RSH",
      "B0G5B2YGVJ",
      "B0GGXBQL3S",
      "B00020O3YC",
      "B0F5QMR6HV",
      "B08ZL65YCD",
      "B0B3WSZ3QP",
    ],
  },
  {
    slug: "ep11-v21-samref",
    ytVideoId: "r7fIkuvxrWo",
    title: "11 cheap Amazon things that make life easier 🤯",
    publishedAt: "2026-07-25",
    productAsins: [
      "B0CM3ML9TZ",
      "B0CRRWZHK1",
      "B00VYC263M",
      "B0FNML674Z",
      "B0GD6BKL2W",
      "B0DKGZMQPR",
      "B0G9LLVMX3",
      "B0BHPKKF57",
      "B0CZL9R25L",
      "B0GTRB7RDG",
      "B0DYDP68ST",
    ],
  },
  {
    slug: "ep12-v22-samref",
    ytVideoId: "yzK8HXT7pYY",
    title: "6 Amazon things that never disappoint 🤯",
    publishedAt: "2026-07-26",
    productAsins: [
      "B0CJRM936N",
      "B0FHHXSGJJ",
      "B00PR82UC6",
      "B0CN92X7JP",
      "B0G73357VM",
      "B09GW2H7W6",
    ],
  },
  {
    slug: "ep13-v23-samref",
    ytVideoId: "YdovHAxDTmI",
    title: "6 Amazon things too good to ignore 🤯",
    publishedAt: "2026-07-27",
    productAsins: [
      "B0D2HV4GZ2",
      "B0BXKHKDCX",
      "B0CGRTY4ZK",
      "B0GL951NDV",
      "B0855DXKL8",
      "B0DCFYK4ZL",
    ],
  },
  {
    slug: "ep14-v24-samref",
    ytVideoId: "ScMT4g2Gqfc",
    title: "6 Amazon things that make life effortless 🤯",
    publishedAt: "2026-07-28",
    productAsins: [
      "B0H4W2GJTX",
      "B07NVTGTT8",
      "B0DCKCK326",
      "B0D2GWFWLF",
      "B0821VS3ZM",
      "B0DLWM657D",
    ],
  },
  {
    slug: "ep15-v25-samref",
    ytVideoId: "fzNvfP0C7NU",
    title: "6 Amazon things you'll actually want 🤯",
    publishedAt: "2026-07-29",
    productAsins: [
      "B088CR8NMD",
      "B077NMWWM7",
      "B00068O22S",
      "B0H6HZ3XH3",
      "B0B1THXR4D",
      "B0D7D61TVY",
    ],
  },
  {
    slug: "ep16-v26-samref",
    ytVideoId: "FLHxMmSVtY8",
    title: "6 Amazon must-haves you didn't know you needed 🤯",
    publishedAt: "2026-07-30",
    productAsins: [
      "B0FLBTW9L4",
      "B0D3X1JDK4",
      "B07JNF1YNK",
      "B0DP6DCG3J",
      "B0CCTNDWRQ",
      "B0BWW8G955",
    ],
  },
  {
    slug: "ep17-v27-samref",
    ytVideoId: "A1dfkTBpWCU",
    title: "6 Amazon things everyone needs to buy 🤯",
    publishedAt: "2026-07-31",
    productAsins: [
      "B0F3GL5MCP",
      "B0DQXSYDMM",
      "B0DKJM4HFC",
      "B0CC6DJQMW",
      "B01BOX86HU",
      "B0CH8DQKMN",
    ],
  },
  {
    slug: "ep18-v28-samref",
    ytVideoId: "tQLx3Jo-gNM",
    title: "6 Amazon products you won't believe exist 🤯",
    publishedAt: "2026-08-01",
    productAsins: [
      "B0GYXQ1MMK",
      "B08C355HFF",
      "B0DQFPS54P",
      "B0FVRXFZ9F",
      "B08C3PGW29",
      "B08TWN43G4",
    ],
  },
  {
    slug: "ep19-v29-samref",
    ytVideoId: "I80YrzM9zn8",
    title: "6 Amazon things that are totally worth it 🤯",
    publishedAt: "2026-08-03",
    productAsins: [
      "B0BQZBMXD4",
      "B0797FJQT8",
      "B0D37JDBN4",
      "B0DXL7W25J",
      "B0C5X5JDW7",
      "B0DKNPMD37",
    ],
  },
  {
    slug: "ep20-v30-samref",
    ytVideoId: "t5rReI5A2f4",
    title: "5 Amazon things way better than expected 🤯",
    publishedAt: "2026-08-04",
    productAsins: [
      "B08MFBDGGF",
      "B0FGXK98K9",
      "B002XOHZWC",
      "B0BRKH78N7",
      "B00MH74S16",
    ],
  },
  {
    slug: "ep21-v31-samref",
    ytVideoId: "6DF0kgxqW30",
    title: "6 Amazon things I use all the time 🤯",
    publishedAt: "2026-08-05",
    productAsins: [
      "B07796MWGN",
      "B0CBK1RKF9",
      "B0D8973DV8",
      "B088J2TN8W",
      "B0D3WG2SHF",
      "B0BGL29DS5",
    ],
  },
  {
    slug: "ep22-v32-samref",
    ytVideoId: "E-MWQxbWeUM",
    title: "5 genius Amazon products you need to try 🤯",
    publishedAt: "2026-08-06",
    productAsins: [
      "B0CKYJFS48",
      "B0F4DG339S",
      "B0885WX1YM",
      "B0GMW6KJ5G",
      "B08M5V3X1L",
    ],
  },
  {
    slug: "ep23-v33-samref",
    ytVideoId: "t7-yOFS2BKc",
    title: "5 genius Amazon kitchen gadgets you need 🤯",
    publishedAt: "2026-08-07",
    productAsins: [
      "B07K1K2DLW",
      "B0CJF94M8J",
      "B0CC4VJFLC",
      "B0B4TCN8H9",
      "B0D4526D6M",
    ],
  },
  {
    slug: "ep24-v34-hero",
    ytVideoId: "_dkYG3UejII",
    title: "Your drain is nastier than you think 🫧",
    publishedAt: "2026-08-10",
    productAsins: [
      "B0H79GWT92",
    ],
  },
  {
    slug: "ep25-v35-hero",
    ytVideoId: "7rBPTL8L-YI",
    title: "Never fight a can opener again 🥫",
    publishedAt: "2026-08-11",
    productAsins: [
      "B0HCHWVQV1",
    ],
  },
  {
    slug: "ep26-v36-samref",
    ytVideoId: "fPXNY0zJNFM",
    title: "6 Amazon summer must-haves for pool & beach days 🏖",
    publishedAt: "2026-08-12",
    productAsins: [
      "B0GXF2MHM6",
      "B0GS8W3BTL",
      "B0FFT624QW",
      "B0BKQ7MY3L",
      "B09NM53VGY",
      "B0CHVQG62J",
    ],
  },
  {
    slug: "ep27-v37-samref",
    ytVideoId: "DMH8lRV4bOI",
    title: "6 Amazon car gadgets you didn't know you needed 🚗",
    publishedAt: "2026-08-13",
    productAsins: [
      "B08BNRQV8J",
      "B06VVPWSXM",
      "B0DFC6KTDH",
      "B0C7SVNF9H",
      "B08SQ44CGZ",
      "B0DLKBSJ6F",
    ],
  },
  {
    slug: "ep28-v38-hero",
    ytVideoId: "-iUVOL2z4nk",
    title: "Make ice cream sandwiches at home in seconds 🍪",
    publishedAt: "2026-08-14",
    productAsins: [
      "B0G13DGFKM",
    ],
  },
  {
    slug: "ep29-v39-samref",
    ytVideoId: "cN-eCIaT8fE",
    title: "6 Amazon finds worth every penny 🤯",
    publishedAt: "2026-08-17",
    productAsins: [
      "B0C1NJDTTX",
      "B0CGRGRXPY",
      "B0FT7NWBBK",
      "B0DB23P5RY",
      "B0GZ29X548",
      "B0DZ6KKX5K",
    ],
  },
  {
    slug: "ep30-v40-samref",
    ytVideoId: "I9AoatZHZwI",
    title: "6 Amazon hidden gems you'll actually use 🤯",
    publishedAt: "2026-08-18",
    productAsins: [
      "B0DF6TL1KR",
      "B0CWRGBT96",
      "B0FB92WTCZ",
      "B094NTCSDJ",
      "B0CLZP48BK",
      "B0BN1L81BQ",
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
