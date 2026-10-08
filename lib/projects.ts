export type Layer = {
  name: string;
  tech: string;
  ref: string;
};

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  phone?: boolean;
};

export type Project = {
  slug: string;
  dwg: string;
  title: string;
  key: "clay" | "teal" | "plum" | "ochre" | "indigo" | "blue";
  tags: string[];
  role: string;
  what: string;
  layers: Layer[];
  figure: string;
  specs?: { label: string; value: string }[];
  built: string[];
  note: { heading: string; body: string };
  live?: { label: string; href: string };
  shots: Shot[];
};

export const projects: Project[] = [
  {
    slug: "dermale",
    dwg: "DWG 01",
    title: "Dermalé",
    key: "clay",
    tags: ["Live", "Client build"],
    role: "Lead developer & technical co-founder",
    what:
      "A multi-vendor skincare marketplace where customers buy products, book clinic treatments, and pay for consultations with skincare professionals — in one checkout.",
    layers: [
      {
        name: "A · Interface",
        tech: "Next.js 16 App Router · React · TypeScript · Tailwind",
        ref: "5 role-gated dashboards",
      },
      {
        name: "B · Logic",
        tech: "Server Actions · Route Handlers · BetterAuth",
        ref: "Permissions per account type",
      },
      {
        name: "C · Data",
        tech: "PostgreSQL / Supabase · Prisma 7 · Neon adapter",
        ref: "26 tables, RLS on all",
      },
      {
        name: "D · Money & comms",
        tech: "Paystack · Resend · Upstash Redis · Vercel",
        ref: "Live payments + real refunds",
      },
    ],
    figure: "Fig. 1 — four layers, built and owned end to end",
    specs: [
      { label: "Tables", value: "26" },
      { label: "Account types", value: "4" },
      { label: "Platform fee", value: "3%" },
      { label: "Vendors live", value: "6" },
    ],
    built: [
      "Four account types — retailer, clinic, professional, admin — each with its own dashboard, onboarding path and permission set, plus a pre-approval intake before any vendor goes live.",
      "Live Paystack payments carrying a platform service fee across orders, bookings and consultations, with a working refund pipeline the admin runs from the console — not a sandbox demo.",
      "Async consultation messaging with 30-day unlock windows, anti-disintermediation detection, email fallback and an admin reports queue.",
      "Cursor-based pagination and a GIN-indexed skin-concerns array so catalogue filtering stays fast as inventory grows.",
      "A community reviews wall where only customers with a completed transaction can post, and admin curates what reaches the homepage.",
      "Row-level security enforced on every one of the 26 tables.",
      "Real Lagos businesses onboarded and trading on it, with payouts, deliveries and vendor approvals all run from the admin console.",
    ],
    note: {
      heading: "Field note",
      body:
        "The homepage was firing eight simultaneous cart requests on load, tripping the database's connection-storm circuit breaker under free-tier auto-suspend. I consolidated hydration into one shared provider fetch. Same session, I found a silent failure in professional signup: a missing field was creating auth accounts with no matching profile — every professional who signed up existed and didn't exist at the same time. Both were invisible in the UI and fatal in production.",
    },
    live: { label: "Visit Dermalé", href: "https://www.askdermale.com" },
    shots: [
      {
        src: "/shots/dermale-transactions.png",
        alt: "Dermalé admin transactions view with a refund action on a confirmed order",
        caption:
          "Admin transactions — every order, booking and consultation, with refunds issued straight through Paystack. Customer details replaced for this screenshot.",
        width: 1896,
        height: 918,
      },
      {
        src: "/shots/dermale-stores.png",
        alt: "Dermalé storefront listing six independent vendor stores",
        caption:
          "Six independent retailers, each with their own storefront, inventory and payout account.",
        width: 1894,
        height: 906,
      },
      {
        src: "/shots/dermale-professionals.png",
        alt: "Dermalé professionals directory with categories and session pricing",
        caption:
          "Licensed professionals set their own categories and session pricing; bookings and consultations settle through the same checkout.",
        width: 1906,
        height: 916,
      },
    ],
  },
  {
    slug: "autoverse",
    dwg: "DWG 02",
    title: "AutoVerse",
    key: "teal",
    tags: ["Live", "Client build", "Solo"],
    role: "Concept, simulation & diagnostics",
    what:
      "Two tools for Nigerian roads: real CFD aerodynamic solves, and an OBD-II engine that walks a trouble code to a ranked root cause instead of guessing.",
    layers: [
      {
        name: "A · Interface",
        tech: "Web front end · WebP asset pipeline",
        ref: "Fast first paint",
      },
      {
        name: "B · Simulation",
        tech: "OpenFOAM 10 · simpleFoam solver",
        ref: "Cd · lift · yaw",
      },
      {
        name: "C · Diagnostics",
        tech: "OBD-II trouble codes · NHTSA VIN decode · fuel-trim logic",
        ref: "Structured decision tree",
      },
      {
        name: "D · Output",
        tech: "Confidence-ranked causes · PDF and email reports",
        ref: "A verification step per cause",
      },
    ],
    figure: "Fig. 2 — real solvers, not marketing renders",
    specs: [
      { label: "Solver", value: "OpenFOAM 10" },
      { label: "VIN decode", value: "NHTSA" },
      { label: "Reports", value: "PDF" },
    ],
    built: [
      "Aerodynamic simulation running actual OpenFOAM CFD solves for drag, lift, crosswind stability and thermal load — factored for highway, urban and unpaved Nigerian road conditions.",
      "A diagnostic engine that takes a trouble code, live fuel trim and O2 sensor data, and VIN-decoded vehicle context, then classifies the code family and branches on idle-only versus all-RPM behaviour.",
      "Root causes returned ranked by confidence, each with its own verification step, so a mechanic knows what to check first rather than replacing parts in sequence.",
      "Exportable reports as PDF or email, so a diagnosis can leave the tool and reach whoever is doing the work.",
    ],
    note: {
      heading: "Why I built it",
      body:
        "Most diagnostic apps guess, and most aerodynamic visualisations are marketing renders. I spent a decade doing hardware diagnostics before I wrote software, and what made a repair fast was never the error code — it was reasoning from symptom to cause in the right order. AutoVerse encodes that reasoning rather than illustrating it.",
    },
    live: { label: "Visit AutoVerse", href: "https://www.autoversesim.com" },
    shots: [
      {
        src: "/shots/autoverse-hero.png",
        alt: "AutoVerse landing page: see how your car moves, know why it's broken",
        caption:
          "Built for Lagos–Ibadan highway speeds and Lagos pothole reality alike.",
        width: 1915,
        height: 890,
      },
      {
        src: "/shots/autoverse-platform.png",
        alt: "AutoVerse platform page showing the simulation and diagnostic tools side by side",
        caption:
          "Two tools, one platform — the CFD solver and the OBD-II diagnostic engine.",
        width: 1902,
        height: 894,
      },
    ],
  },
  {
    slug: "house-of-glass",
    dwg: "DWG 03",
    title: "House of Glass",
    key: "plum",
    tags: ["Live", "Client build"],
    role: "Design & front-end",
    what:
      "An online storefront for a Lagos eyewear brand — a curated collection, a cart and a wishlist, built to load fast and be handed over to a client with no technical team.",
    layers: [
      {
        name: "A · Markup",
        tech: "Semantic HTML5 · accessible structure",
        ref: "Editable by the client",
      },
      {
        name: "B · Styling",
        tech: "CSS3 · custom properties · responsive grid",
        ref: "Phone to desktop",
      },
      {
        name: "C · Behaviour",
        tech: "Vanilla JavaScript · cart and wishlist state",
        ref: "Zero dependencies",
      },
    ],
    figure: "Fig. 3 — the right tool being the smallest one",
    built: [
      "A full storefront in hand-written HTML, CSS and vanilla JavaScript — no framework, no bundler, no node_modules folder to go stale.",
      "Seasonal collection drops with a curated product grid, cart and wishlist, all held in client-side state.",
      "Typographic identity built around the brand's own gold-on-black direction, with the frame photography carrying the page.",
      "Deploys as plain files, so the client can host it anywhere and keep it running without paying a monthly platform fee.",
    ],
    note: {
      heading: "Why static",
      body:
        "Not every shop needs a framework. This one had a finite, curated catalogue and a client with no technical team, so a React build would have added a toolchain they couldn't maintain and a dependency tree that rots the moment nobody updates it. Plain files load faster, cost nothing to host, and will still open in a browser in five years. Choosing the smaller tool is a decision, not a shortcut.",
    },
    live: { label: "Visit House of Glass", href: "https://generishog.com" },
    shots: [
      {
        src: "/shots/hog-hero.png",
        alt: "House of Glass homepage with the Summer Collection hero",
        caption: "Gold on black, est. Lagos — the brand's own direction, carried through.",
        width: 1903,
        height: 900,
      },
      {
        src: "/shots/hog-collection.png",
        alt: "House of Glass summer collection product grid",
        caption: "The collection grid — finite drops, hand-curated rather than endlessly paginated.",
        width: 1914,
        height: 911,
      },
    ],
  },
  {
    slug: "tracka-plus",
    dwg: "DWG 04",
    title: "Tracka+",
    key: "ochre",
    tags: ["Live", "Client build", "PWA"],
    role: "Took over & rebuilt",
    what:
      "A skincare routine tracker that works out tonight's routine for you — which actives are due, which to rest after last night, and which don't mix — then reminds you at the right time.",
    layers: [
      {
        name: "A · Interface",
        tech: "React + Vite · Tailwind · installable PWA · time-aware themes",
        ref: "Redesigned end to end",
      },
      {
        name: "B · Engine",
        tech: "Pure planNight function · actives detection · conflict rules",
        ref: "No DB, no clock, fully testable",
      },
      {
        name: "C · Data",
        tech: "Supabase Postgres · RLS · shared product catalogue",
        ref: "Expiry and PAO tracking",
      },
      {
        name: "D · Reminders",
        tech: "Web Push · Supabase Edge Function · pg_cron every 5 min",
        ref: "Server says what the screen says",
      },
    ],
    figure: "Fig. 4 — an inherited prototype, rebuilt from the data up",
    specs: [
      { label: "Frequencies", value: "5" },
      { label: "Push check", value: "5 min" },
      { label: "Platform", value: "PWA" },
    ],
    built: [
      "Took ownership of a prototype someone else had generated, audited its database, and fixed what I found: missing row-level security policies, duplicate completion records, users with no profile row, orphaned routines, and date logic running on UTC instead of local time.",
      "Wrote a pure night-routine engine: hand it today's date, the user's steps and their history, and it returns tonight's plan — resting retinol after an acid night, holding back actives that aren't due, separating ingredients that conflict — with a plain-English reason for every change.",
      "Built the full push notification chain: browser subscriptions, a Supabase Edge Function running the same engine server-side, and pg_cron firing every five minutes so the evening reminder matches the screen exactly.",
      "An ingredient checker that explains what an active does, when to use it and how often — and says plainly when something isn't in the database rather than guessing.",
      "Product shelf with opened-date and period-after-opening tracking, so expired products are flagged in the routine instead of silently recommended.",
      "Skin diary with photo entries and a monthly completion report, plus a streak calendar that distinguishes finished, part-done and missed days.",
    ],
    note: {
      heading: "Field note",
      body:
        "The engine has no database calls, no React, and never reads the clock — the date is passed in. That one constraint is what let me simulate ten nights of routines in under a second on the command line before touching a single screen, and what lets the exact same function run on the server for notifications. The hard part of a scheduling feature isn't the schedule; it's making the rules testable in isolation.",
    },
    live: { label: "Visit Tracka+", href: "https://trackaplus.app" },
    shots: [
      {
        src: "/shots/tracka-conflict.png",
        alt: "Tracka+ night routine explaining that exfoliant was moved because it doesn't mix with retinol",
        caption:
          "The engine's output in plain English: exfoliant moved to another night, because it doesn't mix with retinol.",
        width: 397,
        height: 767,
        phone: true,
      },
      {
        src: "/shots/tracka-products.png",
        alt: "Tracka+ product shelf showing opened dates, period after opening and expiry status",
        caption:
          "Opened date and period-after-opening per product, so expired items get flagged rather than recommended.",
        width: 352,
        height: 859,
        phone: true,
      },
      {
        src: "/shots/tracka-ingredient.png",
        alt: "Tracka+ ingredient checker entry for retinol",
        caption:
          "Ingredient checker — what it does, when to use it, and how often to start.",
        width: 381,
        height: 847,
        phone: true,
      },
      {
        src: "/shots/tracka-calendar.png",
        alt: "Tracka+ streak calendar distinguishing finished, part-done and missed days",
        caption: "Streaks that distinguish finished, part-done and missed, instead of pass or fail.",
        width: 342,
        height: 696,
        phone: true,
      },
    ],
  },
  {
    slug: "planit",
    dwg: "DWG 05",
    title: "Planit",
    key: "indigo",
    tags: ["Real-time", "Solo build"],
    role: "Concept & full-stack",
    what:
      "A productivity suite built for medical students — nine modules that talk to each other, with real-time chat so study groups work inside the same tool they plan in.",
    layers: [
      {
        name: "A · Interface",
        tech: "React + Vite · Tailwind · TipTap · FullCalendar · Recharts · dnd-kit",
        ref: "9 modules",
      },
      { name: "B · State", tech: "Redux Toolkit · RTK Query", ref: "Cached, normalised" },
      {
        name: "C · Logic",
        tech: "Node · Express · JWT · Nodemailer OTP",
        ref: "Verified signup flow",
      },
      {
        name: "D · Data & sockets",
        tech: "MongoDB · Mongoose · Socket.io",
        ref: "Live chat, read receipts",
      },
    ],
    figure: "Fig. 5 — the React counterpart to Dermalé's Next.js",
    specs: [
      { label: "Modules", value: "9" },
      { label: "Real-time", value: "Yes" },
      { label: "Auth", value: "JWT + OTP" },
    ],
    built: [
      "Nine complete modules: notes and notebooks, task manager, journal, habit tracker, goal tracker, Pomodoro, bookmarks, universal search across everything, and chat.",
      "Direct messages and group chats over Socket.io with read receipts, file sharing, reactions, reply threading and notifications.",
      "Token auth with OTP email verification and password reset, wired through Redux Toolkit and RTK Query.",
      "Rich text with TipTap, a real calendar with FullCalendar, drag-and-drop boards with dnd-kit, and an insights dashboard in Recharts.",
    ],
    note: {
      heading: "Field note",
      body:
        "Deploying an Express API to serverless meant every cold start opened a fresh Mongo connection until the pool ran out. I cached the connection in global state so functions reuse it, and replaced the hardcoded CORS origin with dynamic whitelisting so local and production run against the same backend. It's also why I didn't move Planit to Next.js — websockets don't live on serverless, and a migration for its own sake isn't an improvement.",
    },
    shots: [],
  },
  {
    slug: "sfa-bank",
    dwg: "DWG 06",
    title: "SFA Bank",
    key: "blue",
    tags: ["Live", "Solo build"],
    role: "Full-stack",
    what:
      "A working digital banking application — open an account, verify it, move money between accounts, pay bills, and pull a receipt for every transaction.",
    layers: [
      {
        name: "A · Interface",
        tech: "React + Vite · custom SVG identity · transaction receipts",
        ref: "Navy & gold, designed by me",
      },
      {
        name: "B · Logic",
        tech: "Node · Express on Vercel serverless · JWT · Nodemailer OTP",
        ref: "Rate limited, error handled",
      },
      {
        name: "C · Data",
        tech: "MongoDB · Mongoose · seeded biller catalogue",
        ref: "Balances, ledger, history",
      },
    ],
    figure: "Fig. 6 — where I learned to write code that moves money",
    built: [
      "Account opening with token auth and OTP email verification, so no account goes active on an unverified address.",
      "Fund transfers between accounts with balance validation before the write, and bill payments against a seeded biller catalogue.",
      "Full transaction history with downloadable receipts.",
      "Rate limiting and centralised error handling across every route, plus account management and settings.",
      "Deployed frontend and API separately on Vercel, with CORS configured to serve local development and production from the same backend.",
    ],
    note: {
      heading: "Field note",
      body:
        "Money code doesn't get to be approximately right. Every transfer validates the balance before it writes, and every route returns a predictable error shape instead of leaking a stack trace to the client. This was the project where I learned that the interesting half of a banking app is everything that happens when a request fails.",
    },
    live: { label: "Visit SFA Bank", href: "https://sfabank.vercel.app" },
    shots: [
      {
        src: "/shots/sfa-hero.png",
        alt: "SFA Bank landing page showing an account card, balance and recent transactions",
        caption: "Transfers, bill payments and a running ledger, on one account view.",
        width: 1893,
        height: 906,
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
