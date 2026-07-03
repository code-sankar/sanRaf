import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  FileText,
  Mail,
  ArrowRight,
  Lock,
  Cookie,
  Users,
  Database,
  Globe,
  UserCheck,
  RefreshCw,
  AlertCircle,
  BookOpen,
} from "lucide-react";

/* ─── data ──────────────────────────────────────────────────── */

const meta = {
  effective: "1 July 2026",
  updated:   "1 July 2026",
  version:   "v1.0",
};

const summary = [
  { label: "we collect", value: "only what a project needs" },
  { label: "we sell",    value: "nothing, ever" },
  { label: "we share",   value: "with named subprocessors" },
  { label: "you can",    value: "access, correct, or delete" },
];

const sections = [
  {
    id: "introduction",
    n: "01",
    title: "Introduction",
    icon: BookOpen,
    body: [
      "Sankar & Rafel Software Solutions (\u201cSanRaf\u201d, \u201cwe\u201d, \u201cour\u201d, or \u201cus\u201d) operates the website sanraf.dev and provides software development services to clients worldwide. This policy explains what personal information we collect, why we collect it, and how we handle it.",
      "It applies to visitors of our website, prospects who contact us, and clients we work with. It is written in plain English on purpose \u2014 if anything here is unclear, email us and we\u2019ll explain.",
    ],
  },
  {
    id: "information-we-collect",
    n: "02",
    title: "Information we collect",
    icon: Database,
    body: [
      "We collect only the information we need to answer your enquiry, deliver our services, and operate our website. That falls into three buckets:",
    ],
    list: [
      {
        h: "Information you give us",
        p: "Name, email address, company, project budget, timeline, and the project details you share in our contact form or by email. If you become a client, this expands to what a normal software engagement requires \u2014 invoicing details, project credentials, and content you share with us to do the work.",
      },
      {
        h: "Information collected automatically",
        p: "When you visit sanraf.dev we log basic technical data \u2014 IP address, browser, device type, referring page, and pages viewed \u2014 through privacy-respecting analytics. We use this in aggregate to understand traffic, not to build profiles of individuals.",
      },
      {
        h: "Information from third parties",
        p: "If you reach us via a platform (LinkedIn, Clutch, a referral partner), we receive whatever contact information that platform passes on. We do not buy contact data from data brokers.",
      },
    ],
  },
  {
    id: "how-we-use",
    n: "03",
    title: "How we use your information",
    icon: UserCheck,
    body: [
      "We use the information you provide for a small, defined set of purposes:",
    ],
    list: [
      { h: "Respond to enquiries",           p: "The primary use \u2014 replying to project requests, scoping calls, and follow-ups." },
      { h: "Deliver contracted services",    p: "Everything a software engagement requires: writing code, hosting demos, sharing documents, and handing off deliverables." },
      { h: "Send necessary communications",  p: "Status updates, invoices, contract renewals. We do not send marketing newsletters unless you explicitly opt in." },
      { h: "Improve our website & services", p: "Aggregate analytics inform which content is useful, which pages convert, and where the site needs work." },
      { h: "Comply with legal obligations",  p: "Tax, contract, and audit records we are required to keep." },
    ],
  },
  {
    id: "cookies",
    n: "04",
    title: "Cookies & tracking",
    icon: Cookie,
    body: [
      "Our website uses a small number of cookies and similar technologies. We do not run advertising cookies or cross-site trackers.",
    ],
    list: [
      { h: "Essential", p: "Required for the site to function \u2014 session state, security, and preferences you set (like dismissing a banner)." },
      { h: "Analytics", p: "Anonymised traffic measurement so we can tell what\u2019s working. IP addresses are truncated before storage." },
    ],
    note: "You can disable cookies in your browser at any time. Essential cookies cannot be disabled without breaking site functionality; analytics can.",
  },
  {
    id: "sharing",
    n: "05",
    title: "How we share information",
    icon: Users,
    body: [
      "We do not sell personal information. We share it only with the parties needed to run the business, and only for the purposes below:",
    ],
    list: [
      { h: "Service providers (subprocessors)", p: "Hosting, email delivery, analytics, payment processing, and version control. Each is bound by a data processing agreement and processes data only on our instructions." },
      { h: "Professional advisors",             p: "Accountants, auditors, and legal counsel when required for compliance." },
      { h: "Authorities",                        p: "When compelled by valid legal process \u2014 a court order, statutory request, or regulatory investigation. We push back on overreach." },
      { h: "Business transfers",                 p: "If SanRaf is ever merged, acquired, or restructured, information may transfer as part of the business assets. We will notify affected users if this happens." },
    ],
  },
  {
    id: "retention",
    n: "06",
    title: "How long we keep it",
    icon: RefreshCw,
    body: [
      "We keep personal information only as long as necessary for the purpose it was collected \u2014 no default \u201cforever\u201d.",
    ],
    list: [
      { h: "Contact form submissions", p: "12 months if no engagement follows, then deleted." },
      { h: "Client project data",      p: "Duration of the engagement plus 7 years for accounting, tax, and warranty purposes, then archived or deleted." },
      { h: "Analytics data",           p: "26 months in raw form; aggregated indefinitely." },
      { h: "Email correspondence",     p: "3 years from last message, unless part of an active engagement." },
    ],
  },
  {
    id: "your-rights",
    n: "07",
    title: "Your rights",
    icon: Shield,
    body: [
      "Regardless of where you live, you can exercise the following rights over the personal information we hold about you:",
    ],
    list: [
      { h: "Access",           p: "Ask for a copy of the personal information we hold about you." },
      { h: "Correction",       p: "Ask us to fix information that is incorrect or out of date." },
      { h: "Deletion",         p: "Ask us to delete your information, subject to obligations we may have to retain it." },
      { h: "Portability",      p: "Receive your information in a common, machine-readable format." },
      { h: "Withdraw consent", p: "Where we rely on your consent, you can withdraw it at any time." },
      { h: "Object or restrict", p: "Object to or restrict certain processing activities." },
    ],
    note: "Under India\u2019s Digital Personal Data Protection Act 2023, EU/UK GDPR, and other applicable laws, you also have the right to lodge a complaint with your data protection authority. Reach us first \u2014 we\u2019d rather resolve it directly.",
  },
  {
    id: "security",
    n: "08",
    title: "Data security",
    icon: Lock,
    body: [
      "We protect personal information with technical and organisational measures proportionate to the sensitivity of the data. This includes encryption in transit (TLS), encryption at rest for stored data, access controls on internal systems, and regular review of who has access to what.",
      "No system is fully impregnable. If a breach affecting your personal information occurs, we will notify you and any required authority without undue delay, as required by law.",
    ],
  },
  {
    id: "international",
    n: "09",
    title: "International data transfers",
    icon: Globe,
    body: [
      "SanRaf is based in Dibrugarh, India, and works with clients globally. Personal information may be transferred to, stored in, or processed in countries other than the one you live in \u2014 including India, the United States, and the European Union \u2014 where our infrastructure providers operate.",
      "When we transfer data outside of jurisdictions with equivalent protection, we rely on Standard Contractual Clauses or other approved safeguards to ensure your information remains protected to the standard you would expect at home.",
    ],
  },
  {
    id: "children",
    n: "10",
    title: "Children\u2019s privacy",
    icon: AlertCircle,
    body: [
      "Our website and services are directed to businesses and professionals. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal information, contact us and we will delete it.",
    ],
  },
  {
    id: "changes",
    n: "11",
    title: "Changes to this policy",
    icon: FileText,
    body: [
      "We may update this policy from time to time \u2014 usually to reflect new services, legal requirements, or clearer language. When we do, we update the \u201clast updated\u201d date at the top of the page. Material changes will be flagged on the site homepage for at least 30 days before they take effect.",
      "The previous version of this policy remains available on request.",
    ],
  },
  {
    id: "contact",
    n: "12",
    title: "Contact us",
    icon: Mail,
    body: [
      "For any question about this policy, or to exercise your rights, get in touch. We respond within 30 days \u2014 usually much sooner.",
    ],
  },
];

/* ─── component ─────────────────────────────────────────────── */

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  // Scrollspy: highlight the section currently in the middle band of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                legal / privacy
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Your data,{" "}
                <span className="border-b-2 border-accent pb-0.5">on the record</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                The full account of what we collect, why, who else sees it, and
                what you can do about it. Written to be read \u2014 not scanned past.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.72rem]">
                <div className="flex items-center gap-2">
                  <span className="text-faint">effective</span>
                  <span className="text-ink">{meta.effective}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-faint">last updated</span>
                  <span className="text-ink">{meta.updated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-faint">version</span>
                  <span className="text-ink">{meta.version}</span>
                </div>
              </div>
            </div>

            {/* TL;DR panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/tl;dr</span>
                <span>the short version</span>
              </div>
              <ul>
                {summary.map((s, i) => (
                  <li
                    key={s.label}
                    className="flex items-baseline gap-4 border-b border-line px-4 py-4 transition last:border-b-0 hover:bg-accent/5"
                  >
                    <span className="w-[2ch] flex-none font-mono text-[0.72rem] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.72rem] text-faint">
                      {s.label}
                    </span>
                    <span className="ml-auto text-right font-display text-[0.95rem] text-ink">
                      {s.value}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ POLICY BODY + TOC ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">

            {/* Sticky TOC */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                on this page
              </div>
              <ul className="space-y-0.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`group flex items-baseline gap-3 border-l py-2 pl-3 pr-2 transition ${
                        activeId === s.id
                          ? "border-accent text-ink"
                          : "border-line text-graphite hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      <span
                        className={`w-[2ch] flex-none font-mono text-[0.7rem] ${
                          activeId === s.id ? "text-accent" : "text-faint"
                        }`}
                      >
                        {s.n}
                      </span>
                      <span className="text-[0.86rem] leading-tight">
                        {s.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Body */}
            <div className="min-w-0 max-w-[68ch]">
              {sections.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.article
                    key={s.id}
                    id={s.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    className={`scroll-mt-24 py-10 ${
                      idx === 0 ? "pt-0" : "border-t border-line"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.72rem] text-accent">
                        {s.n}
                      </span>
                      <Icon className="h-4 w-4 text-graphite" strokeWidth={1.6} />
                      <h2 className="font-display text-[clamp(1.35rem,1.1rem+0.8vw,1.75rem)] font-medium tracking-tight text-ink">
                        {s.title}
                      </h2>
                    </div>

                    {s.body?.map((p, i) => (
                      <p
                        key={i}
                        className="mt-4 text-[0.98rem] leading-[1.65] text-graphite"
                      >
                        {p}
                      </p>
                    ))}

                    {s.list && (
                      <ul className="mt-6 divide-y divide-line border-y border-line">
                        {s.list.map((item) => (
                          <li
                            key={item.h}
                            className="grid gap-2 py-4 sm:grid-cols-[1fr_2fr] sm:gap-6"
                          >
                            <div className="font-display text-[0.95rem] font-medium text-ink">
                              {item.h}
                            </div>
                            <p className="text-[0.92rem] leading-[1.6] text-graphite">
                              {item.p}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.note && (
                      <div className="mt-6 border-l-2 border-accent bg-accent/5 px-5 py-4">
                        <p className="font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                          note
                        </p>
                        <p className="mt-1.5 text-[0.92rem] leading-[1.6] text-ink">
                          {s.note}
                        </p>
                      </div>
                    )}

                    {/* Contact card lives inside the last section */}
                    {s.id === "contact" && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="border border-line bg-white p-5">
                          <div className="flex items-center gap-2 font-mono text-[0.72rem] text-faint">
                            <Mail className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                            privacy queries
                          </div>
                          <p className="mt-3 font-display text-[0.98rem] text-ink">
                            privacy@sanraf.dev
                          </p>
                          <p className="mt-1 text-[0.85rem] text-graphite">
                            Response within 30 days, usually within 3 business days.
                          </p>
                        </div>
                        <div className="border border-line bg-white p-5">
                          <div className="flex items-center gap-2 font-mono text-[0.72rem] text-faint">
                            <Shield className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                            postal address
                          </div>
                          <p className="mt-3 text-[0.92rem] leading-[1.5] text-ink">
                            Sankar &amp; Rafel Software Solutions
                            <br />
                            Dibrugarh, Assam &mdash; 786001
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA BAND ══════════ */}
      <section className="font-body bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            still have questions
          </span>

          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            If anything here isn\u2019t clear, ask. We\u2019d rather answer once than have it misread.
          </h2>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:privacy@sanraf.dev"
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              privacy@sanraf.dev
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;