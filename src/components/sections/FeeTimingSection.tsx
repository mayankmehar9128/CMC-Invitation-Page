import React from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, IndianRupee, PhoneCall } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeeTimingSection() {
  return (
    <section id="fees" className="py-16 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Join Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fee Structure & Timings</h3>
            <p className="text-lg text-gray-600">
              We offer flexible batch timings and affordable fee structures to accommodate every student's needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Timing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Batch Timings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">Morning and Evening batches available for all courses. Special weekend batches for working professionals and CA/CS students.</p>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Morning Batches:</span>
                    <span>7:00 AM - 11:00 AM</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Evening Batches:</span>
                    <span>3:00 PM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Doubt Classes:</span>
                    <span>Sundays</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fee Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <IndianRupee className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col h-[calc(100%-80px)]">
                <p className="text-gray-600 mb-6">Contact our office for detailed course-wise fee structure. We offer installment facilities and scholarships for meritorious students.</p>
                
                <div className="mt-auto space-y-4">
                  <div className="bg-orange-50 text-secondary p-4 rounded-xl font-semibold border border-orange-100">
                    Up to 50% Scholarship for Toppers
                  </div>
                  <Button className="w-full gap-2 rounded-full h-12 text-lg">
                    <PhoneCall className="h-5 w-5" />
                    Call 6200491833
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
