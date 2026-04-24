import { motion } from 'motion/react';
import { CheckCircle2, User, Building2 } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm">
              <span className="w-8 h-px bg-teal-600" />
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Gentle, Patient-Centred Care <br />
              <span className="text-teal-600">for Your Family.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm border border-slate-100">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Inderjot Singh</h3>
                  <p className="text-slate-600 leading-relaxed italic">
                    "Dr. Inderjot Singh is a highly knowledgeable and polite dental surgeon who listens to patients' concerns patiently and provides gentle care."
                  </p>
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    At Dashmesh Dental Clinic, every treatment starts with understanding your problem properly. 
                    Doctor saab takes time to explain the issue in simple language, discuss all options and only then proceeds – no rush, no push.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm border border-slate-100">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Clinic</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Located near B-2 Block Park, Janakpuri, on Mother Dairy Road in Shiv Nagar. 
                    We focus on providing high-quality, hygienic and affordable dental care in a clean and friendly environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-teal-600 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28a3a7c47f0e?auto=format&fit=crop&q=80&w=800" 
                alt="Dental Clinic" 
                className="w-full h-full object-cover -rotate-2 scale-110 opacity-90"
              />
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="grid grid-cols-1 gap-4">
                {[
                  "One-to-one attention",
                  "Hygienic setup",
                  "Transparent plans",
                  "Family friendly"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-teal-600" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Accent Circle */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400 rounded-full -z-10 mix-blend-multiply opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}
