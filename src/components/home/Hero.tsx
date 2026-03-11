import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

const heroImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1742178370425-fe1f54f67016?q=80&w=1170&auto=format&fit=crop", // Wedding
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2071&auto=format&fit=crop", // Lifestyle
];

export const Hero = () => {
  const { setCursorType, setCursorText } = useCursor();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden sticky top-0 z-0 bg-black"
      onMouseEnter={() => {
        setCursorType('explore');
        setCursorText('Explore');
      }}
      onMouseLeave={() => {
        setCursorType('default');
        setCursorText('');
      }}
    >
      {/* Logo Layer - Centered or Top Left */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 mix-blend-difference pointer-events-none">
        {/* Placeholder Logo Image */}
        <img
            src="https://img-wrapper.vercel.app/image?url=https://placehold.co/200x80/white/black?text=SATIZ"
            alt="SATIZ Logo"
            className="h-12 md:h-16 object-contain opacity-90"
        />
      </div>

      {/* Background Image Slider with Organic Mask Reveal */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 z-0"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0, transition: { duration: 1 } }} // Fade out the old one
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for "organic" feel
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <motion.img
            src={heroImages[currentIndex]}
            alt="Cinematic Moment"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }} // Slow zoom
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements / Dust */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Content Layer */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div
          key={`text-${currentIndex}`} // Re-animate text on slide change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs md:text-sm uppercase text-white/70 mb-6 tracking-[0.3em]"
        >
          Visual Journal Vol. 01
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white mix-blend-overlay"
        >
          TIMELESS
        </motion.h1>

        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white/90 -mt-2 md:-mt-6"
        >
          MOMENTS
        </motion.h1>
      </div>

      {/* Bottom Indicator */}
      <motion.div
        className="absolute bottom-12 right-12 z-20 text-right hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-[10px] uppercase tracking-widest text-white/40">Scroll to Explore</p>
        <div className="flex gap-2 mt-2 justify-end">
            {heroImages.map((_, idx) => (
                <div
                    key={idx}
                    className={`h-[2px] w-4 transition-colors duration-500 ${idx === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                />
            ))}
        </div>
      </motion.div>
    </section>
  );
};
