import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.primary_button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-orange"
      style={{ backgroundColor: "#FF6B00" }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#FF6B00", opacity: 0.4 }}
      />
    </motion.a>
  );
}
