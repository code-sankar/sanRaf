import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The team built our e-commerce platform with flawless performance and a stunning UI. Sales grew by 60% in just 3 months.",
    author: "Arjun Mehta",
    company: "Trendify Stores",
  },
  {
    quote:
      "They delivered our custom SaaS product on time with zero downtime. Their expertise in scaling applications is top-notch.",
    author: "Sophia Williams",
    company: "CloudCore Solutions",
  },
  {
    quote:
      "From mobile app development to backend integration, they handled everything with professionalism and innovation.",
    author: "Ravi Sharma",
    company: "FitLife Wellness",
  },
];

const Testimonials = () => {
  return (
    <section className="font-body bg-paper border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
              <span className="inline-block h-px w-3.5 bg-accent" />
              client feedback
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.6rem)] font-medium tracking-tight text-ink">
              What our clients say.
            </h2>
          </div>
          <p className="max-w-[32ch] text-graphite">
            Partners across retail, SaaS, and health on what shipping with us was
            actually like.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col justify-between border-b border-r border-line bg-white p-8"
            >
              <span className="font-display text-4xl leading-none text-accent">
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-4">
                <div className="font-display text-[0.98rem] font-medium text-ink">
                  {t.author}
                </div>
                <div className="font-mono text-[0.74rem] text-faint">
                  {t.company}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;