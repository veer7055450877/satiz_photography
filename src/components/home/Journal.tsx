import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const stories = [
  {
    id: 1,
    title: "A Weekend in Tuscany",
    category: "Travel",
    date: "Oct 2024",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sarah & Mike's Elopement",
    category: "Wedding",
    date: "Sep 2024",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Art of Portraiture",
    category: "Behind the Scenes",
    date: "Aug 2024",
    img: "https://images.unsplash.com/photo-1596940396010-2283d8c36fce?q=80&w=712&auto=format&fit=crop"
  }
];

export const Journal = () => {
  const { setCursorType, setCursorText } = useCursor();
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent block mb-4">Journal</span>
            <h2 className="text-4xl font-serif text-white">Latest Stories</h2>
          </div>
          <Link
            to="/journal"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
              onMouseEnter={() => {
                setCursorType('text');
                setCursorText('Read');
              }}
              onMouseLeave={() => {
                setCursorType('default');
                setCursorText('');
              }}
              onClick={() => navigate(`/journal/${story.id}`)}
            >
              <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                <motion.img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start border-t border-white/10 pt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent mb-2 block">{story.category}</span>
                  <h3 className="text-xl font-serif text-white group-hover:text-white/80 transition-colors">{story.title}</h3>
                </div>
                <span className="text-[10px] text-white/40">{story.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
