import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridam Kumar | Blockchain & AWS Architect (learning)" },
      { name: "description", content: "Portfolio of Ridam Kumar — blockchain developer and AWS architect (learning) building secure smart contracts, decentralized applications, and cloud-native systems." },
      { property: "og:title", content: "Ridam Kumar | Blockchain & AWS Architect (learning)" },
      { property: "og:description", content: "Portfolio of Ridam Kumar — blockchain developer and AWS architect (learning) building secure smart contracts, decentralized applications, and cloud-native systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    id: "01",
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
    id: "02",
    title: "VEXIS",
    year: "Aug 2026",
    description:
      "An explainable misbehavior-detection system for Vehicular Ad-hoc Networks (VANETs). ExBDT combines Binary Trie routing with CART/C4.5 decision trees, while SHAP/TreeSHAP explains why a node is flagged.",
    role: "Research & Systems Engineer",
    outcome:
      "IEEE-submitted work evaluated on VeReMi Extension and CICIDS 2017, demonstrating explainable intrusion detection for healthcare-adjacent vehicular infrastructure.",
    tags: ["VANET", "ExBDT", "CART/C4.5", "SHAP", "TreeSHAP", "VeReMi", "CICIDS 2017"],
  },
  {
    id: "03",
    title: "Friday",
    year: "2024",
    description:
      "A persistent-memory voice assistant built on a LangChain multi-agent architecture. Specialized agents coordinate routing, memory retrieval, and response generation, benchmarked against a LiveKit/Gemini implementation.",
    role: "AI Systems Engineer",
    outcome:
      "Explored the build-vs-buy trade-off in real-time voice infrastructure by comparing a custom multi-agent stack to an off-the-shelf LiveKit/Gemini pipeline.",
    tags: ["LangChain", "Multi-Agent", "Persistent Memory", "LiveKit", "Gemini", "Voice AI"],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Blockchain & Trust",
    items: ["Solidity", "Ethereum / EVM", "Hardhat", "OpenZeppelin", "IPFS", "MetaMask", "Polygon"],
  },
  {
    number: "02",
    title: "Full-Stack & Systems",
    items: ["React", "Next.js", "Vite", "Node.js", "Express.js", "Tailwind CSS", "Ethers.js", "Web3.js"],
  },
  {
    number: "03",
    title: "ML & Data",
    items: ["SHAP / TreeSHAP", "CART / C4.5", "LangChain", "Multi-Agent Systems", "PostgreSQL", "Supabase"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-xs tracking-tighter text-primary uppercase">
            Ridam_Kumar
          </span>
          <div className="flex gap-8 text-[11px] font-mono uppercase tracking-widest">
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
        {/* Hero Section */}
        <section className="relative mb-32 animate-reveal">
          <div className="absolute -top-24 -left-24 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="relative">
            <p className="font-mono text-xs text-primary mb-4 tracking-[0.2em] uppercase">
              Blockchain & Full-Stack Engineer
            </p>
            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-8">
              RIDAM <br /> KUMAR
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground font-light leading-relaxed text-pretty">
              Building secure, decentralized systems and polished full-stack interfaces. From
              audited smart contracts to scalable web platforms, I turn complex ideas into
              production-ready products.
            </p>
            <div className="mt-12 flex gap-6 font-mono text-xs uppercase tracking-widest">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Twitter / X
              </a>
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
            and intelligent interfaces. From transparent donation tracking on-chain to
            explainable misbehavior detection in vehicular networks and persistent-memory voice
            agents, I turn research-backed ideas into working products.
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
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillGroups.map((group) => (
              <div key={group.number}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  {group.number} / {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-light">
                      {item} <span className="text-border">/</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-border animate-reveal">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-4xl font-display font-bold tracking-tight mb-4 text-balance">
                Initialize collaboration.
              </h2>
              <p className="text-muted-foreground max-w-md">
                Open to blockchain engineering, full-stack roles, and ambitious product builds.
                Let’s talk.
              </p>
            </div>
            <a
              href="mailto:ridam@example.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] transition-all hover:pr-10"
            >
              Reach Out
              <span className="absolute right-4 transition-all opacity-0 group-hover:opacity-100">
                →
              </span>
            </a>
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
