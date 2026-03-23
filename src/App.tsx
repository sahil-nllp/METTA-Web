import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodPreview from './components/FoodPreview';
import Features from './components/Features';
import AISupport from './components/AISupport';
import FinalCTA from './components/FinalCTA';
import WaitlistModal from './components/WaitlistModal';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useReveal();

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onWaitlist={openModal} />
        <FoodPreview />
        <Features />
        <AISupport />
        <FinalCTA onWaitlist={openModal} />
      </main>
      {modalOpen && <WaitlistModal onClose={closeModal} />}
    </>
  );
}
