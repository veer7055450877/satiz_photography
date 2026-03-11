import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export const FloatingControls = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
      
      {/* Back to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            onMouseEnter={() => setCursorType('explore')}
            onMouseLeave={() => setCursorType('default')}
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Connect FAB - WhatsApp */}
      <motion.a
        href="https://wa.me/15550000000" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setCursorType('text')}
        onMouseLeave={() => setCursorType('default')}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300 relative overflow-hidden group"
      >
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.a>
    </div>
  );
};
