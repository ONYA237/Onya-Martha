import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { archiveProjects, featuredProjects } from "@/data/projects";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "My work — Onya Martha, UI/UX & Frontend" },
      {
        name: "description",
        content:
          "Selected case studies from Onya Martha: Njonga, Ranty, Yummy, NGO Admin Dashboard and Kulture Hub Kamer.",
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

  if (isProjectDetail) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border px-6 pt-40 pb-24 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <span className="label-mono text-brand">01 — My work</span>
          <h1 className="display-xl mt-5 text-6xl md:text-8xl">My work.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Each entry ships a measurable outcome — not just a screen. Featured case studies
            below, the full Behance index after.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <span className="label-mono text-muted-foreground">02 — Selected Work</span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display-xl text-4xl md:text-6xl">The Product Index</h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            Treated as releases — each entry ships a measurable outcome, not just a screen.
          </p>
        </div>

        <div className="mt-16 border-t border-border">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group grid items-center gap-6 border-b border-border py-8 md:grid-cols-[3rem_11rem_1fr_18rem]"
            >
              <span className="label-mono text-muted-foreground">{p.index}</span>
              <div className="overflow-hidden rounded-md border border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand md:text-3xl">
                  {p.title}
                </h3>
                <p className="label-mono mt-2 text-muted-foreground">
                  {p.discipline} · {p.views} views
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.keywords.map((tag) => (
                    <span
                      key={tag}
                      className="label-mono rounded border border-border px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between gap-3 rounded border border-border px-3 py-2">
                  <span className="label-mono text-muted-foreground">Impact</span>
                  <span className="text-sm font-medium text-foreground">{p.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="label-mono rounded border border-border px-2 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <span className="label-mono text-brand">02b — More Case Studies</span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-xl text-4xl md:text-6xl">The full index.</h2>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground">
              Back to featured
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {archiveProjects.map((p) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex items-center justify-between p-5">
                  <span className="font-display text-base font-semibold tracking-tight">
                    {p.title}
                  </span>
                  <span aria-hidden className="text-brand">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
