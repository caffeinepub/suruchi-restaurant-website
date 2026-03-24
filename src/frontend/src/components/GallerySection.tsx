import { ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/assets/generated/gallery-dining.dim_800x600.jpg",
    label: "Dining Hall",
  },
  {
    src: "/assets/generated/gallery-terrace.dim_800x600.jpg",
    label: "Terrace",
  },
  {
    src: "/assets/generated/biryani-special.dim_600x400.jpg",
    label: "Royal Biryani",
  },
  {
    src: "/assets/generated/gallery-kitchen.dim_800x600.jpg",
    label: "Our Kitchen",
  },
  {
    src: "/assets/generated/gallery-desserts.dim_800x600.jpg",
    label: "Sweet Endings",
  },
  {
    src: "/assets/generated/gallery-drinks.dim_800x600.jpg",
    label: "Drinks & More",
  },
  {
    src: "/assets/generated/starters-special.dim_600x400.jpg",
    label: "Starter Platter",
  },
  {
    src: "/assets/generated/chinese-special.dim_600x400.jpg",
    label: "Chinese Delights",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0B0B0C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] uppercase tracking-wider">
            Through Our <span className="gold-gradient">Lens</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold mx-3" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`gallery.item.${i + 1}`}
              className={`gallery-item group relative rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-gold/40 transition-all duration-300 ${
                i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 || i === 4 ? "16/9" : "4/3" }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="text-gold" size={28} />
                <span className="font-body text-[#F2F2F2] text-sm tracking-widest uppercase">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
