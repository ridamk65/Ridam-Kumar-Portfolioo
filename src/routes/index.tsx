import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroPortrait } from "@/components/HeroPortrait";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ContactDialog } from "@/components/ContactDialog";
import { PortfolioNav } from "@/components/PortfolioNav";
import { Reveal, RevealSection } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { achievements, education, experience, skillGroups } from "@/lib/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridam Kumar | Blockchain & AWS Architect Developer" },
      { name: "description", content: "Portfolio of Ridam Kumar — blockchain and AWS architect developer building secure smart contracts, decentralized applications, and scalable cloud-native systems." },
      { property: "og:title", content: "Ridam Kumar | Blockchain & AWS Architect Developer" },
      { property: "og:description", content: "Portfolio of Ridam Kumar — blockchain and AWS architect developer building secure smart contracts, decentralized applications, and scalable cloud-native systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page-enter relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-foreground overflow-x-hidden">
      <a href="#main" className="sr-only focus:not-sr-only fixed left-4 top-4 z-[60] bg-background px-4 py-3 font-mono text-sm text-foreground shadow-lg">
        Skip to content
      </a>
      {/* Global background effect */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-35" />
      </div>

      {/* Header Navigation */}
      <PortfolioNav />

      <main id="main" className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section — split layout */}
        <RevealSection className="relative mb-32">
          {/* decorative shapes */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-10 -top-10 size-24 rounded-full border-2 border-primary/60 animate-float-slow" />
            <div className="absolute right-4 -top-16 size-6 rounded-full border-2 border-primary" />
            <div className="absolute right-40 top-24 size-4 rounded-full bg-primary/80 animate-drift" />
            <div className="absolute left-[-2rem] top-1/2 size-3 rounded-full bg-foreground/30 animate-float-slow" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left: identity */}
            <Reveal className="lg:col-span-4" delay={0.05}>
              <h1 className="font-display font-black tracking-tighter leading-[0.9] text-6xl md:text-8xl lg:text-7xl">
                Hi,
                <br />
                I&apos;m <span className="text-primary">Ridam</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-light text-muted-foreground">
                Blockchain &amp; AWS Architect Developer
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ContactDialog />
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 px-6 py-3.5 border border-border font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-secondary"
                >
                  View Work
                </Link>
              </div>
            </Reveal>

            {/* Center: portrait */}
            <Reveal className="lg:col-span-4 flex justify-center" delay={0.14}>
              <HeroPortrait />
            </Reveal>

            {/* Right: statement */}
            <Reveal className="lg:col-span-4 lg:pl-10 lg:border-l border-border" delay={0.22}>
              <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-5">
                Expert on
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight leading-snug text-pretty">
                Based in India — I build blockchain systems and cloud-native architectures.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md text-pretty">
                From audited smart contracts and decentralized applications to explainable ML and
                AWS-backed infrastructure, I turn complex ideas into production-ready products.
              </p>
              <div className="mt-8 flex gap-6 font-mono text-xs uppercase tracking-widest">
                <a
                  href="https://github.com/ridamk65"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary/40 py-2 text-foreground/70 transition-colors hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ridam-kumar-3a96361b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary/40 py-2 text-foreground/70 transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </RevealSection>

        {/* About Section */}
        <RevealSection className="mb-32">
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-12">
            About
          </h2>
          <p className="max-w-3xl text-2xl md:text-3xl font-display font-medium tracking-tight leading-snug text-pretty">
            I build systems that sit at the intersection of decentralized trust, explainable AI,
            and cloud-native infrastructure. From transparent donation tracking on-chain to
            explainable misbehavior detection in vehicular networks and persistent-memory voice
            agents, I turn research-backed ideas into working products while deepening my AWS
            architecture practice.
          </p>
        </RevealSection>

        {/* Experience */}
        <RevealSection id="experience" className="mb-32 scroll-mt-24">
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-12">
            Experience
          </h2>
          <ol className="relative border-l border-border pl-8 space-y-12">
            {experience.map((entry) => (
              <li key={entry.title} className="relative">
                <span className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-xl font-display font-semibold">{entry.title}</h3>
                <p className="text-sm font-mono text-primary">{entry.org}</p>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </RevealSection>




        {/* Projects Grid */}
        <RevealSection id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-display font-bold tracking-tight text-balance">
              Selected Works
            </h2>
            <span className="font-mono text-xs text-muted-foreground uppercase pb-1">
              03 Records Total
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {projects.map((project, index) =>
              project.featured ? (
                 <Reveal
                  key={project.id}
                   className="group md:col-span-2 bg-background p-8 md:p-12 transition-colors hover:bg-secondary/40"
                   delay={index * 0.08}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <div className="flex flex-col">
                      <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 mb-12">
                        <div>
                          <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <span className="font-mono text-xs py-1 px-2 border border-border shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <div className="mt-auto flex flex-wrap items-center gap-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.8125rem] font-mono py-1.5 px-3 bg-secondary text-muted-foreground border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="h-px flex-1 bg-border hidden md:block" />
                        <p className="text-[0.8125rem] font-mono text-primary uppercase tracking-widest font-semibold">
                          {project.role} — {project.outcome}
                        </p>
                      </div>
                    </div>
                    <ProjectVisual kind={project.visual} />
                  </div>
                </Reveal>
              ) : (
                 <Reveal
                  key={project.id}
                   className="group md:col-span-2 bg-background p-8 md:p-12 transition-colors hover:bg-secondary/40"
                   delay={index * 0.08}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-12">
                        <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs py-1 px-2 border border-border shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.8125rem] font-mono py-1 px-2 bg-secondary text-muted-foreground border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-[0.8125rem] font-mono text-primary uppercase tracking-tighter">
                          {project.role} — {project.outcome}
                        </p>
                      </div>
                    </div>
                    <ProjectVisual kind={project.visual} />
                  </div>
                </Reveal>
              )
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/projects"
              className="border-b border-primary py-2 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:text-foreground"
            >
              View all project details →
            </Link>
          </div>
        </RevealSection>

        {/* Skills Section */}
        <RevealSection id="skills" className="mb-32 scroll-mt-24">
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-12">
            Stack Readout
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} className="bg-background p-6 md:p-8" delay={index * 0.07}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[0.8125rem] font-mono py-1.5 px-3 border border-border text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </RevealSection>

        {/* Education & Achievements */}
        <RevealSection id="education" className="mb-32 scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-12">
              Education
            </h2>
            <div className="border border-border p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {education.period}
              </p>
              <h3 className="mt-3 text-xl font-display font-semibold">{education.degree}</h3>
              <p className="text-sm font-mono text-primary mt-1">{education.school}</p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[0.8125rem]">
                <span className="py-1.5 px-3 border border-border">
                  Specialization: {education.specialization}
                </span>
                <span className="py-1.5 px-3 border border-border">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-12">
              Achievements &amp; Leadership
            </h2>
            <div className="grid grid-cols-1 gap-px bg-border border border-border">
              {achievements.map((item) => (
                <Reveal key={item.id} className="bg-background p-6 md:p-8">
                  <span className="font-mono text-xs text-primary tracking-[0.2em]">
                    {item.id}
                  </span>
                  <h3 className="mt-4 text-lg font-display font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </RevealSection>



        {/* Contact */}
        <RevealSection id="contact" className="py-24 scroll-mt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-6">
                Reach Out
              </h2>
              <p className="font-mono text-sm text-muted-foreground mb-2">$ ~/contact --ridam</p>
              <p className="text-muted-foreground max-w-md mb-8">
                open to: software engineering & Web3 / blockchain roles
              </p>
              <div className="space-y-2 font-mono text-sm">
                <a
                  href="mailto:kumarridam172@gmail.com"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                >
                  email: kumarridam172@gmail.com
                </a>
                <a
                  href="tel:+916207422455"
                  className="block text-foreground/80 hover:text-primary transition-colors"
                >
                  phone: +91 62074 22455
                </a>
                <p className="text-muted-foreground">location: Chennai, Tamil Nadu, India</p>
              </div>

            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:kumarridam172@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-primary/90"
              >
                Email
              </a>
              <a
                href="https://github.com/ridamk65"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-secondary hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ridam-kumar-3a96361b8/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-secondary hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </RevealSection>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 flex justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
          <span>© 2024 Ridam Kumar</span>
          <span>Built with precision</span>
        </div>
      </footer>
    </div>
  );
}
