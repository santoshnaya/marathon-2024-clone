"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Announcement Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mr-2">🚀</span>
            2 months ago • Rebuilt the Figma sync engine to be more performant →
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manage design work{" "}
            <br className="hidden sm:block" />
            right from the{" "}
            <span className="relative">
              canvas
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
              Get Started – It&apos;s Free
            </button>
            <button className="text-black border border-gray-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto">
              Book A Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">NBS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">astra</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">mastodon</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">Showcase</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">dabble</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span className="text-gray-500 font-medium">view</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 