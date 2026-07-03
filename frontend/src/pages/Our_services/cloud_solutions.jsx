import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Cloud,
  Server,
  Database,
  Zap,
  Lock,
  Globe,
  BarChart,
  Users,
  Shield,
  Rocket,
  LineChart,
  TrendingUp,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless transition of your applications and data to the cloud with minimal downtime and full validation.",
    features: ["Application Migration", "Data Transfer", "Minimal Downtime", "Testing & Validation"],
    technologies: ["AWS Migration Hub", "Azure Migrate", "Google Migrate", "CloudEndure"],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Automate and manage your cloud infrastructure using Terraform, CloudFormation, and Ansible.",
    features: ["Terraform", "CloudFormation", "Ansible", "CI/CD Integration"],
    technologies: ["Terraform", "AWS CF", "Ansible", "GitLab CI"],
  },
  {
    icon: Database,
    title: "Cloud Database Management",
    description: "Managed database services with high availability, auto-scaling, and enterprise-grade backup.",
    features: ["High Availability", "Auto-scaling", "Backup & Recovery", "Performance Tuning"],
    technologies: ["AWS RDS", "Azure SQL", "Cloud SQL", "DynamoDB"],
  },
  {
    icon: Zap,
    title: "Serverless Architecture",
    description: "Build and deploy applications without managing servers — event-driven, scalable, and cost-optimised.",
    features: ["AWS Lambda", "Azure Functions", "API Gateway", "Event-driven"],
    technologies: ["AWS Lambda", "Azure Functions", "API Gateway", "Step Functions"],
  },
  {
    icon: Lock,
    title: "Cloud Security",
    description: "End-to-end security covering IAM, encryption, compliance management, and active threat detection.",
    features: ["IAM & Access Control", "Encryption", "Compliance", "Threat Detection"],
    technologies: ["AWS GuardDuty", "Azure Security", "CloudTrail", "WAF"],
  },
  {
    icon: Globe,
    title: "Multi-Cloud Strategy",
    description: "Optimise costs and avoid vendor lock-in with strategic multi-cloud deployments and orchestration.",
    features: ["Cost Optimisation", "Vendor Management", "Disaster Recovery", "Load Balancing"],
    technologies: ["Terraform", "Kubernetes", "Cloud Manager", "Cost Explorer"],
  },
];

const platforms = [
  "AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean",
  "IBM Cloud", "Oracle Cloud", "Kubernetes", "Docker",
  "Terraform", "Ansible", "Jenkins", "GitLab CI/CD",
];

const stats = [
  { value: "89%",   label: "of businesses use a multi-cloud strategy" },
  { value: "50%",   label: "average cost reduction with cloud optimisation" },
  { value: "99.9%", label: "uptime with properly architected cloud systems" },
  { value: "3×",    label: "faster deployment with cloud-native approaches" },
];

const benefits = [
  { icon: Zap,      title: "Scalability",       description: "Scale resources up or down on demand with auto-scaling built into every layer.",         metric: "99.9% uptime" },
  { icon: BarChart, title: "Cost Efficiency",   description: "Pay only for what you use — flexible pricing and reserved instances cut waste.",           metric: "40–60% savings" },
  { icon: Shield,   title: "Enhanced Security", description: "Enterprise-grade security with continuous updates, patches, and compliance certification.", metric: "Enterprise security" },
  { icon: Globe,    title: "Global Reach",      description: "Deploy closer to your users with multi-region availability and low-latency CDNs.",          metric: "Global coverage" },
  { icon: Database, title: "Disaster Recovery", description: "Automated backups, geo-redundant storage, and rapid recovery when things go wrong.",        metric: "RTO < 1 hour" },
  { icon: Users,    title: "Collaboration",     description: "Seamless teamwork with cloud-based tools and real-time collaboration across any location.",  metric: "Team efficiency" },
];

const processSteps = [
  { step: "01", title: "Assessment & Planning",   description: "Comprehensive analysis of your current infrastructure and a strategic migration plan.", duration: "1–2 weeks",  icon: BarChart,   deliverables: ["Cloud Readiness", "Migration Strategy", "Cost Analysis"] },
  { step: "02", title: "Architecture Design",     description: "Design scalable, secure, and cost-effective cloud architecture for your specific needs.", duration: "2–3 weeks",  icon: Server,     deliverables: ["Architecture Blueprint", "Security Design", "Scalability Plan"] },
  { step: "03", title: "Migration & Deployment",  description: "Phased migration with comprehensive testing and minimal disruption to running services.", duration: "4–8 weeks",  icon: Cloud,      deliverables: ["Migrated Workloads", "Testing Reports", "Performance Metrics"] },
  { step: "04", title: "Optimisation",            description: "Continuous monitoring and tuning of cloud resources for performance and cost.",           duration: "Ongoing",    icon: LineChart,  deliverables: ["Cost Optimisation", "Performance Tuning", "Best Practices"] },
  { step: "05", title: "Management & Support",    description: "24/7 monitoring, management, and support so your cloud environment stays healthy.",       duration: "Continuous", icon: Shield,     deliverables: ["Monitoring Dashboard", "Support SLA", "Security Updates"] },
];

const caseStudies = [
  {
    title: "E-commerce Platform Migration",
    industry: "Retail",
    challenge: "Legacy infrastructure unable to handle traffic spikes during major sales events, causing downtime and lost revenue.",
    solution: "Full migration to AWS with auto-scaling groups, CDN integration, and serverless architecture for peak traffic handling.",
    results: "99.9% uptime during Black Friday, 60% infrastructure cost reduction, seamless handling of 10× traffic spikes.",
    technologies: ["AWS EC2", "CloudFront", "Lambda", "Auto Scaling"],
  },
  {
    title: "Healthcare Data Management",
    industry: "Healthcare",
    challenge: "Secure storage and processing of sensitive patient data while maintaining HIPAA compliance and enabling real-time access.",
    solution: "HIPAA-compliant Azure cloud solution with encrypted storage, managed databases, and secure access controls.",
    results: "Enhanced data security, 3× faster data access for medical staff, 40% reduction in compliance management costs.",
    technologies: ["Azure SQL", "Storage Accounts", "Key Vault", "Monitor"],
  },
  {
    title: "SaaS Application Scaling",
    industry: "Technology",
    challenge: "Rapid user growth from 10K to 100K+ causing performance degradation and hitting hard scalability limits.",
    solution: "Microservices architecture on Kubernetes with auto-scaling, service mesh, and distributed database design.",
    results: "5× performance improvement, seamless scaling to 500K+ users, 99.95% availability across global regions.",
    technologies: ["Kubernetes", "Istio", "MongoDB", "Prometheus"],
  },
];

const faqs = [
  {
    q: "How long does cloud migration typically take?",
    a: "Most projects run 3–6 months. We use a phased approach starting with non-critical workloads to ensure minimal disruption. Exact timelines depend on data volume, application complexity, and compliance requirements — we scope this precisely at assessment.",
  },
  {
    q: "Is cloud computing secure for sensitive data?",
    a: "Yes — cloud providers offer enterprise-grade security that often exceeds on-premises capabilities. We layer encryption at rest and in transit, IAM, network security, and continuous monitoring on top. All solutions are designed to meet HIPAA, GDPR, and SOC 2 where applicable.",
  },
  {
    q: "How much can I save with cloud migration?",
    a: "Most businesses save 30–60% on IT costs — from reduced hardware, pay-as-you-go pricing, improved operational efficiency, and eliminated maintenance overhead. We provide a detailed cost-benefit analysis before committing to anything.",
  },
  {
    q: "What happens if there's a cloud outage?",
    a: "We design for high availability across multiple regions and availability zones with redundancy and failover built in. Recovery time objectives (RTO) are typically under one hour. We monitor 24/7 and respond to incidents before they affect your users.",
  },
];

/* ─── component ──────────────────────────────────────────────── */

const CloudSolutions = () => {
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
                services / cloud & devops
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Infrastructure that scales when you{" "}
                <span className="border-b-2 border-accent pb-0.5">need it to</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We migrate, architect, and operate cloud infrastructure on AWS,
                Azure, and GCP — with the security, cost discipline, and
                observability to keep it running reliably at any scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Start cloud migration
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
                <span>~/cloud-solutions</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Platforms",        "AWS · Azure · GCP"],
                  ["Timeline",         "3 months – 6 months"],
                  ["Uptime SLA",       "99.9%"],
                  ["Projects shipped", "28+"],
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
                What we do in the cloud.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              End-to-end cloud services — from initial assessment through
              migration, optimisation, and ongoing management.
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
            platforms & tools
          </span>
          <div className="mt-8 flex flex-wrap gap-2">
            {platforms.map((t) => (
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
                Five stages to cloud-native.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              A structured migration methodology that keeps your current
              operations running while we build what's next.
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
                Why cloud-native matters.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The operational and commercial advantages of getting cloud
              architecture right from the start.
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
              Cloud migrations we've delivered.
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
            Ready to move your infrastructure to the cloud?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Start with a free cloud assessment. We'll audit your current setup,
            model the costs, and give you a clear migration plan — no
            commitment required.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Get a free cloud assessment
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

export default CloudSolutions;