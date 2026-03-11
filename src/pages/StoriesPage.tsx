import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Lightbox } from '../components/ui/Lightbox';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Extended list of works for the full page
const allWorks = [
  { id: 1, title: "The Vows", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Raw Emotion", category: "Portrait", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Urban Soul", category: "Lifestyle", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Neon Nights", category: "Editorial", img: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Silent Hills", category: "Landscape", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Golden Hour", category: "Couple", img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "City Lights", category: "Urban", img: "https://images.unsplash.com/photo-1449824913929-2b3a3e357131?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Desert Winds", category: "Travel", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
];

export const StoriesPage = () => {
  const { setCursorType, setCursorText } = useCursor();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allWorks.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allWorks.length) % allWorks.length);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif mb-4">All Stories</h1>
        <p className="text-secondary max-w-xl">A complete archive of moments, emotions, and timeless memories.</p>
      </div>

      <div className="px-6 pb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(index)}
            onMouseEnter={() => { setCursorType('view'); setCursorText('Open'); }}
            onMouseLeave={() => { setCursorType('default'); setCursorText(''); }}
          >
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-surface">
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif">{work.title}</h3>
            <span className="text-xs uppercase tracking-widest text-accent">{work.category}</span>
          </motion.div>
        ))}
      </div>

      <Footer />

      <Lightbox 
        images={allWorks}
        selectedIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};
