import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Coins,
  FileText,
  Shield,
  Globe,
  Lock,
  Network,
  Database,
  Zap,
  Users,
  Code,
  Rocket,
  Building2,
  HeartPulse,
  Package,
  Home,
  Landmark,
  Gamepad2,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Coins,
    title: "Cryptocurrency Development",
    description: "Create your own digital currencies and tokens with secure, audited blockchain technology.",
    features: ["Token Creation", "Wallet Development", "Exchange Integration", "Tokenomics Design"],
    technologies: ["ERC-20", "BEP-20", "Smart Contracts", "Web3.js"],
  },
  {
    icon: FileText,
    title: "Smart Contracts",
    description: "Self-executing contracts with terms written directly into code — transparent, audited, and immutable.",
    features: ["Contract Development", "Security Audits", "Deployment", "Upgradeability"],
    technologies: ["Solidity", "Vyper", "Hardhat", "Truffle"],
  },
  {
    icon: Shield,
    title: "Supply Chain Solutions",
    description: "Track goods transparently from origin to consumer with an immutable audit trail.",
    features: ["Provenance Tracking", "IoT Integration", "Real-time Monitoring", "Quality Assurance"],
    technologies: ["Hyperledger", "Ethereum", "IPFS", "QR Codes"],
  },
  {
    icon: Globe,
    title: "DeFi Applications",
    description: "Decentralised finance platforms for lending, borrowing, and trading without intermediaries.",
    features: ["DEX Development", "Yield Farming", "Lending Protocols", "Staking Mechanisms"],
    technologies: ["Uniswap V3", "Aave", "Compound", "Web3"],
  },
  {
    icon: Lock,
    title: "NFT Marketplaces",
    description: "Platforms for minting, buying, and selling unique digital assets with automatic royalty mechanisms.",
    features: ["NFT Minting", "Marketplace UI/UX", "Royalty Systems", "Auction Mechanisms"],
    technologies: ["ERC-721", "ERC-1155", "OpenSea API", "IPFS"],
  },
  {
    icon: Network,
    title: "dApp Development",
    description: "Decentralised applications that run on blockchain networks — frontend through backend.",
    features: ["Frontend Development", "Backend Integration", "Wallet Connectivity", "Gas Optimisation"],
    technologies: ["React dApps", "Node.js", "MetaMask", "The Graph"],
  },
];

const technologies = [
  "Ethereum", "Hyperledger", "Binance Smart Chain", "Polkadot",
  "Solana", "Cardano", "Solidity", "Web3.js",
  "Truffle", "Ganache", "IPFS", "MetaMask",
];

const stats = [
  { value: "91%",   label: "reduction in fraud with blockchain implementation" },
  { value: "45%",   label: "average cost savings in transaction processing" },
  { value: "3.2×",  label: "faster settlement vs traditional systems" },
  { value: "99.9%", label: "uptime with decentralised network architecture" },
];

const industries = [
  {
    icon: Building2,
    name: "Finance & Banking",
    description: "Decentralised solutions for cross-border payments, trade finance, and asset tokenisation.",
    applications: ["Cross-border payments", "Trade finance", "Digital identity", "Asset tokenisation"],
    metrics: ["60% cost reduction", "Real-time settlements", "Enhanced security"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    description: "Secure and interoperable health data management across providers and systems.",
    applications: ["Patient records", "Drug traceability", "Clinical trials", "Medical research"],
    metrics: ["Secure data sharing", "Reduced fraud", "Better outcomes"],
  },
  {
    icon: Package,
    name: "Supply Chain",
    description: "End-to-end visibility and provenance tracking from production to consumer.",
    applications: ["Provenance tracking", "Inventory management", "Quality assurance", "Logistics"],
    metrics: ["40% fraud reduction", "Real-time tracking", "Better compliance"],
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Tokenise assets and streamline property transactions with smart contract automation.",
    applications: ["Property tokenisation", "Smart contracts", "Title management", "Rental agreements"],
    metrics: ["Faster transactions", "Reduced paperwork", "Global access"],
  },
  {
    icon: Landmark,
    name: "Government",
    description: "Transparent and efficient public services — from digital identities to voting.",
    applications: ["Digital identities", "Voting systems", "Public records", "Licence management"],
    metrics: ["Enhanced transparency", "Reduced corruption", "Citizen trust"],
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "True digital ownership and play-to-earn economies on-chain.",
    applications: ["NFT assets", "In-game economies", "Player ownership", "Interoperability"],
    metrics: ["True ownership", "New revenue streams", "Player engagement"],
  },
];

const processSteps = [
  { step: "01", title: "Consultation & Planning", description: "Understanding your business needs and assessing blockchain feasibility.", duration: "1–2 weeks", icon: FileText, deliverables: ["Requirement Analysis", "Feasibility Study", "Project Roadmap"] },
  { step: "02", title: "Architecture Design", description: "Designing the solution and selecting the right technology stack for your use case.", duration: "2–3 weeks", icon: Network, deliverables: ["System Architecture", "Tech Stack", "Security Design"] },
  { step: "03", title: "Development", description: "Building smart contracts, dApps, and integrating with your existing systems.", duration: "4–8 weeks", icon: Code, deliverables: ["Smart Contracts", "dApp Frontend", "Backend Integration"] },
  { step: "04", title: "Security Audit & Testing", description: "Comprehensive security analysis and penetration testing before any mainnet deployment.", duration: "2–3 weeks", icon: Shield, deliverables: ["Security Audit", "Pen Testing", "Performance Testing"] },
  { step: "05", title: "Deployment & Maintenance", description: "Mainnet deployment and ongoing support, monitoring, and improvements.", duration: "Ongoing", icon: Rocket, deliverables: ["Mainnet Deployment", "Monitoring Setup", "Support Plan"] },
];

const benefits = [
  { icon: Shield,   title: "Enhanced Security",     description: "Immutable, encrypted records resistant to tampering and fraud with cryptographic protection.",                metric: "99.9% security" },
  { icon: Globe,    title: "Transparency",           description: "All participants have access to the same information simultaneously with a complete audit trail.",           metric: "Full transparency" },
  { icon: Zap,      title: "Efficiency",             description: "Streamlined processes with reduced intermediaries and significantly faster settlement times.",               metric: "60% faster" },
  { icon: Database, title: "Traceability",           description: "A complete audit trail of all transactions and asset movements from origin to destination.",                metric: "End-to-end tracking" },
  { icon: Coins,    title: "Cost Reduction",         description: "Eliminate intermediaries and reduce operational costs through smart contract automation.",                  metric: "40% savings" },
  { icon: Users,    title: "Trust & Verification",   description: "Build trust through decentralised verification and consensus mechanisms no single party controls.",        metric: "Verified trust" },
];

const caseStudies = [
  {
    title: "Supply Chain Transparency Platform",
    industry: "Agriculture",
    challenge: "Lack of transparency in the food supply chain leading to fraud, inefficiencies, and consumer distrust.",
    solution: "Blockchain-based tracking with IoT integration providing real-time monitoring from farm to consumer with QR code verification.",
    results: "40% reduction in fraud, complete product traceability, 25% supply chain efficiency improvement, and significantly enhanced consumer trust.",
    technologies: ["Hyperledger", "IoT Sensors", "QR Codes", "Smart Contracts"],
  },
  {
    title: "DeFi Lending Protocol",
    industry: "Finance",
    challenge: "High barriers to lending for unbanked populations and small businesses locked out of traditional finance.",
    solution: "Decentralised lending platform using smart contracts for automated lending, collateral management, and risk assessment.",
    results: "$15M+ in loans processed to underserved markets, zero defaults through smart contract enforcement, global 24/7 accessibility.",
    technologies: ["Ethereum", "Solidity", "Chainlink", "Web3.js"],
  },
  {
    title: "NFT Art Marketplace",
    industry: "Digital Art",
    challenge: "Artists not receiving fair compensation for digital work and no provenance for digital art ownership.",
    solution: "Blockchain marketplace with automated royalty mechanisms, verified provenance, and secure trading for digital creators.",
    results: "$3.2M in artist earnings through automatic royalties, 15K+ registered creators, immutable ownership records.",
    technologies: ["ERC-721", "IPFS", "React", "MetaMask"],
  },
];

const faqs = [
  {
    q: "What's the difference between public and private blockchains?",
    a: "Public blockchains (like Ethereum) are open to anyone and fully decentralised. Private blockchains are permissioned networks where participants are known and trusted. Public offers greater decentralisation but has scalability trade-offs; private gives better performance and privacy for enterprise use cases. We recommend based on your actual requirements.",
  },
  {
    q: "How secure are blockchain applications?",
    a: "Blockchain applications are highly secure by design — cryptographic principles, decentralisation, and consensus mechanisms make tampering practically impossible. However, security depends heavily on proper implementation and smart contract auditing. We conduct comprehensive security audits and penetration testing before any deployment.",
  },
  {
    q: "What are the costs involved in blockchain development?",
    a: "Costs range from around $25,000 for basic smart contracts to $150,000+ for enterprise dApps. Key factors are the blockchain platform, smart contract complexity, frontend work, security audits, and gas fees. We're transparent on pricing and can start with an MVP to demonstrate value before full-scale build.",
  },
  {
    q: "Can blockchain integrate with our existing systems?",
    a: "Yes — we design blockchain solutions to integrate with your existing infrastructure through APIs, microservices, and middleware. Data flows between blockchain networks and traditional databases, CRM, ERP, and other business applications without disrupting current operations.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const Blockchain = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const IndIcon = industries[activeIndustry].icon;

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / blockchain
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Decentralised systems built to be{" "}
                <span className="border-b-2 border-accent pb-0.5">trusted</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We design and build blockchain solutions that solve real
                business problems — smart contracts, dApps, DeFi, supply chain,
                and NFT platforms — with the security auditing to back them up.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate("/cases")}
                  className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
                >
                  See case studies
                </button>
              </div>
            </div>

            {/* summary panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/blockchain</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Platforms",        "Ethereum · Hyperledger · Solana"],
                  ["Primary language", "Solidity · Vyper · Rust"],
                  ["Timeline",         "6 weeks – 6 months"],
                  ["Projects shipped", "12+"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex justify-between px-4 py-3">
                    <dt className="font-mono text-[0.74rem] text-graphite">{dt}</dt>
                    <dd className="font-display text-[0.95rem] text-ink">{dd}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAND ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 md:p-8
                  ${i % 2 !== 0 ? "border-l border-line" : ""}
                  ${i < 2 ? "border-b border-line md:border-b-0" : ""}
                  ${i > 0 ? "md:border-l md:border-line" : ""}
                `}
              >
                <div className="font-display text-[clamp(1.75rem,1.2rem+1.5vw,2.4rem)] font-medium tracking-tight text-ink">
                  {s.value}
                </div>
                <div className="mt-1 max-w-[26ch] font-mono text-[0.72rem] leading-relaxed text-graphite">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                capabilities
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                What we build on-chain.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              End-to-end blockchain development — from architecture and smart
              contracts through to audited deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="flex flex-col border-b border-r border-line bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.72rem] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-[1.25rem] font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-baseline gap-2 text-[0.86rem] text-ink">
                        <span className="font-mono text-[0.7rem] text-accent">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {s.technologies.map((t) => (
                      <span key={t} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ TECH ROW ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
            <span className="inline-block h-px w-3.5 bg-accent" />
            stack we work in
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span key={t} className="border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.78rem] text-ink">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                industry applications
              </span>
              <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Blockchain across industries.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              The same decentralised principles applied to different domains —
              each with distinct use cases and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            <ul className="border border-line bg-white">
              {industries.map((ind, i) => {
                const IIcon = ind.icon;
                return (
                  <li key={ind.name}>
                    <button
                      onClick={() => setActiveIndustry(i)}
                      className={`flex w-full items-center gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                        activeIndustry === i ? "bg-accent/5" : "hover:bg-paper"
                      }`}
                    >
                      <IIcon
                        className={`h-4 w-4 flex-none ${activeIndustry === i ? "text-accent" : "text-faint"}`}
                        strokeWidth={1.6}
                      />
                      <span className="font-display text-[0.95rem] font-medium text-ink">
                        {ind.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white p-8"
              >
                <div className="flex items-start gap-4">
                  <IndIcon className="mt-0.5 h-5 w-5 flex-none text-ink" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-display text-[1.35rem] font-medium text-ink">
                      {industries[activeIndustry].name}
                    </h3>
                    <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-graphite">
                      {industries[activeIndustry].description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">key applications</p>
                    <ul className="space-y-2">
                      {industries[activeIndustry].applications.map((a) => (
                        <li key={a} className="flex items-baseline gap-2 text-[0.9rem] text-ink">
                          <span className="font-mono text-[0.7rem] text-accent">·</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">typical results</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industries[activeIndustry].metrics.map((m) => (
                        <span key={m} className="border border-accent/40 bg-accent/5 px-2.5 py-1 font-mono text-[0.72rem] text-accent">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                how we work
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Five stages to mainnet.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              A structured process from feasibility through audited deployment
              — no shortcuts on security.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="border-t-2 border-ink py-6 pr-6">
                  <div className="flex items-center justify-between font-mono text-[0.72rem]">
                    <span className="text-accent">{step.step}</span>
                    <span className="text-faint">{step.duration}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Icon className="h-4 w-4 text-ink" strokeWidth={1.6} />
                    <h3 className="font-display text-[1.1rem] font-medium text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                    {step.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {step.deliverables.map((d) => (
                      <span key={d} className="border border-accent/40 bg-accent/5 px-2 py-0.5 font-mono text-[0.67rem] text-accent">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                why blockchain
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                What decentralisation actually delivers.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable outcomes of eliminating intermediaries and putting
              trust in the protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="border-b border-r border-line bg-white p-7">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-[1.15rem] font-medium text-ink">{b.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">{b.description}</p>
                  <p className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] text-accent">
                    → {b.metric}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CASE STUDIES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              selected work
            </span>
            <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              Blockchain that moved real businesses.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr]">
            <ul className="border border-line bg-white">
              {caseStudies.map((c, i) => (
                <li key={c.title}>
                  <button
                    onClick={() => setActiveCase(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                      activeCase === i ? "bg-accent/5" : "hover:bg-paper"
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] ${activeCase === i ? "text-accent" : "text-faint"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.95rem] font-medium text-ink">
                      {c.industry}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeCase}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="border border-line bg-white p-8"
              >
                <span className="font-mono text-[0.72rem] text-accent">
                  {caseStudies[activeCase].industry}
                </span>
                <h3 className="mt-3 font-display text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] font-medium tracking-tight text-ink">
                  {caseStudies[activeCase].title}
                </h3>
                <dl className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-3">
                  {[
                    ["challenge", caseStudies[activeCase].challenge],
                    ["solution",  caseStudies[activeCase].solution],
                    ["results",   caseStudies[activeCase].results],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="font-mono text-[0.7rem] text-faint">{label}</dt>
                      <dd className={`mt-2 text-[0.9rem] leading-relaxed ${label === "results" ? "text-ink" : "text-graphite"}`}>
                        {text}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {caseStudies[activeCase].technologies.map((t) => (
                    <span key={t} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                questions
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium leading-tight tracking-tight text-ink">
                What clients usually ask.
              </h2>
              <p className="mt-4 max-w-[34ch] text-graphite">
                Something else?{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="border-b border-accent text-ink transition hover:text-accent"
                >
                  Drop us a note.
                </button>
              </p>
            </div>

            <div className="border-t border-line">
              {faqs.map((f, i) => {
                const open = openFAQ === i;
                return (
                  <div key={f.q} className="border-b border-line">
                    <button
                      onClick={() => setOpenFAQ(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-accent"
                      aria-expanded={open}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={`font-mono text-[0.72rem] ${open ? "text-accent" : "text-faint"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.02rem] font-medium text-ink">{f.q}</span>
                      </span>
                      {open
                        ? <Minus className="h-4 w-4 flex-none text-accent" />
                        : <Plus  className="h-4 w-4 flex-none text-graphite" />}
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[62ch] pb-6 pl-10 pr-6 text-[0.95rem] leading-relaxed text-graphite">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            start a project
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Ready to build something on-chain? Let's scope it.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Free blockchain assessment — no commitment. We'll tell you honestly
            whether blockchain is the right tool for your problem, and what
            it would take to build it properly.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Schedule a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              View case studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blockchain;