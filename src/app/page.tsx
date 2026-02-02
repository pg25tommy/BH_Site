import Link from 'next/link';
import Image from 'next/image';
import FeaturedItems from '@/components/FeaturedItems';
import menuData from '@/data/menuData.json';
import locationsData from '@/data/locations.json';
import { MenuData, Location } from '@/types/menu';
import { getDailyFeaturedItems } from '@/utils/featuredItems';

const menu = menuData as MenuData;
const locations = locationsData.locations as Location[];

export default function Home() {
  const featuredItems = getDailyFeaturedItems(menu, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative wood-panel text-wood-50 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/30 to-wood-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Image on Left */}
            <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up group md:-ml-8">
              <Image
                src="/images/atmosphere/Outside_Hero.jpg"
                alt="Burger Heaven Restaurant Exterior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/40 to-transparent"></div>
            </div>

            {/* Text on Right */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6 tracking-wide text-primary-500 animate-fade-in-up" style={{ textShadow: '0 4px 20px rgba(234, 88, 12, 0.4)', animationDelay: '0.1s' }}>
                WELCOME TO BURGER HEAVEN
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-wood-100 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Experience the ultimate burger paradise with our signature creations,
                crafted with premium ingredients and served with passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link
                  href="/menu"
                  className="btn-primary group inline-block bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10">View Our Menu</span>
                </Link>
                <a
                  href="https://www.skipthedishes.com/burger-heaven-new-westminster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block glass-card text-accent-900 font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Order Online - Skip the Dishes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section - Changes Daily */}
      <FeaturedItems items={featuredItems} showDate={true} />

      {/* Mile High Challenge Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-wood-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                THE MILE HIGH CHALLENGE
              </h2>
              <p className="text-lg text-wood-100 leading-relaxed font-light">
                Think you can handle Ernie&apos;s Mile High Burger? This towering
                masterpiece features multiple patties, bacon, cheese, and everything
                in between. Finish it and join the exclusive Mile High Club!
              </p>
              <Link
                href="/mile-high-club"
                className="inline-block glass-card text-accent-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                Take the Challenge
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-10 text-center backdrop-blur-xl">
              <div className="text-7xl font-heading mb-3 bg-gradient-to-br from-primary-700 to-primary-900 bg-clip-text text-transparent">
                $72.69
              </div>
              <p className="text-xl text-accent-900 font-semibold">The Ultimate Burger Challenge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-wood-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-accent-900 mb-3">
              VISIT US
            </h2>
            <p className="text-lg text-accent-700 font-light">
              Serving New Westminster, BC
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="diner-card rounded-2xl p-8 group"
              >
                <h3 className="text-2xl font-heading text-primary-700 mb-6">
                  {location.name.toUpperCase()}
                </h3>
                <div className="space-y-3 text-accent-800 mb-8">
                  <p className="flex items-start gap-2">
                    <span className="text-primary-600">📍</span>
                    <span>{location.address}, {location.city}, {location.province} {location.postalCode}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-600">📞</span>
                    <span className="font-semibold">{location.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-600">🕐</span>
                    <span className="text-sm">{location.hours.weekday}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-600">🕐</span>
                    <span className="text-sm">{location.hours.weekend}</span>
                  </p>
                </div>
                <a
                  href="https://www.skipthedishes.com/burger-heaven-new-westminster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="relative z-10">Order Now - Skip the Dishes</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

