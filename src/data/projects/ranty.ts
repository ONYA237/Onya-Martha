import { Project, ProjectDetail } from "./types";

export const rantyFeatured: Project = {
  slug: "ranty",
  index: "02",
  title: "Ranty",
  discipline: "UI/UX + Frontend",
  views: 71,
  tools: ["Figma", "Istockphoto"],
  keywords: ["editorial design", "luxury branding", "visual rhythm"],
  impact: "premium positioning uplift",
  blurb:
    "An interior-design brand landing page that lets the space — not the chrome — sell the work.",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/9d20d0215523313.Y3JvcCwxMTUwLDkwMCwyNSww.png",
};

export const rantyDetail: ProjectDetail = {
  slug: "ranty",
  title: "Ranty",
  discipline: "UI/UX + Frontend",
  year: "2026",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/9d20d0215523313.Y3JvcCwxMTUwLDkwMCwyNSww.png",
  summary:
    "An interior design brand experience built to let the spaces speak for themselves instead of relying on visual noise.",
  keywords: ["editorial design", "luxury branding", "visual rhythm"],
  impact: "premium positioning uplift",
  overview:
    "Ranty is a luxury-focused brand landing page designed to feel editorial and minimal. The intent was to let the work lead, with typography and spacing creating a premium rhythm that supports the visual storytelling.",
  challenge:
    "Interior design brands often struggle to feel premium without overloading the page with too much product or content. The challenge was to create enough atmosphere without sacrificing usability or clarity.",
  context:
    "This project needed to position the brand as premium and curated while still keeping users oriented on the value of the services offered. The experience had to feel elevated but not difficult to navigate.",
  goals: [
    "Build an editorial brand presence with premium visual confidence.",
    "Promote the work without cluttering the experience.",
    "Keep the user journey clear and emotionally resonant.",
  ],
  solution:
    "I leaned into editorial composition, generous whitespace, and strong image-led hierarchy. The page uses restraint to make the portfolio feel more elevated and intentional while keeping the client journey clear and direct.",
  process: [
    {
      title: "Brand mood",
      text: "I shaped a premium visual tone using space, contrast, and a calm rhythm that matched the brand's serious design sensibility.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9d20d0215523313.Y3JvcCwxMTUwLDkwMCwyNSww.png",
    },
    {
      title: "Storytelling",
      text: "I built a narrative arc from brand introduction to project reveal so the work feels curated instead of cluttered.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9d20d0215523313.Y3JvcCwxMTUwLDkwMCwyNSww.png",
    },
    {
      title: "Build",
      text: "The frontend was designed to preserve that editorial calm while staying responsive and high-performing across devices.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/9d20d0215523313.Y3JvcCwxMTUwLDkwMCwyNSww.png",
    },
  ],
  outcome:
    "The result feels polished, premium, and visually confident. The brand story is clear, and the project visuals remain the centerpiece without distraction.",
  results: [
    { label: "Role", value: "Design + build" },
    { label: "Focus", value: "Brand storytelling" },
    { label: "Outcome", value: "Luxury aesthetic" },
  ],
  deliverables: ["Brand website", "Landing page", "Visual direction", "Responsive build"],
  learnings: [
    "Luxury branding works when the design removes noise instead of adding more.",
    "The strongest visual stories are usually the quietest ones.",
    "A premium interface still needs structure to maintain clarity.",
  ],
};
