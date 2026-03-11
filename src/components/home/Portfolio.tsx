import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { Lightbox } from '../ui/Lightbox';
import { Link } from 'react-router-dom';

const works = [
  { id: 1, title: "The Vows", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Raw Emotion", category: "Portrait", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Urban Soul", category: "Lifestyle", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Neon Nights", category: "Editorial", img: "https://images.unsplash.com/photo-1611424564067-12d778fc6c22?q=80&w=1071&auto=format&fit=crop" },
  { id: 5, title: "Silent Hills", category: "Landscape", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Golden Hour", category: "Couple", img: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&auto=format&fit=crop" },
];

export const Portfolio = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setCursorType, setCursorText } = useCursor();

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % works.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <>
      <section
        id="portfolio"
        ref={targetRef}
        className="relative h-[400vh] bg-background"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          <div className="absolute top-24 left-6 md:left-12 z-0 pointer-events-none select-none">
            <h2 className="text-[12vw] leading-none font-serif text-white/5 font-bold">
              STORIES
            </h2>
          </div>

          <motion.div
            style={{ x }}
            className="flex gap-12 md:gap-24 px-12 md:px-24 items-center relative z-10"
          >
            {/* Intro Card */}
            <div className="w-[300px] md:w-[400px] flex-shrink-0 pr-12">
              <div className="w-12 h-[1px] bg-accent mb-8" />
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Visual <br/> Journals
              </h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs">
                Each collection is a chapter. A carefully curated series of moments that define a feeling, a place, or a person.
              </p>
            </div>

            {works.map((work, index) => (
              <motion.div
                key={work.id}
                className="relative w-[80vw] md:w-[600px] h-[50vh] md:h-[70vh] flex-shrink-0 group cursor-none"
                onMouseEnter={() => {
                  setCursorType('view');
                  setCursorText('Open');
                }}
                onMouseLeave={() => {
                  setCursorType('default');
                  setCursorText('');
                }}
                onClick={() => openLightbox(index)}
              >
                <div className="w-full h-full overflow-hidden relative bg-surface">
                  <motion.img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="absolute -bottom-16 left-0 transition-opacity duration-500">
                  <span className="text-xs uppercase tracking-widest text-accent mb-2 block">0{index + 1} — {work.category}</span>
                  <h3 className="text-4xl font-serif text-white">{work.title}</h3>
                </div>
              </motion.div>
            ))}

            {/* End Card */}
            <div className="w-[400px] h-[70vh] flex items-center justify-center flex-shrink-0 border-l border-white/10 ml-12">
              <div className="text-center">
                <h3 className="text-3xl font-serif text-white mb-4">
                  View All Archives
                </h3>
                <Link
                  to="/stories"
                  className="text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors border-b border-white/20 pb-1"
                  onMouseEnter={() => { setCursorType('text'); setCursorText('Go'); }}
                  onMouseLeave={() => { setCursorType('default'); setCursorText(''); }}
                >
                  Explore Full Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={works}
        selectedIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};
