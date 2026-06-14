import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Regular Notes",
    description: "Comprehensive study materials provided after every lecture.\nClear, concise, and structured formats for easy reading.\nDesigned specifically to reinforce classroom learning.\nEasily accessible resources for quick and effective revision.",
    icon: BookOpen,
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/30",
    bgHover: "hover:bg-blue-50/50"
  },
  {
    title: "Doubt Solving",
    description: "Dedicated sessions to clear all your academic hurdles.\nOne-on-one attention from experienced faculty members.\nInteractive environment encouraging open questions.\nEnsuring complete conceptual clarity for every student.",
    icon: Users,
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/30",
    bgHover: "hover:bg-purple-50/50"
  },
  {
    title: "Extra Classes",
    description: "Special weekend batches focused on crucial topics.\nExtensive practice and past paper discussions included.\nTailored support for students needing additional help.\nBoosting confidence before important examinations.",
    icon: Clock,
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/30",
    bgHover: "hover:bg-orange-50/50"
  },
  {
    title: "More Features",
    description: "Regular mock tests to evaluate and track progress.\nPerformance analysis reports for continuous improvement.\nCareer counseling and motivational guidance sessions.\nA supportive community fostering academic excellence.",
    icon: Sparkles,
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30",
    bgHover: "hover:bg-emerald-50/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Exceptional Features for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Exceptional Students
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience an educational ecosystem designed to maximize your potential, ensure academic success, and build a strong foundation for your future.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-300 group ${feature.bgHover}`}
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg ${feature.shadow} group-hover:-translate-y-1 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  {feature.description.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-br ${feature.color}`} />
                      <p className="flex-1">{line.trim()}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
