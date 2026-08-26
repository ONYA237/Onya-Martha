import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "My work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-7 md:px-12">
        <Link to="/" className="flex items-center gap-3">
          {dark ? (
            <span className="label-mono flex items-center gap-2 text-muted-foreground">
              <span className="brand-mark brand-mark--header">OM</span>
              {"ONYA MARTHA, 2026"}
            </span>
          ) : (
            <>
              <span className="brand-mark brand-mark--header">OM</span>
              <span className="font-display text-[0.95rem] font-bold tracking-tight">
                Onya Martha
              </span>
            </>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "label-mono text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {dark ? (
            <span className="label-mono flex items-center gap-2 text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Available
            </span>
          ) : (
            <Link
              to="/contact"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Let's talk
            </Link>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pb-3 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="label-mono text-muted-foreground"
            activeProps={{ className: "label-mono text-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
