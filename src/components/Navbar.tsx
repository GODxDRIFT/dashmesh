import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { CLINIC_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="glass rounded-[2rem] px-8 h-20 flex items-center justify-between shadow-2xl shadow-slate-900/5 ring-1 ring-slate-900/5">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 group-hover:scale-110">
            <HeartPulse size={22} strokeWidth={2.5} />
          </div>
          <div>
            <span className="block text-xl font-black leading-tight text-slate-900 tracking-tighter uppercase">Dashmesh</span>
            <span className="block text-xs font-bold leading-tight text-primary uppercase tracking-widest">Dental Care</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95"
          >
            <Phone size={14} />
            <span>Consult</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 transition-colors hover:bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="lg:hidden absolute top-full left-0 right-0 glass rounded-3xl overflow-hidden shadow-2xl p-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black text-slate-900 py-4 px-6 rounded-2xl hover:bg-slate-50 transition-colors uppercase tracking-tight flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  <Phone size={16} />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest"
                >
                  <span>Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
