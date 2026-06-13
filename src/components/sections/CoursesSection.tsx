import React from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight, BookOpen, Calculator, LineChart, Briefcase } from 'lucide-react';

const courses = [
  {
    id: 'xi-xii',
    title: 'XI - XII Commerce',
    description: 'Build a strong foundation for your commerce career with deep conceptual clarity.',
    icon: BookOpen,
    features: ['Accounts', 'Business Studies', 'Economics'],
    color: 'bg-blue-500'
  },
  {
    id: 'bcom',
    title: 'B. Com / BBA',
    description: 'Comprehensive coaching for undergraduate degrees with practical insights.',
    icon: Briefcase,
    features: ['Financial Accounting', 'Corporate Law', 'Management'],
    color: 'bg-orange-500'
  },
  {
    id: 'ca-cs-cma',
    title: 'CA | CS | CMA',
    description: 'Expert guidance for professional courses with regular mock tests.',
    icon: Calculator,
    features: ['Foundation', 'Intermediate', 'Final'],
    color: 'bg-indigo-500'
  },
  {
    id: 'bpsc',
    title: 'BPSC TRE COMMERCE',
    description: 'Specialized batches for BPSC Teacher Recruitment Exam for Commerce.',
    icon: LineChart,
    features: ['Syllabus Coverage', 'Previous Year Qs', 'Test Series'],
    color: 'bg-green-500'
  },
  {
      id: 'cuet',
      title: 'CUET (UG & PG)',
      description: 'Specialized batches for CUET.',
      icon: LineChart,
      features: ['Syllabus Coverage', 'Previous Year Qs', 'Test Series'],
      color: 'bg-red-500'
  },
  {
      id: 'computercourse',
      title: 'COMPUTER Courses',
      description: 'Specialized batches for Computer Courses Artificial Intelligence(AI), Data Science, Machine Learning, Python, Web Development, C, C++, ADCA, DCA, Tally with practical insights, Ms Office, Typing',
      icon: LineChart,
      features: ['Syllabus Coverage', 'Practical insights', 'Test Series', 'Doubt Classes'],
      color: 'bg-yellow-500'
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Programs</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Courses for Every Stage</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button variant="outline" className="rounded-full">
              View All Courses
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className={`h-2 w-full ${course.color}`} />
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${course.color} bg-opacity-10`}>
                    <course.icon className={`h-6 w-6 ${course.color.replace('bg-', 'text-')}`} />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 mt-auto">
                  <Button variant="ghost" className="w-full justify-between group/btn hover:text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
