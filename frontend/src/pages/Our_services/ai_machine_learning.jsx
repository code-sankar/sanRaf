import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  MessageCircle,
  Eye,
  Shield,
  Workflow,
  Zap,
  Database,
  Settings,
  Cloud,
  LineChart,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Leverage historical data to forecast future outcomes and trends that support real decisions.",
    features: ["Time Series Forecasting", "Pattern Recognition", "Risk Assessment", "Trend Analysis"],
    technologies: ["Prophet", "ARIMA", "LSTM", "XGBoost"],
  },
  {
    icon: MessageCircle,
    title: "Natural Language Processing",
    description: "Chatbots, sentiment analysis, text classification, and language translation built on proven LLM foundations.",
    features: ["Chatbots", "Sentiment Analysis", "Text Classification", "Language Translation"],
    technologies: ["BERT", "GPT", "spaCy", "NLTK"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, facial recognition, and OCR for visual data pipelines.",
    features: ["Image Classification", "Object Detection", "Facial Recognition", "OCR"],
    technologies: ["OpenCV", "YOLO", "ResNet", "TensorFlow"],
  },
  {
    icon: Shield,
    title: "Anomaly Detection",
    description: "Identify unusual patterns and potential threats in data streams — fraud, quality, security.",
    features: ["Fraud Detection", "Network Security", "Quality Control", "System Monitoring"],
    technologies: ["Isolation Forest", "Autoencoders", "One-Class SVM", "LSTM"],
  },
  {
    icon: Workflow,
    title: "Recommendation Engines",
    description: "Personalised content and product recommendations delivered in real time at scale.",
    features: ["Collaborative Filtering", "Content-Based", "Hybrid Systems", "Real-time Recs"],
    technologies: ["Surprise", "LightFM", "TensorFlow", "Apache Spark"],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows with intelligent algorithms and ML pipelines.",
    features: ["RPA Integration", "Workflow Automation", "Decision Automation", "Process Optimisation"],
    technologies: ["Python", "RPA Tools", "ML Pipelines", "Airflow"],
  },
];

const technologies = [
  "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
  "OpenCV", "NLTK", "spaCy", "Hugging Face",
  "AWS SageMaker", "Google AI", "Azure ML", "IBM Watson",
];

const stats = [
  { value: "89%",   label: "of businesses see improved decision-making with AI" },
  { value: "45%",   label: "average increase in operational efficiency" },
  { value: "3.5×",  label: "faster problem-solving with ML algorithms" },
  { value: "67%",   label: "reduction in manual errors with automation" },
];

const benefits = [
  { icon: Zap,        title: "Improved Efficiency",          description: "Automate processes and reduce manual workloads with intelligent, auditable automation.",      metric: "60% time saved" },
  { icon: BarChart3,  title: "Data-Driven Insights",         description: "Uncover patterns and trends hidden in your data — actionable signals, not just reports.",     metric: "3× insights" },
  { icon: Users,      title: "Enhanced Customer Experience", description: "Deliver personalised experiences and recommendations at scale across every touchpoint.",      metric: "45% engagement lift" },
  { icon: Target,     title: "Competitive Advantage",        description: "Stay ahead with AI capabilities that compound over time as your data grows.",                 metric: "Market leadership" },
  { icon: TrendingUp, title: "Revenue Growth",               description: "Identify new opportunities and optimise pricing with predictive analytics.",                  metric: "35% revenue boost" },
  { icon: Shield,     title: "Risk Mitigation",              description: "Proactively surface risks and anomalies before they crystallise into losses.",                metric: "80% risk reduction" },
];

const processSteps = [
  { step: "01", title: "Data Collection & Prep",   description: "Gather and clean your data — quality inputs are the foundation of accurate models.",   duration: "2–3 weeks", icon: Database,  deliverables: ["Data Audit", "Cleaning Pipeline", "Feature Engineering"] },
  { step: "02", title: "Algorithm Selection",      description: "Choose the right ML approach based on your use case, data shape, and latency needs.",  duration: "1–2 weeks", icon: Settings,  deliverables: ["Algorithm Comparison", "Performance Metrics", "Model Selection"] },
  { step: "03", title: "Model Training",           description: "Train and validate models with your data — iterating until performance holds up.",      duration: "3–4 weeks", icon: Brain,     deliverables: ["Trained Models", "Validation Reports", "Benchmarks"] },
  { step: "04", title: "Deployment",               description: "Integrate the trained model into your systems and workflows via versioned API endpoints.", duration: "2–3 weeks", icon: Cloud,     deliverables: ["API Endpoints", "Integration Code", "Documentation"] },
  { step: "05", title: "Monitoring & Optimisation",description: "Continuous performance monitoring and retraining as data distributions shift over time.", duration: "Ongoing",   icon: LineChart, deliverables: ["Monitoring Dashboard", "Performance Alerts", "Optimisation Plan"] },
];

const caseStudies = [
  {
    title: "Predictive Maintenance System",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing production downtime and escalating maintenance costs.",
    solution: "ML model analysing sensor data to predict maintenance needs 2 weeks in advance with 92% accuracy.",
    results: "30% reduction in unplanned downtime, 25% lower maintenance costs, extended equipment lifespan.",
    technologies: ["TensorFlow", "IoT Sensors", "Time Series Analysis"],
  },
  {
    title: "Customer Churn Prediction",
    industry: "E-commerce",
    challenge: "High customer attrition with no early warning system, quietly eroding revenue growth.",
    solution: "AI algorithm analysing behaviour patterns to flag at-risk customers 30 days before churn.",
    results: "22% churn reduction, improved retention campaign targeting, increased customer lifetime value.",
    technologies: ["Scikit-learn", "XGBoost", "Behavioural Analytics"],
  },
  {
    title: "Medical Image Analysis",
    industry: "Healthcare",
    challenge: "Time-consuming manual analysis of medical scans causing diagnostic delays and radiologist fatigue.",
    solution: "Computer vision system using deep learning for automated abnormality detection in medical images.",
    results: "75% faster diagnosis, 15% improvement in detection accuracy, measurably reduced radiologist workload.",
    technologies: ["PyTorch", "CNN", "Medical Imaging"],
  },
];

const faqs = [
  {
    q: "How much data do I need for machine learning?",
    a: "It depends on problem complexity. Most projects need at least 1,000–10,000 labelled examples to start. We can work with smaller datasets using transfer learning and data augmentation. Quality and relevance matter more than raw volume — we audit your data before scoping.",
  },
  {
    q: "What's the difference between AI, machine learning, and deep learning?",
    a: "AI is the broad field of creating intelligent machines. ML is a subset that uses algorithms to learn patterns from data without being explicitly programmed. Deep learning is a specialised ML approach using multi-layer neural networks for complex tasks like vision and language. We choose the right level for your specific problem.",
  },
  {
    q: "How long does it take to implement an AI solution?",
    a: "Proof-of-concepts: 4–6 weeks. Enterprise-scale solutions: 6+ months. We deliver value incrementally — most clients see initial model results within 8–12 weeks, with continuous improvement after that.",
  },
  {
    q: "Can AI solutions integrate with our existing systems?",
    a: "Yes. We design AI solutions to integrate via APIs, microservices, and containers — connecting cleanly to your CRM, ERP, databases, and other business systems without disrupting current operations.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const AIMachineLearning = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / ai & machine learning
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                AI that solves problems, not just{" "}
                <span className="border-b-2 border-accent pb-0.5">demos</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We build custom ML models, NLP systems, computer vision
                pipelines, and AI-powered automation that ship to production
                and deliver measurable outcomes — not just slide decks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start AI transformation
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
                <span>~/ai-machine-learning</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Disciplines",      "NLP · Vision · Prediction · Auto"],
                  ["Primary stack",    "Python · TensorFlow · PyTorch"],
                  ["Timeline",         "4 weeks – 6 months"],
                  ["Projects shipped", "24+"],
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
                What we build with AI.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Custom AI solutions from data pipeline through deployed model —
              one team that owns the full stack.
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
            frameworks & platforms
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
                From raw data to production model.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Five structured stages — rigorous enough to trust, iterative
              enough to adapt when the data tells you something new.
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
                Why AI implementation pays.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The measurable outcomes of applying AI to real business
              problems — not theoretical gains.
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
              AI that shipped and held up.
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
            Have a problem AI could solve? Let's find out.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            We'll start with a free AI readiness assessment — no commitment.
            We'll look at your data, your use case, and tell you honestly what
            ML can and can't do for your specific problem.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Get AI consultation
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

export default AIMachineLearning;