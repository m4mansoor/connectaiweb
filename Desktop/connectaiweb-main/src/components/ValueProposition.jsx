import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  "Save hours of manual engagement time daily",
  "Generate thoughtful, contextual responses instantly",
  "Maintain consistent engagement with your network",
  "Build stronger professional relationships",
  "Never miss important conversations",
  "Increase your LinkedIn visibility organically"
];

export default function ValueProposition() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose ConnectAI?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Boost Your LinkedIn Presence
            </h3>
            <p className="text-gray-600 mb-6">
              ConnectAI helps you maintain an active and engaging presence on LinkedIn without spending hours on manual responses. Our AI-powered tool understands context and generates meaningful responses that feel personal and authentic.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3X</div>
              <div className="text-gray-600">Average increase in engagement for ConnectAI users</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}