import React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesPreviewSection from './components/sections/ServicesPreviewSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ServicesSection from './components/sections/ServicesSection';
import TechStackSection from './components/sections/TechStackSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a] to-[#1a2233] z-0"></div>
      
      {/* Aurora Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] opacity-10 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full bg-purple-500/50 blur-[150px] animate-[spin_20s_linear_infinite_reverse]"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-indigo-500/50 blur-[150px] animate-[spin_20s_linear_infinite]"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-8">
          <HeroSection />
          <ServicesPreviewSection />
          <ProjectsSection />
          <ServicesSection />
          <TechStackSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;