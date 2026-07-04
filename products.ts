import solIndoor from "@/assets/sol-indoor.jpg";
import solOutdoor from "@/assets/sol-outdoor.jpg";
import solCreative from "@/assets/sol-creative.jpg";
import solTransparent from "@/assets/sol-transparent.jpg";
import solRental from "@/assets/sol-rental.jpg";
import solControl from "@/assets/sol-control.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  hero: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  gallery: string[];
};

const REMOTE = {
  transparent: "https://fineledscreen.com/wp-content/uploads/2026/03/Advantages-of-Flexible-Transparent-Led-Film-Screen-1-1.jpg",
  hologram: "https://fineledscreen.com/wp-content/uploads/2026/03/2-1.png",
  portable: "https://fineledscreen.com/wp-content/uploads/2026/04/3-1.png",
  floor: "https://fineledscreen.com/wp-content/uploads/2026/03/Untitled-2-1024x683.png",
  flexible: "https://fineledscreen.com/wp-content/uploads/2026/03/Soft-LED-Module-vs_-Rigid-LED-Module-%E2%80%94-What-Are-the-Differences_.jpg",
  scrolling: "https://fineledscreen.com/wp-content/uploads/2026/03/Led-Scrolling-Display-Board.jpg",
  stadium: "https://fineledscreen.com/wp-content/uploads/2024/07/5976ba00-6f2c-11ec-b576-d92eb346f5c8-1024x685.jpg",
  rental: "https://fineledscreen.com/wp-content/uploads/2026/03/1698903417494857-1024x768.jpeg",
  foodBox: "https://fineledscreen.com/wp-content/uploads/2024/05/delivery-box2-e1715413917157-1024x549.jpg",
  kiosk: "https://fineledscreen.com/wp-content/uploads/2026/03/duraline-angled-kiosk.jpg",
  indoorGal1: "https://fineledscreen.com/wp-content/uploads/2026/04/Retailers-Indoor-and-outdoor-led-screens-supplier-in-uae-scaled-1-1024x683.jpeg",
  indoorGal2: "https://fineledscreen.com/wp-content/uploads/2026/04/QLI_REE_Barneveld_Highres_10-1024x683-1.jpg",
  outdoorGal1: "https://fineledscreen.com/wp-content/uploads/2026/04/download-16.jpg",
  outdoorGal2: "https://fineledscreen.com/wp-content/uploads/2026/04/High-Quality-Full-Color-P3p4p5-Outdoor-Waterproof-High-Brightness-Fixed-Led-Display-Screen-Hd-Curved-Corner-Billboard-Video-Wall-Buy-Outdoor-Waterproof-Led-Display-high-Brightness-Led-Screen-hd-Cur-1.jpg",
};

export const products: Product[] = [
  {
    slug: "indoor-led-display",
    name: "Indoor LED Display",
    tagline: "Seamless fine-pitch walls calibrated for interior environments.",
    category: "Fixed Installation",
    hero: solIndoor,
    description:
      "Indoor fixed LED displays engineered with high-grade materials and advanced production technology for retail, broadcast, corporate, worship, exhibition, hospitality and command-centre applications. Every wall is colour-matched, seam-aligned and calibrated on-site.",
    highlights: [
      "Fine pixel pitches from P0.9 to P4",
      "High refresh rate for broadcast-ready capture",
      "Front & rear serviceable cabinets",
      "Colour-matched panel-to-panel uniformity",
    ],
    specs: [
      { label: "Pixel Pitch", value: "P0.9 / P1.25 / P1.5 / P1.86 / P2.5 / P3 / P4" },
      { label: "Brightness", value: "600 – 1200 nits" },
      { label: "Refresh Rate", value: "≥ 3840 Hz" },
      { label: "Cabinet", value: "Die-cast aluminium, front & rear service" },
      { label: "Viewing Angle", value: "160° H / 160° V" },
      { label: "Lifespan", value: "≥ 100,000 hrs" },
    ],
    applications: ["Retail", "Broadcast Studios", "Conference Rooms", "Command Centres", "Houses of Worship", "Exhibitions", "Hotels", "Airports"],
    gallery: [REMOTE.indoorGal1, REMOTE.indoorGal2],
  },
  {
    slug: "outdoor-led-display",
    name: "Outdoor LED Display",
    tagline: "Weather-rated, high-brightness displays engineered for open-air visibility.",
    category: "Fixed Installation",
    hero: solOutdoor,
    description:
      "Outdoor LED displays engineered for fixed billboards, façades, and architectural integration. Built with IP-rated cabinets, high-lumen output and colour-stable performance that remains readable under direct sunlight.",
    highlights: ["IP65 front / IP54 rear protection", "High-lumen output for daylight legibility", "UV-stable masks and gaskets", "Wind and impact-tested cabinets"],
    specs: [
      { label: "Pixel Pitch", value: "P3 / P4 / P5 / P6 / P8 / P10" },
      { label: "Brightness", value: "5,500 – 10,000 nits" },
      { label: "Protection", value: "IP65 (front) / IP54 (rear)" },
      { label: "Operating Temp", value: "-20°C to +55°C" },
      { label: "Refresh Rate", value: "≥ 3840 Hz" },
      { label: "Lifespan", value: "≥ 100,000 hrs" },
    ],
    applications: ["Billboards", "Building Façades", "Stadium Perimeter", "Petrol Stations", "Public Squares", "Drive-throughs"],
    gallery: [REMOTE.outdoorGal1, REMOTE.outdoorGal2],
  },
  {
    slug: "transparent-led-display",
    name: "Transparent LED Display",
    tagline: "Glass-integrated visuals that preserve daylight and sightlines.",
    category: "Creative",
    hero: solTransparent,
    description:
      "Transparent LED displays offer up to 85% transparency, ideal for shopfronts, glass façades, showrooms and atriums. Content floats over the environment without blocking views or natural light.",
    highlights: ["Up to 85% transparency", "Lightweight modular structure", "Front and rear content visibility", "Minimal HVAC load"],
    specs: [
      { label: "Pixel Pitch", value: "P3.91 / P7.8 / P10.4" },
      { label: "Transparency", value: "Up to 85%" },
      { label: "Brightness", value: "4,500 – 5,500 nits" },
      { label: "Cabinet Weight", value: "≈ 12 kg / m²" },
      { label: "Installation", value: "Suspended / floor-mounted / wall-fixed" },
    ],
    applications: ["Retail Windows", "Showrooms", "Glass Façades", "Museums", "Automotive Showrooms"],
    gallery: [REMOTE.transparent],
  },
  {
    slug: "hologram-fan-led-display",
    name: "Hologram Fan LED Display",
    tagline: "3D holographic visuals that hover mid-air.",
    category: "Creative",
    hero: REMOTE.hologram,
    description:
      "High-resolution 3D hologram fan displays create the illusion of images floating in mid-air. Ideal for eye-catching retail, event and lobby installations that demand a wow-factor.",
    highlights: ["True 3D floating visual effect", "Wi-Fi & app content management", "Single unit or multi-unit sync arrays", "Silent operation"],
    specs: [
      { label: "Sizes", value: "42cm / 65cm / 75cm / 100cm / larger arrays" },
      { label: "Resolution", value: "Up to 1024 × 1024 (arrays)" },
      { label: "Refresh", value: "25 fps native / 60 fps sync" },
      { label: "Control", value: "Wi-Fi, USB, cloud CMS" },
    ],
    applications: ["Retail", "Trade Shows", "Product Launches", "Lobbies", "Nightlife & Events"],
    gallery: [REMOTE.hologram],
  },
  {
    slug: "portable-led-display",
    name: "Portable LED Display",
    tagline: "Mobile screens ready to deploy anywhere, in minutes.",
    category: "Rental & Mobile",
    hero: REMOTE.portable,
    description:
      "Portable LED displays designed for rapid deployment: roadshows, pop-ups, activations and mobile advertising. Battery-optional configurations with integrated audio and rigging.",
    highlights: ["Trolley or truck-mounted variants", "Toolless assembly", "Integrated audio & control", "Battery / mains dual-mode"],
    specs: [
      { label: "Screen Size", value: "1.5m² – 25m² configurations" },
      { label: "Pixel Pitch", value: "P2.5 / P3 / P3.91 / P4.81" },
      { label: "Brightness", value: "1,200 – 6,000 nits" },
      { label: "Setup Time", value: "≈ 15 minutes" },
    ],
    applications: ["Roadshows", "Pop-up Retail", "Activations", "Political Campaigns", "Sports Fan Zones"],
    gallery: [REMOTE.portable],
  },
  {
    slug: "floor-led-display",
    name: "Floor / Dance-Floor LED Display",
    tagline: "Walk-on interactive floor screens rated for live loads.",
    category: "Creative",
    hero: REMOTE.floor,
    description:
      "Interactive dance-floor LED displays engineered to be walked on, with tempered anti-slip surface, load-tested modules and IR touch options. Ideal for weddings, clubs, showrooms and immersive experiences.",
    highlights: ["Load-bearing tempered surface", "Anti-slip textured cover", "Interactive IR touch option", "Modular fast lock"],
    specs: [
      { label: "Pixel Pitch", value: "P3.9 / P4.81 / P6.25" },
      { label: "Load Capacity", value: "≥ 1,500 kg / m²" },
      { label: "Surface", value: "Anti-slip tempered glass" },
      { label: "Protection", value: "IP65 top surface" },
    ],
    applications: ["Weddings", "Nightclubs", "Automotive Showrooms", "Immersive Experiences", "Retail Activations"],
    gallery: [REMOTE.floor],
  },
  {
    slug: "flexible-led-display",
    name: "Flexible LED Screens",
    tagline: "Bend, curve and wrap around any architectural form.",
    category: "Creative",
    hero: solCreative,
    description:
      "Soft-module flexible LED screens bend to cylinders, columns, waves and irregular shapes. Rigid modules maintain colour and contrast; magnetic mounting simplifies service.",
    highlights: ["Curves inward and outward", "Magnetic modular fixing", "Ultra-thin & lightweight", "Custom radii to brief"],
    specs: [
      { label: "Pixel Pitch", value: "P1.5 / P1.86 / P2 / P2.5 / P3" },
      { label: "Module Thickness", value: "≈ 10 mm" },
      { label: "Bending Angle", value: "Concave / convex, custom radius" },
      { label: "Weight", value: "≈ 8 kg / m²" },
    ],
    applications: ["Columns & Pillars", "Cylinders", "Architectural Waves", "Retail Sculptures"],
    gallery: [REMOTE.flexible],
  },
  {
    slug: "scrolling-board-led-display",
    name: "Scrolling Board LED Display",
    tagline: "Monochrome and RGB scrolling boards for signage and messaging.",
    category: "Signage",
    hero: REMOTE.scrolling,
    description:
      "Programmable scrolling LED boards for storefronts, transit, pharmacies and information signage. USB, Wi-Fi and cloud content management with schedule support.",
    highlights: ["Single, dual or full-colour", "USB / Wi-Fi / cloud CMS", "Aluminium slim cabinet", "Indoor & semi-outdoor options"],
    specs: [
      { label: "Colour", value: "Red / Amber / RGB Full Colour" },
      { label: "Pixel Pitch", value: "P4.75 / P7.62 / P10" },
      { label: "Brightness", value: "1,500 – 6,000 nits" },
      { label: "Control", value: "USB, LAN, Wi-Fi, 4G optional" },
    ],
    applications: ["Storefronts", "Pharmacies", "Petrol Stations", "Transit Signage", "Reception Displays"],
    gallery: [REMOTE.scrolling],
  },
  {
    slug: "stadium-led-screen",
    name: "Stadium LED Screen",
    tagline: "Perimeter and centre-hung displays engineered for live sport.",
    category: "Sports",
    hero: REMOTE.stadium,
    description:
      "Stadium-grade LED systems built for perimeter advertising, centre-hung cubes, and giant scoreboards. High refresh, soft masks, and impact-resistant designs certified for live sports.",
    highlights: ["High refresh for slow-motion capture", "Impact-resistant soft mask", "Wide viewing angle", "Sports broadcast colour space"],
    specs: [
      { label: "Pixel Pitch", value: "P6 / P8 / P10 (perimeter); P3.9 – P6 (cube)" },
      { label: "Refresh Rate", value: "≥ 3840 Hz" },
      { label: "Brightness", value: "6,000 – 8,500 nits" },
      { label: "Certification", value: "Sports-league safety standards" },
    ],
    applications: ["Football Pitches", "Cricket Stadiums", "Arenas", "Fan Zones"],
    gallery: [REMOTE.stadium],
  },
  {
    slug: "rental-led-screen",
    name: "Indoor & Outdoor Rental LED Screen",
    tagline: "Tour-ready systems for events, concerts and exhibitions.",
    category: "Rental & Mobile",
    hero: solRental,
    description:
      "Rental-grade LED cabinets with fast-lock, curve locks, and quick-swap modules. Optimised for concerts, conferences, exhibitions and corporate events with tour-ready flight cases.",
    highlights: ["Fast-lock corners & curve-lock", "Front-service modules", "Concave / convex curving", "Flight-cased with truss adapters"],
    specs: [
      { label: "Pixel Pitch", value: "P2.6 / P2.9 / P3.9 / P4.8 (indoor); P3.9 / P4.8 outdoor rated" },
      { label: "Cabinet Weight", value: "≈ 7 kg / 500 × 500 mm" },
      { label: "Refresh Rate", value: "≥ 3840 Hz" },
      { label: "Setup", value: "Front & rear service" },
    ],
    applications: ["Concerts", "Corporate Events", "Award Ceremonies", "Exhibitions", "Fashion Shows"],
    gallery: [REMOTE.rental],
  },
  {
    slug: "food-delivery-led-box",
    name: "Food Delivery LED Box",
    tagline: "Programmable LED delivery boxes that turn couriers into moving media.",
    category: "Signage",
    hero: REMOTE.foodBox,
    description:
      "Waterproof LED display boxes mounted on delivery bikes for food and courier fleets. Real-time content management, GPS-triggered creative and campaign scheduling.",
    highlights: ["IP65 rated for all weather", "GPS-triggered creatives", "4G / Wi-Fi cloud CMS", "Insulated cargo compartment"],
    specs: [
      { label: "Screen", value: "Dual-sided full colour LED" },
      { label: "Pixel Pitch", value: "P4 / P5" },
      { label: "Protection", value: "IP65 waterproof" },
      { label: "Control", value: "4G + GPS + Cloud CMS" },
    ],
    applications: ["Food Delivery Fleets", "Courier Networks", "Location-Based Ads"],
    gallery: [REMOTE.foodBox],
  },
  {
    slug: "interactive-digital-kiosk",
    name: "Interactive Screens & Digital Kiosk",
    tagline: "Self-service kiosks and interactive touchscreens for public environments.",
    category: "Interactive",
    hero: REMOTE.kiosk,
    description:
      "Free-standing and wall-mounted interactive kiosks with capacitive multi-touch, barcode, card and biometric options. Deployed for wayfinding, self-ordering, ticketing and check-in.",
    highlights: ["Capacitive multi-touch", "Modular peripherals (printer, scanner, POS)", "Vandal-resistant enclosure", "Cloud CMS + analytics"],
    specs: [
      { label: "Screen Size", value: "21.5\" – 86\"" },
      { label: "Touch", value: "10-point capacitive multi-touch" },
      { label: "OS", value: "Android / Windows" },
      { label: "Enclosure", value: "SPCC steel, powder-coated" },
    ],
    applications: ["Wayfinding", "Self-Order", "Ticketing", "Retail Catalogue", "Check-in Counters"],
    gallery: [REMOTE.kiosk],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
