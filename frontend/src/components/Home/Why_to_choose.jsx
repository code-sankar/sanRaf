import { Users, Code, ShieldCheck, Rocket, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              We’re more than just developers — we’re your technology partners.
              From startups to enterprises, we deliver reliable, scalable, and
              innovative software solutions that fuel business growth.
            </p>

            <div className="space-y-8">
              {[
                {
                  Icon: Code,
                  title: "Expert Engineers",
                  desc: "A skilled team experienced in modern frameworks, cloud, and scalable architectures.",
                },
                {
                  Icon: Rocket,
                  title: "Agile & Fast Delivery",
                  desc: "We follow agile practices ensuring rapid prototyping and faster time-to-market.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Security First",
                  desc: "We build with best practices in data security, compliance, and reliability.",
                },
                {
                  Icon: Users,
                  title: "Collaborative Approach",
                  desc: "Transparent communication and continuous feedback keep you in control.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "10+", label: "Years in Tech" },
              { value: "120+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "30+", label: "Global Clients" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
