import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Network,
  Server,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Target,
  Award,
  Globe,
  Zap,
  Cpu,
} from "lucide-react";

function Cybersecurity() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeThreat, setActiveThreat] = useState(0);

  const services = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive security scanning to identify weaknesses in your systems and applications",
      features: [
        "Automated Scanning",
        "Manual Verification",
        "Risk Scoring",
        "Remediation Guidance",
      ],
      technologies: ["Nessus", "Qualys", "OpenVAS", "Nexpose"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Penetration Testing",
      description:
        "Simulated cyber attacks to test your defenses and identify exploitable vulnerabilities",
      features: [
        "Black Box Testing",
        "White Box Testing",
        "Social Engineering",
        "Physical Security Testing",
      ],
      technologies: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux"],
      gradient: "from-red-500 to-orange-500",
      delay: 0.1,
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Security Monitoring",
      description:
        "24/7 monitoring of your systems to detect and respond to threats in real-time",
      features: [
        "SIEM Implementation",
        "Threat Detection",
        "Log Analysis",
        "Incident Response",
      ],
      technologies: ["Splunk", "ELK Stack", "Azure Sentinel", "QRadar"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Incident Response",
      description:
        "Rapid response and recovery services for security breaches and cyber attacks",
      features: [
        "Incident Containment",
        "Forensic Analysis",
        "Recovery Planning",
        "Post-Incident Review",
      ],
      technologies: [
        "Forensic Tools",
        "IR Platforms",
        "Malware Analysis",
        "E-Discovery",
      ],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
    {
      icon: <Key className="w-10 h-10" />,
      title: "Access Management",
      description:
        "Implement robust authentication and authorization controls for your systems",
      features: [
        "Multi-Factor Auth",
        "Role-Based Access",
        "Privileged Access",
        "Identity Governance",
      ],
      technologies: ["Okta", "Azure AD", "Ping Identity", "CyberArk"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "Network Security",
      description:
        "Protect your network infrastructure from unauthorized access and attacks",
      features: [
        "Firewall Management",
        "IDS/IPS",
        "Network Segmentation",
        "VPN Solutions",
      ],
      technologies: ["Palo Alto", "Cisco", "Fortinet", "Check Point"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const technologies = [
    { name: "SIEM Solutions", color: "from-blue-500 to-cyan-500", icon: "📊" },
    { name: "Firewalls", color: "from-red-500 to-orange-500", icon: "🔥" },
    { name: "IDS/IPS", color: "from-green-500 to-emerald-500", icon: "🛡️" },
    {
      name: "Endpoint Protection",
      color: "from-purple-500 to-pink-500",
      icon: "💻",
    },
    { name: "VPN", color: "from-orange-500 to-yellow-500", icon: "🔒" },
    {
      name: "Multi-Factor Auth",
      color: "from-yellow-500 to-amber-500",
      icon: "🔑",
    },
    { name: "Encryption", color: "from-indigo-500 to-purple-500", icon: "🔐" },
    {
      name: "Security Orchestration",
      color: "from-pink-500 to-rose-500",
      icon: "⚙️",
    },
    {
      name: "Threat Intelligence",
      color: "from-gray-500 to-gray-700",
      icon: "🧠",
    },
    { name: "Cloud Security", color: "from-blue-400 to-blue-600", icon: "☁️" },
    { name: "Zero Trust", color: "from-red-500 to-pink-500", icon: "🎯" },
    { name: "Compliance", color: "from-green-500 to-teal-500", icon: "📝" },
  ];

  const threats = [
    {
      name: "Phishing Attacks",
      description:
        "Deceptive attempts to obtain sensitive information through fake emails and websites",
      prevention:
        "Employee training, email filtering, multi-factor authentication, DMARC implementation",
      impact: "Data theft, credential compromise, financial loss",
      icon: "🎣",
      examples: ["CEO Fraud", "Credential Harvesting", "Malware Distribution"],
    },
    {
      name: "Ransomware",
      description:
        "Malicious software that encrypts data and demands payment for decryption",
      prevention:
        "Regular backups, endpoint protection, patch management, application whitelisting",
      impact: "Business disruption, data loss, financial extortion",
      icon: "💀",
      examples: ["WannaCry", "Ryuk", "REvil"],
    },
    {
      name: "DDoS Attacks",
      description:
        "Overwhelming systems with traffic to cause service disruption and downtime",
      prevention:
        "Traffic filtering, CDN protection, scalable infrastructure, rate limiting",
      impact: "Service unavailability, revenue loss, reputation damage",
      icon: "🌊",
      examples: [
        "Volumetric Attacks",
        "Protocol Attacks",
        "Application Layer Attacks",
      ],
    },
    {
      name: "Data Breaches",
      description:
        "Unauthorized access to sensitive information through system vulnerabilities",
      prevention:
        "Encryption, access controls, monitoring, data loss prevention, network segmentation",
      impact: "Regulatory fines, reputation damage, legal liability",
      icon: "📁",
      examples: ["SQL Injection", "Misconfigured Databases", "Insider Threats"],
    },
    {
      name: "Insider Threats",
      description:
        "Security risks originating from within the organization, intentional or accidental",
      prevention:
        "Access monitoring, least privilege principle, employee screening, behavior analytics",
      impact:
        "Intellectual property theft, data sabotage, compliance violations",
      icon: "👥",
      examples: [
        "Malicious Insiders",
        "Negligent Employees",
        "Compromised Accounts",
      ],
    },
    {
      name: "API Vulnerabilities",
      description:
        "Security gaps in application programming interfaces exposing data and services",
      prevention:
        "API security testing, rate limiting, authentication controls, input validation",
      impact: "Data exposure, service abuse, account takeover",
      icon: "🔌",
      examples: [
        "Broken Object Level Authorization",
        "Mass Assignment",
        "Injection Flaws",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Discovery",
      description:
        "Comprehensive evaluation of your current security posture and risk landscape",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Risk Assessment", "Gap Analysis", "Security Baseline"],
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Develop tailored security strategy and implementation roadmap",
      icon: <BarChart className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "Security Roadmap",
        "Policy Development",
        "Architecture Design",
      ],
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Deploy security solutions and establish protective measures",
      icon: <Cpu className="w-6 h-6" />,
      duration: "4-8 weeks",
      deliverables: ["Tool Deployment", "Configuration", "Integration"],
    },
    {
      step: "04",
      title: "Testing & Validation",
      description:
        "Validate security controls through penetration testing and audits",
      icon: <Shield className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: [
        "Pen Test Reports",
        "Compliance Certificates",
        "Remediation Plan",
      ],
    },
    {
      step: "05",
      title: "Monitoring & Maintenance",
      description: "Continuous security monitoring, updates, and improvement",
      icon: <Eye className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: [
        "Monitoring Dashboards",
        "Incident Reports",
        "Security Updates",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Financial Institution Security Overhaul",
      industry: "Banking & Finance",
      challenge:
        "Outdated security infrastructure with multiple critical vulnerabilities and compliance gaps",
      solution:
        "Comprehensive security assessment, multi-layered protection, employee training, and regulatory compliance implementation",
      results:
        "Zero security incidents in 18 months, regulatory compliance achieved, 99.9% threat detection rate",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["0 Incidents", "100% Compliance", "99.9% Detection"],
      technologies: ["SIEM", "MFA", "Encryption", "EDR"],
    },
    {
      title: "E-commerce Platform Protection",
      industry: "Retail & E-commerce",
      challenge:
        "Frequent DDoS attacks, payment data vulnerability, and customer trust issues",
      solution:
        "Web application firewall implementation, DDoS protection, PCI DSS compliance, and secure payment gateway integration",
      results:
        "99.99% uptime maintained, secure payment processing established, customer trust restored and increased sales",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["99.99% Uptime", "PCI Compliant", "Sales Increased"],
      technologies: ["WAF", "DDoS Protection", "PCI DSS", "Tokenization"],
    },
    {
      title: "Healthcare Data Security",
      industry: "Healthcare",
      challenge:
        "HIPAA compliance gaps, patient data vulnerability, and legacy system risks",
      solution:
        "End-to-end data encryption, granular access controls, comprehensive audit trails, and staff security training",
      results:
        "HIPAA compliance fully achieved, secure patient data management, zero data breaches reported",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["HIPAA Compliant", "0 Breaches", "Secure Data"],
      technologies: ["Encryption", "Access Controls", "Audit Trails", "HIPAA"],
    },
  ];

  const stats = [
    {
      value: "68%",
      label: "of businesses experienced cyber attacks in 2023",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      value: "$4.45M",
      label: "average cost of a data breach",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      value: "287 days",
      label: "average time to identify a breach",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "95%",
      label: "of breaches involve human error",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Protection",
      description:
        "Identify and mitigate threats before they impact your business",
      metrics: "90% faster threat detection",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description:
        "Meet industry standards and avoid costly compliance violations",
      metrics: "100% compliance assurance",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Continuity",
      description:
        "Minimize downtime and maintain operations during security incidents",
      metrics: "99.9% uptime guarantee",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Customer Trust",
      description: "Build confidence with secure data handling and protection",
      metrics: "Enhanced reputation",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Standards",
      description: "Implement internationally recognized security frameworks",
      metrics: "ISO 27001 compliant",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Response",
      description: "Quick containment and recovery from security incidents",
      metrics: "1-hour response time",
    },
  ];

  const faqs = [
    {
      question: "How often should we conduct security assessments?",
      answer:
        "We recommend quarterly vulnerability assessments and annual penetration tests. Critical systems should be tested more frequently, especially after significant changes or major updates. Continuous monitoring should be implemented for real-time threat detection.",
    },
    {
      question:
        "What's the difference between vulnerability assessment and penetration testing?",
      answer:
        "Vulnerability assessment identifies potential weaknesses through automated scanning and manual verification, while penetration testing actively exploits vulnerabilities to understand their real-world impact and test defensive capabilities. Both are essential for comprehensive security.",
    },
    {
      question: "Do small businesses need cybersecurity protection?",
      answer:
        "Absolutely. Small businesses are increasingly targeted by cybercriminals who see them as easier targets with valuable data. 43% of cyber attacks target small businesses, and 60% of small companies go out of business within six months of a cyber attack.",
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer:
        "Our incident response team can typically begin containment within 1 hour of notification for critical incidents. Response time depends on the service level agreement and incident severity. We maintain 24/7 monitoring and response capabilities for immediate threat mitigation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 to-transparent"></div>

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
                Enterprise-Grade Security
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cybersecurity{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business from evolving cyber threats with
              comprehensive, enterprise-grade security services and 24/7
              protection
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Security Demo
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
                <div className="text-red-600 flex justify-center mb-3">
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
              Cybersecurity <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection for your digital assets, infrastructure,
              and business operations
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
              Security <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-leading security tools and platforms for comprehensive
              protection
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

      {/* Threats Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Cyber <span className="text-red-600">Threats</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding and protecting against modern cybersecurity threats
              targeting businesses today
            </p>
          </motion.div>

          {/* Threat Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {threats.map((threat, index) => (
              <button
                key={index}
                onClick={() => setActiveThreat(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeThreat === index
                    ? "bg-red-600 text-white shadow-lg shadow-red-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span className="text-xl">{threat.icon}</span>
                {threat.name}
              </button>
            ))}
          </div>

          {/* Threat Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeThreat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{threats[activeThreat].icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {threats[activeThreat].name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {threats[activeThreat].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Potential Impact
                      </h4>
                      <p className="text-gray-600">
                        {threats[activeThreat].impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Prevention Strategies
                      </h4>
                      <p className="text-gray-600">
                        {threats[activeThreat].prevention}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Common Examples
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {threats[activeThreat].examples.map(
                          (example, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-medium"
                            >
                              {example}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center p-8 bg-red-50 rounded-2xl">
                    <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Risk Level: High
                    </h4>
                    <p className="text-gray-600">
                      This threat requires immediate attention and comprehensive
                      protection measures to prevent significant business
                      impact.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of{" "}
              <span className="text-blue-600">Professional Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How comprehensive cybersecurity protection transforms your
              business resilience and operational security
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
              Our Security <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, methodical approach to building robust
              cybersecurity protection
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
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <div className="text-blue-600 mb-3">{step.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
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
              Security <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of comprehensive cybersecurity protection
              delivering measurable business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">
                        Solution
                      </h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-1">
                        Results
                      </h4>
                      <p className="text-sm text-gray-600">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity <span className="text-blue-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Common questions about enterprise cybersecurity protection and
              services
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
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
              Protect your business from evolving cyber threats with our expert
              security solutions and 24/7 protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Get Security Audit
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all backdrop-blur-sm"
              >
                Download Security Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Cybersecurity;
