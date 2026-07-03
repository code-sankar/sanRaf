import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react";

/* ─── data (placeholder — swap for real projects) ───────────────── */

const stats = [
  { value: "60+", label: "projects delivered" },
  { value: "12", label: "industries served" },
  { value: "8", label: "countries reached" },
  { value: "94%", label: "repeat clients" },
];

const categories = ["All", "Web", "Mobile", "Design", "Cloud", "Data & AI"];

const featured = {
  name: "Meridian Commerce Platform",
  client: "Meridian Retail Group",
  category: "Web",
  year: "2025",
  summary:
    "A headless commerce platform serving 2M+ monthly shoppers across 14 markets, rebuilt from a legacy monolith with zero downtime migration.",
  outcome: "3× faster checkout · 40% mobile conversion lift",
  tags: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
};

const projects = [
  {
    name: "Pulse Health Companion",
    client: "Pulse Medical",
    category: "Mobile",
    year: "2025",
    summary:
      "A patient companion app with medication tracking, telehealth, and secure records — HIPAA-compliant end to end.",
    outcome: "500K+ downloads · 4.8★",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    name: "Atlas Logistics Dashboard",
    client: "Atlas Freight",
    category: "Data & AI",
    year: "2024",
    summary:
      "Real-time supply-chain visibility with predictive delay alerts and automated replenishment across 200+ sites.",
    outcome: "45% fewer delays · $2.3M saved",
    tags: ["Python", "Spark", "Tableau"],
  },
  {
    name: "Northwind Design System",
    client: "Northwind SaaS",
    category: "Design",
    year: "2025",
    summary:
      "A full component library and design language unifying 6 product surfaces under one consistent system.",
    outcome: "58% faster feature delivery",
    tags: ["Figma", "Storybook", "Design Tokens"],
  },
  {
    name: "Vertex Cloud Migration",
    client: "Vertex Financial",
    category: "Cloud",
    year: "2024",
    summary:
      "Zero-downtime migration from on-prem to a Kubernetes-based cloud-native architecture with full observability.",
    outcome: "99.99% uptime · 40% cost cut",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    name: "Lumen Learning Platform",
    client: "Lumen Education",
    category: "Web",
    year: "2024",
    summary:
      "An adaptive learning platform with gamification and live collaboration, scaled to learners in 15 countries.",
    outcome: "3× course completion",
    tags: ["Vue.js", "Laravel", "WebRTC"],
  },
  {
    name: "Orbit Fraud Engine",
    client: "Orbit Payments",
    category: "Data & AI",
    year: "2025",
    summary:
      "A real-time transaction fraud detection engine running ML scoring on every payment with sub-100ms latency.",
    outcome: "94% detection · $4.7M prevented",
    tags: ["TensorFlow", "Kafka", "Go"],
  },
  {
    name: "Harbor Booking App",
    client: "Harbor Hospitality",
    category: "Mobile",
    year: "2024",
    summary:
      "A cross-platform booking app with one-tap reordering, live availability, and integrated payments.",
    outcome: "60% more completed bookings",
    tags: ["Flutter", "Stripe", "Maps API"],
  },
  {
    name: "Cobalt Analytics Suite",
    client: "Cobalt Media",
    category: "Design",
    year: "2025",
    summary:
      "A dashboard redesign turning a dense analytics tool into an interface non-analysts could actually use.",
    outcome: "3× daily active users",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Sentinel Infra Platform",
    client: "Sentinel Security",
    category: "Cloud",
    year: "2024",
    summary:
      "Automated infrastructure with CI/CD pipelines, secrets management, and full audit trails for a security firm.",
    outcome: "12min deploys · SOC 2 ready",
    tags: ["GCP", "Docker", "CI/CD"],
  },
];

/* ─── component ──────────────────────────────────────────────── */

const ClientProjects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="min-h-screen bg-paper font-body">
      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                portfolio / client projects
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Work we've shipped for teams like{" "}
                <span className="border-b-2 border-accent pb-0.5">yours</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                A selection of products we've designed, built, and shipped —
                across web, mobile, cloud, design, and data. Every one is a real
                system running in production today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate("/cases")}
                  className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
                >
                  Read case studies
                </button>
              </div>
            </div>

            {/* summary panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/portfolio</span>
                <span>summary</span>
              </div>
              <div className="grid grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-5 ${i % 2 === 0 ? "border-r border-line" : ""} ${i < 2 ? "border-b border-line" : ""}`}
                  >
                    <div className="font-display text-[1.7rem] font-medium tracking-tight text-ink">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[0.68rem] text-graphite">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              featured project
            </span>
          </div>

          <div className="border border-line bg-white">
            <div className="grid lg:grid-cols-[1.4fr_1fr]">
              {/* left */}
              <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3 font-mono text-[0.72rem]">
                  <span className="text-accent">{featured.category}</span>
                  <span className="text-faint">·</span>
                  <span className="text-faint">{featured.year}</span>
                </div>
                <h2 className="mt-4 font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-medium leading-tight tracking-tight text-ink">
                  {featured.name}
                </h2>
                <p className="mt-1 font-mono text-[0.74rem] text-faint">
                  {featured.client}
                </p>
                <p className="mt-5 max-w-[54ch] text-[1rem] leading-relaxed text-graphite">
                  {featured.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* right — outcome */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="font-mono text-[0.7rem] text-faint">outcome</p>
                  <p className="mt-3 font-display text-[1.3rem] font-medium leading-snug text-ink">
                    {featured.outcome}
                  </p>
                </div>
                <button
                  onClick={() => navigate("/cases")}
                  className="group mt-8 inline-flex w-fit items-center gap-2 font-mono text-[0.8rem] text-ink transition hover:text-accent"
                >
                  Read the full case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FILTER + GRID ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                all projects
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Browse the full portfolio.
              </h2>
            </div>

            {/* filter */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-faint">
                <Filter className="h-3.5 w-3.5" />
                filter
              </span>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveFilter(c)}
                  className={`relative pb-0.5 font-mono text-[0.78rem] transition ${
                    activeFilter === c
                      ? "text-ink"
                      : "text-faint hover:text-graphite"
                  }`}
                >
                  {c}
                  {activeFilter === c && (
                    <span className="absolute -bottom-px left-0 h-[1.5px] w-full bg-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p, i) => (
                <article
                  key={p.name}
                  className="group flex flex-col border-b border-r border-line bg-white p-7"
                >
                  <div className="flex items-center justify-between font-mono text-[0.72rem]">
                    <span className="text-accent">{p.category}</span>
                    <span className="text-faint">{p.year}</span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.2rem] font-medium leading-snug text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.72rem] text-faint">
                    {p.client}
                  </p>

                  <p className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-graphite">
                    {p.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line-strong px-2 py-0.5 font-mono text-[0.66rem] text-graphite"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-line pt-4 font-mono text-[0.72rem] text-accent">
                    → {p.outcome}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="border border-line bg-white px-8 py-16 text-center font-mono text-[0.82rem] text-faint">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            your project next
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Want your product on this page next year?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Tell us what you're building. The first conversation is free, and
            we'll be straight with you about scope, cost, and timeline.
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
              Read case studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientProjects;
