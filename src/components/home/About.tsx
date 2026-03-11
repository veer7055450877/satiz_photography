import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const About = () => {
  const { setCursorType } = useCursor();

  return (
    <section id="about" className="relative min-h-screen bg-background flex items-center justify-center py-24 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative inline-block"
          onMouseEnter={() => setCursorType('explore')}
          onMouseLeave={() => setCursorType('default')}
        >
          <img
            src="https://images.unsplash.com/photo-1542103131-b4a52ad279d0?q=80&w=764&auto=format&fit=crop"
            alt="Satiz"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 mx-auto"
          />
          <div className="absolute inset-0 rounded-full border border-white/10 scale-110" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif leading-tight mb-8"
        >
          "I don't just take photographs.<br/> I preserve <span className="text-white/50 italic">memories</span>."
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-secondary text-sm leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            My journey began in the darkroom, understanding light in its purest form. Today, I bring that same obsession with light and shadow to every shoot.
          </p>
          <p>
            Whether it's a wedding in the mountains or a quiet portrait session, my goal is to make you forget the camera exists, so the real you can shine through.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
