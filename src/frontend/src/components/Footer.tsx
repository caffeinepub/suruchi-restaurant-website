import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#070709" }}
      className="border-t border-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-display font-bold text-sm">
                  S
                </span>
              </div>
              <div>
                <div className="text-gold font-display font-bold text-lg tracking-widest uppercase">
                  Suruchi
                </div>
                <div className="text-[10px] text-[#B8B8B8] tracking-[0.2em] uppercase">
                  Hotel &amp; Restaurant
                </div>
              </div>
            </div>
            <p className="font-body text-[#B8B8B8] text-sm leading-relaxed max-w-xs">
              A beloved culinary institution in Mahishadal since 1967. Serving
              authentic Indian flavours with warmth and tradition.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[#B8B8B8] hover:text-gold hover:border-gold transition-all duration-300"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[#B8B8B8] hover:text-gold hover:border-gold transition-all duration-300"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[#B8B8B8] hover:text-gold hover:border-gold transition-all duration-300"
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.href)}
                    data-ocid="footer.link"
                    className="font-body text-[#B8B8B8] text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/30 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-[#F2F2F2] text-base uppercase tracking-wider mb-6">
              Visit Us
            </h4>
            <div className="space-y-4 font-body text-[#B8B8B8] text-sm">
              <div>
                <div className="text-gold text-xs uppercase tracking-wider mb-1">
                  Address
                </div>
                <div className="leading-relaxed">
                  Mahishadal Cinema More
                  <br />
                  Mahishadal, West Bengal 721628
                </div>
              </div>
              <div>
                <div className="text-gold text-xs uppercase tracking-wider mb-1">
                  Phone
                </div>
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <div className="text-gold text-xs uppercase tracking-wider mb-1">
                  Hours
                </div>
                <div>Mon–Sun: 10:00 AM – 10:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#B8B8B8] text-xs text-center">
            © {year} Suruchi Hotel &amp; Restaurant. All rights reserved.
          </p>
          <p className="font-body text-[#6A6A6A] text-xs text-center">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
