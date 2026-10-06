import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

import { PortfolioNav } from "@/components/PortfolioNav";
import { Reveal, RevealSection } from "@/components/Reveal";
import { achievements, education, experience, skillGroups } from "@/lib/resume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Ridam Kumar" },
      { name: "description", content: "Ridam Kumar's education, work experience, blockchain and AWS skills, achievements, and leadership experience." },
      { property: "og:title", content: "Resume | Ridam Kumar" },
      { property: "og:description", content: "Education, experience, technical skills, achievements, and leadership from Ridam Kumar's professional resume." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="page-enter relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only fixed left-4 top-4 z-[60] bg-background px-4 py-3 font-mono text-sm text-foreground shadow-lg">
        Skip to content
      </a>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-35" />
      </div>
      <PortfolioNav />

      <main id="main" className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <RevealSection className="mb-20 border-b border-border pb-16">
          <Link to="/" className="inline-flex items-center gap-2 py-2 font-mono text-[0.8125rem] uppercase text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-3.5" /> Home
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-primary">Professional profile / 2026</p>
              <h1 className="max-w-3xl font-display text-5xl font-black leading-none tracking-tighter md:text-7xl">Resume</h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              Blockchain-focused computer science student with hands-on backend, AWS infrastructure, smart contract, and technical leadership experience.
            </p>
          </div>
        </RevealSection>

        <RevealSection className="mb-24 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <BriefcaseBusiness className="size-5" />
              <h2 className="font-mono text-[0.8125rem] uppercase tracking-[0.25em]">Work Experience</h2>
            </div>
          </div>
          <div className="space-y-8">
            {experience.map((entry) => (
              <Reveal key={entry.title} className="border-l-2 border-primary pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{entry.period}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{entry.title}</h3>
                <p className="mt-1 font-mono text-xs text-primary">{entry.org}</p>
                <ul className="mt-6 space-y-3">
                  {entry.points.map((point) => <li key={point} className="text-sm leading-relaxed text-muted-foreground">— {point}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-24 grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex items-center gap-3 self-start text-primary">
            <GraduationCap className="size-5" />
            <h2 className="font-mono text-[0.8125rem] uppercase tracking-[0.25em]">Education</h2>
          </div>
          <Reveal className="border border-border bg-card p-7 md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{education.period}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold">{education.degree}</h3>
            <p className="mt-2 text-sm text-primary">{education.school}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="border border-border bg-secondary px-3 py-2 font-mono text-[0.8125rem]">Specialization: {education.specialization}</span>
              <span className="border border-border bg-secondary px-3 py-2 font-mono text-[0.8125rem]">CGPA: {education.cgpa}</span>
            </div>
          </Reveal>
        </RevealSection>

        <RevealSection className="mb-24 border-t border-border pt-16">
          <h2 className="mb-10 font-mono text-[0.8125rem] uppercase tracking-[0.25em] text-primary">Technical Skills</h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.07} className="bg-card p-6">
                <h3 className="font-mono text-xs uppercase text-muted-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="border border-border bg-background px-2.5 py-1.5 font-mono text-[0.8125rem]">{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mb-24 border-t border-border pt-16">
          <h2 className="mb-10 font-mono text-[0.8125rem] uppercase tracking-[0.25em] text-primary">Achievements &amp; Leadership</h2>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {achievements.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08} className="bg-card p-7">
                <span className="font-mono text-xs text-primary">{item.id}</span>
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Selected work</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">See these skills in practice.</h2>
            </div>
            <Link to="/projects" className="inline-flex w-fit items-center gap-2 bg-primary px-5 py-3 font-mono text-xs uppercase text-primary-foreground transition-transform hover:-translate-y-0.5">
              View projects <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}