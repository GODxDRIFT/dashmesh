import { motion } from 'motion/react';
import { Phone, ArrowRight, MessageSquare, MapPin, Clock, CreditCard, Star } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -skew-x-12 -z-10 translate-x-1/4" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold tracking-tight mb-6 uppercase">
              <Star size={12} className="fill-current" />
              {CLINIC_INFO.tagline}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              {CLINIC_INFO.name}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Painless, affordable and honest dental care for the whole family – from kids to seniors. 
              Join 200+ happy families in Shiv Nagar.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 transition-all hover:shadow-xl hover:shadow-teal-100 group"
              >
                <Phone size={20} />
                <span>Call Now</span>
                <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-100"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">
                  <span className="text-slate-900 font-bold">{CLINIC_INFO.stats.rating}</span> rating from our patients
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Quick Info Cards */}
            <div className="col-span-2 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Our Location</p>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">{CLINIC_INFO.address}</p>
              </div>
            </div>

            <div className="bg-teal-600 p-6 rounded-3xl text-white shadow-xl shadow-teal-100">
              <div className="p-2 bg-white/20 w-fit rounded-lg mb-4">
                <Clock size={20} />
              </div>
              <p className="text-xs font-bold text-teal-100 uppercase tracking-wider mb-1">Clinic Timings</p>
              <p className="text-sm font-semibold">{CLINIC_INFO.timings.morning}</p>
              <p className="text-sm font-semibold">{CLINIC_INFO.timings.evening}</p>
              <p className="text-xs mt-2 opacity-70 italic">{CLINIC_INFO.timings.days}</p>
            </div>

            <div className="bg-amber-400 p-6 rounded-3xl text-amber-950 shadow-xl shadow-amber-100">
              <div className="p-2 bg-amber-950/10 w-fit rounded-lg mb-4">
                <CreditCard size={20} />
              </div>
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">Consultation Fee</p>
              <p className="text-2xl font-black">~ {CLINIC_INFO.fees}</p>
              <p className="text-xs mt-2 opacity-70">Flexible Payment Options</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
