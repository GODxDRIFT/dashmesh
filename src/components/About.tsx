import { motion } from 'motion/react';
import { CheckCircle2, User, Building2 } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[20vw] font-black text-slate-100/50 select-none pointer-events-none heading-serif opacity-30">
        Expertise
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-micro text-primary mb-6 block">Our philosophy</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Honest clinical <span className="heading-serif italic text-primary font-normal">excellence</span> with a family touch.
            </h2>
            
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <User size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Dr. Inderjot Singh</h3>
                </div>
                <div className="pl-16">
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    Known for his <span className="text-primary font-semibold">patient-first approach</span>, Dr. Singh bridges the gap between high-end dentistry and accessible family care.
                  </p>
                  <div className="p-6 bg-white border-l-4 border-primary rounded-r-3xl shadow-sm italic text-slate-500">
                    "Doctor saab takes time to explain the issue in simple language, discussing all options before proceeding – ensuring total transparency."
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Building2 size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Patient Comfort First</h3>
                </div>
                <div className="pl-16">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Strategically located in Shiv Nagar, Janakpuri, our clinic is designed to be calm, hygienic, and welcoming. We use modern sterilization protocols to ensure 100% safety.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Image composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 aspect-[3/4] rounded-[5rem] overflow-hidden shadow-2xl border-[16px] border-white ring-1 ring-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                alt="Dental Professional" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            
            {/* Achievement badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="absolute -top-10 -right-10 w-44 h-44 bg-amber-400 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl z-20 border-8 border-white"
            >
              <div className="text-amber-900 font-black text-3xl leading-none">6+</div>
              <div className="text-amber-950 font-bold text-[10px] uppercase tracking-widest mt-1">Years of Excellence</div>
              <div className="w-8 h-0.5 bg-amber-950/20 my-2" />
              <div className="text-amber-900 font-bold text-[10px]">Trusted by thousands</div>
            </motion.div>

            {/* Checklist Floating Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-slate-900 text-white p-8 rounded-[3rem] shadow-2xl min-w-[280px]">
              <p className="text-micro text-teal-400 mb-6">Why Patients Choose Us</p>
              <div className="space-y-4">
                {[
                  "No Hidden Charges",
                  "Emergency Consultations",
                  "Kids-Friendly Environment",
                  "Sterilized Instruments"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
