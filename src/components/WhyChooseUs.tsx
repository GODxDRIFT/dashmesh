import { User, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Experienced & Polite Doctor",
      desc: "Patients on Justdial praise Dr. Inderjot Singh for being highly knowledgeable, polite and patient-friendly.",
      icon: User,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Painless & Gentle Approach",
      desc: "We use proper anaesthesia, explain every step and work slowly so that even anxious patients feel relaxed.",
      icon: HeartPulse,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "Clear explanation of cost before starting treatment. No surprise bills, flexible options for planned treatments.",
      icon: ShieldCheck,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Convenient Location & Timings",
      desc: "Morning and evening slots – 10:00 AM–1:00 PM & 5:00 PM–8:00 PM – suitable for everyone.",
      icon: Clock,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(13,148,136,0.15),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-teal-400 font-bold mb-4 uppercase tracking-widest text-sm">Value & Trust</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 italic">Why families in Shiv Nagar trust us</h2>
            <p className="text-slate-400 text-lg">We combine clinical excellence with a human touch to make dental visits something you won't dread.</p>
          </div>
          <div className="hidden md:block pb-4">
            <div className="w-16 h-16 border-t-2 border-r-2 border-teal-500 rounded-tr-3xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => (
            <div key={point.title} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className={`w-14 h-14 ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <point.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
