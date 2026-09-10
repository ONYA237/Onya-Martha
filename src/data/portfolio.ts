export const profile = {
  name: "Onya Martha",
  first: "ONYA",
  year: "2026",
  role: "UI/UX Designer × Frontend Engineer",
  location: "Buea, Cameroon",
  email: "hello@onyamartha.design",
  linkedin: "https://www.linkedin.com/in/onya-martha-o",
  behance: "https://www.behance.net/onya-martha",
  cv: "https://canva.link/qen5ritycscdtte",
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
    slug: "yummy",
    index: "01",
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
    index: "02",
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
];

export const archiveProjects = [];

export const projectDetails: Record<string, ProjectDetail> = {
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
