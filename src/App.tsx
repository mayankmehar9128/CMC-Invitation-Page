import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CoursesSection from './components/sections/CoursesSection';
import TeachersSection from './components/sections/TeachersSection';
import DirectorSection from './components/sections/DirectorSection';
import FeeTimingSection from './components/sections/FeeTimingSection';
import LocationSection from './components/sections/LocationSection';
import Footer from './components/sections/Footer';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
      {/* Animated blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Animated blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[-5%] w-[35rem] h-[35rem] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Animated blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 150, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-orange-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      {/* Animated blob 4 */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
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
        <AboutSection />
        <CoursesSection />
        <TeachersSection />
        <DirectorSection />
        <FeeTimingSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

