import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { experience, graphicDesign, profile, skills, stats } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Onya Martha — designer behind the systems" },
      {
        name: "description",
        content:
          "UI/UX designer and frontend engineer from Buea, Cameroon. Experience, skills, community work and the story behind the systems.",
      },
      { property: "og:title", content: "About Onya Martha" },
      {
        property: "og:description",
        content:
          "Blending design thinking with technical precision to build products that work for people.",
      },
      { property: "og:image", content: profile.portrait },
      { name: "twitter:image", content: profile.portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border px-6 pt-40 pb-24 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <span className="label-mono text-brand">01 — About</span>
          <h1 className="display-xl mt-5 text-6xl md:text-8xl">Onya Martha.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={profile.portrait}
              alt="Onya Martha"
              className="aspect-[39/56] w-full object-cover"
            />
          </div>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="label-mono text-muted-foreground">Based in</dt>
              <dd className="mt-1 font-display font-semibold">{profile.location}</dd>
            </div>
            <div>
              <dt className="label-mono text-muted-foreground">Education</dt>
              <dd className="mt-1 font-display font-semibold">BSc Software Engineering</dd>
              <dd className="text-sm text-muted-foreground">
                University of Buea · 2022–2026 · GPA 3.4
              </dd>
            </div>
            <div>
              <dt className="label-mono text-muted-foreground">Languages</dt>
              <dd className="mt-1 font-display font-semibold">English · French</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="display-xl text-3xl md:text-5xl">
            I'm a UI/UX designer and frontend engineer from Buea, Cameroon — blending design
            thinking with technical precision to build digital products that actually work for
            people.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>
              I started with graphic design, grew into product design, and learned to code —
              because the gap between a Figma screen and a shipped product is where I operate
              best. I've worked with startups, NGOs, and community builders across Cameroon and
              internationally, always centering clarity, usability, and intent.
            </p>
            <p>
              Beyond the work: I founded Evolve Design Foundry — a 300+ member community for
              designers and builders — and serve as Operations Manager at Framework Nation. I
              believe design education and community are as important as the products we ship.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="display-xl text-4xl md:text-5xl">{s.value}</div>
                <div className="label-mono mt-2 text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <span className="label-mono text-muted-foreground">Skills &amp; Tools</span>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Download CV <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <span className="label-mono text-brand">05 — Experience</span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-xl text-4xl md:text-6xl">Where I've worked.</h2>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="label-mono text-muted-foreground hover:text-foreground"
            >
              Full CV ↗
            </a>
          </div>

          <div className="mt-16 border-t border-border">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-[14rem_1fr]"
              >
                <div>
                  <div className="label-mono text-muted-foreground">{job.period}</div>
                  <div className="label-mono mt-2 text-brand">{job.kind}</div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <div className="label-mono mt-1 text-muted-foreground">{job.company}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-brand">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <span className="label-mono text-brand">04 — Beyond Product</span>
        <h2 className="display-xl mt-4 text-4xl md:text-6xl">Depth, without distraction.</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Leadership &amp; Community
            </h3>
            <div className="mt-6 space-y-6">
              <div>
                <div className="label-mono text-muted-foreground">Founder</div>
                <div className="mt-1 font-display font-semibold">Evolve Design Foundry</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  A 300+ member community for designers and builders.
                </p>
              </div>
              <div>
                <div className="label-mono text-muted-foreground">Practice</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mentorship and training — helping early designers think in systems, ship with
                  intent, and build usable work.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Graphic Design
            </h3>
            <div className="mt-6 divide-y divide-border">
              {graphicDesign.map((g) => (
                <div key={g.title} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <div className="font-display font-semibold">{g.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{g.copy}</p>
                  </div>
                  <span aria-hidden className="text-brand">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
