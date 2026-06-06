import { Check, Gift, Zap, Star } from 'lucide-react';

const devotionBox = {
  name: 'The Devotion Box',
  type: 'One-time Hardware Gift',
  price: '₹1,999',
  period: 'one-time',
  badge: 'Most Popular Gift',
  badgeColor: '#FF9933',
  description: 'The complete spiritual gift — everything needed to start their divine journey today.',
  features: [
    'Premium Ergonomic VR Headset',
    'Protective Travel Case',
    'Lifetime access to 4 Core Dham Shrines',
    'Setup Guide in 6 languages',
    'Voice-controlled DigiDham App',
    '1-year hardware warranty',
  ],
  cta: 'Gift Now',
  highlight: true,
};

const bhaktiSub = {
  name: 'Bhakti-As-A-Service',
  type: 'Monthly Subscription Add-on',
  price: '₹49',
  period: '/ month',
  badge: 'Expand the Experience',
  badgeColor: '#D4AF37',
  description: 'Unlock the full universe of devotion — live, automated, and ever-expanding.',
  features: [
    'Live festival & event streaming',
    'Daily automated Aarti loops',
    'Monthly newly-mapped temples',
    'Exclusive Satsang broadcasts',
    'Family sharing (up to 3 devices)',
    'Priority customer seva support',
  ],
  cta: 'Add Subscription',
  highlight: false,
};

function PricingCard({ plan }: { plan: typeof devotionBox }) {
  return (
    <div
      className={`glass-card p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        plan.highlight ? 'golden-glow' : ''
      }`}
      style={{
        borderColor: plan.highlight ? 'rgba(255,153,51,0.4)' : 'rgba(212,175,55,0.15)',
      }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-6 font-jakarta text-xs font-semibold"
        style={{
          background: `${plan.badgeColor}18`,
          border: `1px solid ${plan.badgeColor}40`,
          color: plan.badgeColor,
        }}
      >
        {plan.highlight ? <Gift size={11} /> : <Zap size={11} />}
        {plan.badge}
      </div>

      {/* Name & type */}
      <h3 className="font-cinzel text-2xl font-semibold text-white mb-1">{plan.name}</h3>
      <p className="font-jakarta text-xs text-white/40 mb-6 tracking-wide">{plan.type}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-cinzel text-5xl font-bold gradient-text">{plan.price}</span>
        <span className="font-jakarta text-sm text-white/40">{plan.period}</span>
      </div>
      <p className="font-jakarta text-sm text-white/50 mb-8 leading-relaxed">{plan.description}</p>

      {/* Divider */}
      <div className="golden-divider mb-8" />

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                background: `${plan.badgeColor}18`,
                border: `1px solid ${plan.badgeColor}35`,
              }}
            >
              <Check size={10} style={{ color: plan.badgeColor }} />
            </div>
            <span className="font-jakarta text-sm text-white/70">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {plan.highlight ? (
        <a
          href="#"
          className="cta-btn w-full block text-center text-base"
          style={{ animationDelay: '1s' }}
        >
          {plan.cta}
        </a>
      ) : (
        <a
          href="#"
          className="w-full block text-center font-jakarta text-sm font-semibold py-4 rounded-full border transition-all duration-300 hover:bg-amber-500/10"
          style={{
            borderColor: 'rgba(212,175,55,0.35)',
            color: '#D4AF37',
          }}
        >
          {plan.cta}
        </a>
      )}

      {/* Decorative corner glow */}
      {plan.highlight && (
        <div
          className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top right, rgba(255,153,51,0.12), transparent 70%)',
          }}
        />
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="font-jakarta text-xs font-medium text-amber-400 tracking-[0.3em] uppercase">
            Spiritual Gifting
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4 gradient-text-white">
            Choose Your Offering
          </h2>
          <p className="font-jakarta text-base text-white/50 mt-4 max-w-lg mx-auto">
            Give the gift of divine connection. A priceless experience at an accessible price.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="reveal reveal-delay-1">
            <PricingCard plan={devotionBox} />
          </div>
          <div className="reveal reveal-delay-2">
            <PricingCard plan={bhaktiSub} />
          </div>
        </div>

        {/* Trust note */}
        <div className="text-center mt-12 reveal">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="font-jakarta text-xs text-white/35">
            Rated 4.9/5 by 12,000+ families · Free returns within 30 days · Secure Indian payment gateway
          </p>
        </div>
      </div>
    </section>
  );
}
