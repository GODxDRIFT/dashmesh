import { MapPin, Phone, MessageSquare, Send, Clock, Landmark } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-surface -z-10 rounded-t-[10vw]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-stretch">
          
          <div className="lg:col-span-12 mb-12">
            <span className="text-micro text-primary mb-6 block">Get in touch</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-12">
              Book your <br />
              <span className="heading-serif italic text-primary font-normal">consultation.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="card-professional group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-micro text-primary mb-1">Direct Line</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-xl font-black text-slate-900 tracking-tight hover:text-primary transition-colors">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-professional group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-500">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-micro text-[#25D366] mb-1">WhatsApp Chat</p>
                    <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-xl font-black text-slate-900 tracking-tight hover:text-secondary transition-colors">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-professional group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-micro text-primary mb-2">Location</p>
                    <p className="text-lg font-bold text-slate-900 leading-tight mb-4 lowercase">
                      {CLINIC_INFO.address}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-400">Near B-2 Block Park</span>
                       <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-400">Janakpuri</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 italic font-serif">
                Quick Appointment
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Your Full Name" />
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Mobile Number" />
                  <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:bg-white/10 outline-none transition-all placeholder:text-white/20 resize-none" placeholder="Primary Concern (Optional)" />
                </div>
                
                <button className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                  <Send size={16} />
                  Request Callback
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[500px] rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl ring-1 ring-slate-100">
              <iframe
                src={CLINIC_INFO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dashmesh Dental Clinic Location"
                className="grayscale-[0.5] hover:grayscale-0 transition-all duration-[1000ms]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
