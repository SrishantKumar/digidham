import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['How It Works', 'Experience Shrines', 'Pricing', 'The Devotion Box'],
    Company: ['About DigiDham', 'Our Mission', 'Press & Media', 'Careers'],
    Support: ['Help Centre', 'Delivery Info', 'Returns Policy', 'Device Compatibility'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookie Policy'],
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.03), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top: brand + links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <circle cx="20" cy="20" r="19" stroke="url(#fLogoGrad)" strokeWidth="1.5"/>
                <path d="M20 6 L20 12 M14 10 L17 15 M26 10 L23 15" stroke="#FF9933" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 20 Q14 14 20 20 Q26 26 32 20" stroke="url(#fLogoGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="url(#fLogoGrad)"/>
                <path d="M12 28 L28 28" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                <path d="M10 32 L30 32" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                <defs>
                  <linearGradient id="fLogoGrad" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#FF9933"/>
                    <stop offset="100%" stopColor="#D4AF37"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-cinzel text-lg font-semibold gradient-text">DigiDham</span>
            </div>

            <p className="font-jakarta text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
              India's premier Spiritual Accessibility Platform. Bringing the divine to every home, regardless of age or ability.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, text: 'seva@digidham.in' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: MapPin, text: 'Bengaluru, Karnataka, India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={13} className="text-amber-500/60" />
                  <span className="font-jakarta text-xs text-white/40">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="font-cinzel text-sm font-semibold text-white/80 mb-4 tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-jakarta text-xs text-white/35 hover:text-amber-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="golden-divider mb-8" />

        {/* Emotional tagline */}
        <div className="text-center mb-8">
          <p className="font-playfair text-xl sm:text-2xl italic gradient-text">
            "Restoring the dignity of independent pilgrimage."
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-jakarta text-xs text-white/25">
            © 2025 DigiDham Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 font-jakarta text-xs text-white/25">
            Made with <Heart size={10} className="text-amber-500/60 fill-amber-500/40" /> for every devotee in India
          </div>
        </div>
      </div>
    </footer>
  );
}
