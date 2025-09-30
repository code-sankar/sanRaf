import React, { useState } from "react";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Shield,
  Zap,
  GitBranch,
  Server,
  Cpu,
  Palette,
  Terminal,
  Globe,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-10 h-10" />,
      description:
        "Modern, responsive user interfaces with exceptional user experience",
      technologies: [
        {
          name: "React",
          level: "Expert",
          projects: 45,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Angular",
          level: "Advanced",
          projects: 28,
          color: "from-red-500 to-pink-500",
        },
        {
          name: "Vue.js",
          level: "Advanced",
          projects: 32,
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "TypeScript",
          level: "Expert",
          projects: 67,
          color: "from-blue-600 to-blue-800",
        },
        {
          name: "Next.js",
          level: "Expert",
          projects: 52,
          color: "from-gray-800 to-black",
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          projects: 89,
          color: "from-teal-500 to-cyan-500",
        },
        {
          name: "Svelte",
          level: "Intermediate",
          projects: 18,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "Nuxt.js",
          level: "Advanced",
          projects: 24,
          color: "from-green-600 to-emerald-600",
        },
      ],
      features: ["SSR/SSG", "PWA", "SEO Optimization", "Performance Tuning"],
    },
    {
      category: "Backend Development",
      icon: <Database className="w-10 h-10" />,
      description: "Scalable server-side solutions and robust API development",
      technologies: [
        {
          name: "Node.js",
          level: "Expert",
          projects: 78,
          color: "from-green-600 to-green-800",
        },
        {
          name: "Python",
          level: "Expert",
          projects: 65,
          color: "from-yellow-500 to-blue-500",
        },
        {
          name: "Java",
          level: "Advanced",
          projects: 42,
          color: "from-red-600 to-orange-600",
        },
        {
          name: "Spring Boot",
          level: "Advanced",
          projects: 38,
          color: "from-green-500 to-green-700",
        },
        {
          name: ".NET",
          level: "Intermediate",
          projects: 29,
          color: "from-purple-600 to-purple-800",
        },
        {
          name: "Express.js",
          level: "Expert",
          projects: 71,
          color: "from-gray-600 to-gray-800",
        },
        {
          name: "FastAPI",
          level: "Advanced",
          projects: 33,
          color: "from-teal-600 to-green-600",
        },
        {
          name: "GraphQL",
          level: "Advanced",
          projects: 47,
          color: "from-pink-600 to-purple-600",
        },
      ],
      features: [
        "REST APIs",
        "Microservices",
        "Database Design",
        "API Security",
      ],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-10 h-10" />,
      description: "Cross-platform and native mobile applications",
      technologies: [
        {
          name: "React Native",
          level: "Expert",
          projects: 56,
          color: "from-blue-500 to-purple-600",
        },
        {
          name: "Flutter",
          level: "Advanced",
          projects: 41,
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Swift",
          level: "Intermediate",
          projects: 27,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "Kotlin",
          level: "Advanced",
          projects: 34,
          color: "from-purple-600 to-pink-600",
        },
        {
          name: "iOS",
          level: "Intermediate",
          projects: 29,
          color: "from-gray-800 to-black",
        },
        {
          name: "Android",
          level: "Advanced",
          projects: 45,
          color: "from-green-600 to-emerald-600",
        },
        {
          name: "Ionic",
          level: "Intermediate",
          projects: 22,
          color: "from-blue-600 to-indigo-600",
        },
        {
          name: "Expo",
          level: "Advanced",
          projects: 38,
          color: "from-gray-700 to-gray-900",
        },
      ],
      features: [
        "Cross-platform",
        "Native Performance",
        "App Store Deployment",
        "Offline Support",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-10 h-10" />,
      description: "Infrastructure automation and cloud-native solutions",
      technologies: [
        {
          name: "AWS",
          level: "Expert",
          projects: 63,
          color: "from-orange-500 to-yellow-500",
        },
        {
          name: "Azure",
          level: "Advanced",
          projects: 47,
          color: "from-blue-600 to-cyan-600",
        },
        {
          name: "Google Cloud",
          level: "Advanced",
          projects: 52,
          color: "from-blue-500 to-green-500",
        },
        {
          name: "Docker",
          level: "Expert",
          projects: 89,
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "Kubernetes",
          level: "Advanced",
          projects: 58,
          color: "from-blue-600 to-blue-800",
        },
        {
          name: "CI/CD",
          level: "Expert",
          projects: 74,
          color: "from-green-500 to-teal-500",
        },
        {
          name: "Terraform",
          level: "Advanced",
          projects: 41,
          color: "from-purple-600 to-pink-600",
        },
        {
          name: "Jenkins",
          level: "Intermediate",
          projects: 36,
          color: "from-red-600 to-pink-600",
        },
      ],
      features: [
        "Infrastructure as Code",
        "Auto-scaling",
        "Monitoring",
        "Disaster Recovery",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="w-10 h-10" />,
      description: "Intelligent solutions powered by artificial intelligence",
      technologies: [
        {
          name: "TensorFlow",
          level: "Advanced",
          projects: 38,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "PyTorch",
          level: "Advanced",
          projects: 42,
          color: "from-red-500 to-orange-500",
        },
        {
          name: "OpenCV",
          level: "Intermediate",
          projects: 29,
          color: "from-green-600 to-blue-600",
        },
        {
          name: "NLP",
          level: "Advanced",
          projects: 33,
          color: "from-purple-500 to-pink-500",
        },
        {
          name: "Computer Vision",
          level: "Advanced",
          projects: 31,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Data Science",
          level: "Expert",
          projects: 57,
          color: "from-indigo-500 to-purple-500",
        },
        {
          name: "Scikit-learn",
          level: "Advanced",
          projects: 45,
          color: "from-orange-600 to-yellow-600",
        },
        {
          name: "Pandas",
          level: "Expert",
          projects: 68,
          color: "from-red-500 to-purple-500",
        },
      ],
      features: [
        "Predictive Analytics",
        "Neural Networks",
        "Data Processing",
        "Model Deployment",
      ],
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="w-10 h-10" />,
      description: "Comprehensive security solutions and threat protection",
      technologies: [
        {
          name: "Pen Testing",
          level: "Advanced",
          projects: 27,
          color: "from-red-500 to-orange-500",
        },
        {
          name: "Encryption",
          level: "Expert",
          projects: 52,
          color: "from-green-600 to-blue-600",
        },
        {
          name: "Firewalls",
          level: "Advanced",
          projects: 44,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "Security Audits",
          level: "Expert",
          projects: 38,
          color: "from-purple-500 to-pink-500",
        },
        {
          name: "Compliance",
          level: "Advanced",
          projects: 41,
          color: "from-blue-600 to-cyan-600",
        },
        {
          name: "SIEM",
          level: "Intermediate",
          projects: 23,
          color: "from-gray-600 to-blue-600",
        },
        {
          name: "Vulnerability Assessment",
          level: "Advanced",
          projects: 35,
          color: "from-yellow-500 to-red-500",
        },
        {
          name: "Incident Response",
          level: "Intermediate",
          projects: 28,
          color: "from-red-600 to-pink-600",
        },
      ],
      features: [
        "Threat Detection",
        "Security Monitoring",
        "Risk Assessment",
        "Compliance Management",
      ],
    },
  ];

  const stats = [
    {
      number: "200+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    { number: "50+", label: "Technologies", icon: <Zap className="w-6 h-6" /> },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Technology Stack
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Technology</span> Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build scalable, secure, and
            high-performance solutions that drive business growth and
            innovation.
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

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {techStack.map((stack, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 shadow-md border border-gray-200"
              }`}
            >
              <span className="text-lg">{stack.icon}</span>
              {stack.category}
            </button>
          ))}
        </motion.div>

        {/* Selected Category Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  {techStack[selectedCategory].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {techStack[selectedCategory].category}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {techStack[selectedCategory].description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {techStack[selectedCategory].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack[selectedCategory].technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg`}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{tech.name}</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {tech.level}
                      </span>
                    </div>
                    <div className="text-sm opacity-90">
                      {tech.projects}+ projects
                    </div>
                    {hoveredTech?.name === tech.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-xs bg-white/20 p-2 rounded-lg"
                      >
                        Click to see case studies
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how our technology expertise can bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
              <Play className="w-4 h-4" />
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
