import { User, ShieldCheck, HeartPulse, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Senior Clinical Expertise",
      desc: "Dr. Inderjot Singh brings years of specialized experience with documented excellence in patient care and complex oral procedures.",
      icon: User,
      accent: "primary"
    },
    {
      title: "Gentle Interventions",
      desc: "We prioritize non-invasive techniques and advanced pain management to ensure your comfort throughout the clinical journey.",
      icon: HeartPulse,
      accent: "primary"
    },
    {
      title: "Integrity & Ethics",
      desc: "Absolute transparency in treatment planning and financial estimates. We only recommend what is clinically necessary.",
      icon: ShieldCheck,
      accent: "primary"
    },
    {
      title: "Strategic Accessibility",
      desc: "Prime location in Shiv Nagar with dual operating shifts to accommodate busy professional schedules and family routines.",
      icon: Clock,
      accent: "primary"
    }
  ];

  return (
    <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Refined gradient background */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/10 blur-[120px] -z-0 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-amber-400/5 blur-[100px] -z-0 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
          <div className="lg:col-span-8">
            <span className="text-micro text-primary mb-6 block">Our standard of care</span>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-none">
              A commitment to <br />
              <span className="heading-serif italic text-primary font-normal">clinical integrity.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We've built our reputation in Shiv Nagar on a foundation of trust, precise diagnostics, and patient-first results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point) => (
            <div key={point.title} className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 ring-1 ring-primary/20">
                <point.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
