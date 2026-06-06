import { useState } from 'react';
import { CloudRain, Mountain, Users, HeartPulse, Sofa, Wifi, Headphones, Star } from 'lucide-react';

const problems = [
  { icon: CloudRain, text: 'Harsh weather at high-altitude shrines', quote: '"The cold wind at Kedarnath was too much for my father\'s asthma."' },
  { icon: Mountain, text: 'Steep, treacherous climbs and terrain', quote: '"Knee surgeries made the trek to Vaishno Devi impossible for mother."' },
  { icon: Users, text: 'Massive crowds and long queues for darshan', quote: '"Standing for 7 hours in a crowd was physically exhausting for grandfather."' },
  { icon: HeartPulse, text: 'Medical constraints prevent travel', quote: '"Doctor strictly advised my parents against travel above 3000 meters."' },
];

const solutions = [
  { icon: Sofa, text: 'Pristine comfort of your own living room', quote: '"She sat comfortably on her favorite sofa and watched the Kashi Aarti live."' },
  { icon: Star, text: 'Zero queues — front-row spiritual presence', quote: '"Front-row view of the temple deities without taking a single step."' },
  { icon: Headphones, text: 'Crystal-clear spatial audio Aarti experience', quote: '"The audio was so rich, she felt the vibration of the temple bells."' },
  { icon: Wifi, text: 'Live streaming from any connected device', quote: '"Seamless streams brought Kashi, Puri, and Kedarnath straight to us."' },
];

export default function ProblemSolution() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  // Derive display quote for problem side
  const activeProblemQuote = hoveredProblem !== null 
    ? problems[hoveredProblem].quote 
    : '"My mother hasn\'t been able to visit Vaishno Devi since 2015 due to her knee surgery."';

  // Derive display quote for solution side
  const activeSolutionQuote = hoveredSolution !== null 
    ? solutions[hoveredSolution].quote 
    : '"She wept with joy during the Kashi Aarti. She said it felt more real than she ever imagined."';

  return (
    <section className="relative py-24 overflow-hidden" id="problem-solution">
      {/* Background soft glowing accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full blur-[120px] pointer-events-none" 
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.02) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-16 reveal">
          <span className="font-jakarta text-xs font-semibold text-[#FFE29A] tracking-[0.3em] uppercase">
            The Journey Reimagined
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 gradient-text-white">
            Every Obstacle, Dissolved
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Divider — desktop only */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)' }}
          />

          {/* Problem side */}
          <div className="reveal">
            <div
              className="glass-card p-8 h-full flex flex-col justify-between"
              style={{ border: '0.5px solid rgba(255,80,80,0.08)' }}
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ background: 'rgba(255,80,80,0.08)', border: '0.5px solid rgba(255,80,80,0.2)' }}
                  >
                    <span className="font-cinzel text-sm text-red-400">✗</span>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-red-300">The Physical Reality</h3>
                    <p className="font-jakarta text-xs text-white/40 mt-0.5">Traditional pilgrimage struggles</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {problems.map(({ icon: Icon, text }, i) => (
                    <li 
                      key={text} 
                      className="relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredProblem(i)}
                      onMouseLeave={() => setHoveredProblem(null)}
                      style={{
                        background: hoveredProblem === i ? 'rgba(255,80,80,0.03)' : 'transparent',
                      }}
                    >
                      {/* Aura Bloom Effect */}
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-500"
                        style={{
                          background: hoveredProblem === i 
                            ? 'radial-gradient(circle at 10% 50%, rgba(255,80,80,0.05) 0%, transparent 60%)' 
                            : 'transparent',
                        }}
                      />

                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 z-10"
                        style={{ 
                          background: hoveredProblem === i ? 'rgba(255,80,80,0.12)' : 'rgba(255,80,80,0.05)', 
                          border: hoveredProblem === i ? '0.5px solid rgba(255,80,80,0.35)' : '0.5px solid rgba(255,80,80,0.15)',
                          transform: hoveredProblem === i ? 'scale(1.15)' : 'scale(1)',
                        }}
                      >
                        <Icon size={17} className={hoveredProblem === i ? 'text-red-300' : 'text-red-400/80'} />
                      </div>
                      <p className="font-jakarta text-sm text-white/70 leading-relaxed z-10 transition-colors duration-300 hover:text-white">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Morphed Quote Box */}
              <div
                className="mt-8 rounded-xl p-4 font-jakarta text-xs text-white/50 italic transition-all duration-500"
                style={{ 
                  background: hoveredProblem !== null ? 'rgba(255,80,80,0.06)' : 'rgba(255,80,80,0.02)', 
                  border: hoveredProblem !== null ? '0.5px solid rgba(255,80,80,0.15)' : '0.5px solid rgba(255,80,80,0.05)',
                  opacity: hoveredProblem !== null ? 1 : 0.6,
                  transform: hoveredProblem !== null ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                {activeProblemQuote}
              </div>
            </div>
          </div>

          {/* Solution side */}
          <div className="reveal reveal-delay-2">
            <div
              className="glass-card p-8 h-full flex flex-col justify-between"
              style={{ border: '0.5px solid rgba(212,175,55,0.15)' }}
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,153,51,0.12)', border: '0.5px solid rgba(255,153,51,0.3)' }}
                  >
                    <span className="font-cinzel text-sm text-[#FFE29A]">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold gradient-text">The DigiDham Experience</h3>
                    <p className="font-jakarta text-xs text-white/40 mt-0.5">Spiritual freedom without limits</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {solutions.map(({ icon: Icon, text }, i) => (
                    <li 
                      key={text} 
                      className="relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredSolution(i)}
                      onMouseLeave={() => setHoveredSolution(null)}
                      style={{
                        background: hoveredSolution === i ? 'rgba(255,153,51,0.03)' : 'transparent',
                      }}
                    >
                      {/* Warm Saffron/Gold Radial Aura Bloom */}
                      <div 
                        className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-500"
                        style={{
                          background: hoveredSolution === i 
                            ? 'radial-gradient(circle at 10% 50%, rgba(255,153,51,0.06) 0%, transparent 60%)' 
                            : 'transparent',
                        }}
                      />

                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 z-10"
                        style={{ 
                          background: hoveredSolution === i ? 'rgba(255,153,51,0.15)' : 'rgba(255,153,51,0.06)', 
                          border: hoveredSolution === i ? '0.5px solid rgba(255,153,51,0.4)' : '0.5px solid rgba(255,153,51,0.15)',
                          transform: hoveredSolution === i ? 'scale(1.15)' : 'scale(1)',
                        }}
                      >
                        <Icon size={17} className={hoveredSolution === i ? 'text-amber-300' : 'text-amber-400/80'} />
                      </div>
                      <p className="font-jakarta text-sm text-white/80 leading-relaxed z-10 transition-colors duration-300 hover:text-white">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Morphed Quote Box */}
              <div
                className="mt-8 rounded-xl p-4 font-jakarta text-xs text-[#FFE29A]/80 italic transition-all duration-500"
                style={{ 
                  background: hoveredSolution !== null ? 'rgba(255,153,51,0.06)' : 'rgba(255,153,51,0.02)', 
                  border: hoveredSolution !== null ? '0.5px solid rgba(255,153,51,0.2)' : '0.5px solid rgba(255,153,51,0.05)',
                  opacity: hoveredSolution !== null ? 1 : 0.6,
                  transform: hoveredSolution !== null ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                {activeSolutionQuote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
