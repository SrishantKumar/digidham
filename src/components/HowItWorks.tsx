import { useEffect, useRef, useState } from 'react';
import { Smartphone, Mic, Eye } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Slide & Wear',
    subtitle: 'Simple Setup',
    description: 'Slide any modern smartphone into the lightweight DigiDham VR headset. Ergonomically designed for all ages — no tech experience needed.',
    detail: 'Compatible with all major smartphone models. Weighs just 280g.',
    color: '#FF9933',
    glowColor: 'rgba(255,153,51,0.15)',
  },
  {
    number: '02',
    icon: Mic,
    title: 'Open & Speak',
    subtitle: 'Voice Controlled',
    description: 'Open the ultra-simple DigiDham App. Completely voice-controlled — just say "Jai Kedarnath" to go anywhere. Designed for senior ease.',
    detail: 'Supports Hindi, Tamil, Telugu, Bengali & English voice commands.',
    color: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.15)',
  },
  {
    number: '03',
    icon: Eye,
    title: 'Stand & Experience',
    subtitle: 'Instant Darshan',
    description: 'Select your sacred Yatra and instantly stand inside the live evening Aarti. 360° visuals, spatial audio, and divine ambiance — in seconds.',
    detail: 'Live-streamed events + 500+ hours of on-demand spiritual content.',
    color: '#FFB347',
    glowColor: 'rgba(255,179,71,0.15)',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger sequential step highlights
          setActiveStep(1);
          const t1 = setTimeout(() => setActiveStep(2), 1000);
          const t2 = setTimeout(() => setActiveStep(3), 2000);
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
          };
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24" id="how-it-works">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.02) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-16 reveal">
          <span className="font-jakarta text-xs font-semibold text-[#FFE29A] tracking-[0.3em] uppercase">
            Incredibly Simple
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 gradient-text-white">
            How DigiDham Works
          </h2>
          <p className="font-jakarta text-base text-white/60 mt-4 max-w-lg mx-auto">
            Three steps designed for anyone — no prior tech experience required.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* Connecting Line — Desktop Only */}
          <div
            className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-[2px] bg-white/5 pointer-events-none"
            style={{ top: '44px' }}
          >
            {/* Golden Spark Path */}
            <div
              className="h-full bg-gradient-to-r from-[#FF9933] via-[#D4AF37] to-[#FFB347] transition-all duration-1000 ease-out shadow-[0_0_12px_#FF9933]"
              style={{
                width: activeStep === 0 ? '0%' : activeStep === 1 ? '50%' : activeStep === 2 ? '100%' : '100%',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => {
              const isLit = activeStep >= i + 1;

              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} relative`}
                >
                  <div
                    className="glass-card p-8 h-full transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor: isLit ? `${step.color}60` : 'rgba(255, 153, 51, 0.08)',
                      boxShadow: isLit ? `0 15px 40px -15px ${step.glowColor}` : 'none',
                    }}
                  >
                    {/* Step icon and number */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Frosted Glass Circle Icon with Inner Drop Shadow */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-500 shadow-[inset_0_2px_4px_rgba(255,255,255,0.08)]"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: `0.5px solid ${isLit ? step.color + '45' : 'rgba(255, 255, 255, 0.08)'}`,
                          boxShadow: isLit ? `0 0 24px ${step.color}25` : 'none',
                        }}
                      >
                        <step.icon size={26} style={{ color: isLit ? step.color : 'rgba(255,255,255,0.45)' }} />
                      </div>
                      
                      <span
                        className="font-cinzel text-5xl font-bold leading-none select-none transition-colors duration-500"
                        style={{ color: isLit ? `${step.color}25` : 'rgba(255,255,255,0.03)' }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <span
                      className="font-jakarta text-xs font-bold tracking-widest uppercase mb-2 block"
                      style={{ color: step.color }}
                    >
                      {step.subtitle}
                    </span>
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="font-jakarta text-sm text-white/60 leading-relaxed mb-6">{step.description}</p>

                    <div
                      className="rounded-xl p-3.5 font-jakarta text-xs text-white/45 flex items-start gap-2 backdrop-blur-md"
                      style={{
                        background: isLit ? `${step.color}08` : 'rgba(255,255,255,0.01)',
                        border: `0.5px solid ${isLit ? step.color + '20' : 'rgba(255,255,255,0.03)'}`
                      }}
                    >
                      <span style={{ color: step.color }}>›</span>
                      {step.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <p className="font-jakarta text-sm text-white/40 mb-6">
            Trusted by 50,000+ families across India
          </p>
          <a href="#pricing" className="cta-btn text-base px-8 py-4 shadow-xl">
            Start Your Family\'s Yatra
          </a>
        </div>
      </div>
    </section>
  );
}
