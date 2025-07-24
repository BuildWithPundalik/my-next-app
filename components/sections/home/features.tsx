// components/Features.tsx
'use client'
import { motion } from 'framer-motion'
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile First Design',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Web Applications', 
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
