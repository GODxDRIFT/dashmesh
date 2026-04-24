import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <div className="text-teal-600 font-bold mb-4 uppercase tracking-widest text-sm">Patient Reviews</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">What our patients say</h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} className="fill-current" />
              ))}
            </div>
            <p className="text-slate-500 font-medium">Rated 5.0 on Google & Justdial</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 text-slate-200" size={48} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-sm text-slate-500 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            "Dashmesh Dental Clinic is rated around 4.9–5.0 on popular platforms with patients appreciating timely care and gentle treatment."
          </p>
        </div>
      </div>
    </section>
  );
}
