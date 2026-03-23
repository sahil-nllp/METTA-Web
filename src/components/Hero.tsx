import './Hero.css';

interface HeroProps {
  onWaitlist: () => void;
}

export default function Hero({ onWaitlist }: HeroProps) {
  return (
    <section className="hero">
      {/* Ambient glow */}
      <div className="hero-glow" />

      <div className="container hero-inner">
        <div className="hero-left-col">
          <div className="hero-text">
            <span className="label reveal">Weight Loss. Reimagined.</span>
            <h1 className="hero-heading reveal delay-1">
              Losing weight<br />
              has never<br />
              <em>tasted this good.</em>
            </h1>
            <p className="hero-subheading reveal delay-2">
              Premium meals for effortless weight loss.<br />
              No tracking. No restriction.
            </p>
          </div>

          <div className="hero-actions reveal delay-3">
            <button className="btn-primary" onClick={onWaitlist}>
              Join the Waitlist
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="hero-note">Early access. No commitment.</p>
          </div>
        </div>

        <div className="hero-visual reveal delay-2">
          <div className="phone-wrapper">
            <div className="phone-glow" />
            <img src="/phone_mockup.png" alt="Metta App" className="phone-img" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
