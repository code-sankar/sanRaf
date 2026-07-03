import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const stats = [
  { value: "200+", label: "projects completed" },
  { value: "50+",  label: "technologies used" },
  { value: "5+",   label: "years engineering" },
  { value: "99%",  label: "client satisfaction" },
];

const techStack = [
  {
    category: "Frontend",
    icon: Code2,
    description:
      "Modern, responsive interfaces with exceptional performance and user experience.",
    features: ["SSR / SSG", "PWA", "SEO Optimisation", "Performance Tuning"],
    technologies: [
      { name: "React",        level: "Expert",       projects: 45 },
      { name: "Angular",      level: "Advanced",     projects: 28 },
      { name: "Vue.js",       level: "Advanced",     projects: 32 },
      { name: "TypeScript",   level: "Expert",       projects: 67 },
      { name: "Next.js",      level: "Expert",       projects: 52 },
      { name: "Tailwind CSS", level: "Expert",       projects: 89 },
      { name: "Svelte",       level: "Intermediate", projects: 18 },
      { name: "Nuxt.js",      level: "Advanced",     projects: 24 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    description:
      "Scalable server-side solutions and robust API development that holds up under load.",
    features: ["REST APIs", "Microservices", "Database Design", "API Security"],
    technologies: [
      { name: "Node.js",    level: "Expert",       projects: 78 },
      { name: "Python",     level: "Expert",       projects: 65 },
      { name: "Java",       level: "Advanced",     projects: 42 },
      { name: "Spring Boot",level: "Advanced",     projects: 38 },
      { name: ".NET",       level: "Intermediate", projects: 29 },
      { name: "Express.js", level: "Expert",       projects: 71 },
      { name: "FastAPI",    level: "Advanced",     projects: 33 },
      { name: "GraphQL",    level: "Advanced",     projects: 47 },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    description:
      "Cross-platform and native mobile applications that feel right on every device.",
    features: ["Cross-platform", "Native Performance", "App Store Deployment", "Offline Support"],
    technologies: [
      { name: "React Native", level: "Expert",       projects: 56 },
      { name: "Flutter",      level: "Advanced",     projects: 41 },
      { name: "Swift",        level: "Intermediate", projects: 27 },
      { name: "Kotlin",       level: "Advanced",     projects: 34 },
      { name: "iOS",          level: "Intermediate", projects: 29 },
      { name: "Android",      level: "Advanced",     projects: 45 },
      { name: "Ionic",        level: "Intermediate", projects: 22 },
      { name: "Expo",         level: "Advanced",     projects: 38 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Infrastructure automation and cloud-native solutions that keep releases boring.",
    features: ["Infrastructure as Code", "Auto-scaling", "Monitoring", "Disaster Recovery"],
    technologies: [
      { name: "AWS",         level: "Expert",       projects: 63 },
      { name: "Azure",       level: "Advanced",     projects: 47 },
      { name: "Google Cloud",level: "Advanced",     projects: 52 },
      { name: "Docker",      level: "Expert",       projects: 89 },
      { name: "Kubernetes",  level: "Advanced",     projects: 58 },
      { name: "CI/CD",       level: "Expert",       projects: 74 },
      { name: "Terraform",   level: "Advanced",     projects: 41 },
      { name: "Jenkins",     level: "Intermediate", projects: 36 },
    ],
  },
  {
    category: "AI & ML",
    icon: Brain,
    description:
      "Intelligent solutions powered by machine learning and data science.",
    features: ["Predictive Analytics", "Neural Networks", "Data Processing", "Model Deployment"],
    technologies: [
      { name: "TensorFlow",      level: "Advanced", projects: 38 },
      { name: "PyTorch",         level: "Advanced", projects: 42 },
      { name: "OpenCV",          level: "Intermediate", projects: 29 },
      { name: "NLP",             level: "Advanced", projects: 33 },
      { name: "Computer Vision", level: "Advanced", projects: 31 },
      { name: "Data Science",    level: "Expert",   projects: 57 },
      { name: "Scikit-learn",    level: "Advanced", projects: 45 },
      { name: "Pandas",          level: "Expert",   projects: 68 },
    ],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    description:
      "Comprehensive security practices and threat protection built into every layer.",
    features: ["Threat Detection", "Security Monitoring", "Risk Assessment", "Compliance"],
    technologies: [
      { name: "Pen Testing",            level: "Advanced",     projects: 27 },
      { name: "Encryption",             level: "Expert",       projects: 52 },
      { name: "Firewalls",              level: "Advanced",     projects: 44 },
      { name: "Security Audits",        level: "Expert",       projects: 38 },
      { name: "Compliance",             level: "Advanced",     projects: 41 },
      { name: "SIEM",                   level: "Intermediate", projects: 23 },
      { name: "Vulnerability Assessment",level:"Advanced",     projects: 35 },
      { name: "Incident Response",      level: "Intermediate", projects: 28 },
    ],
  },
];

const levelOrder = { Expert: 0, Advanced: 1, Intermediate: 2 };

/* ─── component ──────────────────────────────────────────────── */

const Technologies = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const active = techStack[selected];
  const Icon = active.icon;

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                our technology stack
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                The tools we use to ship{" "}
                <span className="border-b-2 border-accent pb-0.5">production software</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We choose technologies based on what the project actually
                needs — not trends. Six disciplines, 50+ tools, all applied
                with the same standard of engineering rigour.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate("/cases")}
                  className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
                >
                  See case studies
                </button>
              </div>
            </div>

            {/* summary panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/stack</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex justify-between px-4 py-3">
                    <dt className="font-mono text-[0.74rem] text-graphite">{label}</dt>
                    <dd className="font-display text-[1rem] font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ CATEGORY NAV + DETAIL ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">

          <div className="mb-10">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              by discipline
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,240px)_1fr]">

            {/* category index */}
            <ul className="border border-line bg-white">
              {techStack.map((stack, i) => {
                const CatIcon = stack.icon;
                return (
                  <li key={stack.category}>
                    <button
                      onClick={() => setSelected(i)}
                      className={`flex w-full items-center gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                        selected === i ? "bg-accent/5" : "hover:bg-paper"
                      }`}
                    >
                      <CatIcon
                        className={`h-4 w-4 flex-none ${selected === i ? "text-accent" : "text-faint"}`}
                        strokeWidth={1.6}
                      />
                      <span className="font-display text-[0.95rem] font-medium text-ink">
                        {stack.category}
                      </span>
                      <span className="ml-auto font-mono text-[0.68rem] text-faint">
                        {stack.technologies.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white"
              >
                {/* panel header */}
                <div className="flex items-center gap-4 border-b border-line px-6 py-5">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  <div>
                    <h2 className="font-display text-[1.25rem] font-medium text-ink">
                      {active.category}
                    </h2>
                    <p className="mt-0.5 max-w-[52ch] text-[0.88rem] text-graphite">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* features row */}
                <div className="flex flex-wrap gap-1.5 border-b border-line px-6 py-4">
                  {active.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 border border-accent/40 bg-accent/5 px-2.5 py-0.5 font-mono text-[0.68rem] text-accent"
                    >
                      <CheckCircle className="h-3 w-3" strokeWidth={2} />
                      {f}
                    </span>
                  ))}
                </div>

                {/* tech grid */}
                <div className="grid grid-cols-2 border-t-0 sm:grid-cols-4">
                  {[...active.technologies]
                    .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
                    .map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                        className={`flex flex-col border-b border-r border-line p-5 ${
                          i % 2 === 1 ? "border-r-0 sm:border-r border-line" : ""
                        } ${i % 4 === 3 ? "sm:border-r-0" : ""}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-[0.97rem] font-medium text-ink">
                            {tech.name}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span
                            className={`font-mono text-[0.68rem] ${
                              tech.level === "Expert"
                                ? "text-accent"
                                : tech.level === "Advanced"
                                ? "text-graphite"
                                : "text-faint"
                            }`}
                          >
                            {tech.level.toLowerCase()}
                          </span>
                          <span className="font-mono text-[0.68rem] text-faint">
                            {tech.projects}+ projects
                          </span>
                        </div>

                        {/* proficiency bar */}
                        <div className="mt-3 h-[2px] w-full bg-line">
                          <div
                            className="h-full bg-accent"
                            style={{
                              width:
                                tech.level === "Expert"
                                  ? "100%"
                                  : tech.level === "Advanced"
                                  ? "72%"
                                  : "44%",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════ ALL TECHNOLOGIES FLAT ROW ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
            <span className="inline-block h-px w-3.5 bg-accent" />
            full stack at a glance
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.flatMap((s) => s.technologies).map((t) => (
              <span
                key={`${t.name}-flat`}
                className="border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.75rem] text-ink"
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            start a project
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Ready to build something with the right tools?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Tell us what you're building and we'll recommend the stack — not
            the one we prefer, the one your project actually needs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              View case studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technologies;