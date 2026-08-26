import { ProjectDetail } from "./types";

export const trashnodeyDetail: ProjectDetail = {
  slug: "trashnodey",
  title: "Trashnodey",
  discipline: "UI/UX + Frontend",
  year: "2025",
  image:
    "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
  summary:
    "TrashNodey is a mobile-first platform that helps citizens, collectors, and municipal teams manage waste more effectively — from reporting illegal dumpsites to listing recyclables for sale.",
  keywords: ["sustainability UX", "reporting flow", "community action"],
  impact: "less friction, more action",
  overview:
    "TrashNodey is a mobile-first product that connects everyday citizens with nearby trash collectors, a marketplace for recyclables, and community reporting tools. The brief was to create a low-friction, trustable experience that motivates people to act on local waste problems.",
  challenge:
    "Cities lacked an accessible, trusted channel for residents to report illegal dumping, contact collection services, or exchange recyclable materials. The experience needed to work across different user roles while remaining simple and action-oriented.",
  context:
    "Designed for dense urban neighbourhoods with constrained waste infrastructure, the product had to support quick reporting, offline-friendly capture, and clear feedback so users could see the impact of their contribution.",
  role: "Product design, UI/UX, prototyping",
  platform: "Mobile (iOS & Android) — responsive web prototype",
  audience:
    "City residents, informal trash collectors, eco-entrepreneurs and municipal waste teams who need fast ways to report, collect, and transact recyclable materials.",
  goals: [
    "Simplify issue reporting for civic and environmental action.",
    "Keep the experience approachable and motivating for everyday users.",
    "Design for visible progress and trust in local impact.",
  ],
  solution:
    "The experience reduces steps to report or request a pickup, introduces a marketplace flow for recyclables, and surfaces progress and verification so users feel their reports lead to action.",
  process: [
    {
      title: "Journey mapping",
      text:
        "Mapped the end-to-end experience for three core roles (resident, collector, municipal responder). The map prioritised quick role selection, a single-tap report flow, and feedback loops that show a report's status.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a68931230145183.68752351f1fa5.png",
    },
    {
      title: "Visual tone",
      text:
        "Established a calm, hopeful visual language that foregrounds action rather than guilt. Colours and illustrations emphasise clarity and trust while icons reduce cognitive load for quick reporting.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cc54a230145183.68780509539af.png",
    },
    {
      title: "Refinement",
      text:
        "Iterated on the reporting UI to minimise taps: quick photo capture, auto-location tagging, and an optional marketplace listing flow. Prototype testing focused on speed and clarity.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cc54a230145183.68780509539af.png",
    },
    {
      title: "User research",
      text:
        "Surveys, short interviews, and observation informed personas and the journeys. Findings showed people wanted simple confirmation and an easy path to exchange recyclables — not dense settings screens.",
    },
    {
      title: "Key flows",
      text:
        "Built and tested the authentication flow, the ‘Report illegal dumpsite’ flow (photo + location + submit), the marketplace listing flow, and the ‘Find a collector’ map-based search.",
    },
  ],
  outcome:
    "A focused mobile experience that reduces friction for reporting and exchanging recyclables while giving users clear feedback and a sense of local impact.",
  results: [
    { label: "Role", value: "Product design" },
    { label: "Focus", value: "Reporting flow" },
    { label: "Outcome", value: "Smoother action" },
  ],
  deliverables: ["UX concept", "Prototype", "Interface design", "Responsive screens"],
  learnings: [
    "Design that shows immediate progress increases civic participation.",
    "Minimal, role-focused flows reduce drop-off during reporting.",
    "Marketplace features help formalise informal recycling economies when discovery is frictionless.",
  ],
  gallery: [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a68931230145183.68752351f1fa5.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cc54a230145183.68780509539af.png",
  ],
  assetSlots: {
    hero: "https://mir-s3-cdn-cf.behance.net/projects/404/d34318230145183.Y3JvcCwxMTI5LDk2Miw4NSww.png",
    process: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a68931230145183.68752351f1fa5.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cc54a230145183.68780509539af.png",
    ],
  },
  personas: [
    {
      id: "resident",
      title: "Concerned Resident",
      goals: ["Report local issues quickly", "See that action was taken"],
      painPoints: ["Unclear reporting channels", "No feedback after reporting"],
      needs: ["Fast capture", "Confirmation & follow-up"],
    },
    {
      id: "collector",
      title: "Independent Collector",
      goals: ["Find sellable recyclables", "Manage pickups efficiently"],
      painPoints: ["Unpredictable demand", "Poor discovery"],
      needs: ["Listings discovery", "Simple communication with sellers"],
    },
  ],
};
