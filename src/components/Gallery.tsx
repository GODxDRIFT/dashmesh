import { Camera } from 'lucide-react';

export default function Gallery() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
      caption: "Clean, hygienic and fully-equipped dental operatory"
    },
    {
      url: "https://images.unsplash.com/photo-1488515089087-5f3af697f882?auto=format&fit=crop&q=80&w=600",
      caption: "Comfortable waiting area"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      caption: "Modern Diagnostic Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
      caption: "Safe & Friendly Environment"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm">Gallery</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16">Step inside our clinic</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-[2rem] shadow-lg">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-semibold text-left">{photo.caption}</p>
              </div>
              <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={20} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-slate-500 font-medium flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          Located near B-2 Block Park / Mother Dairy Road, Shiv Nagar
        </p>
      </div>
    </section>
  );
}
