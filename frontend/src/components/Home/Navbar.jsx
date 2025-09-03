import React, { useState, useEffect, useRef } from "react";
import moment from "moment-timezone";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  Clock,
  MapPin,
  Laptop,
  Code,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navbarRef = useRef(null);

  const backgroundImages = [
  "https://cdn.pixabay.com/photo/2018/09/09/18/04/judge-3665164_640.jpg",
  "https://cdn.pixabay.com/photo/2024/04/26/20/21/law-8722596_640.jpg",
  "https://cdn.pixabay.com/photo/2022/04/10/16/41/lawyer-7123798_640.jpg",
  "https://cdn.pixabay.com/photo/2023/12/12/09/18/criminal-8444883_640.jpg",
];


  // Time effect
  useEffect(() => {
    const interval = setInterval(() => {
      const indiaTime = moment()
        .tz("Asia/Kolkata")
        .format("ddd, MMM D, YYYY - hh:mm:ss A");
      setCurrentTime(indiaTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Menu Items for Software Dev Company
  const navItems = [
    { name: "Home", href: "#home", exact: true },
    {
      name: "Services",
      submenu: [
        { name: "Web Development", href: "#web" },
        { name: "Mobile Apps", href: "#apps" },
        { name: "UI/UX Design", href: "#design" },
        { name: "Cloud & DevOps", href: "#cloud" },
        { name: "AI Solutions", href: "#ai" },
      ],
    },
    {
      name: "Portfolio",
      submenu: [
        { name: "Case Studies", href: "#cases" },
        { name: "Client Projects", href: "#projects" },
      ],
    },
    { name: "Technologies", href: "#tech" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleSubmenu = (index) =>
    setOpenSubmenu(openSubmenu === index ? null : index);

  return (
    <header ref={navbarRef}>
      {/* Top info bar */}
      <div className="bg-[#1E1E1E] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex items-center space-x-4 mb-2 md:mb-0 flex-wrap">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>support@yourcompany.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Dibrugarh, India</span>
              </div>
            </div>
            <div className="text-xs text-gray-300 font-mono whitespace-nowrap">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Branding */}
            <div className="flex items-center space-x-3">
              <Laptop className="text-[#2563EB] w-8 h-8" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#1E1E1E] tracking-wide">
                  YourCompany
                </h1>
                <p className="text-xs text-gray-500 italic">
                  Software & Web Development
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6 text-[15px] font-medium text-[#1E1E1E]">
                {navItems.map((item, index) => (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <button
                          className="flex items-center gap-1 hover:text-[#2563EB] transition py-2"
                          onClick={() => toggleSubmenu(index)}
                          aria-expanded={openSubmenu === index}
                          aria-haspopup="true"
                        >
                          {item.name}
                          {openSubmenu === index ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        <ul
                          className={`absolute left-0 top-full ${
                            openSubmenu === index ? "block" : "hidden"
                          } mt-0 bg-white border border-gray-200 rounded-md shadow-lg w-56 z-10`}
                        >
                          {item.submenu.map((sub) => (
                            <li key={sub.name}>
                              <a
                                href={sub.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2563EB] border-b border-gray-100 last:border-b-0"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-[#2563EB] transition py-2 block"
                        aria-current={item.exact ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="bg-[#2563EB] text-white hover:bg-[#1E40AF] px-5 py-2 rounded text-sm shadow-sm transition-colors duration-300 flex items-center"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#2563EB] p-2"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 shadow-inner">
            <ul className="space-y-2">
              {navItems.map((item, index) =>
                item.submenu ? (
                  <li key={item.name} className="border-b pb-2">
                    <button
                      className="flex justify-between items-center w-full py-3 text-gray-800 font-medium"
                      onClick={() => toggleSubmenu(index)}
                      aria-expanded={openSubmenu === index}
                    >
                      {item.name}
                      {openSubmenu === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <div
                      className={`pl-4 py-2 space-y-2 ${
                        openSubmenu === index ? "block" : "hidden"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block text-gray-700 hover:text-[#2563EB] py-2 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.name} className="border-b">
                    <a
                      href={item.href}
                      className="block text-gray-800 hover:text-[#2563EB] py-3 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#2563EB]"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="#contact"
                className="block bg-[#2563EB] text-white text-center py-3 rounded font-medium shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Animated accent line */}
      <div className="w-full h-1.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-gray-100 to-[#1E40AF] animate-flagWave"></div>
      </div>
    </header>
  );
};

export default Navbar;
