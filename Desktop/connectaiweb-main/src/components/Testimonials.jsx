import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "LinkedIn Growth Expert",
    image: "https://i.pravatar.cc/150?img=1",
    content: "ConnectAI has completely transformed how I manage my LinkedIn presence. I've seen a 4x increase in engagement while saving hours every day.",
    company: "GrowthLab"
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The lifetime deal was a no-brainer. This tool pays for itself in the first week just from the time saved on engagement.",
    company: "TechVentures Inc"
  },
  {
    name: "Emma Davis",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=3",
    content: "I was skeptical at first, but the AI responses are incredibly natural and contextual. My network engagement has never been better.",
    company: "ContentPro"
  }
];

export default function Testimonials({ onButtonClick }) {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by LinkedIn Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of professionals who've transformed their LinkedIn engagement
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-indigo-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 mb-8">
              Over 10,000+ professionals are already using ConnectAI to supercharge their LinkedIn presence. Don't miss out on this limited-time offer!
            </p>
            <button 
              onClick={onButtonClick}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
