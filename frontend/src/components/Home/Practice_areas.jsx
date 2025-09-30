import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cloud,
  Smartphone,
  Lock,
  Database,
  BrainCircuit,
  Palette,
  Bug,
  Blocks,
  Zap,
  Star,
  CheckCircle,
  Rocket,
  Users,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Practice_areas = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const practiceAreas = [
    {
      icon: <Code2 className="h-10 w-10" />,
      title: "Web Development",
      path: "/web",
      description: "Building responsive, fast, and scalable web applications using modern frameworks like React, Next.js, and Node.js.",
      features: ["Progressive Web Apps", "SEO Optimization", "Performance Tuning", "API Integration"],
      projects: 45,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development",
      path: "/apps",
      description: "Cross-platform and native apps with seamless performance, delivering exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      projects: 32,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.1
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      path: "/cloud",
      description: "End-to-end cloud services including migration, DevOps automation, and scalable infrastructure setup.",
      features: ["AWS/Azure/GCP", "Microservices", "Containerization", "Auto-scaling"],
      projects: 28,
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data & Analytics",
      path: "/analytics",
      description: "Turning raw data into actionable insights with AI-driven dashboards, analytics, and ML models.",
      features: ["Big Data Processing", "Real-time Analytics", "Business Intelligence", "Data Visualization"],
      projects: 36,
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: <BrainCircuit className="h-10 w-10" />,
      title: "AI & Machine Learning",
      path: "/ai",
      description: "Custom AI solutions like chatbots, recommendation systems, and predictive analytics to boost efficiency.",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Models", "AI Integration"],
      projects: 24,
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      path: "/design",
      description: "Crafting intuitive, user-friendly interfaces with pixel-perfect designs and delightful experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      projects: 52,
      gradient: "from-pink-500 to-rose-500",
      delay: 0.5
    },
    {
      icon: <Bug className="h-10 w-10" />,
      title: "QA & Testing",
      path: "/testing",
      description: "Comprehensive manual and automated testing ensuring flawless performance and security.",
      features: ["Automated Testing", "Security Audits", "Performance Testing", "Quality Assurance"],
      projects: 41,
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.6
    },
    {
      icon: <Blocks className="h-10 w-10" />,
      title: "Blockchain Solutions",
      path: "/blockchain",
      description: "Secure, decentralized applications and smart contracts for fintech, supply chain, and beyond.",
      features: ["Smart Contracts", "DApp Development", "Tokenization", "Web3 Integration"],
      projects: 18,
      gradient: "from-amber-500 to-yellow-500",
      delay: 0.7
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Cybersecurity",
      path: "/cybersecurity",
      description: "End-to-end security strategies, penetration testing, and compliance to safeguard your systems.",
      features: ["Security Audits", "Threat Detection", "Encryption", "Compliance"],
      projects: 29,
      gradient: "from-red-500 to-orange-500",
      delay: 0.8
    },
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Rocket className="h-6 w-6" /> },
    { number: "50+", label: "Technologies", icon: <Zap className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Star className="h-6 w-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Users className="h-6 w-6" /> },
  ];

  const handleLearnMore = (path) => {
    navigate(path);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-blue-600">Development</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we deliver tailored digital solutions that combine 
            innovation, scalability, and exceptional performance to drive your business forward.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: area.delay }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200 h-full flex flex-col cursor-pointer"
                onClick={() => handleLearnMore(area.path)}
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${area.gradient}`} />
                
                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}>
                      {area.icon}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: area.delay + 0.2 }}
                      className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full"
                    >
                      <Target className="h-3 w-3 text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{area.projects}+ projects</span>
                    </motion.div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {area.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {area.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {area.features.length > 2 && (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm text-gray-500">
                          +{area.features.length - 2} more features
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="group mt-auto flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(area.path);
                    }}
                  >
                    Explore Service
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive development services can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                onClick={() => handleLearnMore('/contact')}
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                onClick={() => handleLearnMore('/portfolio')}
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Practice_areas;