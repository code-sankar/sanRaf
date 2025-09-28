import React from "react";
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
} from "lucide-react";

function Blockchain() {
  const services = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Cryptocurrency Development",
      description:
        "Create your own digital currencies and tokens with secure blockchain technology",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Contracts",
      description:
        "Self-executing contracts with terms directly written into code for transparency",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Supply Chain Solutions",
      description:
        "Track goods transparently from origin to consumer with immutable records",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "DeFi Applications",
      description:
        "Build decentralized finance platforms for lending, borrowing, and trading",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "NFT Marketplaces",
      description:
        "Create platforms for minting, buying, and selling unique digital assets",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "dApp Development",
      description:
        "Develop decentralized applications that run on blockchain networks",
    },
  ];

  const technologies = [
    { name: "Ethereum", color: "bg-gray-100 text-gray-800" },
    { name: "Hyperledger", color: "bg-blue-100 text-blue-800" },
    { name: "Binance Smart Chain", color: "bg-yellow-100 text-yellow-800" },
    { name: "Polkadot", color: "bg-pink-100 text-pink-800" },
    { name: "Solana", color: "bg-purple-100 text-purple-800" },
    { name: "Cardano", color: "bg-blue-100 text-blue-800" },
    { name: "Solidity", color: "bg-gray-100 text-gray-800" },
    { name: "Web3.js", color: "bg-orange-100 text-orange-800" },
    { name: "Truffle", color: "bg-red-100 text-red-800" },
    { name: "Ganache", color: "bg-green-100 text-green-800" },
    { name: "IPFS", color: "bg-blue-100 text-blue-800" },
    { name: "Metamask", color: "bg-orange-100 text-orange-800" },
  ];

  const industries = [
    {
      name: "Finance & Banking",
      benefits: [
        "Reduced transaction costs",
        "Faster settlements",
        "Enhanced security",
      ],
    },
    {
      name: "Healthcare",
      benefits: [
        "Secure patient records",
        "Drug traceability",
        "Clinical trial transparency",
      ],
    },
    {
      name: "Supply Chain",
      benefits: [
        "Provenance tracking",
        "Reduced fraud",
        "Real-time visibility",
      ],
    },
    {
      name: "Real Estate",
      benefits: [
        "Tokenized assets",
        "Faster transactions",
        "Reduced paperwork",
      ],
    },
    {
      name: "Government",
      benefits: [
        "Digital identities",
        "Transparent voting",
        "Public record management",
      ],
    },
    {
      name: "Gaming",
      benefits: [
        "True asset ownership",
        "Play-to-earn models",
        "Interoperable assets",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "Understanding your business needs and blockchain feasibility",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Designing the blockchain solution and selecting appropriate technology",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building smart contracts, dApps, and integrating with existing systems",
    },
    {
      step: "04",
      title: "Testing & Security Audit",
      description:
        "Comprehensive testing and security analysis of the blockchain solution",
    },
    {
      step: "05",
      title: "Deployment & Maintenance",
      description:
        "Deploying on mainnet and providing ongoing support and updates",
    },
  ];

  const caseStudies = [
    {
      title: "Supply Chain Transparency Platform",
      industry: "Agriculture",
      challenge:
        "Lack of transparency in food supply chain leading to fraud and inefficiencies",
      solution: "Blockchain-based tracking system from farm to consumer",
      results:
        "40% reduction in fraud, complete traceability, improved consumer trust",
    },
    {
      title: "DeFi Lending Protocol",
      industry: "Finance",
      challenge: "High barriers to lending for unbanked populations",
      solution: "Decentralized lending platform using smart contracts",
      results: "$15M+ in loans processed, 0 defaults, global accessibility",
    },
    {
      title: "NFT Art Marketplace",
      industry: "Digital Art",
      challenge: "Artists not receiving fair compensation for digital work",
      solution: "Blockchain marketplace with royalty mechanisms for creators",
      results:
        "$3.2M in artist earnings, 15K+ registered creators, secure transactions",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Link className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blockchain Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your business with secure, transparent, and
              decentralized blockchain technology
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Explore Blockchain Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end blockchain development services to revolutionize your
              business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 flex items-center font-medium group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blockchain Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with leading blockchain platforms and technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Blockchain technology offers transformative benefits across
              industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-600">
                Immutable, encrypted records resistant to tampering and fraud
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                All participants have access to the same information
                simultaneously
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined processes with reduced intermediaries and faster
                settlements
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Traceability</h3>
              <p className="text-gray-600">
                Complete audit trail of all transactions and asset movements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blockchain Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformative applications of blockchain technology in various
              sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {industry.name}
                </h3>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Blockchain Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering successful blockchain
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blockchain Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of blockchain transforming businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {study.title}
                </h3>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Industry:
                  </span>
                  <span className="text-sm ml-2">{study.industry}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Challenge</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Solution</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Results</h4>
                  <p className="text-sm text-gray-600">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement Blockchain?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain technology can revolutionize your
            business processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blockchain;
