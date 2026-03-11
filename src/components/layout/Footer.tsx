import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter mb-2">SATIZ</h2>
          <p className="text-secondary text-sm">© 2025 Satiz Photography. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-secondary hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-secondary hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-secondary hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};
