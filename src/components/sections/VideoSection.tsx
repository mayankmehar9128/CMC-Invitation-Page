import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/WhatsApp Video 2026-06-13 at 11.10.29 PM.mp4';

export default function VideoSection() {
  return (
    <section className="w-full bg-slate-900 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          controls
          className="w-full h-auto md:h-[calc(100vh-4rem)] md:mt-3 md:mb-3 block"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
