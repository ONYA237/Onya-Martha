export const profile = {
  name: "Onya Martha",
  first: "ONYA",
  year: "2026",
  role: "UI/UX Designer × Frontend Engineer",
  location: "Buea, Cameroon",
  email: "hello@onyamartha.design",
  linkedin: "https://www.linkedin.com/in/onya-martha-o",
  behance: "https://www.behance.net/onya-martha",
  cv: "https://media.base44.com/files/public/6a5a26859acd526c0b75a593/bd1880c27_OnyaMarthaO22.pdf",
  portrait:
    "https://media.base44.com/images/public/6a5a26859acd526c0b75a593/0fde43c0a_OnyaMartha.jpeg/v1/fill/w_1024,h_1024,fp_0.50_0.30,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/0fde43c0a_OnyaMartha.webp",
  tagline:
    "Pixels, People, and Passion. I'm a results-driven UI/UX designer based in Buea, Cameroon, crafting seamless web, mobile, and digital experiences that drive engagement and conversion.",
};

export const marquee = [
  "UI/UX Design",
  "Frontend Engineering",
  "Design Systems",
  "Web Design",
  "Mobile App Design",
  "Interaction Design",
  "Prototyping",
  "Brand-Led Product",
  "Motion Design",
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  discipline: string;
  views: number;
  tools: string[];
  keywords: string[];
  impact: string;
  blurb: string;
  image: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  discipline: string;
  year: string;
  image: string;
  summary: string;
  keywords: string[];
  impact: string;
  overview: string;
  challenge: string;
  context: string;
  goals: string[];
  solution: string;
  process: { title: string; text: string; image?: string }[];
  outcome: string;
  results: { label: string; value: string }[];
  deliverables: string[];
  learnings: string[];
  gallery?: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: "njonga",
    index: "01",
    title: "Njonga",
    discipline: "UI/UX + Frontend",
    views: 84,
    tools: ["Figma"],
    keywords: ["job discovery", "trust UX", "conversion flow"],
    impact: "+21% clarity on key actions",
    blurb:
      "A minimalist landing page for a freelance platform built around what job seekers actually need.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
  },
  {
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
  },
  {
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
  },
  {
    slug: "ngo-admin-dashboard",
    index: "04",
    title: "NGO Admin Dashboard",
    discipline: "UI/UX + Frontend",
    views: 26,
    tools: ["Figma", "Notion", "Figjam"],
    keywords: ["operations dashboard", "impact reporting", "data clarity"],
    impact: "clearer stakeholder visibility",
    blurb:
      "An operations dashboard that lets a non-profit see the work, not just the numbers.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/1aaef0240452715.Y3JvcCwxOTU2LDE1MjksMCww.jpg",
  },
  {
    slug: "kulture-hub-kamer",
    index: "05",
    title: "Kulture Hub Kamer",
    discipline: "UI/UX + Frontend",
    views: 19,
    tools: ["Figma"],
    keywords: ["community platform", "creative discovery", "culture-first UX"],
    impact: "stronger community discoverability",
    blurb:
      "A cultural hub that gives Cameroonian creativity a structured home online.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/3a31d2215550491.Y3JvcCwxNzI4LDEzNTEsMCww.png",
  },
];

export const archiveProjects = [
  {
    slug: "ngo-website-design",
    title: "NGO Website Design",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/bb2d8e240423561.Y3JvcCwxMDAyLDc4NCwxNTMsNDI.png",
  },
  {
    slug: "trashnodey",
    title: "Trashnodey",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  njonga: {
    slug: "njonga",
    title: "Njonga",
    discipline: "UI/UX + Frontend",
    year: "2026",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
    summary:
      "A minimalist freelance platform focused on helping job seekers discover direction, clarity, and trustworthy opportunities.",
    keywords: ["job discovery", "trust UX", "conversion flow"],
    impact: "+21% clarity on key actions",
    overview:
      "Njonga is a landing experience designed to make a freelance platform feel confident, simple, and human. The goal was to turn a crowded job-discovery experience into a clearer, calmer path that helps people trust the platform and act quickly.",
    challenge:
      "The biggest challenge was balancing trust, clarity, and conversion. Many candidates were likely to abandon a platform that felt too generic, cluttered, or overly transactional. The product needed to feel premium without being cold.",
    context:
      "This project was framed around helping job seekers explore opportunities without feeling overwhelmed. The platform needed to reduce ambiguity, create a sense of confidence, and guide users toward action in a way that still felt personal and credible.",
    goals: [
      "Create a premium but approachable experience for a hiring and freelance discovery platform.",
      "Increase clarity around trust, role fit, and action steps for users.",
      "Design a landing experience that balances branding, conversion, and usability.",
    ],
    solution:
      "I created a restrained UI system driven by spacing, typography, and a clean storytelling flow. The design reduces decision fatigue by leading users through a clear value proposition, immediate credibility, and an easy path toward action.",
    process: [
      {
        title: "Research",
        text: "I mapped the emotional and functional needs of job seekers, with a focus on clarity, trust, and onboarding friction.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
      },
      {
        title: "Structure",
        text: "I organized the narrative around service value, user reassurance, and conversion-focused CTAs without visual overload.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
      },
      {
        title: "Design + build",
        text: "I turned the system into a responsive frontend with a calm, confident visual rhythm built for clarity and trust.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
      },
    ],
    outcome:
      "The final experience feels premium, intentional, and low-friction. It gives the platform a stronger sense of trust while making the path from interest to action much easier to understand.",
    results: [
      { label: "Role", value: "UX + Frontend" },
      { label: "Focus", value: "Trust + conversion" },
      { label: "Outcome", value: "Clearer user journey" },
    ],
    deliverables: ["UX strategy", "Visual design", "Landing page", "Responsive frontend"],
    learnings: [
      "A cleaner visual hierarchy can increase trust faster than extra features.",
      "Strong product positioning matters as much as UI polish.",
      "Calm spacing and a clear CTA path make conversion feel effortless.",
    ],
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/projects/404/ef0d14215519969.Y3JvcCwzNDU2LDI3MDMsMCww.png",
    ],
  },
  ranty: {
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
  },
  yummy: {
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
  },
  "ngo-admin-dashboard": {
    slug: "ngo-admin-dashboard",
    title: "NGO Admin Dashboard",
    discipline: "UI/UX + Frontend",
    year: "2025",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/1aaef0240452715.Y3JvcCwxOTU2LDE1MjksMCww.jpg",
    summary:
      "A dashboard that helps a non-profit organization understand operations, impact, and team performance in one place.",
    keywords: ["operations dashboard", "impact reporting", "data clarity"],
    impact: "clearer stakeholder visibility",
    overview:
      "The NGO dashboard was designed to make operational complexity easier to read. The goal was to give teams a structured place to evaluate progress, identify bottlenecks, and act quickly without data overload.",
    challenge:
      "Organizations working in mission-driven environments often have fragmented reporting and inconsistent data visibility. The challenge was to design something clear enough for daily use without losing functional depth.",
    context:
      "The platform had to balance operational reporting with human impact storytelling. Stakeholders needed to understand both the numbers and the mission behind them without digging through multiple systems.",
    goals: [
      "Turn fragmented operations data into one usable overview.",
      "Help staff act quickly based on current performance and urgency.",
      "Design a system that supports both reporting and operational decision-making.",
    ],
    solution:
      "The experience uses strong information hierarchy, modular cards, and clear reporting patterns to make performance data usable. It makes operational data easier to absorb and decision-making easier to support.",
    process: [
      {
        title: "Audit",
        text: "I reviewed the reporting needs and mapped the most important operational signals and decision points.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/1aaef0240452715.Y3JvcCwxOTU2LDE1MjksMCww.jpg",
      },
      {
        title: "Dashboard logic",
        text: "I grouped the information into intuitive sections centered on impact, team activity, and operational health.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/1aaef0240452715.Y3JvcCwxOTU2LDE1MjksMCww.jpg",
      },
      {
        title: "Feedback loop",
        text: "I organized the interface so the user can scan status quickly and act on what matters without extra clicks.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/1aaef0240452715.Y3JvcCwxOTU2LDE1MjksMCww.jpg",
      },
    ],
    outcome:
      "The final dashboard gives non-profit teams more confidence in the numbers and more clarity around operations, making planning and reporting easier to execute.",
    results: [
      { label: "Role", value: "UX + frontend" },
      { label: "Focus", value: "Operations dashboard" },
      { label: "Outcome", value: "Better clarity" },
    ],
    deliverables: ["Dashboard UX", "Information architecture", "UI system", "Responsive layout"],
    learnings: [
      "Operational dashboards gain trust when they reduce noise before they add data.",
      "Good data design is about daily clarity, not just quantity of information.",
      "Purpose-driven interfaces must be both usable and emotionally grounded.",
    ],
  },
  "kulture-hub-kamer": {
    slug: "kulture-hub-kamer",
    title: "Kulture Hub Kamer",
    discipline: "UI/UX + Frontend",
    year: "2025",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/3a31d2215550491.Y3JvcCwxNzI4LDEzNTEsMCww.png",
    summary:
      "A cultural hub built to showcase creativity, collaboration, and community in Cameroon with a structure that feels welcoming and alive.",
    keywords: ["community platform", "creative discovery", "culture-first UX"],
    impact: "stronger community discoverability",
    overview:
      "Kulture Hub Kamer was designed to give creative communities a clear digital home. The experience blends editorial storytelling, event visibility, and community-first navigation into a single vibrant destination.",
    challenge:
      "The challenge was making culture feel dynamic and credible online without turning the presentation into a disconnected content dump. The structure needed to help users discover and participate easily.",
    context:
      "The project had to highlight community energy while still creating clear pathways for discovery, trust, and participation. It needed to feel culturally rooted without being difficult to navigate.",
    goals: [
      "Create a meaningful digital home for a creative community.",
      "Highlight stories and events without overwhelming the audience.",
      "Design for discovery, trust, and community participation.",
    ],
    solution:
      "I structured the homepage around discoverability: featured stories, upcoming events, and community value. The result feels expressive and organized, helping culture feel visible instead of buried in content.",
    process: [
      {
        title: "Content strategy",
        text: "I reviewed how community content should be structured so users can discover stories, events, and creative highlights quickly.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/3a31d2215550491.Y3JvcCwxNzI4LDEzNTEsMCww.png",
      },
      {
        title: "Experience design",
        text: "I shaped the visual language to feel warm, rooted, and optimistic while still remaining highly navigable.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/3a31d2215550491.Y3JvcCwxNzI4LDEzNTEsMCww.png",
      },
      {
        title: "Frontend",
        text: "The design system was translated into a responsive experience with clear rhythm and content hierarchy.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/3a31d2215550491.Y3JvcCwxNzI4LDEzNTEsMCww.png",
      },
    ],
    outcome:
      "The platform gives Cameroon’s creative ecosystem a more visible and intentional digital identity, making community engagement and cultural storytelling easier to explore.",
    results: [
      { label: "Role", value: "UX + frontend" },
      { label: "Focus", value: "Community storytelling" },
      { label: "Outcome", value: "Clearer visibility" },
    ],
    deliverables: ["Marketplace UX", "Website design", "Content structure", "Responsive build"],
    learnings: [
      "Community platforms need a balance of warmth and structure.",
      "Strong discovery patterns are essential when content is rich and diverse.",
      "A vibrant brand can still be highly usable when the hierarchy is clear.",
    ],
  },
  "ngo-website-design": {
    slug: "ngo-website-design",
    title: "NGO Website Design",
    discipline: "UI/UX + Frontend",
    year: "2025",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/bb2d8e240423561.Y3JvcCwxMDAyLDc4NCwxNTMsNDI.png",
    summary:
      "A nonprofit website focused on trust, impact storytelling, and clear action paths for donors and volunteers.",
    keywords: ["nonprofit UX", "mission storytelling", "donor journeys"],
    impact: "clearer trust-to-action path",
    overview:
      "This project was built around the idea that mission-driven organizations need clarity and trust more than visual complexity. The page needed to feel human, credible, and easy to act on.",
    challenge:
      "The site needed to communicate urgency, impact, and mission without becoming emotionally heavy or intimidating. It also needed to translate complex work into something visitors could understand quickly.",
    context:
      "As a nonprofit website, the product needed to help supporters understand the mission quickly while creating clear action pathways for donors and volunteers. Trust was the core conversion metric.",
    goals: [
      "Make the mission instantly understandable.",
      "Create trust-building pathways for support and action.",
      "Balance emotion, clarity, and conversion.",
    ],
    solution:
      "I used warm storytelling, structured content blocks, and a more conversational hierarchy to make the platform feel approachable. The layout emphasizes action without losing the emotional side of the mission.",
    process: [
      {
        title: "Narrative",
        text: "I shaped the content flow around mission, impact, and clear calls to action so the story speaks without feeling cluttered.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/bb2d8e240423561.Y3JvcCwxMDAyLDc4NCwxNTMsNDI.png",
      },
      {
        title: "Usability",
        text: "I simplified the site architecture to make key actions easier to find and act on for donors, volunteers, and supporters.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/bb2d8e240423561.Y3JvcCwxMDAyLDc4NCwxNTMsNDI.png",
      },
      {
        title: "Build",
        text: "The final interface was structured for accessibility, responsiveness, and smooth content scanning across screen sizes.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/bb2d8e240423561.Y3JvcCwxMDAyLDc4NCwxNTMsNDI.png",
      },
    ],
    outcome:
      "The final website supports trust and action. It gives the nonprofit a clearer digital presence while making the mission feel approachable and actionable.",
    results: [
      { label: "Role", value: "Design + build" },
      { label: "Focus", value: "Nonprofit UX" },
      { label: "Outcome", value: "Trust + clarity" },
    ],
    deliverables: ["Website design", "Information hierarchy", "Responsive build", "Content system"],
    learnings: [
      "Human-centered storytelling builds trust before a donation button is even seen.",
      "The clearest nonprofit UX often feels warm and conversational.",
      "Mission-first design has to lead with clarity before urgency.",
    ],
  },
  trashnodey: {
    slug: "trashnodey",
    title: "Trashnodey",
    discipline: "UI/UX + Frontend",
    year: "2025",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
    summary:
      "An eco-focused product experience designed to simplify waste reporting and community action around cleaner environments.",
    keywords: ["sustainability UX", "reporting flow", "community action"],
    impact: "less friction, more action",
    overview:
      "Trashnodey focuses on environmentally responsible action through a simplified reporting flow. The aim was to reduce friction in waste reporting while keeping the experience motivating and easy to trust.",
    challenge:
      "Users needed a fast way to report issues, but the experience also needed to make action feel relevant and worthwhile. Too much friction would reduce participation.",
    context:
      "The product had to make local environmental action feel easy enough for everyday users to participate in, while reinforcing the value of each action taken.",
    goals: [
      "Simplify issue reporting for civic and environmental action.",
      "Keep the experience approachable and motivating for everyday users.",
      "Design for visible progress and trust in local impact.",
    ],
    solution:
      "I simplified the reporting flow and created a product story around community action and visible progress. The result is a calmer experience that feels helpful, honest, and easier to act on.",
    process: [
      {
        title: "Journey mapping",
        text: "I focused on the user's path from problem identification to action, removing obstacles in the reporting flow.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
      },
      {
        title: "Visual tone",
        text: "I grounded the product in clearer environmental messaging and less intimidating interaction patterns.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
      },
      {
        title: "Refinement",
        text: "The interface was shaped to make progress visible and everyday participation feel easy and purposeful.",
        image:
          "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
      },
    ],
    outcome:
      "The product experience makes environmental action feel more accessible and less intimidating, which helps keep the user journey clear and motivating.",
    results: [
      { label: "Role", value: "Product design" },
      { label: "Focus", value: "Reporting flow" },
      { label: "Outcome", value: "Smoother action" },
    ],
    deliverables: ["UX concept", "Prototype", "Interface design", "Responsive screens"],
    learnings: [
      "Environmental UX works when the user feels progress immediately.",
      "Clean and reassuring interfaces increase participation in civic action.",
      "People act more willingly when the next step feels obvious and low-effort.",
    ],
  },
};

export const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "4+", label: "Companies worked" },
  { value: "300+", label: "Foundry members" },
  { value: "3.4", label: "University GPA" },
];

export const skills = [
  "Figma",
  "User Research",
  "Prototyping",
  "Design Systems",
  "Accessibility Design",
  "UI/UX",
  "Graphic Design",
  "React",
  "TypeScript",
  "WordPress",
  "Canva",
  "Notion",
];

export const experience = [
  {
    period: "Dec 2025 · 3 days",
    kind: "Teaching",
    role: "Co-Trainer · React / React Native Bootcamp",
    company: "Tech-chantier",
    points: [
      "Co-trained hands-on workshops for aspiring developers in React and React Native.",
      "Mentored students through real-world projects — coding practices, state management, API integration.",
      "Fostered a collaborative learning environment with peer support.",
    ],
  },
  {
    period: "Nov 2025 · ongoing",
    kind: "Community",
    role: "Design Tutor / Community Founder",
    company: "Evolve Design Foundry",
    points: [
      "Led interactive design workshops on UI/UX principles, tools, and workflows.",
      "Mentored aspiring designers through real-world projects — user-centered design, prototyping, iteration.",
      "Delivered structured exercises on color theory, typography, layout, and component-based design.",
      "Fostered a collaborative 300+ member community with peer feedback and continuous learning.",
    ],
  },
  {
    period: "Aug – Sep 2025 · 2 months",
    kind: "Design",
    role: "UI/UX Designer",
    company: "Fapshi.inc",
    points: [
      "Designed a citizen-focused app to report illegal dumpsites, find collectors, and trade recyclables.",
      "Conducted user research — personas, journeys, and structured task flows.",
      "Created high-fidelity UI and interactive Figma prototypes for reporting, marketplace, and booking flows.",
      "Developed clear, accessible screens for low-literacy users.",
      "Delivered end-to-end UX documentation: use cases, flow diagrams, micro-interactions.",
    ],
  },
  {
    period: "Apr – Jul 2025 · 4 months",
    kind: "Design",
    role: "Product Designer Intern",
    company: "Camsol.io",
    points: [
      "Crafted responsive designs for Camsol projects — delivered on time to clients.",
      "Designed Scramble, a SaaS platform, with intuitive minimalistic design alongside my lead.",
      "Conceptualized and designed a health-focused mobile app for wellness information access.",
      "Conducted user research, created wireframes and prototypes prioritising ease of use and accessibility.",
    ],
  },
  {
    period: "Feb – Apr 2025 · 3 months",
    kind: "Design",
    role: "UI/UX Designer Assistant",
    company: "Supremum Buea",
    points: [
      "Blended into a dynamic team of engineers and designers to craft seamless interfaces for the company's website.",
      "Designed a complete design system for the product.",
    ],
  },
  {
    period: "Sep 2023 – present",
    kind: "Design",
    role: "Graphic Designer",
    company: "Freelance",
    points: [
      "Designed social media graphics, flyers, and branding kits for small businesses.",
      "Collaborated with clients to deliver customised designs based on brand needs.",
      "Created visually consistent content that improved online engagement.",
    ],
  },
];

export const graphicDesign = [
  { title: "Branding", copy: "Identity systems built to scale across touchpoints." },
  { title: "Visual Identity", copy: "Logos, type, and color with a disciplined rationale." },
  { title: "Marketing Design", copy: "Campaigns that stay on-system and on-message." },
];
