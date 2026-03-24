import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#151518" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px]">
              <img
                src="/assets/generated/about-heritage.dim_600x800.jpg"
                alt="Suruchi Restaurant Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/60 to-transparent" />
            </div>
            {/* Since 1967 overlay badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-gold flex flex-col items-center justify-center shadow-gold-lg">
              <span className="font-body text-[9px] text-[#0B0B0C] font-semibold tracking-widest uppercase">
                Since
              </span>
              <span className="font-display font-black text-[#0B0B0C] text-2xl leading-none">
                1967
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-gold/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
              Our Heritage
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] mb-6 leading-tight">
              A Family Tradition{" "}
              <span className="gold-gradient">Born in 1967</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8" />

            <div className="space-y-5 font-body text-[#B8B8B8] text-base leading-relaxed">
              <p>
                Nestled in the heart of Mahishadal Cinema More, Suruchi Hotel
                &amp; Restaurant has been a beloved institution in our community
                for over five decades. What began as a humble family kitchen has
                blossomed into a celebrated culinary destination.
              </p>
              <p>
                Founded in 1967 by our visionary patriarch, Suruchi has always
                been about more than just food — it is about creating moments,
                celebrating culture, and honouring the rich culinary traditions
                of West Bengal and beyond.
              </p>
              <p>
                Today, the third generation of our family continues to uphold
                these values, crafting every dish with the same love, fresh
                ingredients, and time-honoured recipes that have made Suruchi a
                household name.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "57+", label: "Years of Excellence" },
                { value: "50K+", label: "Happy Guests" },
                { value: "100+", label: "Signature Dishes" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-3xl gold-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-[#B8B8B8] tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
