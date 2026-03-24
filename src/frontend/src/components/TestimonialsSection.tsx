import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { Testimonial } from "../backend.d";
import { useTestimonials } from "../hooks/useQueries";

const fallbackTestimonials: Testimonial[] = [
  {
    customerName: "Rajesh Sharma",
    review:
      "Suruchi's biryani is unparalleled in the region. The slow-cooked dum biryani has this incredible depth of flavour that takes you back in time. Been coming here for 20 years and it never disappoints!",
    rating: BigInt(5),
    location: "Kolkata",
  },
  {
    customerName: "Priya Chatterjee",
    review:
      "The perfect family restaurant. The staff remembers our preferences, the ambiance is warm and welcoming, and the Chinese dishes are absolutely divine. Mahishadal's best kept secret!",
    rating: BigInt(5),
    location: "Haldia",
  },
  {
    customerName: "Amit Roy",
    review:
      "Hosted my daughter's birthday here and the experience was flawless. The special platter for the celebration was spectacular. Suruchi truly has mastered the art of hospitality.",
    rating: BigInt(5),
    location: "Mecheda",
  },
  {
    customerName: "Sunita Das",
    review:
      "The paneer tikka and dal makhani combination here is something I dream about! Pure vegetarian options are incredibly flavourful. A true gem in Mahishadal.",
    rating: BigInt(4),
    location: "Mahishadal",
  },
  {
    customerName: "Subhankar Mondal",
    review:
      "Every dish carries the essence of home cooking elevated to restaurant excellence. The mutton biryani is a masterpiece. Suruchi represents everything great about Bengali culinary tradition.",
    rating: BigInt(5),
    location: "Tamluk",
  },
];

const STAR_POSITIONS = [1, 2, 3, 4, 5];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {STAR_POSITIONS.map((pos) => (
        <Star
          key={pos}
          size={14}
          className={pos <= count ? "text-gold fill-gold" : "text-[#3A3A3A]"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { data } = useTestimonials();
  const testimonials = data && data.length > 0 ? data : fallbackTestimonials;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#151518" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            Guest Voices
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] uppercase tracking-wider">
            Our Guest <span className="gold-gradient">Experience</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold mx-3" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={t.customerName}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-ocid={`testimonials.item.${i + 1}`}
              className="relative p-6 rounded-2xl border border-gold/10 bg-[#1A1A1C] hover:border-gold/30 transition-all duration-300 hover:shadow-gold"
            >
              <div className="absolute top-4 right-5 text-gold/10 font-display text-7xl leading-none select-none">
                &ldquo;
              </div>
              <StarRating count={Number(t.rating)} />
              <p className="font-body text-[#B8B8B8] text-sm leading-relaxed mt-4 mb-5 italic">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold-dark/40 flex items-center justify-center border border-gold/30">
                  <span className="font-display font-bold text-gold text-sm">
                    {t.customerName.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-body font-semibold text-[#F2F2F2] text-sm">
                    {t.customerName}
                  </div>
                  <div className="font-body text-[#B8B8B8] text-xs">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
