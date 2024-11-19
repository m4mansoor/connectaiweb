import { motion } from 'framer-motion';
import { ClockIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: ClockIcon,
    title: "Save 2+ Hours Daily",
    description: "Automate your LinkedIn engagement and save precious hours of manual commenting."
  },
  {
    icon: BoltIcon,
    title: "Instant Replies",
    description: "Respond to comments across LinkedIn in seconds with AI-powered suggestions."
  },
  {
    icon: ChartBarIcon,
    title: "Grow Faster",
    description: "Supercharge your social media presence with consistent, meaningful engagement."
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supercharge Your Social Media Engagement
          </h2>
          <p className="text-xl text-gray-600">
            Focus on creating content while ConnectAI handles the engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}