import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function AppDownloadSection() {
  return (
    <section id="app-download" className="py-16 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Take Learning Anywhere with <br className="hidden md:block"/>
                <span className="text-primary">CMC INFODATASOFT</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Download our official mobile application to access study materials, video lectures, online tests, and stay connected with our teachers anytime, anywhere.
              </p>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.mithileshinfodatasoft.InfodatasoftMobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-gray-900/20"
              >
                {/* <Smartphone className="w-8 h-8" /> */}
                <svg viewBox="0 0 512 512" className="w-8 h-8 group-hover:scale-110 transition-transform">
                      <path fill="#4CAF50" d="M43.2,34.4L337.8,206L246.5,297.3L43.2,34.4z"/>
                      <path fill="#03A9F4" d="M337.8,206l117.4,68.5c16.3,9.5,16.3,24.8,0,34.3L337.8,377.3l-91.3-91.3L337.8,206z"/>
                      <path fill="#F44336" d="M43.2,477.6l203.3-263.2l91.3,91.3L43.2,477.6z"/>
                      <path fill="#FFC107" d="M43.2,34.4v443.2c0,11.3,7.6,15.6,16.8,10.2l186.5-108.3L43.2,34.4z"/>
                    </svg>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 leading-none mb-1">GET IT ON</div>
                  <div className="text-xl font-bold font-sans leading-none">Google Play</div>
                </div>
              </a>
            </motion.div>
          </div>

                          {/* <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.mithileshinfodatasoft.InfodatasoftMobile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group border border-slate-700"
                  >
                    <svg viewBox="0 0 512 512" className="w-8 h-8 group-hover:scale-110 transition-transform">
                      <path fill="#4CAF50" d="M43.2,34.4L337.8,206L246.5,297.3L43.2,34.4z"/>
                      <path fill="#03A9F4" d="M337.8,206l117.4,68.5c16.3,9.5,16.3,24.8,0,34.3L337.8,377.3l-91.3-91.3L337.8,206z"/>
                      <path fill="#F44336" d="M43.2,477.6l203.3-263.2l91.3,91.3L43.2,477.6z"/>
                      <path fill="#FFC107" d="M43.2,34.4v443.2c0,11.3,7.6,15.6,16.8,10.2l186.5-108.3L43.2,34.4z"/>
                    </svg>
                    <div className="text-left flex flex-col">
                      <span className="text-[10px] font-semibold leading-tight uppercase text-slate-300">GET IT ON</span>
                      <span className="text-lg font-bold leading-tight">Google Play</span>
                    </div>
                  </a>
                </div> */}
          
          <motion.div 
            className="flex-1 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* CSS Phone Mockup */}
            <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-7 bg-gray-900 rounded-b-[1.5rem] w-32 mx-auto z-20 flex items-center justify-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                 <div className="w-10 h-2 rounded-full bg-gray-800"></div>
              </div>
              
              {/* Screen */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col relative z-10">
                {/* App Header */}
                <div className="bg-primary px-6 pt-12 pb-6 text-white rounded-b-[2rem] shadow-sm">
                  <div className="font-bold text-xl mb-1">CMC INFODATASOFT</div>
                  <div className="text-sm text-blue-100">Welcome, Student 👋</div>
                </div>
                
                {/* App Body */}
                <div className="p-5 flex-1 flex flex-col gap-4 overflow-hidden">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
                    <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 h-24 rounded-2xl border border-blue-100 flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 mb-2"></div>
                      <div className="text-xs font-bold text-blue-800">Lectures</div>
                    </div>
                    <div className="bg-green-50 h-24 rounded-2xl border border-green-100 flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 mb-2"></div>
                      <div className="text-xs font-bold text-green-800">Notes</div>
                    </div>
                    <div className="bg-orange-50 h-24 rounded-2xl border border-orange-100 flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-8 h-8 rounded-full bg-orange-100 mb-2"></div>
                      <div className="text-xs font-bold text-orange-800">Tests</div>
                    </div>
                    <div className="bg-purple-50 h-24 rounded-2xl border border-purple-100 flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 mb-2"></div>
                      <div className="text-xs font-bold text-purple-800">Profile</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-4 rounded-2xl text-white mt-auto">
                    <div className="text-sm font-bold mb-1">Upcoming Exam</div>
                    <div className="text-xs text-blue-100">Accountancy - Chapter 4</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
    </section>
  );
}
