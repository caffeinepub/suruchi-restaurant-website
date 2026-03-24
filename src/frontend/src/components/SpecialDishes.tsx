import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { SpecialDish } from "../backend.d";
import { useSpecialDishes } from "../hooks/useQueries";

const dishImages = [
  "/assets/generated/biryani-special.dim_600x400.jpg",
  "/assets/generated/starters-special.dim_600x400.jpg",
  "/assets/generated/chinese-special.dim_600x400.jpg",
];

const fallbackDishes: SpecialDish[] = [
  {
    name: "Royal Dum Biryani",
    description:
      "Our crown jewel — slow-cooked for 4 hours with hand-ground spices, aged basmati rice and premium meat. A recipe passed down through three generations.",
    tag: "Signature Dish",
  },
  {
    name: "Suruchi Special Platter",
    description:
      "An imperial spread of seekh kebab, tandoori chicken, fish fry and paneer tikka — the ultimate Suruchi experience on one grand platter.",
    tag: "Chef's Masterpiece",
  },
  {
    name: "Dragon Prawn Noodles",
    description:
      "Indo-Chinese fusion at its finest — tiger prawns stir-fried with premium noodles in a fiery black bean and chilli sauce.",
    tag: "House Favourite",
  },
];

export default function SpecialDishes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { data } = useSpecialDishes();
  const dishes = data && data.length > 0 ? data : fallbackDishes;

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#151518" }}
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            Chef's Selection
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] uppercase tracking-wider">
            Signature <span className="gold-gradient">Specialties</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold mx-3" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.slice(0, 3).map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              data-ocid={`specials.card.${i + 1}`}
              className="group relative rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:shadow-gold-lg bg-[#1A1A1C]"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={dishImages[i % dishImages.length]}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1C] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-gold/20 text-gold border border-gold/30 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full font-body mb-3">
                  {dish.tag}
                </div>
                <h3 className="font-display font-bold text-xl text-[#F2F2F2] mb-2">
                  {dish.name}
                </h3>
                <p className="font-body text-[#B8B8B8] text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`specials.primary_button.${i + 1}`}
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-gold hover:text-orange transition-colors duration-300 group-hover:gap-3"
                >
                  Order on WhatsApp
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
