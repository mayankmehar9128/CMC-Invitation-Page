import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import heroVideo from 'public/videos/cmc_vid.mp4';

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
        <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-black">
          {/* <video 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            preload="metadata"
            className="w-auto max-w-full h-auto max-h-[85vh] object-contain block"
          > */}
          <video
            controls
            muted
            playsInline
            preload="none"
            className="w-auto max-w-full h-auto max-h-[85vh] object-contain block"
          >
            <source src="/videos/cmc_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}



// import React, { useEffect, useRef, useState } from "react";

// export default function VideoSection() {
//   const [showVideo, setShowVideo] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShowVideo(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.2,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-transparent overflow-hidden relative py-12"
//     >
//       <div className="container mx-auto px-4 flex justify-center items-center">
//         <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-black">
          
//           {showVideo ? (
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               controls
//               preload="metadata"
//               className="w-auto max-w-full h-auto max-h-[85vh] object-contain block"
//             >
//               <source src="/videos/cmc_vid.mp4" type="video/mp4" />
//             </video>
//           ) : (
//             <div className="w-[800px] h-[450px] flex items-center justify-center text-white">
//               Loading Video...
//             </div>
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }
