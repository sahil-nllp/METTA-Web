import { useState } from 'react';
import './WaitlistModal.css';

interface WaitlistModalProps {
  onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {!submitted ? (
          <>
            <span className="label">Early Access</span>
            <h2 className="modal-title">Join the<br />Waitlist.</h2>
            <p className="modal-desc">
              Be the first to experience Metta. We'll let you know when we go live.
            </p>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modal-input"
              />
              <button type="submit" className="btn-primary modal-submit">
                Get Early Access
              </button>
            </form>
            <p className="modal-privacy">No spam. No commitment. Just good food.</p>
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-checkmark">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="var(--accent)" strokeWidth="1.5"/>
                <path d="M9 16l5 5 9-9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="modal-success-title">You're on the list.</h3>
            <p className="modal-success-sub">We'll reach out when Metta is ready for you.</p>
          </div>
        )}
      </div>
    </div>
  );
}
