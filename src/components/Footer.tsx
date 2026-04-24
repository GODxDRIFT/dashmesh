import { HeartPulse, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={18} />
              </div>
              <div>
                <span className="block text-base font-bold text-slate-900 uppercase tracking-tight leading-none">Dashmesh</span>
                <span className="block text-xs font-medium text-teal-600 leading-none mt-0.5">Dental Clinic</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 font-medium">
              Trusted neighbourhood dental clinic in Shiv Nagar, West Delhi. 
              Providing painless, affordable and honest dental care for your whole family.
            </p>
            <div className="flex items-center gap-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Treatments', href: '#services' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a key={link.name} href={link.href} className="text-xs font-bold text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-widest">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-600 shrink-0" size={18} />
                <span className="text-sm text-slate-600 font-medium">{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-600 shrink-0" size={18} />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-sm text-slate-600 font-bold hover:text-teal-600 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Timings</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex justify-between">
                <span>Morning</span>
                <span className="font-bold text-slate-900">{CLINIC_INFO.timings.morning}</span>
              </li>
              <li className="flex justify-between">
                <span>Evening</span>
                <span className="font-bold text-slate-900">{CLINIC_INFO.timings.evening}</span>
              </li>
              <li className="flex justify-between border-t border-slate-200 pt-3 mt-3">
                <span>Days</span>
                <span className="font-bold text-teal-600 underline underline-offset-4">{CLINIC_INFO.timings.days}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em] flex items-center gap-2">
              <ExternalLink size={10} /> informational website only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
