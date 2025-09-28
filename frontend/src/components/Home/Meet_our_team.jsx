import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "AAAAAAAAAAA",
      title: "Senior Full Stack Developer",
      specialty: "MERN Stack, Cloud Deployment",
      experience: "8 years",
      image: "",
    },
    {
      name: "BBBBBBBBBB",
      title: "Frontend Developer",
      specialty: "React, Next.js, Tailwind",
      experience: "5 years",
      image: "",
    },
    {
      name: "CCCCCCCC",
      title: "Backend Developer",
      specialty: "Node.js, Express, Databases",
      experience: "6 years",
      image: "",
    },
    {
      name: "DDDDDDDD",
      title: "UI/UX Designer",
      specialty: "Figma, Adobe XD, Prototyping",
      experience: "7 years",
      image: "",
    },
    {
      name: "EEEEEEEEE",
      title: "DevOps Engineer",
      specialty: "AWS, Docker, Kubernetes",
      experience: "9 years",
      image: "",
    },
    {
      name: "FFFFFFFF",
      title: "Mobile App Developer",
      specialty: "React Native, Flutter",
      experience: "6 years",
      image: "",
    },
    {
      name: "GGGGGGGGG",
      title: "QA Engineer",
      specialty: "Automation Testing, Selenium, Cypress",
      experience: "7 years",
      image: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = useMemo(() => [...team, ...team], [team]);

  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Development Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A team of passionate developers, designers, and engineers building
            high-performance, scalable, and user-friendly solutions.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${(100 / cardsPerView) * currentIndex}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          >
            {slides.map((member, index) => (
              <div
                key={index}
                className={`w-full px-3 sm:px-4 lg:px-5 flex-shrink-0`}
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all"
                >
                  <div className="h-56 bg-gray-200">
                    <img
                      src={null}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) =>
                        (e.currentTarget.src = "/team/placeholder.jpg")
                      }
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.title}
                    </p>
                    <div className="text-sm text-gray-600 space-y-1 border-t pt-3">
                      <p>
                        <strong>Specialty:</strong> {member.specialty}
                      </p>
                      <p>
                        <strong>Experience:</strong> {member.experience}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-50 transition z-10"
          >
            <ArrowRight className="h-6 w-6 text-blue-600 rotate-180" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-50 transition z-10"
          >
            <ArrowRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex % team.length
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all shadow flex items-center gap-2 mx-auto">
            View Full Team <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
