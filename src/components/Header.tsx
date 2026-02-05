'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Mile High Club', href: '/mile-high-club' },
    { name: 'Locations', href: '/locations' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Burger Insiders', href: '/burger-insiders' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <header className="wood-panel sticky top-0 z-50 backdrop-blur-lg bg-opacity-95" style={{ boxShadow: '0 4px 20px rgba(61, 45, 28, 0.15)' }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-3xl md:text-4xl font-heading text-primary-600 transition-all duration-300 group-hover:text-primary-500" style={{ textShadow: '0 2px 8px rgba(234, 88, 12, 0.25)' }}>
                BURGER HEAVEN
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4 relative">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-wood-900 hover:text-primary-600 transition-all duration-200 relative group px-1.5 py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="https://www.skipthedishes.com/burger-heaven-new-westminster"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary relative ml-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Order Online - Skip the Dishes</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden relative">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-wood-900 hover:bg-wood-200/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-accent-600/30 animate-fade-in-up">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-wood-900 hover:bg-primary-100/50 hover:text-primary-700 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.skipthedishes.com/burger-heaven-new-westminster"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-3 text-base font-semibold text-white text-center mt-3 shadow-lg hover:shadow-xl transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Online - Skip the Dishes
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
