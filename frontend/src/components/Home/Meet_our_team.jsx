import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";

const team = [
  {
    name: "Sankar Raj",
    title: "Senior Full Stack Developer",
    specialty: "MERN Stack, Cloud Deployment",
    experience: "8 years",
    bio: "Passionate about building scalable applications and mentoring junior developers. Specialized in robust full-stack solutions.",
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
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "UX Writing"],
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

const filters = [
  { id: "all", label: "All team" },
  { id: "developer", label: "Developers" },
  { id: "design", label: "Designers" },
  { id: "engineer", label: "Engineers" },
];

const initials = (name) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase();

const socialIcon = { github: Github, linkedin: Linkedin, twitter: Twitter, email: Mail };

const TeamSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState(null);

  const filteredTeam = useMemo(() => {
    if (activeFilter === "all") return team;
    return team.filter((m) => m.title.toLowerCase().includes(activeFilter));
  }, [activeFilter]);

  const visibleTeam = filteredTeam.slice(0, visibleCount);

  return (
    <section className="font-body bg-paper border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              the studio
            </span>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              The people who ship it.
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setVisibleCount(6);
                }}
                className={`relative pb-1 font-mono text-[0.8rem] transition ${
                  activeFilter === f.id
                    ? "text-ink"
                    : "text-faint hover:text-graphite"
                }`}
              >
                {f.label}
                {activeFilter === f.id && (
                  <span className="absolute -bottom-px left-0 h-[1.5px] w-full bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {visibleTeam.map((member, i) => (
            <motion.button
              key={member.name}
              onClick={() => setSelected(member)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group border-b border-r border-line bg-white p-7 text-left transition hover:bg-paper"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 flex-none place-items-center border border-line-strong bg-paper font-mono text-[0.95rem] font-semibold text-ink">
                  {initials(member.name)}
                </span>
                <span className="h-[7px] w-[7px] rounded-full bg-green-600" title="Available" />
              </div>

              <h3 className="mt-5 font-display text-[1.2rem] font-medium text-ink">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[0.74rem] text-accent">
                {member.title}
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-graphite">
                {member.bio}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.72rem] text-faint">
                <span>{member.experience}</span>
                <span className="text-ink transition group-hover:text-accent">
                  view →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < filteredTeam.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="inline-flex items-center border border-line-strong px-5 py-3 font-mono text-[0.8rem] text-ink transition hover:border-ink"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg border border-line bg-white"
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/team/{selected.name.split(" ")[0].toLowerCase()}</span>
                <button onClick={() => setSelected(null)} aria-label="Close">
                  <X className="h-4 w-4 text-graphite hover:text-ink" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 flex-none place-items-center border border-line-strong bg-paper font-mono text-[1.1rem] font-semibold text-ink">
                    {initials(selected.name)}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.4rem] font-medium text-ink">
                      {selected.name}
                    </h3>
                    <p className="font-mono text-[0.76rem] text-accent">
                      {selected.title}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[0.95rem] leading-relaxed text-graphite">
                  {selected.bio}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <dt className="font-mono text-[0.68rem] text-faint">specialty</dt>
                    <dd className="mt-1 text-[0.9rem] text-ink">{selected.specialty}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.68rem] text-faint">experience</dt>
                    <dd className="mt-1 text-[0.9rem] text-ink">{selected.experience}</dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <p className="font-mono text-[0.68rem] text-faint">skills</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selected.skills.map((s) => (
                      <span
                        key={s}
                        className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4 border-t border-line pt-5">
                  {Object.entries(selected.social).map(([platform, url]) => {
                    const Icon = socialIcon[platform];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-graphite transition hover:text-accent"
                        aria-label={platform}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;