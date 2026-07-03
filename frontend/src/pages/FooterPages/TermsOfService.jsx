import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";

/* ─── data ──────────────────────────────────────────────────── */

const EFFECTIVE_DATE = "1 January 2026";
const LAST_UPDATED   = "1 January 2026";

const sections = [
  {
    id: "agreement",
    num: "01",
    title: "Agreement to terms",
    body: [
      `These Terms of Service ("Terms") form a binding agreement between you ("Client", "you") and Sankar & Rafel Software Solutions ("SanRaf", "we", "us"), a software development studio based in Dibrugarh, Assam, India.`,
      `By accessing our website, requesting a proposal, or engaging us for services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use of the site and do not engage our services.`,
    ],
  },
  {
    id: "services",
    num: "02",
    title: "Services we provide",
    body: [
      `SanRaf provides software engineering services including — but not limited to — custom web and mobile application development, UI/UX design, cloud engineering, DevOps, AI integration, cybersecurity consulting, and ongoing maintenance and support.`,
      `The specific scope, deliverables, timeline, and price for any engagement are defined in a separate Statement of Work ("SOW") or written proposal signed by both parties. In the event of a conflict between these Terms and a signed SOW, the SOW governs for that engagement.`,
    ],
  },
  {
    id: "client-responsibilities",
    num: "03",
    title: "Client responsibilities",
    body: [
      `To deliver on time and on budget, we rely on timely input from you. You agree to provide accurate briefs, requirements, brand assets, credentials, and feedback within reasonable timeframes agreed in the SOW.`,
      `You are responsible for ensuring that any content, data, code, or third-party materials you supply do not infringe intellectual property rights, violate applicable law, or contain malicious code.`,
    ],
  },
  {
    id: "fees",
    num: "04",
    title: "Fees and payment",
    body: [
      `Fees are quoted in the SOW and are exclusive of applicable taxes (including GST where applicable). Unless stated otherwise, invoices are payable within fourteen (14) days of the invoice date.`,
      `Milestone-based projects require the milestone payment to clear before the next phase begins. Late payments may attract interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to pause work on any engagement with overdue invoices.`,
    ],
  },
  {
    id: "ip",
    num: "05",
    title: "Intellectual property",
    body: [
      `Upon full payment of all fees due under an SOW, we assign to you all rights, title, and interest in the custom deliverables produced specifically for your project, excluding any pre-existing materials, open-source components, or third-party libraries used within them.`,
      `We retain ownership of our pre-existing tools, frameworks, methodologies, and know-how. You grant us a non-exclusive licence to reference the work in our portfolio and case studies unless you request confidentiality in writing.`,
    ],
  },
  {
    id: "confidentiality",
    num: "06",
    title: "Confidentiality",
    body: [
      `Each party agrees to keep confidential any non-public information disclosed by the other in the course of the engagement, and to use such information solely for the purpose of performing the services.`,
      `This obligation survives termination of the engagement for a period of three (3) years. It does not apply to information that is public knowledge, independently developed, or required to be disclosed by law.`,
    ],
  },
  {
    id: "warranties",
    num: "07",
    title: "Warranties and disclaimers",
    body: [
      `We warrant that our services will be performed with reasonable care and skill in line with industry standards. For a period of thirty (30) days after final delivery of a milestone, we will remedy any material defect in the deliverables at no additional cost, provided the defect is caused by our work and is reported in writing.`,
      `Beyond this express warranty, the website and our services are provided "as is" and "as available". We disclaim all other warranties, whether express or implied, to the fullest extent permitted by law — including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
    ],
  },
  {
    id: "liability",
    num: "08",
    title: "Limitation of liability",
    body: [
      `To the fullest extent permitted by applicable law, our total aggregate liability arising out of or in connection with any engagement is limited to the total fees paid by you to SanRaf under the relevant SOW in the six (6) months preceding the claim.`,
      `We are not liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, revenue, data, goodwill, or business interruption — even if we have been advised of the possibility of such damages.`,
    ],
  },
  {
    id: "indemnification",
    num: "09",
    title: "Indemnification",
    body: [
      `You agree to indemnify and hold harmless SanRaf, its founders, employees, and contractors from any third-party claims, damages, or expenses (including reasonable legal fees) arising from your misuse of the deliverables, your breach of these Terms, or content and materials you provided to us.`,
    ],
  },
  {
    id: "termination",
    num: "10",
    title: "Termination",
    body: [
      `Either party may terminate an engagement by giving fourteen (14) days' written notice, or immediately in the event of a material breach that is not remedied within seven (7) days of written notice.`,
      `On termination, you agree to pay for all services performed and expenses incurred up to the termination date. Provisions relating to intellectual property, confidentiality, liability, and governing law survive termination.`,
    ],
  },
  {
    id: "governing-law",
    num: "11",
    title: "Governing law and jurisdiction",
    body: [
      `These Terms and any engagement between us are governed by the laws of India, including the Indian Contract Act, 1872 and the Information Technology Act, 2000.`,
      `Any dispute arising out of or in connection with these Terms is subject to the exclusive jurisdiction of the courts at Dibrugarh, Assam. The parties will attempt in good faith to resolve any dispute through negotiation before commencing formal proceedings.`,
    ],
  },
  {
    id: "changes",
    num: "12",
    title: "Changes to these terms",
    body: [
      `We may revise these Terms from time to time to reflect changes in our services, business practices, or applicable law. The updated version will be posted on this page with a revised "Last updated" date.`,
      `For active engagements, the version of the Terms in effect at the time the SOW was signed continues to apply unless both parties agree in writing to adopt the revised version.`,
    ],
  },
];

/* ─── component ─────────────────────────────────────────────── */

const TermsOfService = () => {
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
              legal / terms of service
            </span>

            <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,1.4rem+3vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
              The terms under which we work together.
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-graphite">
              These terms govern your use of the SanRaf website and any
              engagement you have with our studio. We've written them in plain
              English wherever the law allows — so both sides know exactly what
              they've signed up for.
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

              {/* legal note */}
              <div className="mt-14 border border-line bg-white p-6">
                <div className="flex items-start gap-3">
                  <FileText
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="font-display text-[0.95rem] font-medium text-ink">
                      A note on scope
                    </p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-graphite">
                      These Terms cover general use of our site and services.
                      For any specific engagement, the signed Statement of Work
                      is the controlling document — read it carefully before
                      signing.
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
              <h2 className="mt-4 max-w-[24ch] font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.1rem)] font-medium tracking-tight text-ink">
                Something in here unclear? Ask us.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-graphite">
                We're happy to walk through any clause before you engage us.
                Reach out and we'll respond within one business day.
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

export default TermsOfService;