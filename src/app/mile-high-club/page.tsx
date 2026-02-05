import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Mile High Club Challenge | Burger Heaven',
  description: 'Think you can finish Ernie\'s Mile High Burger? Take the challenge and join the exclusive Mile High Club!',
};

const winners = [
  { id: 1, image: '/images/atmosphere/Ernies_1st.jpg', place: '1st' },
  { id: 2, image: '/images/atmosphere/Ernies_2nd.jpg', place: '2nd' },
  { id: 3, image: '/images/atmosphere/Ernies_3rd.jpg', place: '3rd' },
  { id: 4, image: '/images/atmosphere/Ernies_4th.jpg', place: '4th' },
  { id: 5, image: '/images/atmosphere/Ernies_5th.jpg', place: '5th' },
  { id: 6, image: '/images/atmosphere/Ernies_6th.jpg', place: '6th' },
  { id: 7, image: '/images/atmosphere/Ernies_7th.jpg', place: '7th' },
  { id: 8, image: '/images/atmosphere/Ernies_8th.jpg', place: '8th' },
];

export default function MileHighClubPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-wider" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              THE MILE HIGH CHALLENGE
            </h1>
            <div className="text-6xl md:text-8xl font-heading mb-4 text-wood-50" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              $72.69
            </div>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Ernie&apos;s Mile High Burger
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Details */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Hall of Fame */}
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6 text-center">
              HALL OF FAME
            </h2>
            <p className="text-center text-accent-800 mb-8 leading-relaxed">
              These brave souls have conquered the Mile High Challenge
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {winners.map((winner) => (
                <div
                  key={winner.id}
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-wood-400 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <Image
                    src={winner.image}
                    alt={`Mile High Challenge Winner - ${winner.place} Place`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {winner.id === 1 && (
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 font-bold text-xs animate-pulse">
                        <TrophyIcon className="w-4 h-4" />
                        1ST PLACE
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <span className="text-white font-semibold text-sm">{winner.place} Place Winner</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              THE CHALLENGE
            </h2>
            <p className="text-lg text-accent-800 mb-6 leading-relaxed">
              Think you have what it takes? The Mile High Burger is our ultimate
              challenge - a towering masterpiece that will test your limits. This
              isn&apos;t just a burger; it&apos;s a rite of passage.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-2xl">
              <h3 className="font-heading text-2xl text-accent-900 mb-4">
                WHAT YOU GET:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-800">Multiple premium beef patties stacked sky-high</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-800">Layers of crispy bacon and melted cheese</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-800">All the toppings - lettuce, tomato, onions, pickles, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-800">A mountain of fresh-cut fries on the side</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-accent-800">Your photo on our Wall of Fame if you succeed!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rules */}
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              THE RULES
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-accent-800">
              <li className="text-lg">You must finish the entire burger and all the fries within 45 minutes</li>
              <li className="text-lg">No sharing - this is a solo challenge</li>
              <li className="text-lg">You can drink water or beverages during the challenge</li>
              <li className="text-lg">If you leave the table, the challenge is over</li>
              <li className="text-lg">Photos will be taken before, during, and after for our gallery</li>
              <li className="text-lg">Reservations recommended - call ahead to prepare your challenge</li>
            </ol>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              WINNERS GET:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Wall of Fame</h3>
                  <p className="leading-relaxed">Your photo displayed proudly in our restaurant</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">T-Shirt</h3>
                  <p className="leading-relaxed">Exclusive Mile High Club t-shirt</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Bragging Rights</h3>
                  <p className="leading-relaxed">Forever known as a Burger Heaven legend</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              READY TO TAKE THE CHALLENGE?
            </h2>
            <p className="text-lg text-accent-800 mb-8 leading-relaxed">
              Call ahead to book your challenge and prepare your stomach!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/locations"
                className="bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Find a Location
              </Link>
              <Link
                href="/menu"
                className="bg-wood-200 hover:bg-wood-300 text-accent-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
