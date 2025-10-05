import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link,
  Shield,
  Database,
  Zap,
  Coins,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  BarChart3,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Code,
  Award,
  Cpu,
  LineChart,
  TrendingUp,
  FileText,
  Network,
  Smartphone,
} from "lucide-react";

function Blockchain() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const services = [
    {
      icon: <Coins className="w-10 h-10" />,
      title: "Cryptocurrency Development",
      description:
        "Create your own digital currencies and tokens with secure blockchain technology",
      features: [
        "Token Creation",
        "Wallet Development",
        "Exchange Integration",
        "Tokenomics Design",
      ],
      technologies: ["ERC-20", "BEP-20", "Smart Contracts", "Web3.js"],
      gradient: "from-yellow-500 to-orange-500",
      delay: 0,
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Smart Contracts",
      description:
        "Self-executing contracts with terms directly written into code for transparency",
      features: [
        "Contract Development",
        "Security Audits",
        "Deployment",
        "Upgradeability",
      ],
      technologies: ["Solidity", "Vyper", "Hardhat", "Truffle"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Supply Chain Solutions",
      description:
        "Track goods transparently from origin to consumer with immutable records",
      features: [
        "Provenance Tracking",
        "IoT Integration",
        "Real-time Monitoring",
        "Quality Assurance",
      ],
      technologies: ["Hyperledger", "Ethereum", "IPFS", "QR Codes"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "DeFi Applications",
      description:
        "Build decentralized finance platforms for lending, borrowing, and trading",
      features: [
        "DEX Development",
        "Yield Farming",
        "Lending Protocols",
        "Staking Mechanisms",
      ],
      technologies: ["Uniswap V3", "Aave", "Compound", "Web3 Integration"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "NFT Marketplaces",
      description:
        "Create platforms for minting, buying, and selling unique digital assets",
      features: [
        "NFT Minting",
        "Marketplace UI/UX",
        "Royalty Systems",
        "Auction Mechanisms",
      ],
      technologies: ["ERC-721", "ERC-1155", "OpenSea API", "IPFS Storage"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "dApp Development",
      description:
        "Develop decentralized applications that run on blockchain networks",
      features: [
        "Frontend Development",
        "Backend Integration",
        "Wallet Connectivity",
        "Gas Optimization",
      ],
      technologies: ["React dApps", "Node.js", "MetaMask", "The Graph"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const technologies = [
    { name: "Ethereum", color: "from-gray-600 to-gray-800", icon: "⚡" },
    { name: "Hyperledger", color: "from-blue-500 to-blue-700", icon: "🔗" },
    {
      name: "Binance Smart Chain",
      color: "from-yellow-500 to-yellow-700",
      icon: "💰",
    },
    { name: "Polkadot", color: "from-pink-500 to-pink-700", icon: "🔴" },
    { name: "Solana", color: "from-purple-500 to-purple-700", icon: "🚀" },
    { name: "Cardano", color: "from-blue-400 to-blue-600", icon: "🔷" },
    { name: "Solidity", color: "from-gray-500 to-gray-700", icon: "📝" },
    { name: "Web3.js", color: "from-orange-500 to-orange-700", icon: "🌐" },
    { name: "Truffle", color: "from-red-500 to-red-700", icon: "🦊" },
    { name: "Ganache", color: "from-green-500 to-green-700", icon: "🍃" },
    { name: "IPFS", color: "from-blue-400 to-blue-600", icon: "📁" },
    { name: "Metamask", color: "from-orange-400 to-orange-600", icon: "🦊" },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description:
        "Immutable, encrypted records resistant to tampering and fraud with cryptographic protection",
      metrics: "99.9% Security",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Transparency",
      description:
        "All participants have access to the same information simultaneously with complete audit trails",
      metrics: "Full Transparency",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description:
        "Streamlined processes with reduced intermediaries and faster settlement times",
      metrics: "60% Faster",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Traceability",
      description:
        "Complete audit trail of all transactions and asset movements from origin to destination",
      metrics: "End-to-End Tracking",
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Cost Reduction",
      description:
        "Eliminate intermediaries and reduce operational costs through automation",
      metrics: "40% Savings",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trust & Verification",
      description:
        "Build trust through decentralized verification and consensus mechanisms",
      metrics: "Verified Trust",
    },
  ];

  const stats = [
    {
      value: "91%",
      label: "reduction in fraud with blockchain implementation",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      value: "45%",
      label: "average cost savings in transaction processing",
      icon: <Coins className="w-6 h-6" />,
    },
    {
      value: "3.2x",
      label: "faster settlement times compared to traditional systems",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: "99.9%",
      label: "uptime with decentralized network architecture",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const industries = [
    {
      name: "Finance & Banking",
      description:
        "Revolutionize financial services with decentralized solutions",
      applications: [
        "Cross-border payments",
        "Trade finance",
        "Digital identity",
        "Asset tokenization",
      ],
      metrics: [
        "60% cost reduction",
        "Real-time settlements",
        "Enhanced security",
      ],
      icon: "💰",
    },
    {
      name: "Healthcare",
      description: "Secure and interoperable health data management",
      applications: [
        "Patient records",
        "Drug traceability",
        "Clinical trials",
        "Medical research",
      ],
      metrics: ["Secure data sharing", "Reduced fraud", "Better outcomes"],
      icon: "🏥",
    },
    {
      name: "Supply Chain",
      description: "End-to-end visibility and provenance tracking",
      applications: [
        "Provenance tracking",
        "Inventory management",
        "Quality assurance",
        "Logistics",
      ],
      metrics: [
        "40% fraud reduction",
        "Real-time tracking",
        "Better compliance",
      ],
      icon: "📦",
    },
    {
      name: "Real Estate",
      description: "Tokenize assets and streamline property transactions",
      applications: [
        "Property tokenization",
        "Smart contracts",
        "Title management",
        "Rental agreements",
      ],
      metrics: ["Faster transactions", "Reduced paperwork", "Global access"],
      icon: "🏠",
    },
    {
      name: "Government",
      description: "Transparent and efficient public services",
      applications: [
        "Digital identities",
        "Voting systems",
        "Public records",
        "License management",
      ],
      metrics: ["Enhanced transparency", "Reduced corruption", "Citizen trust"],
      icon: "🏛️",
    },
    {
      name: "Gaming",
      description: "True digital ownership and play-to-earn economies",
      applications: [
        "NFT assets",
        "In-game economies",
        "Player ownership",
        "Interoperability",
      ],
      metrics: ["True ownership", "New revenue streams", "Player engagement"],
      icon: "🎮",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "Understanding your business needs and blockchain feasibility assessment",
      icon: <FileText className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "Requirement Analysis",
        "Feasibility Study",
        "Project Roadmap",
      ],
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Designing the blockchain solution and selecting appropriate technology stack",
      icon: <Network className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: [
        "System Architecture",
        "Tech Stack Selection",
        "Security Design",
      ],
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building smart contracts, dApps, and integrating with existing systems",
      icon: <Code className="w-6 h-6" />,
      duration: "4-8 weeks",
      deliverables: ["Smart Contracts", "dApp Frontend", "Backend Integration"],
    },
    {
      step: "04",
      title: "Testing & Security Audit",
      description:
        "Comprehensive testing and security analysis of the blockchain solution",
      icon: <Shield className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: [
        "Security Audit",
        "Penetration Testing",
        "Performance Testing",
      ],
    },
    {
      step: "05",
      title: "Deployment & Maintenance",
      description:
        "Deploying on mainnet and providing ongoing support and updates",
      icon: <Rocket className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Mainnet Deployment", "Monitoring Setup", "Support Plan"],
    },
  ];

  const caseStudies = [
    {
      title: "Supply Chain Transparency Platform",
      industry: "Agriculture",
      challenge:
        "Lack of transparency in food supply chain leading to fraud, inefficiencies, and consumer distrust in product origins",
      solution:
        "Blockchain-based tracking system with IoT integration providing real-time monitoring from farm to consumer with QR code verification",
      results:
        "40% reduction in fraud cases, complete product traceability, 25% improvement in supply chain efficiency, and significantly enhanced consumer trust",
      metrics: [
        "40% Fraud Reduction",
        "Complete Traceability",
        "25% Efficiency Gain",
      ],
      technologies: [
        "Hyperledger",
        "IoT Sensors",
        "QR Codes",
        "Smart Contracts",
      ],
    },
    {
      title: "DeFi Lending Protocol",
      industry: "Finance",
      challenge:
        "High barriers to lending for unbanked populations and small businesses with traditional financial institutions",
      solution:
        "Decentralized lending platform using smart contracts for automated lending, collateral management, and risk assessment without intermediaries",
      results:
        "$15M+ in loans processed to underserved markets, 0 defaults through smart contract enforcement, global accessibility 24/7",
      metrics: ["$15M+ Loans", "0 Defaults", "Global Access"],
      technologies: ["Ethereum", "Solidity", "Chainlink", "Web3.js"],
    },
    {
      title: "NFT Art Marketplace",
      industry: "Digital Art",
      challenge:
        "Artists not receiving fair compensation for digital work and lack of provenance for digital art ownership",
      solution:
        "Blockchain marketplace with automated royalty mechanisms, verified provenance, and secure trading for digital creators",
      results:
        "$3.2M in artist earnings through automatic royalties, 15K+ registered creators, secure and transparent transactions with immutable ownership records",
      metrics: ["$3.2M Artist Earnings", "15K+ Creators", "Secure Trading"],
      technologies: ["ERC-721", "IPFS", "React", "MetaMask"],
    },
  ];

  const faqs = [
    {
      question: "What's the difference between public and private blockchains?",
      answer:
        "Public blockchains (like Ethereum) are open to anyone and decentralized, while private blockchains are permissioned networks where participants are known and trusted. Public blockchains offer greater decentralization but have scalability challenges, while private blockchains provide better performance and privacy for enterprise use cases. We help you choose the right approach based on your specific needs.",
    },
    {
      question: "How secure are blockchain applications?",
      answer:
        "Blockchain applications are highly secure due to cryptographic principles, decentralization, and consensus mechanisms. However, security depends on proper implementation, smart contract auditing, and secure development practices. We conduct comprehensive security audits, penetration testing, and follow best practices to ensure your blockchain solution is robust against attacks while maintaining the inherent security benefits of blockchain technology.",
    },
    {
      question: "What are the costs involved in blockchain development?",
      answer:
        "Costs vary based on project complexity, ranging from $25,000 for basic smart contracts to $150,000+ for enterprise dApps. Factors include blockchain platform, smart contract complexity, frontend development, security audits, and gas fees. We provide transparent pricing and can start with MVPs to demonstrate value before full-scale implementation.",
    },
    {
      question: "Can blockchain integrate with our existing systems?",
      answer:
        "Yes, we design blockchain solutions to integrate seamlessly with your existing infrastructure through APIs, microservices, and middleware. We ensure smooth data flow between blockchain networks and traditional databases, CRM systems, ERP software, and other business applications without disrupting current operations.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Decentralized Excellence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Blockchain
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with secure, transparent, and
              decentralized blockchain technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Explore Blockchain Solutions
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end blockchain development services to revolutionize your
              business processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 h-full flex flex-col"
                >
                  {/* Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features
                        .slice(0, 2)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="mt-auto flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with leading blockchain platforms and cutting-edge
              technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tech.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Blockchain?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Blockchain technology offers transformative benefits across
              industries and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain Across{" "}
              <span className="text-blue-600">Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transformative applications of blockchain technology in various
              sectors
            </p>
          </motion.div>

          {/* Industry Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeIndustry === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span className="text-xl">{industry.icon}</span>
                {industry.name}
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">
                      {industries[activeIndustry].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {industries[activeIndustry].name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {industries[activeIndustry].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Applications
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {industries[activeIndustry].applications.map(
                          (application, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600">
                                {application}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Typical Results
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industries[activeIndustry].metrics.map(
                          (metric, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                            >
                              {metric}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center p-8 bg-blue-50 rounded-2xl">
                    <Link className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Industry Impact
                    </h4>
                    <p className="text-gray-600">
                      Blockchain transforms{" "}
                      {industries[activeIndustry].name.toLowerCase()} by
                      providing unprecedented transparency, security, and
                      efficiency in operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain Development{" "}
              <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured approach to delivering successful blockchain
              solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 justify-center">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of blockchain transforming businesses and
              creating value
            </p>
          </motion.div>

          {/* Case Study Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCaseStudy === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span className="text-lg">{study.industry}</span>
              </button>
            ))}
          </div>

          {/* Case Study Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCaseStudy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">🚀</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {caseStudies[activeCaseStudy].title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {caseStudies[activeCaseStudy].industry} Industry
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudies[activeCaseStudy].challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudies[activeCaseStudy].solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudies[activeCaseStudy].technologies.map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      {caseStudies[activeCaseStudy].metrics.map(
                        (metric, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {metric}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      Business Impact
                    </h4>
                    <p className="text-gray-600 text-center">
                      {caseStudies[activeCaseStudy].results}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain Solutions <span className="text-blue-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about blockchain technology and
              implementation
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Rocket className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Ready for Blockchain Transformation?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Blockchain Journey
              </span>{" "}
              Today
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Transform your business with secure, transparent, and
              decentralized blockchain solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                <Award className="w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-blue-200 flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              No commitment required • Free blockchain assessment
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Blockchain;
