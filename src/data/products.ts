export type Product = {
  id: string;
  title: string;
  blurb: string;
  priceRange: string;
  asin: string;
  productUrl: string;
  imageUrl: string;
  videoId: string;
  videoUrl: string;
  listSlugs: string[];
};

export type IdeaList = {
  slug: string;
  title: string;
  short: string;
  description: string;
  accent: AccentKey;
};

export type AccentKey = "amber" | "rose" | "emerald" | "sky";

export const ACCENT_STYLES: Record<
  AccentKey,
  { dot: string; from: string; to: string; ring: string; text: string; softBg: string }
> = {
  amber: {
    dot: "bg-amber-500",
    from: "from-amber-100",
    to: "to-orange-200",
    ring: "ring-amber-300/40",
    text: "text-amber-700 dark:text-amber-300",
    softBg: "bg-amber-50 dark:bg-amber-950/30",
  },
  rose: {
    dot: "bg-rose-500",
    from: "from-rose-100",
    to: "to-pink-200",
    ring: "ring-rose-300/40",
    text: "text-rose-700 dark:text-rose-300",
    softBg: "bg-rose-50 dark:bg-rose-950/30",
  },
  emerald: {
    dot: "bg-emerald-500",
    from: "from-emerald-100",
    to: "to-teal-200",
    ring: "ring-emerald-300/40",
    text: "text-emerald-700 dark:text-emerald-300",
    softBg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  sky: {
    dot: "bg-sky-500",
    from: "from-sky-100",
    to: "to-blue-200",
    ring: "ring-sky-300/40",
    text: "text-sky-700 dark:text-sky-300",
    softBg: "bg-sky-50 dark:bg-sky-950/30",
  },
};

const AFFILIATE_TAG = "madofinds-20";

export function productUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

export function shortsUrl(videoId: string): string {
  return `https://www.youtube.com/shorts/${videoId}`;
}

export function embedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

export const IDEA_LISTS: IdeaList[] = [
  {
    slug: "under-25-space-savers",
    title: "Under $25 Space-Savers",
    short: "Under $25",
    description: "Instant apartment upgrades that don't break the bank.",
    accent: "amber",
  },
  {
    slug: "tiny-kitchen-essentials",
    title: "Tiny Kitchen Essentials",
    short: "Tiny Kitchens",
    description: "Every square inch of counter and cabinet, maximized.",
    accent: "rose",
  },
  {
    slug: "studio-must-haves",
    title: "Studio Apartment Must-Haves",
    short: "Studio Living",
    description: "Multi-purpose finds that pull double duty in small spaces.",
    accent: "emerald",
  },
  {
    slug: "renter-friendly-upgrades",
    title: "Renter-Friendly Upgrades",
    short: "Renter Safe",
    description: "No drilling, no damage. Take it with you when you move.",
    accent: "sky",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "yaasheen-under-bed",
    title: "YAASHEEN Under-Bed Storage with Wheels",
    blurb:
      "60L rolling bins with clear lids. Slide out, grab your seasonal stuff, slide back — no more lifting the mattress.",
    priceRange: "$35-$45 / 2-pack",
    asin: "B0CXPY9ZRN",
    productUrl: "https://www.amazon.com/dp/B0CXPY9ZRN?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    videoId: "MpTf0y57rwg",
    videoUrl: "https://www.youtube.com/shorts/MpTf0y57rwg",
    listSlugs: ["under-25-space-savers", "studio-must-haves"],
  },
  {
    id: "ulg-over-door-organizer",
    title: "ULG Over-the-Door Organizer",
    blurb:
      "5 large clear pockets + 10 mesh side pockets. Perfect for pantry overflow, cleaning gear, or shoes.",
    priceRange: "Under $22",
    asin: "B09L4R5T55",
    productUrl: "https://www.amazon.com/dp/B09L4R5T55?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1687953413905-731f620177ae?w=800&auto=format&fit=crop&q=80",
    videoId: "VjD3G19oN48",
    videoUrl: "https://www.youtube.com/shorts/VjD3G19oN48",
    listSlugs: ["under-25-space-savers"],
  },
  {
    id: "spaceaid-drawer-dividers",
    title: "SpaceAid Bamboo Drawer Dividers",
    blurb:
      "4 adjustable dividers + 9 inserts. Fits 17-22\" drawers. Ends silverware chaos forever.",
    priceRange: "Under $25",
    asin: "B094624Q8Z",
    productUrl: "https://www.amazon.com/dp/B094624Q8Z?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1678108040468-0cc9addd984d?w=800&auto=format&fit=crop&q=80",
    videoId: "8r3PVyIlma8",
    videoUrl: "https://www.youtube.com/shorts/8r3PVyIlma8",
    listSlugs: ["under-25-space-savers", "tiny-kitchen-essentials"],
  },

  {
    id: "hoojo-fridge-bins",
    title: "HOOJO Clear Fridge Organizer Bins",
    blurb:
      "8-piece stackable set. The 'wait, we still have that?' problem, solved.",
    priceRange: "Set of 8 · $28-$35",
    asin: "B089LLDN39",
    productUrl: "https://www.amazon.com/dp/B089LLDN39?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?w=800&auto=format&fit=crop&q=80",
    videoId: "szWpNGJecE8",
    videoUrl: "https://www.youtube.com/shorts/szWpNGJecE8",
    listSlugs: ["tiny-kitchen-essentials"],
  },
  {
    id: "lamu-lazy-susan",
    title: "LAMU 2-Tier Lazy Susan Turntable",
    blurb:
      "9.25\" clear rotating spice rack. Every spice, every time — no more back-of-cabinet mystery jars.",
    priceRange: "Under $22",
    asin: "B0CS3FBC6W",
    productUrl: "https://www.amazon.com/dp/B0CS3FBC6W?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&auto=format&fit=crop&q=80",
    videoId: "OpVP45nGFsg",
    videoUrl: "https://www.youtube.com/shorts/OpVP45nGFsg",
    listSlugs: ["tiny-kitchen-essentials"],
  },
  {
    id: "modern-innovations-knife-strip",
    title: "Modern Innovations Magnetic Knife Bar",
    blurb:
      "16\" stainless steel wall-mount strip. Reclaim your whole knife-block's worth of counter.",
    priceRange: "Under $25",
    asin: "B016ISHAC8",
    productUrl: "https://www.amazon.com/dp/B016ISHAC8?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1556037843-347ddff9f4b0?w=800&auto=format&fit=crop&q=80",
    videoId: "ZsAuUs4oF-s",
    videoUrl: "https://www.youtube.com/shorts/ZsAuUs4oF-s",
    listSlugs: ["tiny-kitchen-essentials"],
  },

  {
    id: "fsobeiialeo-ottoman-tray",
    title: "FSOBEIIALEO Storage Ottoman with Tray Lid",
    blurb:
      "Seat, coffee table, and hidden storage in one square foot. Folds flat when you move.",
    priceRange: "$28-$45",
    asin: "B07CWKRVV1",
    productUrl: "https://www.amazon.com/dp/B07CWKRVV1?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80",
    videoId: "8r3PVyIlma8",
    videoUrl: "https://www.youtube.com/shorts/8r3PVyIlma8",
    listSlugs: ["studio-must-haves"],
  },
  {
    id: "simple-deluxe-over-toilet",
    title: "Simple Deluxe Over-the-Toilet Cabinet",
    blurb:
      "3 tiers of previously-wasted vertical space. Fits standard toilets, no wall damage.",
    priceRange: "$55-$85",
    asin: "B0GX9TGP36",
    productUrl: "https://www.amazon.com/dp/B0GX9TGP36?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=800&auto=format&fit=crop&q=80",
    videoId: "VjD3G19oN48",
    videoUrl: "https://www.youtube.com/shorts/VjD3G19oN48",
    listSlugs: ["studio-must-haves", "renter-friendly-upgrades"],
  },
  {
    id: "fsobeiialeo-ottoman-cube",
    title: "FSOBEIIALEO Small Storage Ottoman Cube",
    blurb:
      "The pocket-sized version. 11.8\" cube — perfect footrest that hides shoes, cables, or blankets.",
    priceRange: "Under $22",
    asin: "B07FM3V9QD",
    productUrl: "https://www.amazon.com/dp/B07FM3V9QD?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
    videoId: "OpVP45nGFsg",
    videoUrl: "https://www.youtube.com/shorts/OpVP45nGFsg",
    listSlugs: ["under-25-space-savers", "studio-must-haves"],
  },

  {
    id: "smart-tiles-backsplash",
    title: "Smart Tiles 3D Peel-and-Stick Backsplash",
    blurb:
      "5 sheets, real 3D texture, hair-dryer removable when you move. TikTok-viral for good reason.",
    priceRange: "$38-$55",
    asin: "B0BMB2ZRZW",
    productUrl: "https://www.amazon.com/dp/B0BMB2ZRZW?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1504977402025-84285fea814b?w=800&auto=format&fit=crop&q=80",
    videoId: "haIhReSIzYg",
    videoUrl: "https://www.youtube.com/shorts/haIhReSIzYg",
    listSlugs: ["renter-friendly-upgrades", "tiny-kitchen-essentials"],
  },
  {
    id: "ksipze-led-strips",
    title: "KSIPZE 100ft LED Strip Lights",
    blurb:
      "RGB, music sync, app control. Under-cabinet, behind-TV, along-baseboard — instant mood.",
    priceRange: "Under $30",
    asin: "B09V366BDY",
    productUrl: "https://www.amazon.com/dp/B09V366BDY?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1559619081-8fd2cc754ca3?w=800&auto=format&fit=crop&q=80",
    videoId: "BU-WeYE8jLY",
    videoUrl: "https://www.youtube.com/shorts/BU-WeYE8jLY",
    listSlugs: ["renter-friendly-upgrades"],
  },
  {
    id: "tic-tac-tiles-wallpaper",
    title: "Tic Tac Tiles Subway Peel-and-Stick",
    blurb:
      "10 sheets of clean subway white with faux grout. Landlord-safe kitchen glow-up in 30 minutes.",
    priceRange: "$32-$48 / 10-pack",
    asin: "B07MQVKTT8",
    productUrl: "https://www.amazon.com/dp/B07MQVKTT8?tag=madofinds-20",
    imageUrl:
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&auto=format&fit=crop&q=80",
    videoId: "haIhReSIzYg",
    videoUrl: "https://www.youtube.com/shorts/haIhReSIzYg",
    listSlugs: ["renter-friendly-upgrades"],
  },
];

export function productsByList(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.listSlugs.includes(slug));
}

export function listBySlug(slug: string): IdeaList | undefined {
  return IDEA_LISTS.find((l) => l.slug === slug);
}
