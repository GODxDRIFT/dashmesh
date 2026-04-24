import { HeartPulse, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-20 mb-20">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white transition-transform group-hover:bg-primary">
                <HeartPulse size={22} strokeWidth={2.5} />
              </div>
              <div>
                <span className="block text-xl font-black leading-tight text-slate-900 tracking-tighter uppercase">Dashmesh</span>
                <span className="block text-xs font-bold leading-tight text-primary uppercase tracking-widest">Dental Care</span>
              </div>
            </a>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-10">
              Setting high standards in honest family dentistry. We believe in transparency, clinical excellence, and a gentle touch for every patient.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { name: 'About', href: '#about' },
                { name: 'Treatments', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Privacy', href: '#' },
              ].map((link) => (
                <a key={link.name} href={link.href} className="text-micro hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-micro text-primary mb-8 block">Find Us</span>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-slate-300 shrink-0 mt-1" size={20} />
                <p className="text-slate-600 font-medium leading-normal lowercase">
                  {CLINIC_INFO.address}
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-slate-300 shrink-0 mt-1" size={20} />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-xl font-black text-slate-900 hover:text-primary transition-colors tracking-tight">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <span className="text-micro text-primary mb-8 block">Operational Hours</span>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-black uppercase text-slate-400 mb-2">Morning</p>
                <p className="text-lg font-bold text-slate-900">{CLINIC_INFO.timings.morning}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-400 mb-2">Evening</p>
                <p className="text-lg font-bold text-slate-900">{CLINIC_INFO.timings.evening}</p>
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 my-8" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Clinic Days</span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg ring-1 ring-primary/20">{CLINIC_INFO.timings.days}</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            © {currentYear} Dashmesh Dental Clinic — Janakpuri, New Delhi
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em] flex items-center gap-2">
              Building Confidence, one smile at a time
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
