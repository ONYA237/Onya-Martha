import { ProjectDetail, Project } from "./types";
import { njongaFeatured, njongaDetail } from "./njonga";
import { rantyFeatured, rantyDetail } from "./ranty";
import { yummyFeatured, yummyDetail } from "./yummy";
import { ngoAdminDashboardFeatured, ngoAdminDashboardDetail } from "./ngo-admin-dashboard";
import { kultureHubKamerFeatured, kultureHubKamerDetail } from "./kulture-hub-kamer";
import { ngoWebsiteDesignDetail } from "./ngo-website-design";
import { trashnodeyDetail } from "./trashnodey";
import { reeplsDetail } from "./reepls";
import { treddarDetail } from "./treddar";
import { dynamisDetail } from "./dynamis";
import { uzzenSheerahDetail } from "./uzzen-sheerah";
export const featuredProjects: Project[] = [
	njongaFeatured,
	rantyFeatured,
	yummyFeatured,
	ngoAdminDashboardFeatured,
	kultureHubKamerFeatured,
];

export const archiveProjects = [
	{ slug: "ngo-website-design", title: "NGO Website Design", image: ngoWebsiteDesignDetail.image },
	{ slug: "trashnodey", title: "Trashnodey", image: trashnodeyDetail.image },
];
export const projectDetails: Record<string, ProjectDetail> = {
	njonga: njongaDetail,
	ranty: rantyDetail,
	yummy: yummyDetail,
	"ngo-admin-dashboard": ngoAdminDashboardDetail,
	"kulture-hub-kamer": kultureHubKamerDetail,
	"ngo-website-design": ngoWebsiteDesignDetail,
	trashnodey: trashnodeyDetail,
	reepls: reeplsDetail,
	treddar: treddarDetail,
	dynamis: dynamisDetail,
	"uzzen-sheerah": uzzenSheerahDetail,
};

// Auto-wire local assets: if you upload images into `src/assets/projects/<slug>/...`,
// Vite will expose them via import.meta.glob and we use those URLs to populate
// missing `image`, `process[].image`, and `gallery` entries so uploads work automatically.
const __assetMap = import.meta.glob('/src/assets/projects/**', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
for (const [slug, detail] of Object.entries(projectDetails)) {
	const assetRoot = `/src/assets/projects/${slug}`;

	// Hero image
	const heroKey = Object.keys(__assetMap).find((k) => k.startsWith(`${assetRoot}/hero/`));
	if (heroKey && !detail.image) {
		detail.image = __assetMap[heroKey];
	}

	// If this slug also appears in featuredProjects, ensure featured image is populated
	const featured = featuredProjects.find((f) => f.slug === slug);
	if (featured && !featured.image && heroKey) {
		featured.image = __assetMap[heroKey];
	}

	// Process step images (process-01, process-02, ...)
	if (detail.process && detail.process.length) {
		detail.process = detail.process.map((step, idx) => {
			if (step.image) return step;
	const procDir1 = `${assetRoot}/process-${String(idx + 1).padStart(2, '0')}/`;
	const procDir2 = `${assetRoot}/process-${idx + 1}/`;
	const procKey = Object.keys(__assetMap).find((k) => k.startsWith(procDir1) || k.startsWith(procDir2));
			if (procKey) return { ...step, image: __assetMap[procKey] };
			return step;
		});
	}

	// Gallery: prefer explicit gallery folder, else use final-design folder
	if ((!detail.gallery || detail.gallery.length === 0)) {
		const galleryKeys = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/gallery/`));
		if (galleryKeys.length) {
			detail.gallery = galleryKeys.map((k) => __assetMap[k]);
		} else {
			const finalKeys = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/final-design/`));
			if (finalKeys.length) detail.gallery = finalKeys.map((k) => __assetMap[k]);
		}
	}
	// Specific section assets (problem, information-architecture, wireframes, final-design)
	detail.assets = detail.assets ?? {};

	const problemKey = Object.keys(__assetMap).find((k) => k.startsWith(`${assetRoot}/problem/`));
	if (problemKey && !detail.assets.problem) detail.assets.problem = __assetMap[problemKey];

	const infoKeys = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/information-architecture/`));
	if (infoKeys.length && !detail.assets.informationArchitecture) detail.assets.informationArchitecture = __assetMap[infoKeys[0]];

	const wireframeKeys = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/wireframes/`));
	if (wireframeKeys.length && !detail.assets.wireframes) detail.assets.wireframes = wireframeKeys.map((k) => __assetMap[k]);

	const finalKeysExplicit = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/final-design/`));
	if (finalKeysExplicit.length && (!detail.assets.finalDesign || detail.assets.finalDesign.length === 0)) {
		detail.assets.finalDesign = finalKeysExplicit.map((k) => __assetMap[k]);
		// Also prefer final-design for gallery if not already set
		if ((!detail.gallery || detail.gallery.length === 0)) detail.gallery = finalKeysExplicit.map((k) => __assetMap[k]);
	}

	// Process images: collect images from process-01/, process-02/, ... into assets.process
	const processKeys = Object.keys(__assetMap).filter((k) => k.startsWith(`${assetRoot}/process-`));
	if (processKeys.length && (!detail.assets.process || detail.assets.process.length === 0)) {
		// Group by directory name, then sort by directory to keep order
		const grouped: Record<string, string[]> = {};
		processKeys.forEach((k) => {
			const m = k.match(new RegExp(`${assetRoot}/(process-[0-9]{1,2})/`));
	const dir = m ? m[1] : 'process';
	grouped[dir] = grouped[dir] || [];
	grouped[dir].push(__assetMap[k]);
	});
	const ordered = Object.keys(grouped).sort().flatMap((d) => grouped[d]);
	if (ordered.length) detail.assets.process = ordered;
	}
}

export const projects = Object.values(projectDetails);

export type { Project, ProjectDetail } from "./types";
