import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Rocket,
  Shield,
  Clock,
  Award,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function WebDevelopment() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Modern, responsive websites and web applications using React, Angular, Vue.js, and more",
      features: [
        "Progressive Web Apps",
        "Single Page Applications",
        "Cross-browser Compatibility",
        "Performance Optimization",
      ],
      gradient: "from-blue-500 to-cyan-500",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Robust server-side applications with Node.js, Python, Java, PHP, and .NET frameworks",
      features: [
        "RESTful APIs",
        "Microservices",
        "Authentication",
        "Serverless Architecture",
      ],
      gradient: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Python", "Java", "Spring Boot"],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design",
      description:
        "SQL and NoSQL database architecture, optimization, and management",
      features: [
        "Database Design",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery",
      ],
      gradient: "from-purple-500 to-pink-500",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "CMS Development",
      description:
        "Custom WordPress, Drupal, and other content management system solutions",
      features: [
        "Custom Themes",
        "Plugin Development",
        "Headless CMS",
        "E-commerce Integration",
      ],
      gradient: "from-orange-500 to-red-500",
      technologies: ["WordPress", "Strapi", "Contentful", "Shopify"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Progressive Web Apps",
      description:
        "Fast, reliable web apps that work offline and feel like native applications",
      features: [
        "Offline Functionality",
        "Push Notifications",
        "App-like Experience",
        "Fast Loading",
      ],
      gradient: "from-indigo-500 to-purple-500",
      technologies: ["PWA", "Service Workers", "Web App Manifest", "Caching"],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs for seamless integration with other systems",
      features: [
        "REST APIs",
        "GraphQL",
        "WebSocket",
        "Third-party Integration",
      ],
      gradient: "from-teal-500 to-cyan-500",
      technologies: ["REST", "GraphQL", "WebSocket", "OAuth"],
    },
  ];

  const technologies = [
    { name: "React", color: "from-blue-500 to-cyan-500", icon: "⚛️" },
    { name: "Angular", color: "from-red-500 to-pink-500", icon: "🅰️" },
    { name: "Vue.js", color: "from-green-500 to-emerald-500", icon: "🌐" },
    { name: "Node.js", color: "from-green-600 to-green-800", icon: "🔗" },
    { name: "Python", color: "from-yellow-500 to-blue-500", icon: "🐍" },
    { name: "PHP", color: "from-purple-500 to-indigo-500", icon: "🐘" },
    { name: "Java", color: "from-red-600 to-orange-600", icon: "☕" },
    { name: ".NET", color: "from-purple-600 to-purple-800", icon: "🔷" },
    { name: "MongoDB", color: "from-green-500 to-green-700", icon: "🍃" },
    { name: "PostgreSQL", color: "from-blue-600 to-blue-800", icon: "🐘" },
    { name: "MySQL", color: "from-orange-500 to-blue-500", icon: "🐬" },
    { name: "AWS", color: "from-orange-500 to-yellow-500", icon: "☁️" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understand requirements, define scope, and create project roadmap",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create wireframes, prototypes, and visual designs for optimal user experience",
      icon: <Layout className="w-6 h-6" />,
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development with regular iterations and client feedback",
      icon: <Code className="w-6 h-6" />,
      duration: "4-12 weeks",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing including unit, integration, and user acceptance testing",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Smooth deployment to production environment with zero downtime",
      icon: <Rocket className="w-6 h-6" />,
      duration: "1 week",
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and performance optimization",
      icon: <Shield className="w-6 h-6" />,
      duration: "Ongoing",
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
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
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
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["Angular", ".NET", "SQL Server", "Azure"],
    },
    {
      title: "SaaS Application Scaling",
      industry: "Technology",
      challenge: "Startup experiencing rapid growth with scalability issues",
      solution:
        "Microservices architecture with Kubernetes and optimized database design",
      results:
        "Handled 10x user growth, 5x performance improvement, reduced infrastructure costs",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description:
        "Lightning-fast websites with optimized code and modern architectures",
      metrics: "Load times under 2 seconds",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Code",
      description:
        "Clean, maintainable code following industry best practices and standards",
      metrics: "100% code review coverage",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Flawless experiences across all devices and screen sizes",
      metrics: "Perfect scores on mobile tests",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "SEO Optimized",
      description:
        "Search engine friendly websites that rank higher and attract more traffic",
      metrics: "90+ Google PageSpeed score",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered",
      description: "Intuitive interfaces designed with real users in mind",
      metrics: "50% higher user engagement",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs",
      metrics: "Handles 10M+ monthly users",
    },
  ];

  const stats = [
    {
      value: "88%",
      label: "of consumers won't return after poor user experience",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "50%",
      label: "of mobile users abandon sites that take over 3 seconds to load",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "75%",
      label: "of credibility comes from website design and quality",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: "3.5x",
      label: "higher conversion rates for mobile-optimized sites",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 4-8 weeks, medium complexity web applications take 2-4 months, and complex enterprise solutions can take 6+ months. We provide detailed timelines after understanding your requirements.",
    },
    {
      question:
        "What's the difference between frontend and backend development?",
      answer:
        "Frontend development focuses on the user interface and experience (what users see and interact with). Backend development involves server-side logic, databases, and application functionality (how the application works behind the scenes).",
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer:
        "Yes, we offer comprehensive maintenance packages including security updates, bug fixes, performance optimization, and feature enhancements. We believe in building long-term partnerships with our clients.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "We follow security best practices including regular vulnerability assessments, SSL encryption, secure coding standards, input validation, and compliance with security frameworks. We also conduct penetration testing before launch.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-24 overflow-hidden">
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
                Top-Rated Web Development
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Web{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Build high-performance, scalable web applications that drive
              business growth and deliver exceptional user experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Your Project
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
              Our Web Development{" "}
              <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full-stack development solutions tailored to your specific
              business needs and technical requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              Technologies We <span className="text-blue-600">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern frameworks and tools for building cutting-edge web
              solutions that stand the test of time
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
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured, agile approach to delivering successful web projects
              on time and within budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
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
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how our web solutions transformed
              businesses and delivered exceptional results
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

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our web development services
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
              Ready to Build Your Web Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
              Let's discuss your project and create a web application that
              exceeds your expectations and drives real business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all backdrop-blur-sm"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
