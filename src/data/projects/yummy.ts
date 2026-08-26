import { Project, ProjectDetail } from "./types";

export const yummyFeatured: Project = {
  slug: "yummy",
  index: "03",
  title: "Yummy",
  discipline: "UI/UX + Frontend",
  views: 52,
  tools: ["Figma"],
  keywords: ["mobile UX", "food ordering", "fast checkout"],
  impact: "fewer taps, faster decisions",
  blurb:
    "A food-delivery app interface tuned to turn craving into a fast, honest few taps.",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/26aa6b215547177.Y3JvcCwxMDc5LDg0NCw3NCww.png",
};

export const yummyDetail: ProjectDetail = {
  slug: "yummy",
  title: "Yummy",
  discipline: "UI/UX + Frontend",
  year: "2025",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/26aa6b215547177.Y3JvcCwxMDc5LDg0NCw3NCww.png",
  summary:
    "A food delivery interface designed to move users quickly from craving to checkout without friction.",
  keywords: ["mobile UX", "food ordering", "fast checkout"],
  impact: "fewer taps, faster decisions",
  overview:
    "Yummy was designed as a mobile-first food ordering flow that balances appetite, speed, and ease. The system needed to feel energetic and welcoming without sacrificing the clarity of the actual buying path.",
  challenge:
    "The main issue was friction—too many options, too much visual noise, and potential consumer indecision. The interface had to feel delicious and fast at the same time.",
  context:
    "The app needed to make the food purchase journey feel immediate and rewarding. The user had to feel appetite, confidence, and progress at every step without cognitive overload.",
  goals: [
    "Reduce decision fatigue in a food ordering flow.",
    "Create a visually appetizing and intuitive mobile experience.",
    "Speed up the path from discovery to checkout.",
  ],
  solution:
    "I built the experience around visual appetite and streamlined actions. The layout puts product imagery and clear decision points front and center, reducing cognitive effort and increasing confidence at checkout.",
  process: [
    {
      title: "UX flow",
      text: "I simplified the ordering journey by tightening the visual hierarchy and reducing unnecessary decision points.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/26aa6b215547177.Y3JvcCwxMDc5LDg0NCw3NCww.png",
    },
    {
      title: "UI rhythm",
      text: "I created a warm, high-contrast interface that prioritized food visuals, clear categories, and quick actions.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/26aa6b215547177.Y3JvcCwxMDc5LDg0NCw3NCww.png",
    },
    {
      title: "Iteration",
      text: "I refined the flow to remove friction between discovery, cart, and purchase without sacrificing personality.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/26aa6b215547177.Y3JvcCwxMDc5LDg0NCw3NCww.png",
    },
  ],
  outcome:
    "The product feels fast, satisfying, and easy to act on. It turns an ordinary food ordering flow into a more emotionally engaging and conversion-focused experience.",
  results: [
    { label: "Role", value: "Product design" },
    { label: "Focus", value: "Mobile UX" },
    { label: "Outcome", value: "Fast ordering" },
  ],
  deliverables: ["Mobile UI", "UX flows", "Prototype", "Design system"],
  learnings: [
    "The best food UX feels immediate, not crowded.",
    "Motivating visuals can reduce friction when paired with a clear path.",
    "Fast interactions are strongest when UI decisions are emotionally intentional.",
  ],
};
