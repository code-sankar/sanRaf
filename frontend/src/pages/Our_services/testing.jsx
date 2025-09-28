import React from "react";
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
} from "lucide-react";

function Testing() {
  const services = [
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Manual Testing",
      description:
        "Comprehensive manual testing by experienced QA engineers to identify UI/UX issues and real-world scenarios",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automated Testing",
      description:
        "Develop and implement automated test scripts for regression testing and continuous integration",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Testing",
      description:
        "Identify vulnerabilities and security flaws through penetration testing and security assessments",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Testing",
      description:
        "Test application performance under various loads to ensure scalability and responsiveness",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Acceptance Testing",
      description:
        "Validate that the system meets business requirements and user needs before deployment",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Test Strategy & Planning",
      description:
        "Develop comprehensive test plans, cases, and strategies tailored to your project needs",
    },
  ];

  const methodologies = [
    { name: "Agile Testing", color: "bg-green-100 text-green-800" },
    { name: "Waterfall Testing", color: "bg-blue-100 text-blue-800" },
    { name: "Exploratory Testing", color: "bg-purple-100 text-purple-800" },
    { name: "Regression Testing", color: "bg-yellow-100 text-yellow-800" },
    { name: "Integration Testing", color: "bg-indigo-100 text-indigo-800" },
    { name: "Unit Testing", color: "bg-pink-100 text-pink-800" },
    { name: "System Testing", color: "bg-red-100 text-red-800" },
    { name: "Smoke Testing", color: "bg-gray-100 text-gray-800" },
    { name: "Sanity Testing", color: "bg-orange-100 text-orange-800" },
    { name: "Accessibility Testing", color: "bg-teal-100 text-teal-800" },
    { name: "Compatibility Testing", color: "bg-cyan-100 text-cyan-800" },
    { name: "Localization Testing", color: "bg-amber-100 text-amber-800" },
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
    },
    {
      category: "Performance Testing",
      items: ["JMeter", "LoadRunner", "Gatling", "K6", "NeoLoad", "BlazeMeter"],
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
    },
    {
      category: "Test Management",
      items: ["JIRA", "TestRail", "qTest", "Zephyr", "Xray", "TestLink"],
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
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understand project requirements and define test objectives",
    },
    {
      step: "02",
      title: "Test Planning",
      description:
        "Develop test strategy, plan, and estimate resources and timeline",
    },
    {
      step: "03",
      title: "Test Design",
      description: "Create test cases, scenarios, and prepare test data",
    },
    {
      step: "04",
      title: "Test Environment Setup",
      description: "Configure testing environments and test data",
    },
    {
      step: "05",
      title: "Test Execution",
      description: "Execute test cases and report defects",
    },
    {
      step: "06",
      title: "Test Closure",
      description: "Evaluate testing process and prepare test summary reports",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Testing",
      industry: "Retail",
      challenge: "Critical bugs in checkout process causing cart abandonment",
      solution:
        "Comprehensive test automation suite with 500+ test cases covering all user flows",
      results:
        "99.8% bug-free releases, 70% faster testing cycle, 40% reduction in production issues",
    },
    {
      title: "Healthcare Application Validation",
      industry: "Healthcare",
      challenge:
        "Strict compliance requirements and data accuracy critical for patient safety",
      solution:
        "Rigorous manual and automated testing with detailed audit trails and compliance documentation",
      results:
        "100% compliance with HIPAA regulations, zero data accuracy issues, successful FDA audit",
    },
    {
      title: "Financial Trading Platform",
      industry: "Finance",
      challenge:
        "High-frequency trading system requiring millisecond response times and 100% reliability",
      solution:
        "Performance and load testing simulating peak trading volumes with failure scenario testing",
      results:
        "99.999% uptime, sub-10ms response times, zero financial discrepancies in production",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Improved Quality",
      description:
        "Deliver higher quality software with fewer defects and issues",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Faster Time-to-Market",
      description: "Accelerate release cycles with efficient testing processes",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Risks",
      description:
        "Identify and mitigate potential issues before they impact users",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Cost Savings",
      description:
        "Reduce costs by finding defects early in the development cycle",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced User Experience",
      description:
        "Ensure smooth, intuitive user experiences across all platforms",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Release reliable products that build customer trust and loyalty",
    },
  ];

  const stats = [
    {
      value: "40%",
      label: "reduction in development costs with early testing",
    },
    {
      value: "65%",
      label: "faster bug resolution with proper test documentation",
    },
    {
      value: "90%",
      label: "of users would abandon an app due to poor performance",
    },
    {
      value: "3-6x",
      label: "cost increase for fixing bugs in production vs. development",
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
                <TestTube className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              QA & Testing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ensure software quality, reliability, and performance with our
              comprehensive testing solutions
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Quality Assurance
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive quality assurance solutions for all your software
              testing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group border border-gray-100"
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

      {/* Methodologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven testing approaches tailored to your development methodology
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {methodologies.map((methodology, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${methodology.color}`}
              >
                {methodology.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools for comprehensive test automation and
              management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((toolCategory, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {toolCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How comprehensive testing transforms your software development
              process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 mb-4 mx-auto">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering comprehensive quality
              assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how comprehensive testing delivered
              business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
            Ready to Ensure Software Quality?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our QA experts help you deliver flawless software that exceeds
            user expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get QA Assessment
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Download Testing Guide
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              QA & Testing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about software testing and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                When should testing begin in the development process?
              </h3>
              <p className="text-gray-600">
                Testing should begin as early as possible in the requirements
                phase. Early testing (shift-left approach) helps identify issues
                when they are least expensive to fix and reduces overall
                development costs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                What's the difference between manual and automated testing?
              </h3>
              <p className="text-gray-600">
                Manual testing involves human testers executing test cases,
                while automated testing uses scripts and tools. Manual is better
                for exploratory, usability, and ad-hoc testing, while automation
                excels at regression, load, and repetitive tests.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How do you determine what to automate?
              </h3>
              <p className="text-gray-600">
                We prioritize test cases based on frequency of execution,
                business criticality, complexity, and stability of the feature.
                Repetitive tests, smoke tests, and regression tests are
                typically good candidates for automation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                What metrics do you use to measure testing effectiveness?
              </h3>
              <p className="text-gray-600">
                We track metrics like defect density, test coverage, escape
                defects, test case effectiveness, and automation percentage.
                However, we focus on actionable metrics that directly relate to
                software quality and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testing;
