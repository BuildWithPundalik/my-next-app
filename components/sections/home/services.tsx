// components/Services.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    image: '/placeholder-phone.jpg',
    reverse: false,
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    image: '/placeholder-devices.jpg',
    reverse: true,
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    image: '/placeholder-vr.jpg',
    reverse: false,
  },
]

export default function Services() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
              service.reverse ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Content */}
            <div className={service.reverse ? 'lg:col-start-2' : ''}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            {/* Image */}
            <div className={service.reverse ? 'lg:col-start-1' : ''}>
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg">
                {/* Placeholder for service images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <p>Service Image {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
