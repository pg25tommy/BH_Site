import { Metadata } from 'next';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us | Burger Heaven',
  description: 'Get in touch with Burger Heaven. We love hearing from our customers!',
};

export default function ContactPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            CONTACT US
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            We love hearing from our customers. Drop us a line!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-8">
                GET IN TOUCH
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-accent-900">New Westminster</h3>
                    <p className="text-accent-800">77 10th St</p>
                    <p className="text-accent-800">New Westminster, BC V3M 3X4</p>
                    <p className="text-accent-900 font-semibold mt-1">604.522.8339</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-accent-900">General Inquiries</h3>
                    <p className="text-accent-800">Call us during business hours</p>
                    <p className="text-accent-800 text-sm mt-1">
                      Sun-Thu: 11am - 9pm<br />
                      Fri-Sat: 11am - 10pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-accent-900">Email</h3>
                    <a
                      href="mailto:info@burgerheavennw.ca"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info@burgerheavennw.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="diner-card rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4 text-accent-900">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-all hover:scale-105 shadow-md"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 shadow-md"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="diner-card rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl md:text-3xl font-heading text-primary-700 mb-6">
                SEND US A MESSAGE
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-accent-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-900 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-900 mb-1">
                    Subject
                  </label>
                  <select
                    className="w-full px-5 py-3 border-2 border-wood-300 rounded-full bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="feedback">General Feedback</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-accent-900 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-3 border-2 border-wood-300 rounded-2xl bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 diner-card rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-8 text-center">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Do you take reservations?</h3>
                <p className="text-accent-800 leading-relaxed">
                  We accept reservations for groups of 6 or more. For smaller parties,
                  we operate on a first-come, first-served basis.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Do you offer catering?</h3>
                <p className="text-accent-800 leading-relaxed">
                  Yes! We can cater events of all sizes. Contact us for a custom quote.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Are there vegetarian options?</h3>
                <p className="text-accent-800 leading-relaxed">
                  Yes, we offer veggie patties and can customize many menu items to be
                  vegetarian-friendly.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-accent-900">Do you deliver?</h3>
                <p className="text-accent-800 leading-relaxed">
                  We partner with Skip the Dishes for delivery. Order through their app
                  or website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
