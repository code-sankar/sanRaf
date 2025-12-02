import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Code,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-sm">
      {/* Top Gradient Line */}
      <div className="w-full h-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] via-gray-100 to-[#16a34a] animate-flagWave"></div>
      </div>

      {/* Main Content – Zomato style grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-xs sm:text-sm">
          {/* Brand / About */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Code className="text-blue-500 w-8 h-8" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                  Sankar &amp; Rafel.
                </h1>
                <p className="text-[11px] text-gray-400 italic">
                  Software Development Agency
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Building scalable, modern, and innovative digital solutions to
              help businesses grow in the digital era. We turn your ideas into
              reality with code.
            </p>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left">
            <h3 className="uppercase text-gray-300 text-[11px] font-semibold mb-3 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Custom Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "E-commerce Development",
                "API Integration",
                "DevOps & Deployment",
                "Software Consulting",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="uppercase text-gray-300 text-[11px] font-semibold mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Portfolio", "#portfolio"],
                ["Testimonials", "#testimonials"],
                ["Blog", "#blog"],
                ["Careers", "#careers"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-blue-400 transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="text-center md:text-left">
            <h3 className="uppercase text-gray-300 text-[11px] font-semibold mb-3 tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p>
                  123 Tech Park
                  <br />
                  Dibrugarh, India
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+919876543210" className="hover:text-blue-400">
                  +91 98765 xxxxx
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:hello@softwaresolutions.com"
                  className="hover:text-blue-400"
                >
                  hello@softwaresolutions.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5" />
                <p>
                  Mon–Fri: 9:00AM – 7:00PM
                  <br />
                  Sat–Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Social Links (right column like Zomato) */}
          <div className="text-center md:text-left">
            <h3 className="uppercase text-gray-300 text-[11px] font-semibold mb-3 tracking-wide">
              Social Links
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (unchanged) */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-xs sm:text-sm">
          <p className="text-center">
            &copy; {currentYear} Sankar &amp; Rafel Software Solutions. All
            rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            {["Privacy Policy", "Terms of Service", "Disclaimer", "Sitemap"].map(
              (text) => (
                <a key={text} href="#" className="hover:text-blue-400 transition">
                  {text}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
