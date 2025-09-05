import { Users, Code, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-blue-950 to-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Section */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Why Partner With{" "}
              <span className="text-blue-400">Our Team?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              We are not just developers — we are{" "}
              <span className="font-semibold text-white">
                innovation partners
              </span>
              . From disruptive startups to global enterprises, we deliver{" "}
              <span className="font-semibold text-white">
                reliable, scalable, and cutting-edge
              </span>{" "}
              software solutions that drive growth and success.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {[
                {
                  Icon: Code,
                  title: "Expert Engineers",
                  desc: "Our team masters modern frameworks, cloud-native apps, and scalable architectures.",
                },
                {
                  Icon: Rocket,
                  title: "Agile & Rapid Delivery",
                  desc: "Iterative development with clear sprints ensures faster time-to-market.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Security-Driven",
                  desc: "We prioritize security, compliance, and reliability in every project we build.",
                },
                {
                  Icon: Users,
                  title: "Collaborative Approach",
                  desc: "Open communication, transparency, and feedback cycles keep you in control.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-5 group"
                >
                  <div className="bg-blue-500/20 p-4 rounded-2xl shadow-md group-hover:bg-blue-500 transition duration-300">
                    <Icon className="h-6 w-6 text-blue-400 group-hover:text-white transition" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8"
            variants={container}
          >
            {[
              { value: "10+", label: "Years in Tech" },
              { value: "120+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "30+", label: "Global Clients" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
                className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md cursor-pointer transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-medium text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
