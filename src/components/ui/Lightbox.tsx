import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface LightboxProps {
  images: { id: number; img: string; title: string; category: string }[];
  selectedIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox = ({ images, selectedIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  const { setCursorType } = useCursor();

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onMouseEnter={() => setCursorType('default')}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4 hidden md:block"
          >
            <ChevronLeft size={48} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-4 hidden md:block"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-20 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-w-full max-h-full"
              >
                <img 
                  src={images[selectedIndex].img} 
                  alt={images[selectedIndex].title}
                  className="max-h-[80vh] md:max-h-[90vh] object-contain shadow-2xl"
                />
                <div className="absolute -bottom-12 left-0 text-white">
                  <h3 className="text-xl font-serif">{images[selectedIndex].title}</h3>
                  <p className="text-xs uppercase tracking-widest text-white/50">{images[selectedIndex].category}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Mobile Swipe Area (Invisible) */}
          <div className="absolute inset-0 md:hidden" 
            onTouchEnd={(e) => {
              // Simple swipe detection logic could go here
              // For now, tapping edges works
            }}
          >
             <div className="absolute left-0 top-0 bottom-0 w-1/4 z-40" onClick={onPrev} />
             <div className="absolute right-0 top-0 bottom-0 w-1/4 z-40" onClick={onNext} />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
