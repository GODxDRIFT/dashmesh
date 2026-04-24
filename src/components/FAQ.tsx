import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm text-center">Support</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 text-center italic">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-center">Find answers to common questions about our clinic and services.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                aria-expanded={openId === faq.id}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${openId === faq.id ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-lg font-bold transition-colors ${openId === faq.id ? 'text-teal-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={openId === faq.id ? 'text-teal-600' : 'text-slate-400'} size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2">
                       <p className="text-slate-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white rounded-3xl border border-dashed border-teal-200">
           <p className="text-slate-600 font-medium">
             Still have questions? Feel free to <a href="#contact" className="text-teal-600 font-bold underline underline-offset-4 hover:text-teal-700">contact us</a> directly.
           </p>
        </div>
      </div>
    </section>
  );
}
