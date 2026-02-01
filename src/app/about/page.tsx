import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Burger Heaven',
  description: 'Learn about Burger Heaven\'s story, our commitment to quality, and what makes our burgers special.',
};

export default function AboutPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            ABOUT US
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            Our story, our passion, our commitment to burger perfection
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              OUR STORY
            </h2>
            <div className="prose prose-lg max-w-none text-accent-800 space-y-4 leading-relaxed">
              <p>
                Burger Heaven was born from a simple dream: to create the perfect
                burger experience. What started as a passion project has grown into
                a beloved Western Canadian institution, serving hungry customers
                across two locations.
              </p>
              <p>
                Our founders believed that a great burger isn&apos;t just about the
                ingredients - it&apos;s about the experience. From the moment you
                walk through our doors to that first satisfying bite, we want every
                visit to Burger Heaven to be memorable.
              </p>
              <p>
                Today, we&apos;re proud to serve thousands of burger lovers every
                week, each one getting the same attention to quality and flavor that
                we&apos;ve been known for since day one.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6 text-center">
              OUR STORY IN ACTION
            </h2>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/138351283?title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Burger Heaven Story Video"
              ></iframe>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                QUALITY FIRST
              </h3>
              <p className="text-accent-800">
                We source only the finest ingredients and prepare everything fresh
                daily.
              </p>
            </div>
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.25s' }}>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                MADE WITH PASSION
              </h3>
              <p className="text-accent-800">
                Every burger is crafted with care by our experienced kitchen team.
              </p>
            </div>
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                COMMUNITY FOCUSED
              </h3>
              <p className="text-accent-800">
                We&apos;re proud members of our local communities and support local
                suppliers.
              </p>
            </div>
          </div>

          {/* What Makes Us Special */}
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              WHAT MAKES US SPECIAL
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Premium Ingredients
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  We use 100% Canadian beef, fresh produce, and artisan buns baked
                  daily. No frozen patties, no shortcuts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Signature Recipes
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  Our unique burger combinations are the result of years of
                  experimentation and customer feedback. From the classic Works
                  Burger to the legendary Mile High, each creation tells a story.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Family Atmosphere
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  Whether you&apos;re dining solo, on a date, or bringing the whole
                  family, our friendly staff ensures you feel right at home.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Generous Portions
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  We believe in giving you great value. Our burgers are substantial,
                  our fries are plentiful, and you&apos;ll never leave hungry.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass-card rounded-2xl p-12 text-accent-900 animate-fade-in-up border-2 border-primary-500/20" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-4">
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p className="text-xl text-accent-800 mb-8 font-light">
              Visit us today and taste what makes Burger Heaven special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Our Menu
              </Link>
              <Link
                href="/locations"
                className="inline-block rounded-full bg-wood-200 hover:bg-wood-300 text-accent-900 px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
