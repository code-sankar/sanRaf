import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Globe, Rocket } from "lucide-react";

const backgroundImages = [
  "https://appinventiv.com/wp-content/uploads/2022/06/The-Ultimate-Guide-to-Software-Development-05-scaled.webp",
  "https://softjourn.com/media/ArticlesMN/frontendaudit/frontend1.jpg",
  "https://softjourn.com/media/ArticlesMN/modsoftdev/6.jpg",
  "https://duws858oznvmq.cloudfront.net/Skills_required_for_software_developer_a00b1d42b0.webp",
];

const Hero_section = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={backgroundImages[currentImage]}
            src={backgroundImages[currentImage]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center h-full">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Building <span className="text-blue-300">Innovative Software</span>{" "}
              & Scalable Web Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl">
              We design and develop modern web apps, mobile solutions, and cloud
              platforms that empower businesses worldwide. Your digital
              transformation starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition-all shadow-lg flex items-center gap-2">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border-2 border-white text-white hover:bg-blue-800 px-6 py-3 rounded-md font-semibold transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated Panel with Highlights */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative w-full max-w-md"
          >
            {/* Glass effect panel */}
            <div className="w-full h-76 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-lg shadow-xl" />

            {/* Floating highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 w-[280px] space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">100+ Projects</p>
                  <p className="text-sm text-gray-600">Delivered Worldwide</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">50+ Clients</p>
                  <p className="text-sm text-gray-600">Across 10+ Countries</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Rocket className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">5+ Years</p>
                  <p className="text-sm text-gray-600">Of Innovation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;
