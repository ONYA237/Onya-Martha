import { Project } from "../projects/types";
import reeplsThumb from "@/assets/projects/reepls/hero/reepls.png";

export const reeplsFeatured: Project = {
  slug: "reepls",
  index: "01",
  title: "Reepls",
  discipline: "UI/UX",
  views: 0,
  tools: ["Figma", "React"],
  keywords: ["ecosystem", "information architecture", "discovery"],
  impact: "clarity and discoverability",
  blurb:
    "Designing clarity into a growing digital ecosystem — making rich, interconnected offerings feel discoverable and approachable.",
  image: reeplsThumb,
};

export default reeplsFeatured;
