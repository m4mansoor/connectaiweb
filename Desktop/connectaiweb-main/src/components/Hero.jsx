import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Hero({ onButtonClick }) {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Boost engagement in <span className="text-indigo-600">minutes</span>, not hours
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          The AI-powered tool that helps you instantly reply, comment, and engage with every post across LinkedIn, saving you valuable time while driving up engagement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <button 
            onClick={onButtonClick}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
          >
            Get Started Free
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
