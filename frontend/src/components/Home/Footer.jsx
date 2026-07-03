import { MapPin, Phone, Mail, Clock, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  ["Web Development", "/web"],
  ["Mobile Apps", "/apps"],
  ["UI/UX Design", "/design"],
  ["Cloud & DevOps", "/cloud"],
  ["Data & AI", "/ai"],
];

const links = [
  ["Why Us", "/whyUs"],
  ["Case Studies", "/cases"],
  ["Technologies", "/tech"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const legalLinks = [
  ["Privacy Policy",   "/privacy-policy"],
  ["Terms of Service", "/terms-of-service"],
  ["Disclaimer",       "/disclaimer"],
  ["Sitemap",          "/sitemap"],
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-body border-t border-line bg-paper">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
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
            <p className="mt-4 max-w-[32ch] text-[0.9rem] leading-relaxed text-graphite">
              Building scalable, modern software for teams that need it done
              right — from first commit to production.
            </p>
            <div className="mt-5 flex gap-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-graphite transition hover:text-accent" aria-label="social link">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-mono text-[0.72rem] lowercase text-faint">services</h4>
            <ul className="space-y-2.5">
              {services.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-[0.9rem] text-graphite transition hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="mb-4 font-mono text-[0.72rem] lowercase text-faint">studio</h4>
            <ul className="space-y-2.5">
              {links.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-[0.9rem] text-graphite transition hover:text-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-mono text-[0.72rem] lowercase text-faint">get in touch</h4>
            <ul className="space-y-3 text-[0.88rem] text-graphite">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                <span>123 Tech Park<br />Dibrugarh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                <a href="tel:+919876543210" className="transition hover:text-ink">+91 98765 xxxxx</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                <a href="mailto:hello@sanraf.dev" className="transition hover:text-ink">hello@sanraf.dev</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent" strokeWidth={1.6} />
                <span>Mon–Fri: 9:00–19:00<br />Sat–Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-line py-6 font-mono text-[0.72rem] text-faint sm:flex-row">
          <p>© {year} Sankar &amp; Rafel Software Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {legalLinks.map(([label, href]) => (
              <Link key={label} to={href} className="transition hover:text-ink">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;