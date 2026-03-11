import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { Send } from 'lucide-react';

export const Contact = () => {
  const { setCursorType, setCursorText } = useCursor();

  return (
    <section id="contact" className="relative min-h-screen bg-black flex flex-col items-center justify-center py-24 px-6 z-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left: Text */}
        <div className="flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary uppercase tracking-widest mb-4 text-xs"
          >
            Start Your Story
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
          >
            Let's create <br/> something <span className="italic text-white/50">timeless.</span>
          </motion.h2>
          <div className="space-y-4 text-secondary text-sm">
            <p>Based in New York, available worldwide.</p>
            <p>hello@satiz.com</p>
            <p>+1 (555) 000-0000</p>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface/50 p-8 md:p-12 backdrop-blur-sm border border-white/5"
        >
          <form className="space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Date (Optional)</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Tell me about your vision</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="I'm planning a..."
                />
              </div>
            </div>

            <button 
              type="submit"
              className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs hover:text-accent transition-colors"
              onMouseEnter={() => {
                setCursorType('text');
                setCursorText('Send');
              }}
              onMouseLeave={() => {
                setCursorType('default');
                setCursorText('');
              }}
            >
              <span>Send Message</span>
              <span className="p-3 bg-white text-black rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
      
      <div className="absolute bottom-6 text-white/20 text-xs w-full text-center">
        © 2025 Satiz Photography. Crafted with passion.
      </div>
    </section>
  );
};
