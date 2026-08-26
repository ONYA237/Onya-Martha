import { Project } from "../projects/types";
import { reeplsFeatured } from "./reepls";
import { treddarFeatured } from "./treddar";
import { dynamisFeatured } from "./dynamis";
import { handoverFeatured } from "./handover";
import { uzzenSheerahFeatured } from "./uzzen-sheerah";
import { trashnodeyFeatured } from "./trashnodey";
import { fdtmFeatured } from "./fdtm";

export const featuredProjects: Project[] = [
  dynamisFeatured,
  uzzenSheerahFeatured,
  trashnodeyFeatured,
  treddarFeatured,
  reeplsFeatured,
  handoverFeatured,
  fdtmFeatured,
];

export type { Project };

export default featuredProjects;

// Auto-wire hero thumbnails from `src/assets/projects/<slug>/hero/*`
const __assetMap = import.meta.glob('/src/assets/projects/**', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
for (const f of featuredProjects) {
  if (f.image) continue;
  const heroKey = Object.keys(__assetMap).find((k) => k.startsWith(`/src/assets/projects/${f.slug}/hero/`));
  if (heroKey) f.image = __assetMap[heroKey];
}
