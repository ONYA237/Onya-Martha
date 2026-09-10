import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "My work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function BrandLockup({ dark }: { dark: boolean }) {
  return (
    <div className="brand-lockup">
      <svg
        viewBox="0 0 520 420"
        aria-label="Onya Martha logo"
        className={`brand-lockup__mark ${dark ? "brand-lockup__mark--dark" : ""}`}
        role="img"
      >
        <path
          d="M256 42C168 42 94 116 94 204c0 101 82 182 182 182 62 0 116-29 150-74l-48-39c-22 22-55 35-90 35-71 0-128-57-128-128 0-72 58-130 130-130 40 0 77 18 100 47l45-44C382 68 323 42 256 42Z"
          fill={dark ? "#0f1720" : "#1d2b36"}
        />
        <path
          d="M372 62 250 206 332 206 449 62Z"
          fill="#3cc1b4"
        />
        <path
          d="M118 162 95 118l114 98-73 85 65 49 85-93-76-57-32 10Z"
          fill="#3cc1b4"
        />
        <path
          d="M296 318h124l-84-89h-86z"
          fill="#3cc1b4"
          opacity="0.92"
        />
        <path
          d="M90 344c46 32 94 50 165 50 76 0 144-27 196-75l-58-2c-41 36-92 55-149 55-58 0-109-18-153-52l-1 24Z"
          fill={dark ? "#0f1720" : "#1d2b36"}
        />
      </svg>

      <div className={`brand-lockup__text ${dark ? "brand-lockup__text--dark" : ""}`}>
        <div className="brand-lockup__name">
          <span>Onya</span>
          <span>Martha</span>
        </div>
        <div className="brand-lockup__slogan">
          <span>UI/UX</span>
          <span className="brand-lockup__dot" aria-hidden="true" />
          <span>WEB</span>
          <span className="brand-lockup__dot" aria-hidden="true" />
          <span>GRAPHICS</span>
        </div>
      </div>
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
