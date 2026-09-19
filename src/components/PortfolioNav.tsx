import { Link } from "@tanstack/react-router";

export function PortfolioNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <div className="flex min-w-0 items-center gap-6">
          <Link to="/" className="font-mono text-xs uppercase tracking-tighter text-primary">
            Ridam_Kumar
          </Link>
          <a
            href="mailto:kumarridam172@gmail.com"
            className="hidden truncate font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            kumarridam172@gmail.com
          </a>
        </div>
        <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest sm:gap-7">
          <Link
            to="/"
            hash="experience"
            className="hidden text-foreground/70 transition-colors hover:text-primary sm:inline"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
            className="transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/"
            hash="skills"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            Stack
          </Link>
          <Link
            to="/"
            hash="education"
            className="hidden text-foreground/70 transition-colors hover:text-primary sm:inline"
          >
            Education
          </Link>
          <Link
            to="/"
            hash="contact"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}