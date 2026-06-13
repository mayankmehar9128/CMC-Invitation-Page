import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import teacher1 from '../../assets/teachers/teacher1.jpg';
import teacher2 from '../../assets/teachers/teacher2.jpg';
import teacher3 from '../../assets/teachers/teacher3.jpg';
import teacher4 from '../../assets/teachers/teacher4.jpg';
import teacher5 from '../../assets/teachers/teacher5.png';

const teachers = [
  {
    id: 1,
    name: "MITHILESH SIR",
    subject: "",
    image: teacher4,
    thought: "Education is the key to unlocking the world, a passport to freedom."
  },
  {
    id: 2,
    name: "Md. NAYEEM SIR",
    subject: "",
    image: teacher2,
    thought: "The beautiful thing about learning is that no one can take it away from you."
  },
  {
    id: 3,
    name: "ASHUTOSH SIR",
    subject: "",
    image: teacher5,
    thought: "The only way to do great work is to love what you do."
  },
  {
    id: 4,
    name: "RAGHUVEER SIR",
    subject: "",
    image: teacher3,
    thought: "A teacher affects eternity; they can never tell where their influence stops."
  },
  {
    id: 5,
    name: "Md. AHASAN SIR",
    subject: "",
    image: teacher1,
    thought: "The mind is not a vessel to be filled, but a fire to be kindled."
  }
];

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Teachers</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Best</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our teachers don't just teach subjects; they inspire minds, shape futures, and provide the guidance needed for absolute success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                  
                  {/* Name and Subject overlaying the image bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold text-white mb-1">{teacher.name}</h4>
                    <p className="text-sm font-medium text-blue-300">{teacher.subject}</p>
                  </div>
                </div>

                {/* Thought/Quote Section */}
                <div className="p-6 relative flex-grow flex flex-col justify-center">
                  <div className="absolute -top-4 right-6 bg-primary text-white p-2 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center">
                    <Quote size={16} fill="currentColor" />
                  </div>
                  <div className="relative z-10 text-center mt-2">
                    <p className="text-gray-600 italic leading-relaxed text-sm">
                      "{teacher.thought}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
