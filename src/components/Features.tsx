import './Features.css';

const FEATURES = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="16" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="16" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Scroll. Crave. Choose.',
    desc: 'Browse the collection, save your favourites, and create a menu that\'s all yours.',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3v22M3 14h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Automated For You.',
    desc: 'Your shopping list updates automatically as you save and remove meals. Zero effort.',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 9.5l8 4.5-8 4.5V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Press Play.',
    desc: 'Follow along with entertaining videos and cook with ease. Meals ready in 30 minutes or less.',
  },
];

export default function Features() {
  return (
    <section className="section features">
      <div className="features-line" />

      <div className="container">
        <div className="features-header">
          <span className="label reveal">How It Works</span>
          <h2 className="features-title reveal delay-1">
            Your Menu,<br />Your Way.
          </h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={f.number} className={`feature-card reveal delay-${i + 1}`}>
              <div className="feature-top">
                <div className="feature-icon">{f.icon}</div>
                <span className="feature-number">{f.number}</span>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
