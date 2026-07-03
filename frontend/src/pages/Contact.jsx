import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Clock,
  Zap,
  Award,
  Star,
} from "lucide-react";

/* ─── data ───────────────────────────────────────────────────── */

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    details: ["support@sanraf.dev", "hello@sanraf.dev"],
    note: "Reply within 2 hours",
  },
  {
    icon: Phone,
    label: "phone",
    details: ["+91 98765 43210", "+91 91234 56789"],
    note: "Mon–Fri, 09:00–18:00 IST",
  },
  {
    icon: MapPin,
    label: "office",
    details: ["123 Tech Park", "Dibrugarh, Assam — 786001"],
    note: "Schedule a visit first",
  },
  {
    icon: MessageCircle,
    label: "live chat",
    details: ["Available 24/7", "Instant support"],
    note: "Use the chat widget below",
  },
];

const promises = [
  { icon: Zap,          text: "24–48 hour response time" },
  { icon: Award,        text: "Free project consultation" },
  { icon: CheckCircle,  text: "No-obligation quote" },
  { icon: Star,         text: "Dedicated project manager" },
];

const quickStats = [
  { value: "24h",  label: "response time" },
  { value: "200+", label: "projects done" },
  { value: "50+",  label: "happy clients" },
  { value: "5.0★", label: "average rating" },
];

const budgetOptions = [
  "Less than $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $50,000",
  "More than $50,000",
];

const timelineOptions = [
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "More than 1 year",
];

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 font-body text-[0.95rem] text-ink placeholder:text-faint focus:border-accent focus:bg-white focus:outline-none transition-colors";

const labelClass =
  "block font-mono text-[0.72rem] lowercase text-faint mb-2";

/* ─── component ──────────────────────────────────────────────── */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "",
    budget: "", timeline: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1800));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", budget: "", timeline: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <div className="min-h-screen bg-paper font-body">

      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] lowercase text-faint">
                <span className="inline-block h-px w-3.5 bg-accent" />
                get in touch
              </span>
              <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-medium leading-[1.05] tracking-tight text-ink">
                Tell us what you're{" "}
                <span className="border-b-2 border-accent pb-0.5">building</span>.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[clamp(1.02rem,1rem+0.4vw,1.2rem)] leading-[1.55] text-graphite">
                Whether you have a detailed brief or just an idea, the best
                next step is a conversation. Fill out the form and we'll come
                back within 24 hours with a clear response — not a sales pitch.
              </p>
            </div>

            {/* quick stats panel */}
            <aside className="border border-line bg-white">
              <div className="flex justify-between border-b border-line px-4 py-3 font-mono text-[0.72rem] text-faint">
                <span>~/studio</span>
                <span>at a glance</span>
              </div>
              <div className="grid grid-cols-2">
                {quickStats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-5 ${i % 2 === 0 ? "border-r border-line" : ""} ${i < 2 ? "border-b border-line" : ""}`}
                  >
                    <div className="font-display text-[1.6rem] font-medium tracking-tight text-ink">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[0.68rem] text-graphite">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ══════════ MAIN GRID ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">

            {/* ── LEFT COLUMN ── */}
            <div className="space-y-0 border border-line bg-white">
              {/* contact channels */}
              <div className="border-b border-line px-5 py-3 font-mono text-[0.72rem] text-faint">
                ~/contact-channels
              </div>
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className={`flex gap-4 px-5 py-5 ${i < contactInfo.length - 1 ? "border-b border-line" : ""}`}
                  >
                    <Icon className="mt-0.5 h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                    <div>
                      <p className="font-mono text-[0.68rem] text-faint">{c.label}</p>
                      {c.details.map((d) => (
                        <p key={d} className="mt-0.5 text-[0.92rem] text-ink">{d}</p>
                      ))}
                      <p className="mt-1 font-mono text-[0.68rem] text-graphite">{c.note}</p>
                    </div>
                  </div>
                );
              })}

              {/* promises */}
              <div className="border-t border-line px-5 py-3 font-mono text-[0.72rem] text-faint">
                ~/our-commitment
              </div>
              {promises.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.text}
                    className={`flex items-center gap-3 px-5 py-4 ${i < promises.length - 1 ? "border-b border-line" : ""}`}
                  >
                    <Icon className="h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                    <span className="text-[0.9rem] text-ink">{p.text}</span>
                  </div>
                );
              })}
            </div>

            {/* ── FORM ── */}
            <div className="border border-line bg-white">
              <div className="flex items-center gap-3 border-b border-line px-6 py-4">
                <Send className="h-4 w-4 text-ink" strokeWidth={1.6} />
                <div>
                  <h2 className="font-display text-[1.15rem] font-medium text-ink">
                    Send us a message
                  </h2>
                  <p className="font-mono text-[0.72rem] text-faint">
                    We'll respond within 24 hours — no obligation, no pitch.
                  </p>
                </div>
              </div>

              {/* status banners */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 border-b border-line bg-green-50 px-6 py-4"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-green-600" strokeWidth={1.8} />
                    <div>
                      <p className="font-display text-[0.95rem] font-medium text-green-800">
                        Message sent successfully
                      </p>
                      <p className="font-mono text-[0.72rem] text-green-700">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 border-b border-line bg-red-50 px-6 py-4"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none text-red-600" strokeWidth={1.8} />
                    <div>
                      <p className="font-display text-[0.95rem] font-medium text-red-800">
                        Something went wrong
                      </p>
                      <p className="font-mono text-[0.72rem] text-red-700">
                        Please try again or email us directly at support@sanraf.dev
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="divide-y divide-line">
                {/* row 1 */}
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  <div className="border-r-0 p-6 sm:border-r sm:border-line">
                    <label htmlFor="name" className={labelClass}>
                      full name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="p-6">
                    <label htmlFor="email" className={labelClass}>
                      email address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* row 2 */}
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                  <div className="border-r-0 p-6 sm:border-r sm:border-line">
                    <label htmlFor="company" className={labelClass}>
                      company
                    </label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      placeholder="Your company (optional)"
                      className={inputClass}
                    />
                  </div>
                  <div className="p-6">
                    <label htmlFor="budget" className={labelClass}>
                      project budget
                    </label>
                    <select
                      id="budget" name="budget"
                      value={formData.budget} onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* row 3 — timeline */}
                <div className="p-6">
                  <label htmlFor="timeline" className={labelClass}>
                    project timeline
                  </label>
                  <select
                    id="timeline" name="timeline"
                    value={formData.timeline} onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a timeline</option>
                    {timelineOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* row 4 — message */}
                <div className="p-6">
                  <label htmlFor="message" className={labelClass}>
                    project details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={6}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project — what you're building, what problem it solves, and any technical requirements you have in mind."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* submit */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <p className="font-mono text-[0.68rem] text-faint">
                    By submitting you agree to our{" "}
                    <a href="#" className="border-b border-faint transition hover:text-ink">
                      privacy policy
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex shrink-0 items-center gap-2 border border-ink bg-ink px-5 py-3 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper border-t-transparent" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OFFICE / MAP PLACEHOLDER ══════════ */}
      <section className="border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 md:py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Clock,   label: "business hours", lines: ["Mon–Fri: 9:00–19:00 IST", "Sat–Sun: Closed"] },
              { icon: MapPin,  label: "office address",  lines: ["123 Tech Park", "Dibrugarh, Assam — 786001, India"] },
              { icon: Mail,    label: "direct email",    lines: ["support@sanraf.dev", "hello@sanraf.dev"] },
            ].map(({ icon: Icon, label, lines }) => (
              <div key={label} className="border border-line bg-white p-6">
                <div className="flex items-center gap-2 font-mono text-[0.72rem] text-faint">
                  <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
                  {label}
                </div>
                <div className="mt-3 space-y-1">
                  {lines.map((l) => (
                    <p key={l} className="text-[0.92rem] text-ink">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;