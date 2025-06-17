"use client";

import { motion } from "framer-motion";

export default function TimeTracking() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
              <span className="text-orange-500 font-medium">Time Tracking</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Granular time
              <br />
              tracking{" "}
              <span className="text-gray-400">built right
              <br />
              in</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Full-featured time tracking, built right in. Reduce
              <br />
              context switching and increase transparency
              <br />
              around where time goes.
            </p>
          </motion.div>

          {/* Right Visual - Time Tracking Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Time Tracker Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Track</h3>
                  <div className="text-2xl font-mono font-bold">00:25:49</div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Bluejay
                  </button>
                  <span className="text-gray-500 text-sm">What are you working on?</span>
                </div>
              </div>

              {/* Project Tiles */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-pink-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Wayland</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Dabble</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Bluejay</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">LaunchPad</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">Sprint</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
                <div className="bg-indigo-500 text-white p-4 rounded-lg">
                  <div className="text-sm font-medium mb-1">GOWP</div>
                  <div className="text-xs opacity-80">• 2m • 5m • 10m</div>
                </div>
              </div>

              {/* Weekly Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Mon, 21 Aug - Sun, 28 Aug</span>
                  <div className="flex items-center space-x-4 text-sm">
                    <span>• GOWP 20.5h</span>
                    <span>• Wayland 19.5h</span>
                    <span>• Bluejay 8.7h</span>
                  </div>
                </div>
                
                {/* Chart Bars */}
                <div className="flex items-end space-x-2 h-32">
                  {[
                    { height: "h-24", colors: ["bg-blue-500", "bg-pink-500", "bg-teal-500"] },
                    { height: "h-20", colors: ["bg-blue-500", "bg-pink-500", "bg-purple-500"] },
                    { height: "h-28", colors: ["bg-blue-500", "bg-pink-500", "bg-green-500"] },
                    { height: "h-16", colors: ["bg-blue-500", "bg-pink-500"] },
                    { height: "h-12", colors: ["bg-blue-500", "bg-pink-500", "bg-teal-500", "bg-purple-500"] },
                    { height: "h-8", colors: ["bg-blue-500", "bg-pink-500"] },
                    { height: "h-4", colors: ["bg-blue-500"] },
                  ].map((bar, index) => (
                    <div key={index} className={`w-8 ${bar.height} flex flex-col`}>
                      {bar.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className={`${color} flex-1 ${colorIndex === 0 ? 'rounded-t' : ''} ${
                            colorIndex === bar.colors.length - 1 ? 'rounded-b' : ''
                          }`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Aug 21</span>
                  <span>Aug 22</span>
                  <span>Aug 24</span>
                  <span>Aug 25</span>
                  <span>Aug 26</span>
                  <span>Aug 27</span>
                  <span>Aug 28</span>
                </div>
              </div>

              {/* Time Summary */}
              <div className="text-right text-sm text-gray-600">
                <div>No previous</div>
                <div className="font-mono font-bold text-lg">00:25:00</div>
              </div>

              {/* Bottom Activity */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">Document tables in design system</div>
                    <div className="text-xs text-gray-500">Glenn Jones</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Love this new approach to tables! Can someone please document this in the design system?
                </div>
                <div className="mt-2 text-xs text-gray-400">2 days ago</div>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Bluejay</span>
                  <span className="font-mono text-xs">00:25:49</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 