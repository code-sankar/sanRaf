import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TestTube,
  Bug,
  CheckCircle,
  Clock,
  Cpu,
  Zap,
  Shield,
  Users,
  BarChart,
  ArrowRight,
  Target,
  FileText,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Award,
  Database,
  Globe,
  Smartphone,
  Server,
  Code,
  Monitor,
} from "lucide-react";

function Testing() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeToolCategory, setActiveToolCategory] = useState(0);

  const services = [
    {
      icon: <TestTube className="w-10 h-10" />,
      title: "Manual Testing",
      description:
        "Comprehensive manual testing by experienced QA engineers to identify UI/UX issues and real-world scenarios",
      features: [
        "Exploratory Testing",
        "Usability Testing",
        "Ad-hoc Testing",
        "User Journey Validation",
      ],
      technologies: ["JIRA", "TestRail", "qTest", "Xray"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Automated Testing",
      description:
        "Develop and implement automated test scripts for regression testing and continuous integration",
      features: [
        "Test Automation",
        "CI/CD Integration",
        "Regression Testing",
        "API Testing",
      ],
      technologies: ["Selenium", "Cypress", "Playwright", "Jenkins"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Testing",
      description:
        "Identify vulnerabilities and security flaws through penetration testing and security assessments",
      features: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Scanning",
        "Compliance Testing",
      ],
      technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Testing",
      description:
        "Test application performance under various loads to ensure scalability and responsiveness",
      features: [
        "Load Testing",
        "Stress Testing",
        "Endurance Testing",
        "Scalability Testing",
      ],
      technologies: ["JMeter", "Gatling", "LoadRunner", "k6"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "User Acceptance Testing",
      description:
        "Validate that the system meets business requirements and user needs before deployment",
      features: [
        "UAT Planning",
        "User Scenarios",
        "Business Validation",
        "Stakeholder Sign-off",
      ],
      technologies: [
        "Test Cases",
        "User Stories",
        "Acceptance Criteria",
        "Feedback Loops",
      ],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Test Strategy & Planning",
      description:
        "Develop comprehensive test plans, cases, and strategies tailored to your project needs",
      features: [
        "Test Planning",
        "Risk Assessment",
        "Resource Planning",
        "Quality Metrics",
      ],
      technologies: [
        "Test Strategy",
        "Test Plans",
        "Quality Gates",
        "Reporting",
      ],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const methodologies = [
    { name: "Agile Testing", color: "from-green-500 to-green-700", icon: "🔄" },
    {
      name: "Waterfall Testing",
      color: "from-blue-500 to-blue-700",
      icon: "💧",
    },
    {
      name: "Exploratory Testing",
      color: "from-purple-500 to-purple-700",
      icon: "🔍",
    },
    {
      name: "Regression Testing",
      color: "from-yellow-500 to-yellow-700",
      icon: "📊",
    },
    {
      name: "Integration Testing",
      color: "from-indigo-500 to-indigo-700",
      icon: "🔗",
    },
    { name: "Unit Testing", color: "from-pink-500 to-pink-700", icon: "🧩" },
    { name: "System Testing", color: "from-red-500 to-red-700", icon: "⚙️" },
    { name: "Smoke Testing", color: "from-gray-500 to-gray-700", icon: "💨" },
    {
      name: "Sanity Testing",
      color: "from-orange-500 to-orange-700",
      icon: "🧠",
    },
    {
      name: "Accessibility Testing",
      color: "from-teal-500 to-teal-700",
      icon: "♿",
    },
    {
      name: "Compatibility Testing",
      color: "from-cyan-500 to-cyan-700",
      icon: "📱",
    },
    {
      name: "Localization Testing",
      color: "from-amber-500 to-amber-700",
      icon: "🌍",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Improved Quality",
      description:
        "Deliver higher quality software with fewer defects and enhanced user satisfaction",
      metrics: "99.8% Quality",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Faster Time-to-Market",
      description:
        "Accelerate release cycles with efficient testing processes and automation",
      metrics: "70% Faster",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Risks",
      description:
        "Identify and mitigate potential issues before they impact users and business operations",
      metrics: "90% Risk Reduction",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Cost Savings",
      description:
        "Reduce costs by finding defects early when they are least expensive to fix",
      metrics: "40% Cost Save",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced User Experience",
      description:
        "Ensure smooth, intuitive user experiences across all platforms and devices",
      metrics: "Better UX",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Release reliable products that build customer trust, loyalty, and market reputation",
      metrics: "Market Leader",
    },
  ];

  const stats = [
    {
      value: "40%",
      label: "reduction in development costs with early testing",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      value: "65%",
      label: "faster bug resolution with proper test documentation",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: "99.8%",
      label: "bug-free releases with comprehensive testing",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      value: "3-6x",
      label: "cost increase for fixing bugs in production vs. development",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const tools = [
    {
      category: "Test Automation",
      items: [
        "Selenium",
        "Cypress",
        "Playwright",
        "Appium",
        "TestCafe",
        "WebDriverIO",
      ],
      icon: <Cpu className="w-8 h-8" />,
      description:
        "Industry-leading tools for automated web and mobile testing",
    },
    {
      category: "Performance Testing",
      items: ["JMeter", "LoadRunner", "Gatling", "K6", "NeoLoad", "BlazeMeter"],
      icon: <Zap className="w-8 h-8" />,
      description: "Comprehensive performance and load testing solutions",
    },
    {
      category: "Mobile Testing",
      items: [
        "Appium",
        "Espresso",
        "XCUITest",
        "Detox",
        "Calabash",
        "Robotium",
      ],
      icon: <Smartphone className="w-8 h-8" />,
      description: "Specialized tools for iOS and Android application testing",
    },
    {
      category: "API Testing",
      items: [
        "Postman",
        "RestAssured",
        "SoapUI",
        "Karate",
        "JMeter",
        "HttpMaster",
      ],
      icon: <Server className="w-8 h-8" />,
      description: "Robust API testing and validation frameworks",
    },
    {
      category: "Test Management",
      items: ["JIRA", "TestRail", "qTest", "Zephyr", "Xray", "TestLink"],
      icon: <FileText className="w-8 h-8" />,
      description: "Complete test case management and defect tracking systems",
    },
    {
      category: "CI/CD Integration",
      items: [
        "Jenkins",
        "GitLab CI",
        "CircleCI",
        "Azure DevOps",
        "Bamboo",
        "Travis CI",
      ],
      icon: <Code className="w-8 h-8" />,
      description: "Seamless integration with continuous integration pipelines",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understand project requirements and define comprehensive test objectives and scope",
      icon: <FileText className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "Requirements Review",
        "Test Objectives",
        "Scope Definition",
      ],
    },
    {
      step: "02",
      title: "Test Planning",
      description:
        "Develop detailed test strategy, plan, and estimate resources, timeline, and risks",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Test Strategy", "Resource Plan", "Risk Assessment"],
    },
    {
      step: "03",
      title: "Test Design",
      description:
        "Create comprehensive test cases, scenarios, and prepare test data and environments",
      icon: <Code className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Test Cases", "Test Data", "Environment Setup"],
    },
    {
      step: "04",
      title: "Test Execution",
      description:
        "Execute test cases, report defects, and track progress through systematic testing cycles",
      icon: <TestTube className="w-6 h-6" />,
      duration: "3-6 weeks",
      deliverables: ["Test Reports", "Defect Logs", "Progress Metrics"],
    },
    {
      step: "05",
      title: "Defect Management",
      description:
        "Track, prioritize, and verify defect resolution through collaborative processes",
      icon: <Bug className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Defect Reports", "Resolution Tracking", "Verification"],
    },
    {
      step: "06",
      title: "Test Closure",
      description:
        "Evaluate testing process effectiveness and prepare comprehensive test summary reports",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1 week",
      deliverables: ["Test Summary", "Lessons Learned", "Quality Metrics"],
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Testing",
      industry: "Retail",
      challenge:
        "Critical bugs in checkout process causing 25% cart abandonment and revenue loss during peak seasons",
      solution:
        "Comprehensive test automation suite with 500+ test cases, performance testing for peak loads, and security testing for payment processing",
      results:
        "99.8% bug-free releases, 70% faster testing cycle time, 40% reduction in production issues, and increased customer satisfaction scores",
      metrics: ["99.8% Bug-Free", "70% Faster", "40% Fewer Issues"],
      technologies: ["Selenium", "JMeter", "OWASP ZAP", "TestRail"],
    },
    {
      title: "Healthcare Application Validation",
      industry: "Healthcare",
      challenge:
        "Strict HIPAA compliance requirements and data accuracy critical for patient safety and regulatory approval",
      solution:
        "Rigorous manual and automated testing with detailed audit trails, compliance documentation, and data validation protocols",
      results:
        "100% compliance with HIPAA regulations, zero data accuracy issues in production, successful FDA audit, and enhanced patient trust",
      metrics: ["100% Compliance", "Zero Data Issues", "FDA Approved"],
      technologies: [
        "Manual Testing",
        "TestRail",
        "Compliance Tools",
        "Security Scanners",
      ],
    },
    {
      title: "Financial Trading Platform",
      industry: "Finance",
      challenge:
        "High-frequency trading system requiring millisecond response times and 100% reliability with zero tolerance for financial discrepancies",
      solution:
        "Performance and load testing simulating peak trading volumes, failure scenario testing, and comprehensive security validation",
      results:
        "99.999% system uptime, consistent sub-10ms response times, zero financial discrepancies in production, and regulatory compliance",
      metrics: ["99.999% Uptime", "Sub-10ms Response", "Zero Errors"],
      technologies: ["Gatling", "LoadRunner", "Security Tools", "Monitoring"],
    },
  ];

  const faqs = [
    {
      question: "When should testing begin in the development process?",
      answer:
        "Testing should begin as early as possible in the requirements phase. We advocate for a shift-left approach where testing activities start during requirements analysis and design. Early testing helps identify issues when they are least expensive to fix, reduces overall development costs by up to 40%, and ensures quality is built into the product from the beginning rather than being inspected at the end.",
    },
    {
      question: "What's the difference between manual and automated testing?",
      answer:
        "Manual testing involves human testers executing test cases and exploring the application, making it ideal for usability testing, exploratory testing, and ad-hoc scenarios. Automated testing uses scripts and tools to execute tests, making it perfect for regression testing, load testing, and repetitive test cases. We recommend a balanced approach: manual testing for user experience and complex scenarios, and automation for regression and performance testing to maximize efficiency and coverage.",
    },
    {
      question: "How do you determine what to automate?",
      answer:
        "We prioritize test cases for automation based on several factors: frequency of execution (high-frequency tests are automated first), business criticality (core functionality gets priority), test complexity and stability, and return on investment. Typically, we automate smoke tests, regression test suites, data-driven tests, and performance tests. Manual testing is reserved for exploratory testing, usability testing, and tests that require human judgment and observation.",
    },
    {
      question: "What metrics do you use to measure testing effectiveness?",
      answer:
        "We track both quantitative and qualitative metrics including defect density, test coverage percentage, escape defect rate, test case effectiveness, automation percentage, and mean time to detect/resolve defects. However, we focus on actionable metrics that directly relate to software quality and business outcomes rather than vanity metrics. Our reporting includes trend analysis, risk assessment, and recommendations for continuous improvement of the testing process.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-blue-800 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600/20 to-transparent"></div>

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
              <span className="text-sm font-medium">Quality Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent">
                QA & Testing
              </span>{" "}
              Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ensure software quality, reliability, and performance with our
              comprehensive testing solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Quality Assurance
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View Testing Demo
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
                <div className="text-green-600 flex justify-center mb-3">
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
              Testing <span className="text-green-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive quality assurance solutions for all your software
              testing needs
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-green-200 h-full flex flex-col"
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
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
                      className="mt-auto flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
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
              Testing <span className="text-green-600">Methodologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proven testing approaches tailored to your development methodology
              and project needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${methodology.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-2xl mb-2">{methodology.icon}</div>
                <div className="font-semibold text-sm">{methodology.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Testing Tools &{" "}
              <span className="text-green-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-leading tools for comprehensive test automation and
              quality management
            </p>
          </motion.div>

          {/* Tool Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tools.map((tool, index) => (
              <button
                key={index}
                onClick={() => setActiveToolCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeToolCategory === index
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                {tool.icon}
                {tool.category}
              </button>
            ))}
          </div>

          {/* Tool Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeToolCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-green-600">
                  {tools[activeToolCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tools[activeToolCategory].category}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {tools[activeToolCategory].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools[activeToolCategory].items.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                  >
                    <div className="font-medium text-gray-900">{tool}</div>
                  </motion.div>
                ))}
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
              <span className="text-green-600">Professional Testing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How comprehensive testing transforms your software development
              process and business outcomes
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
                <div className="text-green-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Testing <span className="text-green-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured approach to delivering comprehensive quality
              assurance and testing excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
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
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-green-600">{step.icon}</div>
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
              Testing <span className="text-green-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how comprehensive testing delivered
              significant business value and quality improvements
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
                    ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
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
                    <div className="text-4xl">🏆</div>
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
                              className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
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
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      Results Achieved
                    </h4>
                    <div className="space-y-3">
                      {caseStudies[activeCaseStudy].metrics.map(
                        (metric, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {metric}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-6">
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              QA & Testing <span className="text-green-600">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about software testing, quality assurance, and
              our testing methodologies
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
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-green-900 via-blue-800 to-teal-900 text-white">
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
                Ready to Ensure Quality?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent">
                Quality Journey
              </span>{" "}
              Today
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Let our QA experts help you deliver flawless software that exceeds
              user expectations and drives business success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-2xl flex items-center gap-3"
              >
                <Award className="w-5 h-5" />
                Get QA Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Download Testing Guide
              </motion.button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-green-200 flex items-center justify-center gap-2"
            >
              <TestTube className="w-4 h-4" />
              No commitment required • Free quality assessment
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Testing;
