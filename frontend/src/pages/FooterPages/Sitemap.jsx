import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, FileCode2 } from "lucide-react";

/* ─── data — mirrors main.jsx routes ────────────────────────── */

const groups = [
  {
    id: "overview",
    label: "overview",
    heading: "The essentials",
    caption: "Start here — what the studio is, who runs it, and how to reach us.",
    items: [
      { n: "01", path: "/",        title: "Home",        desc: "Studio overview and capability index" },
      { n: "02", path: "/whyUs",   title: "Why SanRaf",  desc: "How we work and what we optimise for" },
      { n: "03", path: "/contact", title: "Contact",     desc: "Start a project or ask a question" },
    ],
  },
  {
    id: "services",
    label: "services",
    heading: "What we build",
    caption: "Nine practice areas, each with its own dedicated page covering scope, process, and stack.",
    items: [
      { n: "01", path: "/web",           title: "Web Development",         desc: "Web platforms and applications" },
      { n: "02", path: "/apps",          title: "Mobile App Development",  desc: "iOS, Android, React Native, Flutter" },
      { n: "03", path: "/design",        title: "UI/UX Design",            desc: "Research, prototyping, design systems" },
      { n: "04", path: "/cloud",         title: "Cloud Solutions",         desc: "AWS, Azure, GCP, DevOps, infra" },
      { n: "05", path: "/analytics",     title: "Data & Analytics",        desc: "Pipelines, BI, dashboards, ML" },
      { n: "06", path: "/ai",            title: "AI & Machine Learning",   desc: "Applied AI, NLP, computer vision" },
      { n: "07", path: "/cybersecurity", title: "Cybersecurity",           desc: "Audits, pen-testing, compliance" },
      { n: "08", path: "/blockchain",    title: "Blockchain Solutions",    desc: "Smart contracts, dApps, Web3" },
      { n: "09", path: "/testing",       title: "QA & Testing",            desc: "Automated and manual testing" },
    ],
  },
  {
    id: "work",
    label: "work",
    heading: "Selected work",
    caption: "Case studies, client projects, and the technology decisions behind them.",
    items: [
      { n: "01", path: "/cases",    title: "Case Studies",    desc: "Deep-dives on selected engagements" },
      { n: "02", path: "/projects", title: "Client Projects", desc: "The wider portfolio at a glance" },
      { n: "03", path: "/tech",     title: "Technologies",    desc: "The tools and languages we work in" },
    ],
  },
  {
    id: "resources",
    label: "resources",
    heading: "Reading room",
    caption: "Notes from the studio — engineering write-ups, opinions, and lessons learned.",
    items: [
      { n: "01", path: "/blog", title: "Blog", desc: "Long-form writing from the team" },
    ],
  },
  {
    id: "legal",
    label: "legal",
    heading: "The fine print",
    caption: "How we handle your data, what you can expect from us, and what this site is for.",
    items: [
      { n: "01", path: "/privacy-policy",   title: "Privacy Policy",    desc: "How we collect, use, and protect data" },
      { n: "02", path: "/terms-of-service", title: "Terms of Service",  desc: "The terms under which we work together" },
      { n: "03", path: "/disclaimer",       title: "Disclaimer",        desc: "What this site is — and isn't" },
      { n: "04", path: "/sitemap",          title: "Sitemap",           desc: "This page — index of the whole site" },
    ],
  },
];

const totalPages    = groups.reduce((n, g) => n + g.items.length, 0);
const totalSections = groups.length;

/* ─── component ─────────────────────────────────────────────── */

const Sitemap = () => {
  const navigate = useNavigate();

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
              utility / sitemap
            </span>

            <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,1.4rem+3vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-ink">
              Every page on this site, in one place.
            </h1>

            <p className="mt-6 max-w-[58ch] text-[1rem] leading-relaxed text-graphite">
              A flat index of everything published on the SanRaf site — grouped
              the way we think about it internally. Handy if you're looking for
              something specific, or want to see the studio's surface area at a
              glance.
            </p>

            {/* meta row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-6 sm:max-w-lg">
              <div>
                <p className="font-mono text-[0.72rem] lowercase text-faint">
                  pages
                </p>
                <p className="mt-1 font-display text-[1.5rem] font-medium leading-none text-ink">
                  {String(totalPages).padStart(2, "0")}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.72rem] lowercase text-faint">
                  sections
                </p>
                <p className="mt-1 font-display text-[1.5rem] font-medium leading-none text-ink">
                  {String(totalSections).padStart(2, "0")}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.72rem] lowercase text-faint">
                  format
                </p>
                <p className="mt-1 font-display text-[1.5rem] font-medium leading-none text-ink">
                  HTML
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ INDEX GROUPS ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="space-y-20 md:space-y-28">
            {groups.map((g) => (
              <div key={g.id}>
                {/* group header */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                      <span className="inline-block h-px w-3.5 bg-accent" />
                      {g.label}
                    </span>
                    <h2 className="mt-4 max-w-[24ch] font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.1rem)] font-medium tracking-tight text-ink">
                      {g.heading}
                    </h2>
                  </div>
                  <p className="max-w-[38ch] text-[0.95rem] leading-relaxed text-graphite">
                    {g.caption}
                  </p>
                </div>

                {/* index list */}
                <ul className="border-t border-line">
                  {g.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="group flex items-baseline gap-4 border-b border-line px-3 py-5 transition hover:bg-accent/5 sm:px-4"
                      >
                        <span className="w-[2ch] flex-none font-mono text-[0.72rem] text-accent">
                          {item.n}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-[1.05rem] font-medium leading-tight text-ink">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[0.88rem] leading-snug text-graphite">
                            {item.desc}
                          </span>
                        </span>

                        <span className="hidden font-mono text-[0.78rem] text-faint sm:inline">
                          {item.path}
                        </span>

                        <ArrowUpRight
                          className="h-4 w-4 flex-none text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          strokeWidth={1.6}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML sitemap note */}
          <div className="mt-20 border border-line bg-white p-6">
            <div className="flex items-start gap-3">
              <FileCode2
                className="mt-0.5 h-4 w-4 flex-none text-accent"
                strokeWidth={1.6}
              />
              <div>
                <p className="font-display text-[0.95rem] font-medium text-ink">
                  Looking for the XML sitemap?
                </p>
                <p className="mt-2 max-w-[60ch] text-[0.9rem] leading-relaxed text-graphite">
                  Search engines and crawlers can find our machine-readable
                  sitemap at{" "}
                  <a
                    href="/sitemap.xml"
                    className="font-mono text-[0.85rem] text-ink underline decoration-line-strong underline-offset-4 transition hover:text-accent hover:decoration-accent"
                  >
                    /sitemap.xml
                  </a>
                  . This page is the human-friendly version.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER STRIP ══════════ */}
      <section className="border-b border-line bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                cant find it?
              </span>
              <h2 className="mt-4 max-w-[26ch] font-display text-[clamp(1.5rem,1.1rem+1.5vw,2.1rem)] font-medium tracking-tight text-ink">
                Not seeing what you need? Just ask.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-graphite">
                If something's missing or you're not sure where to start, drop
                us a line. We're a small team — a human will read it.
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
                onClick={() => navigate("/")}
                className="inline-flex items-center border border-line-strong px-5 py-3.5 font-mono text-[0.82rem] font-medium text-ink transition hover:border-ink"
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sitemap;