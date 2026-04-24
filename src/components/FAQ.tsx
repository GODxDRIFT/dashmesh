import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-surface relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-micro text-primary mb-6 block">Support desk</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-8">
            Expert <span className="heading-serif italic text-primary font-normal">clarity.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium italic">Resolving your clinical concerns with transparent answers.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="group rounded-[2rem] bg-white border border-slate-100 overflow-hidden shadow-2xl shadow-slate-900/5 hover:border-primary/20 transition-all duration-500"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                aria-expanded={openId === faq.id}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-3 rounded-xl transition-all duration-500 ${openId === faq.id ? 'bg-primary text-white rotate-12' : 'bg-slate-50 text-slate-400 group-hover:bg-primary-light group-hover:text-primary'}`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${openId === faq.id ? 'text-primary' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronDown className={openId === faq.id ? 'text-primary' : 'text-slate-300'} size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 pt-0 mt-2">
                       <div className="h-px w-full bg-slate-100 mb-6" />
                       <p className="text-slate-500 leading-relaxed text-lg font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a href="#contact" className="text-micro text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-2">
             Still have questions? Explore our contact desk <ArrowRight size={12} />
           </a>
        </div>
      </div>
    </section>
  );
}
