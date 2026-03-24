import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        "hero",
        "about",
        "menu",
        "gallery",
        "testimonials",
        "contact",
      ];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? "bg-[#0B0B0C]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(212,175,55,0.08)]"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-display font-bold text-sm">
                  S
                </span>
              </div>
              <div>
                <div className="text-gold font-display font-bold text-lg leading-tight tracking-widest uppercase">
                  Suruchi
                </div>
                <div className="text-[10px] text-[#B8B8B8] tracking-[0.2em] uppercase font-body">
                  Hotel &amp; Restaurant
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    data-ocid="nav.link"
                    className={`nav-link font-body text-sm tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-gold active" : "text-[#F2F2F2] hover:text-gold"}`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="hidden md:inline-flex items-center gap-2 bg-gold text-[#0B0B0C] font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-gold tracking-wide uppercase"
              >
                Order Now
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-ocid="nav.toggle"
                className="md:hidden text-[#F2F2F2] hover:text-gold transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0B0B0C]/98 backdrop-blur-xl border-b border-gold-dim py-6"
          >
            <nav className="flex flex-col items-center gap-6 px-6">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#F2F2F2] hover:text-gold font-body text-base tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-[#0B0B0C] font-semibold px-8 py-3 rounded-full mt-2 tracking-wide uppercase text-sm"
              >
                Order Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
