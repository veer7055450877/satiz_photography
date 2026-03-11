import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

const navItems = [
  { id: 'home', label: 'Start' },
  { id: 'portfolio', label: 'Stories' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'Artist' },
  { id: 'contact', label: 'Connect' },
];

export const FloatingNav = () => {
  const { setCursorType } = useCursor();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-12 left-8 md:left-12 z-50 flex flex-col items-start gap-4 mix-blend-difference"
    >
      <div className="w-[1px] h-12 bg-white/50 mb-4 ml-1" />
      
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          onMouseEnter={() => setCursorType('explore')}
          onMouseLeave={() => setCursorType('default')}
          className="group flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-300" />
          <span className="text-sm uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform">
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  );
};
