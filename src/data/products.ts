export type Product = {
  id: string;
  title: string;
  blurb: string;
  priceRange: string;
  emoji: string;
  amazonSearchTerm: string;
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

export function amazonUrl(searchTerm: string): string {
  const q = encodeURIComponent(searchTerm);
  return `https://www.amazon.com/s?k=${q}&tag=${AFFILIATE_TAG}`;
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
    id: "over-door-organizer",
    title: "Over-the-Door Hanging Organizer",
    blurb: "10 clear pockets for shoes, cleaning supplies, or pantry overflow.",
    priceRange: "Under $20",
    emoji: "🚪",
    amazonSearchTerm: "over the door hanging organizer 10 pocket clear",
    listSlugs: ["under-25-space-savers"],
  },
  {
    id: "under-bed-bins",
    title: "Under-Bed Rolling Storage Bins",
    blurb: "Wheels + lids = hidden storage you'll actually use.",
    priceRange: "$18-$28",
    emoji: "📦",
    amazonSearchTerm: "under bed rolling storage bins with lid set of 2",
    listSlugs: ["under-25-space-savers", "studio-must-haves"],
  },
  {
    id: "bed-risers",
    title: "Adjustable Bed Risers",
    blurb: "Add 3-8 inches of under-bed storage in 30 seconds.",
    priceRange: "Under $15",
    emoji: "🛏️",
    amazonSearchTerm: "adjustable bed risers heavy duty",
    listSlugs: ["under-25-space-savers"],
  },
  {
    id: "shoe-rack",
    title: "Behind-the-Door Shoe Rack",
    blurb: "Frees up 4 feet of floor space instantly.",
    priceRange: "Under $22",
    emoji: "👟",
    amazonSearchTerm: "over the door shoe rack organizer",
    listSlugs: ["under-25-space-savers"],
  },
  {
    id: "drawer-dividers",
    title: "Collapsible Drawer Dividers",
    blurb: "Bamboo, adjustable, and hides the chaos inside every drawer.",
    priceRange: "Under $18",
    emoji: "🗂️",
    amazonSearchTerm: "adjustable bamboo drawer dividers expandable",
    listSlugs: ["under-25-space-savers"],
  },

  {
    id: "can-organizer",
    title: "Stackable Can Organizer",
    blurb: "Turns cabinet chaos into a mini bodega. First-in, first-out.",
    priceRange: "$14-$22",
    emoji: "🥫",
    amazonSearchTerm: "stackable can organizer pantry",
    listSlugs: ["tiny-kitchen-essentials"],
  },
  {
    id: "magnetic-knife-strip",
    title: "Magnetic Knife Strip",
    blurb: "Reclaim the entire knife block's worth of counter.",
    priceRange: "Under $20",
    emoji: "🔪",
    amazonSearchTerm: "magnetic knife strip wall mount stainless",
    listSlugs: ["tiny-kitchen-essentials", "renter-friendly-upgrades"],
  },
  {
    id: "under-shelf-basket",
    title: "Under-Shelf Hanging Baskets",
    blurb: "Free hidden storage under any cabinet shelf. No install.",
    priceRange: "Set of 4 · $15",
    emoji: "🧺",
    amazonSearchTerm: "under shelf basket hanging wire",
    listSlugs: ["tiny-kitchen-essentials"],
  },
  {
    id: "lazy-susan",
    title: "Cabinet Lazy Susan (2-Tier)",
    blurb: "Every spice, every time. No more digging.",
    priceRange: "Under $25",
    emoji: "🌀",
    amazonSearchTerm: "2 tier lazy susan cabinet organizer",
    listSlugs: ["tiny-kitchen-essentials"],
  },
  {
    id: "fridge-bins",
    title: "Clear Fridge Organizer Bins",
    blurb: "The 'wait, we have that?' problem, solved.",
    priceRange: "Set of 8 · $32",
    emoji: "🧊",
    amazonSearchTerm: "clear fridge organizer bins stackable set",
    listSlugs: ["tiny-kitchen-essentials"],
  },

  {
    id: "room-divider-curtain",
    title: "Room Divider Curtain",
    blurb: "Studio → 1BR feel in under an hour. No wall required.",
    priceRange: "$28-$45",
    emoji: "🪟",
    amazonSearchTerm: "room divider curtain ceiling track",
    listSlugs: ["studio-must-haves", "renter-friendly-upgrades"],
  },
  {
    id: "fold-down-desk",
    title: "Wall-Mounted Fold-Down Desk",
    blurb: "A real workspace that disappears when you're done.",
    priceRange: "$65-$95",
    emoji: "💻",
    amazonSearchTerm: "wall mounted fold down desk",
    listSlugs: ["studio-must-haves"],
  },
  {
    id: "storage-ottoman",
    title: "Storage Ottoman with Tray Lid",
    blurb: "Seat, coffee table, and hidden storage in one square foot.",
    priceRange: "$45-$75",
    emoji: "🪑",
    amazonSearchTerm: "storage ottoman with tray lid",
    listSlugs: ["studio-must-haves"],
  },
  {
    id: "drying-rack",
    title: "Compact Foldable Drying Rack",
    blurb: "Full load capacity, folds to 2 inches when not in use.",
    priceRange: "Under $35",
    emoji: "👕",
    amazonSearchTerm: "foldable clothes drying rack compact",
    listSlugs: ["studio-must-haves"],
  },
  {
    id: "over-toilet-shelf",
    title: "Over-the-Toilet Storage Shelf",
    blurb: "3 tiers of previously-wasted vertical space.",
    priceRange: "$40-$60",
    emoji: "🚽",
    amazonSearchTerm: "over the toilet storage shelf freestanding",
    listSlugs: ["studio-must-haves", "renter-friendly-upgrades"],
  },

  {
    id: "command-hooks",
    title: "Heavy-Duty Adhesive Wall Hooks",
    blurb: "Hold up to 7.5 lbs. Zero holes, zero damage deposit drama.",
    priceRange: "16-pack · $18",
    emoji: "🪝",
    amazonSearchTerm: "command hooks heavy duty large",
    listSlugs: ["renter-friendly-upgrades"],
  },
  {
    id: "tension-rods",
    title: "Adjustable Tension Rods (Set of 2)",
    blurb: "Closet dividers, curtain rods, under-sink shelves — all no-drill.",
    priceRange: "Under $18",
    emoji: "➖",
    amazonSearchTerm: "spring tension rod adjustable 28 to 48 inch",
    listSlugs: ["renter-friendly-upgrades"],
  },
  {
    id: "removable-wallpaper",
    title: "Peel-and-Stick Removable Wallpaper",
    blurb: "Landlord-safe accent walls in 30 minutes.",
    priceRange: "$30-$50 / roll",
    emoji: "🖼️",
    amazonSearchTerm: "peel and stick removable wallpaper roll",
    listSlugs: ["renter-friendly-upgrades"],
  },
  {
    id: "backsplash-tiles",
    title: "Peel-and-Stick Backsplash Tiles",
    blurb: "Kitchen glow-up without a security deposit sacrifice.",
    priceRange: "$28-$55",
    emoji: "🧱",
    amazonSearchTerm: "peel and stick backsplash tile kitchen",
    listSlugs: ["renter-friendly-upgrades"],
  },
  {
    id: "led-strips",
    title: "Adhesive LED Strip Lights (16 ft)",
    blurb: "Under-cabinet, behind-TV, along-baseboard — instant mood.",
    priceRange: "Under $22",
    emoji: "💡",
    amazonSearchTerm: "led strip lights 16ft color changing remote",
    listSlugs: ["renter-friendly-upgrades"],
  },
];

export function productsByList(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.listSlugs.includes(slug));
}

export function listBySlug(slug: string): IdeaList | undefined {
  return IDEA_LISTS.find((l) => l.slug === slug);
}
