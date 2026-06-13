import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/cmc_vid.mp4';

export default function VideoSection() {
  return (
    <section className="w-full bg-transparent overflow-hidden relative py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 flex justify-center items-center"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="metadata"
            className="w-auto max-w-full h-auto max-h-[85vh] object-contain block"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
