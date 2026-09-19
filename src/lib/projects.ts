export const projects = [
  {
    id: "01",
    title: "Friday",
    visual: "agents" as const,
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
    visual: "ledger" as const,
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
    visual: "anomaly" as const,
    year: "Aug 2026",
    description:
      "An explainable misbehavior-detection system for Vehicular Ad-hoc Networks (VANETs). ExBDT combines Binary Trie routing with CART/C4.5 decision trees, while SHAP/TreeSHAP explains why a node is flagged.",
    role: "Research & Systems Engineer",
    outcome:
      "IEEE-submitted work evaluated on VeReMi Extension and CICIDS 2017, demonstrating explainable intrusion detection for healthcare-adjacent vehicular infrastructure.",
    tags: ["VANET", "ExBDT", "CART/C4.5", "SHAP", "TreeSHAP", "VeReMi", "CICIDS 2017"],
  },
];

export type PortfolioProject = (typeof projects)[number];