import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Clock,
  Code2,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const stats = [
  { value: "200+", label: "projects completed" },
  { value: "98%",  label: "client satisfaction" },
  { value: "50+",  label: "expert developers" },
  { value: "24/7", label: "support available" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Top-tier code quality, security practices, and data protection across every solution we ship.",
    highlights: ["Enterprise Security", "Code Quality", "Data Protection"],
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Developers, designers, and strategists who work together — not in silos — to bring your vision to life.",
    highlights: ["Expert Developers", "UI/UX Designers", "Project Managers"],
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Agile workflows and milestone tracking mean you always know where things stand and when they land.",
    highlights: ["Agile Methodology", "Milestone Tracking", "Quick Deployment"],
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "We use the frameworks your product actually needs — React, Node.js, Next.js, cloud-native infrastructure.",
    highlights: ["React / Next.js", "Node.js", "Cloud Native"],
  },
];

const ratings = [
  { score: "5.0", platform: "Google Reviews" },
  { score: "4.9", platform: "Clutch Reviews" },
];

const reasons = [
  "We don't subcontract. The team you meet is the team that builds.",
  "Every engagement starts with discovery, not a quote.",
  "We stay on after launch — monitoring, fixes, and what comes next.",
  "Transparent pricing. No change-order surprises mid-project.",
  "Senior engineers on every project, not just for kickoff.",
  "100+ companies trust us with their production systems.",
];

/* ─── component ──────────────────────────────────────────────── */

const WhyUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                why sanraf
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                A team you can hold{" "}
                <span className="border-b-2 border-accent pb-0.5">accountable</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                We're not just another development agency. We're a studio that
                treats your product like it's ours — from the first call through
                production support. Over 100 companies have trusted us with
                their digital foundations.
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
                  View case studies
                </button>
              </div>
            </div>

            {/* ratings panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/client-ratings</span>
                <span>verified</span>
              </div>
              {ratings.map((r, i) => (
                <div
                  key={r.platform}
                  className={`px-4 py-5 ${i < ratings.length - 1 ? "border-b border-line" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.74rem] text-graphite">{r.platform}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 font-display text-[2.2rem] font-medium tracking-tight text-ink">
                    {r.score}
                  </div>
                </div>
              ))}
              <div className="border-t border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                trusted by 100+ companies worldwide
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAND ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`p-6 md:p-8
                  ${i % 2 !== 0 ? "border-l border-line" : ""}
                  ${i < 2 ? "border-b border-line md:border-b-0" : ""}
                  ${i > 0 ? "md:border-l md:border-line" : ""}
                `}
              >
                <div className="font-display text-[clamp(1.75rem,1.2rem+1.5vw,2.4rem)] font-medium tracking-tight text-ink">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[0.72rem] text-graphite">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                what sets us apart
              </span>
              <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
                Four things we refuse to compromise on.
              </h2>
            </div>
            <p className="max-w-[36ch] text-graphite">
              These aren't marketing lines — they're commitments we make on
              every engagement, regardless of scope or budget.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.article
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col border-b border-r border-line bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.72rem] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-display text-[1.2rem] font-medium text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-graphite">
                    {f.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {f.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-line-strong px-2 py-0.5 font-mono text-[0.68rem] text-graphite"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ REASONS — plain-language commitments ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                the honest version
              </span>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium leading-tight tracking-tight text-ink">
                What working with us actually means.
              </h2>
              <p className="mt-5 max-w-[42ch] text-graphite">
                We could list awards and certifications here. Instead, here's
                what every client we've worked with has found to be true.
              </p>
            </div>

            <ul className="border-t border-line">
              {reasons.map((reason, i) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <CheckCircle className="h-4 w-4 flex-none text-accent mt-0.5" strokeWidth={1.8} />
                  <span className="text-[0.97rem] leading-relaxed text-ink">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BADGES ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-12 md:py-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              verified by clients
            </span>

            <div className="flex flex-wrap items-center gap-10">
              {ratings.map((r, i) => (
                <div key={r.platform} className="flex items-center gap-4">
                  {i > 0 && <span className="h-8 w-px bg-line" />}
                  <div>
                    <div className="font-display text-[1.6rem] font-medium tracking-tight text-ink">
                      {r.score}
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="mt-1 font-mono text-[0.68rem] text-faint">
                      {r.platform}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-ink text-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-[#9AA0AC]">
            <span className="inline-block h-px w-3.5 bg-white" />
            ready to work together
          </span>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.9rem)] font-medium leading-[1.08] tracking-tight text-paper">
            Ready to transform your digital presence? Let's talk.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[#9AA0AC]">
            Join 100+ satisfied clients who trust us with their digital
            transformation. The first call is free — no pitch, just a
            conversation about what you're building.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-accent hover:bg-accent hover:text-white"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="inline-flex items-center border border-[#3A3E48] px-5 py-3.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-paper"
            >
              View case studies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyUs;