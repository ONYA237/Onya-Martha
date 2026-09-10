import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "My work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function BrandLockup({ dark }: { dark: boolean }) {
  return (
    <div className="brand-compact">
      <svg
        viewBox="0 0 220 180"
        aria-label="Onya Martha logo"
        className="brand-compact__mark"
        role="img"
      >
        <path
          d="M102 16c-47 0-85 38-85 85s38 85 85 85c26 0 49-11 65-29l-26-21c-10 10-25 16-39 16-31 0-56-25-56-56s25-56 56-56c15 0 29 6 39 16l27-21c-17-18-40-29-66-29Z"
          fill={dark ? "#f8faf8" : "#f5f7f5"}
        />
        <path
          d="M119 36 72 104h48l47-68Z"
          fill="#3cc1b4"
        />
        <path
          d="M77 62 62 42l61 52-39 44 34 26 46-49-41-30-17 5Z"
          fill="#3cc1b4"
        />
        <path
          d="M124 116h49l-35-38h-37z"
          fill="#3cc1b4"
          opacity="0.95"
        />
      </svg>
      <span className={`brand-compact__name ${dark ? "brand-compact__name--dark" : ""}`}>
        Onya Martha
      </span>
    </div>
  );
}

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-7 md:px-12">
        <Link to="/" className="brand-header-link">
          <BrandLockup dark={dark} />
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
          {!dark && (
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
