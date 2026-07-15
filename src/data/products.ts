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
    title: "Under $25",
    short: "Under $25",
    description: "Impulse-buy sweet spot. Everything here ships fast.",
    accent: "amber",
  },
  {
    slug: "tiny-kitchen-essentials",
    title: "Kitchen Finds",
    short: "Kitchen",
    description: "The gadgets and organizers we can't stop clicking Buy on.",
    accent: "rose",
  },
  {
    slug: "studio-must-haves",
    title: "Home & Living",
    short: "Home",
    description: "Furniture, storage, and things that just make life easier.",
    accent: "emerald",
  },
  {
    slug: "renter-friendly-upgrades",
    title: "Editor's Picks",
    short: "Editor's Picks",
    description: "The finds worth showing your group chat.",
    accent: "sky",
  },
  {
    slug: "home-gadgets-that-slap",
    title: "25 Home Gadgets That Slap",
    short: "Home Gadgets",
    description: "The Amazon Finds worth clicking Buy on. All 25 from our latest video.",
    accent: "amber",
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
    imageUrl: "/product-images/B0CXPY9ZRN.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B09L4R5T55.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B094624Q8Z.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B089LLDN39.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B0CS3FBC6W.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B016ISHAC8.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B07CWKRVV1.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B0GX9TGP36.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B07FM3V9QD.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B0BMB2ZRZW.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B09V366BDY.jpg",
    videoId: "",
    videoUrl: "",
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
    imageUrl: "/product-images/B07MQVKTT8.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["renter-friendly-upgrades"],
  },

  {
    id: "pink-stuff-paste",
    title: "Stardrops The Pink Stuff Miracle Cleaning Paste",
    blurb: "The pink paste that scrubs 20-year grime off in seconds — 100k+ reviewers can't be wrong.",
    priceRange: "Under $10",
    asin: "B00DU5SRIY",
    productUrl: "https://www.amazon.com/dp/B00DU5SRIY?tag=madofinds-20",
    imageUrl: "/product-images/B00DU5SRIY.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","under-25-space-savers"],
  },

  {
    id: "fullstar-chopper",
    title: "Fullstar Original Pro 4-in-1 Vegetable Chopper",
    blurb: "Dice an onion in three seconds without crying — the chopper 88,000 reviewers swear by.",
    priceRange: "$25-$35",
    asin: "B0764HS4SL",
    productUrl: "https://www.amazon.com/dp/B0764HS4SL?tag=madofinds-20",
    imageUrl: "/product-images/B0764HS4SL.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "black-decker-dustbuster",
    title: "BLACK+DECKER Dustbuster Handheld Vacuum",
    blurb: "Cordless suction that eats crumbs, crevices, and car dust like it's nothing.",
    priceRange: "$45-$75",
    asin: "B006LXOJC0",
    productUrl: "https://www.amazon.com/dp/B006LXOJC0?tag=madofinds-20",
    imageUrl: "/product-images/B006LXOJC0.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "drop-stop-seat-filler",
    title: "Drop Stop Original Car Seat Gap Filler (Set of 2)",
    blurb: "As-Seen-On-Shark-Tank neoprene wedge that ends the dreaded car crack forever.",
    priceRange: "$22-$28",
    asin: "B00BYH6C1E",
    productUrl: "https://www.amazon.com/dp/B00BYH6C1E?tag=madofinds-20",
    imageUrl: "/product-images/B00BYH6C1E.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "ticarve-cleaning-gel",
    title: "TICARVE Car Cleaning Gel Detailing Putty",
    blurb: "Pull the sticky pink putty out of your air vents and gasp at what comes with it.",
    priceRange: "Under $10",
    asin: "B07VCBQ6KF",
    productUrl: "https://www.amazon.com/dp/B07VCBQ6KF?tag=madofinds-20",
    imageUrl: "/product-images/B07VCBQ6KF.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","under-25-space-savers"],
  },

  {
    id: "chomchom-roller",
    title: "ChomChom Roller Pet Hair Remover",
    blurb: "One roll across the couch and you'll see more fur than you thought lived in your house.",
    priceRange: "$28-$32",
    asin: "B00BAGTNAQ",
    productUrl: "https://www.amazon.com/dp/B00BAGTNAQ?tag=madofinds-20",
    imageUrl: "/product-images/B00BAGTNAQ.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "closet-motion-lights",
    title: "Battery-Powered LED Motion-Sensor Closet Lights",
    blurb: "Peel-and-stick lights that flick on the second you open a dark closet or cabinet.",
    priceRange: "$18-$25",
    asin: "B09BKKLSV6",
    productUrl: "https://www.amazon.com/dp/B09BKKLSV6?tag=madofinds-20",
    imageUrl: "/product-images/B09BKKLSV6.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "snap-n-strain",
    title: "Kitchen Gizmo Snap N' Strain Silicone Strainer",
    blurb: "Clips to any pot to drain pasta over the sink — no bulky colander, no lost noodles.",
    priceRange: "$14-$18",
    asin: "B018W9JII0",
    productUrl: "https://www.amazon.com/dp/B018W9JII0?tag=madofinds-20",
    imageUrl: "/product-images/B018W9JII0.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "priority-chef-butter-crock",
    title: "PriorityChef French Butter Crock",
    blurb: "Keeps butter counter-soft and spreadable — no more shredding your toast with a cold pat.",
    priceRange: "$22-$30",
    asin: "B086VKVKNN",
    productUrl: "https://www.amazon.com/dp/B086VKVKNN?tag=madofinds-20",
    imageUrl: "/product-images/B086VKVKNN.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "under-cabinet-motion-lights",
    title: "30-LED Motion Sensor Under-Cabinet Light",
    blurb: "Rechargeable 30-LED bar you stick under any cabinet — the kitchen glow-up nobody sees coming.",
    priceRange: "$20-$28",
    asin: "B08FXTTCJX",
    productUrl: "https://www.amazon.com/dp/B08FXTTCJX?tag=madofinds-20",
    imageUrl: "/product-images/B08FXTTCJX.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "fryaway-oil-solidifier",
    title: "FryAway Deep Fry Waste Cooking Oil Solidifier",
    blurb: "Stir this powder in and used fryer oil turns to a solid block you toss in the trash.",
    priceRange: "$12-$18",
    asin: "B09CRN1MM1",
    productUrl: "https://www.amazon.com/dp/B09CRN1MM1?tag=madofinds-20",
    imageUrl: "/product-images/B09CRN1MM1.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "mueller-immersion-blender",
    title: "Mueller Ultra-Stick 500W Immersion Blender",
    blurb: "Blends soup right in the pot — no more ladling hot liquid into a countertop blender.",
    priceRange: "$28-$40",
    asin: "B075X1KPLZ",
    productUrl: "https://www.amazon.com/dp/B075X1KPLZ?tag=madofinds-20",
    imageUrl: "/product-images/B075X1KPLZ.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "over-sink-dish-rack",
    title: "Over-The-Sink Roll-Up Foldable Dish Drying Rack",
    blurb: "Rolls out over the sink to dry dishes, rolls up in three seconds when you're done.",
    priceRange: "$18-$28",
    asin: "B08196DX71",
    productUrl: "https://www.amazon.com/dp/B08196DX71?tag=madofinds-20",
    imageUrl: "/product-images/B08196DX71.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "multi-jar-opener",
    title: "Multiple-Size Jar Opener Tool",
    blurb: "The stuck-jar killer — one twist and the tightest pickle jar surrenders.",
    priceRange: "$10-$18",
    asin: "B07G2WW21S",
    productUrl: "https://www.amazon.com/dp/B07G2WW21S?tag=madofinds-20",
    imageUrl: "/product-images/B07G2WW21S.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "herb-scissors-5-blade",
    title: "Jenaluca Herb Scissors with 5 Blades",
    blurb: "Five parallel blades that mince cilantro, chives, and basil in one satisfying snip.",
    priceRange: "$15-$22",
    asin: "B00LRKMK96",
    productUrl: "https://www.amazon.com/dp/B00LRKMK96?tag=madofinds-20",
    imageUrl: "/product-images/B00LRKMK96.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "whiskware-pancake-dispenser",
    title: "Whiskware Pancake Batter Dispenser",
    blurb: "Mix and pour pancakes with one hand — no batter waterfall down the side of the bowl.",
    priceRange: "$22-$30",
    asin: "B01JG57JJ4",
    productUrl: "https://www.amazon.com/dp/B01JG57JJ4?tag=madofinds-20",
    imageUrl: "/product-images/B01JG57JJ4.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "marble-burner-covers",
    title: "Miles Kimball Marble Stove Burner Covers (Set of 2)",
    blurb: "Cover ugly burners with faux-marble slabs — instant 3-foot counter extension.",
    priceRange: "$18-$25",
    asin: "B01M6VCIVK",
    productUrl: "https://www.amazon.com/dp/B01M6VCIVK?tag=madofinds-20",
    imageUrl: "/product-images/B01M6VCIVK.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "silicone-trivets-3pk",
    title: "3-Pack Foldable Silicone Trivets",
    blurb: "Fold flat for a drawer, expand for a Dutch oven — protects your counter with zero storage tax.",
    priceRange: "$14-$20",
    asin: "B08KPXYXZF",
    productUrl: "https://www.amazon.com/dp/B08KPXYXZF?tag=madofinds-20",
    imageUrl: "/product-images/B08KPXYXZF.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "strawberry-huller",
    title: "Chef'n Stem Gem Strawberry Huller",
    blurb: "Squeeze, twist, done — clean stems out of a pint of berries in under a minute.",
    priceRange: "$10-$15",
    asin: "B002XOHZWC",
    productUrl: "https://www.amazon.com/dp/B002XOHZWC?tag=madofinds-20",
    imageUrl: "/product-images/B002XOHZWC.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "food-huggers",
    title: "FOOD HUGGERS 5-Piece Reusable Silicone Food Savers",
    blurb: "Silicone caps that hug half-onions, half-lemons, and half-avocados — bye, plastic wrap.",
    priceRange: "$14-$20",
    asin: "B01J4ADMI8",
    productUrl: "https://www.amazon.com/dp/B01J4ADMI8?tag=madofinds-20",
    imageUrl: "/product-images/B01J4ADMI8.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "herb-savor-pod",
    title: "Prepara Eco Herb Savor Pod",
    blurb: "Keeps cilantro and parsley fresh for THREE WEEKS in the fridge. Not a joke.",
    priceRange: "$28-$38",
    asin: "B00ERE2RLK",
    productUrl: "https://www.amazon.com/dp/B00ERE2RLK?tag=madofinds-20",
    imageUrl: "/product-images/B00ERE2RLK.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "non-stick-oven-liners",
    title: "ThreadNanny Non-Stick Oven Liners (2-Pack)",
    blurb: "Slide these on your oven floor and never scrub baked-on cheese again.",
    priceRange: "$12-$18",
    asin: "B06XCCQHWC",
    productUrl: "https://www.amazon.com/dp/B06XCCQHWC?tag=madofinds-20",
    imageUrl: "/product-images/B06XCCQHWC.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "dissolvable-food-labels",
    title: "MESS Dissolvable Food Storage Labels",
    blurb: "Labels that wash off in the sink — meal prep container chaos, solved.",
    priceRange: "$14-$28",
    asin: "B07YF3JB32",
    productUrl: "https://www.amazon.com/dp/B07YF3JB32?tag=madofinds-20",
    imageUrl: "/product-images/B07YF3JB32.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "stackable-food-containers",
    title: "MineSign 6-Pack Stackable Food Storage Containers",
    blurb: "Interlocking clear bins that turn a chaotic pantry into a satisfying grid overnight.",
    priceRange: "$28-$38",
    asin: "B08BYJX8HJ",
    productUrl: "https://www.amazon.com/dp/B08BYJX8HJ?tag=madofinds-20",
    imageUrl: "/product-images/B08BYJX8HJ.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","studio-must-haves"],
  },

  {
    id: "spectrum-paper-towel-holder",
    title: "Spectrum Diversified Paper Towel Holder",
    blurb: "Weighted base + one-handed tear — the paper towel roll that finally behaves.",
    priceRange: "$13-$17",
    asin: "B0020VFM3C",
    productUrl: "https://www.amazon.com/dp/B0020VFM3C?tag=madofinds-20",
    imageUrl: "/product-images/B0020VFM3C.jpg",
    videoId: "",
    videoUrl: "",
    listSlugs: ["home-gadgets-that-slap","tiny-kitchen-essentials"],
  },

  {
    id: "silicone-stove-gap-covers",
    title: "Silicone Stove Gap Covers (2-pk)",
    blurb: "That gap between your stove and the countertop where every crumb goes to die? These silicone strips seal it in seconds and slide right out on cleaning day.",
    priceRange: "$13-$15",
    asin: "B01MT0UL8N",
    productUrl: "https://www.amazon.com/dp/B01MT0UL8N?tag=madofinds-20",
    imageUrl: "/product-images/B01MT0UL8N.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "magnetic-curtain-tiebacks",
    title: "Magnetic Curtain Tiebacks (No Drill)",
    blurb: "Two little magnetic balls snap through your curtain fabric to hold it back. No drilling, no hooks, no hardware. Renter-safe and takes ten seconds to install.",
    priceRange: "$12-$18",
    asin: "B0BP7DJ972",
    productUrl: "https://www.amazon.com/dp/B0BP7DJ972?tag=madofinds-20",
    imageUrl: "/product-images/B0BP7DJ972.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "under-cabinet-paper-towel-holder",
    title: "Adhesive Under-Cabinet Paper Towel Holder",
    blurb: "Peel and stick this under any cabinet and your paper towel roll disappears from the counter forever. Zero screws, zero drilling, zero damage when you move out.",
    priceRange: "$8-$15",
    asin: "B0BSKQW2T2",
    productUrl: "https://www.amazon.com/dp/B0BSKQW2T2?tag=madofinds-20",
    imageUrl: "/product-images/B0BSKQW2T2.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "electric-jar-opener-robotwist",
    title: "Robo Twist Electric Jar Opener",
    blurb: "Slap this onto any stuck jar, hit the button, and watch it twist itself open — hands free, arm strength optional. Works on pickles, jam, everything.",
    priceRange: "$20-$28",
    asin: "B089SNZD4N",
    productUrl: "https://www.amazon.com/dp/B089SNZD4N?tag=madofinds-20",
    imageUrl: "/product-images/B089SNZD4N.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "wireless-garlic-chopper",
    title: "USB Rechargeable Mini Food Chopper",
    blurb: "Cordless, rechargeable, one-button chopper that minces garlic, dices an onion, or shreds herbs in about ten seconds. The whole prep bowl is done before your pan is even hot.",
    priceRange: "$18-$28",
    asin: "B0DPCTTT18",
    productUrl: "https://www.amazon.com/dp/B0DPCTTT18?tag=madofinds-20",
    imageUrl: "/product-images/B0DPCTTT18.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "silicone-boil-over-cover",
    title: "Silicone Boil-Over Safeguard Lid",
    blurb: "This flower-shaped silicone lid sits on any pot and stops boil-overs cold. Foam rises, hits the silicone, drips right back into the water — no more crusted stovetop cleanup.",
    priceRange: "$10-$15",
    asin: "B0FQHTP1J4",
    productUrl: "https://www.amazon.com/dp/B0FQHTP1J4?tag=madofinds-20",
    imageUrl: "/product-images/B0FQHTP1J4.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },

  {
    id: "mason-jar-vacuum-sealer",
    title: "Handheld Mason Jar Vacuum Sealer",
    blurb: "One-button vacuum seal on any mason jar and your berries stay fresh three weeks, your cereal stays crunchy for months. The little pop when you open it is the most satisfying sound in your kitchen.",
    priceRange: "$28-$38",
    asin: "B0DRV3874K",
    productUrl: "https://www.amazon.com/dp/B0DRV3874K?tag=madofinds-20",
    imageUrl: "/product-images/B0DRV3874K.jpg",
    videoId: "qLQAF9Az-KE",
    videoUrl: "https://www.youtube.com/shorts/qLQAF9Az-KE",
    listSlugs: ["home-gadgets-that-slap"],
  },
];

export function productsByList(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.listSlugs.includes(slug));
}

export function listBySlug(slug: string): IdeaList | undefined {
  return IDEA_LISTS.find((l) => l.slug === slug);
}
