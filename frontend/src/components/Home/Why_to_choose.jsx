import { motion } from "framer-motion";
import { Code, Rocket, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    Icon: Code,
    title: "Expert Engineers",
    desc: "Modern frameworks, cloud-native apps, and scalable architectures — built by senior engineers.",
  },
  {
    Icon: Rocket,
    title: "Agile & Rapid Delivery",
    desc: "Iterative development with clear sprints keeps time-to-market short and progress visible.",
  },
  {
    Icon: ShieldCheck,
    title: "Security-Driven",
    desc: "Security, compliance, and reliability are considered in every project from day one.",
  },
  {
    Icon: Users,
    title: "Collaborative Approach",
    desc: "Open communication and feedback cycles keep you in control the whole way through.",
  },
];

const stats = [
  { value: "10+", label: "years in tech" },
  { value: "120+", label: "projects delivered" },
  { value: "98%", label: "client satisfaction" },
  { value: "30+", label: "global clients" },
];

const WhyChooseUs = () => {
  return (
    <section className="font-body bg-paper border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Left — approach */}
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              why partner with us
            </span>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              We work like part of your team.
            </h2>
            <p className="mt-5 max-w-[52ch] text-graphite">
              We're not just developers — we're engineering partners. From
              early-stage startups to established companies, we deliver reliable,
              scalable software that holds up in production.
            </p>

            <div className="mt-10 border-t border-line">
              {features.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-5 border-b border-line py-5"
                >
                  <span className="font-mono text-[0.72rem] text-accent pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 flex-none text-ink" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-display text-[1.1rem] font-medium text-ink">
                      {title}
                    </h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-graphite">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stats panel */}
          <aside className="h-fit border border-line bg-white lg:sticky lg:top-24">
            <div className="border-b border-line px-5 py-3 font-mono text-[0.72rem] text-faint">
              ~/track-record
            </div>
            <div className="grid grid-cols-2">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 ${i % 2 === 0 ? "border-r border-line" : ""} ${
                    i < 2 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="font-display text-[clamp(2rem,1.4rem+2vw,2.8rem)] font-medium tracking-tight text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[0.72rem] text-graphite">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;