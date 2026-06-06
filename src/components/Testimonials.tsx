import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Seeing my mother cry tears of joy during the Kashi Aarti was priceless. She kept saying 'I can feel the Ganga'. Thank you, DigiDham.",
    author: "Raghav Sharma",
    role: "Son, gifted to his 74-year-old mother",
    city: "Bengaluru",
    stars: 5,
  },
  {
    text: "My father had his hip surgery last year. He was devastated he'd never visit Kedarnath again. DigiDham gave that dream back to him.",
    author: "Priya Nair",
    role: "Daughter, Mumbai",
    city: "Mumbai",
    stars: 5,
  },
  {
    text: "I ordered it as a birthday gift for my parents. They now do their morning puja sitting in Vaishno Devi every day. It has transformed their routine.",
    author: "Arjun Mehta",
    role: "Son, Hyderabad",
    city: "Hyderabad",
    stars: 5,
  },
  {
    text: "The spatial audio of the Aarti bells is unlike anything I've heard. My 80-year-old nani was holding her hands in prayer for 20 minutes straight.",
    author: "Kavita Reddy",
    role: "Granddaughter, Pune",
    city: "Pune",
    stars: 5,
  },
  {
    text: "Setup took exactly 3 minutes. My parents figured it out themselves using voice commands. The simplicity is as impressive as the experience.",
    author: "Suresh Patel",
    role: "Son, Ahmedabad",
    city: "Ahmedabad",
    stars: 5,
  },
  {
    text: "I've used premium VR systems before. DigiDham's shrine quality rivals anything I've seen. But the emotion it unlocks is completely unmatched.",
    author: "Dr. Meena Krishnan",
    role: "Tech professional & devotee",
    city: "Chennai",
    stars: 5,
  },
  {
    text: "My mother passed away before she could visit Jagannath Puri. My father finally got to experience it through DigiDham. He wept and smiled at the same time.",
    author: "Amit Bose",
    role: "Son, Kolkata",
    city: "Kolkata",
    stars: 5,
  },
  {
    text: "The live Maha Shivaratri streaming was extraordinary. It felt as if we were actually in the sanctum. An experience I will never forget.",
    author: "Lakshmi Iyer",
    role: "Devotee, Coimbatore",
    city: "Coimbatore",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="glass-card p-6 flex-shrink-0 flex flex-col gap-4"
      style={{
        width: '340px',
        border: '0.5px solid rgba(255,153,51,0.08)',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <Quote size={20} className="text-amber-500/20" />
      </div>
      <p className="font-jakarta text-sm text-white/70 leading-relaxed italic flex-1">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,153,51,0.08)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
          style={{ background: 'rgba(255,153,51,0.08)', color: '#FFE29A', fontFamily: 'Cinzel', border: '0.5px solid rgba(255,153,51,0.2)' }}
        >
          {t.author[0]}
        </div>
        <div>
          <p className="font-jakarta text-xs font-semibold text-white/80">{t.author}</p>
          <p className="font-jakarta text-xs text-white/40">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(255,153,51,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="font-jakarta text-xs font-semibold text-[#FFE29A] tracking-[0.3em] uppercase">
            Voices of Devotion
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 gradient-text-white">
            Families Transformed
          </h2>
          <p className="font-jakarta text-base text-white/60 mt-4 max-w-lg mx-auto">
            Real moments of joy, shared by the families who gifted a Darshan.
          </p>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #06050C, rgba(6, 5, 12, 0.7) 40%, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #06050C, rgba(6, 5, 12, 0.7) 40%, transparent)' }}
        />

        <div className="marquee-track gap-6 py-4 px-6">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
