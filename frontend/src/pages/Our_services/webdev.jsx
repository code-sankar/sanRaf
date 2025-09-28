import React from "react";
import {
  Code,
  Globe,
  Server,
  Database,
  Layout,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart,
  Users,
  Target,
} from "lucide-react";

function WebDevelopment() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Modern, responsive websites and web applications using React, Angular, Vue.js, and more",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust server-side applications with Node.js, Python, Java, PHP, and .NET frameworks",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description:
        "SQL and NoSQL database architecture, optimization, and management",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "CMS Development",
      description:
        "Custom WordPress, Drupal, and other content management system solutions",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Progressive Web Apps",
      description:
        "Fast, reliable web apps that work offline and feel like native applications",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs for seamless integration with other systems",
    },
  ];

  const technologies = [
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "Angular", color: "bg-red-100 text-red-800" },
    { name: "Vue.js", color: "bg-green-100 text-green-800" },
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "Python", color: "bg-yellow-100 text-yellow-800" },
    { name: "PHP", color: "bg-purple-100 text-purple-800" },
    { name: "Java", color: "bg-red-100 text-red-800" },
    { name: ".NET", color: "bg-blue-100 text-blue-800" },
    { name: "MongoDB", color: "bg-green-100 text-green-800" },
    { name: "PostgreSQL", color: "bg-blue-100 text-blue-800" },
    { name: "MySQL", color: "bg-orange-100 text-orange-800" },
    { name: "AWS", color: "bg-orange-100 text-orange-800" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understand requirements, define scope, and create project roadmap",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create wireframes, prototypes, and visual designs for optimal user experience",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development with regular iterations and client feedback",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing including unit, integration, and user acceptance testing",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Smooth deployment to production environment with zero downtime",
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and performance optimization",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Development",
      industry: "Retail",
      challenge:
        "Outdated platform with poor mobile experience and slow performance",
      solution:
        "Modern React-based PWA with optimized backend and cloud infrastructure",
      results:
        "3x faster load times, 40% increase in mobile conversions, 99.9% uptime",
    },
    {
      title: "Healthcare Portal Modernization",
      industry: "Healthcare",
      challenge:
        "Complex legacy system with poor usability and security concerns",
      solution:
        "Secure Angular application with HIPAA compliance and intuitive patient portal",
      results:
        "70% reduction in support calls, enhanced security, improved patient engagement",
    },
    {
      title: "SaaS Application Scaling",
      industry: "Technology",
      challenge: "Startup experiencing rapid growth with scalability issues",
      solution:
        "Microservices architecture with Kubernetes and optimized database design",
      results:
        "Handled 10x user growth, 5x performance improvement, reduced infrastructure costs",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description:
        "Lightning-fast websites with optimized code and modern architectures",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Code",
      description:
        "Clean, maintainable code following industry best practices and standards",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Flawless experiences across all devices and screen sizes",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "SEO Optimized",
      description:
        "Search engine friendly websites that rank higher and attract more traffic",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered",
      description: "Intuitive interfaces designed with real users in mind",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs",
    },
  ];

  const projectTypes = [
    {
      type: "Corporate Websites",
      examples: [
        "Business websites",
        "Portfolio sites",
        "Landing pages",
        "Brochure sites",
      ],
    },
    {
      type: "Web Applications",
      examples: [
        "SaaS products",
        "CRM systems",
        "Project management tools",
        "Dashboards",
      ],
    },
    {
      type: "E-commerce Solutions",
      examples: [
        "Online stores",
        "Payment systems",
        "Inventory management",
        "Marketplaces",
      ],
    },
    {
      type: "Platform Development",
      examples: [
        "Social networks",
        "Learning management systems",
        "Booking platforms",
        "Community forums",
      ],
    },
  ];

  const stats = [
    {
      value: "88%",
      label: "of consumers won't return after poor user experience",
    },
    {
      value: "50%",
      label: "of mobile users abandon sites that take over 3 seconds to load",
    },
    {
      value: "75%",
      label: "of credibility comes from website design and quality",
    },
    {
      value: "3.5x",
      label: "higher conversion rates for mobile-optimized sites",
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
                <Code className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build high-performance, scalable web applications that drive
              business growth and user engagement
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-stack development solutions tailored to your specific
              business needs
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern frameworks and tools for building cutting-edge web
              solutions
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

      {/* Project Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Web Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We develop a wide range of web solutions for various business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {project.type}
                </h3>
                <ul className="space-y-2">
                  {project.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
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
              Benefits of Professional Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Why investing in quality web development delivers exceptional
              returns
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering successful web projects on
              time and within budget
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
              Web Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our web solutions transformed
              businesses
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
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a web application that exceeds
            your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our web development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How long does a typical web development project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. Simple websites take
                4-8 weeks, medium complexity web applications take 2-4 months,
                and complex enterprise solutions can take 6+ months. We provide
                detailed timelines after understanding your requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                What's the difference between frontend and backend development?
              </h3>
              <p className="text-gray-600">
                Frontend development focuses on the user interface and
                experience (what users see and interact with). Backend
                development involves server-side logic, databases, and
                application functionality (how the application works behind the
                scenes).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Do you provide ongoing maintenance after launch?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive maintenance packages including
                security updates, bug fixes, performance optimization, and
                feature enhancements. We believe in building long-term
                partnerships with our clients.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                How do you ensure website security?
              </h3>
              <p className="text-gray-600">
                We follow security best practices including regular
                vulnerability assessments, SSL encryption, secure coding
                standards, input validation, and compliance with security
                frameworks. We also conduct penetration testing before launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
