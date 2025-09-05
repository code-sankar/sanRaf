import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The team built our e-commerce platform with flawless performance and a stunning UI. Sales grew by 60% in just 3 months.",
      author: "Arjun Mehta",
      company: "Trendify Stores",
    },
    {
      quote:
        "They delivered our custom SaaS product on time with zero downtime. Their expertise in scaling applications is top-notch.",
      author: "Sophia Williams",
      company: "CloudCore Solutions",
    },
    {
      quote:
        "From mobile app development to backend integration, they handled everything with professionalism and innovation.",
      author: "Ravi Sharma",
      company: "FitLife Wellness",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Decorative Glow Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Trusted by businesses worldwide — hear from our partners about how
            we transformed their digital presence and helped scale their
            success.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
              }}
              className="bg-black/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <motion.div
                className="text-yellow-400 mb-5 text-lg flex gap-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                {"★"
                  .repeat(5)
                  .split("")
                  .map((star, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {star}
                    </motion.span>
                  ))}
              </motion.div>

              {/* Quote */}
              <p className="italic text-base sm:text-lg leading-relaxed mb-6 text-gray-200">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white text-sm sm:text-base">
                  {testimonial.author}
                </p>
                {testimonial.company && (
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.company}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
