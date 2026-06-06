import { useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ShrineCards from './components/ShrineCards';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observe();
    const t = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen" style={{ background: '#0D0B1A' }}>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <div className="golden-divider max-w-7xl mx-auto px-6" />
        <ProblemSolution />
        <div className="golden-divider max-w-7xl mx-auto px-6" />
        <ShrineCards />
        <div className="golden-divider max-w-7xl mx-auto px-6" />
        <HowItWorks />
        <div className="golden-divider max-w-7xl mx-auto px-6" />
        <Pricing />
        <div className="golden-divider max-w-7xl mx-auto px-6" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
