import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Apple,
  Zap,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart,
  Download,
  Code,
  Play,
  Star,
  ChevronDown,
  ChevronUp,
  Rocket,
  Target,
  Award,
  Globe,
} from "lucide-react";

function MobileDevelopment() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [activePlatform, setActivePlatform] = useState(0);

  const services = [
    {
      icon: <Apple className="w-10 h-10" />,
      title: "iOS App Development",
      description:
        "Native iOS applications using Swift and Objective-C for seamless Apple ecosystem integration",
      features: [
        "SwiftUI & UIKit",
        "Core Data",
        "ARKit Integration",
        "App Store Deployment",
      ],
      technologies: ["Swift", "Objective-C", "Xcode", "TestFlight"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Android Development",
      description:
        "Native Android apps with Kotlin and Java for optimal performance on Google's platform",
      features: [
        "Material Design 3",
        "Jetpack Compose",
        "Room Database",
        "Google Play Deployment",
      ],
      technologies: ["Kotlin", "Java", "Android Studio", "Firebase"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1,
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Cross-Platform Development",
      description:
        "React Native and Flutter apps that work seamlessly on both iOS and Android",
      features: [
        "Single Codebase",
        "Hot Reload",
        "Native Performance",
        "Cost Efficiency",
      ],
      technologies: ["React Native", "Flutter", "Dart", "Expo"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "UI/UX Design for Mobile",
      description:
        "Mobile-first design that prioritizes thumb-friendly navigation and intuitive interactions",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "App Security",
      description:
        "Comprehensive security measures including encryption, secure APIs, and compliance",
      features: [
        "Data Encryption",
        "Biometric Auth",
        "Secure APIs",
        "Penetration Testing",
      ],
      technologies: ["SSL/TLS", "OAuth", "JWT", "Security Audits"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4,
    },
    {
      icon: <Download className="w-10 h-10" />,
      title: "App Store Optimization",
      description:
        "Maximize visibility and downloads with strategic ASO and store listing optimization",
      features: [
        "Keyword Research",
        "Store Listing",
        "Review Management",
        "Analytics",
      ],
      technologies: [
        "ASO Tools",
        "Analytics",
        "A/B Testing",
        "Store Analytics",
      ],
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.5,
    },
  ];

  const technologies = [
    { name: "Swift", color: "from-orange-500 to-red-500", icon: "⚡" },
    { name: "Kotlin", color: "from-purple-500 to-indigo-500", icon: "🅰️" },
    { name: "React Native", color: "from-blue-500 to-cyan-500", icon: "⚛️" },
    { name: "Flutter", color: "from-blue-400 to-blue-600", icon: "🎯" },
    { name: "Java", color: "from-red-500 to-orange-500", icon: "☕" },
    { name: "Objective-C", color: "from-blue-600 to-blue-800", icon: "🔷" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500", icon: "🔥" },
    { name: "Xcode", color: "from-blue-500 to-purple-500", icon: "🛠️" },
    {
      name: "Android Studio",
      color: "from-green-500 to-green-700",
      icon: "🤖",
    },
    { name: "GraphQL", color: "from-pink-500 to-purple-500", icon: "📊" },
    { name: "Redux", color: "from-purple-500 to-pink-500", icon: "🔄" },
    { name: "Fastlane", color: "from-blue-500 to-green-500", icon: "🚀" },
  ];

  const platforms = [
    {
      name: "iOS Development",
      description: "Native applications for iPhone, iPad, and Apple ecosystem",
      features: [
        "Swift & Objective-C",
        "Xcode IDE",
        "Apple Human Interface Guidelines",
        "TestFlight deployment",
        "App Store Connect",
        "ARKit & Core ML",
      ],
      icon: <Apple className="w-12 h-12" />,
      gradient: "from-blue-500 to-cyan-500",
      apps: ["Social Media", "E-commerce", "Productivity", "Games"],
    },
    {
      name: "Android Development",
      description:
        "Native applications for Android devices and Google ecosystem",
      features: [
        "Kotlin & Java",
        "Android Studio",
        "Material Design 3",
        "Google Play Console",
        "Firebase integration",
        "Google Play Services",
      ],
      icon: <Code className="w-12 h-12" />,
      gradient: "from-green-500 to-emerald-500",
      apps: ["Business Apps", "Utilities", "Entertainment", "Lifestyle"],
    },
    {
      name: "Cross-Platform",
      description: "Single codebase applications for both iOS and Android",
      features: [
        "React Native/Flutter",
        "Single codebase",
        "Faster development",
        "Consistent UI",
        "Cost-effective",
        "Hot Reload",
      ],
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500",
      apps: ["Startups", "MVP", "Enterprise", "Prototypes"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define goals, target audience, and app requirements",
      icon: <Target className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Project Scope", "User Stories", "Technical Specs"],
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create wireframes, prototypes, and visual designs",
      icon: <Users className="w-6 h-6" />,
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Prototypes", "Design System"],
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular builds and testing",
      icon: <Code className="w-6 h-6" />,
      duration: "4-12 weeks",
      deliverables: ["Weekly Builds", "Code Reviews", "Feature Demos"],
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing on multiple devices and scenarios",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"],
    },
    {
      step: "05",
      title: "Deployment",
      description: "App store submission and launch management",
      icon: <Rocket className="w-6 h-6" />,
      duration: "1-2 weeks",
      deliverables: ["App Store Submission", "Launch Plan", "Marketing Assets"],
    },
    {
      step: "06",
      title: "Maintenance & Updates",
      description: "Ongoing support, updates, and performance monitoring",
      icon: <Shield className="w-6 h-6" />,
      duration: "Ongoing",
      deliverables: ["Updates", "Analytics", "User Support"],
    },
  ];

  const caseStudies = [
    {
      title: "Fitness Tracking Application",
      industry: "Health & Fitness",
      challenge: "Poor user retention and engagement in existing fitness app",
      solution:
        "Gamified fitness app with social features and personalized workouts",
      results: "500K+ downloads, 4.8-star rating, 40% daily active users",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Apple Health Kit"],
      metrics: ["500K+ Downloads", "4.8★ Rating", "40% DAU"],
    },
    {
      title: "Restaurant Delivery Platform",
      industry: "Food & Beverage",
      challenge: "Complex ordering process causing cart abandonment",
      solution:
        "Streamlined ordering flow with one-tap reordering and real-time tracking",
      results:
        "3x faster ordering, 60% increase in completed orders, 4.9-star rating",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["Flutter", "Google Maps API", "Stripe", "Firebase"],
      metrics: ["3x Faster", "60% Growth", "4.9★ Rating"],
    },
    {
      title: "Financial Management App",
      industry: "FinTech",
      challenge: "Security concerns and complex financial data presentation",
      solution:
        "Secure banking app with intuitive data visualization and biometric authentication",
      results:
        "Zero security incidents, 90% user satisfaction, 50% reduction in support calls",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: ["Swift", "Kotlin", "Plaid API", "Biometric Auth"],
      metrics: ["100% Secure", "90% Satisfaction", "50% Less Support"],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enhanced Performance",
      description:
        "Native apps deliver faster performance and smoother animations",
      metrics: "60% faster than web apps",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Better User Engagement",
      description:
        "Mobile apps increase user engagement by 3-4x compared to websites",
      metrics: "3-4x higher engagement",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Higher Conversion Rates",
      description: "Mobile apps convert 3x better than mobile websites",
      metrics: "3x better conversion",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Improved Security",
      description:
        "Native security features and controlled app store environment",
      metrics: "Enterprise-grade security",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Offline Functionality",
      description:
        "Work without internet connection with cached data and offline modes",
      metrics: "Full offline capability",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Direct Marketing Channel",
      description: "Push notifications drive 3x higher retention than email",
      metrics: "3x higher retention",
    },
  ];

  const stats = [
    {
      value: "3.8B",
      label: "smartphone users worldwide",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "90%",
      label: "mobile time spent in apps",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: "4.2H",
      label: "average daily mobile usage",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      value: "200B+",
      label: "app downloads in 2023",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "Mobile app costs vary based on complexity, features, and platforms. Simple apps start around $15,000-$30,000, medium complexity apps range from $30,000-$70,000, and complex enterprise applications can cost $70,000+. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "Should I choose native or cross-platform development?",
      answer:
        "Native development offers better performance and user experience but requires separate codebases. Cross-platform is more cost-effective and faster to develop but may have performance limitations for complex apps. We'll recommend the best approach based on your specific needs and budget.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "Development timelines vary: simple apps take 2-4 months, medium complexity apps take 4-6 months, and complex applications can take 6+ months. This includes design, development, testing, and deployment phases. We follow agile methodology with regular releases.",
    },
    {
      question: "Do you handle app store submission and maintenance?",
      answer:
        "Yes, we provide end-to-end services including app store submission, ongoing maintenance, updates, and performance monitoring. We ensure your app stays compliant with platform guidelines and continues to perform optimally after launch.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white py-24 overflow-hidden">
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
                Award-Winning Mobile Development
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mobile{" "}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                App Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Create powerful, engaging mobile applications that connect with
              your users anywhere, anytime with exceptional performance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3"
              >
                Start Your App Project
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
              Mobile Development <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end mobile app solutions for iOS, Android, and
              cross-platform development with cutting-edge technologies
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

      {/* Platforms Section */}
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
              Development <span className="text-blue-600">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We develop for all major mobile platforms using the latest
              technologies and best practices
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => setActivePlatform(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePlatform === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${platform.gradient} text-white`}
                >
                  {platform.icon}
                </div>
                {platform.name}
              </button>
            ))}
          </div>

          {/* Platform Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {platforms[activePlatform].name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {platforms[activePlatform].description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {platforms[activePlatform].features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Ideal For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {platforms[activePlatform].apps.map((app, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full font-medium shadow-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className={`p-8 rounded-2xl bg-gradient-to-br ${platforms[activePlatform].gradient} text-white text-center shadow-2xl`}
                  >
                    <div className="text-6xl mb-4">
                      {platforms[activePlatform].icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">Best Choice For</h4>
                    <p className="text-blue-100">
                      {activePlatform === 0 &&
                        "Apple ecosystem users & premium experiences"}
                      {activePlatform === 1 &&
                        "Android users & Google services integration"}
                      {activePlatform === 2 &&
                        "Startups & cost-effective multi-platform solutions"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern frameworks and tools for building cutting-edge mobile
              applications with exceptional performance
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
              Benefits of <span className="text-blue-600">Mobile Apps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Why investing in mobile applications delivers exceptional business
              value and user engagement
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
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured, agile approach to delivering successful mobile
              applications on time and within budget
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
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-1">
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
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how our mobile solutions transformed
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
              Everything you need to know about our mobile app development
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
              Let's create a mobile experience that your users will love and
              that drives real business growth
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
                View App Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default MobileDevelopment;
