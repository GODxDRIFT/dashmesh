import { Camera } from 'lucide-react';

export default function Gallery() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
      caption: "Sterilized Operatory"
    },
    {
      url: "https://images.unsplash.com/photo-1488515089087-5f3af697f882?auto=format&fit=crop&q=80&w=600",
      caption: "Executive Waiting"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      caption: "Diagnostic Suite"
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
      caption: "Family Care Unit"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-micro text-primary mb-6 block">Clinic tour</span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-20 tracking-tight">
          A space for <span className="heading-serif italic text-primary font-normal">gentle healing.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white ring-1 ring-slate-100">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-micro !text-white !opacity-100">{photo.caption}</p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12 translate-y-2 group-hover:translate-y-0">
                <Camera size={18} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-slate-200" />
          <p className="text-micro text-slate-400">Shiv Nagar, Janakpuri</p>
          <div className="h-px w-12 bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
