import { ProjectDetail } from "./types";

export const reeplsDetail: ProjectDetail = {
  slug: "reepls",
  title: "Reepls",
  discipline: "UI/UX",
  year: "",
  image: "",
  summary:
    "Designing clarity into a growing digital ecosystem — making rich, interconnected offerings feel discoverable and approachable.",
  keywords: ["ecosystem", "information architecture", "discovery"],
  impact: "clarity and discoverability",
  overview:
    "Reepls is a technology and learning ecosystem with programs, events, spaces, and products. The challenge was not to make Reepls smaller — it was to make it easier to understand. I reframed the homepage around user intent so people could enter the ecosystem through what they wanted to do rather than by learning the site's internal structure.",
  challenge:
    "The platform contained many valuable offerings. When everything is important, nothing is prioritized. Users were at risk of needing to understand the organization before they could understand what Reepls could do for them.",
  context:
    "Different people arrive with different intentions: a course-seeker, an event-goer, a partner, a product user. The interface needed to help each person recognise themselves and choose a path without feeling overwhelmed.",
  goals: [
    "Reframe the homepage around user intent rather than organizational structure.",
    "Create clear entry points for Learn / Work / Connect / Build / Space / Partner.",
    "Design an information architecture that communicates relationships between programs, events and products.",
  ],
  solution:
    "I stopped designing isolated pages and started designing relationships. The homepage becomes a directional entry point that asks: What are you here to do? From there the interface guides users into contextually relevant paths, preserving the ecosystem's richness while making the whole easier to use.",
  process: [
    {
      title: "Intent mapping",
      text: "I mapped common user intentions and translated them into persistent pathways rather than isolated pages.",
    },
    {
      title: "Architecture exploration",
      text: "Large visual diagrams showed how programs, events, products and spaces connected — the design kept the relationships central.",
    },
    {
      title: "Wireframing",
      text: "Wireframes focused on hierarchy and decision points: what deserves attention, what can wait, and where reassurance should appear.",
    },
  ],
  outcome:
    "The homepage functions as an entry point rather than an information dump. Clear choices reduce friction and let users enter the ecosystem through intent, preserving the value of each offering while making the whole easier to use.",
  results: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Focus", value: "Ecosystem clarity" },
    { label: "Outcome", value: "Structured discoverability" },
  ],
  deliverables: ["Information architecture", "Homepage design", "Design system"],
  learnings: [
    "Complexity often lives in relationships, not in content quantity.",
    "Design that communicates relationships helps valuable content feel discoverable.",
  ],
  gallery: [],
  assetSlots: {
    hero: "reepls/hero",
    problem: "reepls/problem",
    informationArchitecture: "reepls/information-architecture",
    wireframes: "reepls/wireframes",
    finalDesign: "reepls/final-design",
    process: ["reepls/process-01", "reepls/process-02", "reepls/process-03"],
  },
  liveUrl: "https://www.reepls.com/",
};

export default reeplsDetail;
