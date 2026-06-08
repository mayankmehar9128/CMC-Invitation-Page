import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Lightbulb, TrendingUp } from 'lucide-react';

import groupUrl from '../../assets/group.jpg';
import classroom2Url from '../../assets/classroom2.jpg';

const features = [
  {
    title: 'Smart CMC',
    description: 'Innovative teaching methodologies tailored for modern commerce education.',
    icon: Lightbulb,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    title: 'Smart STUDY',
    description: 'Structured materials and notes that simplify complex concepts.',
    icon: GraduationCap,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Smart RESULT',
    description: 'Consistent track record of toppers and high achievers in board and professional exams.',
    icon: TrendingUp,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    title: 'Smart YOU',
    description: 'Holistic development focusing on both academic excellence and personality growth.',
    icon: CheckCircle2,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">About The Institute</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Empowering Students in a <span className="text-primary">Friendly Environment</span></h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Mithilesh CMC Commerce, we believe in a student-friendly environment where every concept is made crystal clear. We provide both Hindi and English medium instruction based strictly on the NCERT curriculum.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our institute provides state-of-the-art facilities, highly experienced faculty, and a rigorous testing schedule to ensure that you are always exam-ready and ahead of the curve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={groupUrl} alt="Group of students and director" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8 hover:-translate-y-2 transition-transform duration-500" />
              <img src={classroom2Url} alt="Classroom environment" className="rounded-2xl shadow-lg w-full h-64 object-cover hover:-translate-y-2 transition-transform duration-500" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
