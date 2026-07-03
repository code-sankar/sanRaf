import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, AlertTriangle } from "lucide-react";

/* ─── data ──────────────────────────────────────────────────── */

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED   = "1 January 2026";

const sections = [
  {
    id: "general",
    num: "01",
    title: "General information only",
    body: [
      `The information published on the SanRaf website ("Site") — including blog posts, case studies, service descriptions, and technical write-ups — is provided by Sankar & Rafel Software Solutions ("SanRaf", "we", "us") for general informational purposes only.`,
      `Nothing on the Site constitutes a binding offer, a proposal, or a commitment to deliver any specific service, feature, or result. Any actual engagement between you and SanRaf is governed by a separately signed Statement of Work and our Terms of Service.`,
    ],
  },
  {
    id: "no-advice",
    num: "02",
    title: "Not professional advice",
    body: [
      `Content on the Site does not constitute legal, financial, security, medical, or regulated professional advice. Articles about architecture patterns, security posture, compliance, or performance optimisation reflect general industry practice and our experience — not tailored advice for your organisation.`,
      `Before acting on anything you read here, consult a qualified professional who can review your specific circumstances. Decisions taken solely on the basis of Site content are made at your own risk.`,
    ],
  },
  {
    id: "accuracy",
    num: "03",
    title: "Accuracy and completeness",
    body: [
      `We take reasonable care to ensure the information on this Site is accurate at the time of publication. However, technology, standards, and best practices evolve quickly — content may become outdated, incomplete, or superseded without notice.`,
      `We make no warranty, express or implied, as to the accuracy, reliability, currency, or completeness of any content on the Site. Any reliance you place on such information is strictly at your own risk.`,
    ],
  },
  {
    id: "external-links",
    num: "04",
    title: "External links and third-party content",
    body: [
      `The Site may contain links to third-party websites, tools, libraries, and services that are not owned or controlled by SanRaf. We provide these links purely for reference and convenience.`,
      `We have no control over — and assume no responsibility for — the content, privacy practices, or availability of any third-party site or resource. Inclusion of a link does not imply endorsement.`,
    ],
  },
  {
    id: "case-studies",
    num: "05",
    title: "Case studies and testimonials",
    body: [
      `Case studies, client outcomes, and testimonials published on the Site describe specific engagements under specific conditions. Metrics such as performance uplifts, cost savings, or user growth reflect what a particular client experienced — not a guarantee of what your project will achieve.`,
      `Where a client has requested confidentiality, identifying details may have been altered or generalised. Your results will depend on your product, market, team, and how the work is executed together.`,
    ],
  },
  {
    id: "code-samples",
    num: "06",
    title: "Technical content and code samples",
    body: [
      `Code snippets, configuration examples, and technical diagrams published on the Site are shared to illustrate concepts — not as production-ready implementations. They may omit error handling, security hardening, or edge-case coverage for the sake of clarity.`,
      `Before using any sample in a production system, review, test, and adapt it to your own environment. SanRaf is not liable for any damage, data loss, or security incident arising from unmodified use of illustrative code.`,
    ],
  },
  {
    id: "availability",
    num: "07",
    title: "Site availability",
    body: [
      `We aim to keep the Site available and functioning correctly, but we do not guarantee uninterrupted access. The Site may be temporarily unavailable due to maintenance, upgrades, hosting incidents, or events beyond our reasonable control.`,
      `SanRaf is not liable for any loss or inconvenience caused by such unavailability. We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice.`,
    ],
  },
  {
    id: "trademarks",
    num: "08",
    title: "Third-party names and trademarks",
    body: [
      `References to third-party product names, technologies, frameworks, and companies on the Site — for example, in our tech stack descriptions or comparison tables — are made purely for identification and descriptive purposes.`,
      `All such trademarks, service marks, and logos are the property of their respective owners. Their use here does not imply any affiliation with, endorsement by, or sponsorship from those third parties.`,
    ],
  },
  {
    id: "errors",
    num: "09",
    title: "Errors, omissions, and updates",
    body: [
      `Despite our best efforts, the Site may contain errors, inaccuracies, or omissions — including typographical mistakes, out-of-date pricing, or broken links. We reserve the right to correct any such errors and to update or remove content at any time without prior notice.`,
      `If you notice something that looks wrong, we'd appreciate a quick note via the contact form. We take corrections seriously.`,
    ],
  },
  {
    id: "governing-law",
    num: "10",
    title: "Governing law",
    body: [
      `This Disclaimer is governed by the laws of India. Any dispute arising out of or in connection with the content of this Site is subject to the exclusive jurisdiction of the courts at Dibrugarh, Assam.`,
      `This Disclaimer sits alongside our Terms of Service and Privacy Policy. Where a specific term in another document conflicts with this Disclaimer, the more specific document governs for that subject matter.`,
    ],
  },
];

/* ─── component ─────────────────────────────────────────────── */

const Disclaimer = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(sections[0].id);

  /* highlight the ToC entry for the section currently in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              legal / disclaimer
            </span>

            <h1 className="mt-5 max-w-[24ch] font-display text-[clamp(2rem,1.4rem+3vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
              What this site is — and isn't.
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-graphite">
              Our site is a place to learn about our work, our approach, and the
              technology we care about. It isn't a contract, and the content
              here isn't tailored professional advice. This page explains where
              those lines sit.
            </p>

            {/* meta row */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:max-w-md">
              <div>
                <p className="font-mono text-[0.72rem] lowercase text-faint">
                  effective
                </p>
                <p className="mt-1 font-display text-[0.95rem] font-medium text-ink">
                  {EFFECTIVE_DATE}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.72rem] lowercase text-faint">
                  last updated
                </p>
                <p className="mt-1 font-display text-[0.95rem] font-medium text-ink">
                  {LAST_UPDATED}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CONTENT + TOC ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">

            {/* ── TOC (sticky on desktop) ── */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-4 font-mono text-[0.72rem] lowercase text-faint">
                on this page
              </p>
              <nav>
                <ul className="space-y-1 border-l border-line">
                  {sections.map((s) => {
                    const active = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`group flex items-baseline gap-3 border-l-2 py-1.5 pl-4 -ml-px font-mono text-[0.78rem] transition ${
                            active
                              ? "border-accent text-ink"
                              : "border-transparent text-faint hover:text-ink"
                          }`}
                        >
                          <span
                            className={`w-[2ch] flex-none ${
                              active ? "text-accent" : "text-faint"
                            }`}
                          >
                            {s.num}
                          </span>
                          <span className="leading-snug">{s.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* ── main content ── */}
            <div className="min-w-0">
              {sections.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 border-b border-line pb-12 mb-12 last:mb-0 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.72rem] text-accent">
                      {s.num}
                    </span>
                    <span className="h-px w-6 bg-line-strong" />
                  </div>

                  <h2 className="mt-4 font-display text-[clamp(1.35rem,1.05rem+1vw,1.75rem)] font-medium tracking-tight text-ink">
                    {s.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-[0.97rem] leading-relaxed text-graphite"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              {/* callout */}
              <div className="mt-14 border border-line bg-white p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="font-display text-[0.95rem] font-medium text-ink">
                      The short version
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                      Treat everything on this site as background reading, not a
                      contract or engineering prescription. When you engage us,
                      the signed Statement of Work is what actually governs the
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT STRIP ══════════ */}
      <section className="border-b border-line bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                questions
              </span>
              <h2 className="mt-4 max-w-[26ch] font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.1rem)] font-medium tracking-tight text-ink">
                Spotted something off? Let us know.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-graphite">
                We update the site regularly. If something looks inaccurate,
                outdated, or unclear, drop us a note and we'll take a look.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
              >
                <Mail className="h-4 w-4" strokeWidth={1.6} />
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/terms-of-service")}
                className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate("/privacy-policy")}
                className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Disclaimer;