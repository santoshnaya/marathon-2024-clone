"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-50 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">C</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Chronom 🚀</h3>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mt-1">
                  <span>Inbox 0</span>
                  <span>Up Next 5</span>
                  <span>Review 12</span>
                  <span>Blocked 3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-300 rounded-full"
                ></div>
              ))}
              <span className="text-gray-500">...</span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Inbox Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-600">Inbox</h4>
              <div className="space-y-3">
                <TaskCard
                  title="Bulk Selection UI"
                  user="Ethan Kalm"
                  description="Missing designs for bulk selection"
                  time="Just now"
                />
                <TaskCard
                  title="Edit State"
                  user="Christina Pan"
                  description="Could you please look at designing the edit state for this?"
                  time="1 hour ago"
                />
                <TaskCard
                  title="Card styling needs update"
                  user="Jeremy Blaze"
                  description="Cards styling needs update :upnext"
                  time="2 days ago"
                />
              </div>
            </div>

            {/* Up Next Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-600">Up Next</h4>
              <div className="space-y-3">
                <TaskCard
                  title="Prepare for upcoming UX workshop"
                  avatars={3}
                />
                <TaskCard
                  title="Start working on design system"
                  user="Maya Kuppermann"
                  description="Doesn&apos;t really need to be a signature but maybe a checkbox confirming that the application has been reviewed for completion before it&apos;s send to verification"
                  time="2 mths ago"
                />
                <TaskCard
                  title="Update 2-pager design"
                  avatars={1}
                />
                <TaskCard
                  title="Build site in webflow"
                  avatars={1}
                />
                <TaskCard
                  title="Image update"
                  user="Anas"
                  description="Please update this image"
                />
              </div>
            </div>

            {/* Review Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-600">Review</h4>
              <div className="space-y-3">
                <TaskCard
                  title="Design additional site pages"
                  user="Jeremy Blaze"
                  description="See the attached doc and please design additional pages as we discussed"
                  time="3 hours ago"
                  actions={["Approve", "Comment"]}
                />
                <TaskCard
                  title="Week 2 workshop feedback"
                  user="Benny Rosner"
                  description="I&apos;ve dropped a wireframe for the Pricing page in here — could we please design it up in hi-fi?"
                  time="2 mths ago"
                  actions={["Approve", "Comment"]}
                />
                <TaskCard
                  title="Design Settings Area"
                  avatars={2}
                />
              </div>
            </div>

            {/* Blocked Column */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-600">Blocked</h4>
              <div className="space-y-3">
                <TaskCard
                  title="Could you find a ne"
                  user="Jeremy Blaze"
                  description="Please find a ne"
                  time="2 days ago"
                />
                <TaskCard
                  title="UX Workshop"
                  avatars={1}
                />
                <TaskCard
                  title="Icon export zip file"
                  user="Jeremy Blaze"
                  description="Also please exp"
                  time="2 days ago"
                />
                <TaskCard
                  title="Help with UI confus"
                  user="Jeremy Blaze"
                  description="I do face some please elaborate"
                  time="1 mth ago"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TaskCard({ 
  title, 
  user, 
  description, 
  time, 
  avatars, 
  actions
}: {
  title: string;
  user?: string;
  description?: string;
  time?: string;
  avatars?: number;
  actions?: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h5 className="font-medium text-sm text-gray-900 leading-tight">{title}</h5>
        <div className="flex items-center space-x-1 text-xs text-gray-400">
          <button className="hover:text-gray-600">Hide</button>
          <button className="hover:text-gray-600 text-blue-500">Manage</button>
        </div>
      </div>
      
      {user && (
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">{user}</span>
        </div>
      )}
      
      {description && (
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</p>
      )}
      
      {avatars && (
        <div className="flex items-center space-x-1 mb-2">
          {Array.from({ length: avatars }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      )}
      
      {time && (
        <div className="text-xs text-gray-400 mb-2">{time}</div>
      )}
      
      {actions && (
        <div className="flex items-center space-x-2">
          {actions.map((action) => (
            <button
              key={action}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                action === "Approve"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 