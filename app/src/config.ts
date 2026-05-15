export interface SiteConfig {
  language: string
  title: string
  description: string
  brandName: string
}

export interface HeroConfig {
  titleText: string
  subtitleLines: string[]
  ctaLabel: string
  roomLabel: string
  /** Path from public/, e.g. "/images/hero.jpg". Empty → black background. */
  fluidImagePath: string
}

export interface WorkItem {
  id: string
  title: string
  type: string
  status: string
  metrics: string
  /** Path from public/, e.g. "/images/work-1.jpg". MUST be a topic-relevant image (generated via generate_image, or a downloaded relevant asset). Do NOT point this at placeholder services like picsum.photos, unsplash random, or lorem.space. */
  image: string
  artist: string
  location: string
  medium: string
  article: string
}

export interface GalleryConfig {
  eyebrowLabel: string
  titleLines: string[]
  stats: { label: string; value: string }[]
  sideLabel: string
  works: WorkItem[]
}

export interface InstantConfig {
  /** 3 text lines animated in sequence. Index 0 big serif, 1 assembly, 2 caption. */
  textLines: [string, string, string] | string[]
  /** Path from public/, e.g. "/videos/ambient.mp4". Empty → black background. */
  videoPath: string
  roomLabel: string
}

export interface NavLink {
  label: string
  href?: string
}

export interface FooterConfig {
  brandText: string
  taglineLines: string[]
  navigationHeading: string
  navigationLinks: NavLink[]
  contactHeading: string
  contactLinks: NavLink[]
  copyright: string
  creditText: string
}

export interface WorkDetailConfig {
  backLabel: string
  artistLabel: string
  locationLabel: string
  mediumLabel: string
  backToGalleryLabel: string
  metaRoomSuffix: string
  footerNote: string
  notFoundTitle: string
  notFoundLink: string
}

// ─── SITE CONFIG ───────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Hey Lucija! | A Very Important Question",
  description: "Kadean Lewis has an important question for Lucija Amandic. Sushi is involved.",
  brandName: "Kadean x Lucija",
}

// ─── HERO CONFIG ───────────────────────────────────────────────────────

export const heroConfig: HeroConfig = {
  titleText: "HEY LUCIJA!",
  subtitleLines: [
    "I have a very important question for you.",
    "It involves raw fish, soy sauce, and your undivided attention.",
    "Also, I may have already made a reservation.",
    "No pressure though. (Okay, maybe a little pressure.)",
  ],
  ctaLabel: "Enter the Proposal",
  roomLabel: "Room 01 // The Proposal",
  fluidImagePath: "/images/hero-nigiri.jpg",
}

// ─── GALLERY CONFIG ────────────────────────────────────────────────────

export const galleryConfig: GalleryConfig = {
  eyebrowLabel: "ROOM 02 // THE MENU",
  titleLines: ["The", "Tasting", "Menu"],
  stats: [
    { label: "Venue", value: "JAPATAPA TOSHIBAR" },
    { label: "Date", value: "The 23rd" },
    { label: "Asker", value: "Kadean Lewis" },
    { label: "Askee", value: "Lucija Amandic" },
    { label: "Dress Code", value: "Main Character Energy" },
    { label: "Cancellations", value: "Not Accepted" },
  ],
  sideLabel: "SUSHI::IS::LIFE",
  works: [
    {
      id: "SU-001",
      title: "SALMON DREAM",
      type: "nigiri",
      status: "MUST TRY",
      metrics: "10/10",
      image: "/images/hero-nigiri.jpg",
      artist: "Chef Tanaka",
      location: "Japatapa Toshibar",
      medium: "Norwegian salmon, sushi rice, love",
      article: "A masterpiece of simplicity. The salmon glistens like a sunrise over the Adriatic. Each grain of rice is placed with surgical precision. One bite and you'll understand why I chose this place.\n\nLegend says that couples who share salmon nigiri on their first date are destined for at least a second date. I made that up, but it sounds nice, doesn't it?",
    },
    {
      id: "SU-002",
      title: "TUNA TEMPTATION",
      type: "nigiri",
      status: "CLASSIC",
      metrics: "9/10",
      image: "/images/work-tuna.jpg",
      artist: "Chef Yamamoto",
      location: "Japatapa Toshibar",
      medium: "Bluefin tuna, wasabi, perfection",
      article: "The tuna arrives with a deep crimson hue that would make a sunset jealous. It melts on the tongue like a secret you've been waiting to hear.\n\nThis is the kind of tuna that doesn't just satisfy hunger—it creates a memory. Much like how I hope this date will be a memory you'll want to revisit.",
    },
    {
      id: "SU-003",
      title: "SALMON MAKI",
      type: "maki-roll",
      status: "RELIABLE",
      metrics: "9/10",
      image: "/images/work-salmon-maki.jpg",
      artist: "Chef Sato",
      location: "Japatapa Toshibar",
      medium: "Salmon, nori, rice, sesame",
      article: "The salmon maki is the friend who always shows up. Dependable, comforting, and surprisingly delightful. Each roll is a perfect little package of joy.\n\nIf this sushi roll were a person, it would be the one who remembers your birthday and brings you coffee without asking. It's that good.",
    },
    {
      id: "SU-004",
      title: "LIQUID COURAGE",
      type: "beverage",
      status: "ESSENTIAL",
      metrics: "100%",
      image: "/images/work-sake.jpg",
      artist: "Brewmaster Kenji",
      location: "Japatapa Toshibar",
      medium: "Premium junmai sake, chilled",
      article: "A glass of liquid courage for both of us. Premium junmai sake, served cold, with notes of pear and a finish that says 'yes, I made the right choice coming here.'\n\nOne glass in and the conversation flows like the sake itself—smooth, warm, and impossible to stop once you've started.",
    },
    {
      id: "SU-005",
      title: "EDAMAME",
      type: "starter",
      status: "ICE BREAKER",
      metrics: "8/10",
      image: "/images/work-edamame.jpg",
      artist: "Nature",
      location: "Japatapa Toshibar",
      medium: "Young soybeans, sea salt",
      article: "The edamame is our icebreaker. You can't be awkward when you're both wrestling tiny beans from fuzzy pods. It's interactive, it's fun, and it's impossible to look elegant doing it.\n\nThis is where we'll laugh at each other's clumsy fingers and realize that this date is going to be just fine.",
    },
    {
      id: "SU-006",
      title: "UNAGI ENCOUNTER",
      type: "nigiri",
      status: "ADVENTURE",
      metrics: "8/10",
      image: "/images/work-unagi.jpg",
      artist: "Chef Morimoto",
      location: "Japatapa Toshibar",
      medium: "Freshwater eel, kabayaki glaze",
      article: "Unagi is not for the faint of heart. It's smoky, sweet, and surprisingly bold—like asking someone out by building them an entire website.\n\nThe eel is grilled to caramelized perfection and brushed with a glaze so good it should be classified. If you're feeling adventurous, this is your moment.",
    },
    {
      id: "SU-007",
      title: "CALIFORNIA DREAM",
      type: "maki-roll",
      status: "SAFE BET",
      metrics: "8/10",
      image: "/images/work-california.jpg",
      artist: "Chef Johnson",
      location: "Japatapa Toshibar",
      medium: "Crab, avocado, cucumber, sesame",
      article: "The California roll is the diplomat of sushi. It bridges the gap between traditional and modern, between 'I've never had sushi' and 'I could eat this every day.'\n\nWith crab, avocado, and cucumber, it's the crowd-pleaser that says 'I want you to be comfortable and happy.'",
    },
    {
      id: "SU-008",
      title: "MISO SOUL",
      type: "soup",
      status: "COMFORT",
      metrics: "9/10",
      image: "/images/work-miso.jpg",
      artist: "Chef Watanabe",
      location: "Japatapa Toshibar",
      medium: "Miso, tofu, wakame, scallions",
      article: "The miso soup arrives steaming like a warm hug in a bowl. It's savory, soothing, and the kind of thing you crave on a cold day—or when you're nervous about a date.\n\nEach spoonful is a reminder that the best things in life are simple, warm, and shared with good company.",
    },
    {
      id: "SU-009",
      title: "DRAGON ROLL",
      type: "maki-roll",
      status: "SHOWSTOPPER",
      metrics: "10/10",
      image: "/images/work-dragon.jpg",
      artist: "Chef Tanaka",
      location: "Japatapa Toshibar",
      medium: "Eel, avocado, cucumber, unagi sauce",
      article: "The dragon roll enters the room like it owns the place. Avocado scales drape over eel and cucumber in a presentation so dramatic it deserves its own soundtrack.\n\nThis is the roll you order when you want to impress someone. And Lucija, I want to impress you.",
    },
    {
      id: "SU-010",
      title: "SPICY TUNA",
      type: "maki-roll",
      status: "BOLD",
      metrics: "9/10",
      image: "/images/work-spicy-tuna.jpg",
      artist: "Chef Kimura",
      location: "Japatapa Toshibar",
      medium: "Spicy tuna, sriracha mayo, nori",
      article: "The spicy tuna roll doesn't whisper—it shouts. It's fiery, fearless, and unapologetically bold. Each bite delivers a kick that wakes up every taste bud.\n\nIf our date had a spirit animal, this roll would be it. Bold move asking you out. Bold move saying yes. Let's be bold together.",
    },
    {
      id: "SU-011",
      title: "GYOZA GANG",
      type: "dumpling",
      status: "SHAREABLE",
      metrics: "8/10",
      image: "/images/work-gyoza.jpg",
      artist: "Chef Liu",
      location: "Japatapa Toshibar",
      medium: "Pork, cabbage, ginger, dipping sauce",
      article: "Golden, crispy, pan-fried perfection. The gyoza arrives in a formation so beautiful you almost feel bad eating them. Almost.\n\nThese little dumplings are made for sharing. One for you, one for me, and suddenly we're not just eating—we're creating a moment.",
    },
    {
      id: "SU-012",
      title: "MATCHA BLISS",
      type: "dessert",
      status: "SWEET END",
      metrics: "10/10",
      image: "/images/work-matcha.jpg",
      artist: "Chef Sakura",
      location: "Japatapa Toshibar",
      medium: "Matcha ice cream, black sesame",
      article: "The matcha ice cream is how this culinary journey ends—with something sweet, unexpected, and unforgettable. Its vibrant green color pops against the darkness like hope against uncertainty.\n\nThey say save the best for last. This dessert is the exclamation point at the end of our perfect date sentence.",
    },
    {
      id: "SU-013",
      title: "SASHIMI PLATTER",
      type: "sashimi",
      status: "LUXURY",
      metrics: "10/10",
      image: "/images/work-sashimi.jpg",
      artist: "Chef Tanaka",
      location: "Japatapa Toshibar",
      medium: "Assorted fish, crushed ice, garnish",
      article: "The sashimi platter is the crown jewel. An array of the ocean's finest offerings, laid out like precious gems on a bed of crushed ice.\n\nSalmon, tuna, yellowtail—each slice is a love letter from the sea. And I'm writing you a love letter with soy sauce and wasabi. How romantic is that?",
    },
    {
      id: "SU-014",
      title: "WASABI WAVE",
      type: "condiment",
      status: "DANGEROUS",
      metrics: "7/10",
      image: "/images/work-wasabi.jpg",
      artist: "Nature",
      location: "Japatapa Toshibar",
      medium: "Fresh wasabi, pickled ginger",
      article: "Wasabi is the wildcard. A little bit adds the perfect kick. Too much and you're having a religious experience.\n\nI'll warn you now: I will definitely laugh if you accidentally take too much. But I'll also hand you water immediately because I'm a gentleman.",
    },
    {
      id: "SU-015",
      title: "CHOPSTICKS",
      type: "utensil",
      status: "ESSENTIAL",
      metrics: "N/A",
      image: "/images/work-chopsticks.jpg",
      artist: "Craftsman Li",
      location: "Japatapa Toshibar",
      medium: "Dark wood, ceramic rest",
      article: "The chopsticks rest elegantly, waiting for their moment. Dark wood on a stone holder—simple, beautiful, purposeful.\n\nFull disclosure: I am mediocre with chopsticks. If you see me struggling, that's your cue to teach me. Physical proximity = achieved.",
    },
    {
      id: "SU-016",
      title: "RAMEN NIGHT",
      type: "noodle",
      status: "BONUS",
      metrics: "9/10",
      image: "/images/work-ramen.jpg",
      artist: "Chef Nakamura",
      location: "Japatapa Toshibar",
      medium: "Tonkotsu broth, egg, nori, noodles",
      article: "If sushi wasn't enough, there's always the ramen. Rich tonkotsu broth that simmers for eighteen hours, a jammy egg with a custard-like yolk, nori that dissolves on your tongue.\n\nThis is the backup plan. The encore. The 'I wasn't ready for the night to end' move. Second date idea? Maybe.",
    },
    {
      id: "SU-017",
      title: "TEMPURA",
      type: "fried",
      status: "CRISPY",
      metrics: "8/10",
      image: "/images/work-tempura.jpg",
      artist: "Chef Kobayashi",
      location: "Japatapa Toshibar",
      medium: "Shrimp, light batter, dipping sauce",
      article: "The tempura shrimp arrives golden and crackling, wrapped in a batter so light it defies gravity. One bite and the crunch echoes through your soul.\n\nIt's crispy, it's satisfying, and it pairs perfectly with good conversation. Plus, watching someone eat tempura gracefully is a true test of character.",
    },
  ],
}

// ─── INSTANT CONFIG ────────────────────────────────────────────────────

export const instantConfig: InstantConfig = {
  textLines: [
    "SO...",
    "What do you say?",
    "(Please say yes, I already made the reservation)",
  ],
  videoPath: "",
  roomLabel: "Room 03 // The Decision",
}

// ─── FOOTER CONFIG ─────────────────────────────────────────────────────

export const footerConfig: FooterConfig = {
  brandText: "YOUR DECISION",
  taglineLines: [
    "THESE BUTTONS HOLD YOUR ANSWER",
    "CHOOSE WISELY (BUT REALLY, CHOOSE YES)",
  ],
  navigationHeading: "NAVIGATION",
  navigationLinks: [
    { label: "The Proposal", href: "#hero" },
    { label: "The Menu", href: "#gallery" },
    { label: "The Decision", href: "#instant" },
  ],
  contactHeading: "CONTACT",
  contactLinks: [
    { label: "Kadean Lewis", href: "" },
    { label: "Japatapa Toshibar", href: "" },
    { label: "The 23rd", href: "" },
  ],
  copyright: "Made with obsession by Kadean Lewis",
  creditText: "Built with soy sauce and hope",
}

// ─── WORK DETAIL CONFIG ────────────────────────────────────────────────

export const workDetailConfig: WorkDetailConfig = {
  backLabel: "← BACK",
  artistLabel: "Chef",
  locationLabel: "Location",
  mediumLabel: "Ingredients",
  backToGalleryLabel: "← Back to menu",
  metaRoomSuffix: "ROOM 02",
  footerNote: "Kadean x Lucija · Room 02",
  notFoundTitle: "404 · Dish not found",
  notFoundLink: "← BACK TO MENU",
}

// Helper map for WorkDetail lookups
export const worksById: Record<string, WorkItem> = Object.fromEntries(
  galleryConfig.works.map((w) => [w.id.toLowerCase(), w]),
)
