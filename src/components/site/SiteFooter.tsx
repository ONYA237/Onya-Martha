import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono text-brand">06 — Contact</span>
            <h2 className="display-xl mt-4 text-4xl md:text-6xl">
              Want to work together?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Let's talk <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <span className="label-mono text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={profile.behance}
              target="_blank"
              rel="noreferrer"
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
