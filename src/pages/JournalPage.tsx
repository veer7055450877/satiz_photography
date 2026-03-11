import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Footer } from '../components/layout/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "A Weekend in Tuscany",
    category: "Travel",
    date: "Oct 2024",
    excerpt: "The light in Italy hits different. We spent three days chasing sunsets and wine.",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sarah & Mike's Elopement",
    category: "Wedding",
    date: "Sep 2024",
    excerpt: "An intimate ceremony on the cliffs of Moher. Just them, the wind, and the vows.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Art of Portraiture",
    category: "Behind the Scenes",
    date: "Aug 2024",
    excerpt: "How I set up my studio lighting to create dramatic, emotive portraits.",
    img: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Film vs Digital",
    category: "Gear",
    date: "Jul 2024",
    excerpt: "Why I still shoot 35mm film for personal projects and how it influences my digital work.",
    img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?q=80&w=800&auto=format&fit=crop"
  }
];

export const JournalPage = () => {
  const { setCursorType, setCursorText } = useCursor();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif mb-4">The Journal</h1>
        <p className="text-secondary max-w-xl">Thoughts, stories, and behind-the-scenes from the field.</p>
      </div>

      <div className="px-6 pb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => navigate(`/journal/${post.id}`)}
            onMouseEnter={() => { setCursorType('text'); setCursorText('Read'); }}
            onMouseLeave={() => { setCursorType('default'); setCursorText(''); }}
          >
            <div className="aspect-video overflow-hidden mb-6 bg-surface">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-4 mb-3 text-xs uppercase tracking-widest">
                <span className="text-accent">{post.category}</span>
                <span className="text-white/40">{post.date}</span>
            </div>
            <h3 className="text-3xl font-serif mb-3 group-hover:text-white/80 transition-colors">{post.title}</h3>
            <p className="text-secondary leading-relaxed">{post.excerpt}</p>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
