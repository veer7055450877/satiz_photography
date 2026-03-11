import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Satiz didn't just take photos; he captured the very essence of our wedding day. Every time we look at the album, we relive those emotions all over again.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    id: 2,
    text: "Professional, creative, and incredibly easy to work with. The branding photos have completely elevated my business presence online.",
    author: "Michael Chen",
    role: "Creative Director"
  },
  {
    id: 3,
    text: "I'm usually camera shy, but Satiz made me feel so comfortable. The portraits turned out stunning and felt completely natural.",
    author: "Emily Davis",
    role: "Portrait Session"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-surface relative">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-12 h-12 mx-auto mb-8 text-white/20" />
        
        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 text-white/90">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="text-lg font-bold">{testimonials[currentIndex].author}</h4>
                <span className="text-sm text-secondary uppercase tracking-widest">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-2 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
