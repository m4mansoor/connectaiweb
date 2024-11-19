import React from 'react';
import { motion } from 'framer-motion';

const tones = [
  { emoji: '😄', name: 'Funny Reply', description: 'Add humor to keep engagement light and fun' },
  { emoji: '❓', name: 'Ask Question', description: 'Engage through thoughtful questions' },
  { emoji: '🤝', name: 'Collaborate', description: 'Foster professional connections' },
  { emoji: '😠', name: 'Disagree', description: 'Express disagreement professionally' },
  { emoji: '🌟', name: 'Impressed', description: 'Show genuine appreciation' },
  { emoji: '🎓', name: 'Mentor', description: 'Share knowledge and guidance' },
  { emoji: '📖', name: 'Share Story', description: 'Connect through experiences' },
  { emoji: '💡', name: 'Add Insight', description: 'Contribute valuable perspectives' },
  { emoji: '🎉', name: 'Celebrate', description: 'Join in celebrations' },
  { emoji: '🤔', name: 'Curious', description: 'Express genuine interest' },
  { emoji: '💭', name: 'Suggest', description: 'Offer helpful suggestions' },
  { emoji: '💝', name: 'Empathize', description: 'Show understanding and support' },
  { emoji: '👔', name: 'Professional', description: 'Maintain professional tone' },
  { emoji: '🙏', name: 'Appreciate', description: 'Express gratitude' },
  { emoji: '💐', name: 'Thanks', description: 'Show appreciation warmly' }
];

export default function CommentTones() {
  return (
    <div className="py-24 bg-gray-50" id="comment-tones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Engage with the Perfect Tone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Choose from multiple engagement styles to match any conversation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tones.map((tone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{tone.emoji}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{tone.name}</h3>
              <p className="text-sm text-gray-600">{tone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}