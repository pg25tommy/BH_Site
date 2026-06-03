'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InformationCircleIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function BurgerInsidersPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setMessage({ type: 'error', text: 'Please confirm that you want to receive our promotions and deals.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('https://bh-email.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
        }),
      });

      const data = await response.json();

      if (response.status === 201 && data.success) {
        setMessage({ type: 'success', text: 'Welcome to the Burger Insiders! Check your email for exclusive deals.' });
        setEmail('');
        setFirstName('');
        setConsent(false);
      } else if (response.status === 409) {
        setMessage({ type: 'error', text: data.error || 'You are already subscribed!' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              JOIN THE BURGER INSIDERS
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
              Get exclusive deals, insider news, and be the first to know about new menu items!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-8 text-center">
              INSIDER PERKS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Exclusive Deals</h3>
                <p className="text-accent-700">Members-only discounts and special offers delivered to your inbox</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Early Access</h3>
                <p className="text-accent-700">Be the first to know about new burgers and limited-time items</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Special Events</h3>
                <p className="text-accent-700">Special Burger Heaven and community events. Be first in line for the Burger Polls!</p>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="diner-card rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-heading text-primary-700 mb-6 text-center">
              SIGN UP NOW
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-accent-900 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-wood-300 rounded-lg text-accent-900 placeholder-accent-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-500" />
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-wood-300 rounded-lg text-accent-900 placeholder-accent-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={loading}
                  className="mt-1 w-5 h-5 text-primary-600 border-wood-400 rounded focus:ring-primary-500 disabled:opacity-50"
                />
                <label htmlFor="consent" className="text-sm text-accent-800 flex-1">
                  I want to receive promotions, deals, and announcements from Burger Heaven
                  <button
                    type="button"
                    onClick={() => setShowDisclaimer(!showDisclaimer)}
                    className="ml-2 inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    aria-label="View privacy information"
                  >
                    <InformationCircleIcon className="w-5 h-5" />
                  </button>
                </label>
              </div>

              {showDisclaimer && (
                <div className="bg-wood-50 border-l-4 border-primary-500 p-4 rounded-lg text-sm text-accent-800 space-y-2">
                  <p className="font-semibold text-accent-900">Privacy & Consent Information</p>
                  <p>
                    By checking this box and submitting your information, you expressly consent to receive commercial electronic messages from Burger Heaven, including promotional offers, deals, and announcements.
                  </p>
                  <p>
                    In accordance with Canada's Anti-Spam Legislation (CASL), you have the right to withdraw your consent at any time by:
                  </p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>Clicking the unsubscribe link in any email we send</li>
                    <li>Contacting us directly at our New Westminster location</li>
                    <li>Calling us at 604-522-8339</li>
                  </ul>
                  <p>
                    We respect your privacy and will never share your information with third parties. Your email address will only be used to send you Burger Heaven promotions and updates.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !consent}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Joining...' : 'Join the Insiders'}
              </button>
            </form>

            {message && (
              <div
                className={`mt-6 p-4 rounded-lg text-center font-semibold ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-800 border-2 border-green-200'
                    : 'bg-red-50 text-red-800 border-2 border-red-200'
                }`}
              >
                {message.text}
              </div>
            )}

            <p className="text-center text-sm text-accent-600 mt-6">
              Already a member? Check your inbox for the latest deals!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
