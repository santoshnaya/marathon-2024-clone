"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-semibold text-black">Marathon</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Part of Never Before Seen Group – a venture studio
              <br />
              specialising in B2B SaaS. We partner with leading startups
              <br />
              as product consultants, as well as launching businesses of
              <br />
              our own.
            </p>
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                neverbeforeteen.group →
              </a>
            </div>
          </div>

          {/* Marathon Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">Marathon</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  For Agencies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center">
                  Updates
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Curated
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Never Before Seen Group Pty Ltd
          </div>
          <div className="text-sm text-gray-500">
            Made from Melbourne, London, India, Poland and New York City
          </div>
        </div>

        {/* Large Marathon Text */}
        <div className="mt-16 text-center">
          <div className="text-[200px] md:text-[300px] lg:text-[400px] font-bold text-gray-200 leading-none select-none">
            Marathon
          </div>
        </div>
      </div>
    </footer>
  );
} 