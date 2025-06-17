"use client";

import { motion } from "framer-motion";

export default function Collaboration() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-orange-500 font-medium">For Figma</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Say goodbye to{" "}
              <span className="text-gray-400">comment chaos</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Comments are a fantastic, contextual way of
              <br />
              leaving feedback and notes. But they quickly turn
              <br />
              into a nightmare to manage. Marathon
              <br />
              automatically syncs your comments and gives
              <br />
              you one place to view them – across all your
              <br />
              projects.
            </p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Mock Interface */}
              <div className="space-y-4">
                {/* Sidebar Navigation */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">My Desk</div>
                    <div className="text-xs text-gray-500">Backlog</div>
                  </div>
                </div>

                {/* Project List */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 mb-2">Pinned</div>
                  <div className="space-y-1">
                    <div className="text-sm">• Chronom</div>
                    <div className="text-sm">• Overjet</div>
                    <div className="text-sm">• Wellma</div>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <div className="text-xs text-gray-500 mb-2">Projects</div>
                  <div className="space-y-1">
                    <div className="text-sm">All</div>
                    <div className="text-sm">• Flowcards</div>
                    <div className="text-sm text-red-500">• Jumpstart</div>
                    <div className="text-sm">• NBS Internal</div>
                    <div className="text-sm">• Profilescope</div>
                    <div className="text-sm">• Temelio</div>
                    <div className="text-sm">• Travelpad</div>
                  </div>
                </div>
              </div>

              {/* Comment Interface */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white rounded-r-2xl p-4">
                <div className="space-y-4">
                  <div className="text-sm font-medium">Please update this copy</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Jeremy Blaze</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Please make a copy of this section
                  </div>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">
                    Bluejay
                  </button>
                </div>
              </div>

              {/* Floating Comments */}
              <div className="absolute top-16 left-16">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
              </div>
              <div className="absolute top-24 left-24">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
              </div>
              <div className="absolute bottom-16 left-12">
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Left Visual */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="font-medium text-gray-600 mb-8">Marathon is the catch-all for design feedback, discussions and tasks.</h3>
                
                {/* Integration Icons */}
                <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl">💬</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl">🎨</span>
                    </div>
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl">✏️</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span>📱</span>
                    <span>Figma Comments</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>💬</span>
                    <span>Slack Threads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-4">
              <span className="text-orange-500 font-medium">Collaborate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Comment
              <br />
              anywhere.{" "}
              <span className="text-gray-400">Manage
              <br />
              in Marathon.</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 