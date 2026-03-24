import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0B0B0C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] uppercase tracking-wider">
            Get In <span className="gold-gradient">Touch</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold mx-3" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl border border-gold/10 bg-[#151518] space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F2F2F2] mb-1">
                    Address
                  </div>
                  <div className="font-body text-[#B8B8B8] text-sm leading-relaxed">
                    Mahishadal Cinema More
                    <br />
                    Mahishadal, West Bengal 721628
                    <br />
                    India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F2F2F2] mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+919876543210"
                    data-ocid="contact.link"
                    className="font-body text-gold text-sm hover:text-orange transition-colors duration-300"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F2F2F2] mb-1">
                    Hours
                  </div>
                  <div className="font-body text-[#B8B8B8] text-sm leading-relaxed">
                    Monday – Sunday
                    <br />
                    <span className="text-gold">10:00 AM – 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-body font-semibold text-white text-base uppercase tracking-widest transition-all duration-300 hover:shadow-orange hover:scale-[1.02]"
              style={{ backgroundColor: "#FF6B00" }}
            >
              <MessageCircle size={22} />
              Order on WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gold/20 min-h-[400px] relative"
          >
            <iframe
              title="Suruchi Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4!2d87.988!3d22.184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b8fe04ae52f1%3A0x3e3ae5f9b2c3ef6b!2sMahishadal%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                filter:
                  "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
