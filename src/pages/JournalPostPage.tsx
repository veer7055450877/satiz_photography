import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/layout/Footer';

export const JournalPostPage = () => {
  const { id } = useParams();
  
  // Mock data fetch based on ID (In real app, fetch from API)
  const post = {
    title: "A Weekend in Tuscany",
    date: "October 12, 2024",
    category: "Travel",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p>The light in Italy hits different. We spent three days chasing sunsets and wine along the rolling hills of Val d'Orcia.</p>
      <p>There is a stillness here that is hard to find elsewhere. The way the fog lifts in the morning, revealing the cypress trees standing like sentinels in the distance.</p>
      <p>We stayed at a small agriturismo, where the owner, Maria, made fresh pasta every evening. It wasn't just about the photos; it was about slowing down to the rhythm of the land.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Image */}
      <div className="h-[60vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-4xl mx-auto">
            <Link to="/journal" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest">
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            <span className="block text-accent text-xs uppercase tracking-[0.2em] mb-2">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight">{post.title}</h1>
            <p className="text-white/60 mt-4">{post.date}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg prose-headings:font-serif prose-p:text-secondary prose-p:leading-loose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Footer />
    </div>
  );
};
