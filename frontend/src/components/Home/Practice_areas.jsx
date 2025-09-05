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
} from "lucide-react";

const Practice_areas = () => {
  const practiceAreas = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: "Web Development",
      description:
        "Building responsive, fast, and scalable web apps using modern frameworks like React, Next.js, and Node.js.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "Mobile App Development",
      description:
        "Cross-platform and native apps with seamless performance, delivering exceptional user experiences.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: "Cloud Solutions",
      description:
        "End-to-end cloud services including migration, DevOps automation, and scalable infrastructure setup.",
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Data & Analytics",
      description:
        "Turning raw data into actionable insights with AI-driven dashboards, analytics, and ML models.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-indigo-600" />,
      title: "AI & Machine Learning",
      description:
        "Custom AI solutions like chatbots, recommendation systems, and predictive analytics to boost efficiency.",
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: "UI/UX Design",
      description:
        "Crafting intuitive, user-friendly interfaces with pixel-perfect designs and delightful experiences.",
    },
    {
      icon: <Bug className="h-8 w-8 text-indigo-600" />,
      title: "QA & Testing",
      description:
        "Comprehensive manual and automated testing ensuring flawless performance and security.",
    },
    {
      icon: <Blocks className="h-8 w-8 text-indigo-600" />,
      title: "Blockchain Solutions",
      description:
        "Secure, decentralized applications and smart contracts for fintech, supply chain, and beyond.",
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: "Cybersecurity",
      description:
        "End-to-end security strategies, penetration testing, and compliance to safeguard your systems.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-2">
            What We Do Best
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we deliver tailored digital solutions
            that combine innovation, scalability, and performance.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
              <button className="group mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition-colors">
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practice_areas;
