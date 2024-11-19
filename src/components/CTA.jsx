import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-24 bg-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Ready to transform your LinkedIn engagement?
        </h2>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
          Get Started Now
        </button>
      </div>
    </motion.div>
  );
}