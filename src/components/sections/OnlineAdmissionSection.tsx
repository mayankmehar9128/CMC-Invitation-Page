import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';

export default function OnlineAdmissionSection() {
  const handleContact = () => {
    window.open('https://infodatasoft.tech/login', '_blank');
  };

  return (
    <section className="py-12 relative overflow-hidden bg-slate-900 text-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[40rem] h-[40rem] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center p-5 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20 shadow-xl shadow-primary/20">
            <GraduationCap className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Ready to Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Future?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Take the first step towards a successful career. Enroll now and experience smart study with smart results.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group inline-block p-[3px] rounded-full overflow-hidden shadow-lg shadow-orange-500/20"
          >
            {/* Spinning background for the border */}
            <div className="absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-full h-full bg-[conic-gradient(from_0deg,transparent_50%,#f97316_100%)]"
              />
            </div>
            <button
              onClick={handleContact}
              className="relative inline-flex items-center justify-center gap-4 px-5 py-5 bg-slate-900 text-white text-xl font-bold rounded-full transition-all w-full h-full"
            >
              <span className="relative z-10 flex items-center gap-3">
                Click for Online Admission
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 text-orange-500" />
              </span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
