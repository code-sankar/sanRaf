import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Smartphone, Lock, Database } from "lucide-react";

const Practice_areas = () => {
  const practiceAreas = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: "Web Development",
      description:
        "Building fast, scalable, and modern websites using the latest technologies.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "Mobile App Development",
      description:
        "Cross-platform and native apps designed for performance and great UX.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: "Cloud Solutions",
      description:
        "Seamless cloud migration, DevOps, and scalable infrastructure services.",
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Data & Analytics",
      description:
        "Harnessing data for smarter decisions with analytics and AI solutions.",
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: "Cybersecurity",
      description:
        "Protecting your digital assets with secure systems and threat prevention.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We help businesses grow by providing cutting-edge software solutions,
            from web and mobile development to cloud and cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-indigo-100">
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
