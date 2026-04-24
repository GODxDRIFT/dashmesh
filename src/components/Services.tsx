import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../constants';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-micro text-primary mb-6 block">Our specializations</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Clinical precision for <br />
              <span className="heading-serif italic text-primary font-normal">every smile.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-slate-500 max-w-md leading-relaxed">
              We combine years of clinical expertise with the latest dental technology to provide treatments that are as gentle as they are effective.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="card-professional group"
              >
                <div className="w-16 h-16 bg-primary-light text-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-100 group-hover:scale-110">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg mb-8">{service.description}</p>
                <div className="h-px w-full bg-slate-100 mb-6 group-hover:bg-primary/20 transition-colors" />
                <button className="flex items-center gap-2 text-micro text-primary group-hover:gap-4 transition-all">
                  Contact for appointment <Icons.ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-[60px] -translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="text-micro text-teal-400 mb-6 block">Direct support</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Need expert advice on a specific treatment?</h3>
              <p className="text-teal-100/60 text-lg">
                Our clinical team is happy to answer your technical queries and provide preliminary guidance on your dental concerns.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Consult with Doctor
              </a>
              <a href={`tel:${CLINIC_INFO.phone}`} className="px-8 py-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl font-bold border border-white/10">
                Call Emergency Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
