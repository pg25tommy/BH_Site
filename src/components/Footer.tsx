import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading text-accent-400 mb-4">
              BURGER HEAVEN
            </h3>
            <p className="text-gray-400 text-sm">
              Serving up the best burgers in Western Canada since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong className="text-white">New Westminster:</strong>
                <br />
                604.522.8339
              </li>
              <li className="text-sm">
                Sun-Thu: 11am - 9pm
                <br />
                Fri-Sat: 11am - 10pm
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Subscribe to our newsletter for exclusive deals
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent-500 hover:bg-accent-600 rounded-md text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Burger Heaven. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
