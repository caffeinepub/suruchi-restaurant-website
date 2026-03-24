import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0B0B0C]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Since 1967 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center justify-center mb-8"
        >
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full border-2 border-gold/60 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="text-gold text-[9px] tracking-[0.3em] uppercase font-body font-semibold">
                Since
              </div>
              <div className="text-gold font-display font-bold text-2xl leading-none">
                1967
              </div>
              <div className="text-gold/70 text-[8px] tracking-[0.2em] uppercase font-body">
                Est.
              </div>
            </div>
            <div
              className="absolute inset-[-4px] rounded-full border border-gold/30 animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wider leading-tight mb-4"
        >
          <span className="gold-gradient">Suruchi</span>
          <br />
          <span className="text-[#F2F2F2] text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em]">
            Hotel &amp; Restaurant
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display italic text-xl sm:text-2xl md:text-3xl text-[#F2F2F2] mb-3 tracking-wide"
        >
          Delicious Food for Every Mood
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-body text-[#B8B8B8] text-sm sm:text-base max-w-xl mx-auto mb-10 tracking-wide"
        >
          A culinary legacy spanning over five decades — where every dish tells
          a story of tradition, passion, and unmatched flavour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            type="button"
            onClick={scrollToMenu}
            data-ocid="hero.primary_button"
            className="bg-gold text-[#0B0B0C] font-body font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gold-light hover:shadow-gold-lg transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </button>
          <button
            type="button"
            onClick={scrollToAbout}
            data-ocid="hero.secondary_button"
            className="border border-gold/50 text-gold font-body text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#B8B8B8] text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
