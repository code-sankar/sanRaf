import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  Globe,
  Code,
  Users,
  Shield,
  Download,
  Zap,
  CheckCircle,
  BarChart,
  Target,
  Rocket,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description:
      "Native iOS applications using Swift and Objective-C for seamless Apple ecosystem integration.",
    features: ["SwiftUI & UIKit", "Core Data", "ARKit Integration", "App Store Deployment"],
    technologies: ["Swift", "Objective-C", "Xcode", "TestFlight"],
  },
  {
    icon: Code,
    title: "Android Development",
    description:
      "Native Android apps with Kotlin and Java for optimal performance on Google's platform.",
    features: ["Material Design 3", "Jetpack Compose", "Room Database", "Google Play Deployment"],
    technologies: ["Kotlin", "Java", "Android Studio", "Firebase"],
  },
  {
    icon: Globe,
    title: "Cross-Platform Development",
    description:
      "React Native and Flutter apps that work seamlessly on both iOS and Android from one codebase.",
    features: ["Single Codebase", "Hot Reload", "Native Performance", "Cost Efficiency"],
    technologies: ["React Native", "Flutter", "Dart", "Expo"],
  },
  {
    icon: Users,
    title: "UI/UX Design for Mobile",
    description:
      "Mobile-first design that prioritises thumb-friendly navigation and intuitive interactions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    technologies: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
  },
  {
    icon: Shield,
    title: "App Security",
    description:
      "Encryption, secure APIs, biometric auth, and penetration testing built in from day one.",
    features: ["Data Encryption", "Biometric Auth", "Secure APIs", "Penetration Testing"],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Security Audits"],
  },
  {
    icon: Download,
    title: "App Store Optimisation",
    description:
      "Maximise visibility and downloads with strategic ASO and store listing work.",
    features: ["Keyword Research", "Store Listing", "Review Management", "Analytics"],
    technologies: ["ASO Tools", "Analytics", "A/B Testing", "Store Analytics"],
  },
];

const technologies = [
  "Swift", "Kotlin", "React Native", "Flutter",
  "Java", "Objective-C", "Firebase", "Xcode",
  "Android Studio", "GraphQL", "Redux", "Fastlane",
];

const platforms = [
  {
    name: "iOS Development",
    description: "Native applications for iPhone, iPad, and the Apple ecosystem.",
    features: [
      "Swift & Objective-C",
      "Xcode IDE",
      "Apple Human Interface Guidelines",
      "TestFlight deployment",
      "App Store Connect",
      "ARKit & Core ML",
    ],
    apps: ["Social Media", "E-commerce", "Productivity", "Games"],
  },
  {
    name: "Android Development",
    description: "Native applications for Android devices and the Google ecosystem.",
    features: [
      "Kotlin & Java",
      "Android Studio",
      "Material Design 3",
      "Google Play Console",
      "Firebase integration",
      "Google Play Services",
    ],
    apps: ["Business Apps", "Utilities", "Entertainment", "Lifestyle"],
  },
  {
    name: "Cross-Platform",
    description: "Single codebase applications for both iOS and Android.",
    features: [
      "React Native / Flutter",
      "Single codebase",
      "Faster development",
      "Consistent UI",
      "Cost-effective",
      "Hot Reload",
    ],
    apps: ["Startups", "MVPs", "Enterprise", "Prototypes"],
  },
];

const processSteps = [
  {
    step: "01", title: "Strategy & Planning",
    description: "Define goals, target audience, and app requirements before a line of code is written.",
    duration: "1–2 weeks", icon: Target,
    deliverables: ["Project Scope", "User Stories", "Technical Specs"],
  },
  {
    step: "02", title: "UI/UX Design",
    description: "Wireframes, prototypes, and visual designs shaped for the platform's conventions.",
    duration: "2–3 weeks", icon: Users,
    deliverables: ["Wireframes", "Prototypes", "Design System"],
  },
  {
    step: "03", title: "Development",
    description: "Agile sprints with working builds every week, reviewed together at each demo.",
    duration: "4–12 weeks", icon: Code,
    deliverables: ["Weekly Builds", "Code Reviews", "Feature Demos"],
  },
  {
    step: "04", title: "Quality Assurance",
    description: "Comprehensive testing across real devices — functional, performance, and security.",
    duration: "1–2 weeks", icon: CheckCircle,
    deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"],
  },
  {
    step: "05", title: "Deployment",
    description: "App store submission, launch management, and coordinated go-live.",
    duration: "1–2 weeks", icon: Rocket,
    deliverables: ["App Store Submission", "Launch Plan", "Marketing Assets"],
  },
  {
    step: "06", title: "Maintenance & Updates",
    description: "Ongoing support, platform updates, and performance monitoring post-launch.",
    duration: "Ongoing", icon: Shield,
    deliverables: ["Updates", "Analytics", "User Support"],
  },
];

const benefits = [
  { icon: Zap,          title: "Enhanced Performance",     description: "Native apps deliver faster performance and smoother animations than web.", metric: "60% faster than web apps" },
  { icon: Users,        title: "Better User Engagement",   description: "Mobile apps increase engagement 3–4× compared to mobile websites.", metric: "3–4× higher engagement" },
  { icon: BarChart,     title: "Higher Conversion Rates",  description: "Apps convert 3× better than mobile websites on the same traffic.", metric: "3× better conversion" },
  { icon: Shield,       title: "Improved Security",        description: "Native security features and a controlled store environment protect users.", metric: "Enterprise-grade security" },
  { icon: CheckCircle,  title: "Offline Functionality",    description: "Cached data and offline modes keep the app useful without a connection.", metric: "Full offline capability" },
  { icon: Download,     title: "Direct Marketing Channel", description: "Push notifications drive 3× higher retention than email campaigns.", metric: "3× higher retention" },
];

const stats = [
  { value: "3.8B",  label: "smartphone users worldwide" },
  { value: "90%",   label: "of mobile time is spent in apps" },
  { value: "4.2H",  label: "average daily mobile screen time" },
  { value: "200B+", label: "app downloads recorded in 2023" },
];

const caseStudies = [
  {
    title: "Fitness Tracking Application",
    industry: "Health & Fitness",
    challenge: "Poor user retention and engagement in an existing fitness app.",
    solution: "Gamified experience with social features and personalised workout plans.",
    results: "500K+ downloads, 4.8-star rating, 40% daily active user rate.",
    technologies: ["React Native", "Firebase", "Redux", "Apple Health Kit"],
  },
  {
    title: "Restaurant Delivery Platform",
    industry: "Food & Beverage",
    challenge: "Complex ordering process causing high cart abandonment.",
    solution: "Streamlined flow with one-tap reordering and real-time GPS tracking.",
    results: "3× faster ordering, 60% more completed orders, 4.9-star rating.",
    technologies: ["Flutter", "Google Maps API", "Stripe", "Firebase"],
  },
  {
    title: "Financial Management App",
    industry: "FinTech",
    challenge: "Security concerns and complex financial data hard to parse at a glance.",
    solution: "Secure banking app with clear data visualisation and biometric authentication.",
    results: "Zero security incidents, 90% satisfaction, 50% drop in support calls.",
    technologies: ["Swift", "Kotlin", "Plaid API", "Biometric Auth"],
  },
];

const faqs = [
  {
    q: "How much does it cost to develop a mobile app?",
    a: "Simple apps start around $15,000–$30,000. Medium complexity runs $30,000–$70,000. Complex enterprise apps go $70,000+. We scope precisely after discovery — no range quoted without understanding the requirement.",
  },
  {
    q: "Should I choose native or cross-platform development?",
    a: "Native offers peak performance and tighter platform integration but means two codebases. Cross-platform is faster and more cost-effective but can have limits on complex animations or device APIs. We recommend based on your actual use case and budget, not a blanket rule.",
  },
  {
    q: "How long does it take to develop a mobile app?",
    a: "Simple apps: 2–4 months. Medium complexity: 4–6 months. Complex builds: 6+ months. That spans design, development, QA, and deployment. We work agile with weekly builds so you see progress throughout.",
  },
  {
    q: "Do you handle app store submission and maintenance?",
    a: "Yes — end to end. Store submission, compliance review, launch, ongoing maintenance, platform OS updates, and performance monitoring. We stay on after launch, not just hand over the keys.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const MobileDevelopment = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / mobile development
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Mobile apps users actually{" "}
                <span className="border-b-2 border-accent pb-0.5">keep installed</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We design and build native iOS, Android, and cross-platform apps
                that hold up in the real world — fast, secure, and maintained
                properly after launch, not just handed over.
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
                <span>~/mobile-development</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Platforms",        "iOS · Android · Cross-platform"],
                  ["Timeline",         "2 months – 6 months"],
                  ["Primary stack",    "Swift · Kotlin · React Native"],
                  ["Projects shipped", "32+"],
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
                  ${i > 0 ? "md:border-l md:border-line" : ""}
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
                What we build for mobile.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Strategy, design, development, security, and store optimisation —
              the complete mobile workflow without agency hand-offs.
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

      {/* ══════════ PLATFORMS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                platforms
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Which platform is right for you.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              The right answer depends on your users, budget, and timeline —
              not a blanket recommendation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,240px)_1fr]">
            {/* tab index */}
            <ul className="border border-line bg-white">
              {platforms.map((p, i) => (
                <li key={p.name}>
                  <button
                    onClick={() => setActivePlatform(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                      activePlatform === i ? "bg-accent/5" : "hover:bg-paper"
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] ${activePlatform === i ? "text-accent" : "text-faint"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.97rem] font-medium text-ink">
                      {p.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white p-8"
              >
                <span className="font-mono text-[0.72rem] text-accent">
                  {String(activePlatform + 1).padStart(2, "0")} / {platforms[activePlatform].name}
                </span>
                <p className="mt-3 max-w-[52ch] text-[0.97rem] leading-relaxed text-graphite">
                  {platforms[activePlatform].description}
                </p>

                <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">what we use</p>
                    <div className="flex flex-wrap gap-1.5">
                      {platforms[activePlatform].features.map((f) => (
                        <span key={f} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-ink">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">best for</p>
                    <div className="flex flex-wrap gap-1.5">
                      {platforms[activePlatform].apps.map((a) => (
                        <span key={a} className="border border-accent/40 bg-accent/5 px-2 py-0.5 font-mono text-[0.68rem] text-accent">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════ TECH ROW ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
            <span className="inline-block h-px w-3.5 bg-accent" />
            stack we work in
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((t) => (
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
                Six stages from brief to store.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Strategy through maintenance — a consistent process that keeps
              you informed and unblocked at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
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
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {step.deliverables.map((d) => (
                      <span key={d} className="border border-accent/40 bg-accent/5 px-2 py-0.5 font-mono text-[0.67rem] text-accent">
                        {d}
                      </span>
                    ))}
                  </div>
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
                Why a real app beats a mobile site.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable differences between apps built properly and those
              just ported from the web.
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
          <div className="mb-12">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              selected work
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              Apps we've shipped to real users.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr]">
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
                Something else?{" "}
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
            Have a mobile app idea? Let's figure out the right way to build it.
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

export default MobileDevelopment;