import { ProjectDetail } from "./types";

export const treddarDetail: ProjectDetail = {
  slug: "treddar",
  title: "Treddar",
  discipline: "UI/UX",
  year: "",
  image: "",
  summary:
    "Designing confidence into every journey — making intercity travel predictable and trustworthy from search to arrival.",
  keywords: ["travel", "booking", "seat selection"],
  impact: "increased confidence in travel decisions",
  overview:
    "Treddar brings intercity travel booking into one coherent digital experience. The core UX problem was uncertainty — users needed confidence about availability, agency reliability, seat choice and post-payment access to tickets.",
  challenge:
    "Intercity travel historically relies on physical reassurance. The digital product needed to reproduce that trust through clear, scanable interfaces and progressively revealed verification steps.",
  context:
    "Users move through fragmented offline steps: finding agencies, checking departures, choosing seats and collecting tickets. The product unifies this journey so the interface answers users' questions, one decision at a time.",
  goals: [
    "Make each screen answer one clear question.",
    "Reduce uncertainty across search, comparison, seat selection and payment.",
    "Treat the ticket as a durable travel artifact that is easy to find and verify.",
  ],
  solution:
    "I centred the booking flow on confidence: search leads immediately to relevant trips; results are highly scannable; seat selection communicates availability clearly; checkout slows the experience to verify details before payment; and the digital ticket remains discoverable post-booking.",
  process: [
    { title: "Search prioritisation", text: "Focus the initial interaction on From / To / Date to start the journey immediately." },
    { title: "Results comparison", text: "Design scanable result rows that surface agency, departure, price and trust signals." },
    { title: "Seat interaction", text: "Make seat states immediately understandable: available, selected, unavailable." },
  ],
  outcome:
    "The experience reduces the number of open questions a traveller has, shifting the product from a set of steps into a continuous, confidence-building journey.",
  results: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Focus", value: "Transactional confidence" },
    { label: "Outcome", value: "Predictable booking flow" },
  ],
  deliverables: ["Search UX", "Booking flow", "Ticket UX"],
  learnings: ["Transactional design removes uncertainty when it foregrounds verification.", "Design should slow where trust matters and stay fast elsewhere."],
  gallery: [],
  assetSlots: {
    hero: "treddar/hero",
    problem: "treddar/problem",
    informationArchitecture: "treddar/information-architecture",
    wireframes: "treddar/wireframes",
    finalDesign: "treddar/final-design",
    process: ["treddar/process-01", "treddar/process-02", "treddar/process-03"],
  },
};

export default treddarDetail;
