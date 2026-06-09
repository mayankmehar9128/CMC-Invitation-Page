import React from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CoursesSection from './components/sections/CoursesSection';
import TeachersSection from './components/sections/TeachersSection';
import DirectorSection from './components/sections/DirectorSection';
import FeeTimingSection from './components/sections/FeeTimingSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary">
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <TeachersSection />
        <DirectorSection />
        <FeeTimingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
