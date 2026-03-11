import { Hero } from '../components/home/Hero';
import { Portfolio } from '../components/home/Portfolio';
import { Services } from '../components/home/Services';
import { Process } from '../components/home/Process';
import { Philosophy } from '../components/home/Philosophy';
import { Journal } from '../components/home/Journal';
import { About } from '../components/home/About';
import { Testimonials } from '../components/home/Testimonials';
import { Contact } from '../components/home/Contact';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-background">
        <Portfolio />
        <Philosophy />
        <Services />
        <Process />
        <Journal />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};
