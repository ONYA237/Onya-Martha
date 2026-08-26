import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { featuredProjects as featuredWorkProjects } from "@/data/featured";
import { archiveProjects } from "@/data/projects";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "My work — Onya Martha, UI/UX & Frontend" },
      {
        name: "description",
        content: "Selected case studies and product work from Onya Martha.",
      },
      { property: "og:title", content: "My work — Onya Martha" },
      {
        property: "og:description",
        content: "Each entry ships a measurable outcome — not just a screen.",
      },
      { property: "og:image", content: profile.portrait },
      { name: "twitter:image", content: profile.portrait },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const location = useLocation();
  const isProjectDetail = location.pathname !== "/work" && location.pathname.startsWith("/work/");
  const allProjects = [...featuredWorkProjects, ...archiveProjects].filter(
    (project) => Boolean(project?.slug && project?.title),
  );

  if (isProjectDetail) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="px-6 pt-40 pb-24 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="display-xl mt-5 text-6xl md:text-8xl">My work.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A full list of selected projects and case studies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-8 md:px-12 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-[28px] border border-border bg-card/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_30px_80px_rgba(18,24,21,0.18)]"
            >
              <div className="overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="label-mono text-muted-foreground">{p.index ?? "PROJECT"}</span>
                  <span className="label-mono text-brand">{p.discipline ?? "UI/UX"}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand md:text-[2rem]">
                    {p.title}
                  </h3>
                  {p.impact ? (
                    <p className="mt-2 text-sm font-medium text-brand">{p.impact}</p>
                  ) : null}
                </div>

                {p.keywords && p.keywords.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {p.keywords.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="label-mono rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                {p.blurb ? <p className="text-sm leading-6 text-muted-foreground">{p.blurb}</p> : null}

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="label-mono text-muted-foreground">View case study</span>
                  <span aria-hidden className="text-lg text-brand transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-20 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[28px] border border-border bg-card/70 px-6 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:flex-row md:text-left">
          <div>
            <p className="label-mono text-muted-foreground">Want to see more?</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              View more of my work.
            </h2>
          </div>

          <a
            href={profile.behance}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-medium text-[#0e1412] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View on Behance ↗
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
