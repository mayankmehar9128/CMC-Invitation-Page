import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Trophy, Star, Medal } from 'lucide-react';
import directorUrl from '../../assets/director2.jpg';
import award1Url from '../../assets/award1.jpg';
import award2Url from '../../assets/award2.jpg';
import award3Url from '../../assets/award3.jpg';
import award4Url from '../../assets/award4.jpg';

export default function DirectorSection() {
  return (
    <section id="director" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Invitation Card Style Container */}
        <div className="bg-white rounded-md shadow-2xl relative overflow-hidden border-[8px] border-double border-yellow-600/30">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-600/40 rounded-tl-xl m-2"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-600/40 rounded-tr-xl m-2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-yellow-600/40 rounded-bl-xl m-2"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-600/40 rounded-br-xl m-2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 lg:p-16 relative z-10">
            
            {/* Director's Message (Left Side) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-center md:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2 tracking-wide">Director's Message</h2>
                <div className="h-1 w-24 bg-yellow-600 mx-auto md:mx-0 mb-6 rounded-full"></div>
              </div>

              <div className="relative mb-8">
                <Quote className="h-10 w-10 text-yellow-600/20 absolute -top-4 -left-4" />
                <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight font-serif relative z-10">
                  "NO FIRST DIVISION <br/>
                  <span className="text-yellow-600">NO FEE</span>"
                </h3>
              </div>
              
              <div className="space-y-4 text-slate-700 text-lg md:text-xl font-serif italic border-l-4 border-yellow-600/30 pl-6 mb-8">
                <p>
                  "Success is not an accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                </p>
                <p>
                  "Excellence is our tradition. We are dedicated to providing the highest quality education and ensuring our students achieve top ranks in Bihar. Your success is our ultimate reputation."
                </p>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-2xl font-bold text-slate-900 mb-1 font-serif">Mithilesh Kumar</h4>
                <p className="text-yellow-700 font-medium tracking-wider uppercase text-sm">Director & Founder, CMC Commerce</p>
              </div>
            </div>
            
            {/* Full Director Image (Right Side) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative p-2 bg-white shadow-xl border border-gray-200 transform md:rotate-3 transition-transform hover:rotate-0 duration-500 max-w-md w-full">
                {/* Ensure image is not cropped and shown fully */}
                <img 
                  src={directorUrl} 
                  alt="Director Mithilesh Sir" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full border-t border-dashed border-gray-300 my-4"></div>

          {/* Awards & Success Gallery */}
          <div className="p-8 md:p-12 lg:p-16 bg-slate-50/50">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif text-slate-900 mb-3 flex items-center justify-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-600" />
                A Legacy of Excellence
                <Trophy className="h-6 w-6 text-yellow-600" />
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Honored with numerous prestigious awards for our outstanding contribution to commerce education in Bihar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-2 shadow-md border border-gray-100 rounded-md">
                <img src={award1Url} alt="Award ceremony" className="w-full h-48 object-contain rounded" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-2 shadow-md border border-gray-100 rounded-md">
                <img src={award2Url} alt="Receiving honor" className="w-full h-48 object-contain rounded" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-2 shadow-md border border-gray-100 rounded-md">
                <img src={award3Url} alt="Trophy presentation" className="w-full h-48 object-contain rounded" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-2 shadow-md border border-gray-100 rounded-md">
                <img src={award4Url} alt="Certificate of excellence" className="w-full h-48 object-contain rounded" />
              </motion.div>
            </div>

            <div className="mt-12 flex justify-center gap-8 text-center">
               <div>
                 <Medal className="h-10 w-10 text-yellow-600 mx-auto mb-2" />
                 <span className="block font-bold text-xl text-slate-900">Rajyaratna Samman</span>
                 <span className="text-sm text-slate-500">2008</span>
               </div>
               <div>
                 <Star className="h-10 w-10 text-yellow-600 mx-auto mb-2" />
                 <span className="block font-bold text-xl text-slate-900">Top Results</span>
                 <span className="text-sm text-slate-500">Every Year</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
