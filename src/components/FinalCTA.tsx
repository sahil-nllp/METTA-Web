import './FinalCTA.css';

interface FinalCTAProps {
  onWaitlist: () => void;
}

export default function FinalCTA({ onWaitlist }: FinalCTAProps) {
  return (
    <section className="section final-cta" id="waitlist">
      <div className="cta-bg-grid" />
      <div className="cta-glow" />

      <div className="container">
        <div className="cta-inner">
          <span className="label reveal">Get Early Access</span>
          <h2 className="cta-title reveal delay-1">Ready to start?</h2>
          <p className="cta-sub reveal delay-2">
            Join the waitlist and be the first to experience Metta.
          </p>
          <div className="cta-action reveal delay-3">
            <button className="btn-primary cta-btn" onClick={onWaitlist}>
              Join the Waitlist
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="cta-stats reveal delay-4">
            <div className="cta-stat">
              <span className="cta-stat-num">30<em>min</em></span>
              <span className="cta-stat-label">Cook time or less</span>
            </div>
            <div className="cta-divider" />
            <div className="cta-stat">
              <span className="cta-stat-num">0<em> rules</em></span>
              <span className="cta-stat-label">No tracking, no restrictions</span>
            </div>
            <div className="cta-divider" />
            <div className="cta-stat">
              <span className="cta-stat-num">∞</span>
              <span className="cta-stat-label">Crave-worthy meals</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-logo">METTA</span>
          <span className="footer-copy">© 2025 Metta. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
}
