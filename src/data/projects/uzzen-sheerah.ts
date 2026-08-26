import { ProjectDetail } from "./types";

export const uzzenSheerahDetail: ProjectDetail = {
  slug: "uzzen-sheerah",
  title: "Uzzen Sheerah Initiative",
  discipline: "UI/UX",
  year: "",
  image: "",
  summary:
    "Designing a digital experience around impact, trust and action — making organizational information into pathways for participation.",
  keywords: ["social impact", "donation UX", "trust"],
  impact: "pathways to participation",
  overview:
    "Uzzen Sheerah Initiative works across empowerment, education and health. The core challenge was turning organizational information into clear, trust-building pathways for donors, volunteers, partners and beneficiaries.",
  challenge:
    "A nonprofit site can become a collection of useful information without creating engagement. The product needed to make the mission actionable: why it matters and how people can participate.",
  context:
    "Different visitors arrive with different goals: join a program, donate, volunteer, partner. Each journey required clear context, trust signals and simple conversion paths.",
  goals: [
    "Create program pages that invite participation.",
    "Design donation flows that answer why and where contributions go.",
    "Make stories and impact accessible and human.",
  ],
  solution:
    "I emphasised mission, human context and clear action paths. Impact modules connect program work to outcomes, and donation flows foreground trust and transparency before asking for contribution.",
  process: [
    { title: "Program mapping", text: "Organise program entry points so each is an invitation into the mission rather than a list item." },
    { title: "Donation design", text: "Design donation pages that answer Why / Where / Trust before asking for support." },
    { title: "Story-first presentation", text: "Highlight human stories with large photography and short, contextual writing." },
  ],
  outcome:
    "The interface helps visitors understand where they fit in the mission and choose a way to participate — donate, volunteer, partner or join a program.",
  results: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Focus", value: "Trust & action" },
    { label: "Outcome", value: "Clear participation pathways" },
  ],
  deliverables: ["Program pages", "Donation UX", "Editorial stories"],
  learnings: [
    "High-trust interactions require context, transparency and clear paths to act.",
    "Stories are essential for building empathy and participation.",
  ],
  gallery: [],
  assetSlots: {
    hero: "uzzen-sheerah/hero",
    problem: "uzzen-sheerah/problem",
    informationArchitecture: "uzzen-sheerah/information-architecture",
    wireframes: "uzzen-sheerah/wireframes",
    finalDesign: "uzzen-sheerah/final-design",
    process: ["uzzen-sheerah/process-01", "uzzen-sheerah/process-02", "uzzen-sheerah/process-03"],
  },
};

export default uzzenSheerahDetail;
