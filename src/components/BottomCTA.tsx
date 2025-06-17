"use client";

import { motion } from "framer-motion";

export default function BottomCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Plus so many more features for a cleaner
            <br />
            design process
          </h2>
        </motion.div>

        {/* Two-way Figma sync */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-black mb-4">Two-way Figma sync</h3>
            <p className="text-lg text-gray-600 mb-6">
              Activity and comments from
              <br />
              Marathon are instantly shared to
              <br />
              Figma so you never miss a thing.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-2xl p-8">
              {/* Mock Figma Interface */}
              <div className="bg-gray-800 rounded-lg p-6 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Jessica Mathis</span>
                  </div>
                  <div className="text-sm">
                    could you please update
                    <br />
                    the ticket designs across this mock to
                    <br />
                    match the new style?
                  </div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs inline-block">
                    Marathon
                  </div>
                  <div className="text-xs text-gray-400">
                    Automatically added to Marathon. You
                    <br />
                    have been assigned this to #review
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Custom branding */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">Custom branding</h4>
            <p className="text-gray-600">
              Your shared links and dashboard should show
              <br />
              your brand – not ours.
            </p>
          </div>

          {/* AI generated task titles */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">AI generated task titles</h4>
            <p className="text-gray-600">More AI features coming soon</p>
          </div>

          {/* Snooze for later */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-black">Snooze for later</h4>
            <p className="text-gray-600">
              Maintain a clutter-free desk by snoozing things
              <br />
              you don&apos;t need to see until later
            </p>
          </div>
        </motion.div>

        {/* Advanced Features Section */}
        <motion.div
          className="bg-gray-100 rounded-2xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Interface */}
            <div className="relative">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span className="font-medium">My Desk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-200 px-3 py-1 rounded text-sm">Copy Link</button>
                    <button className="bg-black text-white px-3 py-1 rounded text-sm">Approve</button>
                    <button className="border border-gray-300 px-3 py-1 rounded text-sm">Flag</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm">⭐</span>
                      <span className="font-medium text-sm">Improve filter capabilities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Tori Bates</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Can we add in a version that lets people filter
                      <br />
                      based on tag, date added etc pls?
                    </p>
                    <div className="mt-2 text-xs text-gray-500">2 days ago</div>
                    <div className="mt-2">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Cuebox</span>
                    </div>
                  </div>
                </div>

                {/* Snooze Dropdown */}
                <div className="absolute top-16 right-4 bg-gray-800 text-white rounded-lg p-3 shadow-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span>⏰</span>
                      <span>Snooze...</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2">
                      <div>For a few hours</div>
                      <div>Tomorrow at 8am</div>
                      <div>Monday at 8am</div>
                    </div>
                    <div className="border-t border-gray-600 pt-2">
                      <div>Start Timer</div>
                      <div>Export</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Assign to @anyone</h4>
                  <p className="text-gray-600">More AI features coming soon</p>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm mb-2">
                  Anyone
                </div>
                <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Astra
                </div>
                <div className="block mt-2">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm">Claim</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Bring sanity back to
            <br />
            your design process
            <br />
            today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
              Get Started – It&apos;s Free
            </button>
            <button className="text-black border border-gray-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto">
              Book A Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 