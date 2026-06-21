import React from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import VideoSection from './components/sections/VideoSection';
import CoursesSection from './components/sections/CoursesSection';
import TeachersSection from './components/sections/TeachersSection';
import DirectorSection from './components/sections/DirectorSection';
import FeeTimingSection from './components/sections/FeeTimingSection';
import LocationSection from './components/sections/LocationSection';
import FloatingWhatsApp from './components/sections/FloatingWhatsApp';
import Footer from './components/sections/Footer';
import AppDownloadSection from './components/sections/AppDownloadSection';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
      {/* Static blob 1 */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Static blob 2 */}
      <div
        className="absolute top-[20%] right-[-5%] w-[35rem] h-[35rem] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Static blob 3 */}
      <div
        className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-orange-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Static blob 4 */}
      <div
        className="absolute bottom-[20%] right-[20%] w-[40rem] h-[40rem] bg-pink-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary relative bg-transparent">
      <BackgroundAnimation />
      <main className="relative z-10">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <FeaturesSection />
        <CoursesSection />
        <TeachersSection />
        <DirectorSection />
        <FeeTimingSection />
        <LocationSection />
        <AppDownloadSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

