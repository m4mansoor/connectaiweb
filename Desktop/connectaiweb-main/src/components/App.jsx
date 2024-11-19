import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import CommentTones from './components/CommentTones';
import ValueProposition from './components/ValueProposition';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EarlyAccessModal from './components/EarlyAccessModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onButtonClick={handleButtonClick} />
      <main className="pt-16">
        <Hero onButtonClick={handleButtonClick} />
        <Stats />
        <Features />
        <CommentTones />
        <ValueProposition />
        <Pricing onButtonClick={handleButtonClick} />
        <Testimonials onButtonClick={handleButtonClick} />
      </main>
      <Footer />
      <EarlyAccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
