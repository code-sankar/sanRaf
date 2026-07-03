import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const nav = [
  { name: "Why Us", href: "/whyUs" },
  {
    name: "Services",
    submenu: [
      { name: "Web Development", href: "/web" },
      { name: "Mobile Apps", href: "/apps" },
      { name: "AI & Machine Learning", href: "/ai" },
      { name: "UI/UX Design", href: "/design" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Data Analytics", href: "/analytics" },
      { name: "Cloud & DevOps", href: "/cloud" },
      { name: "Blockchain", href: "/blockchain" },
      { name: "QA & Testing", href: "/testing" },
    ],
  },
  {
    name: "Portfolio",
    submenu: [
      { name: "Case Studies", href: "/cases" },
      { name: "Client Projects", href: "/projects" },
    ],
  },
  { name: "Technologies", href: "/tech" },
  //{ name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const isActive = (href) => location.pathname.startsWith(href);

  return (
    <header className="font-body">
      {/* Top bar */}
      <div className="border-b border-line bg-paper">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="flex h-9 items-center justify-between gap-4 font-mono text-[0.72rem] text-faint">
            <div className="flex gap-6 flex-wrap">
              <span>support@sanraf.dev</span>
              <span className="hidden sm:inline">Dibrugarh · India</span>
              <span className="hidden md:inline">Mon–Fri, 09:00–18:00 IST</span>
            </div>
            <span className="flex items-center gap-2 text-graphite">
              <span className="h-[7px] w-[7px] rounded-full bg-green-600 shadow-[0_0_0_3px_rgba(22,163,74,0.15)]" />
              Available for Q3 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="flex h-[68px] items-center justify-between gap-8">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-[26px] w-[26px] place-items-center border-[1.5px] border-ink font-mono text-[0.8rem] font-semibold">
                S
              </span>
              <span className="leading-none">
                <span className="font-display text-[1.12rem] font-semibold tracking-tight">
                  SanRaf
                </span>
                <br />
                <span className="font-mono text-[0.62rem] text-faint">
                  Software Engineering Studio
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {nav.map((item) =>
                item.submenu ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="flex items-center gap-1 text-[0.9rem] text-graphite transition hover:text-ink">
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <AnimatePresence>
                      {openMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="min-w-[220px] border border-line bg-white">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className="block border-b border-line px-4 py-2.5 text-[0.88rem] text-graphite transition last:border-b-0 hover:bg-accent/5 hover:text-ink"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group relative text-[0.9rem] transition ${
                      isActive(item.href)
                        ? "text-ink"
                        : "text-graphite hover:text-ink"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-accent transition-all ${
                        isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
            </div>

            {/* CTA + burger */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2.5 font-mono text-[0.82rem] font-medium text-paper transition hover:border-accent hover:bg-accent"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="font-mono text-[0.8rem] lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? "close" : "menu"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-2">
                {nav.map((item) =>
                  item.submenu ? (
                    <div key={item.name} className="border-t border-line first:border-t-0">
                      <p className="pt-4 pb-1 font-mono text-[0.7rem] uppercase text-faint">
                        {item.name}
                      </p>
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block py-2 text-[0.92rem] text-graphite hover:text-ink"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block border-t border-line py-3 text-[0.95rem] text-graphite hover:text-ink first:border-t-0"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <Link
                  to="/contact"
                  className="my-4 flex items-center justify-center gap-2 border border-ink bg-ink px-4 py-3 font-mono text-[0.85rem] text-paper"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;