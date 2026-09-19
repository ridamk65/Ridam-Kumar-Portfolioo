import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { PortfolioNav } from "@/components/PortfolioNav";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal, RevealSection } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Ridam Kumar" },
      {
        name: "description",
        content:
          "Explore Ridam Kumar's blockchain, explainable AI, and multi-agent systems projects, including Friday, GiftChain, and VEXIS.",
      },
      { property: "og:title", content: "Projects | Ridam Kumar" },
      {
        property: "og:description",
        content:
          "A focused archive of Ridam Kumar's work across blockchain, explainable AI, and multi-agent systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-35" />
      </div>
      <PortfolioNav />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <RevealSection className="mb-20 border-b border-border pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Project archive / 03 records
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-black leading-none tracking-tighter md:text-7xl">
                Systems built for trust, clarity, and scale.
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-right">
              Blockchain applications, explainable security research, and persistent-memory agent systems.
            </p>
          </div>
        </RevealSection>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              className="grid overflow-hidden border border-border bg-card lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex flex-col p-7 md:p-10">
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    Record {project.id}
                  </span>
                  <span className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h2 className="mt-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-8 border-l-2 border-primary/50 pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {project.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{project.outcome}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="min-h-[300px] border-t border-border bg-secondary/35 p-5 lg:border-l lg:border-t-0 md:p-8">
                <ProjectVisual kind={project.visual} />
              </div>
            </Reveal>
          ))}
        </div>

        <RevealSection className="mt-24 border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Next step</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Interested in working together?
              </h2>
            </div>
            <Link
              to="/"
              hash="contact"
              className="inline-flex w-fit items-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reach out <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}