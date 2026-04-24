import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      id="whatsapp-floating-button"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-1 -right-1 block w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
}
