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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <Code className="text-blue-500 w-8 h-8" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  Sankar & Rafel.
                </h1>
                <p className="text-xs text-gray-500 italic">
                  Software Development Agency
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building scalable, modern, and innovative digital solutions to
              help businesses grow in the digital era. We turn your ideas into
              reality with code.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services / Practice Areas */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Custom Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "E-commerce Development",
                "API Integration",
                "DevOps & Deployment",
                "Software Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-start text-gray-400 hover:text-blue-400 transition"
                  >
                    <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Portfolio", "#portfolio"],
                ["Testimonials", "#testimonials"],
                ["Blog", "#blog"],
                ["Careers", "#careers"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="flex items-start text-gray-400 hover:text-blue-400 transition"
                  >
                    <span className="w-1 h-1 mt-2 mr-2 bg-blue-400 rounded-full" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              Get In Touch
            </h3>
            <address className="text-gray-400 not-italic space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <p>
                  123 Tech Park <br />
                  Dibrugarh, India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <a href="tel:+919876543210" className="hover:text-blue-400">
                  +91 98765 xxxxx
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <a
                  href="mailto:hello@softwaresolutions.com"
                  className="hover:text-blue-400"
                >
                  hello@softwaresolutions.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-3" />
                <p>
                  Mon–Fri: 9:00AM – 7:00PM <br />
                  Sat–Sun: Closed
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-xs sm:text-sm">
          <p className="text-center">
            &copy; {currentYear} Sankar & Rafel Software Solutions. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Disclaimer",
              "Sitemap",
            ].map((text) => (
              <a key={text} href="#" className="hover:text-blue-400 transition">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
