import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Experience Shrines', href: '#shrines' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="20" cy="20" r="19" stroke="url(#logoGrad)" strokeWidth="1.5"/>
              <path d="M20 6 L20 12 M14 10 L17 15 M26 10 L23 15" stroke="#FF9933" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 20 Q14 14 20 20 Q26 26 32 20" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="20" cy="20" r="4" fill="url(#logoGrad)"/>
              <path d="M12 28 L28 28" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
              <path d="M10 32 L30 32" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#FF9933"/>
                  <stop offset="100%" stopColor="#D4AF37"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-cinzel text-xl font-semibold tracking-wider gradient-text">
            DigiDham
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#pricing" className="cta-btn text-sm font-semibold">
            Gift a Darshan
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-saffron transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="cta-btn text-center text-sm">
            Gift a Darshan
          </a>
        </div>
      )}
    </header>
  );
}
