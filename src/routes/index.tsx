import { createFileRoute } from "@tanstack/react-router";

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

const projects = [
  {
    id: "01",
    title: "Friday",
    year: "Sept 2026",
    description:
      "A persistent-memory voice assistant built on a LangChain multi-agent architecture. Specialized agents coordinate routing, memory retrieval, and response generation, benchmarked against a LiveKit/Gemini implementation.",
    role: "AI Systems Engineer",
    outcome:
      "Explored the build-vs-buy trade-off in real-time voice infrastructure by comparing a custom multi-agent stack to an off-the-shelf LiveKit/Gemini pipeline.",
    tags: ["LangChain", "Multi-Agent", "Persistent Memory", "LiveKit", "Gemini", "Voice AI"],
  },
  {
    id: "02",
    title: "GiftChain",
    year: "Oct 2025",
    description:
      "A decentralized donation-tracking application that records donation transactions transparently on the blockchain.",
    role: "Smart Contract & Frontend Developer",
    outcome:
      "Developed a working DApp prototype demonstrating transparent and tamper-resistant donation tracking.",
    tags: ["Solidity", "Ethereum", "Polygon", "React", "Vite", "Ethers.js", "Web3.js", "MetaMask", "Hardhat"],
    featured: true,
  },
  {
    id: "03",
    title: "VEXIS",
    year: "Aug 2026",
    description:
      "An explainable misbehavior-detection system for Vehicular Ad-hoc Networks (VANETs). ExBDT combines Binary Trie routing with CART/C4.5 decision trees, while SHAP/TreeSHAP explains why a node is flagged.",
    role: "Research & Systems Engineer",
    outcome:
      "IEEE-submitted work evaluated on VeReMi Extension and CICIDS 2017, demonstrating explainable intrusion detection for healthcare-adjacent vehicular infrastructure.",
    tags: ["VANET", "ExBDT", "CART/C4.5", "SHAP", "TreeSHAP", "VeReMi", "CICIDS 2017"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "Solidity"],
  },
  {
    title: "Blockchain",
    items: ["Ethereum", "Hyperledger Fabric", "Web3", "Smart Contracts"],
  },
  {
    title: "ML / Explainability",
    items: ["Isolation Forest", "CART / C4.5", "SHAP / TreeSHAP"],
  },
  {
    title: "Systems & Tools",
    items: ["Thanos", "LangChain", "GPT-4", "Git", "SQL"],
  },
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Global background effect */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 size-[32rem] rounded-full bg-primary/10 blur-[160px] animate-drift" />
      </div>

      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 min-w-0">
            <span className="font-mono text-xs tracking-tighter text-primary uppercase">
              Ridam_Kumar
            </span>
            <a
              href="mailto:kumarridam172@gmail.com"
              className="hidden sm:inline font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors truncate"
            >
              kumarridam172@gmail.com
            </a>
          </div>
          <div className="flex gap-6 sm:gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
              Stack
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Connect
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section — split layout */}
        <section className="relative mb-32 animate-reveal">
          {/* decorative shapes */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-10 -top-10 size-24 rounded-full border-2 border-primary/60 animate-float-slow" />
            <div className="absolute right-4 -top-16 size-6 rounded-full border-2 border-primary" />
            <div className="absolute right-40 top-24 size-4 rounded-full bg-primary/80 animate-drift" />
            <div className="absolute left-[-2rem] top-1/2 size-3 rounded-full bg-foreground/30 animate-float-slow" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: identity */}
            <div>
              <h1 className="font-display font-black tracking-tighter leading-[0.9] text-6xl md:text-8xl">
                Hi,
                <br />
                I&apos;m <span className="text-primary">Ridam</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-light text-muted-foreground">
                Blockchain &amp; AWS Architect Developer
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:kumarridam172@gmail.com"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5"
                >
                  Hire Me
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 px-6 py-3.5 border border-border font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-secondary"
                >
                  View Work
                </a>
              </div>
            </div>

            {/* Right: statement */}
            <div className="lg:pl-10 lg:border-l border-border">
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
                  className="text-foreground/70 hover:text-primary transition-colors border-b border-primary/40 pb-1"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ridam-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors border-b border-primary/40 pb-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-32 animate-reveal">
          <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-12">
            About
          </h2>
          <p className="max-w-3xl text-2xl md:text-3xl font-display font-medium tracking-tight leading-snug text-pretty">
            I build systems that sit at the intersection of decentralized trust, explainable AI,
            and cloud-native infrastructure. From transparent donation tracking on-chain to
            explainable misbehavior detection in vehicular networks and persistent-memory voice
            agents, I turn research-backed ideas into working products while deepening my AWS
            architecture practice.
          </p>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-display font-bold tracking-tight text-balance">
              Selected Works
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground uppercase pb-1">
              03 Records Total
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {projects.map((project, index) =>
              project.featured ? (
                <div
                  key={project.id}
                  className="group md:col-span-2 bg-background p-8 md:p-12 transition-colors hover:bg-secondary/40 animate-reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 mb-12">
                    <div>
                      <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] py-1 px-2 border border-border shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono py-1.5 px-3 bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="h-px flex-1 bg-border hidden md:block" />
                    <p className="text-xs font-mono text-primary/80 uppercase tracking-widest font-semibold">
                      {project.role} — {project.outcome}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={project.id}
                  className="group bg-background p-8 transition-colors hover:bg-secondary/40 animate-reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] py-1 px-2 border border-border">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono py-1 px-2 bg-secondary text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] font-mono text-primary/80 uppercase tracking-tighter">
                      {project.role} — {project.outcome}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 animate-reveal">
          <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-12">
            Stack Readout
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-background p-6 md:p-8">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono py-1.5 px-3 border border-border text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-border animate-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-6">
                Reach Out
              </h2>
              <p className="font-mono text-sm text-muted-foreground mb-2">$ ~/contact --ridam</p>
              <p className="text-muted-foreground max-w-md mb-8">
                open to: software engineering & Web3 / blockchain roles
              </p>
              <a
                href="mailto:kumarridam172@gmail.com"
                className="font-mono text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                email: kumarridam172@gmail.com
              </a>
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
                href="https://www.linkedin.com/in/ridam-kumar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-secondary hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
          <span>© 2024 Ridam Kumar</span>
          <span>Built with precision</span>
        </div>
      </footer>
    </div>
  );
}
