import { useEffect, useRef, useState, Suspense } from 'react';
import { Play, ChevronDown, Sparkles } from 'lucide-react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

function Model({ mousePos }: { mousePos: { x: number; y: number } }) {
  const modelRef = useRef<THREE.Group>(null);
  
  // Load materials first to map textures correctly
  const materials = useLoader(MTLLoader, '/VRmodel/3dgooglesgamesvr.mtl');
  const obj = useLoader(OBJLoader, '/VRmodel/3dgooglesgamesvr.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => {
    if (obj) {
      // Scale down and face the front
      obj.scale.set(0.012, 0.012, 0.012);
      obj.rotation.set(0, Math.PI, 0);
      
      // Inject metallic and glossy reflections for a luxury look
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            // Apply gold/metallic traits to non-textured surfaces
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.roughness = 0.2;
                  mat.metalness = 0.7;
                }
              });
            } else if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.roughness = 0.2;
              child.material.metalness = 0.7;
            }
          }
        }
      });
    }
  }, [obj]);

  // Gentle float (sine wave) + mouse-tracking tilt interpolation
  useFrame((state) => {
    if (!modelRef.current) return;
    
    const time = state.clock.getElapsedTime();
    modelRef.current.position.y = Math.sin(time * 1.5) * 0.12 - 0.25;

    // Smooth rotation lerp
    const targetX = mousePos.y * 0.35;
    const targetY = -mousePos.x * 0.45; // Inverted tilt tracking

    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetX, 0.08);
    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetY + Math.PI, 0.08);
  });

  return <primitive ref={modelRef} object={obj} />;
}

function ModelFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-t-2 border-b-2 border-saffron animate-spin" />
    </div>
  );
}

function VRHeadsetMockup() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMousePos({
        x: (e.clientX - cx) / (rect.width / 2),
        y: (e.clientY - cy) / (rect.height / 2),
      });
    };

    const handleLeave = () => {
      setMousePos({ x: 0, y: 0 });
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
      className="relative w-full h-[400px] md:h-[460px] mx-auto cursor-pointer select-none"
      style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
    >
      {/* Tilted Concentric Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(-40px)' }}>
        <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-amber-500/10 orbit-ring-1" />
        <div className="absolute w-[95%] h-[95%] rounded-full border border-double border-saffron/8 orbit-ring-2" />
        <div className="absolute w-[110%] h-[110%] rounded-full border border-amber-400/5 orbit-ring-3" />
      </div>

      {/* Studio Light Backdrop Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full blur-[100px] pointer-events-none transition-opacity duration-500" 
        style={{
          background: 'radial-gradient(circle, rgba(255,153,51,0.14) 0%, rgba(212,175,55,0.04) 50%, transparent 100%)',
        }}
      />

      {/* 3D Model Rendering Canvas */}
      <div className="w-full h-full relative" style={{ transform: 'translateZ(10px)' }}>
        <Suspense fallback={<ModelFallback />}>
          <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#FFE29A" />
            <directionalLight position={[-5, 5, -5]} intensity={1.2} color="#FF9933" />
            <pointLight position={[0, -2, 2]} intensity={1.5} color="#D4AF37" />
            <Model mousePos={mousePos} />
          </Canvas>
        </Suspense>
      </div>

      {/* 3D Floating Diya Particles with Parallax */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
        {[
          { top: '8%', left: '8%', delay: '0s', size: 7 },
          { top: '15%', right: '12%', delay: '0.8s', size: 5 },
          { bottom: '12%', left: '16%', delay: '1.6s', size: 6 },
          { bottom: '18%', right: '10%', delay: '0.4s', size: 4 },
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
