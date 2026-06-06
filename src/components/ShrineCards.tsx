import { useState } from 'react';
import { Eye, Volume2 } from 'lucide-react';

const shrines = [
  {
    name: 'Kedarnath Temple',
    location: 'Uttarakhand, Himalayas',
    description: 'Stand amidst the eternal Himalayas as morning chants echo through glacial mist. Experience the ancient Shiva shrine at 3,583 metres.',
    vibe: 'Himalayan mist & morning chants',
    image: '/images/kedarnath.png',
    color: '#4A90D9',
    glowColor: 'rgba(74,144,217,0.25)',
    tag: 'Himalayan',
  },
  {
    name: 'Kashi Vishwanath',
    location: 'Varanasi, Uttar Pradesh',
    description: 'Witness the sacred Ganga Aarti in its full golden glory. Spatial audio carries 108 bells and the Maha Aarti across your senses.',
    vibe: 'Golden aura & Ganga Aarti',
    image: '/images/kashi_vishwanath.png',
    color: '#FF9933',
    glowColor: 'rgba(255,153,51,0.3)',
    tag: 'Most Visited',
  },
  {
    name: 'Jagannath Puri',
    location: 'Odisha, East India',
    description: 'The Lord of the Universe awaits. Grand chariots and majestic sea breeze fill this legendary coastal Dham with boundless devotion.',
    vibe: 'Grand chariot & sea breeze',
    image: '/images/jagannath_puri.png',
    color: '#E8C84A',
    glowColor: 'rgba(232,200,74,0.25)',
    tag: 'Char Dham',
  },
  {
    name: 'Vaishno Devi',
    location: 'Jammu & Kashmir',
    description: 'Enter the divine cave of Mata Vaishno Devi. Powerful shlokas reverberate through the sacred cavern in breathtaking spatial sound.',
    vibe: 'Divine cave & powerful shlokas',
    image: '/images/vaishno_devi.png',
    color: '#C471ED',
    glowColor: 'rgba(196,113,237,0.2)',
    tag: 'Shakti Peeth',
  },
];

function SoundWave({ active }: { active: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-[2px] rounded-full transition-all duration-300"
          style={{
            height: active ? '100%' : '25%',
            background: 'linear-gradient(to top, #FF9933, #FFE29A)',
            animation: active ? `sound-wave 0.8s ease-in-out infinite` : 'none',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function ShrineCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" id="shrines">
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(255,153,51,0.02) 0%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="font-jakarta text-xs font-semibold text-[#FFE29A] tracking-[0.3em] uppercase">
            Sacred Destinations
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 gradient-text-white">
            Step Inside the Sanctum
          </h2>
          <p className="font-jakarta text-base text-white/60 mt-4 max-w-lg mx-auto">
            Four of India's most revered pilgrimage sites, captured in crystal-clear 360° spatial reality.
          </p>
        </div>

        {/* Cards grid — responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shrines.map((shrine, i) => (
            <div
              key={shrine.name}
              className={`shrine-card reveal reveal-delay-${i + 1} group`}
              style={{
                minHeight: '440px',
                boxShadow: hovered === i ? `0 25px 50px -12px ${shrine.glowColor}` : 'none',
                borderColor: hovered === i ? shrine.color + '60' : 'rgba(255, 153, 51, 0.08)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url(${shrine.image})`,
                  filter: hovered === i ? 'saturate(1.1) brightness(0.7)' : 'saturate(0.75) brightness(0.4)',
                  transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: hovered === i
                    ? `linear-gradient(to top, rgba(6,5,12,0.95) 0%, rgba(6,5,12,0.4) 60%, rgba(6,5,12,0.1) 100%)`
                    : 'linear-gradient(to top, rgba(6,5,12,0.95) 0%, rgba(6,5,12,0.6) 60%, rgba(6,5,12,0.2) 100%)',
                }}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="font-jakarta text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md"
                  style={{
                    background: `${shrine.color}15`,
                    border: `1px solid ${shrine.color}35`,
                    color: '#FFF',
                  }}
                >
                  {shrine.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end min-h-[160px]">
                
                <h3 className="font-cinzel text-lg font-bold text-white mb-1">{shrine.name}</h3>
                <p className="font-jakarta text-xs text-white/50 mb-3">{shrine.location}</p>

                {/* Sliding description with clip-path */}
                <div
                  className="transition-all duration-500 overflow-hidden"
                  style={{
                    maxHeight: hovered === i ? '120px' : '0px',
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? 'translateY(0)' : 'translateY(15px)',
                  }}
                >
                  <p className="font-jakarta text-xs text-white/70 leading-relaxed mb-4">
                    {shrine.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                  <div className="flex items-center gap-2">
                    <Volume2 size={13} className="text-amber-400" />
                    <span className="font-jakarta text-xs text-white/40">{shrine.vibe}</span>
                    <SoundWave active={hovered === i} />
                  </div>

                  <button
                    className="flex items-center gap-1.5 rounded-full px-3.5 py-2 font-jakarta text-xs font-semibold transition-all duration-300 shadow-lg"
                    style={{
                      background: hovered === i ? '#FF9933' : 'rgba(255,255,255,0.06)',
                      color: hovered === i ? '#06050C' : 'rgba(255,255,255,0.5)',
                      opacity: hovered === i ? 1 : 0.4,
                      transform: hovered === i ? 'translateY(0)' : 'translateY(4px)',
                    }}
                  >
                    <Eye size={12} />
                    VR Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
