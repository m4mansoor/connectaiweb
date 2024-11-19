import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const features = [
  "AI-powered response generation",
  "Unlimited responses",
  "Context-aware replies",
  "Custom response templates",
  "Priority support",
  "Regular feature updates"
];

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Plan</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-indigo-600">$4.97</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started Monthly
            </button>
          </motion.div>

          {/* Lifetime Deal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white"
          >
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-4">Lifetime Deal</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$67</span>
              <span className="text-indigo-100">/lifetime</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[...features, "Lifetime updates", "Future features included"].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-indigo-100">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors font-semibold">
              Get Lifetime Access
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}