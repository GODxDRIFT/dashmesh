import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-8">
            <span className="text-micro text-primary mb-6 block">Patient feedback</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-none">
              Stories of <br />
              <span className="heading-serif italic text-primary font-normal">renewed confidence.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex flex-col items-center lg:items-end gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={32} strokeWidth={0} className="fill-current" />
                ))}
              </div>
              <p className="text-micro text-slate-400">5.0 clinical rating across platforms</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="card-professional group p-12 transition-all duration-700">
              <Quote className="text-primary/10 mb-8 transition-colors group-hover:text-primary/20" size={56} />
              
              <div className="mb-12">
                <p className="text-2xl font-medium text-slate-800 leading-snug italic heading-serif">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 font-black text-xs uppercase tracking-widest border border-slate-200">
                  {review.author[0]}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{review.author}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 py-10 border-t border-slate-100 text-center">
          <p className="text-micro text-slate-300">Verified patient experiences from Google & Justdial</p>
        </div>
      </div>
    </section>
  );
}
