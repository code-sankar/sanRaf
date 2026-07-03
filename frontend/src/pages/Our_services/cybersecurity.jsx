import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Network,
  Users,
  Clock,
  BarChart,
  Target,
  Cpu,
  Zap,
  Award,
  Globe,
  Rocket,
  Fish,
  Skull,
  Waves,
  FolderLock,
  UserX,
  Plug,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: Shield,
    title: "Vulnerability Assessment",
    description: "Comprehensive security scanning to identify weaknesses across your systems and applications.",
    features: ["Automated Scanning", "Manual Verification", "Risk Scoring", "Remediation Guidance"],
    technologies: ["Nessus", "Qualys", "OpenVAS", "Nexpose"],
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description: "Simulated cyber attacks that test your defences and surface exploitable vulnerabilities.",
    features: ["Black Box Testing", "White Box Testing", "Social Engineering", "Physical Security"],
    technologies: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux"],
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring of your systems to detect and respond to threats in real time.",
    features: ["SIEM Implementation", "Threat Detection", "Log Analysis", "Incident Response"],
    technologies: ["Splunk", "ELK Stack", "Azure Sentinel", "QRadar"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response and recovery services for security breaches and active cyber attacks.",
    features: ["Incident Containment", "Forensic Analysis", "Recovery Planning", "Post-Incident Review"],
    technologies: ["Forensic Tools", "IR Platforms", "Malware Analysis", "E-Discovery"],
  },
  {
    icon: Key,
    title: "Access Management",
    description: "Robust authentication and authorisation controls across every system you run.",
    features: ["Multi-Factor Auth", "Role-Based Access", "Privileged Access", "Identity Governance"],
    technologies: ["Okta", "Azure AD", "Ping Identity", "CyberArk"],
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Protect your network infrastructure from unauthorised access and attacks.",
    features: ["Firewall Management", "IDS/IPS", "Network Segmentation", "VPN Solutions"],
    technologies: ["Palo Alto", "Cisco", "Fortinet", "Check Point"],
  },
];

const technologies = [
  "SIEM Solutions", "Firewalls", "IDS/IPS", "Endpoint Protection",
  "VPN", "Multi-Factor Auth", "Encryption", "Security Orchestration",
  "Threat Intelligence", "Cloud Security", "Zero Trust", "Compliance",
];

const threats = [
  {
    icon: Fish,
    name: "Phishing Attacks",
    description: "Deceptive attempts to obtain sensitive information through fake emails and websites.",
    prevention: "Employee training, email filtering, multi-factor authentication, DMARC implementation.",
    impact: "Data theft, credential compromise, financial loss.",
    examples: ["CEO Fraud", "Credential Harvesting", "Malware Distribution"],
  },
  {
    icon: Skull,
    name: "Ransomware",
    description: "Malicious software that encrypts data and demands payment for decryption.",
    prevention: "Regular backups, endpoint protection, patch management, application whitelisting.",
    impact: "Business disruption, data loss, financial extortion.",
    examples: ["WannaCry", "Ryuk", "REvil"],
  },
  {
    icon: Waves,
    name: "DDoS Attacks",
    description: "Overwhelming systems with traffic to cause service disruption and downtime.",
    prevention: "Traffic filtering, CDN protection, scalable infrastructure, rate limiting.",
    impact: "Service unavailability, revenue loss, reputation damage.",
    examples: ["Volumetric Attacks", "Protocol Attacks", "Application Layer Attacks"],
  },
  {
    icon: FolderLock,
    name: "Data Breaches",
    description: "Unauthorised access to sensitive information through system vulnerabilities.",
    prevention: "Encryption, access controls, monitoring, DLP, network segmentation.",
    impact: "Regulatory fines, reputation damage, legal liability.",
    examples: ["SQL Injection", "Misconfigured Databases", "Insider Threats"],
  },
  {
    icon: UserX,
    name: "Insider Threats",
    description: "Security risks originating from within the organisation — intentional or accidental.",
    prevention: "Access monitoring, least-privilege principle, employee screening, behaviour analytics.",
    impact: "IP theft, data sabotage, compliance violations.",
    examples: ["Malicious Insiders", "Negligent Employees", "Compromised Accounts"],
  },
  {
    icon: Plug,
    name: "API Vulnerabilities",
    description: "Security gaps in APIs that expose data and services to abuse.",
    prevention: "API security testing, rate limiting, authentication controls, input validation.",
    impact: "Data exposure, service abuse, account takeover.",
    examples: ["Broken Object Auth", "Mass Assignment", "Injection Flaws"],
  },
];

const processSteps = [
  { step: "01", title: "Assessment & Discovery", description: "Comprehensive evaluation of your current security posture and risk landscape.", duration: "1–2 weeks", icon: Target, deliverables: ["Risk Assessment", "Gap Analysis", "Security Baseline"] },
  { step: "02", title: "Strategy & Planning", description: "A tailored security strategy and clear implementation roadmap.", duration: "1–2 weeks", icon: BarChart, deliverables: ["Security Roadmap", "Policy Development", "Architecture Design"] },
  { step: "03", title: "Implementation", description: "Deploy security solutions and establish protective controls.", duration: "4–8 weeks", icon: Cpu, deliverables: ["Tool Deployment", "Configuration", "Integration"] },
  { step: "04", title: "Testing & Validation", description: "Validate controls through penetration testing and audits.", duration: "2–3 weeks", icon: Shield, deliverables: ["Pen Test Reports", "Compliance Certificates", "Remediation Plan"] },
  { step: "05", title: "Monitoring & Maintenance", description: "Continuous monitoring, updates, and ongoing improvement.", duration: "Ongoing", icon: Eye, deliverables: ["Monitoring Dashboards", "Incident Reports", "Security Updates"] },
];

const benefits = [
  { icon: Shield, title: "Proactive Protection", description: "Identify and mitigate threats before they impact your business.", metric: "90% faster threat detection" },
  { icon: Lock, title: "Regulatory Compliance", description: "Meet industry standards and avoid costly compliance violations.", metric: "100% compliance assurance" },
  { icon: Zap, title: "Business Continuity", description: "Minimise downtime and maintain operations during incidents.", metric: "99.9% uptime guarantee" },
  { icon: Award, title: "Customer Trust", description: "Build confidence with secure data handling and protection.", metric: "Enhanced reputation" },
  { icon: Globe, title: "Global Standards", description: "Implement internationally recognised security frameworks.", metric: "ISO 27001 compliant" },
  { icon: Rocket, title: "Rapid Response", description: "Quick containment and recovery from security incidents.", metric: "1-hour response time" },
];

const stats = [
  { value: "68%",      label: "of businesses faced cyber attacks in 2023" },
  { value: "$4.45M",   label: "average cost of a data breach" },
  { value: "287 days", label: "average time to identify a breach" },
  { value: "95%",      label: "of breaches involve human error" },
];

const caseStudies = [
  {
    title: "Financial Institution Security Overhaul",
    industry: "Banking & Finance",
    challenge: "Outdated security infrastructure with multiple critical vulnerabilities and compliance gaps.",
    solution: "Comprehensive assessment, multi-layered protection, employee training, and regulatory compliance.",
    results: "Zero security incidents in 18 months, full regulatory compliance, 99.9% threat detection rate.",
    technologies: ["SIEM", "MFA", "Encryption", "EDR"],
  },
  {
    title: "E-commerce Platform Protection",
    industry: "Retail & E-commerce",
    challenge: "Frequent DDoS attacks, payment data vulnerability, and eroding customer trust.",
    solution: "Web application firewall, DDoS protection, PCI DSS compliance, and secure payment gateway.",
    results: "99.99% uptime maintained, secure payment processing, customer trust and sales restored.",
    technologies: ["WAF", "DDoS Protection", "PCI DSS", "Tokenization"],
  },
  {
    title: "Healthcare Data Security",
    industry: "Healthcare",
    challenge: "HIPAA compliance gaps, patient data vulnerability, and legacy system risks.",
    solution: "End-to-end encryption, granular access controls, full audit trails, and staff training.",
    results: "HIPAA compliance achieved, secure patient data management, zero data breaches reported.",
    technologies: ["Encryption", "Access Controls", "Audit Trails", "HIPAA"],
  },
];

const faqs = [
  { q: "How often should we conduct security assessments?", a: "We recommend quarterly vulnerability assessments and annual penetration tests. Critical systems should be tested more frequently — especially after significant changes or major updates. Continuous monitoring should run for real-time threat detection." },
  { q: "What's the difference between vulnerability assessment and penetration testing?", a: "Vulnerability assessment identifies potential weaknesses through automated scanning and manual verification. Penetration testing actively exploits vulnerabilities to understand their real-world impact and test your defensive capability. Both are essential for comprehensive security." },
  { q: "Do small businesses need cybersecurity protection?", a: "Absolutely. Small businesses are increasingly targeted by attackers who see them as easier targets with valuable data. 43% of cyber attacks target small businesses, and 60% of small companies go out of business within six months of a serious attack." },
  { q: "How quickly can you respond to a security incident?", a: "Our incident response team can typically begin containment within 1 hour of notification for critical incidents. Exact timing depends on the SLA and incident severity. We maintain 24/7 monitoring and response for immediate threat mitigation." },
];

/* ─── component ──────────────────────────────────────────────── */

const Cybersecurity = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [activeThreat, setActiveThreat] = useState(0);

  const ThreatIcon = threats[activeThreat].icon;

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                services / cybersecurity
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Security that holds when it's{" "}
                <span className="border-b-2 border-accent pb-0.5">tested</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We protect your business from evolving cyber threats with
                enterprise-grade security — assessment, hardening, monitoring,
                and 24/7 response. No theatre, just defences that work under
                real attack.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
                >
                  Secure your business
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
                <span>~/cybersecurity</span>
                <span>overview</span>
              </div>
              <dl className="divide-y divide-line">
                {[
                  ["Coverage",        "Assess · Harden · Monitor"],
                  ["Response time",   "< 1 hour, critical incidents"],
                  ["Standards",       "ISO 27001 · SOC 2 · HIPAA"],
                  ["Monitoring",      "24/7/365"],
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
                How we protect you.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              Comprehensive protection for your digital assets, infrastructure,
              and operations — from assessment through active response.
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

      {/* ══════════ THREATS (interactive) ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                threat landscape
              </span>
              <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Threats we help you defend against.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Understanding the attack is the first step to stopping it. Select
              a threat to see impact, prevention, and real examples.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            {/* threat index */}
            <ul className="border border-line bg-white">
              {threats.map((t, i) => {
                const TIcon = t.icon;
                return (
                  <li key={t.name}>
                    <button
                      onClick={() => setActiveThreat(i)}
                      className={`flex w-full items-center gap-3 border-b border-line px-4 py-4 text-left transition last:border-b-0 ${
                        activeThreat === i ? "bg-accent/5" : "hover:bg-paper"
                      }`}
                    >
                      <TIcon
                        className={`h-4 w-4 flex-none ${activeThreat === i ? "text-accent" : "text-faint"}`}
                        strokeWidth={1.6}
                      />
                      <span className="font-display text-[0.95rem] font-medium text-ink">
                        {t.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* threat detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeThreat}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="border border-line bg-white p-8"
              >
                <div className="flex items-start gap-4">
                  <ThreatIcon className="mt-1 h-6 w-6 flex-none text-ink" strokeWidth={1.5} />
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-[1.4rem] font-medium text-ink">
                        {threats[activeThreat].name}
                      </h3>
                      <span className="border border-accent/40 bg-accent/5 px-2 py-0.5 font-mono text-[0.66rem] text-accent">
                        risk: high
                      </span>
                    </div>
                    <p className="mt-2 max-w-[56ch] text-[0.95rem] leading-relaxed text-graphite">
                      {threats[activeThreat].description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[0.7rem] text-faint">potential impact</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink">
                      {threats[activeThreat].impact}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.7rem] text-faint">prevention</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                      {threats[activeThreat].prevention}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="mb-2 font-mono text-[0.7rem] text-faint">common examples</p>
                  <div className="flex flex-wrap gap-1.5">
                    {threats[activeThreat].examples.map((ex) => (
                      <span key={ex} className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite">
                        {ex}
                      </span>
                    ))}
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
            security stack
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
                A methodical security process.
              </h2>
            </div>
            <p className="max-w-[34ch] text-graphite">
              Five stages from first assessment to continuous monitoring —
              structured, documented, and repeatable.
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
                Why professional security pays.
              </h2>
            </div>
            <p className="max-w-[32ch] text-graphite">
              The concrete outcomes of treating security as engineering rather
              than an afterthought.
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
              success stories
            </span>
            <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              Security work that held up.
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
            Ready to find out where you're exposed?
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Start with a security audit. We'll show you what an attacker would
            see — and exactly how to close the gaps.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Get a security audit
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

export default Cybersecurity;