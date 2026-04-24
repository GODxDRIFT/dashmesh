import { MapPin, Phone, MessageSquare, Send, Clock, Landmark } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm">Contact & Location</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 italic">Book an appointment</h2>
          <p className="text-slate-600">Get in touch with us for a consultation or any dental query. We're here to help you smile better.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Form */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-sm font-black text-slate-700 block hover:text-teal-600 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-2 italic">Quickest way to reach us</p>
              </div>

              <div className="p-8 rounded-3xl bg-teal-50 border border-teal-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm">
                  <MessageSquare size={24} />
                </div>
                <h3 className="font-bold text-teal-900 mb-2">WhatsApp</h3>
                <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-sm font-black text-teal-700 block hover:text-teal-800 transition-colors">
                  Chat with us
                </a>
                <p className="text-xs text-teal-600/70 mt-2 italic">Easy booking</p>
              </div>

              <div className="col-span-full p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-100/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Our Address</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {CLINIC_INFO.address}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       <span className="flex items-center gap-1 px-3 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-600">
                         <Landmark size={12} /> Near B-2 Block Park
                       </span>
                       <span className="flex items-center gap-1 px-3 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-600">
                         Shiv Nagar, Janakpuri
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="grid gap-6 p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full" />
              
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                Quick Enquiry
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:bg-white/20 outline-none transition-all" placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:bg-white/20 outline-none transition-all" placeholder="Enter number" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">How can we help?</label>
                <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:bg-white/20 outline-none transition-all resize-none" placeholder="Tooth pain, cleaning, consultation etc." />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="time" className="hidden peer" />
                  <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold peer-checked:bg-teal-500 peer-checked:border-teal-500 transition-all">Morning</div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="time" className="hidden peer" />
                  <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold peer-checked:bg-teal-500 peer-checked:border-teal-500 transition-all">Evening</div>
                </label>
              </div>

              <button className="w-full py-4 bg-teal-500 text-slate-900 font-black rounded-xl hover:bg-teal-400 transition-all active:scale-95 flex items-center justify-center gap-3 mt-2 shadow-lg shadow-teal-500/20">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="lg:sticky lg:top-32 h-[500px] lg:h-[700px] w-full rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
            <iframe
              src={CLINIC_INFO.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dashmesh Dental Clinic Location"
              className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
