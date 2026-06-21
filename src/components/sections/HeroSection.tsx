import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react';
import classroom1Url from '../../assets/classroom1.jpg';

// const handleContact = () => {
//   window.open('https://infodatasoft.tech/login', '_blank');
// };

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-10 pb-20 lg:pt-30 lg:pb-20 overflow-hidden bg-transparent min-h-screen flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <img src="/CMC_logo.jpeg" alt="CMC Logo" className="w-28 h-28 object-contain rounded-xl" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-secondary font-semibold text-sm self-start sm:self-auto">
                <Award className="h-4 w-4" />
                <span>1st in BIHAR for STUDY</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Transform Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Career
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join MIHTILESH COMMERCE CMC for unparalleled coaching in 11th, 12th, CA, CS, CMA, B.Com, BBA, CUET, BPSC and more. Experience smart study with smart results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 group">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              {/* className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50" */}
              {/* <Button onClick={handleContact} size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 group">
                Click for Online Admission
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">10000+</h4>
                <p className="text-sm text-gray-500">Students Taught</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">25+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-1">100%</h4>
                <p className="text-sm text-gray-500">Commitment</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={classroom1Url} 
                alt="Students studying" 
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Hindi & English Medium</p>
                    <p className="text-xs text-gray-500">NCERT Base Offline/Online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center justify-center"
            >
              <Users className="h-8 w-8 text-secondary mb-2" />
              <span className="font-bold text-sm text-gray-900">Student Friendly</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
