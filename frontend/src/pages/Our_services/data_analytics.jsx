import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Database,
  TrendingUp,
  PieChart,
  Filter,
  Brain,
  Target,
  Users,
  Globe,
  CheckCircle,
  Zap,
  LineChart,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Robust data pipelines that collect, move, and transform data reliably — the foundation everything else depends on.",
    features: ["ETL/ELT Pipelines", "Data Warehousing", "Real-time Processing", "Data Quality"],
    technologies: ["Apache Spark", "Airflow", "Snowflake", "dbt"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Interactive dashboards and reports that turn accumulated data into decisions your team can act on today.",
    features: ["KPI Dashboards", "Ad-hoc Reporting", "Data Storytelling", "Performance Metrics"],
    technologies: ["Tableau", "Power BI", "Looker", "Qlik"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Statistical models and ML forecasting that tell you where things are heading, not just where they've been.",
    features: ["Time Series Analysis", "Regression Models", "Forecasting", "Scenario Planning"],
    technologies: ["Python", "R", "Prophet", "StatsModels"],
  },
  {
    icon: PieChart,
    title: "Data Visualisation",
    description:
      "Compelling visual representations of complex data that communicate findings to any audience.",
    features: ["Interactive Charts", "Geospatial Analysis", "Custom Dashboards", "Real-time Visuals"],
    technologies: ["D3.js", "Plotly", "Chart.js", "Google Charts"],
  },
  {
    icon: Filter,
    title: "Data Cleaning & Preparation",
    description:
      "Meticulous cleaning, transformation, and enrichment to ensure your analytics are built on trustworthy data.",
    features: ["Data Validation", "Missing Value Imputation", "Feature Engineering", "Data Enrichment"],
    technologies: ["Pandas", "OpenRefine", "Trifacta", "Data Wrangler"],
  },
  {
    icon: Brain,
    title: "Advanced Analytics",
    description:
      "Machine learning and AI applied to your data for deep pattern recognition and anomaly detection.",
    features: ["Machine Learning", "NLP", "Computer Vision", "Anomaly Detection"],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
  },
];

const technologies = [
  "Python", "R", "SQL", "Tableau",
  "Power BI", "Apache Spark", "Hadoop", "TensorFlow",
  "PyTorch", "AWS Redshift", "Google BigQuery", "Snowflake",
];

const industries = [
  {
    name: "E-commerce & Retail",
    description: "Optimise customer experience and operational efficiency through demand signals and behavioural data.",
    applications: ["Customer segmentation", "Sales forecasting", "Inventory optimisation", "Personalised recommendations"],
    metrics: ["23% sales increase", "35% cost reduction", "Enhanced CX"],
  },
  {
    name: "Healthcare",
    description: "Improve patient outcomes and operational excellence with clinical and operational data.",
    applications: ["Patient outcome analysis", "Treatment effectiveness", "Operational efficiency", "Medical research"],
    metrics: ["18% readmission reduction", "$2.3M savings", "Better care"],
  },
  {
    name: "Finance",
    description: "Mitigate risk, detect fraud, and drive smarter investment decisions with real-time data.",
    applications: ["Risk assessment", "Fraud detection", "Investment analysis", "Customer behaviour analysis"],
    metrics: ["94% fraud accuracy", "$4.7M prevented", "Smarter investments"],
  },
  {
    name: "Manufacturing",
    description: "Enhance production efficiency, reduce downtime, and tighten quality control.",
    applications: ["Predictive maintenance", "Quality control", "Supply chain optimisation", "Production efficiency"],
    metrics: ["45% downtime reduction", "30% quality improvement", "Faster delivery"],
  },
  {
    name: "Marketing",
    description: "Maximise campaign ROI and customer engagement with attribution and journey analytics.",
    applications: ["Campaign performance", "Customer journey analysis", "ROI measurement", "Market segmentation"],
    metrics: ["67% ROI improvement", "3× engagement", "Better targeting"],
  },
  {
    name: "Telecommunications",
    description: "Optimise networks and reduce customer churn before it shows up on the P&L.",
    applications: ["Network optimisation", "Churn prediction", "Customer satisfaction", "Service quality analysis"],
    metrics: ["28% churn reduction", "99.9% uptime", "Higher satisfaction"],
  },
];

const processSteps = [
  {
    step: "01", title: "Data Discovery",
    description: "Audit your data sources, clarify business goals, and define success metrics before touching the data.",
    duration: "1–2 weeks", icon: Target,
    deliverables: ["Data Audit", "Requirements Doc", "Success Metrics"],
  },
  {
    step: "02", title: "Data Collection",
    description: "Gather and integrate data from disparate sources into a centralised, queryable repository.",
    duration: "2–4 weeks", icon: Database,
    deliverables: ["Data Pipeline", "Integration Framework", "Data Catalogue"],
  },
  {
    step: "03", title: "Data Processing",
    description: "Clean, transform, and model the data through ETL processes so it's analysis-ready.",
    duration: "2–3 weeks", icon: Filter,
    deliverables: ["Clean Datasets", "Data Models", "Quality Reports"],
  },
  {
    step: "04", title: "Analysis & Modelling",
    description: "Apply statistical methods and ML algorithms to extract patterns and forward-looking insights.",
    duration: "3–5 weeks", icon: Brain,
    deliverables: ["Analytical Models", "Insight Reports", "Predictive Algorithms"],
  },
  {
    step: "05", title: "Visualisation & Reporting",
    description: "Build dashboards and data stories that communicate findings to any audience.",
    duration: "2–3 weeks", icon: BarChart3,
    deliverables: ["Interactive Dashboards", "Reports", "Data Stories"],
  },
  {
    step: "06", title: "Implementation & Monitoring",
    description: "Deploy solutions into production and monitor continuously for drift, performance, and opportunities.",
    duration: "Ongoing", icon: LineChart,
    deliverables: ["Deployed Solutions", "Monitoring Setup", "Optimisation Plan"],
  },
];

const benefits = [
  { icon: Target,      title: "Informed Decision Making",        description: "Replace gut-feel with decisions grounded in what your data actually shows.",    metric: "90% better decisions" },
  { icon: TrendingUp,  title: "Increased Efficiency",            description: "Identify bottlenecks and optimise processes before they become costly problems.", metric: "45% efficiency gain" },
  { icon: Users,       title: "Deeper Customer Understanding",   description: "Gain granular insight into behaviour, preferences, and churn signals.",          metric: "3× customer insights" },
  { icon: Globe,       title: "Competitive Advantage",           description: "Act on market signals faster than teams still running from spreadsheets.",         metric: "Market leadership" },
  { icon: BarChart3,   title: "Revenue Growth",                  description: "Uncover pricing opportunities and underserved segments hiding in your data.",     metric: "25% revenue boost" },
  { icon: CheckCircle, title: "Risk Mitigation",                 description: "Spot anomalies and leading risk indicators before they crystallise into losses.", metric: "70% risk reduction" },
];

const stats = [
  { value: "67%", label: "higher likelihood of outperforming competitors for data-driven companies" },
  { value: "23%", label: "average revenue increase from data-driven decision making" },
  { value: "45%", label: "improvement in operational efficiency" },
  { value: "5×",  label: "faster decision-making with the right analytics in place" },
];

const caseStudies = [
  {
    title: "Retail Sales Optimisation",
    industry: "E-commerce",
    challenge: "Declining sales and inefficient inventory management eating into margins.",
    solution: "Demand forecasting and customer segmentation platform built on ML pipelines.",
    results: "23% sales increase, 35% inventory cost reduction, higher satisfaction scores.",
    technologies: ["Python", "Tableau", "Machine Learning", "Airflow"],
  },
  {
    title: "Patient Readmission Prediction",
    industry: "Healthcare",
    challenge: "High readmission rates driving up costs and worsening clinical outcomes.",
    solution: "Predictive model flagging high-risk patients for targeted early intervention.",
    results: "18% drop in readmissions, $2.3M annual savings, measurably better care quality.",
    technologies: ["R", "Power BI", "Predictive Analytics", "Snowflake"],
  },
  {
    title: "Financial Fraud Detection",
    industry: "Banking",
    challenge: "Sophisticated fraud attempts causing significant and accelerating losses.",
    solution: "Real-time behavioural analysis and ML detection running on every transaction.",
    results: "94% detection accuracy, $4.7M prevented, 80% fewer false positives.",
    technologies: ["TensorFlow", "Apache Spark", "Real-time Analytics", "AWS"],
  },
];

const faqs = [
  {
    q: "How much data do I need to start with analytics?",
    a: "We can derive meaningful insights from as little as 6–12 months of historical data. Data quality matters more than volume. We start with what you have and build the foundation for more as we go.",
  },
  {
    q: "What's the difference between Business Intelligence and Data Analytics?",
    a: "BI focuses on descriptive analytics — what happened — using historical data for dashboards and reports. Data Analytics goes further: predictive (what will happen) and prescriptive (what should we do), using statistical models and ML for forward-looking insight.",
  },
  {
    q: "How long does it take to implement a data analytics solution?",
    a: "Basic dashboards: 4 weeks. Comprehensive analytics platforms: 6+ months. We always start with quick wins to demonstrate value early, then scale to the full vision based on your data maturity.",
  },
  {
    q: "Do I need technical expertise on my team?",
    a: "Not necessarily. We provide end-to-end solutions and train your team to use them. Having someone who understands your data and business processes accelerates adoption, but it's not a prerequisite to getting started.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const DataAnalytics = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / data & analytics
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Turn your data into decisions that{" "}
                <span className="border-b-2 border-accent pb-0.5">compound</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We build data pipelines, predictive models, and BI platforms
                that make your data usable — not just stored. From raw
                collection through live dashboards, we handle the full stack so
                your team can focus on acting on the insight.
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
                <span>~/data-analytics</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Approach",         "Pipeline → Model → Dashboard"],
                  ["Primary tools",    "Python · SQL · Tableau · Spark"],
                  ["Timeline",         "4 weeks – 6 months"],
                  ["Projects shipped", "36+"],
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
                What we build with your data.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Engineering through advanced analytics — the complete data
              workflow without switching between vendors or teams.
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

      {/* ══════════ INDUSTRIES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                industry applications
              </span>
              <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Where we've applied it.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              The same analytical rigour applied to different domains — each
              with its own data patterns and outcome metrics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            {/* industry index */}
            <ul className="border border-line bg-white">
              {industries.map((ind, i) => (
                <li key={ind.name}>
                  <button
                    onClick={() => setActiveIndustry(i)}
                    className={`flex w-full items-baseline gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                      activeIndustry === i ? "bg-accent/5" : "hover:bg-paper"
                    }`}
                  >
                    <span className={`font-mono text-[0.72rem] ${activeIndustry === i ? "text-accent" : "text-faint"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.95rem] font-medium text-ink">
                      {ind.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* industry detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white p-8"
              >
                <span className="font-mono text-[0.72rem] text-accent">
                  {String(activeIndustry + 1).padStart(2, "0")} / {industries[activeIndustry].name}
                </span>
                <p className="mt-3 max-w-[56ch] text-[0.97rem] leading-relaxed text-graphite">
                  {industries[activeIndustry].description}
                </p>

                <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">key applications</p>
                    <ul className="space-y-2">
                      {industries[activeIndustry].applications.map((a) => (
                        <li key={a} className="flex items-baseline gap-2 text-[0.9rem] text-ink">
                          <span className="font-mono text-[0.7rem] text-accent">·</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-[0.7rem] text-faint">typical results</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industries[activeIndustry].metrics.map((m) => (
                        <span key={m} className="border border-accent/40 bg-accent/5 px-2.5 py-1 font-mono text-[0.72rem] text-accent">
                          {m}
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
                From raw data to live insight.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Six structured stages that move your data from scattered sources
              to decisions your team trusts.
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
                Why data-driven companies win.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable advantages organisations see when analytics moves
              from a report into a daily operational tool.
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
              Analytics problems we've solved.
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
            Have data sitting unused? Let's make it work.
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

export default DataAnalytics;