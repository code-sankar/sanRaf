import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Layout,
  Users,
  Eye,
  Code,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart,
  Heart,
  Target,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Award,
  Globe,
  Sparkles,
} from "lucide-react";

function UIUXDesign() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeProcess, setActiveProcess] = useState(0);

  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "User Interface Design",
      description:
        "Create visually appealing and intuitive interfaces that enhance user experience and engagement",
      features: ["Visual Design", "Typography", "Color Systems", "Iconography"],
      technologies: ["Figma", "Sketch", "Adobe XD", "Design Systems"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0,
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "User Research",
      description:
        "Understand your users through interviews, surveys, and usability testing to inform design decisions",
      features: [
        "User Interviews",
        "Surveys",
        "Persona Development",
        "Journey Mapping",
      ],
      technologies: ["Miro", "UserTesting", "Hotjar", "Analytics"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Wireframing & Prototyping",
      description:
        "Develop interactive prototypes to visualize and test concepts before development",
      features: [
        "Low-Fidelity Wireframes",
        "High-Fidelity Prototypes",
        "Interactive Flows",
        "User Testing",
      ],
      technologies: ["Figma", "InVision", "Proto.io", "Framer"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Usability Testing",
      description:
        "Validate designs with real users to identify pain points and improvement opportunities",
      features: ["Remote Testing", "A/B Testing", "Heatmaps", "User Feedback"],
      technologies: ["UserTesting", "Lookback", "Hotjar", "Optimizely"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Design Systems",
      description:
        "Create consistent, scalable design systems with reusable components and guidelines",
      features: [
        "Component Libraries",
        "Style Guides",
        "Design Tokens",
        "Documentation",
      ],
      technologies: ["Figma", "Storybook", "Zeroheight", "Notion"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Responsive Design",
      description:
        "Ensure seamless experiences across all devices and screen sizes",
      features: [
        "Mobile-First Design",
        "Breakpoint Systems",
        "Touch Optimization",
        "Performance",
      ],
      technologies: ["Figma", "BrowserStack", "Lighthouse", "Core Web Vitals"],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const tools = [
    { name: "Figma", color: "from-purple-500 to-pink-500", icon: "🎨" },
    { name: "Sketch", color: "from-yellow-500 to-orange-500", icon: "✏️" },
    { name: "Adobe XD", color: "from-pink-500 to-purple-500", icon: "🔄" },
    { name: "InVision", color: "from-blue-500 to-cyan-500", icon: "👁️" },
    { name: "Axure", color: "from-red-500 to-orange-500", icon: "📊" },
    { name: "Balsamiq", color: "from-gray-500 to-gray-700", icon: "📝" },
    { name: "Marvel", color: "from-red-500 to-pink-500", icon: "⚡" },
    { name: "Proto.io", color: "from-blue-400 to-blue-600", icon: "🎯" },
    { name: "Framer", color: "from-pink-500 to-red-500", icon: "🚀" },
    { name: "Zeplin", color: "from-teal-500 to-green-500", icon: "🎨" },
    { name: "Miro", color: "from-yellow-400 to-orange-500", icon: "🔄" },
    { name: "Whimsical", color: "from-green-500 to-teal-500", icon: "💡" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      description:
        "Research and understand user needs, business goals, and market landscape",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "Research Reports",
        "User Personas",
        "Competitive Analysis",
      ],
      activities: [
        "User Interviews",
        "Market Research",
        "Stakeholder Workshops",
      ],
    },
    {
      step: "02",
      title: "Define",
      description:
        "Synthesize research findings and define user personas and journey maps",
      icon: <Users className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: [
        "User Journeys",
        "Problem Statements",
        "Design Principles",
      ],
      activities: [
        "Journey Mapping",
        "Persona Development",
        "Information Architecture",
      ],
    },
    {
      step: "03",
      title: "Ideate",
      description:
        "Generate creative solutions through brainstorming and design workshops",
      icon: <Sparkles className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Concept Sketches", "User Flows", "Solution Concepts"],
      activities: ["Brainstorming", "Design Sprints", "Concept Testing"],
    },
    {
      step: "04",
      title: "Prototype",
      description:
        "Create interactive prototypes to visualize and test design concepts",
      icon: <Layout className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Interactive Prototypes", "Wireframes", "Design Mockups"],
      activities: ["Wireframing", "Prototyping", "Visual Design"],
    },
    {
      step: "05",
      title: "Test",
      description:
        "Validate designs with real users and gather feedback for iteration",
      icon: <Eye className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Usability Reports", "Design Iterations", "Final Designs"],
      activities: ["User Testing", "A/B Testing", "Feedback Synthesis"],
    },
    {
      step: "06",
      title: "Implement",
      description:
        "Deliver developer-ready designs with specifications and assets",
      icon: <Code className="w-6 h-6" />,
      duration: "1 week",
      deliverables: ["Design Systems", "Developer Handoff", "Style Guides"],
      activities: [
        "Asset Export",
        "Spec Documentation",
        "Developer Collaboration",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Increased Conversion",
      description:
        "Well-designed interfaces can increase conversion rates by up to 200%",
      metrics: "Up to 200% higher conversion",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Enhanced User Satisfaction",
      description:
        "Intuitive designs lead to higher user satisfaction and loyalty",
      metrics: "90%+ user satisfaction",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Reduced Development Costs",
      description:
        "Identifying issues early saves up to 50% of development rework costs",
      metrics: "50% cost reduction",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Improved Usability",
      description:
        "User-centered design reduces learning curves and support requests",
      metrics: "75% fewer support calls",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Advantage",
      description:
        "Superior user experiences differentiate your product in the market",
      metrics: "Market leadership",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Higher ROI",
      description: "Every $1 invested in UX brings $100 return on average",
      metrics: "100:1 ROI",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      industry: "Retail",
      challenge: "High cart abandonment rate and poor mobile experience",
      solution:
        "Complete UX overhaul with streamlined checkout and mobile-first design",
      results:
        "42% increase in conversions, 67% faster mobile completion, 5-star app store rating",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["42% Conversions", "67% Faster", "5★ Rating"],
      technologies: ["Figma", "UserTesting", "Hotjar"],
    },
    {
      title: "Healthcare App Transformation",
      industry: "Healthcare",
      challenge: "Complex navigation causing user frustration and errors",
      solution: "Intuitive information architecture and simplified user flows",
      results:
        "75% reduction in support calls, 90% task completion rate, improved patient outcomes",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["75% Less Support", "90% Completion", "Better Outcomes"],
      technologies: ["Sketch", "InVision", "Miro"],
    },
    {
      title: "SaaS Dashboard Modernization",
      industry: "Technology",
      challenge: "Outdated interface with low user engagement",
      solution:
        "Modern UI design with personalized dashboards and actionable insights",
      results:
        "3x increase in daily active users, 58% longer session duration, premium upgrades",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      metrics: ["3x DAU", "58% Longer", "More Upgrades"],
      technologies: ["Figma", "Proto.io", "Analytics"],
    },
  ];

  const designPrinciples = [
    {
      title: "User-Centered",
      description: "We prioritize user needs and behaviors above all else",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Consistency",
      description:
        "Maintain visual and functional consistency across all touchpoints",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Accessibility",
      description:
        "Design for all users, regardless of abilities or disabilities",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Simplicity",
      description:
        "Remove unnecessary complexity and focus on essential elements",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Feedback",
      description: "Provide clear feedback for user actions and system status",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Flexibility",
      description:
        "Create designs that adapt to different contexts and user preferences",
      icon: <Palette className="w-6 h-6" />,
    },
  ];

  const stats = [
    {
      value: "94%",
      label: "of first impressions are design-related",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      value: "88%",
      label: "users less likely to return after bad experience",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "75%",
      label: "of credibility comes from website design",
      icon: <Award className="w-6 h-6" />,
    },
    {
      value: "10-20x",
      label: "more expensive to fix issues after development",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "What's the difference between UI and UX design?",
      answer:
        "UI (User Interface) design focuses on the visual aspects - colors, typography, spacing, and interactive elements. UX (User Experience) design focuses on the overall feel and functionality - user flows, information architecture, and usability. Both are essential for creating successful products.",
    },
    {
      question: "How long does a typical UI/UX project take?",
      answer:
        "Project timelines vary based on complexity, but typically range from 4-12 weeks. Simple projects might take 2-4 weeks, while complex enterprise applications can take 3-6 months. We provide detailed timelines after understanding your specific requirements.",
    },
    {
      question: "Do you provide design assets for development?",
      answer:
        "Yes, we deliver comprehensive design packages including style guides, component libraries, responsive layouts, and developer handoff documents. We use tools like Figma that provide developers with exact measurements, colors, and assets needed for implementation.",
    },
    {
      question: "How do you measure the success of UX design?",
      answer:
        "We measure success through key metrics like task completion rates, error rates, time on task, user satisfaction scores (SUS), conversion rates, and retention rates. We also conduct usability testing to gather qualitative feedback and identify improvement opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-600/20 to-transparent"></div>

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
                Award-Winning Design Team
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              UI/UX{" "}
              <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                Design
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Create exceptional digital experiences that delight users, drive
              engagement, and deliver measurable business results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Your Design Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                View Design Portfolio
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
                <div className="text-purple-600 flex justify-center mb-3">
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
              UI/UX Design <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end design solutions that transform user experiences and
              deliver exceptional business outcomes
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-purple-200 h-full flex flex-col"
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
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
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
                      className="mt-auto flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
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
              Design{" "}
              <span className="text-purple-600">Tools & Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading tools to create exceptional, pixel-perfect
              user experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${tool.color} text-white p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-semibold text-sm">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Design <span className="text-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A user-centered, iterative approach that delivers exceptional
              results at every stage
            </p>
          </motion.div>

          {/* Process Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProcess === index
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                {step.title}
              </button>
            ))}
          </div>

          {/* Process Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcess}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {processSteps[activeProcess].step}
                    </div>
                    <div className="text-purple-600">
                      {processSteps[activeProcess].icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {processSteps[activeProcess].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {processSteps[activeProcess].description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Activities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[activeProcess].activities.map(
                          (activity, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                            >
                              {activity}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[activeProcess].deliverables.map(
                          (deliverable, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                            >
                              {deliverable}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 text-purple-600">
                      {processSteps[activeProcess].icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">
                      Duration: {processSteps[activeProcess].duration}
                    </div>
                    <p className="text-gray-600">
                      This phase focuses on{" "}
                      {processSteps[activeProcess].title.toLowerCase()} to
                      ensure we build the right solution for your users.
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
              Benefits of <span className="text-purple-600">Great Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How exceptional UI/UX design transforms user experiences and
              delivers measurable business value
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
                <div className="text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                  {benefit.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Design <span className="text-purple-600">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The foundation of every exceptional user experience we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-purple-600 group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
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
              Design <span className="text-purple-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how exceptional design transformed user
              experiences and business outcomes
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
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our UI/UX design services
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100 leading-relaxed">
              Let our design experts create experiences that delight your users
              and drive measurable business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Design Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all backdrop-blur-sm"
              >
                View Design Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default UIUXDesign;
