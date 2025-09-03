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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Hear from our partners about how we transformed their digital
            presence and helped scale their businesses through innovative
            software solutions.
          </p>
        </div>

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
              whileHover={{ scale: 1.03 }}
              className="bg-blue-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-yellow-400 mb-4 text-lg">
                {"★".repeat(5)}
              </div>
              <p className="italic text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-blue-700 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                {testimonial.company && (
                  <p className="text-blue-300 text-sm">{testimonial.company}</p>
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
