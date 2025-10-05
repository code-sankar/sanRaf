import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Star,
  Award,
  Calendar,
} from "lucide-react";

// Import your team images
// import sankarImage from "./assets/sankar.jpg";
//import placeholderImage from "./assets/team-placeholder.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Sankar Raj",
      title: "Senior Full Stack Developer",
      specialty: "MERN Stack, Cloud Deployment",
      experience: "8 years",
      bio: "Passionate about building scalable applications and mentoring junior developers. Specialized in creating robust full-stack solutions.",
      image: "",
      skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      achievements: ["Top Performer 2023", "5+ Major Projects"],
      social: {
        github: "https://github.com/sankar",
        linkedin: "https://linkedin.com/in/sankar",
        twitter: "https://twitter.com/sankar",
        email: "mailto:sankar@example.com",
      },
    },
    {
      name: "Priya Sharma",
      title: "Frontend Developer",
      specialty: "React, Next.js, Tailwind",
      experience: "5 years",
      bio: "Crafting beautiful, responsive interfaces with attention to user experience and performance optimization.",
      image: "",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      achievements: ["UI Excellence Award", "3+ Enterprise Apps"],
      social: {
        github: "https://github.com/priya",
        linkedin: "https://linkedin.com/in/priya",
        twitter: "https://twitter.com/priya",
        email: "mailto:priya@example.com",
      },
    },
    {
      name: "Arun Kumar",
      title: "Backend Developer",
      specialty: "Node.js, Express, Databases",
      experience: "6 years",
      bio: "Building robust server architectures and optimizing database performance for high-traffic applications.",
      image: "",
      skills: ["Node.js", "PostgreSQL", "Redis", "Microservices", "REST APIs"],
      achievements: ["Backend Innovation", "10M+ Requests Handled"],
      social: {
        github: "https://github.com/arun",
        linkedin: "https://linkedin.com/in/arun",
        twitter: "https://twitter.com/arun",
        email: "mailto:arun@example.com",
      },
    },
    {
      name: "Neha Patel",
      title: "UI/UX Designer",
      specialty: "Figma, Adobe XD, Prototyping",
      experience: "7 years",
      bio: "Creating intuitive designs that balance aesthetics and functionality while ensuring exceptional user experiences.",
      image: "",
      skills: [
        "Figma",
        "User Research",
        "Prototyping",
        "Design Systems",
        "UX Writing",
      ],
      achievements: ["Design Excellence", "15+ Happy Clients"],
      social: {
        github: "https://github.com/neha",
        linkedin: "https://linkedin.com/in/neha",
        twitter: "https://twitter.com/neha",
        email: "mailto:neha@example.com",
      },
    },
    {
      name: "Rahul Verma",
      title: "DevOps Engineer",
      specialty: "AWS, Docker, Kubernetes",
      experience: "9 years",
      bio: "Automating deployments and ensuring system reliability at scale with cutting-edge DevOps practices.",
      image: "",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      achievements: ["99.9% Uptime", "Cost Optimization 40%"],
      social: {
        github: "https://github.com/rahul",
        linkedin: "https://linkedin.com/in/rahul",
        twitter: "https://twitter.com/rahul",
        email: "mailto:rahul@example.com",
      },
    },
    {
      name: "Ananya Singh",
      title: "Mobile App Developer",
      specialty: "React Native, Flutter",
      experience: "6 years",
      bio: "Building cross-platform mobile experiences that feel native and deliver outstanding performance.",
      image: "",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      achievements: ["50K+ Downloads", "4.8★ App Store Rating"],
      social: {
        github: "https://github.com/ananya",
        linkedin: "https://linkedin.com/in/ananya",
        twitter: "https://twitter.com/ananya",
        email: "mailto:ananya@example.com",
      },
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [imageErrors, setImageErrors] = useState({});

  const filters = [
    { id: "all", label: "All Team" },
    { id: "developer", label: "Developers" },
    { id: "design", label: "Designers" },
    { id: "engineer", label: "Engineers" },
  ];

  const filteredTeam = useMemo(() => {
    if (activeFilter === "all") return team;
    return team.filter((member) =>
      member.title.toLowerCase().includes(activeFilter)
    );
  }, [activeFilter]);

  const visibleTeam = filteredTeam.slice(0, visibleCount);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getGradient = (index) => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-teal-500 to-blue-500",
    ];
    return gradients[index % gradients.length];
  };

  const handleImageError = (memberName) => {
    setImageErrors((prev) => ({
      ...prev,
      [memberName]: true,
    }));
  };

  const getMemberImage = (member) => {
    if (imageErrors[member.name] || !member.image) {
      return (
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getGradient(
            team.indexOf(member)
          )} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
        >
          {getInitials(member.name)}
        </div>
      );
    }

    return (
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 rounded-2xl object-cover shadow-lg"
        onError={() => handleImageError(member.name)}
      />
    );
  };

  const getModalImage = (member) => {
    if (imageErrors[member.name] || !member.image) {
      return (
        <div
          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${getGradient(
            team.indexOf(member)
          )} flex items-center justify-center text-white text-3xl font-bold`}
        >
          {getInitials(member.name)}
        </div>
      );
    }

    return (
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-2xl object-cover"
        onError={() => handleImageError(member.name)}
      />
    );
  };

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Meet Our Experts
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Talented Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A team of passionate professionals dedicated to delivering
            exceptional digital solutions through innovation, collaboration, and
            technical excellence.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(6);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleTeam.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200/50 h-full flex flex-col">
                {/* Header with Background */}
                <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Profile Image */}
                  <div className="absolute -bottom-6 left-6">
                    <div className="relative">
                      {getMemberImage(member)}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      {Object.entries(member.social).map(([platform, url]) => {
                        const Icon =
                          platform === "github"
                            ? Github
                            : platform === "linkedin"
                            ? Linkedin
                            : platform === "twitter"
                            ? Twitter
                            : Mail;
                        return (
                          <a
                            key={platform}
                            href={url}
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110 hover:bg-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="w-3.5 h-3.5 text-gray-700" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-8 pb-6 px-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/btn"
                    >
                      View Profile
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / View All */}
        {visibleCount < filteredTeam.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 hover:text-blue-600 font-medium rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:scale-105"
            >
              Load More
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    {getModalImage(selectedMember)}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-blue-600 text-lg font-semibold mb-3">
                        {selectedMember.title}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedMember.experience} Experience</span>
                        </div>
                        <div className="flex gap-3">
                          {Object.entries(selectedMember.social).map(
                            ([platform, url]) => {
                              const Icon =
                                platform === "github"
                                  ? Github
                                  : platform === "linkedin"
                                  ? Linkedin
                                  : platform === "twitter"
                                  ? Twitter
                                  : Mail;
                              return (
                                <a
                                  key={platform}
                                  href={url}
                                  className="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Icon className="w-3.5 h-3.5 text-gray-600 hover:text-white transition-colors" />
                                </a>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          About
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedMember.bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-green-500" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedMember.achievements.map(
                            (achievement, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm text-gray-600 mb-1">
                            Specialty
                          </p>
                          <p className="font-semibold text-gray-900">
                            {selectedMember.specialty}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm text-gray-600 mb-1">
                            Experience
                          </p>
                          <p className="font-semibold text-gray-900">
                            {selectedMember.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamSection;
