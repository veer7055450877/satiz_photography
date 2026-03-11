import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

const steps = [
  {
    num: "01",
    title: "Connection",
    desc: "We start with a conversation. Not about packages, but about you. Understanding your vision, your style, and what matters most."
  },
  {
    num: "02",
    title: "Creation",
    desc: "On the day, I blend into the background. No stiff poses, just gentle direction. I let the moments unfold naturally while I capture the light."
  },
  {
    num: "03",
    title: "Curation",
    desc: "The edit is where the mood is set. I hand-process every image, giving them my signature cinematic tone before delivering your private gallery."
  }
];

export const Process = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="py-32 px-6 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-accent block mb-4"
          >
            The Approach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white max-w-2xl"
          >
            Crafting the <br/><span className="text-white/40 italic">Narrative</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group pt-8 border-t border-white/10 hover:border-white/40 transition-colors duration-500"
              onMouseEnter={() => setCursorType('explore')}
              onMouseLeave={() => setCursorType('default')}
            >
              <span className="absolute top-0 right-0 text-6xl font-serif text-white/5 font-bold -translate-y-1/2 group-hover:text-white/10 transition-colors">
                {step.num}
              </span>
              <h3 className="text-2xl font-serif text-white mb-4">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
