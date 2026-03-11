import { motion } from 'framer-motion';

export const Philosophy = () => {
  return (
    <section className="py-32 px-6 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-accent block mb-8"
        >
          Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif leading-tight text-white mb-12"
        >
          We believe in the beauty of the <br/>
          <span className="italic text-white/50">imperfect</span> and the <span className="italic text-white/50">unscripted</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-secondary text-sm leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            In a world obsessed with perfection, we chase authenticity. The wind-blown hair, the tear-streaked cheek, the messy, chaotic, beautiful reality of human connection. Our camera is not a tool to direct your life, but a vessel to preserve it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We don't just take photos; we build time capsules. When you look back at these images in ten, twenty, or fifty years, we want you to remember exactly how you felt, not just how you looked.
          </motion.p>
        </div>
        
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-24 h-[1px] bg-white/20 mx-auto mt-16"
        />
      </div>
    </section>
  );
};
