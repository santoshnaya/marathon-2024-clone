"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Drop 👤 feedback right where you&apos;re
            <br />
            working and{" "}
            <span className="relative">
              it
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-blue-300 opacity-50"></div>
            </span>{" "}
            manage it all in one
            <br />
            place – across all your 📁 projects.
          </h2>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden">
            {/* Mock Figma Interface */}
            <div className="bg-gray-700 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <span className="text-white text-sm">My Desk</span>
                </div>
                <div className="pl-9 space-y-2">
                  <div className="text-white text-sm">Backlog</div>
                  <div className="text-gray-300 text-sm">Please update this copy</div>
                </div>
              </div>
            </div>

            {/* Comment Bubbles */}
            <div className="absolute top-20 right-20">
              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>
            <div className="absolute top-32 right-32">
              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>
            <div className="absolute bottom-20 left-20">
              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>
            <div className="absolute bottom-32 right-16">
              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>

            {/* Side Panel */}
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white rounded-r-2xl p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">My Desk</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm">Up Next</span>
                    <span className="bg-gray-200 text-xs px-2 py-1 rounded">4</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-medium mb-1">Create Q2 marketing plan</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">NBS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            See how we run a global, asynchronous
            <br />
            product design agency on Marathon
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors duration-200">
            ▶ Watch Now
          </button>
        </motion.div>
      </div>
    </section>
  );
} 