import { ProjectDetail } from "./types";
import dynamisKeyFlowBreakdown from "../../assets/projects/dynamis/process-02/ChatGPT Image Aug 24, 2026, 09_15_22 PM.png";

export const dynamisDetail: ProjectDetail = {
  slug: "dynamis",
  title: "DYNAMIS",
  discipline: "Product / UI/UX",
  year: "",
  image: "",
  tagline: "COMPETE. LEARN. RISE.",
  role: "Product Designer / UI/UX Designer",
  platform: "Web / Mobile",
  audience: "Secondary-school students, parents and schools",
  projectType: "EdTech / Education",
  summary:
    "Compete. Learn. Rise. Making academic progress visible so students can act on what they know and what they need to practice.",
  keywords: ["edtech", "learning loop", "progress"],
  impact: "visible learning loops",
  overview:
    "DYNAMIS connects learning content, performance measurement and motivational systems. The product aims to make academic progress visible and actionable so students, parents and schools can understand growth in context.",
  challenge:
    "Education frequently separates learning from measurement. Feedback arrives too late. The challenge was shortening that loop and making progress a live, navigable experience.",
  context:
    "Students need to know whether their time is improving results. Parents need high-level visibility. The product must balance competition with reflection and data with simplicity.",
  goals: [
    "Shorten feedback loops between practice and measurable improvement.",
    "Design dashboards that answer: What should I do now? How am I doing? What should I improve?",
    "Make competition meaningful by connecting it back to learning.",
  ],
  oneGlance: {
    challenge: "Academic preparation can feel isolated, with limited visibility into progress and areas for improvement.",
    users: "Students preparing for BEPC, GCE and Baccalauréat, with supporting visibility for parents.",
    myRole: "Product strategy, UX architecture, user flows, wireframing, UI design and prototyping.",
    outcome: "A connected learning experience combining practice, feedback, progress tracking and competition.",
  },
  solution:
    "I built a system where learning, performance and motivation reinforce one another: practice maps to scores, scores inform learning priorities, and competition drives targeted practice rather than shallow ranking.",
  process: [
    { title: "Understand", text: "Map the problem space and identify where feedback arrives too late and which behaviours need support." },
    { title: "Define", text: "Turn insights into product requirements: tracking, recommendations, feedback and motivation." },
    { title: "Explore", text: "Rapid wireframes and interaction sketches to test information density and primary actions." },
    { title: "Architect", text: "Design an information architecture that supports multiple journeys without overwhelming students." },
    { title: "Design", text: "Build visual components and flows for dashboard, practice and feedback experiences." },
    { title: "Validate", text: "Prototype key flows to validate learning loop interactions and feedback clarity." },
    { title: "Refine", text: "Iterate on UI, phrasing and micro-interactions to keep the student in control." },
  ],
  outcome:
    "The product frames progress as a decision-making tool: students can see what to practice next, understand strengths and weaknesses, and connect competition back to targeted learning.",
  results: [
    { label: "Role", value: "Product Designer / UI/UX" },
    { label: "Focus", value: "Learning visibility" },
    { label: "Outcome", value: "Actionable progress" },
  ],
  deliverables: ["Learning UX", "Dashboard design", "Progress visualisations"],
  personas: [
    {
      id: "student",
      title: "PERSONA 01 — THE STUDENT",
      goals: [
        "Improve academic performance",
        "Prepare for examinations",
        "Understand weak areas",
        "Practice consistently",
        "Stay motivated",
      ],
      painPoints: [
        "Limited feedback",
        "Difficulty identifying weak topics",
        "Exam preparation can feel isolated",
        "Progress isn't always visible",
        "Motivation drops without feedback",
      ],
      needs: ["Clear progress", "Relevant practice", "Immediate feedback", "Motivation", "Simple navigation"],
    },
    {
      id: "parent",
      title: "PERSONA 02 — THE PARENT",
      goals: ["Understand child's academic progress", "Know where support is needed", "Monitor consistency", "Stay informed"],
      painPoints: ["Limited visibility into day-to-day learning", "Results often arrive after the learning process", "Difficult to know where intervention is needed"],
      needs: ["Clear reports", "Progress visibility", "Simple insights", "Relevant alerts"],
    },
  ],
  designPrinciples: [
    "Make progress visible",
    "Make the next action obvious",
    "Feedback should teach, not just score",
    "Competition should support learning",
    "Keep the student in control",
  ],
  learnings: [
    "Make progress visible, not intimidating.",
    "Competition must tie back to reflection and practice to be meaningful.",
  ],
  gallery: [],
  assets: {
    process: [dynamisKeyFlowBreakdown],
  },
  assetSlots: {
    hero: "dynamis/hero",
    problem: "dynamis/problem",
    informationArchitecture: "dynamis/information-architecture",
    wireframes: "dynamis/wireframes",
    finalDesign: "dynamis/final-design",
    process: ["dynamis/process-01", "dynamis/process-02", "dynamis/process-03"],
  },
};

export default dynamisDetail;
