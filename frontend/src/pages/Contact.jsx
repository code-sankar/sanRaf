import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Users,
  MessageCircle,
  Globe,
  Award,
  CheckCircle,
  Star,
  Zap,
  Heart,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["support@yourcompany.com", "info@yourcompany.com"],
      description: "We'll respond within 2 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 91234 56789"],
      description: "Mon-Fri from 9am to 6pm",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Tech Park", "Dibrugarh, Assam, India - 786001"],
      description: "Schedule a meeting first",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      details: ["Available 24/7", "Instant support"],
      description: "Click the chat button below",
      color: "from-orange-500 to-red-500",
    },
  ];

  const budgetOptions = [
    "Less than ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "More than ₹10,00,000",
  ];

  const timelineOptions = [
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "More than 1 year",
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "24-48 hour response time" },
    { icon: <Award className="w-5 h-5" />, text: "Free project consultation" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No obligation quote" },
    { icon: <Star className="w-5 h-5" />, text: "Dedicated project manager" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Let's Connect
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your <span className="text-blue-600">Project</span> Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Get in touch with our team and
            let's create something extraordinary together. We're here to help
            you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information & Features */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="space-y-1 mb-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Why Choose Us?
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="text-blue-200">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    24h
                  </div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    200+
                  </div>
                  <div className="text-xs text-gray-600">Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    50+
                  </div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    5★
                  </div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you ASAP
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">
                        Message sent successfully!
                      </div>
                      <div className="text-sm">
                        We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-3"
                  >
                    <div>
                      <div className="font-semibold">Something went wrong!</div>
                      <div className="text-sm">
                        Please try again or contact us directly.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message & Get Free Consultation
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
