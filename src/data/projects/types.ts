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
  assetSlots?: {
    hero?: string;
    problem?: string;
    informationArchitecture?: string;
    wireframes?: string;
    finalDesign?: string;
    process?: string[];
    gallery?: string[];
    [key: string]: any;
  };
  assets?: {
    hero?: string;
    problem?: string;
    informationArchitecture?: string;
    wireframes?: string[];
    finalDesign?: string[];
    process?: string[];
    gallery?: string[];
    [key: string]: any;
  };
  // Optional editorial metadata used by some case studies (non-required)
  tagline?: string;
  role?: string;
  platform?: string;
  audience?: string;
  projectType?: string;
  oneGlance?: {
    challenge?: string;
    users?: string;
    myRole?: string;
    outcome?: string;
  };
  personas?: Array<{
    id: string;
    title: string;
    goals: string[];
    painPoints: string[];
    needs: string[];
  }>;
  designPrinciples?: string[];
};
