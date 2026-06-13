import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, IndianRupee, PhoneCall, BadgePercent, CreditCard, Banknote } from 'lucide-react';
import { Button } from '../ui/button';

const feeData = [
  { course: 'BSEB – 11th',               oneTime: 10000, installment: 4000, category: 'bseb' },
  { course: 'BSEB – 12th',               oneTime: 10000, installment: 4000, category: 'bseb' },
  { course: 'BSEB – 11th + 12th',        oneTime: 16000, installment: 6000, category: 'bseb' },
  { course: 'CBSE – 11th',               oneTime: 12000, installment: 5000, category: 'cbse' },
  { course: 'CBSE – 12th',               oneTime: 12000, installment: 5000, category: 'cbse' },
  { course: 'CBSE – 11th + 12th',        oneTime: 20000, installment: 8000, category: 'cbse' },
  { course: 'B.Com / BBA (Per Semester)',  oneTime: 7000,  installment: 3000, category: 'college' },
  { course: 'CA / CS / CMA Foundation',   oneTime: 12000, installment: 5000, category: 'professional' },
];

const categoryMeta: Record<string, { label: string; color: string; bg: string; border: string }> = {
  bseb:         { label: 'BSEB',         color: 'text-blue-700',   bg: 'bg-blue-50',   border: 'border-blue-200' },
  cbse:         { label: 'CBSE',         color: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
  college:      { label: 'College',      color: 'text-emerald-700',bg: 'bg-emerald-50',border: 'border-emerald-200' },
  professional: { label: 'Professional', color: 'text-amber-700',  bg: 'bg-amber-50',  border: 'border-amber-200' },
};

function formatINR(amount: number) {
  return '₹' + amount.toLocaleString('en-IN');
}

export default function FeeTimingSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { key: 'all',          label: 'All Courses' },
    { key: 'bseb',         label: 'BSEB' },
    { key: 'cbse',         label: 'CBSE' },
    { key: 'college',      label: 'College' },
    { key: 'professional', label: 'Professional' },
  ];

  const filtered = activeFilter === 'all' ? feeData : feeData.filter(f => f.category === activeFilter);

  return (
    <section id="fees" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full opacity-50 translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Join Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fee Structure &amp; Timings</h3>
            <p className="text-lg text-gray-500">
              Transparent pricing with flexible installment options — making quality education accessible for everyone.
            </p>
          </motion.div>
        </div>

        {/* --- TIMING CARD + FEE TABLE LAYOUT --- */}
        <div className="flex flex-col gap-10">

          {/* Timing Card (full-width on mobile, side-by-side on lg) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Batch Timings */}
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
                  <p className="text-gray-600 mb-6 text-sm">
                    Morning and Evening batches available for all courses. Special weekend batches for working professionals and CA/CS students.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 font-medium">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Morning Batches:</span>
                      <span className="font-semibold">7:00 AM – 11:00 AM</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span>Evening Batches:</span>
                      <span className="font-semibold">3:00 PM – 7:00 PM</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span>Doubt Classes:</span>
                      <span className="font-semibold">Sundays</span>
                    </li>
                  </ul>

                  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-700 text-sm font-semibold flex items-center gap-2 justify-center">
                    <BadgePercent className="h-4 w-4 shrink-0" />
                    Up to 50% Scholarship for Toppers
                  </div>

                  <Button className="w-full gap-2 rounded-full h-12 text-base mt-4">
                    <PhoneCall className="h-5 w-5" />
                    Call 6200491833
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fee Structure Table */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                        <IndianRupee className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl">Fee Structure</CardTitle>
                    </div>
                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2">
                      {filters.map(f => (
                        <button
                          key={f.key}
                          onClick={() => setActiveFilter(f.key)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            activeFilter === f.key
                              ? 'bg-secondary text-white border-secondary shadow-sm'
                              : 'bg-white text-gray-500 border-gray-200 hover:border-secondary hover:text-secondary'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 px-0 pb-0">
                  {/* Desktop table */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-y border-gray-100">
                          <th className="text-left px-6 py-3 font-semibold text-gray-500 uppercase tracking-wide text-xs">Course</th>
                          <th className="text-right px-6 py-3 font-semibold text-gray-500 uppercase tracking-wide text-xs whitespace-nowrap">
                            <span className="flex items-center justify-end gap-1">
                              <Banknote className="h-3.5 w-3.5" /> One-Time Fee
                            </span>
                          </th>
                          <th className="text-right px-6 py-3 font-semibold text-gray-500 uppercase tracking-wide text-xs whitespace-nowrap">
                            <span className="flex items-center justify-end gap-1">
                              <CreditCard className="h-3.5 w-3.5" /> 3 Installments
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((row, i) => {
                          const meta = categoryMeta[row.category];
                          return (
                            <motion.tr
                              key={row.course}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25, delay: i * 0.05 }}
                              className="border-b border-gray-50 hover:bg-orange-50/30 transition-colors group"
                            >
                              <td className="px-6 py-3.5">
                                <div className="flex items-center gap-2">
                                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${meta.bg} ${meta.color} ${meta.border} border`}>
                                    {meta.label}
                                  </span>
                                  <span className="font-semibold text-gray-800 group-hover:text-secondary transition-colors">
                                    {row.course}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-3.5 text-right">
                                <span className="font-bold text-gray-900 text-base">{formatINR(row.oneTime)}</span>
                              </td>
                              <td className="px-6 py-3.5 text-right">
                                <div className="flex flex-col items-end">
                                  <span className="font-bold text-secondary text-base">{formatINR(row.installment)}</span>
                                  <span className="text-[10px] text-gray-400">per installment</span>
                                </div>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile card list */}
                  <div className="sm:hidden px-4 space-y-3 pb-2">
                    {filtered.map((row, i) => {
                      const meta = categoryMeta[row.category];
                      return (
                        <motion.div
                          key={row.course}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.05 }}
                          className={`rounded-xl border p-4 ${meta.bg} ${meta.border}`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <span className={`font-bold text-sm ${meta.color}`}>{row.course}</span>
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white ${meta.color} border ${meta.border} shrink-0`}>
                              {meta.label}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-lg px-3 py-2 text-center border border-gray-100">
                              <div className="text-[10px] text-gray-400 mb-0.5 flex items-center justify-center gap-1">
                                <Banknote className="h-3 w-3" /> One-Time
                              </div>
                              <div className="font-bold text-gray-900 text-sm">{formatINR(row.oneTime)}</div>
                            </div>
                            <div className="bg-white rounded-lg px-3 py-2 text-center border border-orange-100">
                              <div className="text-[10px] text-gray-400 mb-0.5 flex items-center justify-center gap-1">
                                <CreditCard className="h-3 w-3" /> 3 Installments
                              </div>
                              <div className="font-bold text-secondary text-sm">{formatINR(row.installment)}</div>
                              <div className="text-[9px] text-gray-400">each</div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Footer note */}
                  <div className="mx-4 sm:mx-6 my-4 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-amber-800 text-xs font-medium flex items-start gap-2">
                    <BadgePercent className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                    <span>
                      <strong>Scholarship available:</strong> Up to 50% fee concession for meritorious students. Contact us for details.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
