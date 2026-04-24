import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm">Treatments & Services</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">World-class Dental Services for Your Family</h2>
          <p className="text-slate-600">Complete oral health care using modern technology with a gentle, patient-first approach.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-teal-200 transition-all hover:shadow-xl hover:shadow-teal-50"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-teal-50 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
              <Icons.Info size={24} />
            </div>
            <p className="text-teal-900 font-medium max-w-xl text-center md:text-left">
              Advanced services like laser dentistry and fixed prosthodontics are also available at selected Dashmesh centres; please call to confirm availability.
            </p>
          </div>
          <a 
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors whitespace-nowrap"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
