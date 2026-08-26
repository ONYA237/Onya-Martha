import { Project } from "../projects/types";
import treddarThumb from "@/assets/projects/treddar/hero/treddar hero.png";

export const treddarFeatured: Project = {
  slug: "treddar",
  index: "02",
  title: "Treddar",
  discipline: "UI/UX",
  views: 0,
  tools: ["Figma", "React"],
  keywords: ["travel", "booking", "seat selection"],
  impact: "increased confidence in travel decisions",
  blurb:
    "Designing confidence into every journey — making intercity travel predictable and trustworthy from search to arrival.",
  image: treddarThumb,
};

export default treddarFeatured;
