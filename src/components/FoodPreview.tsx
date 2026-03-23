import { useState, useEffect, useRef } from 'react';
import './FoodPreview.css';

const MEALS = [
  {
    id: 1,
    name: 'Seared Salmon',
    tag: 'High Protein',
    cal: '420 kcal',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Buddha Bowl',
    tag: 'Plant Based',
    cal: '380 kcal',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Smash Burger',
    tag: 'Crowd Pleaser',
    cal: '490 kcal',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Shrimp Pasta',
    tag: 'Under 500 kcal',
    cal: '450 kcal',
    img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: 'Thai Salad',
    tag: 'Light & Fresh',
    cal: '320 kcal',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Chocolate Mousse',
    tag: 'Guilt-Free',
    cal: '210 kcal',
    img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function FoodPreview() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % MEALS.length);
    }, 2800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section className="section food-preview">
      <div className="fp-bg-text">FOOD</div>

      <div className="container">
        <div className="fp-header">
          <span className="label reveal">Coming Soon</span>
          <h2 className="fp-title reveal delay-1">Food That<br /><em>Excites.</em></h2>
          <p className="fp-subtitle reveal delay-2">
            Experience your collection of crave-worthy meals, anytime.
          </p>
        </div>

        {/* Carousel */}
        <div className="fp-carousel reveal delay-2">
          <div className="fp-main-img-wrapper">
            <img
              key={active}
              src={MEALS[active].img}
              alt={MEALS[active].name}
              className="fp-main-img"
            />
            <div className="fp-overlay-card">
              <div className="fp-card-tag">{MEALS[active].tag}</div>
              <div className="fp-card-name">{MEALS[active].name}</div>
              <div className="fp-card-cal">{MEALS[active].cal}</div>
            </div>
          </div>

          {/* Dots */}
          <div className="fp-dots">
            {MEALS.map((_, i) => (
              <button
                key={i}
                className={`fp-dot ${i === active ? 'active' : ''}`}
                onClick={() => {
                  setActive(i);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }}
              />
            ))}
          </div>
        </div>

        {/* Pill badges */}
        <div className="fp-badges reveal delay-3">
          {['30 min meals', 'No calorie counting', 'New weekly drops', 'Chef-crafted recipes'].map((b) => (
            <span key={b} className="fp-badge">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
