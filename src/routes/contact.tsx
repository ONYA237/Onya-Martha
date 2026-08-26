import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Onya Martha, let's talk" },
      {
        name: "description",
        content:
          "Get in touch with Onya Martha, UI/UX designer and frontend engineer. Open to freelance and full time roles.",
      },
      { property: "og:title", content: "Contact Onya Martha" },
      {
        property: "og:description",
        content: "Open to freelance and full time roles, send a message.",
      },
    ],
  }),
  component: ContactPage,
});

const lines = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/onya-martha-o", href: profile.linkedin },
  { label: "Behance", value: "behance.net/onya-martha", href: profile.behance },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const field =
    "mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border px-6 pt-40 pb-24 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <span className="label-mono text-brand">01, Contact</span>
          <h1 className="display-xl mt-5 text-6xl md:text-8xl">Let's talk.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Open to freelance projects and full-time roles. Tell me what you're building and
            I'll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="label-mono text-muted-foreground">Direct lines</span>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {lines.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span className="label-mono text-muted-foreground">{l.label}</span>
                <span className="text-sm transition-colors group-hover:text-brand">
                  {l.value}
                </span>
              </a>
            ))}
          </div>
          <p className="label-mono mt-8 text-muted-foreground">
            Based in {profile.location} · Available for work
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border p-8 md:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="label-mono text-muted-foreground">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="label-mono text-muted-foreground">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="mt-6 block">
            <span className="label-mono text-muted-foreground">Message</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field}
              placeholder="Tell me about the project…"
            />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Send message <span aria-hidden>↗</span>
          </button>

          {sent && (
            <p className="label-mono mt-5 text-brand">
              Thanks, message noted. Email {profile.email} for anything urgent.
            </p>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
