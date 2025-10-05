import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code,
  Globe,
  Rocket,
  Star,
  Zap,
  Shield,
  Play,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
];

const Hero_section = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stats = [
    {
      icon: <Code className="h-5 w-5" />,
      number: "200+",
      label: "Projects Delivered",
      suffix: "",
    },
    {
      icon: <Users className="h-5 w-5" />,
      number: "50+",
      label: "Happy Clients",
      suffix: "",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      number: "15+",
      label: "Countries Served",
      suffix: "",
    },
    {
      icon: <Award className="h-5 w-5" />,
      number: "5",
      label: "Years of Excellence",
      suffix: "+",
    },
  ];

  const features = [
    {
      text: "Software development",
      icon: <CheckCircle className="h-4 w-4" />,
    },
    { text: "24/7 support", icon: <CheckCircle className="h-4 w-4" /> },
    { text: "Agile methodology", icon: <CheckCircle className="h-4 w-4" /> },
    { text: "Quality assurance", icon: <CheckCircle className="h-4 w-4" /> },
  ];

  const floatingIcons = [
    {
      icon: <Zap className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      delay: 0,
    },
    {
      icon: <Shield className="h-7 w-7" />,
      color: "from-green-400 to-emerald-600",
      delay: 0.5,
    },
    {
      icon: <Star className="h-6 w-6" />,
      color: "from-purple-400 to-pink-600",
      delay: 1,
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      color: "from-blue-400 to-cyan-600",
      delay: 1.5,
    },
  ];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow with Controls */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={backgroundImages[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img
              src={backgroundImages[currentImage]}
              className="w-full h-full object-cover"
              alt="Software Development"
            />
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/70 to-purple-900/60" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300/5 to-blue-300/10" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
        </div>

        {/* Slideshow Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
          <div className="flex gap-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImage(index);
                  setIsPlaying(false);
                  setTimeout(() => setIsPlaying(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/70 hover:text-white transition-colors ml-2"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
      </div>

      {/* Floating Animated Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden lg:block p-3 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-2xl`}
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 10}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
            >
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Top-Rated Development Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Transforming Ideas Into{" "}
                <span className="bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl"
              >
                Got a startup? We'll help you launch with impact. Have an idea?
                We transform concepts into market-ready solutions. Running a
                business? We optimize and accelerate your growth. Your success
                is our journey—we're with you at every stage.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-3 max-w-md"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-blue-100"
                >
                  <div className="text-green-400">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/contact"
                // target=""
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all shadow-2xl flex items-center gap-3 group"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm flex items-center gap-3 group"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-blue-300">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                      <span className="text-blue-300">{stat.suffix}</span>
                    </div>
                  </div>
                  <div className="text-xs text-blue-200 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Main Glass Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10" />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Innovate?
                  </h3>
                  <p className="text-green-100">
                    Get a free project consultation
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                      <Rocket className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Fast Delivery</p>
                      <p className="text-sm text-blue-200">2-4 weeks average</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="p-3 bg-green-500/20 rounded-xl group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Secure & Scalable
                      </p>
                      <p className="text-sm text-blue-200">Enterprise-grade</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Performance Focused
                      </p>
                      <p className="text-sm text-blue-200">
                        Optimized solutions
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gradient-to-r from-green-300 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold transition-all shadow-lg"
                >
                  Get Free Consultation
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-2xl shadow-2xl"
            >
              <Star className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center text-white/60"
      >
        <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-white/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero_section;
