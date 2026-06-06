import { useEffect, useRef, useState } from 'react';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

function VRHeadsetMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Invert delta to tilt away/towards the light source
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      
      // Multi-axis rotation with translation for physical 3D appearance
      inner.style.transform = `rotateY(${-dx * 18}deg) rotateX(${dy * 15}deg) translate3d(0, 0, 10px)`;
    };

    const handleLeave = () => {
      inner.style.transform = 'rotateY(0deg) rotateX(0deg) translate3d(0, 0, 0px)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[460px] mx-auto cursor-pointer select-none py-10"
      style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
    >
      {/* Interactive Floating VR Chassis with Inverted Parallax */}
      <div
        ref={innerRef}
        className="relative float-anim"
        style={{
          transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Tilted Concentric Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(-40px)' }}>
          <div className="absolute w-[120%] h-[120%] rounded-full border border-dashed border-amber-500/10 orbit-ring-1" />
          <div className="absolute w-[135%] h-[135%] rounded-full border border-double border-saffron/8 orbit-ring-2" />
          <div className="absolute w-[150%] h-[150%] rounded-full border border-amber-400/5 orbit-ring-3" />
        </div>

        {/* Studio Light Backdrop Aura */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500" 
          style={{
            background: 'radial-gradient(circle, rgba(255,153,51,0.18) 0%, rgba(212,175,55,0.05) 50%, transparent 100%)',
            transform: 'translateZ(-30px)'
          }}
        />

        {/* 3D Headset Body (Layered for Depth) */}
        <div 
          className="relative drop-shadow-[0_25px_60px_rgba(6,5,12,0.8)]"
          style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
        >
          {/* Main Visual Headset Frame */}
          <svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="luxuryBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#121024"/>
                <stop offset="40%" stopColor="#080712"/>
                <stop offset="100%" stopColor="#030206"/>
              </linearGradient>
              <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B8860B"/>
                <stop offset="30%" stopColor="#FFE29A"/>
                <stop offset="70%" stopColor="#D4AF37"/>
                <stop offset="100%" stopColor="#FF9933"/>
              </linearGradient>
              <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
                <stop offset="30%" stopColor="rgba(255,255,255,0.03)"/>
                <stop offset="70%" stopColor="rgba(255,153,51,0.02)"/>
                <stop offset="100%" stopColor="rgba(212,175,55,0.15)"/>
              </linearGradient>
              <radialGradient id="spiritualGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="rgba(255,153,51,0.4)"/>
                <stop offset="40%" stopColor="rgba(212,175,55,0.15)"/>
                <stop offset="100%" stopColor="rgba(6,5,12,0.95)"/>
              </radialGradient>
              <filter id="luxuryGlow">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
            </defs>

            {/* Rear Cushioning layer */}
            <rect x="50" y="75" width="340" height="130" rx="35" fill="#0A0914" stroke="url(#goldFoil)" strokeWidth="0.5" opacity="0.4" />

            {/* Headset Chassis */}
            <rect x="56" y="66" width="328" height="148" rx="42" fill="url(#luxuryBody)" stroke="url(#goldFoil)" strokeWidth="1.2" />

            {/* Front Curved Glass Shield Plate */}
            <rect x="62" y="72" width="316" height="136" rx="36" fill="url(#spiritualGlow)" opacity="0.9" />
            <rect x="62" y="72" width="316" height="136" rx="36" fill="url(#glassReflection)" />

            {/* Inner Spiritual Mandalic Circuit / Temple Silhouette pattern inside screen */}
            <path d="M120 140 A 100 100 0 0 1 320 140" fill="none" stroke="url(#goldFoil)" strokeWidth="0.5" opacity="0.15" strokeDasharray="3,3" />
            <circle cx="220" cy="140" r="45" fill="none" stroke="url(#goldFoil)" strokeWidth="0.8" opacity="0.25" />
            <circle cx="220" cy="140" r="15" fill="none" stroke="url(#goldFoil)" strokeWidth="0.5" opacity="0.2" />
            
            {/* Lenses */}
            <ellipse cx="155" cy="140" rx="42" ry="38" fill="#06050C" stroke="url(#goldFoil)" strokeWidth="1" opacity="0.8" />
            <ellipse cx="155" cy="140" rx="30" ry="26" fill="rgba(255,153,51,0.08)" />
            <circle cx="150" cy="135" r="4" fill="#FFF" opacity="0.3" />

            <ellipse cx="285" cy="140" rx="42" ry="38" fill="#06050C" stroke="url(#goldFoil)" strokeWidth="1" opacity="0.8" />
            <ellipse cx="285" cy="140" rx="30" ry="26" fill="rgba(255,153,51,0.08)" />
            <circle cx="280" cy="135" r="4" fill="#FFF" opacity="0.3" />

            {/* Golden Temple Spine / Crown Trim in Center top */}
            <path d="M205 72 L220 52 L235 72 Z" fill="url(#goldFoil)" opacity="0.8" />
            <line x1="220" y1="52" x2="220" y2="35" stroke="url(#goldFoil)" strokeWidth="1.5" opacity="0.9" />
            <circle cx="220" cy="32" r="2.5" fill="#FFE29A" filter="url(#luxuryGlow)" />

            {/* Premium Metallic Side Hinges */}
            <rect x="42" y="115" width="15" height="50" rx="4" fill="url(#goldFoil)" />
            <rect x="383" y="115" width="15" height="50" rx="4" fill="url(#goldFoil)" />

            {/* Brand Logo Watermark */}
            <text x="220" y="102" textAnchor="middle" fontFamily="Cinzel" fontSize="9" fill="url(#goldFoil)" letterSpacing="5" opacity="0.75">DIGIDHAM</text>
            <text x="220" y="185" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#FFE29A" letterSpacing="2" opacity="0.4">SPATIAL VR SYSTEM</text>
          </svg>
        </div>

        {/* 3D Floating Diya Particles with Parallax */}
        <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
          {[
            { top: '8%', left: '8%', delay: '0s', size: 7 },
            { top: '15%', right: '12%', delay: '0.8s', size: 5 },
            { bottom: '12%', left: '16%', delay: '1.6s', size: 6 },
            { bottom: '18%', right: '10%', delay: '0.4s', size: 4 },
            { top: '55%', left: '-5%', delay: '1.2s', size: 5 },
            { top: '65%', right: '-4%', delay: '2s', size: 6 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                ...p,
                width: p.size,
                height: p.size,
                background: 'linear-gradient(135deg, #FFE29A, #FF9933)',
                animation: `diya-flicker ${2 + i * 0.4}s ease-in-out infinite`,
                animationDelay: p.delay,
                boxShadow: '0 0 12px rgba(255,153,51,0.9), 0 0 24px rgba(212,175,55,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      setScrollOpacity(Math.max(0, 1 - window.scrollY / 400));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cosmic pt-24 pb-16">
      {/* Velvet Spiritual Radial Glow Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 35%, rgba(255,153,51,0.05) 0%, rgba(13,11,26,0.3) 50%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Premium Gold Sub-Pixel Badge */}
            <div
              className="inline-flex items-center gap-2 glass-card px-4 py-2.5 mb-8"
              style={{
                animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
                borderRadius: '50px',
              }}
            >
              <Sparkles size={13} className="text-amber-400 animate-pulse" />
              <span className="font-jakarta text-xs font-semibold text-[#FFE29A] tracking-[0.2em] uppercase">
                Immersive Spatial Devotion
              </span>
            </div>

            {/* Elevated Serif Gold Leaf Headings */}
            <h1
              className="font-cinzel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] mb-6"
              style={{ animation: 'fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' }}
            >
              <span className="gradient-text-white block">Bring India's</span>
              <span className="gradient-text block py-1">Sacred Pilgrimages</span>
              <span className="gradient-text-white block">Home.</span>
            </h1>

            <p
              className="font-jakarta text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
              style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}
            >
              Gift your parents and grandparents the pristine beauty of 360° immersive VR Darshans, Ganga Aartis, and holy chants. A highly premium, sensory experience from the comfort of home.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center"
              style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}
            >
              <a href="#pricing" className="cta-btn text-base px-9 py-4 shadow-2xl">
                Gift a Darshan
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-3 font-jakarta text-sm font-semibold text-white/80 hover:text-white transition-colors group"
              >
                <span
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-amber-400/20 bg-white/2 backdrop-blur-md group-hover:border-amber-400/40 transition-all"
                >
                  <Play size={14} className="text-amber-400 fill-amber-400/20 group-hover:scale-110 transition-transform ml-0.5" />
                </span>
                Watch Experience
              </a>
            </div>

            {/* Luxury Stats Grid */}
            <div
              className="flex items-center gap-8 sm:gap-12 mt-16 lg:justify-start justify-center border-t border-white/5 pt-8"
              style={{ animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}
            >
              {[
                { value: '4+', label: 'Sacred Yatras' },
                { value: '50K+', label: 'Families Blessed' },
                { value: '360°', label: 'Spatial Presence' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-cinzel text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="font-jakarta text-xs text-white/55 mt-1 tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive 3D Showcase */}
          <div
            className="flex-1 w-full max-w-md lg:max-w-xl"
            style={{ animation: 'fade-in-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' }}
          >
            <VRHeadsetMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: scrollOpacity, transition: 'opacity 0.3s' }}
      >
        <span className="font-jakarta text-xs text-white/40 tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-amber-500/60 animate-bounce" />
      </div>

      {/* Ambient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #06050C)' }} />
    </section>
  );
}
