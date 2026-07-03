import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  TestTube,
  Bug,
  CheckCircle,
  Cpu,
  Zap,
  Shield,
  Users,
  BarChart,
  Target,
  FileText,
  Code,
  Smartphone,
  Server,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: TestTube,
    title: "Manual Testing",
    description: "Experienced QA engineers testing real-world scenarios, usability, and edge cases that automation misses.",
    features: ["Exploratory Testing", "Usability Testing", "Ad-hoc Testing", "User Journey Validation"],
    technologies: ["JIRA", "TestRail", "qTest", "Xray"],
  },
  {
    icon: Cpu,
    title: "Automated Testing",
    description: "Automated test suites for regression coverage and CI/CD integration — fast feedback, every build.",
    features: ["Test Automation", "CI/CD Integration", "Regression Testing", "API Testing"],
    technologies: ["Selenium", "Cypress", "Playwright", "Jenkins"],
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Penetration testing and vulnerability assessments that find exploitable weaknesses before attackers do.",
    features: ["Penetration Testing", "Vulnerability Assessment", "Security Scanning", "Compliance Testing"],
    technologies: ["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit"],
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description: "Load, stress, and endurance testing to validate scalability and response times under real traffic.",
    features: ["Load Testing", "Stress Testing", "Endurance Testing", "Scalability Testing"],
    technologies: ["JMeter", "Gatling", "LoadRunner", "k6"],
  },
  {
    icon: Users,
    title: "User Acceptance Testing",
    description: "Validate that the system meets real business requirements and user needs before every release.",
    features: ["UAT Planning", "User Scenarios", "Business Validation", "Stakeholder Sign-off"],
    technologies: ["Test Cases", "User Stories", "Acceptance Criteria", "Feedback Loops"],
  },
  {
    icon: FileText,
    title: "Test Strategy & Planning",
    description: "Comprehensive test plans, risk assessments, and quality strategies tailored to your project.",
    features: ["Test Planning", "Risk Assessment", "Resource Planning", "Quality Metrics"],
    technologies: ["Test Strategy", "Test Plans", "Quality Gates", "Reporting"],
  },
];

const methodologies = [
  "Agile Testing", "Waterfall Testing", "Exploratory Testing", "Regression Testing",
  "Integration Testing", "Unit Testing", "System Testing", "Smoke Testing",
  "Sanity Testing", "Accessibility Testing", "Compatibility Testing", "Localisation Testing",
];

const stats = [
  { value: "40%",   label: "reduction in dev costs with early-stage testing" },
  { value: "65%",   label: "faster bug resolution with proper test documentation" },
  { value: "99.8%", label: "bug-free releases with comprehensive test coverage" },
  { value: "3–6×",  label: "more expensive to fix bugs in production vs. dev" },
];

const tools = [
  {
    category: "Test Automation",
    icon: Cpu,
    description: "Industry-leading tools for automated web and mobile testing.",
    items: ["Selenium", "Cypress", "Playwright", "Appium", "TestCafe", "WebDriverIO"],
  },
  {
    category: "Performance Testing",
    icon: Zap,
    description: "Comprehensive performance and load testing solutions.",
    items: ["JMeter", "LoadRunner", "Gatling", "k6", "NeoLoad", "BlazeMeter"],
  },
  {
    category: "Mobile Testing",
    icon: Smartphone,
    description: "Specialised tools for iOS and Android application testing.",
    items: ["Appium", "Espresso", "XCUITest", "Detox", "Calabash", "Robotium"],
  },
  {
    category: "API Testing",
    icon: Server,
    description: "Robust API testing and validation frameworks.",
    items: ["Postman", "RestAssured", "SoapUI", "Karate", "JMeter", "HttpMaster"],
  },
  {
    category: "Test Management",
    icon: FileText,
    description: "Complete test case management and defect tracking systems.",
    items: ["JIRA", "TestRail", "qTest", "Zephyr", "Xray", "TestLink"],
  },
  {
    category: "CI/CD Integration",
    icon: Code,
    description: "Seamless integration with continuous integration pipelines.",
    items: ["Jenkins", "GitLab CI", "CircleCI", "Azure DevOps", "Bamboo", "Travis CI"],
  },
];

const benefits = [
  { icon: CheckCircle, title: "Improved Quality",          description: "Deliver higher quality software with fewer defects and genuinely improved user satisfaction.",     metric: "99.8% quality" },
  { icon: Zap,         title: "Faster Time-to-Market",     description: "Accelerate release cycles with efficient testing processes and automated regression coverage.",      metric: "70% faster" },
  { icon: Shield,      title: "Reduced Risks",             description: "Surface and mitigate potential issues before they impact users or business operations.",             metric: "90% risk reduction" },
  { icon: BarChart,    title: "Cost Savings",              description: "Catch defects early — finding bugs in development costs 40× less than fixing them in production.", metric: "40% cost saving" },
  { icon: Users,       title: "Enhanced User Experience",  description: "Ensure smooth, intuitive experiences across platforms, devices, and network conditions.",           metric: "Better UX" },
  { icon: Target,      title: "Competitive Advantage",     description: "Release reliable products that build customer trust, loyalty, and market reputation.",              metric: "Market leadership" },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", description: "Understand project requirements and define test objectives and scope before writing a single test case.",  duration: "1–2 weeks", icon: FileText,    deliverables: ["Requirements Review", "Test Objectives", "Scope Definition"] },
  { step: "02", title: "Test Planning",         description: "Develop strategy, estimate resources and timeline, and assess risks for the full test programme.",      duration: "1–2 weeks", icon: Target,      deliverables: ["Test Strategy", "Resource Plan", "Risk Assessment"] },
  { step: "03", title: "Test Design",           description: "Create comprehensive test cases and scenarios, prepare test data, and set up environments.",             duration: "2–3 weeks", icon: Code,        deliverables: ["Test Cases", "Test Data", "Environment Setup"] },
  { step: "04", title: "Test Execution",        description: "Execute test cases, report defects, and track progress through systematic testing cycles.",             duration: "3–6 weeks", icon: TestTube,    deliverables: ["Test Reports", "Defect Logs", "Progress Metrics"] },
  { step: "05", title: "Defect Management",     description: "Track, prioritise, and verify defect resolution through collaborative, auditable processes.",           duration: "Ongoing",   icon: Bug,         deliverables: ["Defect Reports", "Resolution Tracking", "Verification"] },
  { step: "06", title: "Test Closure",          description: "Evaluate testing effectiveness and prepare a comprehensive summary with quality metrics and lessons.",   duration: "1 week",    icon: CheckCircle, deliverables: ["Test Summary", "Lessons Learned", "Quality Metrics"] },
];

const caseStudies = [
  {
    title: "E-commerce Platform Testing",
    industry: "Retail",
    challenge: "Critical bugs in the checkout process causing 25% cart abandonment and revenue loss during peak seasons.",
    solution: "500+ test case automation suite, performance testing for peak loads, and security testing for payment processing.",
    results: "99.8% bug-free releases, 70% faster testing cycle time, 40% fewer production issues, higher customer satisfaction.",
    technologies: ["Selenium", "JMeter", "OWASP ZAP", "TestRail"],
  },
  {
    title: "Healthcare Application Validation",
    industry: "Healthcare",
    challenge: "Strict HIPAA compliance requirements and data accuracy critical for patient safety and regulatory approval.",
    solution: "Rigorous manual and automated testing with detailed audit trails, compliance documentation, and data validation.",
    results: "100% HIPAA compliance, zero data accuracy issues in production, successful FDA audit, enhanced patient trust.",
    technologies: ["Manual Testing", "TestRail", "Compliance Tools", "Security Scanners"],
  },
  {
    title: "Financial Trading Platform",
    industry: "Finance",
    challenge: "High-frequency trading system requiring millisecond response times and zero tolerance for financial discrepancies.",
    solution: "Performance testing simulating peak trading volumes, failure scenario testing, and full security validation.",
    results: "99.999% system uptime, sub-10ms response times maintained, zero financial discrepancies, full regulatory compliance.",
    technologies: ["Gatling", "LoadRunner", "Security Tools", "Monitoring"],
  },
];

const faqs = [
  {
    q: "When should testing begin in the development process?",
    a: "As early as possible — ideally during requirements analysis. We advocate a shift-left approach where testing starts before code is written. Early testing catches issues when they're cheapest to fix, reduces overall development costs by up to 40%, and builds quality into the product rather than inspecting it at the end.",
  },
  {
    q: "What's the difference between manual and automated testing?",
    a: "Manual testing uses human testers to explore the application and execute scenarios — ideal for usability, exploratory, and complex edge cases. Automated testing uses scripts to run repetitive cases fast — ideal for regression, load, and API testing. We recommend both: manual for user experience and judgment calls, automation for speed and coverage at scale.",
  },
  {
    q: "How do you decide what to automate?",
    a: "We prioritise based on execution frequency (high-frequency tests first), business criticality (core flows get priority), test stability, and ROI. Typically we automate smoke tests, regression suites, data-driven tests, and performance tests. Manual testing is reserved for exploratory work, usability testing, and cases that require human observation.",
  },
  {
    q: "What metrics do you use to measure testing effectiveness?",
    a: "Defect density, test coverage, escape defect rate, test case effectiveness, automation percentage, and mean time to detect and resolve defects. We focus on metrics that relate directly to software quality and business outcomes — not vanity numbers. Reports include trend analysis, risk assessment, and recommendations for continuous improvement.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const Testing = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activeTool, setActiveTool] = useState(0);

  const ToolIcon = tools[activeTool].icon;

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / qa & testing
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Software that ships without{" "}
                <span className="border-b-2 border-accent pb-0.5">surprises</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We provide end-to-end QA — manual, automated, performance, and
                security testing — integrated directly into your development
                cycle so quality is built in, not bolted on at the end.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start quality assurance
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
                <span>~/qa-testing</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Coverage",        "Manual · Auto · Perf · Security"],
                  ["CI Integration",  "Jenkins · GitLab · Azure DevOps"],
                  ["Timeline",        "1 week – ongoing"],
                  ["Projects tested", "30+"],
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
                <div className="mt-1 max-w-[26ch] font-mono text-[0.72rem] leading-relaxed text-graphite">
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
                What we test, and how.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Full-spectrum QA — from manual exploratory sessions through
              automated pipelines, performance benchmarks, and security audits.
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

      {/* ══════════ METHODOLOGIES ROW ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
            <span className="inline-block h-px w-3.5 bg-accent" />
            testing methodologies
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {methodologies.map((m) => (
              <span key={m} className="border border-line-strong bg-white px-3 py-1.5 font-mono text-[0.78rem] text-ink">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TOOLS (interactive) ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                tools & frameworks
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                The stack we test with.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Industry-standard tools across every testing discipline — select
              a category to see what we use and why.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            {/* category index */}
            <ul className="border border-line bg-white">
              {tools.map((t, i) => {
                const CatIcon = t.icon;
                return (
                  <li key={t.category}>
                    <button
                      onClick={() => setActiveTool(i)}
                      className={`flex w-full items-center gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                        activeTool === i ? "bg-accent/5" : "hover:bg-paper"
                      }`}
                    >
                      <CatIcon
                        className={`h-4 w-4 flex-none ${activeTool === i ? "text-accent" : "text-faint"}`}
                        strokeWidth={1.6}
                      />
                      <span className="font-display text-[0.95rem] font-medium text-ink">
                        {t.category}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* tool detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTool}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white"
              >
                <div className="flex items-center gap-4 border-b border-line px-6 py-5">
                  <ToolIcon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-display text-[1.2rem] font-medium text-ink">
                      {tools[activeTool].category}
                    </h3>
                    <p className="mt-0.5 text-[0.88rem] text-graphite">
                      {tools[activeTool].description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                  {tools[activeTool].items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.04 }}
                      className={`flex items-center border-b border-r border-line p-5 ${
                        i % 3 === 2 ? "border-r-0" : ""
                      } ${i % 2 === 1 && i > 3 ? "sm:border-r" : ""}`}
                    >
                      <span className="font-display text-[0.97rem] font-medium text-ink">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
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
                Six stages to release confidence.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              A structured QA lifecycle — from requirement review through
              closure — with documented deliverables at every stage.
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
                Why professional testing pays.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable outcomes of treating quality as an engineering
              discipline, not a final checkpoint.
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
            <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              Testing that held the line.
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
            Want to ship without the production surprises?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Start with a free QA assessment. We'll review your current testing
            coverage, identify the highest-risk gaps, and give you a clear
            plan — no commitment required.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Get a QA assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              See case studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Testing;