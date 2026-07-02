import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  BrainCircuit,
  Palette,
  Lock,
  Blocks,
  Bug,
  ArrowUpRight,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Code2,
    title: "Web Development",
    path: "/web",
    description:
      "Responsive, fast, and scalable web applications built with modern frameworks like React, Next.js, and Node.js.",
    features: ["PWAs", "SEO", "Performance", "API Integration"],
    projects: 45,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    path: "/apps",
    description:
      "Cross-platform and native apps with seamless performance and exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store"],
    projects: 32,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    path: "/cloud",
    description:
      "End-to-end cloud services including migration, DevOps automation, and scalable infrastructure.",
    features: ["AWS/Azure/GCP", "Microservices", "Containers", "Auto-scaling"],
    projects: 28,
  },
  {
    icon: Database,
    title: "Data & Analytics",
    path: "/analytics",
    description:
      "Turning raw data into actionable insights with AI-driven dashboards, analytics, and ML models.",
    features: ["Big Data", "Real-time", "BI", "Visualization"],
    projects: 36,
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    path: "/ai",
    description:
      "Custom AI solutions — chatbots, recommendation systems, and predictive analytics that boost efficiency.",
    features: ["Computer Vision", "NLP", "Predictive Models", "AI Integration"],
    projects: 24,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    path: "/design",
    description:
      "Intuitive, user-friendly interfaces with pixel-perfect designs and delightful, tested experiences.",
    features: ["User Research", "Prototyping", "Design Systems", "Handoff"],
    projects: 40,
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    path: "/cybersecurity",
    description:
      "Security assessments, penetration testing, and compliance to keep your systems and data protected.",
    features: ["Pen Testing", "Audits", "Compliance", "Monitoring"],
    projects: 18,
  },
  {
    icon: Blocks,
    title: "Blockchain Solutions",
    path: "/blockchain",
    description:
      "Smart contracts, decentralized apps, and Web3 integrations built for security and transparency.",
    features: ["Smart Contracts", "dApps", "Web3", "Audits"],
    projects: 12,
  },
  {
    icon: Bug,
    title: "QA & Testing",
    path: "/testing",
    description:
      "Automated and manual testing that catches issues early and keeps every release dependable.",
    features: ["Automation", "E2E", "Load Testing", "CI Integration"],
    projects: 30,
  },
];

const Practice_areas = () => {
  const navigate = useNavigate();

  return (
    <section className="font-body bg-paper border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              what we do
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              What we build, end to end.
            </h2>
          </div>
          <p className="max-w-[34ch] text-graphite">
            One team accountable for design, engineering, and delivery — no
            hand-offs, no black boxes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.button
                key={area.title}
                onClick={() => navigate(area.path)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group flex flex-col border-b border-r border-line bg-white p-7 text-left transition hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.72rem] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-display text-[1.35rem] font-medium text-ink transition group-hover:text-accent">
                  {area.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite">
                  {area.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.features.map((f) => (
                    <span
                      key={f}
                      className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.72rem] text-faint">
                  <span>{area.projects}+ projects</span>
                  <ArrowUpRight className="h-4 w-4 text-ink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Practice_areas;