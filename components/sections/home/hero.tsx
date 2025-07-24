'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experienced{' '}
              <span className="text-blue-600">mobile and web</span>{' '}
              applications and website builders measuring
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Build powerful, scalable applications with our experienced team. 
              We deliver cutting-edge mobile and web solutions that drive business growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Building
              </Link>
              <Link
                href="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-lg"></div>
                  </div>
                  <p className="text-lg font-semibold">Professional Developer</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-400 rounded-lg opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
