import { Project, ProjectDetail } from "./types";

export const ngoAdminDashboardFeatured: Project = {
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
};

export const ngoAdminDashboardDetail: ProjectDetail = {
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
};
