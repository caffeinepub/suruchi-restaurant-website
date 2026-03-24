import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  external?: boolean;
}

export default function CTABanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
  external,
}: CTABannerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!external && ctaHref.startsWith("#")) {
      e.preventDefault();
      const id = ctaHref.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B0B0C 0%, #1A1A0A 50%, #0B0B0C 100%)",
      }}
    >
      {/* Gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        <h3 className="font-display font-bold text-3xl md:text-4xl text-[#F2F2F2] mb-3">
          {title}
        </h3>
        <p className="font-body text-[#B8B8B8] mb-8 text-base">{subtitle}</p>
        <a
          href={ctaHref}
          onClick={handleClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          data-ocid="cta.primary_button"
          className="inline-block bg-gold text-[#0B0B0C] font-body font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gold-light hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105"
        >
          {ctaText}
        </a>
      </motion.div>
    </section>
  );
}
