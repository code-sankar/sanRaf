import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Server,
  Database,
  Layout,
  Smartphone,
  Code,
  Zap,
  CheckCircle,
  Users,
  BarChart,
  Target,
  Rocket,
  Shield,
  Clock,
  Award,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";

/* ---------------- data (unchanged) ---------------- */

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Modern, responsive websites and web applications using React, Angular, Vue.js, and more.",
    features: ["Progressive Web Apps", "Single Page Applications", "Cross-browser Compatibility", "Performance Optimization"],
    technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Robust server-side applications with Node.js, Python, Java, PHP, and .NET frameworks.",
    features: ["RESTful APIs", "Microservices", "Authentication", "Serverless Architecture"],
    technologies: ["Node.js", "Python", "Java", "Spring Boot"],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "SQL and NoSQL database architecture, optimization, and management.",
    features: ["Database Design", "Query Optimization", "Data Migration", "Backup & Recovery"],
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    icon: Layout,
    title: "CMS Development",
    description:
      "Custom WordPress, Drupal, and headless CMS solutions.",
    features: ["Custom Themes", "Plugin Development", "Headless CMS", "E-commerce Integration"],
    technologies: ["WordPress", "Strapi", "Contentful", "Shopify"],
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description:
      "Fast, reliable web apps that work offline and feel like native applications.",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Fast Loading"],
    technologies: ["PWA", "Service Workers", "Web App Manifest", "Caching"],
  },
  {
    icon: Code,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs for seamless integration with other systems.",
    features: ["REST APIs", "GraphQL", "WebSocket", "Third-party Integration"],
    technologies: ["REST", "GraphQL", "WebSocket", "OAuth"],
  },
];

const technologies = [
  "React", "Angular", "Vue.js", "Node.js", "Python", "PHP",
  "Java", ".NET", "MongoDB", "PostgreSQL", "MySQL", "AWS",
];

const processSteps = [
  { step: "01", title: "Discovery & Planning", description: "Understand requirements, define scope, and create the roadmap.", duration: "1–2 weeks", icon: Target },
  { step: "02", title: "UI/UX Design", description: "Wireframes, prototypes, and visual designs for the best experience.", duration: "2–3 weeks", icon: Layout },
  { step: "03", title: "Development", description: "Agile development with regular iterations and feedback.", duration: "4–12 weeks", icon: Code },
  { step: "04", title: "Testing & QA", description: "Unit, integration, and user acceptance testing across the stack.", duration: "1–2 weeks", icon: CheckCircle },
  { step: "05", title: "Deployment", description: "Smooth production release with zero-downtime rollout.", duration: "1 week", icon: Rocket },
  { step: "06", title: "Maintenance & Support", description: "Ongoing support, updates, and performance work.", duration: "Ongoing", icon: Shield },
];

const benefits = [
  { icon: Zap, title: "High Performance", description: "Lightning-fast sites with optimized code and modern architectures.", metric: "Load times under 2s" },
  { icon: CheckCircle, title: "Quality Code", description: "Clean, maintainable code following industry best practices.", metric: "100% code-review coverage" },
  { icon: Smartphone, title: "Mobile Responsive", description: "Flawless experiences across all devices and screen sizes.", metric: "Perfect mobile scores" },
  { icon: BarChart, title: "SEO Optimized", description: "Search-friendly sites that rank higher and pull in traffic.", metric: "90+ PageSpeed" },
  { icon: Users, title: "User-Centered", description: "Intuitive interfaces designed with real users in mind.", metric: "50% higher engagement" },
  { icon: Target, title: "Scalable Architecture", description: "Future-proof solutions that grow with your business.", metric: "10M+ monthly users" },
];

const stats = [
  { value: "88%", label: "of users won't return after a poor experience" },
  { value: "50%", label: "of mobile users abandon 3s-slow sites" },
  { value: "75%", label: "of credibility comes from site design" },
  { value: "3.5x", label: "higher conversion on mobile-optimized sites" },
];

const caseStudies = [
  {
    title: "E-commerce Platform Development",
    industry: "Retail",
    challenge: "Outdated platform with poor mobile experience and slow performance.",
    solution: "Modern React-based PWA with optimized backend and cloud infrastructure.",
    results: "3× faster load times, 40% more mobile conversions, 99.9% uptime.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Healthcare Portal Modernization",
    industry: "Healthcare",
    challenge: "Complex legacy system with poor usability and security concerns.",
    solution: "Secure Angular application with HIPAA compliance and intuitive patient portal.",
    results: "70% fewer support calls, tighter security, better patient engagement.",
    technologies: ["Angular", ".NET", "SQL Server", "Azure"],
  },
  {
    title: "SaaS Application Scaling",
    industry: "Technology",
    challenge: "Startup with rapid growth hit scalability limits.",
    solution: "Microservices with Kubernetes and an optimized database design.",
    results: "Handled 10× user growth, 5× performance, lower infra cost.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
];

const faqs = [
  { q: "How long does a typical web development project take?", a: "Timelines depend on complexity. Simple sites take 4–8 weeks, medium web apps 2–4 months, and complex enterprise builds 6+ months. We share detailed timelines after scoping." },
  { q: "What's the difference between frontend and backend development?", a: "Frontend is the interface — what users see and interact with. Backend is server-side logic, databases, and the systems behind the app that make it work." },
  { q: "Do you provide ongoing maintenance after launch?", a: "Yes. We offer maintenance packages covering security updates, bug fixes, performance work, and feature enhancements — we prefer long-term partnerships." },
  { q: "How do you ensure website security?", a: "Regular vulnerability assessments, SSL, secure coding standards, input validation, and framework compliance. We also run penetration testing before launch." },
];

/* ---------------- component ---------------- */

const WebDevelopment = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div className="min-h-screen bg-paper font-body">
      {/* ================= HERO ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / web development
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                High-performance web applications, built to&nbsp;
                <span className="border-b-2 border-accent pb-0.5">last</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We design and build web platforms that scale — from marketing
                sites and PWAs to complex internal tools and public products —
                with the operational rigor to keep them running.
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
                <span>~/web-development</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                <div className="flex justify-between px-4 py-3">
                  <dt className="font-mono text-[0.74rem] text-graphite">Timeline</dt>
                  <dd className="font-display text-[0.95rem] text-ink">4 weeks – 6 months</dd>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <dt className="font-mono text-[0.74rem] text-graphite">Team size</dt>
                  <dd className="font-display text-[0.95rem] text-ink">3–8 engineers</dd>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <dt className="font-mono text-[0.74rem] text-graphite">Stack</dt>
                  <dd className="font-display text-[0.95rem] text-ink">React · Node · Postgres</dd>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <dt className="font-mono text-[0.74rem] text-graphite">Projects shipped</dt>
                  <dd className="font-display text-[0.95rem] text-ink">45+</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= STATS BAND ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 md:p-8 ${i !== 0 ? "md:border-l md:border-line" : ""} ${i === 1 ? "border-l border-line md:border-l" : ""} ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}
              >
                <div className="font-display text-[clamp(1.75rem,1.2rem+1.5vw,2.4rem)] font-medium tracking-tight text-ink">
                  {s.value}
                </div>
                <div className="mt-1 max-w-[24ch] font-mono text-[0.72rem] leading-relaxed text-graphite">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                capabilities
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                What we build.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Full-stack coverage across the layers of a modern web product — one
              team, no hand-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="flex flex-col border-b border-r border-line bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.72rem] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-[1.25rem] font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-baseline gap-2 text-[0.86rem] text-ink">
                        <span className="font-mono text-[0.7rem] text-accent">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {s.technologies.map((t) => (
                      <span key={t} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TECH ROW ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              stack we work in
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.78rem] text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                how we work
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Six stages, one continuous line.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              An agile approach that delivers working software each sprint —
              scoped, built, and supported.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="border-t-2 border-ink py-6 pr-6">
                  <div className="flex items-center justify-between font-mono text-[0.72rem]">
                    <span className="text-accent">{step.step}</span>
                    <span className="text-faint">{step.duration}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Icon className="h-4 w-4 text-ink" strokeWidth={1.6} />
                    <h3 className="font-display text-[1.1rem] font-medium text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                what you get
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Software that holds up in production.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The things we optimize for on every build — and the numbers we
              hold ourselves to.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="border-b border-r border-line bg-white p-7">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-[1.15rem] font-medium text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                    {b.description}
                  </p>
                  <p className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] text-accent">
                    → {b.metric}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                selected work
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Where we've shipped web platforms.
              </h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr]">
            {/* index */}
            <ul className="border border-line bg-white">
              {caseStudies.map((c, i) => (
                <li key={c.title}>
                  <button
                    onClick={() => setActiveCase(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                      activeCase === i ? "bg-accent/5" : "hover:bg-paper"
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] ${activeCase === i ? "text-accent" : "text-faint"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.95rem] font-medium text-ink">
                      {c.industry}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* detail */}
            <AnimatePresence mode="wait">
              <motion.article
                key={activeCase}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="border border-line bg-white p-8"
              >
                <span className="font-mono text-[0.72rem] text-accent">
                  {caseStudies[activeCase].industry}
                </span>
                <h3 className="mt-3 font-display text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] font-medium tracking-tight text-ink">
                  {caseStudies[activeCase].title}
                </h3>

                <dl className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-3">
                  <div>
                    <dt className="font-mono text-[0.7rem] text-faint">challenge</dt>
                    <dd className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                      {caseStudies[activeCase].challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] text-faint">solution</dt>
                    <dd className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                      {caseStudies[activeCase].solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] text-faint">results</dt>
                    <dd className="mt-2 text-[0.9rem] leading-relaxed text-ink">
                      {caseStudies[activeCase].results}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {caseStudies[activeCase].technologies.map((t) => (
                    <span key={t} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                questions
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium leading-tight tracking-tight text-ink">
                What clients usually ask.
              </h2>
              <p className="mt-4 max-w-[34ch] text-graphite">
                Missing something? <button onClick={() => navigate("/contact")} className="border-b border-accent text-ink transition hover:text-accent">Send us a note.</button>
              </p>
            </div>

            <div className="border-t border-line">
              {faqs.map((f, i) => {
                const open = openFAQ === i;
                return (
                  <div key={f.q} className="border-b border-line">
                    <button
                      onClick={() => setOpenFAQ(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-accent"
                      aria-expanded={open}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={`font-mono text-[0.72rem] ${open ? "text-accent" : "text-faint"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.02rem] font-medium text-ink">
                          {f.q}
                        </span>
                      </span>
                      {open ? (
                        <Minus className="h-4 w-4 flex-none text-accent" />
                      ) : (
                        <Plus className="h-4 w-4 flex-none text-graphite" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[62ch] pb-6 pl-10 pr-6 text-[0.95rem] leading-relaxed text-graphite">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            start a project
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Have a web project in mind? Let's scope it.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Book a free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              See our work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;