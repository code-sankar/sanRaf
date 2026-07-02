import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Palette,
  Layout,
  Users,
  Eye,
  Code,
  Smartphone,
  Zap,
  Heart,
  Target,
  Globe,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ──────────────────────────────────────────────────── */

const services = [
  {
    icon: Palette,
    title: "User Interface Design",
    description:
      "Visually coherent interfaces that guide attention, reduce friction, and earn trust at first glance.",
    features: ["Visual Design", "Typography", "Color Systems", "Iconography"],
    technologies: ["Figma", "Sketch", "Adobe XD", "Design Systems"],
  },
  {
    icon: Users,
    title: "User Research",
    description:
      "Interviews, surveys, and usability studies that replace guesswork with evidence before a pixel is placed.",
    features: ["User Interviews", "Surveys", "Persona Development", "Journey Mapping"],
    technologies: ["Miro", "UserTesting", "Hotjar", "Analytics"],
  },
  {
    icon: Layout,
    title: "Wireframing & Prototyping",
    description:
      "Interactive prototypes that test the concept and de-risk development before engineering starts.",
    features: ["Low-Fidelity Wireframes", "High-Fidelity Prototypes", "Interactive Flows", "User Testing"],
    technologies: ["Figma", "InVision", "Proto.io", "Framer"],
  },
  {
    icon: Eye,
    title: "Usability Testing",
    description:
      "Structured sessions with real users to find what the design gets wrong — before your users do.",
    features: ["Remote Testing", "A/B Testing", "Heatmaps", "User Feedback"],
    technologies: ["UserTesting", "Lookback", "Hotjar", "Optimizely"],
  },
  {
    icon: Code,
    title: "Design Systems",
    description:
      "Scalable component libraries and guidelines that keep product teams consistent across every surface.",
    features: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
    technologies: ["Figma", "Storybook", "Zeroheight", "Notion"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first layouts that hold up at every breakpoint — on the phone a lead actually uses.",
    features: ["Mobile-First Design", "Breakpoint Systems", "Touch Optimization", "Performance"],
    technologies: ["Figma", "BrowserStack", "Lighthouse", "Core Web Vitals"],
  },
];

const tools = [
  "Figma", "Sketch", "Adobe XD", "InVision",
  "Axure", "Balsamiq", "Marvel", "Proto.io",
  "Framer", "Zeplin", "Miro", "Whimsical",
];

const processSteps = [
  {
    step: "01", title: "Discover",
    description: "Research user needs, business goals, and the competitive landscape before touching a tool.",
    duration: "1–2 weeks",
    icon: Target,
    activities: ["User Interviews", "Market Research", "Stakeholder Workshops"],
    deliverables: ["Research Reports", "User Personas", "Competitive Analysis"],
  },
  {
    step: "02", title: "Define",
    description: "Synthesise findings into personas, journey maps, and a clear problem statement.",
    duration: "1–2 weeks",
    icon: Users,
    activities: ["Journey Mapping", "Persona Development", "Information Architecture"],
    deliverables: ["User Journeys", "Problem Statements", "Design Principles"],
  },
  {
    step: "03", title: "Ideate",
    description: "Generate and pressure-test multiple directions through structured workshops and sprints.",
    duration: "1–2 weeks",
    icon: Sparkles,
    activities: ["Brainstorming", "Design Sprints", "Concept Testing"],
    deliverables: ["Concept Sketches", "User Flows", "Solution Concepts"],
  },
  {
    step: "04", title: "Prototype",
    description: "Turn the strongest concept into a clickable prototype that communicates intent precisely.",
    duration: "2–3 weeks",
    icon: Layout,
    activities: ["Wireframing", "Prototyping", "Visual Design"],
    deliverables: ["Interactive Prototypes", "Wireframes", "Design Mockups"],
  },
  {
    step: "05", title: "Test",
    description: "Validate the prototype with real users. Collect findings, iterate, repeat until it holds.",
    duration: "1–2 weeks",
    icon: Eye,
    activities: ["User Testing", "A/B Testing", "Feedback Synthesis"],
    deliverables: ["Usability Reports", "Design Iterations", "Final Designs"],
  },
  {
    step: "06", title: "Implement",
    description: "Hand off developer-ready assets, specs, and a design system the team can actually use.",
    duration: "1 week",
    icon: Code,
    activities: ["Asset Export", "Spec Documentation", "Developer Collaboration"],
    deliverables: ["Design Systems", "Developer Handoff", "Style Guides"],
  },
];

const principles = [
  { icon: Users,     title: "User-Centered",  description: "User needs and real behaviour drive every decision we make." },
  { icon: Layout,    title: "Consistency",    description: "Visual and functional consistency across every touchpoint." },
  { icon: Globe,     title: "Accessibility",  description: "Designed for all users, regardless of ability or context." },
  { icon: Sparkles,  title: "Simplicity",     description: "Remove what doesn't earn its place. Focus on what does." },
  { icon: Eye,       title: "Feedback",       description: "Clear system feedback for every user action and state." },
  { icon: Palette,   title: "Flexibility",    description: "Designs that adapt to context, device, and preference." },
];

const benefits = [
  { icon: Zap,    title: "Increased Conversion",  description: "Well-designed interfaces can lift conversion rates significantly.", metric: "Up to 200% higher conversion" },
  { icon: Heart,  title: "User Retention",        description: "Enjoyable experiences keep users coming back and reduce churn.", metric: "Measurable drop in churn" },
  { icon: Target, title: "Reduced Dev Cost",      description: "Design issues caught pre-build cost 10–20× less to fix.", metric: "40% fewer dev rework cycles" },
  { icon: Users,  title: "Higher Engagement",     description: "Intuitive flows increase time-on-task and feature adoption.", metric: "50%+ session length improvement" },
  { icon: Globe,  title: "Broader Reach",         description: "Accessible, responsive design opens your product to every user.", metric: "WCAG 2.1 AA as standard" },
  { icon: Eye,    title: "Brand Credibility",     description: "94% of first impressions are design-related. Yours should be good.", metric: "94% of impressions = design" },
];

const stats = [
  { value: "94%",    label: "of first impressions are design-related" },
  { value: "88%",    label: "of users won't return after a bad experience" },
  { value: "75%",    label: "of credibility comes from website design" },
  { value: "10–20×", label: "more expensive to fix UX issues after development" },
];

const caseStudies = [
  {
    title: "E-commerce UX Overhaul",
    industry: "Retail",
    challenge: "Low conversion and high cart-abandonment on mobile.",
    solution: "Full UX audit, mobile-first redesign, and streamlined checkout flow.",
    results: "42% conversion lift, 35% higher average order value, 28% drop in abandonment.",
    technologies: ["Figma", "Hotjar", "UserTesting", "Optimizely"],
  },
  {
    title: "Healthcare Patient Portal",
    industry: "Healthcare",
    challenge: "Complex, inaccessible interface causing high call-centre volume.",
    solution: "Accessibility-led redesign with patient journey mapping and moderated testing.",
    results: "60% fewer support calls, 92% patient satisfaction, full WCAG 2.1 AA compliance.",
    technologies: ["Figma", "Storybook", "Lookback", "Axe"],
  },
  {
    title: "SaaS Dashboard Modernisation",
    industry: "Technology",
    challenge: "Outdated interface with declining daily active users.",
    solution: "Modern UI with personalised dashboards, a design system, and actionable insights.",
    results: "3× daily active users, 58% longer sessions, uplift in premium upgrades.",
    technologies: ["Figma", "Proto.io", "Analytics", "Zeroheight"],
  },
];

const faqs = [
  {
    q: "What's the difference between UI and UX design?",
    a: "UI (User Interface) is the visual layer — colours, typography, spacing, and interactive elements. UX (User Experience) is the behavioural layer — user flows, information architecture, and usability. Both matter; we practice both.",
  },
  {
    q: "How long does a typical UI/UX project take?",
    a: "Most projects run 4–12 weeks. Simple work lands in 2–4 weeks; complex enterprise products can take 3–6 months. We scope precisely after the discovery call.",
  },
  {
    q: "Do you provide design assets for development?",
    a: "Yes. We deliver style guides, component libraries, responsive layouts, and Figma developer-handoff files with exact measurements, colours, and exported assets.",
  },
  {
    q: "How do you measure the success of UX design?",
    a: "Task completion rates, error rates, time-on-task, SUS scores, conversion rates, and retention. We run usability tests at the end of each cycle and track live metrics post-launch.",
  },
];

/* ─── component ─────────────────────────────────────────────── */

const UIUXDesign = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / ui–ux design
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Interfaces users understand the{" "}
                <span className="border-b-2 border-accent pb-0.5">first time.</span>
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We research, design, and test digital products with real users —
                so you ship interfaces that reduce friction, build trust, and
                convert. Every decision is grounded in evidence, not preference.
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
                  See design work
                </button>
              </div>
            </div>

            {/* summary panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/ui-ux-design</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Timeline",        "2 weeks – 6 months"],
                  ["Primary tool",    "Figma"],
                  ["Process",         "Research → Test → Ship"],
                  ["Projects shipped","52+"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex justify-between px-4 py-3">
                    <dt className="font-mono text-[0.74rem] text-graphite">{dt}</dt>
                    <dd className="font-display text-[0.95rem] text-ink">{dd}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAND ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 md:p-8
                  ${i % 2 !== 0 ? "border-l border-line" : ""}
                  ${i < 2 ? "border-b border-line md:border-b-0" : ""}
                  ${i > 0 && i < 3 ? "md:border-l md:border-line" : ""}
                  ${i === 3 ? "md:border-l md:border-line" : ""}
                `}
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

      {/* ══════════ SERVICES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                capabilities
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                What we design.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Research through handoff — the full design workflow in one team,
              with no gaps between discovery and delivery.
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

      {/* ══════════ TOOLS ROW ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
            <span className="inline-block h-px w-3.5 bg-accent" />
            tools we use
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.78rem] text-ink">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROCESS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                how we work
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Six stages. One coherent product.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              A double-diamond process that keeps engineering unblocked and
              users in the room at every stage.
            </p>
          </div>

          {/* step tabs + detail */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            {/* index */}
            <ul className="border border-line bg-white">
              {processSteps.map((s, i) => (
                <li key={s.step}>
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                      activeStep === i ? "bg-accent/5" : "hover:bg-paper"
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] ${activeStep === i ? "text-accent" : "text-faint"}`}>
                      {s.step}
                    </span>
                    <span className="font-display text-[0.97rem] font-medium text-ink">
                      {s.title}
                    </span>
                    <span className="ml-auto font-mono text-[0.68rem] text-faint">{s.duration}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white p-8"
              >
                {(() => {
                  const Icon = processSteps[activeStep].icon;
                  return (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                        <h3 className="font-display text-[1.4rem] font-medium text-ink">
                          {processSteps[activeStep].title}
                        </h3>
                        <span className="ml-auto font-mono text-[0.72rem] text-accent">
                          {processSteps[activeStep].step}
                        </span>
                      </div>
                      <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-graphite">
                        {processSteps[activeStep].description}
                      </p>

                      <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                        <div>
                          <p className="mb-3 font-mono text-[0.7rem] text-faint">key activities</p>
                          <div className="flex flex-wrap gap-1.5">
                            {processSteps[activeStep].activities.map((a) => (
                              <span key={a} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-ink">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="mb-3 font-mono text-[0.7rem] text-faint">deliverables</p>
                          <div className="flex flex-wrap gap-1.5">
                            {processSteps[activeStep].deliverables.map((d) => (
                              <span key={d} className="border border-accent/40 bg-accent/5 px-2 py-0.5 font-mono text-[0.68rem] text-accent">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════ PRINCIPLES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              design principles
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              What guides every decision.
            </h2>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="border-b border-r border-line bg-white p-7">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                    <h3 className="font-display text-[1.1rem] font-medium text-ink">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-graphite">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                what you get
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Why good design pays.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable outcomes clients see when design is treated as
              engineering, not decoration.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="border-b border-r border-line bg-white p-7">
                  <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-[1.15rem] font-medium text-ink">{b.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">{b.description}</p>
                  <p className="mt-4 border-t border-line pt-3 font-mono text-[0.72rem] text-accent">
                    → {b.metric}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CASE STUDIES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                selected work
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Where design moved the numbers.
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
                  {[
                    ["challenge", caseStudies[activeCase].challenge],
                    ["solution",  caseStudies[activeCase].solution],
                    ["results",   caseStudies[activeCase].results],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="font-mono text-[0.7rem] text-faint">{label}</dt>
                      <dd className={`mt-2 text-[0.9rem] leading-relaxed ${label === "results" ? "text-ink" : "text-graphite"}`}>
                        {text}
                      </dd>
                    </div>
                  ))}
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

      {/* ══════════ FAQ ══════════ */}
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
                Something else on your mind?{" "}
                <button
                  onClick={() => navigate("/contact")}
                  className="border-b border-accent text-ink transition hover:text-accent"
                >
                  Drop us a note.
                </button>
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
                        <span className="font-display text-[1.02rem] font-medium text-ink">{f.q}</span>
                      </span>
                      {open
                        ? <Minus className="h-4 w-4 flex-none text-accent" />
                        : <Plus  className="h-4 w-4 flex-none text-graphite" />}
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

      {/* ══════════ CTA ══════════ */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            start a project
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Have a product that needs better design? Let's look at it together.
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
              See our design work
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UIUXDesign;