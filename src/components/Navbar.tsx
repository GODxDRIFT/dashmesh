import { motion } from 'motion/react';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';
import { useState } from 'react';
import { CLINIC_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <HeartPulse size={24} />
          </div>
          <div>
            <span className="block text-lg font-bold leading-none text-slate-900 uppercase tracking-tight">Dashmesh</span>
            <span className="block text-sm font-medium leading-none text-teal-600">Dental Clinic</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-full text-sm font-semibold hover:bg-teal-700 transition-all hover:shadow-lg hover:shadow-teal-200"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 py-4 px-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-600 py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 text-white rounded-xl text-base font-semibold"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
