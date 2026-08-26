import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { featuredProjects as newFeaturedProjects } from "@/data/featured";
import { featuredProjects as moreFeaturedProjects } from "@/data/projects";
import { marquee, profile } from "@/data/portfolio";
import afrovision from "@/assets/Logos/afrovision.jpeg";
import camsol from "@/assets/Logos/camsol.jpeg";
import fapshi from "@/assets/Logos/fapshi.jpeg";
import fondationDenise from "@/assets/Logos/fondation denise time mafodom.jpeg";
import globalWomenImpact from "@/assets/Logos/global women impact.jpeg";
import reepls from "@/assets/Logos/reepls.jpeg";
import uzzenSheerah from "@/assets/Logos/uzzen sheerah.jpeg";

const companyLogos = [
  { src: afrovision, alt: "Afrovision", crop: "center 30%" },
  { src: camsol, alt: "Camsol" },
  { src: fapshi, alt: "Fapshi" },
  { src: fondationDenise, alt: "Fondation Denise Time Mafodom" },
  { src: globalWomenImpact, alt: "Global Women Impact" },
  { src: reepls, alt: "Reepls" },
  { src: uzzenSheerah, alt: "Uzzen Sheerah" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onya Martha — Good UX feels invisible. I build that." },
      {
        name: "description",
        content:
          "UI/UX designer and frontend engineer in Buea, Cameroon. Selected product work, design systems, and interfaces built to ship.",
      },
      { property: "og:title", content: "Onya Martha — UI/UX Designer × Frontend Engineer" },
      {
        property: "og:description",
        content:
          "Good UX feels invisible. I build that. Selected product work from Buea, Cameroon.",
      },
      { property: "og:image", content: profile.portrait },
      { name: "twitter:image", content: profile.portrait },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="theme-dark min-h-screen">
      <SiteHeader variant="dark" />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 md:px-12">
        <span
          aria-hidden
          className="display-xl pointer-events-none absolute bottom-[14%] left-[16%] select-none text-[24vw] text-white/[0.035] big-bg-float"
        >
          {profile.first}
        </span>


        <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h1 className="display-xl text-[13vw] leading-[0.88] sm:text-[9vw] lg:text-[6.4vw] hero-title animate-hero">
              <span className="block uppercase">Good UX</span>
              <span className="block uppercase text-brand">Feels invisible.</span>
              <span className="block uppercase">I build that.</span>
            </h1>

            <p className="label-mono mt-8 text-muted-foreground">
              {profile.role} · {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
              >
                View my work <span aria-hidden>↗</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="picture-card group relative overflow-hidden rounded-2xl border border-border">
              <div className="picture-card__image-wrap overflow-hidden rounded-2xl">
                <img
                  src={profile.portrait}
                  alt="Onya Martha, UI/UX designer and frontend engineer"
                  className="picture-card__image aspect-4/5 w-full object-cover"
                  loading="eager"
                />
                <div className="picture-card__overlay">
                  <span aria-hidden className="picture-card__emoji">
                    ☺️
                  </span>
                  <span className="picture-card__message">Happy to meet you</span>
                </div>
              </div>
            </div>
            <span className="label-mono mt-3 block text-muted-foreground">
              [DESIGNER · LIVE]
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 hidden px-6 md:block md:px-12">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between">
            <div className="flex gap-8">
              {["UI/UX", "Frontend", "Systems", "Figma"].map((t) => (
                <span key={t} className="label-mono text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <Link to="/about" className="label-mono text-muted-foreground hover:text-foreground">
              About ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-10 font-display text-xl font-semibold tracking-tight uppercase md:text-2xl"
            >
              {item}
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Worked with */}
      <section className="overflow-hidden border-b border-border py-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="company-marquee">
            <div className="company-marquee__track">
              {[...companyLogos, ...companyLogos].map((logo, i) => (
                <div key={`${logo.alt}-${i}`} className="company-marquee__item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.crop ? "company-marquee__logo company-marquee__logo--cropped" : "company-marquee__logo"}
                    style={logo.crop ? { objectPosition: logo.crop } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* I do what I say */}
      <section className="border-b border-border bg-[radial-gradient(circle_at_top,rgba(115,255,197,0.12),transparent_45%)] py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 flex items-center justify-between gap-6">
            <span className="label-mono text-brand">03 — I do what I say</span>
            <span className="label-mono hidden text-muted-foreground md:inline-block">
              Deadlines • clarity • craft
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="display-xl text-[15vw] uppercase leading-[0.8] md:text-[9vw] xl:text-[7vw]">
              <span className="framer-line block">I do what</span>
              <span className="framer-line framer-line--accent block">I say.</span>
            </h2>

            <div className="lg:pl-6">
              <p className="max-w-md text-base text-muted-foreground md:text-lg">
                I take deadlines seriously. I understand the importance of communication,
                thoughtful systems, and good scheduling. In short, I do not play around.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product index */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <span className="label-mono text-brand">04 — Featured work</span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display-xl text-4xl md:text-7xl">Featured projects</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Treated as releases — each entry ships a measurable outcome, not just a screen.
          </p>
        </div>

        <div className="featured-projects-grid mt-14">
          {newFeaturedProjects.filter((p) => p.title).map((p, index) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="featured-project-card group"
              aria-label={`View project: ${p.title}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="featured-project-card__media">
                <img src={p.image} alt={p.title} loading="lazy" className="featured-project-card__image w-full h-full object-cover object-center" />

                <div className="featured-project-card__overlay">
                  <div className="flex flex-wrap gap-2">
                    {p.keywords.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/work" className="inline-flex items-center rounded-full bg-[#8fe0ba] px-6 py-3 text-sm font-medium text-[#0b0b0a]">
            MORE PROJECTS →
          </Link>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              eyebrow: "05 — Full index",
              title: "The full index",
              copy: "Every project on Behance, in one place.",
              to: "/work" as const,
            },
            {
              eyebrow: "06 — About",
              title: "About Onya",
              copy: "The designer behind the systems.",
              to: "/about" as const,
            },
            {
              eyebrow: "07 — Contact",
              title: "Let's talk",
              copy: "Open to freelance & full-time roles.",
              to: "/contact" as const,
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group rounded-xl border border-border p-8 transition-colors hover:bg-white/5"
            >
              <span className="label-mono text-brand">{card.eyebrow}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.copy}</p>
              <span
                aria-hidden
                className="mt-6 inline-block transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
