import React from 'react';
import { TinderLogo } from './components/TinderLogo';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;