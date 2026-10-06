import { Link } from "@tanstack/react-router";

export function PortfolioNav() {
  return (
    <nav aria-label="Primary" className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-5">
          <Link to="/" className="flex items-center gap-2 py-2 font-mono text-xs font-semibold uppercase text-foreground">
            <span className="size-2 bg-primary" aria-hidden />
            Ridam Kumar
          </Link>
          <a
            href="mailto:kumarridam172@gmail.com"
            className="hidden truncate py-2 font-mono text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            kumarridam172@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 font-mono text-[0.8125rem] uppercase sm:gap-6">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-foreground/65 hover:text-primary" }}
            className="hidden py-2 transition-colors md:inline"
          >
            Home
          </Link>
          <Link
            to="/projects"
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
            className="py-2 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-foreground/65 hover:text-primary" }}
            className="py-2 transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/"
            hash="contact"
            className="hidden py-2 text-foreground/65 transition-colors hover:text-primary sm:inline"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}