import { motion } from 'motion/react';
import { Phone, ArrowRight, MessageSquare, MapPin, Clock, CreditCard, Star } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-primary-light/50 -skew-x-6 -z-10 translate-x-[20%] transition-transform duration-1000" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-micro">Est. 2018</span>
              <div className="h-px w-12 bg-slate-200" />
              <span className="text-micro text-primary font-black uppercase">Shiv Nagar, West Delhi</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-slate-900 leading-[0.95] tracking-tighter mb-10">
              <span className="block mb-2">Dashmesh</span>
              <span className="heading-serif text-primary block">Dental Clinic</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl mb-12 font-medium">
              Elevating family dental care through <span className="text-primary italic">gentle touch</span>, clinical excellence, and transparent values.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a href={`tel:${CLINIC_INFO.phone}`} className="btn-primary group">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Phone size={20} />
                  Book Appointment
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary group">
                <span className="flex items-center justify-center gap-3">
                  <MessageSquare size={20} className="text-primary" />
                  Chat on WhatsApp
                </span>
              </a>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Trusted by 200+ Patients</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">5.0</p>
                <p className="text-[10px] font-bold uppercase text-slate-400 mt-1">Google Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28a3a7c47f0e?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Clinic" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -right-4 md:-right-10 z-20 glass p-8 rounded-[2.5rem] shadow-2xl max-w-[240px]"
            >
              <p className="text-micro mb-4 text-primary">Clinic Stats</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-slate-600">Satisfaction</span>
                  <span className="text-lg font-black text-slate-900">100%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-full bg-primary" 
                  />
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">Based on patient feedback & treatment outcome results.</p>
              </div>
            </motion.div>

            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
